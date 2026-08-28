import { businessDateTime } from "./date-utils";
import { readStoredArray, STORAGE_KEYS, writeStoredJson } from "./storage";

export type ActivityType = "create" | "update" | "delete" | "export" | "audit" | "system";

export type ActivityEntry = {
  id: string;
  timestamp: string;
  module: string;
  action: string;
  detail: string;
  type?: ActivityType;
};

function inferActivityType(action: string): ActivityType {
  const lower = action.toLowerCase();
  if (lower.includes("eliminad") || lower.includes("borrad") || lower.includes("quit")) return "delete";
  if (lower.includes("export") || lower.includes("descarg") || lower.includes("pdf") || lower.includes("word") || lower.includes("csv") || lower.includes("imprim")) return "export";
  if (lower.includes("audit") || lower.includes("ocr") || lower.includes("análisis") || lower.includes("verific")) return "audit";
  if (lower.includes("cread") || lower.includes("generad") || lower.includes("registrad") || lower.includes("archiv") || lower.includes("guardad") || lower.includes("duplic")) return "create";
  if (lower.includes("actualiz") || lower.includes("modific") || lower.includes("cambi") || lower.includes("abono") || lower.includes("pago") || lower.includes("activ") || lower.includes("desactiv")) return "update";
  if (lower.includes("respaldo") || lower.includes("pin") || lower.includes("bloque") || lower.includes("restaur")) return "system";
  return "update";
}

export function recordActivity(module: string, action: string, detail: string, type?: ActivityType) {
  if (typeof window === "undefined") return;
  const current = readStoredArray<ActivityEntry>(STORAGE_KEYS.activityLog);
  const entry: ActivityEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp: new Date().toISOString(),
    module,
    action,
    detail,
    type: type || inferActivityType(action),
  };
  writeStoredJson(STORAGE_KEYS.activityLog, [entry, ...current].slice(0, 1000));
  window.dispatchEvent(new Event("volia-activity-updated"));
}

export function clearActivityLog() {
  if (typeof window === "undefined") return;
  writeStoredJson(STORAGE_KEYS.activityLog, []);
  window.dispatchEvent(new Event("volia-activity-updated"));
}

export function activityDateLabel(timestamp: string) {
  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? "Sin fecha" : businessDateTime(date);
}
