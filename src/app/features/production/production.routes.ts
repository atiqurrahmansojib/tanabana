import { Routes } from '@angular/router';

/**
 * M5 · Production — 23 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const PRODUCTION_ROUTES: Routes = [
  { path: '', redirectTo: "production-line", pathMatch: 'full' },
  {
    path: "production-line",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.1", "title": "Production Line", "module": "M5", "section": "Setup", "archetype": "list", "entity": "ProductionLine", "flagship": false} },
  },
  {
    path: "production-line/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.1", "title": "Production Line — record", "module": "M5", "section": "Setup", "archetype": "object", "entity": "ProductionLine", "flagship": false} },
  },
  {
    path: "machine-register",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.2", "title": "Machine Register", "module": "M5", "section": "Setup", "archetype": "list", "entity": "Machine", "flagship": false} },
  },
  {
    path: "machine-register/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.2", "title": "Machine Register — record", "module": "M5", "section": "Setup", "archetype": "object", "entity": "Machine", "flagship": false} },
  },
  {
    path: "subcontractor-master",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.3", "title": "Subcontractor Master", "module": "M5", "section": "Setup", "archetype": "list", "entity": "Subcontractor", "flagship": false} },
  },
  {
    path: "subcontractor-master/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.3", "title": "Subcontractor Master — record", "module": "M5", "section": "Setup", "archetype": "object", "entity": "Subcontractor", "flagship": false} },
  },
  {
    path: "capacity-plan/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.4", "title": "Capacity Plan", "module": "M5", "section": "Plan", "archetype": "object", "entity": "CapacityPlan", "flagship": false} },
  },
  {
    path: "cut-plan-size-colour/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.5", "title": "Cut Plan (size/colour)", "module": "M5", "section": "Plan", "archetype": "object", "entity": "CutPlan", "flagship": true} },
  },
  {
    path: "marker-plan",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.6", "title": "Marker Plan", "module": "M5", "section": "Plan", "archetype": "list", "entity": "MarkerPlan", "flagship": false} },
  },
  {
    path: "marker-plan/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.6", "title": "Marker Plan — record", "module": "M5", "section": "Plan", "archetype": "object", "entity": "MarkerPlan", "flagship": false} },
  },
  {
    path: "line-allocation",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.7", "title": "Line Allocation", "module": "M5", "section": "Plan", "archetype": "list", "entity": "LineAllocation", "flagship": false} },
  },
  {
    path: "line-allocation/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.7", "title": "Line Allocation — record", "module": "M5", "section": "Plan", "archetype": "object", "entity": "LineAllocation", "flagship": false} },
  },
  {
    path: "cutting-entry",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "E", "title": "Cutting Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "CuttingEntry", "flagship": true} },
  },
  {
    path: "bundle-register",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "E.1", "title": "Bundle Register", "module": "M5", "section": "Execute", "archetype": "list", "entity": "CutPanelBundle", "flagship": false} },
  },
  {
    path: "bundle-register/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "E.1", "title": "Bundle Register — record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "CutPanelBundle", "flagship": false} },
  },
  {
    path: "bundle-tracking",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "E.2", "title": "Bundle Tracking", "module": "M5", "section": "Execute", "archetype": "list", "entity": "BundleTracking", "flagship": false} },
  },
  {
    path: "bundle-tracking/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "E.2", "title": "Bundle Tracking — record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "BundleTracking", "flagship": false} },
  },
  {
    path: "emb-print-entry",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M5.8", "title": "EMB / Print Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "EmbPrintEntry", "flagship": false} },
  },
  {
    path: "wash-entry",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "F", "title": "Wash Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "WashEntry", "flagship": true} },
  },
  {
    path: "sewing-hourly-entry",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M5.9", "title": "Sewing — Hourly Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "HourlyProduction", "flagship": false} },
  },
  {
    path: "rework-entry",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M5.10", "title": "Rework Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "ReworkEntry", "flagship": false} },
  },
  {
    path: "finishing-entry",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "G", "title": "Finishing Entry", "module": "M5", "section": "Execute", "archetype": "form", "entity": "FinishingEntry", "flagship": true} },
  },
  {
    path: "packing-list-and-assortment",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.11", "title": "Packing List & Assortment", "module": "M5", "section": "Execute", "archetype": "list", "entity": "PackingList", "flagship": false} },
  },
  {
    path: "packing-list-and-assortment/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.11", "title": "Packing List & Assortment — record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "PackingList", "flagship": false} },
  },
  {
    path: "container-loading-plan",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.12", "title": "Container Loading Plan", "module": "M5", "section": "Execute", "archetype": "list", "entity": "ContainerLoadingPlan", "flagship": false} },
  },
  {
    path: "container-loading-plan/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.12", "title": "Container Loading Plan — record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "ContainerLoadingPlan", "flagship": false} },
  },
  {
    path: "subcontract-order",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.13", "title": "Subcontract Order", "module": "M5", "section": "Execute", "archetype": "list", "entity": "SubcontractOrder", "flagship": false} },
  },
  {
    path: "subcontract-order/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.13", "title": "Subcontract Order — record", "module": "M5", "section": "Execute", "archetype": "object", "entity": "SubcontractOrder", "flagship": false} },
  },
  {
    path: "production-dashboard",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M5.14", "title": "Production Dashboard", "module": "M5", "section": "Monitor", "archetype": "board", "entity": "ProductionDashboard", "flagship": true} },
  },
  {
    path: "andon-board",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M5.15", "title": "Andon Board", "module": "M5", "section": "Monitor", "archetype": "board", "entity": "DigitalAndonAlert", "flagship": false} },
  },
  {
    path: "bottleneck-alerts",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M5.16", "title": "Bottleneck Alerts", "module": "M5", "section": "Monitor", "archetype": "board", "entity": "BottleneckAlert", "flagship": false} },
  },
  {
    path: "machine-maintenance",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.17", "title": "Machine Maintenance", "module": "M5", "section": "Maintain", "archetype": "list", "entity": "MachineMaintenance", "flagship": false} },
  },
  {
    path: "machine-maintenance/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.17", "title": "Machine Maintenance — record", "module": "M5", "section": "Maintain", "archetype": "object", "entity": "MachineMaintenance", "flagship": false} },
  },
  {
    path: "spare-parts",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M5.18", "title": "Spare Parts", "module": "M5", "section": "Maintain", "archetype": "list", "entity": "MachineSparePart", "flagship": false} },
  },
  {
    path: "spare-parts/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M5.18", "title": "Spare Parts — record", "module": "M5", "section": "Maintain", "archetype": "object", "entity": "MachineSparePart", "flagship": false} },
  },
];
