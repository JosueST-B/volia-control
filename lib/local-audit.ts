"use client";

export type Severity = "ok" | "warning" | "error";
export type AuditItem = {
  code: string | null;
  description: string;
  quantity: number | null;
  unit_value: number | null;
  line_total: number | null;
};

export type AuditResult = {
  extracted: {
    document_type: string;
    patient_name: string | null;
    patient_id: string | null;
    hcl: string | null;
    contract: string | null;
    hospital: string | null;
    letter_date: string | null;
    surgery_date: string | null;
    addressed_to: string | null;
    signer: string | null;
    items: AuditItem[];
    observed_subtotal: number | null;
    observed_iva: number | null;
    observed_total: number | null;
    detected_signatures: boolean;
    missing_documents: string[];
    notes: string[];
    confidence: number;
  };
  findings: Array<{ severity: Severity; title: string; detail: string }>;
  authority: { name: string; role: string; period: string; matched: boolean } | null;
  calculations: { subtotal: number; iva: number; total: number };
  itemErrors: Record<string, string[]>;
  score: number;
  status: "approved" | "warning" | "error";
};

// Los periodos y nombres reales deben configurarse dentro de cada instalación.
// El repositorio público no incluye autoridades institucionales precargadas.
const AUTHORITY_PERIODS: Array<{ name: string; role: string; start: string; end: string }> = [];

const PRODUCTS: Record<string, { description: string; unit: number }> = {
  "3433461002011": { description: "PLACA DE MINIFRAGMENTOS EN T", unit: 391.1 },
  "3433461002012": { description: "TORNILLOS AUTOTARRAJANTES BLOQUEADOS", unit: 39.2 },
  "3433461002013": { description: "TORNILLOS CONVENCIONALES / SISTMINIP 1,5 MM", unit: 54.5 },
  "3433461002014": { description: "BROCA DESCARTABLE", unit: 52 },
  "3433461002021": { description: "PLACA DE MINIFRAGMENTOS / SISTMINIP 2 MM", unit: 438.17 },
  "3433461002023": { description: "TORNILLO CONVENCIONAL 2,0 MM CORTICAL", unit: 54.5 },
  "3433461002024": { description: "BROCA DESECHABLE", unit: 52 },
  "3433461002033": { description: "PLACA LCP ANATÓMICA", unit: 441.17 },
  "3433461002038": { description: "TORNILLO LCP", unit: 39.2 },
  "3433461002039": { description: "TORNILLO DE CORTICAL", unit: 54.5 },
  "3433461002040": { description: "BROCA DESECHABLE", unit: 52 },
};

