/**
 * Export what is on screen as CSV, Excel or PDF.
 *
 * Every list in the prototype offers this, and it is not decoration: a
 * merchandiser sends the buyer list to management, the colour library to a
 * dyeing house and the costing sheet to the buyer. Excel is what the office
 * works in, PDF is what gets attached to an email a buyer will not edit, and
 * CSV is what another system imports.
 *
 * Exported is what the user is looking at — the current search, filter and
 * column set. A file that quietly contains more rows than the screen showed is
 * worse than no file.
 */

export type ExportFormat = 'csv' | 'xlsx' | 'pdf';

export interface ExportColumn {
  key: string;
  label: string;
}

export interface ExportRequest {
  title: string;
  columns: ExportColumn[];
  rows: Record<string, unknown>[];
  /** Shown under the title in the PDF: what filter produced these rows. */
  subtitle?: string;
}

/**
 * Excel reads a leading `=`, `+`, `-` or `@` as a formula, so a cell arriving
 * from a text field can execute. Prefixing an apostrophe is the standard
 * defence and is invisible once the sheet is open.
 */
function guard(value: unknown): string {
  if (value === null || value === undefined) return '';
  const text = String(value);
  return /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
}

function csvCell(value: unknown): string {
  const text = guard(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function toCsv(columns: ExportColumn[], rows: Record<string, unknown>[]): string {
  const head = columns.map(c => csvCell(c.label)).join(',');
  const body = rows.map(r => columns.map(c => csvCell(r[c.key])).join(','));
  return [head, ...body].join('\r\n');
}

/**
 * Hands a file to the browser.
 *
 * The anchor is attached to the document before it is clicked and the object
 * URL is revoked on a later tick. Both matter: Firefox ignores a click on a
 * detached anchor, and revoking synchronously cancels the download in Firefox
 * and Safari. Chrome tolerates either, which is how a broken export ships
 * looking fine.
 */
function save(filename: string, blob: Blob): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 1000);
}

/** "Buyer Master" -> "buyer-master-2026-08-07" */
function stem(title: string): string {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `${slug}-${new Date().toISOString().slice(0, 10)}`;
}

export async function exportAs(format: ExportFormat, request: ExportRequest): Promise<void> {
  const { title, columns, rows } = request;
  const name = stem(title);

  if (format === 'csv') {
    // The BOM is what makes Excel open a UTF-8 file as UTF-8. Without it a
    // Bangla colour name or "Inditex — Zara" arrives as mojibake.
    save(`${name}.csv`,
      new Blob(['﻿' + toCsv(columns, rows)], { type: 'text/csv;charset=utf-8;' }));
    return;
  }

  if (format === 'xlsx') {
    // Loaded on demand. ExcelJS is far larger than the application; bundling it
    // into the initial download to serve a button most sessions never press
    // would be a poor trade.
    const ExcelJS = await import('exceljs');
    const book = new ExcelJS.Workbook();
    book.creator = 'Tanabana';
    book.created = new Date();

    // Excel refuses a worksheet name containing : \ / ? * [ ] or longer than
    // 31 characters, and refuses the whole file rather than the name — which
    // presents as "we found a problem with some content" and nothing opens.
    // Screen titles here include things like "M1.1 Buyer Master — record".
    const sheetName = (title.replace(/[:\\/?*\[\]]/g, ' ').trim().slice(0, 31)) || 'Export';
    const sheet = book.addWorksheet(sheetName);
    sheet.columns = columns.map(c => ({
      header: c.label,
      key: c.key,
      width: Math.min(Math.max(c.label.length + 4, 12), 40),
    }));
    sheet.getRow(1).font = { bold: true };
    sheet.getRow(1).fill = {
      type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF6F7F9' },
    };
    sheet.views = [{ state: 'frozen', ySplit: 1 }];      // the header stays put

    for (const row of rows) {
      const values: Record<string, unknown> = {};
      for (const c of columns) {
        const raw = row[c.key];
        // Numbers go in as numbers so the sheet can total a column. A string
        // that merely looks numeric would sit there as text and sum to zero.
        values[c.key] = typeof raw === 'number' ? raw : guard(raw);
      }
      sheet.addRow(values);
    }
    sheet.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: 1, column: columns.length },
    };

    const buffer = await book.xlsx.writeBuffer();
    save(`${name}.xlsx`, new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }));
    return;
  }

  const { default: JsPDF } = await import('jspdf');
  const { default: autoTable } = await import('jspdf-autotable');

  // Landscape because these tables are wide; a buyer list in portrait wraps
  // into unreadability.
  const doc = new JsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });

  doc.setFontSize(14);
  doc.text(title, 40, 40);
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    [request.subtitle, new Date().toLocaleString()].filter(Boolean).join('  ·  '),
    40, 56);

  autoTable(doc, {
    startY: 70,
    head: [columns.map(c => c.label)],
    body: rows.map(r => columns.map(c => {
      const v = r[c.key];
      return v === null || v === undefined || v === '' ? '—' : String(v);
    })),
    styles: { fontSize: 8, cellPadding: 4 },
    headStyles: { fillColor: [20, 24, 29], textColor: 255 },
    alternateRowStyles: { fillColor: [246, 247, 249] },
    margin: { left: 40, right: 40 },
  });

  save(`${name}.pdf`, doc.output('blob'));
}
