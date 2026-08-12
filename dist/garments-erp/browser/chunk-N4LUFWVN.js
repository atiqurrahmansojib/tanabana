import {
  ScreenHeaderComponent,
  toSignal
} from "./chunk-NW5637YH.js";
import {
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  NAV,
  authoritiesFor,
  sectionCode
} from "./chunk-DOSEESBN.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/features/admin/roles-permissions-screen.component.ts
function RolesPermissionsScreenComponent_ng_container_18_tr_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "owner \u2014 write"), " ");
  }
}
function RolesPermissionsScreenComponent_ng_container_18_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275template(7, RolesPermissionsScreenComponent_ng_container_18_tr_1_span_7_Template, 3, 3, "span", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    const role_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(first_r2 ? role_r3 : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.moduleLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.sections, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r1.owner);
  }
}
function RolesPermissionsScreenComponent_ng_container_18_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "t");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "No modules \u2014 a separate app (shop-floor or external portal), not this ERP."), " ");
  }
}
function RolesPermissionsScreenComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RolesPermissionsScreenComponent_ng_container_18_tr_1_Template, 8, 4, "tr", 4)(2, RolesPermissionsScreenComponent_ng_container_18_tr_2_Template, 6, 4, "tr", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.grantsFor(role_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.grantsFor(role_r3).length);
  }
}
var ALL_ROLES = [
  "OWNER",
  "MERCH",
  "SCM",
  "STORE",
  "IE",
  "GM",
  "QC",
  "COMM",
  "FIN",
  "HR",
  "DYE",
  "ADMIN",
  "FLOOR",
  "BUYERP",
  "SUPP"
];
var RolesPermissionsScreenComponent = class _RolesPermissionsScreenComponent {
  route = inject(ActivatedRoute);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  roles = ALL_ROLES;
  /**
   * One row per module this role can open, in `NAV` order. Built from the
   * exact authority strings `authoritiesFor()` issues — a module appears
   * only if `${module}_READ` is granted, and "owner — write" only if
   * `${module}_WRITE` is too, the same checks `canWrite()` makes on every
   * real screen.
   */
  grantsFor(role) {
    const granted = authoritiesFor(role);
    const rows = [];
    for (const m of NAV) {
      if (!granted.includes(`${m.module}_READ`))
        continue;
      const sections = m.sections.filter((s) => granted.includes(`${m.module}_${sectionCode(s.name)}_READ`)).map((s) => s.name);
      rows.push({
        role,
        moduleLabel: m.label,
        sections: sections.join(", "),
        owner: granted.includes(`${m.module}_WRITE`)
      });
    }
    return rows;
  }
  static \u0275fac = function RolesPermissionsScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesPermissionsScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesPermissionsScreenComponent, selectors: [["app-roles-permissions-screen"]], decls: 19, vars: 14, consts: [[3, "meta"], [1, "panel"], [1, "hint", 2, "margin-bottom", "12px"], [1, "grid"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ident"], ["class", "pill", "data-state", "ACTIVE", "style", "margin-left: 6px;", 4, "ngIf"], ["data-state", "ACTIVE", 1, "pill", 2, "margin-left", "6px"], ["colspan", "2", 1, "empty"]], template: function RolesPermissionsScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "table", 3)(6, "thead")(7, "tr")(8, "th");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th");
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "t");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "tbody");
      \u0275\u0275template(18, RolesPermissionsScreenComponent_ng_container_18_Template, 3, 2, "ng-container", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "Read-only. Access is decided in code (section-grants.ts) and shown here exactly as authoritiesFor() computes it at sign-in \u2014 not a form that changes it."), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "Role"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "Module"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "Sections granted"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.roles);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ScreenHeaderComponent, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesPermissionsScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-roles-permissions-screen",
      standalone: true,
      imports: [CommonModule, ScreenHeaderComponent, TPipe],
      template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <p class="hint" style="margin-bottom: 12px;">
        {{ 'Read-only. Access is decided in code (section-grants.ts) and shown here exactly '
         + 'as authoritiesFor() computes it at sign-in \u2014 not a form that changes it.' | t }}
      </p>

      <table class="grid">
        <thead>
          <tr>
            <th>{{ 'Role' | t }}</th>
            <th>{{ 'Module' | t }}</th>
            <th>{{ 'Sections granted' | t }}</th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngFor="let role of roles">
            <tr *ngFor="let row of grantsFor(role); let first = first">
              <td class="ident">{{ first ? role : '' }}</td>
              <td>{{ row.moduleLabel }}</td>
              <td>
                {{ row.sections }}
                <span class="pill" *ngIf="row.owner" data-state="ACTIVE" style="margin-left: 6px;">
                  {{ 'owner \u2014 write' | t }}
                </span>
              </td>
            </tr>
            <tr *ngIf="!grantsFor(role).length">
              <td class="ident">{{ role }}</td>
              <td colspan="2" class="empty">
                {{ 'No modules \u2014 a separate app (shop-floor or external portal), not this ERP.' | t }}
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesPermissionsScreenComponent, { className: "RolesPermissionsScreenComponent", filePath: "src/app/features/admin/roles-permissions-screen.component.ts", lineNumber: 86 });
})();
export {
  RolesPermissionsScreenComponent
};
//# debugId=f0774545-1578-503e-8ae5-1cdac7e11a00
//# sourceMappingURL=chunk-N4LUFWVN.js.map
