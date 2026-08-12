import "./chunk-XANLCPOO.js";

// src/app/features/merchandising/merchandising.routes.ts
var MERCHANDISING_ROUTES = [
  { path: "", redirectTo: "buyer-master", pathMatch: "full" },
  {
    path: "buyer-master",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M1.1", "title": "Buyer Master", "module": "M1", "section": "Master", "archetype": "list", "entity": "Buyer", "flagship": false } }
  },
  {
    path: "buyer-master/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M1.1", "title": "Buyer Master \u2014 record", "module": "M1", "section": "Master", "archetype": "object", "entity": "Buyer", "flagship": false } }
  },
  {
    path: "colour-master",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M1.2", "title": "Colour Master", "module": "M1", "section": "Master", "archetype": "list", "entity": "Color", "flagship": false } }
  },
  {
    path: "colour-master/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M1.2", "title": "Colour Master \u2014 record", "module": "M1", "section": "Master", "archetype": "object", "entity": "Color", "flagship": false } }
  },
  {
    path: "tna-template-builder",
    loadComponent: () => import("./chunk-IWJ57CE7.js").then((m) => m.TnaTemplateScreenComponent),
    data: { screen: { "code": "M1.3", "title": "TNA Template Builder", "module": "M1", "section": "Master", "archetype": "wizard", "entity": "TNATemplate", "flagship": false } }
  },
  {
    path: "costing-template",
    loadComponent: () => import("./chunk-3GWRV33R.js").then((m) => m.CostingTemplateScreenComponent),
    data: { screen: { "code": "M1.4", "title": "Costing Template", "module": "M1", "section": "Costing", "archetype": "list", "entity": "CostingTemplate", "flagship": false } }
  },
  {
    path: "costing-template/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M1.4", "title": "Costing Template \u2014 record", "module": "M1", "section": "Costing", "archetype": "object", "entity": "CostingTemplate", "flagship": false } }
  },
  {
    path: "style-details/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A1", "title": "Style Details", "module": "M1", "section": "Style", "archetype": "object", "entity": "Style", "flagship": true } }
  },
  {
    path: "style-library-and-clone",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "A1.1", "title": "Style Library & Clone", "module": "M1", "section": "Style", "archetype": "wizard", "entity": "Style", "flagship": false } }
  },
  {
    path: "measurement-spec-pom",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "A1.2", "title": "Measurement Spec (POM)", "module": "M1", "section": "Style", "archetype": "list", "entity": "StyleMeasurementSpec", "flagship": false } }
  },
  {
    path: "measurement-spec-pom/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A1.2", "title": "Measurement Spec (POM) \u2014 record", "module": "M1", "section": "Style", "archetype": "object", "entity": "StyleMeasurementSpec", "flagship": false } }
  },
  {
    path: "sample-request",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "A1.3", "title": "Sample Request", "module": "M1", "section": "Style", "archetype": "list", "entity": "SampleRequest", "flagship": false } }
  },
  {
    path: "sample-request/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A1.3", "title": "Sample Request \u2014 record", "module": "M1", "section": "Style", "archetype": "object", "entity": "SampleRequest", "flagship": false } }
  },
  {
    path: "sample-costing",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "A1.4", "title": "Sample Costing", "module": "M1", "section": "Style", "archetype": "list", "entity": "SampleCosting", "flagship": false } }
  },
  {
    path: "sample-costing/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A1.4", "title": "Sample Costing \u2014 record", "module": "M1", "section": "Style", "archetype": "object", "entity": "SampleCosting", "flagship": false } }
  },
  {
    path: "buyer-approval-tracker",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "A1.5", "title": "Buyer Approval Tracker", "module": "M1", "section": "Style", "archetype": "board", "entity": "BuyerApprovalSubmission", "flagship": true } }
  },
  {
    path: "pre-costing/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A2", "title": "Pre-Costing", "module": "M1", "section": "Costing", "archetype": "object", "entity": "Costing", "flagship": true } }
  },
  {
    path: "costing-simulator",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "A2.1", "title": "Costing Simulator", "module": "M1", "section": "Costing", "archetype": "wizard", "entity": "CostingSimulation", "flagship": false } }
  },
  {
    path: "costing-revisions",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "A2.2", "title": "Costing Revisions", "module": "M1", "section": "Costing", "archetype": "list", "entity": "CostingRevisionHistory", "flagship": false } }
  },
  {
    path: "costing-revisions/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A2.2", "title": "Costing Revisions \u2014 record", "module": "M1", "section": "Costing", "archetype": "object", "entity": "CostingRevisionHistory", "flagship": false } }
  },
  {
    path: "final-costing/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A3", "title": "Final Costing", "module": "M1", "section": "Costing", "archetype": "object", "entity": "FinalCosting", "flagship": true } }
  },
  {
    path: "buyer-price-history",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "A3.1", "title": "Buyer Price History", "module": "M1", "section": "Costing", "archetype": "list", "entity": "BuyerPriceHistory", "flagship": false } }
  },
  {
    path: "buyer-price-history/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A3.1", "title": "Buyer Price History \u2014 record", "module": "M1", "section": "Costing", "archetype": "object", "entity": "BuyerPriceHistory", "flagship": false } }
  },
  {
    path: "order-breakdown-po-summary/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A4-A", "title": "Order Breakdown \u2014 PO summary", "module": "M1", "section": "Order", "archetype": "object", "entity": "PurchaseOrder", "flagship": true } }
  },
  {
    path: "order-breakdown-size-colour/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A4-B", "title": "Order Breakdown \u2014 size/colour", "module": "M1", "section": "Order", "archetype": "object", "entity": "POSizeBreakdown", "flagship": true } }
  },
  {
    path: "po-amendment-log",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "A4.1", "title": "PO Amendment Log", "module": "M1", "section": "Order", "archetype": "list", "entity": "POAmendment", "flagship": false } }
  },
  {
    path: "po-amendment-log/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A4.1", "title": "PO Amendment Log \u2014 record", "module": "M1", "section": "Order", "archetype": "object", "entity": "POAmendment", "flagship": false } }
  },
  {
    path: "sales-contract-and-budget/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "A5", "title": "Sales Contract & Budget", "module": "M1", "section": "Order", "archetype": "object", "entity": "SalesContract", "flagship": true } }
  },
  {
    path: "bom-generate",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "A6", "title": "BOM Generate", "module": "M1", "section": "Order", "archetype": "wizard", "entity": "BOMItem", "flagship": true } }
  },
  {
    path: "my-tasks",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "C1", "title": "My Tasks", "module": "M1", "section": "T&A", "archetype": "list", "entity": "Task", "flagship": true } }
  },
  {
    path: "my-tasks/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "C1", "title": "My Tasks \u2014 record", "module": "M1", "section": "T&A", "archetype": "object", "entity": "Task", "flagship": true } }
  },
  {
    path: "traffic-light-board",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "C2", "title": "Traffic Light Board", "module": "M1", "section": "T&A", "archetype": "board", "entity": "Task", "flagship": true } }
  },
  {
    path: "tna-re-baseline",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "C2.1", "title": "TNA Re-baseline", "module": "M1", "section": "T&A", "archetype": "wizard", "entity": "TNARebaseline", "flagship": false } }
  },
  {
    path: "order-timeline",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "C2.2", "title": "Order Timeline", "module": "M1", "section": "T&A", "archetype": "board", "entity": "OrderTimeline", "flagship": false } }
  },
  {
    path: "buyer-scorecard",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M1.9", "title": "Buyer Scorecard", "module": "M1", "section": "Insight", "archetype": "board", "entity": "BuyerScorecard", "flagship": false } }
  },
  {
    path: "consumption-learning",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M1.10", "title": "Consumption Learning", "module": "M1", "section": "Insight", "archetype": "board", "entity": "ConsumptionLearning", "flagship": false } }
  }
];
export {
  MERCHANDISING_ROUTES
};
//# debugId=b24b85c9-255c-569e-8c64-498aa284d1e9
//# sourceMappingURL=chunk-I3PDE2JI.js.map
