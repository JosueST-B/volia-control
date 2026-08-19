import { businessDateTime } from "./date-utils";
import { readStoredArray, STORAGE_KEYS, writeStoredJson } from "./storage";

export type ActivityEntry = {
  id: string;
  timestamp: string;
  module: string;
  action: string;
  detail: string;
};

export function recordActivity(module: string, action: string, detail: string) {
  if (typeof window === "undefined") return;
  const current = readStoredArray<ActivityEntry>(STORAGE_KEYS.activityLog);
  const entry: ActivityEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp: new Date().toISOString(),
    module,
    action,
    detail,
  };
  writeStoredJson(STORAGE_KEYS.activityLog, [entry, ...current].slice(0, 300));
  window.dispatchEvent(new Event("volia-activity-updated"));
}

export function activityDateLabel(timestamp: string) {
  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? "Sin fecha" : businessDateTime(date);
}
