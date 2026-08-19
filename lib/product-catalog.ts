import { readStoredArray, STORAGE_KEYS, writeStoredJson } from "./storage";

export type CatalogProduct = {
  id: string;
  code: string;
  description: string;
  brand: string;
  origin: string;
  category: string;
  unitCost: number;
  salePrice: number;
  active: boolean;
  updatedAt: string;
};

const source = [
  ["3433461002011", "PLACA DE MINIFRAGMENTOS EN T", 391.1],
  ["3433461002012", "TORNILLOS AUTOTARRAJANTES BLOQUEADOS", 39.2],
  ["3433461002013", "TORNILLOS CONVENCIONALES / SISTMINIP 1,5 MM", 54.5],
  ["3433461002014", "BROCA DESCARTABLE", 52],
  ["3433461002021", "PLACA DE MINIFRAGMENTOS / SISTMINIP 2 MM", 438.17],
  ["3433461002023", "TORNILLO CONVENCIONAL 2,0 MM CORTICAL", 54.5],
  ["3433461002024", "BROCA DESECHABLE", 52],
  ["3433461002033", "PLACA LCP ANATÓMICA", 441.17],
  ["3433461002038", "TORNILLO LCP", 39.2],
  ["3433461002039", "TORNILLO DE CORTICAL", 54.5],
  ["3433461002040", "BROCA DESECHABLE", 52],
] as const;

export const DEFAULT_CATALOG: CatalogProduct[] = source.map(([code, description, price]) => ({
  id: `catalog-${code}`,
  code,
  description,
  brand: "",
  origin: "",
  category: "Traumatología",
  unitCost: 0,
  salePrice: price,
  active: true,
  updatedAt: "2026-08-19T00:00:00.000Z",
}));

export function getCatalog() {
  if (typeof window === "undefined") return DEFAULT_CATALOG;
  const stored = readStoredArray<CatalogProduct>(STORAGE_KEYS.productCatalog);
  if (!stored.length) {
    writeStoredJson(STORAGE_KEYS.productCatalog, DEFAULT_CATALOG);
    return DEFAULT_CATALOG;
  }
  return stored.map((product) => ({
    ...product,
    brand: product.brand || "",
    origin: product.origin || "",
    category: product.category || "General",
    unitCost: Math.max(0, Number(product.unitCost) || 0),
    salePrice: Math.max(0, Number(product.salePrice) || 0),
    active: product.active !== false,
  }));
}

export function saveCatalog(products: CatalogProduct[]) {
  writeStoredJson(STORAGE_KEYS.productCatalog, products);
  window.dispatchEvent(new Event("volia-catalog-updated"));
}
