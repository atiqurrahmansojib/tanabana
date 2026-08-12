import { Routes } from '@angular/router';

/**
 * M1 · Merchandising — 26 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const MERCHANDISING_ROUTES: Routes = [
  { path: '', redirectTo: "buyer-master", pathMatch: 'full' },
  {
    path: "buyer-master",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M1.1", "title": "Buyer Master", "module": "M1", "section": "Master", "archetype": "list", "entity": "Buyer", "flagship": false} },
  },
  {
    path: "buyer-master/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M1.1", "title": "Buyer Master — record", "module": "M1", "section": "Master", "archetype": "object", "entity": "Buyer", "flagship": false} },
  },
  {
    path: "colour-master",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M1.2", "title": "Colour Master", "module": "M1", "section": "Master", "archetype": "list", "entity": "Color", "flagship": false} },
  },
  {
    path: "colour-master/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M1.2", "title": "Colour Master — record", "module": "M1", "section": "Master", "archetype": "object", "entity": "Color", "flagship": false} },
  },
  {
    path: "tna-template-builder",
    loadComponent: () => import('./tna-template-screen.component')
      .then(m => m.TnaTemplateScreenComponent),
    data: { screen: {"code": "M1.3", "title": "TNA Template Builder", "module": "M1", "section": "Master", "archetype": "wizard", "entity": "TNATemplate", "flagship": false} },
  },
  {
    path: "costing-template",
    loadComponent: () => import('./costing-template-screen.component')
      .then(m => m.CostingTemplateScreenComponent),
    data: { screen: {"code": "M1.4", "title": "Costing Template", "module": "M1", "section": "Costing", "archetype": "list", "entity": "CostingTemplate", "flagship": false} },
  },
  {
    path: "costing-template/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M1.4", "title": "Costing Template — record", "module": "M1", "section": "Costing", "archetype": "object", "entity": "CostingTemplate", "flagship": false} },
  },
  {
    path: "style-details/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A1", "title": "Style Details", "module": "M1", "section": "Style", "archetype": "object", "entity": "Style", "flagship": true} },
  },
  {
    path: "style-library-and-clone",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "A1.1", "title": "Style Library & Clone", "module": "M1", "section": "Style", "archetype": "wizard", "entity": "Style", "flagship": false} },
  },
  {
    path: "measurement-spec-pom",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "A1.2", "title": "Measurement Spec (POM)", "module": "M1", "section": "Style", "archetype": "list", "entity": "StyleMeasurementSpec", "flagship": false} },
  },
  {
    path: "measurement-spec-pom/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A1.2", "title": "Measurement Spec (POM) — record", "module": "M1", "section": "Style", "archetype": "object", "entity": "StyleMeasurementSpec", "flagship": false} },
  },
  {
    path: "sample-request",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "A1.3", "title": "Sample Request", "module": "M1", "section": "Style", "archetype": "list", "entity": "SampleRequest", "flagship": false} },
  },
  {
    path: "sample-request/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A1.3", "title": "Sample Request — record", "module": "M1", "section": "Style", "archetype": "object", "entity": "SampleRequest", "flagship": false} },
  },
  {
    path: "sample-costing",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "A1.4", "title": "Sample Costing", "module": "M1", "section": "Style", "archetype": "list", "entity": "SampleCosting", "flagship": false} },
  },
  {
    path: "sample-costing/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A1.4", "title": "Sample Costing — record", "module": "M1", "section": "Style", "archetype": "object", "entity": "SampleCosting", "flagship": false} },
  },
  {
    path: "buyer-approval-tracker",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "A1.5", "title": "Buyer Approval Tracker", "module": "M1", "section": "Style", "archetype": "board", "entity": "BuyerApprovalSubmission", "flagship": true} },
  },
  {
    path: "pre-costing/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A2", "title": "Pre-Costing", "module": "M1", "section": "Costing", "archetype": "object", "entity": "Costing", "flagship": true} },
  },
  {
    path: "costing-simulator",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "A2.1", "title": "Costing Simulator", "module": "M1", "section": "Costing", "archetype": "wizard", "entity": "CostingSimulation", "flagship": false} },
  },
  {
    path: "costing-revisions",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "A2.2", "title": "Costing Revisions", "module": "M1", "section": "Costing", "archetype": "list", "entity": "CostingRevisionHistory", "flagship": false} },
  },
  {
    path: "costing-revisions/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A2.2", "title": "Costing Revisions — record", "module": "M1", "section": "Costing", "archetype": "object", "entity": "CostingRevisionHistory", "flagship": false} },
  },
  {
    path: "final-costing/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A3", "title": "Final Costing", "module": "M1", "section": "Costing", "archetype": "object", "entity": "FinalCosting", "flagship": true} },
  },
  {
    path: "buyer-price-history",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "A3.1", "title": "Buyer Price History", "module": "M1", "section": "Costing", "archetype": "list", "entity": "BuyerPriceHistory", "flagship": false} },
  },
  {
    path: "buyer-price-history/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A3.1", "title": "Buyer Price History — record", "module": "M1", "section": "Costing", "archetype": "object", "entity": "BuyerPriceHistory", "flagship": false} },
  },
  {
    path: "order-breakdown-po-summary/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A4-A", "title": "Order Breakdown — PO summary", "module": "M1", "section": "Order", "archetype": "object", "entity": "PurchaseOrder", "flagship": true} },
  },
  {
    path: "order-breakdown-size-colour/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A4-B", "title": "Order Breakdown — size/colour", "module": "M1", "section": "Order", "archetype": "object", "entity": "POSizeBreakdown", "flagship": true} },
  },
  {
    path: "po-amendment-log",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "A4.1", "title": "PO Amendment Log", "module": "M1", "section": "Order", "archetype": "list", "entity": "POAmendment", "flagship": false} },
  },
  {
    path: "po-amendment-log/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A4.1", "title": "PO Amendment Log — record", "module": "M1", "section": "Order", "archetype": "object", "entity": "POAmendment", "flagship": false} },
  },
  {
    path: "sales-contract-and-budget/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "A5", "title": "Sales Contract & Budget", "module": "M1", "section": "Order", "archetype": "object", "entity": "SalesContract", "flagship": true} },
  },
  {
    path: "bom-generate",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "A6", "title": "BOM Generate", "module": "M1", "section": "Order", "archetype": "wizard", "entity": "BOMItem", "flagship": true} },
  },
  {
    path: "my-tasks",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "C1", "title": "My Tasks", "module": "M1", "section": "T&A", "archetype": "list", "entity": "Task", "flagship": true} },
  },
  {
    path: "my-tasks/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "C1", "title": "My Tasks — record", "module": "M1", "section": "T&A", "archetype": "object", "entity": "Task", "flagship": true} },
  },
  {
    path: "traffic-light-board",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "C2", "title": "Traffic Light Board", "module": "M1", "section": "T&A", "archetype": "board", "entity": "Task", "flagship": true} },
  },
  {
    path: "tna-re-baseline",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "C2.1", "title": "TNA Re-baseline", "module": "M1", "section": "T&A", "archetype": "wizard", "entity": "TNARebaseline", "flagship": false} },
  },
  {
    path: "order-timeline",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "C2.2", "title": "Order Timeline", "module": "M1", "section": "T&A", "archetype": "board", "entity": "OrderTimeline", "flagship": false} },
  },
  {
    path: "buyer-scorecard",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M1.9", "title": "Buyer Scorecard", "module": "M1", "section": "Insight", "archetype": "board", "entity": "BuyerScorecard", "flagship": false} },
  },
  {
    path: "consumption-learning",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M1.10", "title": "Consumption Learning", "module": "M1", "section": "Insight", "archetype": "board", "entity": "ConsumptionLearning", "flagship": false} },
  },
];
