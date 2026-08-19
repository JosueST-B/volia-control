import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "node_modules/@tesseract.js-data/spa/4.0.0_best_int/spa.traineddata.gz");
const target = resolve(root, "public/spa.traineddata.gz");

if (!existsSync(source)) {
  throw new Error("No se encontró el modelo OCR español instalado.");
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log("Modelo OCR español preparado en public/spa.traineddata.gz");