const money = (value: number) => new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value);
const round2 = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;
const close = (a: number | null, b: number) => a !== null && Math.abs(a - b) <= 0.03;
const normalized = (value: string | null) => (value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const amount = (value: string) => Number(value.replace(/\s/g, "").replace(/\.(?=\d{3}(?:\D|$))/g, "").replace(",", "."));

function cleanText(text: string) {
  return text.replace(/\r/g, "\n").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n");
}

function cleanValue(value: string | undefined) {
  if (!value) return null;
  return value.replace(/\s{2,}/g, " ").replace(/[|]/g, "I").trim().replace(/[,:;.-]+$/, "") || null;
}

function capture(text: string, label: RegExp, stop = /\b(?:CI|C[I1]|HCL|Fecha|Contrato|Código|Detalle)\b/i) {
  const match = label.exec(text);
  if (!match) return null;
  let tail = text.slice(match.index + match[0].length).replace(/^\s*[:\-]?\s*/, "");
  const line = tail.split("\n").find((part) => part.trim()) ?? "";
  const stopMatch = stop.exec(line);
  if (stopMatch?.index) tail = line.slice(0, stopMatch.index);
  else tail = line;
  return cleanValue(tail.slice(0, 100));
}

function normalizeDate(raw: string | null) {
  if (!raw) return null;
  const slash = raw.match(/(\d{1,2})\s*[\/.-]\s*(\d{1,2})\s*[\/.-]\s*(20\d{2})/);
  if (slash) return `${slash[1].padStart(2, "0")}/${slash[2].padStart(2, "0")}/${slash[3]}`;
  const months: Record<string, string> = { enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06", julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12" };
  const words = normalized(raw).match(/(\d{1,2})\s+(?:de\s+)?([a-z]+)\s+(?:de\s+)?(20\d{2})/);
  if (words && months[words[2]]) return `${words[1].padStart(2, "0")}/${months[words[2]]}/${words[3]}`;
  return null;
}

function parseDate(value: string | null) {
  const match = value?.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  const iso = `${match[3]}-${match[2]}-${match[1]}`;
  const date = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : { iso, date };
}

function extractLabelAmount(text: string, label: string) {
  const expression = new RegExp(`${label}[^\\d]{0,18}(\\d{1,6}(?:[.,]\\d{2}))`, "gi");
  const matches = [...text.matchAll(expression)];
  return matches.length ? amount(matches.at(-1)?.[1] ?? "") : null;
}

function extractItems(text: string): AuditItem[] {
  const compact = text.replace(/\n/g, " ").replace(/\s+/g, " ");
  const codePattern = /34334610020(?:11|12|13|14|21|23|24|33|38|39|40)/g;
  const matches = [...compact.matchAll(codePattern)];
  return matches.map((match, index) => {
    const code = match[0];
    const product = PRODUCTS[code];
    const start = (match.index ?? 0) + code.length;
    const end = matches[index + 1]?.index ?? Math.min(compact.length, start + 240);
    const segment = compact.slice(start, end).split(/SUBTOTAL|IVA\s*15|TOTAL/i)[0];
    const values = [...segment.matchAll(/\b\d{1,6}[.,]\d{2}\b/g)].map((value) => amount(value[0])).filter(Number.isFinite);
    const visibleUnit = values.find((value) => Math.abs(value - product.unit) <= 0.03) ?? product.unit;
    const candidates = values.filter((value) => value >= visibleUnit - 0.03);
    const lineTotal = candidates.at(-1) ?? visibleUnit;
    const quantity = Math.max(1, Math.round(lineTotal / visibleUnit));
    return { code, description: product.description, quantity, unit_value: visibleUnit, line_total: round2(lineTotal) };
  });
}

function extractDocument(text: string) {
  const clean = cleanText(text);
  const surgeryRaw = capture(clean, /Fecha\s+de\s+Cirug[ií]a/i, /\b(?:Código|Detalle|Cantidad|Valor)\b/i);
  const surgeryDate = normalizeDate(surgeryRaw);
  const quitoDate = clean.match(/Quito[^\n]{0,35}((?:\d{1,2}\s*[\/.-]\s*\d{1,2}\s*[\/.-]\s*20\d{2})|(?:\d{1,2}\s+(?:de\s+)?[A-Za-zÁÉÍÓÚÑáéíóúñ]+\s+(?:de\s+)?20\d{2}))/i)?.[1] ?? null;
  const patient = capture(clean, /(?:Nombre\s+del\s+Paciente|Paciente)/i);
  const ci = clean.match(/\b(?:CI|C[I1]|Cédula)\s*[:\-]?\s*(\d{10})\b/i)?.[1] ?? null;
  const hcl = clean.match(/\bHCL\s*[:\-]?\s*(\d{5,9})\b/i)?.[1] ?? null;
  const contract = clean.match(/\b\d{10}-CT-\d{3}-CGJ-\d{4}\b/i)?.[0] ?? null;
  const addressed = capture(clean, /(?:^|\n)\s*Doctor\b/i, /\b(?:JEFE|MÉDICO|MEDICO|HOSPITAL|Administrador)\b/i);
  const items = extractItems(clean);
  const notes: string[] = [];
  if (!items.length) notes.push("El OCR local no logró reconstruir la tabla de productos. Pruebe con una fotografía recta, nítida y sin sombras.");
  if (!patient) notes.push("El nombre del paciente no fue reconocido con suficiente claridad.");
  const indicators = [patient, ci, hcl, contract, surgeryDate, items.length ? "items" : null].filter(Boolean).length;
  return {
    document_type: /implantes\s+utilizados/i.test(clean) ? "Carta de implantes utilizados" : /memorando/i.test(clean) ? "Memorando IESS" : "Documento médico-comercial",
    patient_name: patient?.toUpperCase() ?? null,
    patient_id: ci,
    hcl,
    contract,
    hospital: capture(clean, /(?:Hospital|Instituci[oó]n)/i, /\b(?:Fecha|Paciente|Contrato|M[eé]dico)\b/i),
    letter_date: normalizeDate(quitoDate ?? capture(clean, /Fecha\s+(?:del\s+)?Documento/i)),
    surgery_date: surgeryDate,
    addressed_to: addressed,
    signer: capture(clean, /(?:Firmado\s+por|Firmante|Firma)/i, /\b(?:Cargo|C[eé]dula|Fecha)\b/i),
    items,
    observed_subtotal: extractLabelAmount(clean, "SUBTOTAL"),
    observed_iva: extractLabelAmount(clean, "IVA\\s*15\\s*%?"),
    observed_total: extractLabelAmount(clean, "(?:^|\\s)TOTAL"),
    detected_signatures: /firmado\s+(?:digital|electr[oó]nicamente)|firma\s*:/i.test(clean),
    missing_documents: [] as string[],
    notes,
    confidence: Math.min(0.94, 0.38 + indicators * 0.085),
  };
}

function validate(extracted: ReturnType<typeof extractDocument>): AuditResult {
  const findings: AuditResult["findings"] = [];
  const itemErrors: Record<string, string[]> = {};
  let subtotal = 0;
  extracted.items.forEach((item, index) => {
    const errors: string[] = [];
    if (item.quantity !== null && item.unit_value !== null) {
      const expected = round2(item.quantity * item.unit_value);
      subtotal += item.line_total ?? expected;
      if (item.line_total !== null && !close(item.line_total, expected)) errors.push(`La línea debería sumar ${money(expected)}.`);
    } else errors.push("Cantidad o precio ilegible.");
    if (errors.length) itemErrors[String(index)] = errors;
  });
  subtotal = round2(subtotal);
  const iva = round2(subtotal * 0.15);
  const total = round2(subtotal + iva);

  if (!extracted.items.length) findings.push({ severity: "error", title: "No se identificaron productos", detail: "Use una imagen más recta y nítida o revise la tabla manualmente." });
  else if (Object.keys(itemErrors).length) findings.push({ severity: "warning", title: "Hay líneas que requieren revisión", detail: `${Object.keys(itemErrors).length} línea(s) presentan valores inconsistentes.` });
  else findings.push({ severity: "ok", title: "Productos y códigos reconocidos", detail: `El lector local identificó ${extracted.items.length} línea(s).` });

  const printedValuesPresent = extracted.observed_subtotal !== null && extracted.observed_iva !== null && extracted.observed_total !== null;
  if (extracted.items.length && printedValuesPresent && close(extracted.observed_subtotal, subtotal) && close(extracted.observed_iva, iva) && close(extracted.observed_total, total)) {
    findings.push({ severity: "ok", title: "Cálculos correctos", detail: `Subtotal ${money(subtotal)}, IVA ${money(iva)} y total ${money(total)} coinciden.` });
  } else if (extracted.items.length && printedValuesPresent) {
    findings.push({ severity: "error", title: "Diferencia en los valores", detail: `El sistema calcula subtotal ${money(subtotal)}, IVA ${money(iva)} y total ${money(total)}.` });
  } else if (extracted.items.length) {
    findings.push({ severity: "warning", title: "Totales impresos poco legibles", detail: `El cálculo reconstruido es subtotal ${money(subtotal)}, IVA ${money(iva)} y total ${money(total)}; compárelo con el original.` });
  }

  const surgery = parseDate(extracted.surgery_date);
  const letter = parseDate(extracted.letter_date);
  let authority: AuditResult["authority"] = null;
  if (surgery) {
    const match = AUTHORITY_PERIODS.find((period) => surgery.iso >= period.start && surgery.iso <= period.end);
    if (match) {
      authority = { name: match.name, role: match.role, period: `${match.start.split("-").reverse().join("/")} — ${match.end.split("-").reverse().join("/")}`, matched: true };
      const recipientMatches = normalized(extracted.addressed_to).includes(normalized(match.name));
      findings.push(recipientMatches
        ? { severity: "ok", title: "Destinatario consistente con la fecha", detail: `La cirugía corresponde al periodo de ${match.name}.` }
        : { severity: "warning", title: "Destinatario por confirmar", detail: `La cirugía ocurrió durante la subrogación de ${match.name}, pero el documento está dirigido a ${extracted.addressed_to ?? "un destinatario no legible"}.` });
    } else {
      authority = { name: "Revisión manual requerida", role: "No hay una autoridad configurada para esta fecha", period: extracted.surgery_date ?? "Sin fecha", matched: false };
      findings.push({ severity: "warning", title: "Autoridad no determinada", detail: "Configure los periodos institucionales o confirme manualmente el destinatario." });
    }
  } else findings.push({ severity: "error", title: "Fecha de cirugía no identificada", detail: "Sin esa fecha no se puede aplicar la regla temporal de autoridades." });

  if (surgery && letter) {
    const days = Math.round((letter.date.getTime() - surgery.date.getTime()) / 86400000);
    findings.push(days >= 0
      ? { severity: "ok", title: "Secuencia de fechas válida", detail: `El documento fue emitido ${days === 0 ? "el mismo día" : `${days} día(s) después`} de la cirugía.` }
      : { severity: "warning", title: "Documento anterior a la cirugía", detail: `La fecha del documento antecede la cirugía por ${Math.abs(days)} día(s).` });
  }

  findings.push(extracted.detected_signatures
    ? { severity: "ok", title: "Indicio de firma detectado", detail: "El texto contiene una firma o referencia de firma. Su autenticidad no ha sido validada." }
    : { severity: "warning", title: "Firma no reconocida", detail: "El OCR local no detectó una firma; revise visualmente el original." });

  const errors = findings.filter((finding) => finding.severity === "error").length;
  const warnings = findings.filter((finding) => finding.severity === "warning").length;
  const score = Math.max(15, Math.min(96, Math.round(extracted.confidence * 100) - errors * 16 - warnings * 5));
  return { extracted, findings, authority, calculations: { subtotal, iva, total }, itemErrors, score, status: errors ? "error" : warnings ? "warning" : "approved" };
}

export function auditRecognizedText(text: string) {
  return validate(extractDocument(text));
}

async function imageCanvas(file: File) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 2400 / bitmap.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("El navegador no pudo preparar la imagen.");
  context.filter = "grayscale(1) contrast(1.18)";
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas;
}

