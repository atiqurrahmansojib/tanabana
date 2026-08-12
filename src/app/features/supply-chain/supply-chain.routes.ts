import { Routes } from '@angular/router';

/**
 * M2 · Supply Chain — 15 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const SUPPLY_CHAIN_ROUTES: Routes = [
  { path: '', redirectTo: "item-group-hierarchy", pathMatch: 'full' },
  {
    path: "item-group-hierarchy",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.1", "title": "Item Group Hierarchy", "module": "M2", "section": "Master", "archetype": "list", "entity": "ItemGroup", "flagship": false} },
  },
  {
    path: "item-group-hierarchy/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.1", "title": "Item Group Hierarchy — record", "module": "M2", "section": "Master", "archetype": "object", "entity": "ItemGroup", "flagship": false} },
  },
  {
    path: "item-master",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.2", "title": "Item Master", "module": "M2", "section": "Master", "archetype": "list", "entity": "ItemMaster", "flagship": true} },
  },
  {
    path: "item-master/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.2", "title": "Item Master — record", "module": "M2", "section": "Master", "archetype": "object", "entity": "ItemMaster", "flagship": true} },
  },
  {
    path: "supplier-master",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.3", "title": "Supplier Master", "module": "M2", "section": "Master", "archetype": "list", "entity": "Supplier", "flagship": false} },
  },
  {
    path: "supplier-master/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.3", "title": "Supplier Master — record", "module": "M2", "section": "Master", "archetype": "object", "entity": "Supplier", "flagship": false} },
  },
  {
    path: "vendor-rating",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.4", "title": "Vendor Rating", "module": "M2", "section": "Master", "archetype": "list", "entity": "VendorRating", "flagship": false} },
  },
  {
    path: "vendor-rating/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.4", "title": "Vendor Rating — record", "module": "M2", "section": "Master", "archetype": "object", "entity": "VendorRating", "flagship": false} },
  },
  {
    path: "purchase-requisition",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M2.5", "title": "Purchase Requisition", "module": "M2", "section": "Procure", "archetype": "form", "entity": "PurchaseRequisition", "flagship": false} },
  },
  {
    path: "rfq-and-quotation-compare",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M2.6", "title": "RFQ & Quotation Compare", "module": "M2", "section": "Procure", "archetype": "board", "entity": "RFQ", "flagship": false} },
  },
  {
    path: "spo-fabric/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "B1", "title": "SPO — Fabric", "module": "M2", "section": "Procure", "archetype": "object", "entity": "SPO", "flagship": true} },
  },
  {
    path: "spo-trims/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "B2", "title": "SPO — Trims", "module": "M2", "section": "Procure", "archetype": "object", "entity": "SPO", "flagship": true} },
  },
  {
    path: "spo-delivery-schedule",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.7", "title": "SPO Delivery Schedule", "module": "M2", "section": "Procure", "archetype": "list", "entity": "SPODeliverySchedule", "flagship": false} },
  },
  {
    path: "spo-delivery-schedule/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.7", "title": "SPO Delivery Schedule — record", "module": "M2", "section": "Procure", "archetype": "object", "entity": "SPODeliverySchedule", "flagship": false} },
  },
  {
    path: "spo-amendment",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.8", "title": "SPO Amendment", "module": "M2", "section": "Procure", "archetype": "list", "entity": "SPOAmendment", "flagship": false} },
  },
  {
    path: "spo-amendment/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.8", "title": "SPO Amendment — record", "module": "M2", "section": "Procure", "archetype": "object", "entity": "SPOAmendment", "flagship": false} },
  },
  {
    path: "pi-entry",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "B3", "title": "PI Entry", "module": "M2", "section": "Procure", "archetype": "form", "entity": "PIEntry", "flagship": true} },
  },
  {
    path: "import-shipment-tracking",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.9", "title": "Import Shipment Tracking", "module": "M2", "section": "Track", "archetype": "list", "entity": "ImportShipmentTracking", "flagship": false} },
  },
  {
    path: "import-shipment-tracking/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.9", "title": "Import Shipment Tracking — record", "module": "M2", "section": "Track", "archetype": "object", "entity": "ImportShipmentTracking", "flagship": false} },
  },
  {
    path: "lead-time-alerts",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M2.10", "title": "Lead Time Alerts", "module": "M2", "section": "Track", "archetype": "board", "entity": "ProcurementLeadTimeAlert", "flagship": false} },
  },
  {
    path: "supplier-recommendation",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "M2.11", "title": "Supplier Recommendation", "module": "M2", "section": "Track", "archetype": "wizard", "entity": "SupplierRecommendation", "flagship": false} },
  },
  {
    path: "supplier-portal-admin",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M2.12", "title": "Supplier Portal Admin", "module": "M2", "section": "Portal", "archetype": "list", "entity": "SupplierPortalAccess", "flagship": false} },
  },
  {
    path: "supplier-portal-admin/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M2.12", "title": "Supplier Portal Admin — record", "module": "M2", "section": "Portal", "archetype": "object", "entity": "SupplierPortalAccess", "flagship": false} },
  },
];
