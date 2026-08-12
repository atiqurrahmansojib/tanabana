import "./chunk-XANLCPOO.js";

// src/app/features/engineering/engineering.routes.ts
var ENGINEERING_ROUTES = [
  { path: "", redirectTo: "machine-type", pathMatch: "full" },
  {
    path: "machine-type",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M4.1", "title": "Machine Type", "module": "M4", "section": "Master", "archetype": "list", "entity": "MachineType", "flagship": false } }
  },
  {
    path: "machine-type/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.1", "title": "Machine Type \u2014 record", "module": "M4", "section": "Master", "archetype": "object", "entity": "MachineType", "flagship": false } }
  },
  {
    path: "operation-master",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M4.2", "title": "Operation Master", "module": "M4", "section": "Master", "archetype": "list", "entity": "OperationMaster", "flagship": false } }
  },
  {
    path: "operation-master/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.2", "title": "Operation Master \u2014 record", "module": "M4", "section": "Master", "archetype": "object", "entity": "OperationMaster", "flagship": false } }
  },
  {
    path: "learning-curve-profile",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M4.3", "title": "Learning Curve Profile", "module": "M4", "section": "Master", "archetype": "board", "entity": "LearningCurveProfile", "flagship": false } }
  },
  {
    path: "time-study",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M4.4", "title": "Time Study", "module": "M4", "section": "Engineer", "archetype": "form", "entity": "TimeStudy", "flagship": true } }
  },
  {
    path: "operation-bulletin/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.5", "title": "Operation Bulletin", "module": "M4", "section": "Engineer", "archetype": "object", "entity": "OperationBulletin", "flagship": true } }
  },
  {
    path: "line-balancing",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M4.6", "title": "Line Balancing", "module": "M4", "section": "Engineer", "archetype": "board", "entity": "LineBalancing", "flagship": false } }
  },
  {
    path: "line-layout",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M4.7", "title": "Line Layout", "module": "M4", "section": "Engineer", "archetype": "list", "entity": "LineLayout", "flagship": false } }
  },
  {
    path: "line-layout/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.7", "title": "Line Layout \u2014 record", "module": "M4", "section": "Engineer", "archetype": "object", "entity": "LineLayout", "flagship": false } }
  },
  {
    path: "workstation-assignment",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M4.8", "title": "Workstation Assignment", "module": "M4", "section": "Engineer", "archetype": "list", "entity": "WorkstationAssignment", "flagship": false } }
  },
  {
    path: "workstation-assignment/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.8", "title": "Workstation Assignment \u2014 record", "module": "M4", "section": "Engineer", "archetype": "object", "entity": "WorkstationAssignment", "flagship": false } }
  },
  {
    path: "capacity-calendar-minutes",
    loadComponent: () => import("./chunk-3IL4J75H.js").then((m) => m.CalendarScreenComponent),
    data: { screen: { "code": "M4.9", "title": "Capacity Calendar (minutes)", "module": "M4", "section": "Capacity", "archetype": "calendar", "entity": "LineCapacityCalendar", "flagship": true } }
  },
  {
    path: "capacity-booking",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M4.10", "title": "Capacity Booking", "module": "M4", "section": "Capacity", "archetype": "form", "entity": "CapacityBooking", "flagship": false } }
  },
  {
    path: "unit-load-balancer",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M4.11", "title": "Unit Load Balancer", "module": "M4", "section": "Capacity", "archetype": "list", "entity": "UnitLoadBalancer", "flagship": false } }
  },
  {
    path: "unit-load-balancer/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.11", "title": "Unit Load Balancer \u2014 record", "module": "M4", "section": "Capacity", "archetype": "object", "entity": "UnitLoadBalancer", "flagship": false } }
  },
  {
    path: "order-acceptance-score",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M4.12", "title": "Order Acceptance Score", "module": "M4", "section": "Capacity", "archetype": "board", "entity": "OrderAcceptanceScore", "flagship": true } }
  },
  {
    path: "cost-per-minute",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M4.13", "title": "Cost Per Minute", "module": "M4", "section": "Cost", "archetype": "list", "entity": "CostPerMinute", "flagship": false } }
  },
  {
    path: "cost-per-minute/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.13", "title": "Cost Per Minute \u2014 record", "module": "M4", "section": "Cost", "archetype": "object", "entity": "CostPerMinute", "flagship": false } }
  },
  {
    path: "cm-calculation",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M4.14", "title": "CM Calculation", "module": "M4", "section": "Cost", "archetype": "list", "entity": "CMCalculation", "flagship": true } }
  },
  {
    path: "cm-calculation/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M4.14", "title": "CM Calculation \u2014 record", "module": "M4", "section": "Cost", "archetype": "object", "entity": "CMCalculation", "flagship": true } }
  },
  {
    path: "productivity-analysis",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M4.15", "title": "Productivity Analysis", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "ProductivityAnalysis", "flagship": false } }
  },
  {
    path: "non-productive-time",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M4.16", "title": "Non-Productive Time", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "NonProductiveTime", "flagship": false } }
  },
  {
    path: "delivery-prediction",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M4.17", "title": "Delivery Prediction", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "DeliveryPrediction", "flagship": true } }
  },
  {
    path: "disruption-simulation",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "M4.18", "title": "Disruption Simulation", "module": "M4", "section": "Monitor", "archetype": "wizard", "entity": "DisruptionSimulation", "flagship": false } }
  },
  {
    path: "smv-accuracy-feedback",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M4.19", "title": "SMV Accuracy Feedback", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "SMVAccuracyFeedback", "flagship": false } }
  }
];
export {
  ENGINEERING_ROUTES
};
//# debugId=858e66e5-aff5-5dd5-abc5-b703ac82cadd
//# sourceMappingURL=chunk-VZHUCGF4.js.map
