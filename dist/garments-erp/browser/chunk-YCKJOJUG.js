import "./chunk-XANLCPOO.js";

// src/app/features/reports/reports.routes.ts
var REPORTS_ROUTES = [
  { path: "", redirectTo: "report-view-fabric", pathMatch: "full" },
  {
    path: "report-view-fabric",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "D", "title": "Report View \u2014 Fabric", "module": "M12", "section": "General", "archetype": "board", "entity": "derived", "flagship": false } }
  },
  {
    path: "report-view-trims",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "D'", "title": "Report View \u2014 Trims", "module": "M12", "section": "General", "archetype": "board", "entity": "derived", "flagship": false } }
  },
  {
    path: "report-builder",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "M12.1", "title": "Report Builder", "module": "M12", "section": "General", "archetype": "wizard", "entity": "ReportDefinition", "flagship": false } }
  },
  {
    path: "report-subscriptions",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M12.2", "title": "Report Subscriptions", "module": "M12", "section": "General", "archetype": "list", "entity": "ReportSubscription", "flagship": false } }
  },
  {
    path: "report-subscriptions/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M12.2", "title": "Report Subscriptions \u2014 record", "module": "M12", "section": "General", "archetype": "object", "entity": "ReportSubscription", "flagship": false } }
  },
  {
    path: "export-jobs",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M12.3", "title": "Export Jobs", "module": "M12", "section": "General", "archetype": "list", "entity": "ExportJob", "flagship": false } }
  },
  {
    path: "export-jobs/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M12.3", "title": "Export Jobs \u2014 record", "module": "M12", "section": "General", "archetype": "object", "entity": "ExportJob", "flagship": false } }
  }
];
export {
  REPORTS_ROUTES
};
//# debugId=5f81edfa-12e0-5a70-bd6a-3bffb18cf1d6
//# sourceMappingURL=chunk-YCKJOJUG.js.map
