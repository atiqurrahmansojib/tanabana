import {
  I18nService,
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgIf,
  Output,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-S4ERSNJR.js";
import {
  __async
} from "./chunk-XANLCPOO.js";

// src/app/core/data/export.ts
function guard(value) {
  if (value === null || value === void 0) return "";
  const text = String(value);
  return /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
}
function csvCell(value) {
  const text = guard(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}
function toCsv(columns, rows) {
  const head = columns.map((c) => csvCell(c.label)).join(",");
  const body = rows.map((r) => columns.map((c) => csvCell(r[c.key])).join(","));
  return [head, ...body].join("\r\n");
}
function save(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 1e3);
}
function stem(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${slug}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
}
function exportAs(format, request) {
  return __async(this, null, function* () {
    const { title, columns, rows } = request;
    const name = stem(title);
    if (format === "csv") {
      save(
        `${name}.csv`,
        new Blob(["\uFEFF" + toCsv(columns, rows)], { type: "text/csv;charset=utf-8;" })
      );
      return;
    }
    if (format === "xlsx") {
      const ExcelJS = yield import("./chunk-3EI5CUNX.js");
      const book = new ExcelJS.Workbook();
      book.creator = "Tanabana";
      book.created = /* @__PURE__ */ new Date();
      const sheetName = title.replace(/[:\\/?*\[\]]/g, " ").trim().slice(0, 31) || "Export";
      const sheet = book.addWorksheet(sheetName);
      sheet.columns = columns.map((c) => ({
        header: c.label,
        key: c.key,
        width: Math.min(Math.max(c.label.length + 4, 12), 40)
      }));
      sheet.getRow(1).font = { bold: true };
      sheet.getRow(1).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFF6F7F9" }
      };
      sheet.views = [{ state: "frozen", ySplit: 1 }];
      for (const row of rows) {
        const values = {};
        for (const c of columns) {
          const raw = row[c.key];
          values[c.key] = typeof raw === "number" ? raw : guard(raw);
        }
        sheet.addRow(values);
      }
      sheet.autoFilter = {
        from: { row: 1, column: 1 },
        to: { row: 1, column: columns.length }
      };
      const buffer = yield book.xlsx.writeBuffer();
      save(`${name}.xlsx`, new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }));
      return;
    }
    const { default: JsPDF } = yield import("./chunk-PQQFRDKT.js");
    const { default: autoTable } = yield import("./chunk-5XWWSRQA.js");
    const doc = new JsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
    doc.setFontSize(14);
    doc.text(title, 40, 40);
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text(
      [request.subtitle, (/* @__PURE__ */ new Date()).toLocaleString()].filter(Boolean).join("  \xB7  "),
      40,
      56
    );
    autoTable(doc, {
      startY: 70,
      head: [columns.map((c) => c.label)],
      body: rows.map((r) => columns.map((c) => {
        const v = r[c.key];
        return v === null || v === void 0 || v === "" ? "\u2014" : String(v);
      })),
      styles: { fontSize: 8, cellPadding: 4 },
      headStyles: { fillColor: [20, 24, 29], textColor: 255 },
      alternateRowStyles: { fillColor: [246, 247, 249] },
      margin: { left: 40, right: 40 }
    });
    save(`${name}.pdf`, doc.output("blob"));
  });
}

// src/app/shared/screens/export-menu.component.ts
function ExportMenuComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function ExportMenuComponent_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick("xlsx"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5, ".xlsx");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ExportMenuComponent_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick("pdf"));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "t");
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, ".pdf");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 5);
    \u0275\u0275listener("click", function ExportMenuComponent_div_6_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick("csv"));
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "t");
    \u0275\u0275elementStart(14, "span", 6);
    \u0275\u0275text(15, ".csv");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "Export as Excel"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "Export as PDF"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "Export as CSV"), " ");
  }
}
var ExportMenuComponent = class _ExportMenuComponent {
  disabled = false;
  busy = false;
  chosen = new EventEmitter();
  i18n = inject(I18nService);
  open = signal(
    false,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggle(event) {
    event.stopPropagation();
    this.open.update((o) => !o);
  }
  pick(format) {
    this.open.set(false);
    this.chosen.emit(format);
  }
  /** A menu that stays open after you have looked elsewhere is a menu in the way. */
  closeOnOutsideClick() {
    this.open.set(false);
  }
  closeOnEscape() {
    this.open.set(false);
  }
  static \u0275fac = function ExportMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExportMenuComponent, selectors: [["app-export-menu"]], hostBindings: function ExportMenuComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ExportMenuComponent_click_HostBindingHandler() {
        return ctx.closeOnOutsideClick();
      }, \u0275\u0275resolveDocument)("keydown.escape", function ExportMenuComponent_keydown_escape_HostBindingHandler() {
        return ctx.closeOnEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { disabled: "disabled", busy: "busy" }, outputs: { chosen: "chosen" }, decls: 7, vars: 6, consts: [[1, "menuwrap"], ["type", "button", "aria-haspopup", "menu", 1, "btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "caret"], ["class", "menu", "role", "menu", 4, "ngIf"], ["role", "menu", 1, "menu"], ["type", "button", "role", "menuitem", 3, "click"], [1, "dim"]], template: function ExportMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ExportMenuComponent_Template_button_click_1_listener($event) {
        return ctx.toggle($event);
      });
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "t");
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ExportMenuComponent_div_6_Template, 16, 9, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled || ctx.busy);
      \u0275\u0275attribute("aria-expanded", ctx.open());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.busy ? "Exporting\u2026" : "Export"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.open());
    }
  }, dependencies: [CommonModule, NgIf, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportMenuComponent, [{
    type: Component,
    args: [{
      selector: "app-export-menu",
      standalone: true,
      imports: [CommonModule, TPipe],
      template: `
    <div class="menuwrap">
      <button type="button" class="btn" [disabled]="disabled || busy"
              [attr.aria-expanded]="open()" aria-haspopup="menu"
              (click)="toggle($event)">
        {{ (busy ? 'Exporting\u2026' : 'Export') | t }}
        <span class="caret" aria-hidden="true">\u25BE</span>
      </button>

      <div class="menu" role="menu" *ngIf="open()">
        <button type="button" role="menuitem" (click)="pick('xlsx')">
          {{ 'Export as Excel' | t }}
          <span class="dim">.xlsx</span>
        </button>
        <button type="button" role="menuitem" (click)="pick('pdf')">
          {{ 'Export as PDF' | t }}
          <span class="dim">.pdf</span>
        </button>
        <button type="button" role="menuitem" (click)="pick('csv')">
          {{ 'Export as CSV' | t }}
          <span class="dim">.csv</span>
        </button>
      </div>
    </div>
  `
    }]
  }], null, { disabled: [{
    type: Input
  }], busy: [{
    type: Input
  }], chosen: [{
    type: Output
  }], closeOnOutsideClick: [{
    type: HostListener,
    args: ["document:click"]
  }], closeOnEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExportMenuComponent, { className: "ExportMenuComponent", filePath: "src/app/shared/screens/export-menu.component.ts", lineNumber: 50 });
})();

export {
  exportAs,
  ExportMenuComponent
};
//# debugId=052d2d55-6bc0-5402-8426-2f9c8a3e7030
//# sourceMappingURL=chunk-ONGSJ2K5.js.map
