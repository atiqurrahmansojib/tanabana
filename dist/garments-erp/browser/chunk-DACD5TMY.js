import {
  KpiBandComponent
} from "./chunk-2UE75WRO.js";
import {
  ScreenHeaderComponent,
  toSignal
} from "./chunk-NW5637YH.js";
import {
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  ScreenDataService,
  resourceFor
} from "./chunk-SO5TSJGE.js";
import "./chunk-HCPETOFS.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4ERSNJR.js";
import "./chunk-XANLCPOO.js";

// src/app/shared/screens/board-screen.component.ts
function BoardScreenComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275classProp("right", c_r1.align === "r");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, c_r1.label));
  }
}
function BoardScreenComponent_tr_11_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-state", row_r3[c_r2.key]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3[c_r2.key], " ");
  }
}
function BoardScreenComponent_tr_11_td_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3[c_r2.key] ?? "\u2014");
  }
}
function BoardScreenComponent_tr_11_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, BoardScreenComponent_tr_11_td_1_span_1_Template, 2, 2, "span", 9)(2, BoardScreenComponent_tr_11_td_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275classProp("right", c_r2.align === "r");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.type === "status");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r2.type !== "status");
  }
}
function BoardScreenComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, BoardScreenComponent_tr_11_td_1_Template, 3, 4, "td", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.columns());
  }
}
function BoardScreenComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r3.columns().length || 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "Nothing to show for the current search and unit scope."), " ");
  }
}
var BoardScreenComponent = class _BoardScreenComponent {
  route = inject(ActivatedRoute);
  data = inject(ScreenDataService);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  columns = signal(
    [],
    ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  kpis = signal(
    [],
    ...ngDevMode ? [{ debugName: "kpis" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const meta = this.meta();
    if (!meta)
      return;
    const resource = resourceFor(meta.entity);
    const columns = (resource?.columns ?? []).slice(0, 7);
    this.columns.set(columns);
    this.loading.set(true);
    this.data.list(meta.entity, { page: 0, size: 200 }).subscribe((page) => {
      this.loading.set(false);
      this.rows.set(page.content.slice(0, 8));
      const tiles = [{ label: "Records in scope", value: page.totalElements, lead: true }];
      const numericCols = columns.filter((c) => c.type === "num" || c.type === "money" || c.type === "pct" || c.type === "qty");
      if (numericCols.length) {
        for (const c of numericCols.slice(0, 3)) {
          const values = page.content.map((r) => Number(r[c.key]) || 0);
          const avg = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
          tiles.push({
            label: c.label,
            value: c.type === "pct" ? `${avg.toFixed(1)}%` : c.type === "money" ? avg.toLocaleString(void 0, { maximumFractionDigits: 2 }) : Math.round(avg).toLocaleString()
          });
        }
      } else if (resource?.statuses?.length) {
        for (const status of resource.statuses.slice(0, 3)) {
          const count = page.content.filter((r) => r["status"] === status).length;
          tiles.push({
            label: status,
            value: count,
            tone: status === "Overdue" || status === "At risk" ? "warn" : void 0
          });
        }
      }
      this.kpis.set(tiles.slice(0, 4));
    });
  }
  static \u0275fac = function BoardScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BoardScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoardScreenComponent, selectors: [["app-board-screen"]], decls: 13, vars: 6, consts: [[3, "meta"], [3, "kpis"], [1, "panel"], [1, "toolbar"], [1, "count"], [1, "grid"], [3, "right", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pill", 4, "ngIf"], [1, "pill"], [1, "empty"]], template: function BoardScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0)(1, "app-kpi-band", 1);
      \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "table", 5)(7, "thead")(8, "tr");
      \u0275\u0275template(9, BoardScreenComponent_th_9_Template, 3, 5, "th", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "tbody");
      \u0275\u0275template(11, BoardScreenComponent_tr_11_Template, 2, 1, "tr", 7)(12, BoardScreenComponent_tr_12_Template, 4, 4, "tr", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance();
      \u0275\u0275property("kpis", ctx.kpis());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.meta()?.title);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.columns());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.rows().length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ScreenHeaderComponent, KpiBandComponent, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoardScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-board-screen",
      standalone: true,
      imports: [CommonModule, ScreenHeaderComponent, KpiBandComponent, TPipe],
      template: `
    <app-screen-header [meta]="meta()" />

    <app-kpi-band [kpis]="kpis()" />

    <section class="panel">
      <div class="toolbar">
        <span class="count">{{ meta()?.title }}</span>
      </div>
      <table class="grid">
        <thead>
          <tr><th *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ c.label | t }}</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows()">
            <td *ngFor="let c of columns()" [class.right]="c.align === 'r'">
              <span class="pill" *ngIf="c.type === 'status'" [attr.data-state]="row[c.key]">
                {{ row[c.key] }}
              </span>
              <ng-container *ngIf="c.type !== 'status'">{{ row[c.key] ?? '\u2014' }}</ng-container>
            </td>
          </tr>
          <tr *ngIf="!loading() && !rows().length">
            <td [attr.colspan]="columns().length || 1" class="empty">
              {{ 'Nothing to show for the current search and unit scope.' | t }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoardScreenComponent, { className: "BoardScreenComponent", filePath: "src/app/shared/screens/board-screen.component.ts", lineNumber: 58 });
})();
export {
  BoardScreenComponent
};
//# debugId=60fae0bf-44b5-5e45-a5ba-be96594ffe79
//# sourceMappingURL=chunk-DACD5TMY.js.map
