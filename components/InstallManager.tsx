"use client";

import { useEffect, useRef, useState } from "react";
import { getMemorySummary, type MemorySummary } from "../lib/volia-memory";
import { BACKUP_KEYS, isValidBackupValue, STORAGE_KEYS } from "../lib/storage";
import { businessIsoDate } from "../lib/date-utils";

type InstallPrompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: "accepted" | "dismissed" }> };

const hashPin = async (pin: string) => {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`volia-control:${pin}`));
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
};

export default function InstallManager() {
  const [installPrompt, setInstallPrompt] = useState<InstallPrompt | null>(null);
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const [hasPin, setHasPin] = useState(false);
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [memory, setMemory] = useState<MemorySummary>(() => getMemorySummary());
  const importRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/service-worker.js").catch(() => undefined);
    const restoreTimer = window.setTimeout(() => {
      const existing = !!localStorage.getItem("volia-pin-hash-v1");
      setHasPin(existing); setLocked(existing);
    }, 0);
    const handler = (event: Event) => { event.preventDefault(); setInstallPrompt(event as InstallPrompt); };
    const refreshMemory = () => setMemory(getMemorySummary());
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("volia-memory-updated", refreshMemory);
    return () => { window.clearTimeout(restoreTimer); window.removeEventListener("beforeinstallprompt", handler); window.removeEventListener("volia-memory-updated", refreshMemory); };
  }, []);

  const install = async () => {
    if (!installPrompt) { setMessage("En Chrome o Edge abre el menú del navegador y elige “Instalar Volia Control”."); return; }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    setMessage(choice.outcome === "accepted" ? "Instalación iniciada correctamente." : "Instalación cancelada.");
    if (choice.outcome === "accepted") setInstallPrompt(null);
  };

  const exportBackup = () => {
    const data: Record<string, string> = {};
    BACKUP_KEYS.forEach((key) => {
      if (key === STORAGE_KEYS.lastBackup || key === STORAGE_KEYS.memoryUpdated) return;
      const value = localStorage.getItem(key);
      if (value !== null && isValidBackupValue(key, value)) data[key] = value;
    });
    const blob = new Blob([JSON.stringify({ product: "Volia Control", version: 2, exportedAt: new Date().toISOString(), data }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob); const link = document.createElement("a");
    link.href = url; link.download = `respaldo-volia-${businessIsoDate()}.json`; link.click(); URL.revokeObjectURL(url);
    localStorage.setItem("volia-last-backup-v1", new Date().toISOString()); setMemory(getMemorySummary()); setMessage("Respaldo completo descargado.");
  };

  const importBackup = async (file?: File) => {
    if (!file) return;
    try {
      if (file.size > 8 * 1024 * 1024) throw new Error();
      const parsed = JSON.parse(await file.text()) as { product?: string; version?: number; data?: Record<string, string> };
      if (parsed.product !== "Volia Control" || !parsed.data) throw new Error();
      const validEntries = Object.entries(parsed.data).filter(([key, value]) => BACKUP_KEYS.has(key) && key !== STORAGE_KEYS.lastBackup && key !== STORAGE_KEYS.memoryUpdated && typeof value === "string" && isValidBackupValue(key, value));
      if (!validEntries.length) throw new Error();
      validEntries.forEach(([key, value]) => localStorage.setItem(key, value));
      localStorage.setItem(STORAGE_KEYS.memoryUpdated, new Date().toISOString());
      setMessage("Respaldo restaurado. Recargando la aplicación…"); window.setTimeout(() => window.location.reload(), 700);
    } catch { setMessage("El archivo no es un respaldo válido de Volia Control."); }
  };

  const savePin = async () => {
    if (!/^\d{4,8}$/.test(pin)) return setMessage("El PIN debe contener entre 4 y 8 números.");
    localStorage.setItem("volia-pin-hash-v1", await hashPin(pin)); setHasPin(true); setPin(""); setMessage("PIN local configurado.");
  };
  const unlock = async () => {
    if (await hashPin(pin) === localStorage.getItem("volia-pin-hash-v1")) { setLocked(false); setPin(""); setMessage(""); }
    else setMessage("PIN incorrecto.");
  };
  const removePin = () => { localStorage.removeItem("volia-pin-hash-v1"); setHasPin(false); setLocked(false); setPin(""); setMessage("Bloqueo local desactivado."); };

  if (locked) return <div className="app-lock"><div className="lock-card"><div className="lock-logo">V</div><p className="eyebrow">ACCESO PROTEGIDO</p><h1>Volia Control</h1><p>Ingrese el PIN local para acceder a la información comercial y operativa de este dispositivo.</p><input autoFocus inputMode="numeric" type="password" value={pin} maxLength={8} placeholder="PIN de acceso" onChange={(event) => setPin(event.target.value.replace(/\D/g, ""))} onKeyDown={(event) => event.key === "Enter" && unlock()} /><button className="primary-button" onClick={unlock}>Desbloquear aplicación</button>{message && <small>{message}</small>}</div></div>;

  return <>
    <button className="install-trigger" onClick={() => { setMemory(getMemorySummary()); setOpen(true); }}><span>↓</span> Instalar y respaldar</button>
    {open && <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><section className="install-modal" role="dialog" aria-modal="true" aria-label="Instalación, memoria y seguridad"><header><div><p className="eyebrow">CENTRO DE LA APLICACIÓN</p><h2>Instalación, memoria, respaldo y seguridad</h2></div><button aria-label="Cerrar" onClick={() => setOpen(false)}>×</button></header>
      <div className="install-options">
        <article><span className="option-number">01</span><h3>Instalar en esta laptop</h3><p>Abre Volia Control como un programa independiente y permite seguir trabajando aunque la conexión se interrumpa.</p><button className="primary-button" onClick={install}>Instalar Volia Control</button></article>
        <article><span className="option-number">02</span><h3>Copia de seguridad</h3><p>Descarga todos los registros locales en un archivo recuperable. Guárdelo en una ubicación segura.</p><div className="inline-actions"><button className="secondary-button" onClick={exportBackup}>Descargar respaldo</button><button className="secondary-button" onClick={() => importRef.current?.click()}>Restaurar</button></div><input ref={importRef} hidden type="file" accept="application/json,.json" onChange={(event) => importBackup(event.target.files?.[0])} /></article>
        <article><span className="option-number">03</span><h3>Bloqueo con PIN</h3><p>Protege los datos guardados en esta laptop frente a accesos casuales. No sustituye el cifrado del dispositivo.</p><div className="pin-row"><input inputMode="numeric" type="password" value={pin} maxLength={8} placeholder="PIN de 4–8 dígitos" onChange={(event) => setPin(event.target.value.replace(/\D/g, ""))} />{hasPin ? <><button className="secondary-button" onClick={() => setLocked(true)}>Bloquear</button><button className="text-danger" onClick={removePin}>Quitar PIN</button></> : <button className="secondary-button" onClick={savePin}>Crear PIN</button>}</div></article>
        <article className="memory-option"><span className="option-number">04</span><h3>Memoria Volia</h3><p>Integra en un solo respaldo las ofertas, cirugías, inventario, movimientos, finanzas y documentos de esta laptop.</p><div className="memory-stats"><span><strong>{memory.quotes}</strong> ofertas</span><span><strong>{memory.cases}</strong> casos</span><span><strong>{memory.movements}</strong> movimientos</span><span><strong>{memory.finance}</strong> finanzas</span></div><small>{memory.lastBackup ? `Último respaldo: ${new Date(memory.lastBackup).toLocaleString("es-EC")}` : "Todavía no se ha descargado un respaldo."}</small></article>
      </div>{message && <div className="install-message">{message}</div>}<footer><strong>Datos locales</strong><span>Volia Control no sincroniza información entre computadoras. Use el respaldo para trasladar o recuperar registros.</span></footer>
    </section></div>}
  </>;
}
