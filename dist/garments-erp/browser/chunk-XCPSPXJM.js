import "./chunk-XANLCPOO.js";

// src/app/features/quality/quality.routes.ts
var QUALITY_ROUTES = [
  { path: "", redirectTo: "defect-code", pathMatch: "full" },
  {
    path: "defect-code",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.1", "title": "Defect Code", "module": "M6", "section": "Master", "archetype": "list", "entity": "DefectCode", "flagship": false } }
  },
  {
    path: "defect-code/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.1", "title": "Defect Code \u2014 record", "module": "M6", "section": "Master", "archetype": "object", "entity": "DefectCode", "flagship": false } }
  },
  {
    path: "aql-standard",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.2", "title": "AQL Standard", "module": "M6", "section": "Master", "archetype": "list", "entity": "AQLStandard", "flagship": false } }
  },
  {
    path: "aql-standard/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.2", "title": "AQL Standard \u2014 record", "module": "M6", "section": "Master", "archetype": "object", "entity": "AQLStandard", "flagship": false } }
  },
  {
    path: "buyer-inspection-criteria",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.3", "title": "Buyer Inspection Criteria", "module": "M6", "section": "Master", "archetype": "list", "entity": "InspectionCriteria", "flagship": false } }
  },
  {
    path: "buyer-inspection-criteria/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.3", "title": "Buyer Inspection Criteria \u2014 record", "module": "M6", "section": "Master", "archetype": "object", "entity": "InspectionCriteria", "flagship": false } }
  },
  {
    path: "lab-dip/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.4", "title": "Lab Dip", "module": "M6", "section": "Colour", "archetype": "object", "entity": "LabDip", "flagship": false } }
  },
  {
    path: "fabric-inspection-4-point",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.5", "title": "Fabric Inspection (4-point)", "module": "M6", "section": "Inspect", "archetype": "list", "entity": "FabricInspection", "flagship": false } }
  },
  {
    path: "fabric-inspection-4-point/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.5", "title": "Fabric Inspection (4-point) \u2014 record", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "FabricInspection", "flagship": false } }
  },
  {
    path: "testing-lab-record",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.6", "title": "Testing Lab Record", "module": "M6", "section": "Inspect", "archetype": "list", "entity": "TestingLabRecord", "flagship": false } }
  },
  {
    path: "testing-lab-record/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.6", "title": "Testing Lab Record \u2014 record", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "TestingLabRecord", "flagship": false } }
  },
  {
    path: "inline-qc",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.7", "title": "Inline QC", "module": "M6", "section": "Inspect", "archetype": "list", "entity": "InlineQCCheck", "flagship": false } }
  },
  {
    path: "inline-qc/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.7", "title": "Inline QC \u2014 record", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "InlineQCCheck", "flagship": false } }
  },
  {
    path: "endline-qc",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.8", "title": "Endline QC", "module": "M6", "section": "Inspect", "archetype": "list", "entity": "EndlineQCCheck", "flagship": false } }
  },
  {
    path: "endline-qc/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.8", "title": "Endline QC \u2014 record", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "EndlineQCCheck", "flagship": false } }
  },
  {
    path: "wash-quality-check",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.9", "title": "Wash Quality Check", "module": "M6", "section": "Inspect", "archetype": "list", "entity": "WashQualityCheck", "flagship": false } }
  },
  {
    path: "wash-quality-check/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.9", "title": "Wash Quality Check \u2014 record", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "WashQualityCheck", "flagship": false } }
  },
  {
    path: "finishing-audit",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.10", "title": "Finishing Audit", "module": "M6", "section": "Inspect", "archetype": "list", "entity": "FinishingAudit", "flagship": false } }
  },
  {
    path: "finishing-audit/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.10", "title": "Finishing Audit \u2014 record", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "FinishingAudit", "flagship": false } }
  },
  {
    path: "measurement-audit-pom",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M6.11", "title": "Measurement Audit (POM)", "module": "M6", "section": "Inspect", "archetype": "list", "entity": "MeasurementAudit", "flagship": true } }
  },
  {
    path: "measurement-audit-pom/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.11", "title": "Measurement Audit (POM) \u2014 record", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "MeasurementAudit", "flagship": true } }
  },
  {
    path: "inspection-booking",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M6.12", "title": "Inspection Booking", "module": "M6", "section": "Inspect", "archetype": "form", "entity": "InspectionBooking", "flagship": false } }
  },
  {
    path: "final-inspection/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "H", "title": "Final Inspection", "module": "M6", "section": "Inspect", "archetype": "object", "entity": "FinalInspection", "flagship": true } }
  },
  {
    path: "capa/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M6.13", "title": "CAPA", "module": "M6", "section": "Improve", "archetype": "object", "entity": "CAPA", "flagship": false } }
  },
  {
    path: "defect-trend-analysis",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M6.14", "title": "Defect Trend Analysis", "module": "M6", "section": "Improve", "archetype": "board", "entity": "DefectTrendAnalysis", "flagship": false } }
  },
  {
    path: "supplier-quality-scorecard",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M6.15", "title": "Supplier Quality Scorecard", "module": "M6", "section": "Improve", "archetype": "board", "entity": "SupplierQualityScorecard", "flagship": false } }
  },
  {
    path: "cost-of-quality",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M6.16", "title": "Cost of Quality", "module": "M6", "section": "Improve", "archetype": "board", "entity": "CostOfQuality", "flagship": true } }
  },
  {
    path: "quality-risk-prediction",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M6.17", "title": "Quality Risk Prediction", "module": "M6", "section": "Improve", "archetype": "board", "entity": "QualityRiskPrediction", "flagship": false } }
  }
];
export {
  QUALITY_ROUTES
};
//# debugId=f78daebb-1cd8-57bc-b3cc-699bee807b31
//# sourceMappingURL=chunk-XCPSPXJM.js.map
