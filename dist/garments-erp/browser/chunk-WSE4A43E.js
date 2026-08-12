import {
  RecordFormComponent
} from "./chunk-T5JPKE6X.js";
import {
  ScreenHeaderComponent,
  toSignal
} from "./chunk-NW5637YH.js";
import "./chunk-DRVFIA4U.js";
import {
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  AuthService
} from "./chunk-QXGMD44U.js";
import "./chunk-DOSEESBN.js";
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
  Router,
  RouterLink,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4ERSNJR.js";
import "./chunk-XANLCPOO.js";

// src/app/shared/screens/object-screen.component.ts
var _c0 = () => [".."];
function ObjectScreenComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ObjectScreenComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Edit record"), " ");
  }
}
function ObjectScreenComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r3);
  }
}
function ObjectScreenComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "Loading\u2026"));
  }
}
function ObjectScreenComponent_dl_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "dt", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const r_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, f_r4.label));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ident", f_r4.key.endsWith("Code"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.display(r_r5[f_r4.key]));
  }
}
function ObjectScreenComponent_dl_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 14);
    \u0275\u0275template(1, ObjectScreenComponent_dl_14_ng_container_1_Template, 7, 6, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.fields());
  }
}
function ObjectScreenComponent_app_record_form_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-record-form", 18);
    \u0275\u0275listener("saved", function ObjectScreenComponent_app_record_form_15_Template_app_record_form_saved_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.afterSave());
    })("cancelled", function ObjectScreenComponent_app_record_form_15_Template_app_record_form_cancelled_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editing.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("entity", ctx_r1.meta().entity)("meta", ctx_r1.resource())("record", ctx_r1.record());
  }
}
var ObjectScreenComponent = class _ObjectScreenComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  data = inject(ScreenDataService);
  auth = inject(AuthService);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  record = signal(
    null,
    ...ngDevMode ? [{ debugName: "record" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resource = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "resource" }] : (
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
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editing = signal(
    false,
    ...ngDevMode ? [{ debugName: "editing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const meta = this.meta();
    if (!meta)
      return;
    this.resource.set(resourceFor(meta.entity));
    this.load();
  }
  load() {
    const meta = this.meta();
    const id = this.route.snapshot.paramMap.get("id");
    if (!meta || !id)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.data.get(meta.entity, id).subscribe({
      next: (r) => {
        this.record.set(r);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.message ?? "This record could not be opened.");
      }
    });
  }
  /**
   * Every field the registry knows, plus the audit trail. The list shows what
   * fits; this shows what there is.
   */
  fields() {
    const registered = (this.resource()?.fields ?? []).map((f) => ({ key: f.key, label: f.label }));
    if (registered.length) {
      return [
        ...registered,
        { key: "createdBy", label: "Created by" },
        { key: "updatedBy", label: "Last changed by" }
      ];
    }
    const r = this.record();
    return r ? Object.keys(r).filter((k) => k !== "id").map((k) => ({ key: k, label: k })) : [];
  }
  /** The first two columns name a record the way its list does. */
  headline() {
    const r = this.record();
    const cols = this.resource()?.columns ?? [];
    if (!r || !cols.length)
      return "";
    return [r[cols[0].key], cols[1] ? r[cols[1].key] : null].filter(Boolean).join(" \u2014 ");
  }
  display(value) {
    if (value === null || value === void 0 || value === "")
      return "\u2014";
    if (typeof value === "boolean")
      return value ? "Yes" : "No";
    return String(value);
  }
  canWrite() {
    const authority = this.resource()?.writeAuthority;
    return !!authority && !!this.resource()?.fields?.length && this.auth.has(authority);
  }
  edit() {
    this.editing.set(true);
  }
  afterSave() {
    this.editing.set(false);
    this.load();
  }
  print() {
    window.print();
  }
  static \u0275fac = function ObjectScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectScreenComponent, selectors: [["app-object-screen"]], decls: 16, vars: 15, consts: [[3, "meta"], [1, "panel"], [1, "toolbar", "noprint"], [1, "btn", 3, "routerLink"], [1, "count"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", "class", "btn primary", 3, "click", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "load", 4, "ngIf"], ["class", "fields recordview", 4, "ngIf"], [3, "entity", "meta", "record", "saved", "cancelled", 4, "ngIf"], ["type", "button", 1, "btn", "primary", 3, "click"], [1, "error"], [1, "load"], [1, "fields", "recordview"], [4, "ngFor", "ngForOf"], [1, "field"], [1, "label"], [3, "saved", "cancelled", "entity", "meta", "record"]], template: function ObjectScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function ObjectScreenComponent_Template_button_click_8_listener() {
        return ctx.print();
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, ObjectScreenComponent_button_11_Template, 3, 3, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ObjectScreenComponent_p_12_Template, 2, 1, "p", 7)(13, ObjectScreenComponent_p_13_Template, 3, 3, "p", 8)(14, ObjectScreenComponent_dl_14_Template, 2, 1, "dl", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, ObjectScreenComponent_app_record_form_15_Template, 1, 3, "app-record-form", 10);
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("\u2190 ", \u0275\u0275pipeBind1(5, 10, "Back to the list"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.headline());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "Print"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canWrite());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.record());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editing());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, ScreenHeaderComponent, RecordFormComponent, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObjectScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-object-screen",
      standalone: true,
      imports: [CommonModule, RouterLink, ScreenHeaderComponent, RecordFormComponent, TPipe],
      template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <div class="toolbar noprint">
        <a class="btn" [routerLink]="['..']">\u2190 {{ 'Back to the list' | t }}</a>
        <span class="count">{{ headline() }}</span>
        <button type="button" class="btn" (click)="print()">{{ 'Print' | t }}</button>
        <button type="button" class="btn primary" *ngIf="canWrite()" (click)="edit()">
          {{ 'Edit record' | t }}
        </button>
      </div>

      <p class="error" *ngIf="error() as e">{{ e }}</p>
      <p class="load" *ngIf="loading()">{{ 'Loading\u2026' | t }}</p>

      <dl class="fields recordview" *ngIf="record() as r">
        <ng-container *ngFor="let f of fields()">
          <div class="field">
            <dt class="label">{{ f.label | t }}</dt>
            <dd [class.ident]="f.key.endsWith('Code')">{{ display(r[f.key]) }}</dd>
          </div>
        </ng-container>
      </dl>
    </section>

    <app-record-form
      *ngIf="editing()"
      [entity]="meta()!.entity"
      [meta]="resource()!"
      [record]="record()"
      (saved)="afterSave()"
      (cancelled)="editing.set(false)" />
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectScreenComponent, { className: "ObjectScreenComponent", filePath: "src/app/shared/screens/object-screen.component.ts", lineNumber: 68 });
})();
export {
  ObjectScreenComponent
};
//# debugId=54c3ac62-52b3-5ea3-b7c5-9ade1270af57
//# sourceMappingURL=chunk-WSE4A43E.js.map
