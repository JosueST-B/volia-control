"use client";

import { useEffect, useState } from "react";
import {
  getCloudConfig,
  pullFromCloud,
  pushToCloud,
  saveCloudConfig,
  type CloudConfig,
} from "../lib/cloud-sync";

export default function CloudSyncModal() {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<CloudConfig>(() => getCloudConfig());
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "info" } | null>(null);
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    const refresh = () => setConfig(getCloudConfig());
    window.addEventListener("volia-cloud-sync-updated", refresh);
    return () => window.removeEventListener("volia-cloud-sync-updated", refresh);
  }, []);

  // Auto-sync periódica cada 5 minutos si está activa
  useEffect(() => {
    if (!config.autoSync) return;
    const interval = window.setInterval(() => {
      if (navigator.onLine && config.status !== "syncing") {
        pushToCloud().catch(() => undefined);
      }
    }, 5 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, [config.autoSync, config.status]);

  const handlePush = async () => {
    setLoading(true);
    setMessage({ text: "Sincronizando y guardando en la nube…", type: "info" });
    const res = await pushToCloud();
    setLoading(false);
    setMessage({ text: res.message, type: res.success ? "success" : "error" });
    setConfig(getCloudConfig());
  };

  const handlePull = async () => {
    if (
      !window.confirm(
        "¿Desea descargar y aplicar los datos más recientes desde la nube? Se actualizará la información en esta computadora."
      )
    )
      return;

    setLoading(true);
    setMessage({ text: "Descargando datos desde la nube…", type: "info" });
    const res = await pullFromCloud();
    setLoading(false);
    setMessage({ text: res.message, type: res.success ? "success" : "error" });
    setConfig(getCloudConfig());
    if (res.success && res.count) {
      window.setTimeout(() => window.location.reload(), 1200);
    }
  };

  const handleSaveConfig = () => {
    saveCloudConfig(config);
    setMessage({ text: "Configuración de nube guardada con éxito.", type: "success" });
  };

  const statusLabel =
    config.status === "syncing"
      ? "Sincronizando…"
      : config.status === "error"
      ? "Error en nube"
      : config.status === "offline"
      ? "Sin conexión"
      : config.lastSync
      ? "Nube activa"
      : "Nube lista";

  const statusDotClass =
    config.status === "syncing"
      ? "yellow"
      : config.status === "error" || config.status === "offline"
      ? "red"
      : config.lastSync
      ? "green"
      : "blue";

  return (
    <>
      <button
        className="cloud-sync-trigger"
        onClick={() => {
          setConfig(getCloudConfig());
          setMessage(null);
          setOpen(true);
        }}
        title="Sincronización en la Nube"
      >
        <span className={`cloud-dot ${statusDotClass}`}></span>
        <span>☁ Nube: {statusLabel}</span>
      </button>

      {open && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
        >
          <section
            className="install-modal cloud-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Sincronización en la Nube"
          >
            <header>
              <div>
                <p className="eyebrow">INFRAESTRUCTURA DE SINCRONIZACIÓN</p>
                <h2>Sincronización en la Nube (Cloud Sync)</h2>
              </div>
              <button aria-label="Cerrar" onClick={() => setOpen(false)}>
                ×
              </button>
            </header>

            <div className="install-options">
              <article className="cloud-action-card">
                <span className="option-number">01</span>
                <h3>Acciones de Nube</h3>
                <p>
                  Sincronice sus cotizaciones, cirugías, finanzas, inventario e
                  historial entre sus computadoras autorizadas.
                </p>
                <div className="inline-actions" style={{ marginTop: "12px" }}>
                  <button
                    className="primary-button"
                    disabled={loading}
                    onClick={handlePush}
                  >
                    {loading ? "Procesando…" : "↑ Subir a la Nube (Push)"}
                  </button>
                  <button
                    className="secondary-button"
                    disabled={loading}
                    onClick={handlePull}
                  >
                    ↓ Descargar de la Nube (Pull)
                  </button>
                </div>
                <small style={{ display: "block", marginTop: "10px", color: "var(--muted)" }}>
                  {config.lastSync
                    ? `Última sincronización: ${new Date(config.lastSync).toLocaleString("es-EC")}`
                    : "Aún no se ha realizado la primera sincronización."}
                </small>
              </article>

              <article>
                <span className="option-number">02</span>
                <h3>Cifrado de Grado Médico (AES-256)</h3>
                <p>
                  Para proteger los datos confidenciales de pacientes, puede establecer
                  una clave maestra. Los datos se cifrarán en su navegador antes de
                  enviarse a la red.
                </p>
                <div className="pin-row" style={{ marginTop: "10px" }}>
                  <input
                    type={showKey ? "text" : "password"}
                    placeholder="Clave de cifrado (opcional)"
                    value={config.encryptionKey}
                    onChange={(e) =>
                      setConfig((c) => ({ ...c, encryptionKey: e.target.value }))
                    }
                  />
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => setShowKey(!showKey)}
                  >
                    {showKey ? "Ocultar" : "Ver"}
                  </button>
                </div>
              </article>

              <article>
                <span className="option-number">03</span>
                <h3>Ajustes de Conexión</h3>
                <p>
                  Servidor de sincronización y automatización en segundo plano.
                </p>
                <div className="business-form" style={{ marginTop: "8px" }}>
                  <label>
                    <span>Endpoint de la Nube</span>
                    <input
                      type="text"
                      value={config.endpoint}
                      placeholder="/api/sync o URL externa"
                      onChange={(e) =>
                        setConfig((c) => ({ ...c, endpoint: e.target.value }))
                      }
                    />
                  </label>
                  <label className="checkbox-row" style={{ marginTop: "10px" }}>
                    <input
                      type="checkbox"
                      checked={config.autoSync}
                      onChange={(e) =>
                        setConfig((c) => ({ ...c, autoSync: e.target.checked }))
                      }
                    />
                    <span>
                      <strong>Sincronización Automática en segundo plano</strong> (cada 5
                      minutos al detectar conexión)
                    </span>
                  </label>
                </div>
                <div style={{ marginTop: "12px" }}>
                  <button className="secondary-button" onClick={handleSaveConfig}>
                    Guardar ajustes
                  </button>
                </div>
              </article>
            </div>

            {message && (
              <div className={`install-message ${message.type}`}>
                {message.text}
              </div>
            )}

            <footer>
              <strong>Seguridad y Respaldo Híbrido</strong>
              <span>
                Volia Control mantiene copia local para trabajar sin conexión y
                sincroniza en la nube para disponibilidad y respaldo centralizado.
              </span>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}