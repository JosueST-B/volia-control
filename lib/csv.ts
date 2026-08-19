export type CsvCell = string | number | boolean | null | undefined;

function safeCell(cell: CsvCell) {
  let value = cell === null || cell === undefined ? "" : String(cell);
  if (/^[\t\r ]*[=+\-@]/.test(value)) value = `'${value}`;
  return `"${value.replaceAll('"', '""')}"`;
}

export function createCsv(rows: CsvCell[][]) {
  return rows.map((row) => row.map(safeCell).join(",")).join("\n");
}

export function downloadCsv(rows: CsvCell[][], filename: string) {
  const url = URL.createObjectURL(
    new Blob(["\ufeff" + createCsv(rows)], { type: "text/csv;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}
