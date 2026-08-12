import {
  ScreenHeaderComponent,
  toSignal
} from "./chunk-NW5637YH.js";
import {
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  ghash,
  gmix
} from "./chunk-HCPETOFS.js";
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4ERSNJR.js";
import "./chunk-XANLCPOO.js";

// src/app/shared/screens/calendar-screen.component.ts
function CalendarScreenComponent_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.ngIf;
    const d_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", d_r2.load > 90 ? "var(--bad)" : d_r2.load > 75 ? "var(--warn)" : "var(--good)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r2.load, "% ");
  }
}
function CalendarScreenComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, CalendarScreenComponent_div_11_ng_container_1_Template, 5, 4, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("weekend", d_r2.day && ctx_r2.isWeekend(d_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r2.day);
  }
}
var CalendarScreenComponent = class _CalendarScreenComponent {
  route = inject(ActivatedRoute);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  days = signal(
    [],
    ...ngDevMode ? [{ debugName: "days" }] : (
      /* istanbul ignore next */
      []
    )
  );
  monthLabel = (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, { month: "long", year: "numeric" });
  ngOnInit() {
    const seed = ghash(this.meta()?.entity ?? "capacity");
    const now = /* @__PURE__ */ new Date();
    const firstDow = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDow; i++)
      cells.push({ day: null, load: 0 });
    for (let day = 1; day <= daysInMonth; day++) {
      const k = gmix(seed + day * 97 >>> 0);
      cells.push({ day, load: 40 + k % 60 });
    }
    this.days.set(cells);
  }
  isWeekend(d) {
    const idx = this.days().indexOf(d);
    return idx % 7 === 5;
  }
  static \u0275fac = function CalendarScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarScreenComponent, selectors: [["app-calendar-screen"]], decls: 12, vars: 9, consts: [[3, "meta"], [1, "toolbar"], [1, "count"], ["type", "button", 1, "btn"], ["type", "button", 1, "btn", "primary"], [1, "panel", "calendar"], ["class", "cell", 3, "weekend", 4, "ngFor", "ngForOf"], [1, "cell"], [4, "ngIf"], [1, "date"], [1, "num"]], template: function CalendarScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "t");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 5);
      \u0275\u0275template(11, CalendarScreenComponent_div_11_Template, 2, 3, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.monthLabel);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "Today"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "Book capacity"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.days());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ScreenHeaderComponent, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-calendar-screen",
      standalone: true,
      imports: [CommonModule, ScreenHeaderComponent, TPipe],
      template: `
    <app-screen-header [meta]="meta()" />

    <div class="toolbar">
      <span class="count">{{ monthLabel }}</span>
      <button type="button" class="btn">{{ 'Today' | t }}</button>
      <button type="button" class="btn primary">{{ 'Book capacity' | t }}</button>
    </div>

    <section class="panel calendar">
      <div class="cell" *ngFor="let d of days()" [class.weekend]="d.day && isWeekend(d)">
        <ng-container *ngIf="d.day as day">
          <span class="date">{{ day }}</span>
          <strong class="num"
                  [style.color]="d.load > 90 ? 'var(--bad)' : d.load > 75 ? 'var(--warn)' : 'var(--good)'">
            {{ d.load }}%
          </strong>
        </ng-container>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarScreenComponent, { className: "CalendarScreenComponent", filePath: "src/app/shared/screens/calendar-screen.component.ts", lineNumber: 48 });
})();
export {
  CalendarScreenComponent
};
//# debugId=9a63e102-76c8-5af5-b64f-b6f46bbde37f
//# sourceMappingURL=chunk-3IL4J75H.js.map