export async function auditFilesLocally(files: File[], onProgress: (message: string) => void): Promise<AuditResult> {
  let worker: Awaited<ReturnType<(typeof import("tesseract.js"))["createWorker"]>> | null = null;
  const ensureWorker = async () => {
    if (worker) return worker;
    onProgress("Preparando el lector OCR gratuito…");
    const { createWorker } = await import("tesseract.js");
    worker = await createWorker("spa", 1, {
      langPath: window.location.origin,
      workerPath: new URL("tesseract.js/dist/worker.min.js", import.meta.url).toString(),
      corePath: new URL("tesseract.js-core/tesseract-core-simd-lstm.wasm.js", import.meta.url).toString(),
      logger: (event) => {
        if (event.status === "recognizing text") onProgress(`Leyendo el documento… ${Math.round((event.progress ?? 0) * 100)} %`);
      },
    });
    return worker;
  };

  const chunks: string[] = [];
  try {
    for (let fileIndex = 0; fileIndex < files.length; fileIndex += 1) {
      const file = files[fileIndex];
      onProgress(`Procesando ${fileIndex + 1} de ${files.length}: ${file.name}`);
      if (file.type === "application/pdf") {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
        const pdf = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
        const pages = Math.min(pdf.numPages, 8);
        for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => ("str" in item ? item.str : "")).join(" ");
          if (pageText.replace(/\s/g, "").length > 70) chunks.push(pageText);
          else if (pageNumber <= 4) {
            const viewport = page.getViewport({ scale: 2 });
            const canvas = document.createElement("canvas");
            canvas.width = Math.round(viewport.width); canvas.height = Math.round(viewport.height);
            const context = canvas.getContext("2d", { willReadFrequently: true });
            if (!context) continue;
            await page.render({ canvas, canvasContext: context, viewport }).promise;
            const ocr = await ensureWorker();
            chunks.push((await ocr.recognize(canvas)).data.text);
          }
        }
      } else {
        const ocr = await ensureWorker();
        chunks.push((await ocr.recognize(await imageCanvas(file))).data.text);
      }
    }
  } finally {
    if (worker) await worker.terminate();
  }

  onProgress("Aplicando controles de fechas y valores…");
  const text = chunks.join("\n\n--- DOCUMENTO ---\n\n");
  if (text.replace(/\s/g, "").length < 25) throw new Error("No se pudo leer suficiente texto. Use una fotografía más clara o un PDF con texto seleccionable.");
  return auditRecognizedText(text);
}
