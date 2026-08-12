import { Routes } from '@angular/router';

/**
 * M10 · Compliance & ESG — 20 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const COMPLIANCE_ROUTES: Routes = [
  { path: '', redirectTo: "buyer-code-of-conduct", pathMatch: 'full' },
  {
    path: "buyer-code-of-conduct",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.1", "title": "Buyer Code of Conduct", "module": "M10", "section": "Audit", "archetype": "list", "entity": "BuyerCodeOfConduct", "flagship": false} },
  },
  {
    path: "buyer-code-of-conduct/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.1", "title": "Buyer Code of Conduct — record", "module": "M10", "section": "Audit", "archetype": "object", "entity": "BuyerCodeOfConduct", "flagship": false} },
  },
  {
    path: "compliance-audit",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.2", "title": "Compliance Audit", "module": "M10", "section": "Audit", "archetype": "list", "entity": "ComplianceAudit", "flagship": false} },
  },
  {
    path: "compliance-audit/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.2", "title": "Compliance Audit — record", "module": "M10", "section": "Audit", "archetype": "object", "entity": "ComplianceAudit", "flagship": false} },
  },
  {
    path: "audit-findings-to-closure/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.3", "title": "Audit Findings to Closure", "module": "M10", "section": "Audit", "archetype": "object", "entity": "AuditFinding", "flagship": true} },
  },
  {
    path: "audit-readiness-score",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M10.4", "title": "Audit Readiness Score", "module": "M10", "section": "Audit", "archetype": "board", "entity": "AuditReadinessScore", "flagship": true} },
  },
  {
    path: "certification-register",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.5", "title": "Certification Register", "module": "M10", "section": "Certify", "archetype": "list", "entity": "Certification", "flagship": false} },
  },
  {
    path: "certification-register/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.5", "title": "Certification Register — record", "module": "M10", "section": "Certify", "archetype": "object", "entity": "Certification", "flagship": false} },
  },
  {
    path: "renewal-alerts",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M10.6", "title": "Renewal Alerts", "module": "M10", "section": "Certify", "archetype": "board", "entity": "CertificationRenewalAlert", "flagship": false} },
  },
  {
    path: "safety-inspection",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.7", "title": "Safety Inspection", "module": "M10", "section": "Safety", "archetype": "list", "entity": "SafetyInspection", "flagship": false} },
  },
  {
    path: "safety-inspection/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.7", "title": "Safety Inspection — record", "module": "M10", "section": "Safety", "archetype": "object", "entity": "SafetyInspection", "flagship": false} },
  },
  {
    path: "safety-incident",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M10.8", "title": "Safety Incident", "module": "M10", "section": "Safety", "archetype": "form", "entity": "SafetyIncident", "flagship": false} },
  },
  {
    path: "emergency-drill",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M10.9", "title": "Emergency Drill", "module": "M10", "section": "Safety", "archetype": "form", "entity": "EmergencyDrill", "flagship": false} },
  },
  {
    path: "chemical-inventory-zdhc",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.10", "title": "Chemical Inventory (ZDHC)", "module": "M10", "section": "Chemical", "archetype": "list", "entity": "ChemicalInventory", "flagship": false} },
  },
  {
    path: "chemical-inventory-zdhc/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.10", "title": "Chemical Inventory (ZDHC) — record", "module": "M10", "section": "Chemical", "archetype": "object", "entity": "ChemicalInventory", "flagship": false} },
  },
  {
    path: "chemical-usage-log",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.11", "title": "Chemical Usage Log", "module": "M10", "section": "Chemical", "archetype": "list", "entity": "ChemicalUsageLog", "flagship": false} },
  },
  {
    path: "chemical-usage-log/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.11", "title": "Chemical Usage Log — record", "module": "M10", "section": "Chemical", "archetype": "object", "entity": "ChemicalUsageLog", "flagship": false} },
  },
  {
    path: "restricted-substance-test",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.12", "title": "Restricted Substance Test", "module": "M10", "section": "Chemical", "archetype": "list", "entity": "RestrictedSubstanceTest", "flagship": false} },
  },
  {
    path: "restricted-substance-test/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.12", "title": "Restricted Substance Test — record", "module": "M10", "section": "Chemical", "archetype": "object", "entity": "RestrictedSubstanceTest", "flagship": false} },
  },
  {
    path: "utility-consumption",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.13", "title": "Utility Consumption", "module": "M10", "section": "Environment", "archetype": "list", "entity": "UtilityConsumption", "flagship": false} },
  },
  {
    path: "utility-consumption/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.13", "title": "Utility Consumption — record", "module": "M10", "section": "Environment", "archetype": "object", "entity": "UtilityConsumption", "flagship": false} },
  },
  {
    path: "carbon-and-water-footprint",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M10.14", "title": "Carbon & Water Footprint", "module": "M10", "section": "Environment", "archetype": "board", "entity": "CarbonFootprint", "flagship": false} },
  },
  {
    path: "effluent-treatment",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.15", "title": "Effluent Treatment", "module": "M10", "section": "Environment", "archetype": "list", "entity": "EffluentTreatmentRecord", "flagship": false} },
  },
  {
    path: "effluent-treatment/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.15", "title": "Effluent Treatment — record", "module": "M10", "section": "Environment", "archetype": "object", "entity": "EffluentTreatmentRecord", "flagship": false} },
  },
  {
    path: "waste-record",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.16", "title": "Waste Record", "module": "M10", "section": "Environment", "archetype": "list", "entity": "WasteRecord", "flagship": false} },
  },
  {
    path: "waste-record/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.16", "title": "Waste Record — record", "module": "M10", "section": "Environment", "archetype": "object", "entity": "WasteRecord", "flagship": false} },
  },
  {
    path: "sustainability-ledger-per-po",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.17", "title": "Sustainability Ledger (per PO)", "module": "M10", "section": "ESG", "archetype": "list", "entity": "SustainabilityLedger", "flagship": true} },
  },
  {
    path: "sustainability-ledger-per-po/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.17", "title": "Sustainability Ledger (per PO) — record", "module": "M10", "section": "ESG", "archetype": "object", "entity": "SustainabilityLedger", "flagship": true} },
  },
  {
    path: "recycled-content-trace",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.18", "title": "Recycled Content Trace", "module": "M10", "section": "ESG", "archetype": "list", "entity": "RecycledContentTrace", "flagship": false} },
  },
  {
    path: "recycled-content-trace/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.18", "title": "Recycled Content Trace — record", "module": "M10", "section": "ESG", "archetype": "object", "entity": "RecycledContentTrace", "flagship": false} },
  },
  {
    path: "buyer-esg-questionnaire",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.19", "title": "Buyer ESG Questionnaire", "module": "M10", "section": "ESG", "archetype": "list", "entity": "BuyerESGQuestionnaire", "flagship": false} },
  },
  {
    path: "buyer-esg-questionnaire/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.19", "title": "Buyer ESG Questionnaire — record", "module": "M10", "section": "ESG", "archetype": "object", "entity": "BuyerESGQuestionnaire", "flagship": false} },
  },
  {
    path: "higg-assessment",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M10.20", "title": "Higg Assessment", "module": "M10", "section": "ESG", "archetype": "list", "entity": "HiggAssessment", "flagship": false} },
  },
  {
    path: "higg-assessment/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M10.20", "title": "Higg Assessment — record", "module": "M10", "section": "ESG", "archetype": "object", "entity": "HiggAssessment", "flagship": false} },
  },
];
