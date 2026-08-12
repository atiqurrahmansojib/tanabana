import {
  AuthService
} from "./chunk-QXGMD44U.js";
import "./chunk-DOSEESBN.js";
import "./chunk-SO5TSJGE.js";
import "./chunk-HCPETOFS.js";
import {
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  withComponentInputBinding,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-S4ERSNJR.js";
import "./chunk-XANLCPOO.js";

// src/app/core/auth/auth.guard.ts
var authGuard = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) return true;
  return router.createUrlTree(["/login"], { queryParams: { next: state.url } });
};

// src/app/core/auth/role.guard.ts
var roleGuard = (route, _state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const allowed = route.data["roles"] ?? [];
  const role = auth.role();
  if (!role) return router.createUrlTree(["/login"]);
  if (allowed.length === 0 || allowed.includes(role)) return true;
  return router.createUrlTree(["/denied"], { queryParams: { from: route.routeConfig?.path } });
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-VM54IGC7.js").then((m) => m.LoginComponent)
  },
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-QZUVXDVA.js").then((m) => m.ShellComponent),
    children: [
      { path: "", pathMatch: "full", redirectTo: "merchandising" },
      {
        path: "merchandising",
        canActivate: [roleGuard],
        data: { roles: ["MERCH", "OWNER", "IE", "SCM", "COMM", "GM", "FIN"], module: "M1" },
        loadChildren: () => import("./chunk-I3PDE2JI.js").then((m) => m.MERCHANDISING_ROUTES)
      },
      {
        path: "supply-chain",
        canActivate: [roleGuard],
        data: { roles: ["SCM", "OWNER", "MERCH", "STORE", "FIN"], module: "M2" },
        loadChildren: () => import("./chunk-JD7273IH.js").then((m) => m.SUPPLY_CHAIN_ROUTES)
      },
      {
        path: "inventory",
        canActivate: [roleGuard],
        data: { roles: ["STORE", "OWNER", "SCM", "GM", "QC", "DYE"], module: "M3" },
        loadChildren: () => import("./chunk-LDEWGFK4.js").then((m) => m.INVENTORY_ROUTES)
      },
      {
        path: "engineering",
        canActivate: [roleGuard],
        data: { roles: ["IE", "OWNER", "MERCH", "GM"], module: "M4" },
        loadChildren: () => import("./chunk-VZHUCGF4.js").then((m) => m.ENGINEERING_ROUTES)
      },
      {
        path: "production",
        canActivate: [roleGuard],
        data: { roles: ["GM", "OWNER", "IE", "QC", "STORE"], module: "M5" },
        loadChildren: () => import("./chunk-7WTR5OAC.js").then((m) => m.PRODUCTION_ROUTES)
      },
      {
        path: "quality",
        canActivate: [roleGuard],
        data: { roles: ["QC", "OWNER", "GM", "STORE", "DYE"], module: "M6" },
        loadChildren: () => import("./chunk-XCPSPXJM.js").then((m) => m.QUALITY_ROUTES)
      },
      {
        path: "commercial",
        canActivate: [roleGuard],
        data: { roles: ["COMM", "OWNER", "MERCH", "FIN"], module: "M7" },
        loadChildren: () => import("./chunk-5EUHNYTB.js").then((m) => m.COMMERCIAL_ROUTES)
      },
      {
        path: "finance",
        canActivate: [roleGuard],
        data: { roles: ["FIN", "OWNER", "COMM", "SCM"], module: "M8" },
        loadChildren: () => import("./chunk-5OETGRDT.js").then((m) => m.FINANCE_ROUTES)
      },
      {
        path: "hr",
        canActivate: [roleGuard],
        data: { roles: ["HR", "OWNER", "GM"], module: "M9" },
        loadChildren: () => import("./chunk-6WVDQBLL.js").then((m) => m.HR_ROUTES)
      },
      {
        path: "compliance",
        canActivate: [roleGuard],
        data: { roles: ["HR", "OWNER", "QC", "COMM"], module: "M10" },
        loadChildren: () => import("./chunk-JX63MO5W.js").then((m) => m.COMPLIANCE_ROUTES)
      },
      {
        path: "textile",
        canActivate: [roleGuard],
        data: { roles: ["DYE", "OWNER", "STORE", "QC"], module: "M11" },
        loadChildren: () => import("./chunk-7QMGIUG5.js").then((m) => m.TEXTILE_ROUTES)
      },
      {
        path: "reports",
        canActivate: [roleGuard],
        data: { roles: ["ADMIN", "OWNER", "MERCH", "SCM", "GM", "QC", "COMM", "FIN", "HR", "IE"], module: "M12" },
        loadChildren: () => import("./chunk-YCKJOJUG.js").then((m) => m.REPORTS_ROUTES)
      },
      {
        path: "admin",
        canActivate: [roleGuard],
        data: { roles: ["ADMIN", "OWNER"], module: "M13" },
        loadChildren: () => import("./chunk-WSWMIK5U.js").then((m) => m.ADMIN_ROUTES)
      },
      {
        path: "denied",
        loadComponent: () => import("./chunk-4LMI73PC.js").then((m) => m.DeniedComponent)
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding())
  ]
};

// src/main.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/main.ts", lineNumber: 16 });
})();
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
export {
  AppComponent
};
//# debugId=aad827f5-ee84-5248-82f2-064eb89b591a
//# sourceMappingURL=main.js.map
