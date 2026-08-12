import { Routes } from '@angular/router';

/**
 * M7 · Commercial & Shipping — 18 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const COMMERCIAL_ROUTES: Routes = [
  { path: '', redirectTo: "import-lc", pathMatch: 'full' },
  {
    path: "import-lc/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "C1'", "title": "Import LC", "module": "M7", "section": "Import", "archetype": "object", "entity": "LetterOfCredit", "flagship": true} },
  },
  {
    path: "utilization-declaration",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "C2'", "title": "Utilization Declaration", "module": "M7", "section": "Import", "archetype": "form", "entity": "UtilizationDeclaration", "flagship": true} },
  },
  {
    path: "lc-expiry-monitor",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M7.1", "title": "LC Expiry Monitor", "module": "M7", "section": "Import", "archetype": "board", "entity": "LCExpiryAlert", "flagship": false} },
  },
  {
    path: "export-lc/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M7.2", "title": "Export LC", "module": "M7", "section": "Export", "archetype": "object", "entity": "ExportLC", "flagship": false} },
  },
  {
    path: "export-permission",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "C3", "title": "Export Permission", "module": "M7", "section": "Export", "archetype": "form", "entity": "ExportPermission", "flagship": true} },
  },
  {
    path: "commercial-invoice",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M7.3", "title": "Commercial Invoice", "module": "M7", "section": "Export", "archetype": "list", "entity": "CommercialInvoice", "flagship": false} },
  },
  {
    path: "commercial-invoice/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M7.3", "title": "Commercial Invoice — record", "module": "M7", "section": "Export", "archetype": "object", "entity": "CommercialInvoice", "flagship": false} },
  },
  {
    path: "shipping-documents",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "C4", "title": "Shipping Documents", "module": "M7", "section": "Export", "archetype": "list", "entity": "ShippingDocument", "flagship": true} },
  },
  {
    path: "shipping-documents/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "C4", "title": "Shipping Documents — record", "module": "M7", "section": "Export", "archetype": "object", "entity": "ShippingDocument", "flagship": true} },
  },
  {
    path: "document-checklist",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M7.4", "title": "Document Checklist", "module": "M7", "section": "Export", "archetype": "list", "entity": "DocumentChecklist", "flagship": false} },
  },
  {
    path: "document-checklist/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M7.4", "title": "Document Checklist — record", "module": "M7", "section": "Export", "archetype": "object", "entity": "DocumentChecklist", "flagship": false} },
  },
  {
    path: "forwarder-booking",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "C5", "title": "Forwarder Booking", "module": "M7", "section": "Export", "archetype": "form", "entity": "ForwarderBooking", "flagship": true} },
  },
  {
    path: "shipment-tracking",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M7.5", "title": "Shipment Tracking", "module": "M7", "section": "Export", "archetype": "list", "entity": "ShipmentTracking", "flagship": false} },
  },
  {
    path: "shipment-tracking/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M7.5", "title": "Shipment Tracking — record", "module": "M7", "section": "Export", "archetype": "object", "entity": "ShipmentTracking", "flagship": false} },
  },
  {
    path: "document-submission",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "C6", "title": "Document Submission", "module": "M7", "section": "Export", "archetype": "form", "entity": "DocumentSubmission", "flagship": true} },
  },
  {
    path: "document-discrepancy",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M7.6", "title": "Document Discrepancy", "module": "M7", "section": "Export", "archetype": "list", "entity": "DocumentDiscrepancy", "flagship": false} },
  },
  {
    path: "document-discrepancy/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M7.6", "title": "Document Discrepancy — record", "module": "M7", "section": "Export", "archetype": "object", "entity": "DocumentDiscrepancy", "flagship": false} },
  },
  {
    path: "export-payment",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "C7", "title": "Export Payment", "module": "M7", "section": "Export", "archetype": "list", "entity": "ExportPayment", "flagship": true} },
  },
  {
    path: "export-payment/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "C7", "title": "Export Payment — record", "module": "M7", "section": "Export", "archetype": "object", "entity": "ExportPayment", "flagship": true} },
  },
  {
    path: "short-excess-reconciliation",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M7.7", "title": "Short / Excess Reconciliation", "module": "M7", "section": "Settle", "archetype": "form", "entity": "ShipmentShortExcess", "flagship": false} },
  },
  {
    path: "buyer-claim",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M7.8", "title": "Buyer Claim", "module": "M7", "section": "Settle", "archetype": "form", "entity": "BuyerClaim", "flagship": false} },
  },
  {
    path: "export-incentive-claim",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M7.9", "title": "Export Incentive Claim", "module": "M7", "section": "Settle", "archetype": "form", "entity": "ExportIncentiveClaim", "flagship": false} },
  },
  {
    path: "export-compliance-check",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M7.10", "title": "Export Compliance Check", "module": "M7", "section": "Gate", "archetype": "list", "entity": "ExportComplianceCheck", "flagship": true} },
  },
  {
    path: "export-compliance-check/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M7.10", "title": "Export Compliance Check — record", "module": "M7", "section": "Gate", "archetype": "object", "entity": "ExportComplianceCheck", "flagship": true} },
  },
  {
    path: "shipment-mode-advisor",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M7.11", "title": "Shipment Mode Advisor", "module": "M7", "section": "Gate", "archetype": "list", "entity": "ShipmentModeAdvisor", "flagship": false} },
  },
  {
    path: "shipment-mode-advisor/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M7.11", "title": "Shipment Mode Advisor — record", "module": "M7", "section": "Gate", "archetype": "object", "entity": "ShipmentModeAdvisor", "flagship": false} },
  },
];
