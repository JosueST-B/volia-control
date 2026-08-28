import { NextResponse } from "next/server";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

interface SyncPayload {
  product: string;
  version: number;
  timestamp: string;
  deviceId: string;
  encrypted: boolean;
  data: Record<string, string>;
  summary?: Record<string, number>;
}

// Ubicación del archivo de persistencia en el servidor/nube
const STORAGE_FILE = resolve(process.cwd(), ".wrangler", "cloud-sync-storage.json");

function getStoredSnapshot(): SyncPayload | null {
  try {
    if (!existsSync(STORAGE_FILE)) return null;
    const content = readFileSync(STORAGE_FILE, "utf-8");
    return JSON.parse(content) as SyncPayload;
  } catch {
    return null;
  }
}

function saveSnapshot(payload: SyncPayload): boolean {
  try {
    mkdirSync(dirname(STORAGE_FILE), { recursive: true });
    writeFileSync(STORAGE_FILE, JSON.stringify(payload, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error al guardar snapshot en la nube:", err);
    return false;
  }
}

export async function GET() {
  const snapshot = getStoredSnapshot();
  if (!snapshot) {
    return NextResponse.json(
      {
        status: "empty",
        message: "No hay datos sincronizados en la nube todavía.",
        timestamp: null,
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    {
      status: "ok",
      snapshot,
      syncedAt: snapshot.timestamp,
      encrypted: snapshot.encrypted,
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SyncPayload;

    if (!body || typeof body !== "object" || !body.data) {
      return NextResponse.json(
        { error: "Cuerpo de solicitud inválido para sincronización." },
        { status: 400 }
      );
    }

    const payload: SyncPayload = {
      product: "Volia Control Cloud",
      version: 2,
      timestamp: new Date().toISOString(),
      deviceId: body.deviceId || "unknown-device",
      encrypted: Boolean(body.encrypted),
      data: body.data,
      summary: body.summary || {},
    };

    const saved = saveSnapshot(payload);
    if (!saved) {
      return NextResponse.json(
        { error: "Error al persistir la información en la nube." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: "success",
      message: "Datos sincronizados y guardados en la nube exitosamente.",
      timestamp: payload.timestamp,
      modulesCount: Object.keys(payload.data).length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Error interno del servidor de sincronización.",
      },
      { status: 500 }
    );
  }
}