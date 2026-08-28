"use client";

import { recordActivity } from "./activity-log";
import { BACKUP_KEYS, isValidBackupValue, STORAGE_KEYS } from "./storage";

export interface CloudConfig {
  endpoint: string;
  apiKey: string;
  encryptionKey: string;
  autoSync: boolean;
  lastSync: string | null;
  status: "idle" | "syncing" | "success" | "error" | "offline";
  lastError: string | null;
}

const CLOUD_CONFIG_KEY = "volia-cloud-config-v1";
const DEVICE_ID_KEY = "volia-device-id-v1";

export function getDeviceId(): string {
  if (typeof window === "undefined") return "server";
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = `device-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

export function getCloudConfig(): CloudConfig {
  if (typeof window === "undefined") {
    return {
      endpoint: "/api/sync",
      apiKey: "",
      encryptionKey: "",
      autoSync: true,
      lastSync: null,
      status: "idle",
      lastError: null,
    };
  }

  try {
    const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      endpoint: parsed.endpoint || "/api/sync",
      apiKey: parsed.apiKey || "",
      encryptionKey: parsed.encryptionKey || "",
      autoSync: parsed.autoSync !== false,
      lastSync: parsed.lastSync || null,
      status: parsed.status || "idle",
      lastError: parsed.lastError || null,
    };
  } catch {
    return {
      endpoint: "/api/sync",
      apiKey: "",
      encryptionKey: "",
      autoSync: true,
      lastSync: null,
      status: "idle",
      lastError: null,
    };
  }
}

export function saveCloudConfig(patch: Partial<CloudConfig>) {
  if (typeof window === "undefined") return;
  const current = getCloudConfig();
  const next = { ...current, ...patch };
  localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("volia-cloud-sync-updated"));
}

// Cifrado AES-GCM 256-bit con PBKDF2 para datos médicos y financieros sensibles
async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptData(plainText: string, password: string): Promise<string> {
  if (!password) return plainText;
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const encoded = new TextEncoder().encode(plainText);
  const cipherBuffer = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);

  const combined = new Uint8Array(salt.length + iv.length + cipherBuffer.byteLength);
  combined.set(salt, 0);
  combined.set(iv, salt.length);
  combined.set(new Uint8Array(cipherBuffer), salt.length + iv.length);

  return btoa(String.fromCharCode(...combined));
}

export async function decryptData(cipherText: string, password: string): Promise<string> {
  if (!password) return cipherText;
  try {
    const raw = atob(cipherText);
    const bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);

    const salt = bytes.slice(0, 16);
    const iv = bytes.slice(16, 28);
    const data = bytes.slice(28);

    const key = await deriveKey(password, salt);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
    return new TextDecoder().decode(decrypted);
  } catch (err) {
    throw new Error("Clave de cifrado incorrecta o datos dañados.");
  }
}

export async function pushToCloud(): Promise<{ success: boolean; message: string; timestamp?: string }> {
  if (typeof window === "undefined") return { success: false, message: "No disponible en servidor" };
  if (!navigator.onLine) {
    saveCloudConfig({ status: "offline", lastError: "Sin conexión a Internet." });
    return { success: false, message: "Sin conexión a Internet." };
  }

  const config = getCloudConfig();
  saveCloudConfig({ status: "syncing", lastError: null });

  try {
    const rawData: Record<string, string> = {};
    BACKUP_KEYS.forEach((key) => {
      if (key === STORAGE_KEYS.lastBackup || key === STORAGE_KEYS.memoryUpdated) return;
      const value = localStorage.getItem(key);
      if (value !== null && isValidBackupValue(key, value)) {
        rawData[key] = value;
      }
    });

    let finalData = rawData;
    let isEncrypted = false;

    if (config.encryptionKey) {
      const jsonString = JSON.stringify(rawData);
      const encrypted = await encryptData(jsonString, config.encryptionKey);
      finalData = { "__encrypted_payload__": encrypted };
      isEncrypted = true;
    }

    const payload = {
      product: "Volia Control",
      version: 2,
      timestamp: new Date().toISOString(),
      deviceId: getDeviceId(),
      encrypted: isEncrypted,
      data: finalData,
      summary: {
        keysCount: Object.keys(rawData).length,
      },
    };

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (config.apiKey) {
      headers["Authorization"] = `Bearer ${config.apiKey}`;
    }

    const res = await fetch(config.endpoint || "/api/sync", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || `Error del servidor HTTP ${res.status}`);
    }

    const resData = await res.json();
    const syncedTimestamp = resData.timestamp || new Date().toISOString();

    saveCloudConfig({
      status: "success",
      lastSync: syncedTimestamp,
      lastError: null,
    });

    recordActivity(
      "Nube",
      "Sincronización en la nube enviada",
      `${Object.keys(rawData).length} módulos respaldados ${isEncrypted ? "(con cifrado AES-256)" : "(seguro)"}`,
      "system"
    );

    return {
      success: true,
      message: "Sincronización en la nube completada con éxito.",
      timestamp: syncedTimestamp,
    };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Error desconocido al sincronizar.";
    saveCloudConfig({ status: "error", lastError: msg });
    recordActivity("Nube", "Error de sincronización", msg, "system");
    return { success: false, message: msg };
  }
}

export async function pullFromCloud(): Promise<{ success: boolean; message: string; count?: number }> {
  if (typeof window === "undefined") return { success: false, message: "No disponible en servidor" };
  if (!navigator.onLine) {
    saveCloudConfig({ status: "offline", lastError: "Sin conexión a Internet." });
    return { success: false, message: "Sin conexión a Internet." };
  }

  const config = getCloudConfig();
  saveCloudConfig({ status: "syncing", lastError: null });

  try {
    const headers: Record<string, string> = {};
    if (config.apiKey) headers["Authorization"] = `Bearer ${config.apiKey}`;

    const res = await fetch(config.endpoint || "/api/sync", {
      method: "GET",
      headers,
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.error || `Error del servidor HTTP ${res.status}`);
    }

    const result = await res.json();
    if (!result.snapshot || !result.snapshot.data) {
      saveCloudConfig({ status: "idle" });
      return { success: true, message: "No hay datos en la nube todavía.", count: 0 };
    }

    let cloudData: Record<string, string> = result.snapshot.data;

    if (result.snapshot.encrypted || cloudData["__encrypted_payload__"]) {
      if (!config.encryptionKey) {
        throw new Error("Los datos de la nube están cifrados. Ingrese su Clave de Cifrado en la configuración.");
      }
      const cipherText = cloudData["__encrypted_payload__"];
      const decryptedJson = await decryptData(cipherText, config.encryptionKey);
      cloudData = JSON.parse(decryptedJson);
    }

    let updatedCount = 0;
    Object.entries(cloudData).forEach(([key, value]) => {
      if (BACKUP_KEYS.has(key) && isValidBackupValue(key, value)) {
        localStorage.setItem(key, value);
        updatedCount++;
      }
    });

    localStorage.setItem(STORAGE_KEYS.memoryUpdated, new Date().toISOString());

    saveCloudConfig({
      status: "success",
      lastSync: result.syncedAt || new Date().toISOString(),
      lastError: null,
    });

    window.dispatchEvent(new Event("volia-memory-updated"));
    window.dispatchEvent(new Event("volia-activity-updated"));

    recordActivity(
      "Nube",
      "Sincronización desde la nube recibida",
      `${updatedCount} módulos actualizados en este dispositivo`,
      "system"
    );

    return {
      success: true,
      message: `${updatedCount} módulos sincronizados desde la nube.`,
      count: updatedCount,
    };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Error al descargar datos de la nube.";
    saveCloudConfig({ status: "error", lastError: msg });
    recordActivity("Nube", "Error de descarga en la nube", msg, "system");
    return { success: false, message: msg };
  }
}