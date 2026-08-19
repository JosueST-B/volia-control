"use client";

import { useEffect, useMemo, useState } from "react";
import { activityDateLabel, type ActivityEntry } from "../lib/activity-log";
import { downloadCsv } from "../lib/csv";
import { readStoredArray, STORAGE_KEYS } from "../lib/storage";

export default function ActivityCenter() {
  const [entries, setEntries] = useState<ActivityEntry[]>([]);
  const [query, setQuery] = useState("");
  useEffect(() => { const load = () => setEntries(readStoredArray<ActivityEntry>(STORAGE_KEYS.activityLog)); load(); window.addEventListener("volia-activity-updated", load); return () => window.removeEventListener("volia-activity-updated", load); }, []);
  const visible = useMemo(() => entries.filter((entry) => `${entry.module} ${entry.action} ${entry.detail}`.toLowerCase().includes(query.toLowerCase())), [entries, query]);
  const exportCsv = () => downloadCsv([["Fecha y hora", "Módulo", "Acción", "Detalle"], ...entries.map((entry) => [activityDateLabel(entry.timestamp), entry.module, entry.action, entry.detail])], "historial-actividad-volia.csv");
  return <section className="business-module activity-center"><div className="module-hero"><div><p className="eyebrow">CONTROL INTERNO</p><h2>Historial de actividad</h2><p>Registro cronológico de las operaciones importantes realizadas en esta computadora.</p></div><button className="secondary-button" onClick={exportCsv}>Exportar Excel/CSV</button></div><section className="business-card"><div className="section-heading"><div><p className="eyebrow">TRAZABILIDAD</p><h3>{entries.length} actividad(es) registrada(s)</h3></div><input className="module-search" placeholder="Buscar módulo, acción o detalle" value={query} onChange={(event) => setQuery(event.target.value)} /></div><div className="activity-list">{visible.map((entry) => <article key={entry.id}><time>{activityDateLabel(entry.timestamp)}</time><span>{entry.module}</span><div><strong>{entry.action}</strong><small>{entry.detail}</small></div></article>)}{!visible.length && <div className="module-empty">No hay actividades que coincidan con la búsqueda.</div>}</div></section><div className="help-warning"><strong>Alcance del registro</strong><span>Este historial ayuda a reconstruir operaciones en la computadora, pero no identifica por sí mismo a la persona que hizo el cambio. Para varios usuarios se requiere autenticación individual y una base de datos central.</span></div></section>;
}
