import "./chunk-XANLCPOO.js";

// src/app/features/production/production.routes.ts
var PRODUCTION_ROUTES = [
  { path: "", redirectTo: "production-line", pathMatch: "full" },
  {
    path: "production-line",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.1", "title": "Production Line", "module": "M5", "section": "Setup", "archetype": "list", "entity": "ProductionLine", "flagship": false } }
  },
  {
    path: "production-line/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.1", "title": "Production Line \u2014 record", "module": "M5", "section": "Setup", "archetype": "object", "entity": "ProductionLine", "flagship": false } }
  },
  {
    path: "machine-register",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.2", "title": "Machine Register", "module": "M5", "section": "Setup", "archetype": "list", "entity": "Machine", "flagship": false } }
  },
  {
    path: "machine-register/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.2", "title": "Machine Register \u2014 record", "module": "M5", "section": "Setup", "archetype": "object", "entity": "Machine", "flagship": false } }
  },
  {
    path: "subcontractor-master",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.3", "title": "Subcontractor Master", "module": "M5", "section": "Setup", "archetype": "list", "entity": "Subcontractor", "flagship": false } }
  },
  {
    path: "subcontractor-master/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.3", "title": "Subcontractor Master \u2014 record", "module": "M5", "section": "Setup", "archetype": "object", "entity": "Subcontractor", "flagship": false } }
  },
  {
    path: "capacity-plan/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.4", "title": "Capacity Plan", "module": "M5", "section": "Plan", "archetype": "object", "entity": "CapacityPlan", "flagship": false } }
  },
  {
    path: "cut-plan-size-colour/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.5", "title": "Cut Plan (size/colour)", "module": "M5", "section": "Plan", "archetype": "object", "entity": "CutPlan", "flagship": true } }
  },
  {
    path: "marker-plan",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.6", "title": "Marker Plan", "module": "M5", "section": "Plan", "archetype": "list", "entity": "MarkerPlan", "flagship": false } }
  },
  {
    path: "marker-plan/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.6", "title": "Marker Plan \u2014 record", "module": "M5", "section": "Plan", "archetype": "object", "entity": "MarkerPlan", "flagship": false } }
  },
  {
    path: "line-allocation",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.7", "title": "Line Allocation", "module": "M5", "section": "Plan", "archetype": "list", "entity": "LineAllocation", "flagship": false } }
  },
  {
    path: "line-allocation/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.7", "title": "Line Allocation \u2014 record", "module": "M5", "section": "Plan", "archetype": "object", "entity": "LineAllocation", "flagship": false } }
  },
  {
    path: "cutting-entry",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "E", "title": "Cutting Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "CuttingEntry", "flagship": true } }
  },
  {
    path: "bundle-register",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "E.1", "title": "Bundle Register", "module": "M5", "section": "Execute", "archetype": "list", "entity": "CutPanelBundle", "flagship": false } }
  },
  {
    path: "bundle-register/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "E.1", "title": "Bundle Register \u2014 record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "CutPanelBundle", "flagship": false } }
  },
  {
    path: "bundle-tracking",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "E.2", "title": "Bundle Tracking", "module": "M5", "section": "Execute", "archetype": "list", "entity": "BundleTracking", "flagship": false } }
  },
  {
    path: "bundle-tracking/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "E.2", "title": "Bundle Tracking \u2014 record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "BundleTracking", "flagship": false } }
  },
  {
    path: "emb-print-entry",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M5.8", "title": "EMB / Print Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "EmbPrintEntry", "flagship": false } }
  },
  {
    path: "wash-entry",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "F", "title": "Wash Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "WashEntry", "flagship": true } }
  },
  {
    path: "sewing-hourly-entry",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M5.9", "title": "Sewing \u2014 Hourly Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "HourlyProduction", "flagship": false } }
  },
  {
    path: "rework-entry",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M5.10", "title": "Rework Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "ReworkEntry", "flagship": false } }
  },
  {
    path: "finishing-entry",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "G", "title": "Finishing Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "FinishingEntry", "flagship": true } }
  },
  {
    path: "packing-list-and-assortment",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.11", "title": "Packing List & Assortment", "module": "M5", "section": "Execute", "archetype": "list", "entity": "PackingList", "flagship": false } }
  },
  {
    path: "packing-list-and-assortment/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.11", "title": "Packing List & Assortment \u2014 record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "PackingList", "flagship": false } }
  },
  {
    path: "container-loading-plan",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.12", "title": "Container Loading Plan", "module": "M5", "section": "Execute", "archetype": "list", "entity": "ContainerLoadingPlan", "flagship": false } }
  },
  {
    path: "container-loading-plan/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.12", "title": "Container Loading Plan \u2014 record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "ContainerLoadingPlan", "flagship": false } }
  },
  {
    path: "subcontract-order",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.13", "title": "Subcontract Order", "module": "M5", "section": "Execute", "archetype": "list", "entity": "SubcontractOrder", "flagship": false } }
  },
  {
    path: "subcontract-order/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.13", "title": "Subcontract Order \u2014 record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "SubcontractOrder", "flagship": false } }
  },
  {
    path: "production-dashboard",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M5.14", "title": "Production Dashboard", "module": "M5", "section": "Monitor", "archetype": "board", "entity": "ProductionDashboard", "flagship": true } }
  },
  {
    path: "andon-board",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M5.15", "title": "Andon Board", "module": "M5", "section": "Monitor", "archetype": "board", "entity": "DigitalAndonAlert", "flagship": false } }
  },
  {
    path: "bottleneck-alerts",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M5.16", "title": "Bottleneck Alerts", "module": "M5", "section": "Monitor", "archetype": "board", "entity": "BottleneckAlert", "flagship": false } }
  },
  {
    path: "machine-maintenance",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.17", "title": "Machine Maintenance", "module": "M5", "section": "Maintain", "archetype": "list", "entity": "MachineMaintenance", "flagship": false } }
  },
  {
    path: "machine-maintenance/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.17", "title": "Machine Maintenance \u2014 record", "module": "M5", "section": "Maintain", "archetype": "object", "entity": "MachineMaintenance", "flagship": false } }
  },
  {
    path: "spare-parts",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M5.18", "title": "Spare Parts", "module": "M5", "section": "Maintain", "archetype": "list", "entity": "MachineSparePart", "flagship": false } }
  },
  {
    path: "spare-parts/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M5.18", "title": "Spare Parts \u2014 record", "module": "M5", "section": "Maintain", "archetype": "object", "entity": "MachineSparePart", "flagship": false } }
  }
];
export {
  PRODUCTION_ROUTES
};
//# debugId=a63f074e-23db-52a8-b856-619d0423324c
//# sourceMappingURL=chunk-7WTR5OAC.js.map
