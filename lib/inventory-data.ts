export type StockItem = {
  id: string;
  code: string;
  product: string;
  lot: string;
  expiry: string;
  location: string;
  stock: number;
  reserved: number;
  minimum: number;
  unitCost: number;
};

export type MovementType = "entry" | "sale" | "surgery" | "return" | "loss" | "expired" | "adjustment-in" | "adjustment-out";

export type StockMovement = {
  id: string;
  date: string;
  type: MovementType;
  itemId: string;
  code: string;
  product: string;
  quantity: number;
  unitCost: number;
  unitPrice: number;
  note: string;
};

export const INVENTORY_KEY = "volia-inventory-v1";
export const MOVEMENTS_KEY = "volia-stock-movements-v1";

export const DEFAULT_STOCK: StockItem[] = [
];

export const LEGACY_SAMPLE_STOCK_IDS = new Set(["inv-1", "inv-2", "inv-3"]);

export const MOVEMENT_LABELS: Record<MovementType, string> = {
  entry: "Entrada / compra",
  sale: "Venta",
  surgery: "Uso en cirugía",
  return: "Devolución a bodega",
  loss: "Pérdida o daño",
  expired: "Caducidad",
  "adjustment-in": "Ajuste positivo",
  "adjustment-out": "Ajuste negativo",
};

export const isEntry = (type: MovementType) => type === "entry" || type === "return" || type === "adjustment-in";
export const isLoss = (type: MovementType) => type === "loss" || type === "expired";

export function applyStockMovement(item: StockItem, type: MovementType, quantity: number) {
  const units = Math.max(1, Math.floor(Number(quantity) || 0));
  const available = Math.max(0, item.stock - item.reserved);
  if (isEntry(type)) return { next: { ...item, stock: item.stock + units }, error: "" };
  if (type === "surgery") {
    if (item.stock < units) return { next: item, error: `No hay stock físico suficiente. Existencia: ${item.stock}.` };
    return { next: { ...item, stock: item.stock - units, reserved: Math.max(0, item.reserved - units) }, error: "" };
  }
  if (available < units) return { next: item, error: `No hay stock disponible suficiente. Disponible sin reserva: ${available}.` };
  return { next: { ...item, stock: item.stock - units }, error: "" };
}
