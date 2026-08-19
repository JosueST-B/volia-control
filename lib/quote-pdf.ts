"use client";

import { VOLIA_LOGO_DATA_URL } from "./volia-logo";

export type QuotePdfItem = {
  code: string;
  description: string;
  brand: string;
  origin: string;
  quantity: number;
  unitPrice: number;
};

export type QuotePdfData = {
  number: string;
  date: string;
  validity: number;
  customer: string;
  taxId: string;
  patient: string;
  hcl: string;
  patientAddress: string;
  hospital: string;
  surgeryDate: string;
  doctor: string;
  contact: string;
  contract: string;
  delivery: string;
  payment: string;
  warranty: string;
  notes: string;
  applyVat: boolean;
  brandSummary: string;
  originSummary: string;
  items: QuotePdfItem[];
  totals: {
    grossSubtotal: number;
    discount: number;
    netSubtotal: number;
    iva: number;
    total: number;
  };
  company: {
    ruc: string;
    address: string;
    phone: string;
    email: string;
  };
};

const safeName = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase() || "oferta-volia";

const value = (entry?: string) => entry?.trim() || "—";
const money = (entry: number) =>
  new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(Number.isFinite(entry) ? entry : 0);

export async function exportQuotePdf(data: QuotePdfData, filename = data.number) {
  const [{ default: jsPDF }, autoTableModule] = await Promise.all([
    import("jspdf"),
    import("jspdf-autotable"),
  ]);
  const autoTable = autoTableModule.autoTable;
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const teal: [number, number, number] = [22, 101, 87];
  const dark: [number, number, number] = [31, 49, 46];
  const muted: [number, number, number] = [103, 121, 116];
  const line: [number, number, number] = [211, 224, 220];

  const drawMainHeader = () => {
    doc.addImage(VOLIA_LOGO_DATA_URL, "JPEG", 15, 10, 31, 15);
    doc.setTextColor(...dark);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text("VOLIA S.A.S.", 50, 14.5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.4);
    doc.setTextColor(...muted);
    doc.text(doc.splitTextToSize(data.company.address, 92), 50, 18.5);
    doc.text(`Telf. ${data.company.phone} · ${data.company.email}`, 50, 27);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(...muted);
    doc.text("RUC", 195, 13, { align: "right" });
    doc.setFontSize(10);
    doc.setTextColor(...dark);
    doc.text(data.company.ruc, 195, 18, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...muted);
    doc.text(value(data.date), 195, 23, { align: "right" });
    doc.text("Quito, Ecuador", 195, 27, { align: "right" });
    doc.setDrawColor(...teal);
    doc.setLineWidth(0.55);
    doc.line(15, 34, 195, 34);
  };

  const drawFooter = (page: number, pages: number) => {
    doc.setDrawColor(...line);
    doc.setLineWidth(0.25);
    doc.line(15, 282, 195, 282);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.4);
    doc.setTextColor(...muted);
    doc.text("Oferta comercial de VOLIA S.A.S. Los costos internos y la rentabilidad no se incluyen en este documento.", 15, 287, { maxWidth: 150 });
    doc.text(`Página ${page} de ${pages}`, 195, 287, { align: "right" });
  };

  drawMainHeader();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(6.5);
  doc.setTextColor(...muted);
  doc.text("CLIENTE / ENTIDAD", 15, 41);
  doc.setFontSize(9.5);
  doc.setTextColor(...dark);
  doc.text(value(data.customer), 15, 46.5, { maxWidth: 98 });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(...muted);
  const clientDetails = [
    data.taxId ? `RUC/CI: ${data.taxId}` : "",
    data.contact ? `Atención: ${data.contact}` : "",
    data.contract ? `Proceso: ${data.contract}` : "",
  ].filter(Boolean);
  if (clientDetails.length) doc.text(clientDetails, 15, 51);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(6.5);
  doc.text("REFERENCIA", 195, 41, { align: "right" });
  doc.setFontSize(11);
  doc.setTextColor(...dark);
  doc.text("OFERTA COMERCIAL", 195, 46.5, { align: "right" });
  doc.setFontSize(9.5);
  doc.setTextColor(...teal);
  doc.text(value(data.number), 195, 52, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.8);
  doc.setTextColor(...muted);
  doc.text(`Validez: ${data.validity} días`, 195, 56.5, { align: "right" });
  doc.text(`IVA 15 %: ${data.applyVat ? "SÍ APLICA" : "NO APLICA"}`, 195, 60.5, { align: "right" });

  autoTable(doc, {
    startY: 66,
    margin: { left: 15, right: 15 },
    tableWidth: 180,
    head: [["PACIENTE", "HC", "DIRECCIÓN / HOSPITAL", "FECHA DE CIRUGÍA", "MÉDICO"]],
    body: [[
      value(data.patient),
      value(data.hcl),
      value(data.patientAddress || data.hospital),
      value(data.surgeryDate),
      value(data.doctor),
    ]],
    theme: "grid",
    styles: {
      fontSize: 7.2,
      cellPadding: 2.1,
      textColor: dark,
      lineColor: line,
      lineWidth: 0.2,
      valign: "middle",
    },
    headStyles: {
      fillColor: [238, 246, 243],
      textColor: teal,
      fontStyle: "bold",
      fontSize: 5.9,
    },
    columnStyles: {
      0: { cellWidth: 36 },
      1: { cellWidth: 18 },
      2: { cellWidth: 54 },
      3: { cellWidth: 27 },
      4: { cellWidth: 45 },
    },
  });

  let y =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY ?? 82) + 7;

  autoTable(doc, {
    startY: y,
    margin: { left: 15, right: 15, top: 18, bottom: 20 },
    tableWidth: 180,
    head: [["Código", "Descripción", "Marca", "Procedencia", "Cant.", "Precio unitario", "Total"]],
    body: data.items.map((item) => [
      value(item.code),
      value(item.description),
      value(item.brand),
      value(item.origin),
      item.quantity,
      money(item.unitPrice),
      money(item.quantity * item.unitPrice),
    ]),
    theme: "grid",
    styles: {
      fontSize: 6.7,
      cellPadding: 2.2,
      textColor: dark,
      lineColor: line,
      lineWidth: 0.18,
      valign: "middle",
    },
    headStyles: {
      fillColor: teal,
      textColor: 255,
      fontStyle: "bold",
      fontSize: 6.2,
    },
    alternateRowStyles: { fillColor: [247, 250, 249] },
    columnStyles: {
      0: { cellWidth: 28 },
      1: { cellWidth: 52 },
      2: { cellWidth: 22 },
      3: { cellWidth: 23 },
      4: { cellWidth: 12, halign: "center" },
      5: { cellWidth: 22, halign: "right" },
      6: { cellWidth: 21, halign: "right", fontStyle: "bold" },
    },
  });

  y =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY ?? y) + 3;

  const summary: Array<[string, string]> = [
    ["Subtotal", money(data.totals.grossSubtotal)],
  ];
  if (data.totals.discount > 0) {
    summary.push(["Descuento", `- ${money(data.totals.discount)}`]);
    summary.push(["Base después del descuento", money(data.totals.netSubtotal)]);
  }
  summary.push([
    `IVA 15 % — ${data.applyVat ? "Sí aplica" : "No aplica"}`,
    money(data.totals.iva),
  ]);
  summary.push(["TOTAL", money(data.totals.total)]);

  if (y > 239) {
    doc.addPage();
    y = 18;
  }
  autoTable(doc, {
    startY: y,
    margin: { left: 112, right: 15 },
    tableWidth: 83,
    body: summary,
    theme: "plain",
    styles: { fontSize: 7.2, cellPadding: 2, textColor: dark },
    columnStyles: {
      0: { cellWidth: 55 },
      1: { cellWidth: 28, halign: "right", fontStyle: "bold" },
    },
    didParseCell: (hook) => {
      if (hook.row.index === summary.length - 1) {
        hook.cell.styles.fillColor = teal;
        hook.cell.styles.textColor = 255;
        hook.cell.styles.fontStyle = "bold";
      }
    },
  });
  y =
    ((doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY ?? y) + 8;

  const terms: Array<[string, string]> = [
    ["MARCA", data.brandSummary],
    ["PROCEDENCIA", data.originSummary],
    ["TIEMPO DE ENTREGA", value(data.delivery)],
    ["FORMA DE PAGO", value(data.payment)],
    ["GARANTÍA", value(data.warranty)],
  ];
  if (data.notes.trim()) terms.push(["NOTA", data.notes.trim()]);

  const estimatedTermsHeight = Math.max(38, terms.length * 9);
  if (y + estimatedTermsHeight > 278) {
    doc.addPage();
    y = 18;
  }
  autoTable(doc, {
    startY: y,
    margin: { left: 15, right: 15 },
    tableWidth: 180,
    body: terms,
    theme: "plain",
    styles: { fontSize: 7.2, cellPadding: 1.7, textColor: dark },
    columnStyles: {
      0: { cellWidth: 40, textColor: teal, fontStyle: "bold", fontSize: 6.2 },
      1: { cellWidth: 140 },
    },
  });

  const pages = doc.getNumberOfPages();
  for (let page = 1; page <= pages; page += 1) {
    doc.setPage(page);
    drawFooter(page, pages);
  }
  doc.save(`${safeName(filename)}.pdf`);
}
