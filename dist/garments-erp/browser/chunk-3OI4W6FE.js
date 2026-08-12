import {
  RecordFormComponent
} from "./chunk-T5JPKE6X.js";
import {
  ExportMenuComponent,
  exportAs
} from "./chunk-ONGSJ2K5.js";
import {
  KpiBandComponent
} from "./chunk-2UE75WRO.js";
import {
  ScreenHeaderComponent,
  toSignal
} from "./chunk-NW5637YH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DRVFIA4U.js";
import {
  I18nService,
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
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  Router,
  computed,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4ERSNJR.js";
import "./chunk-XANLCPOO.js";

// src/app/shared/screens/list-screen.component.ts
function ListScreenComponent_select_6_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3);
  }
}
function ListScreenComponent_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 17);
    \u0275\u0275listener("ngModelChange", function ListScreenComponent_select_6_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatus($event));
    });
    \u0275\u0275elementStart(1, "option", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ListScreenComponent_select_6_option_4_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.status());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "All statuses"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.statuses());
  }
}
function ListScreenComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.total(), " ", \u0275\u0275pipeBind1(2, 2, "record(s)"));
  }
}
function ListScreenComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ListScreenComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind1(2, 1, ctx_r1.resource()?.noun ?? "record"), " ");
  }
}
function ListScreenComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r5);
  }
}
function ListScreenComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 24);
  }
}
function ListScreenComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275classProp("right", c_r6.align === "r");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, c_r6.label));
  }
}
function ListScreenComponent_tr_17_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275listener("click", function ListScreenComponent_tr_17_td_1_Template_td_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 29);
    \u0275\u0275listener("click", function ListScreenComponent_tr_17_td_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(row_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function ListScreenComponent_tr_17_td_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRemove(row_r8));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "t");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "Edit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "Remove"), " ");
  }
}
function ListScreenComponent_tr_17_td_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-state", row_r8[c_r10.key]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8[c_r10.key]);
  }
}
function ListScreenComponent_tr_17_td_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275element(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    const row_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.asText(row_r8[c_r10.key]) || "transparent");
    \u0275\u0275classProp("none", !row_r8[c_r10.key]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r8[c_r10.key] ?? "\u2014", " ");
  }
}
function ListScreenComponent_tr_17_td_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8[c_r10.key] ?? "\u2014");
  }
}
function ListScreenComponent_tr_17_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275elementContainerStart(1, 30);
    \u0275\u0275template(2, ListScreenComponent_tr_17_td_2_span_2_Template, 2, 2, "span", 31)(3, ListScreenComponent_tr_17_td_2_span_3_Template, 3, 5, "span", 32)(4, ListScreenComponent_tr_17_td_2_ng_container_4_Template, 2, 1, "ng-container", 33);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275classProp("right", c_r10.align === "r")("ident", c_r10.type === "ident");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", c_r10.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "status");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "swatch");
  }
}
function ListScreenComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 25);
    \u0275\u0275listener("click", function ListScreenComponent_tr_17_Template_tr_click_0_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.open(row_r8));
    });
    \u0275\u0275template(1, ListScreenComponent_tr_17_td_1_Template, 7, 6, "td", 26)(2, ListScreenComponent_tr_17_td_2_Template, 5, 7, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canWrite());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.columns());
  }
}
function ListScreenComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", (ctx_r1.columns().length || 1) + (ctx_r1.canWrite() ? 1 : 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "Nothing to show for the current search and unit scope."), " ");
  }
}
function ListScreenComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r11 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r11);
  }
}
function ListScreenComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 39);
    \u0275\u0275listener("click", function ListScreenComponent_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goto(ctx_r1.page() - 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 39);
    \u0275\u0275listener("click", function ListScreenComponent_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goto(ctx_r1.page() + 1));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "t");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "Previous"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.page() + 1, " of ", ctx_r1.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() + 1 >= ctx_r1.pages());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "Next"));
  }
}
function ListScreenComponent_app_record_form_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-record-form", 40);
    \u0275\u0275listener("saved", function ListScreenComponent_app_record_form_21_Template_app_record_form_saved_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.afterSave());
    })("cancelled", function ListScreenComponent_app_record_form_21_Template_app_record_form_cancelled_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editing.set(void 0));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("entity", ctx_r1.meta().entity)("meta", ctx_r1.resource())("record", ctx_r1.editing());
  }
}
var ListScreenComponent = class _ListScreenComponent {
  static PAGE_SIZE = 25;
  route = inject(ActivatedRoute);
  router = inject(Router);
  data = inject(ScreenDataService);
  auth = inject(AuthService);
  i18n = inject(I18nService);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  columns = signal(
    [],
    ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statuses = signal(
    [],
    ...ngDevMode ? [{ debugName: "statuses" }] : (
      /* istanbul ignore next */
      []
    )
  );
  total = signal(
    0,
    ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    )
  );
  page = signal(
    0,
    ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    )
  );
  term = signal(
    "",
    ...ngDevMode ? [{ debugName: "term" }] : (
      /* istanbul ignore next */
      []
    )
  );
  status = signal(
    "",
    ...ngDevMode ? [{ debugName: "status" }] : (
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
  removeError = signal(
    null,
    ...ngDevMode ? [{ debugName: "removeError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  exporting = signal(
    false,
    ...ngDevMode ? [{ debugName: "exporting" }] : (
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
  resource = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "resource" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** undefined = closed, null = adding, a row = editing that row. */
  editing = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "editing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pages = computed(
    () => Math.ceil(this.total() / _ListScreenComponent.PAGE_SIZE),
    ...ngDevMode ? [{ debugName: "pages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchTimer;
  ngOnInit() {
    const meta = this.meta();
    if (!meta)
      return;
    const resource = resourceFor(meta.entity);
    this.resource.set(resource);
    if (resource) {
      this.columns.set(resource.columns);
      this.statuses.set(resource.statuses ?? []);
    }
    this.load();
  }
  /**
   * Counts for the band, asked of the server rather than derived from the page
   * on screen — a page holds 25 rows and the answer is about all of them.
   *
   * One count query per status, each asking for a single row, so the cost is
   * the count and not the data. A status the entity does not have produces no
   * tile at all: three true tiles beat four with one invented.
   */
  loadKpis() {
    const meta = this.meta();
    if (!meta)
      return;
    const statuses = this.statuses();
    const tiles = [{
      label: this.i18n.t("Records in scope"),
      value: this.total(),
      note: this.i18n.t(this.term() || this.status() ? "matching the current filter" : "all records"),
      lead: true
    }];
    if (!statuses.length) {
      this.kpis.set(tiles);
      return;
    }
    let pending = statuses.length;
    const counts = /* @__PURE__ */ new Map();
    for (const status of statuses) {
      this.data.list(meta.entity, { page: 0, size: 1, status }).subscribe({
        next: (page) => counts.set(status, page.totalElements),
        error: () => counts.set(status, 0),
        complete: () => {
          if (--pending > 0)
            return;
          for (const status2 of statuses) {
            tiles.push({
              label: this.i18n.t(this.statusLabel(status2)),
              value: counts.get(status2) ?? 0,
              tone: this.statusTone(status2)
            });
          }
          this.kpis.set(tiles.slice(0, 4));
        }
      });
    }
  }
  statusLabel(status) {
    return status.charAt(0) + status.slice(1).toLowerCase().replace(/_/g, " ");
  }
  statusTone(status) {
    if (status === "ACTIVE")
      return "good";
    if (status === "BLACKLISTED")
      return "bad";
    if (status === "INACTIVE" || status === "DISCONTINUED" || status === "ARCHIVED")
      return "warn";
    return void 0;
  }
  /**
   * Whether this user may change these records.
   *
   * The API decides; this only keeps the screen from offering a button that
   * would come back 403. An entity with no write rules registered is read-only
   * for everybody, which is the safe direction to be wrong in.
   */
  canWrite() {
    const authority = this.resource()?.writeAuthority;
    return !!authority && !!this.resource()?.fields?.length && this.auth.has(authority);
  }
  /**
   * Exports every row the current search and filter select, not just the page
   * on screen — a merchandiser sending the buyer list means all of it. The
   * columns are the ones displayed, so the file matches what was asked for.
   */
  download(format) {
    const meta = this.meta();
    if (!meta)
      return;
    this.exporting.set(true);
    this.error.set(null);
    this.data.list(meta.entity, {
      page: 0,
      size: Math.max(this.total(), _ListScreenComponent.PAGE_SIZE),
      q: this.term() || void 0,
      status: this.status() || void 0
    }).subscribe({
      next: (page) => {
        const filter = [
          this.term() && `search "${this.term()}"`,
          this.status() && `status ${this.status()}`
        ].filter(Boolean).join(", ");
        exportAs(format, {
          title: meta.title,
          columns: this.columns(),
          rows: page.content,
          subtitle: filter ? `Filtered by ${filter}` : `${page.totalElements} records`
        }).catch(() => this.error.set(this.i18n.t("This list could not be exported."))).finally(() => this.exporting.set(false));
      },
      error: (err) => {
        this.exporting.set(false);
        this.error.set(err?.error?.message ?? "This list could not be exported.");
      }
    });
  }
  add() {
    this.removeError.set(null);
    this.editing.set(null);
  }
  edit(row) {
    this.removeError.set(null);
    this.editing.set(row);
  }
  afterSave() {
    this.editing.set(void 0);
    this.load();
  }
  /**
   * Removal is soft on the server and refused where the record is in use, but
   * it is still the one action a user cannot undo from this screen — so it
   * asks, naming the record rather than saying "this item".
   *
   * It asks for a reason rather than a yes. The record stays recoverable for
   * ninety days, and the only thing the person deciding whether to restore it
   * will have is this sentence — so the prompt is where the sentence gets
   * written. A confirmation box that only takes "OK" produces nothing at all,
   * and asking afterwards never happens.
   *
   * The server enforces the same rule and rejects an empty or throwaway
   * reason. This prompt is the convenience; the refusal is the control.
   */
  confirmRemove(row) {
    const label = this.identify(row);
    const reason = prompt(`Remove ${label}?

It stays in the history of everything that already used it, and can be restored for 90 days.

Why is it being removed? Whoever considers restoring it will read this.`);
    if (reason === null || !reason.trim()) {
      return;
    }
    this.removeError.set(null);
    this.data.remove(this.meta().entity, row["id"], reason.trim()).subscribe({
      next: () => this.load(),
      // The server refuses a record that is in use and says what to do instead
      // — deactivate it. It also refuses a reason too short to mean anything.
      // Both messages are the useful ones, so they are shown as they arrive.
      error: (err) => this.removeError.set(err?.error?.message ?? `${label} could not be removed.`)
    });
  }
  identify(row) {
    const cols = this.columns();
    const code = cols[0] ? row[cols[0].key] : void 0;
    const name = cols[1] ? row[cols[1].key] : void 0;
    return [code, name].filter(Boolean).join(" \u2014 ") || "this record";
  }
  /** Typing should not fire a request per keystroke. */
  onSearch(value) {
    this.term.set(value);
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.page.set(0);
      this.load();
    }, 300);
  }
  onStatus(value) {
    this.status.set(value);
    this.page.set(0);
    this.load();
  }
  goto(page) {
    this.page.set(page);
    this.load();
  }
  load() {
    const meta = this.meta();
    if (!meta)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.data.list(meta.entity, {
      page: this.page(),
      size: _ListScreenComponent.PAGE_SIZE,
      q: this.term() || void 0,
      status: this.status() || void 0
    }).subscribe({
      next: (page) => {
        this.rows.set(page.content);
        this.total.set(page.totalElements);
        if (!this.columns().length && page.content.length) {
          this.columns.set(Object.keys(page.content[0]).slice(0, 8).map((key) => ({ key, label: key, type: "text" })));
        }
        this.loading.set(false);
        this.loadKpis();
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? "This list could not be loaded.");
        this.rows.set([]);
        this.total.set(0);
        this.loading.set(false);
      }
    });
  }
  /** Templates cannot narrow `unknown`; the swatch binding needs a string. */
  asText(value) {
    return typeof value === "string" ? value : "";
  }
  open(row) {
    if (row["id"] === void 0 || row["id"] === null)
      return;
    this.router.navigate([String(row["id"])], { relativeTo: this.route });
  }
  static \u0275fac = function ListScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListScreenComponent, selectors: [["app-list-screen"]], decls: 22, vars: 20, consts: [[3, "meta"], [3, "kpis"], [1, "panel"], [1, "toolbar"], ["type", "search", 1, "search", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "filter", "aria-label", "Filter by status", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "count", 4, "ngIf"], [3, "chosen", "disabled", "busy"], ["type", "button", "class", "btn primary", 3, "click", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "grid"], ["class", "rowactions", 4, "ngIf"], [3, "right", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pager", 4, "ngIf"], [3, "entity", "meta", "record", "saved", "cancelled", 4, "ngIf"], ["aria-label", "Filter by status", 1, "filter", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "count"], ["type", "button", 1, "btn", "primary", 3, "click"], [1, "error"], [1, "rowactions"], ["tabindex", "0", 3, "click"], ["class", "rowactions", 3, "click", 4, "ngIf"], [3, "right", "ident", 4, "ngFor", "ngForOf"], [1, "rowactions", 3, "click"], ["type", "button", 1, "btn", 3, "click"], [3, "ngSwitch"], ["class", "pill", 4, "ngSwitchCase"], ["class", "swatch-cell", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "pill"], [1, "swatch-cell"], [1, "swatch"], [1, "empty"], [1, "pager"], ["type", "button", 3, "click", "disabled"], [3, "saved", "cancelled", "entity", "meta", "record"]], template: function ListScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0)(1, "app-kpi-band", 1);
      \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "input", 4);
      \u0275\u0275pipe(5, "t");
      \u0275\u0275listener("ngModelChange", function ListScreenComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(6, ListScreenComponent_select_6_Template, 5, 5, "select", 5)(7, ListScreenComponent_span_7_Template, 3, 4, "span", 6);
      \u0275\u0275elementStart(8, "app-export-menu", 7);
      \u0275\u0275listener("chosen", function ListScreenComponent_Template_app_export_menu_chosen_8_listener($event) {
        return ctx.download($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ListScreenComponent_button_9_Template, 3, 3, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, ListScreenComponent_p_10_Template, 2, 1, "p", 9);
      \u0275\u0275elementStart(11, "table", 10)(12, "thead")(13, "tr");
      \u0275\u0275template(14, ListScreenComponent_th_14_Template, 1, 0, "th", 11)(15, ListScreenComponent_th_15_Template, 3, 5, "th", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "tbody");
      \u0275\u0275template(17, ListScreenComponent_tr_17_Template, 3, 2, "tr", 13)(18, ListScreenComponent_tr_18_Template, 4, 4, "tr", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, ListScreenComponent_p_19_Template, 2, 1, "p", 9)(20, ListScreenComponent_div_20_Template, 9, 10, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, ListScreenComponent_app_record_form_21_Template, 1, 3, "app-record-form", 16);
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance();
      \u0275\u0275property("kpis", ctx.kpis());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.term())("placeholder", \u0275\u0275pipeBind1(5, 18, "Search\u2026"));
      \u0275\u0275attribute("aria-label", "Search " + (ctx.meta()?.title ?? "records"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.statuses().length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.rows().length)("busy", ctx.exporting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canWrite());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.canWrite());
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.columns());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.removeError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pages() > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editing() !== void 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    ScreenHeaderComponent,
    RecordFormComponent,
    KpiBandComponent,
    ExportMenuComponent,
    TPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-list-screen",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ScreenHeaderComponent,
        RecordFormComponent,
        KpiBandComponent,
        ExportMenuComponent,
        TPipe
      ],
      template: `
    <app-screen-header [meta]="meta()" />

    <app-kpi-band [kpis]="kpis()" />

    <section class="panel">
      <div class="toolbar">
        <input
          type="search"
          class="search"
          [ngModel]="term()"
          (ngModelChange)="onSearch($event)"
          [attr.aria-label]="'Search ' + (meta()?.title ?? 'records')"
          [placeholder]="'Search\u2026' | t" />

        <select
          *ngIf="statuses().length"
          class="filter"
          [ngModel]="status()"
          (ngModelChange)="onStatus($event)"
          aria-label="Filter by status">
          <option value="">{{ 'All statuses' | t }}</option>
          <option *ngFor="let s of statuses()" [value]="s">{{ s }}</option>
        </select>

        <span class="count" *ngIf="!loading()">{{ total() }} {{ 'record(s)' | t }}</span>

        <app-export-menu [disabled]="!rows().length" [busy]="exporting()"
                         (chosen)="download($event)" />

        <button type="button" class="btn primary" *ngIf="canWrite()" (click)="add()">
          + {{ resource()?.noun ?? 'record' | t }}
        </button>
      </div>

      <p class="error" *ngIf="error() as e">{{ e }}</p>

      <table class="grid">
        <thead>
          <tr>
            <th *ngIf="canWrite()" class="rowactions"></th>
            <th *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ c.label | t }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows()" (click)="open(row)" tabindex="0">
            <td class="rowactions" *ngIf="canWrite()" (click)="$event.stopPropagation()">
              <button type="button" class="btn" (click)="edit(row)">{{ 'Edit' | t }}</button>
              <button type="button" class="btn" (click)="confirmRemove(row)">
                {{ 'Remove' | t }}
              </button>
            </td>
            <td *ngFor="let c of columns()"
                [class.right]="c.align === 'r'"
                [class.ident]="c.type === 'ident'">
              <ng-container [ngSwitch]="c.type">
                <span *ngSwitchCase="'status'" class="pill"
                      [attr.data-state]="row[c.key]">{{ row[c.key] }}</span>

                <!-- A colour is recognised by eye long before it is read. -->
                <span *ngSwitchCase="'swatch'" class="swatch-cell">
                  <span class="swatch"
                        [style.background]="asText(row[c.key]) || 'transparent'"
                        [class.none]="!row[c.key]"></span>
                  {{ row[c.key] ?? '\u2014' }}
                </span>

                <ng-container *ngSwitchDefault>{{ row[c.key] ?? '\u2014' }}</ng-container>
              </ng-container>
            </td>
          </tr>
          <tr *ngIf="!loading() && rows().length === 0">
            <td [attr.colspan]="(columns().length || 1) + (canWrite() ? 1 : 0)" class="empty">
              {{ 'Nothing to show for the current search and unit scope.' | t }}
            </td>
          </tr>
        </tbody>
      </table>

      <p class="error" *ngIf="removeError() as e">{{ e }}</p>

      <div class="pager" *ngIf="pages() > 1">
        <button type="button" [disabled]="page() === 0" (click)="goto(page() - 1)">
          {{ 'Previous' | t }}
        </button>
        <span>Page {{ page() + 1 }} of {{ pages() }}</span>
        <button type="button" [disabled]="page() + 1 >= pages()" (click)="goto(page() + 1)">{{ 'Next' | t }}</button>
      </div>
    </section>

    <app-record-form
      *ngIf="editing() !== undefined"
      [entity]="meta()!.entity"
      [meta]="resource()!"
      [record]="editing()!"
      (saved)="afterSave()"
      (cancelled)="editing.set(undefined)" />
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListScreenComponent, { className: "ListScreenComponent", filePath: "src/app/shared/screens/list-screen.component.ts", lineNumber: 132 });
})();
export {
  ListScreenComponent
};
//# debugId=132b4507-82c7-5394-afd1-c665c9826921
//# sourceMappingURL=chunk-3OI4W6FE.js.map
