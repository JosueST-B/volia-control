"use client";

import { useEffect, useState } from "react";
import { activityDateLabel, type ActivityEntry } from "../lib/activity-log";
import { businessIsoDate } from "../lib/date-utils";
import { type StockItem } from "../lib/inventory-data";
import { getMemorySummary, type MemorySummary } from "../lib/volia-memory";
import { readStoredArray, STORAGE_KEYS } from "../lib/storage";

type CaseSummary = { status: string; amount: number; paidAmount: number; dueDate: string; patient: string };
type FinanceSummary = { status: string; direction: "income" | "expense"; dueDate: string; subtotal: number; iva: number; withholding: number; counterparty: string };

const EMPTY: MemorySummary = { quotes: 0, cases: 0, inventory: 0, movements: 0, finance: 0, documents: 0, lastBackup: null };
const money = (value: number) => new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value || 0);
const expired = (date: string) => !!date && date < businessIsoDate();

export default function HomeDashboard({ onNavigate }: { onNavigate: (module: string) => void }) {
  const [memory, setMemory] = useState<MemorySummary>(EMPTY);
  const [cases, setCases] = useState<CaseSummary[]>([]);
  const [finance, setFinance] = useState<FinanceSummary[]>([]);
  const [inventory, setInventory] = useState<StockItem[]>([]);
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const [expiryLimit] = useState(() => new Date(Date.now() + 120 * 86400000).toISOString().slice(0, 10));

  useEffect(() => {
    const load = () => {
      setMemory(getMemorySummary());
      setCases(readStoredArray<CaseSummary>(STORAGE_KEYS.cases));
      setFinance(readStoredArray<FinanceSummary>(STORAGE_KEYS.financeRecords));
      setInventory(readStoredArray<StockItem>(STORAGE_KEYS.inventory));
      setActivity(readStoredArray<ActivityEntry>(STORAGE_KEYS.activityLog));
    };
    load();
    window.addEventListener("volia-memory-updated", load);
    window.addEventListener("volia-activity-updated", load);
    window.addEventListener("storage", load);
    return () => {
      window.removeEventListener("volia-memory-updated", load);
      window.removeEventListener("volia-activity-updated", load);
      window.removeEventListener("storage", load);
    };
  }, []);

  const pendingCases = cases.filter((item) => item.status !== "paid");
  const pendingValue = pendingCases.reduce((sum, item) => sum + Math.max(0, Number(item.amount || 0) - Number(item.paidAmount || 0)), 0);
  const overdueCases = pendingCases.filter((item) => expired(item.dueDate));
  const overdueFinance = finance.filter((item) => item.status !== "paid" && expired(item.dueDate));
  const lowStock = inventory.filter((item) => Math.max(0, item.stock - item.reserved) <= item.minimum);
  const expiring = inventory.filter((item) => item.expiry && item.expiry <= expiryLimit);
  const alerts = [
    ...(overdueCases.length ? [{ level: "danger", title: `${overdueCases.length} cobro(s) vencido(s)`, detail: "Revise los expedientes y contacte a la entidad.", target: "cases" }] : []),
    ...(overdueFinance.length ? [{ level: "danger", title: `${overdueFinance.length} obligación(es) financiera(s) vencida(s)`, detail: "Actualice el pago o la fecha de vencimiento.", target: "finance" }] : []),
    ...(lowStock.length ? [{ level: "warning", title: `${lowStock.length} producto(s) con stock bajo`, detail: "Confirme existencias y prepare reposición.", target: "inventory" }] : []),
    ...(expiring.length ? [{ level: "warning", title: `${expiring.length} lote(s) próximos a caducar`, detail: "Priorice su uso o gestione la devolución.", target: "inventory" }] : []),
    ...(!memory.lastBackup ? [{ level: "info", title: "Todavía no existe un respaldo", detail: "Descargue una copia desde Instalar y respaldar.", target: "help" }] : []),
  ];

  return (
    <section className="home-dashboard">
      <div className="welcome-panel">
        <div>
          <p className="eyebrow">PANEL DE INICIO</p>
          <h2>¿Qué necesita hacer hoy?</h2>
          <p>Elija una acción. Volia guardará el avance automáticamente en esta computadora.</p>
        </div>
        <button className="primary-button big-action" onClick={() => onNavigate("quote")}>Crear una cotización</button>
      </div>

      <div className="quick-actions" aria-label="Acciones principales">
        <button onClick={() => onNavigate("quote")}><span>1</span><strong>Nueva cotización</strong><small>Calcular precios y generar PDF</small></button>
        <button onClick={() => onNavigate("cases")}><span>2</span><strong>Registrar cirugía</strong><small>Controlar documentos y cobro</small></button>
        <button onClick={() => onNavigate("inventory")}><span>3</span><strong>Revisar inventario</strong><small>Ver stock, reservas y caducidad</small></button>
        <button onClick={() => onNavigate("finance")}><span>4</span><strong>Revisar finanzas</strong><small>Consultar caja y vencimientos</small></button>
      </div>

      <div className="dashboard-kpis">
        <article><span>POR COBRAR</span><strong>{money(pendingValue)}</strong><small>{pendingCases.length} expediente(s) pendiente(s)</small></article>
        <article className={overdueCases.length ? "danger" : ""}><span>COBROS VENCIDOS</span><strong>{overdueCases.length}</strong><small>Necesitan seguimiento</small></article>
        <article className={lowStock.length ? "warn" : ""}><span>STOCK BAJO</span><strong>{lowStock.length}</strong><small>Productos para revisar</small></article>
        <article><span>REGISTROS GUARDADOS</span><strong>{memory.quotes + memory.cases + memory.inventory + memory.finance}</strong><small>En esta computadora</small></article>
      </div>

      <div className="home-grid">
        <section className="business-card alert-center">
          <div className="section-heading"><div><p className="eyebrow">PRIORIDADES</p><h3>Alertas que requieren atención</h3></div></div>
          {alerts.length ? alerts.map((alert, index) => <button key={`${alert.title}-${index}`} className={`alert-row ${alert.level}`} onClick={() => onNavigate(alert.target)}><span className="alert-symbol">{alert.level === "danger" ? "!" : alert.level === "warning" ? "△" : "i"}</span><div><strong>{alert.title}</strong><small>{alert.detail}</small></div><b>Abrir</b></button>) : <div className="all-clear"><strong>Todo está al día</strong><span>No se detectaron vencimientos ni alertas de inventario.</span></div>}
        </section>

        <section className="business-card getting-started">
          <div className="section-heading"><div><p className="eyebrow">PRIMEROS PASOS</p><h3>Orden recomendado</h3></div></div>
          <ol>
            <li><strong>Registre el catálogo</strong><span>Configure productos, marcas, costos y precios.</span></li>
            <li><strong>Prepare la cotización</strong><span>Complete cliente, productos y condiciones.</span></li>
            <li><strong>Registre la cirugía</strong><span>Controle documentos, factura y fecha de cobro.</span></li>
            <li><strong>Haga un respaldo</strong><span>Descargue una copia al terminar la jornada.</span></li>
          </ol>
          <button className="secondary-button" onClick={() => onNavigate("help")}>Abrir guía completa</button>
        </section>
      </div>

      <section className="business-card recent-activity">
        <div className="section-heading"><div><p className="eyebrow">TRAZABILIDAD</p><h3>Actividad reciente</h3></div><button className="text-button" onClick={() => onNavigate("activity")}>Ver historial</button></div>
        {activity.slice(0, 6).map((entry) => <article key={entry.id}><div><strong>{entry.action}</strong><span>{entry.module} · {entry.detail}</span></div><time>{activityDateLabel(entry.timestamp)}</time></article>)}
        {!activity.length && <div className="module-empty">La actividad importante aparecerá aquí cuando empiece a trabajar.</div>}
      </section>
    </section>
  );
}
