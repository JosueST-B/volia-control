"use client";

import { useEffect, useMemo, useState } from "react";
import { exportBusinessPdf, exportBusinessWord, type BusinessExport } from "../lib/business-exports";
import { downloadCsv } from "../lib/csv";
import { businessIsoDate } from "../lib/date-utils";
import { DEFAULT_STOCK, INVENTORY_KEY, LEGACY_SAMPLE_STOCK_IDS, MOVEMENTS_KEY, type StockItem, type StockMovement } from "../lib/inventory-data";
import { readStoredArray, writeStoredJson } from "../lib/storage";
import { recordActivity } from "../lib/activity-log";

const money = (value: number) => new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value || 0);
const daysTo = (date: string) => date ? Math.ceil((new Date(`${date}T23:59:59`).getTime() - Date.now()) / 86400000) : Infinity;
const EMPTY: StockItem = { id: "", code: "", product: "", lot: "", expiry: "", location: "Bodega principal", stock: 0, reserved: 0, minimum: 2, unitCost: 0 };

export default function InventoryTracker() {
  const [items, setItems] = useState<StockItem[]>([]); const [draft, setDraft] = useState(EMPTY); const [show, setShow] = useState(false); const [query, setQuery] = useState(""); const [ready, setReady] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => { try { const stored = readStoredArray<StockItem>(INVENTORY_KEY, DEFAULT_STOCK); const clean = stored.filter((item) => !LEGACY_SAMPLE_STOCK_IDS.has(item.id)).map((item) => ({ ...item, stock: Math.max(0, Number(item.stock) || 0), reserved: Math.min(Math.max(0, Number(item.reserved) || 0), Math.max(0, Number(item.stock) || 0)) })); setItems(clean); if (clean.length !== stored.length || clean.some((item, index) => item.reserved !== stored[index]?.reserved)) writeStoredJson(INVENTORY_KEY, clean); } catch { setItems(DEFAULT_STOCK); } setReady(true); }, 0); return () => window.clearTimeout(timer); }, []);
  useEffect(() => { if (ready) writeStoredJson(INVENTORY_KEY, items); }, [items, ready]);
  const enriched = useMemo(() => items.map((item) => ({ ...item, available: Math.max(0, item.stock - item.reserved), low: item.stock - item.reserved <= item.minimum, expiryDays: daysTo(item.expiry) })), [items]);
  const visible = enriched.filter((item) => [item.code, item.product, item.lot, item.location].some((value) => value.toLowerCase().includes(query.toLowerCase())));
  const kpis = { value: enriched.reduce((sum, item) => sum + item.stock * item.unitCost, 0), available: enriched.reduce((sum, item) => sum + item.available, 0), low: enriched.filter((item) => item.low).length, expiring: enriched.filter((item) => item.expiryDays <= 120).length };
  const closeForm = () => { setDraft(EMPTY); setShow(false); };
  const save = () => {
    if (!draft.product.trim() || draft.stock < 0) return;
    const normalized = { ...draft, id: draft.id || `${Date.now()}`, product: draft.product.trim().toUpperCase(), reserved: Math.min(draft.reserved, draft.stock) };
    setItems((current) => draft.id ? current.map((item) => item.id === draft.id ? normalized : item) : [normalized, ...current]);
    recordActivity("Inventario", draft.id ? "Producto actualizado" : "Producto registrado", `${normalized.product} · Stock ${normalized.stock}`);
    closeForm();
  };
  const edit = (item: StockItem) => { setDraft({ ...item }); setShow(true); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const remove = (item: StockItem) => {
    if (!window.confirm(`¿Eliminar ${item.product}${item.lot ? `, lote ${item.lot}` : ""}? El historial de movimientos se conservará.`)) return;
    setItems((current) => current.filter((entry) => entry.id !== item.id));
    recordActivity("Inventario", "Producto eliminado", `${item.product} · ${item.lot || "Sin lote"}`);
    if (draft.id === item.id) closeForm();
  };
  const adjust = (id: string, field: "stock" | "reserved", amount: number) => setItems((current) => current.map((item) => {
    if (item.id !== id) return item;
    const next = { ...item, [field]: Math.max(0, item[field] + amount) };
    if (field === "stock") next.reserved = Math.min(next.reserved, next.stock);
    if (field === "reserved") next.reserved = Math.min(next.reserved, next.stock);
    if (field === "stock" && next.stock !== item.stock) {
      try {
        const saved = readStoredArray<StockMovement>(MOVEMENTS_KEY);
        const movement: StockMovement = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, date: businessIsoDate(), type: amount > 0 ? "adjustment-in" : "adjustment-out", itemId: item.id, code: item.code, product: item.product, quantity: Math.abs(next.stock - item.stock), unitCost: item.unitCost, unitPrice: 0, note: "Ajuste rápido desde inventario" };
        writeStoredJson(MOVEMENTS_KEY, [movement, ...saved]);
      } catch { /* El ajuste de stock continúa aunque no se pueda guardar el historial. */ }
    }
    return next;
  }));
  const exportCsv = () => { const rows = [["Código", "Producto", "Lote", "Caducidad", "Ubicación", "Stock", "Reservado", "Disponible", "Costo unitario"], ...enriched.map((item) => [item.code, item.product, item.lot, item.expiry, item.location, item.stock, item.reserved, item.available, item.unitCost])]; downloadCsv(rows, `inventario-volia-${businessIsoDate()}.csv`); };
  const exportPayload = (): BusinessExport => ({ title: "Inventario, lotes y caducidades", subtitle: `Reporte al ${new Date().toLocaleDateString("es-EC")}`, metadata: [["Productos / lotes", enriched.length], ["Unidades disponibles", kpis.available], ["Alertas de stock bajo", kpis.low], ["Caducidad menor a 120 días", kpis.expiring], ["Valor registrado", money(kpis.value)]], tables: [{ title: "Existencias", headers: ["Código", "Producto", "Lote", "Caducidad", "Stock", "Reservado", "Disponible"], rows: enriched.map((item) => [item.code, item.product, item.lot, item.expiry, item.stock, item.reserved, item.available]) }], disclaimer: "Reporte institucional de VOLIA S.A.S. Verifique existencias, lotes y caducidades mediante conteo físico." });
  return <section className="business-module"><div className="module-hero"><div><p className="eyebrow">TRAZABILIDAD OPERATIVA</p><h2>Inventario, lotes y caducidades</h2><p>Controla existencias reales, material reservado, alertas de reposición y productos próximos a vencer.</p></div><div className="hero-actions export-actions"><button className="secondary-button" onClick={() => exportBusinessPdf(exportPayload(), "inventario-volia")}>PDF</button><button className="secondary-button" onClick={() => exportBusinessWord(exportPayload(), "inventario-volia")}>Word</button><button className="secondary-button" onClick={exportCsv}>Excel/CSV</button><button className="primary-button" onClick={() => show ? closeForm() : setShow(true)}>{show ? "Cerrar" : "+ Registrar producto"}</button></div></div>
    <div className="business-kpis"><article><span>VALOR EN INVENTARIO</span><strong>{money(kpis.value)}</strong><small>Según costos registrados</small></article><article><span>UNIDADES DISPONIBLES</span><strong>{kpis.available}</strong><small>Stock menos reservas</small></article><article className={kpis.low ? "warn" : ""}><span>STOCK BAJO</span><strong>{kpis.low}</strong><small>En mínimo o por debajo</small></article><article className={kpis.expiring ? "danger" : ""}><span>CADUCIDAD &lt; 120 DÍAS</span><strong>{kpis.expiring}</strong><small>Requieren priorización</small></article></div>
    {show && <section className="business-card"><div className="section-heading"><div><p className="eyebrow">{draft.id ? "EDICIÓN" : "NUEVO REGISTRO"}</p><h3>{draft.id ? "Corregir producto o lote" : "Producto o lote"}</h3></div></div><div className="business-form">{([['code','Código IESS'],['product','Producto *'],['lot','Lote / serie'],['expiry','Caducidad'],['location','Ubicación']] as const).map(([key,label]) => <label key={key}><span>{label}</span><input type={key === 'expiry' ? 'date' : 'text'} value={draft[key]} onChange={(e) => setDraft({ ...draft, [key]: e.target.value })} /></label>)}{([['stock','Stock físico'],['reserved','Reservado'],['minimum','Mínimo'],['unitCost','Costo unitario']] as const).map(([key,label]) => <label key={key}><span>{label}</span><input type="number" min="0" step={key === 'unitCost' ? '.01' : '1'} value={draft[key] || ''} onChange={(e) => setDraft({ ...draft, [key]: Math.max(0, Number(e.target.value) || 0) })} /></label>)}</div><div className="form-end"><span>Los cambios quedan guardados en este dispositivo.</span><div className="record-actions"><button className="secondary-button" onClick={closeForm}>Cancelar</button><button className="primary-button" disabled={!draft.product.trim()} onClick={save}>{draft.id ? "Guardar cambios" : "Guardar producto"}</button></div></div></section>}
    <section className="business-card"><div className="section-heading"><div><p className="eyebrow">EXISTENCIAS</p><h3>Inventario registrado</h3></div><input className="module-search" placeholder="Buscar código, producto, lote o ubicación" value={query} onChange={(e) => setQuery(e.target.value)} /></div><div className="inventory-list">{visible.map((item) => <article className={`inventory-row ${item.low ? 'is-low' : ''}`} key={item.id}><div className="inventory-name"><span className={`status-dot ${item.low ? 'red' : item.expiryDays <= 120 ? 'yellow' : 'green'}`}></span><div><strong>{item.product}</strong><small>{item.code || 'Sin código'} · Lote {item.lot || 'no registrado'} · {item.location}</small></div></div><div className="inventory-metrics"><div><span>FÍSICO</span><strong>{item.stock}</strong></div><div><span>RESERVADO</span><strong>{item.reserved}</strong></div><div><span>DISPONIBLE</span><strong>{item.available}</strong></div><div><span>CADUCIDAD</span><strong>{item.expiry || 'Sin fecha'}</strong><small>{item.expiryDays <= 120 ? `${item.expiryDays} días` : 'Vigente'}</small></div></div><div className="stock-actions"><button onClick={() => adjust(item.id, 'stock', -1)}>− ajuste</button><button onClick={() => adjust(item.id, 'stock', 1)}>+ ajuste</button><button onClick={() => adjust(item.id, 'reserved', item.reserved ? -1 : 1)}>{item.reserved ? '− reserva' : '+ reserva'}</button><button onClick={() => edit(item)}>Editar</button><button className="danger-link" onClick={() => remove(item)}>Eliminar</button></div></article>)}{!visible.length && <div className="module-empty">No hay productos que coincidan con la búsqueda.</div>}</div></section>
  </section>;
}
