import { Routes } from '@angular/router';

/**
 * M4 · Industrial Engineering — 19 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const ENGINEERING_ROUTES: Routes = [
  { path: '', redirectTo: "machine-type", pathMatch: 'full' },
  {
    path: "machine-type",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M4.1", "title": "Machine Type", "module": "M4", "section": "Master", "archetype": "list", "entity": "MachineType", "flagship": false} },
  },
  {
    path: "machine-type/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.1", "title": "Machine Type — record", "module": "M4", "section": "Master", "archetype": "object", "entity": "MachineType", "flagship": false} },
  },
  {
    path: "operation-master",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M4.2", "title": "Operation Master", "module": "M4", "section": "Master", "archetype": "list", "entity": "OperationMaster", "flagship": false} },
  },
  {
    path: "operation-master/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.2", "title": "Operation Master — record", "module": "M4", "section": "Master", "archetype": "object", "entity": "OperationMaster", "flagship": false} },
  },
  {
    path: "learning-curve-profile",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M4.3", "title": "Learning Curve Profile", "module": "M4", "section": "Master", "archetype": "board", "entity": "LearningCurveProfile", "flagship": false} },
  },
  {
    path: "time-study",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M4.4", "title": "Time Study", "module": "M4", "section": "Engineer", "archetype": "form", "entity": "TimeStudy", "flagship": true} },
  },
  {
    path: "operation-bulletin/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.5", "title": "Operation Bulletin", "module": "M4", "section": "Engineer", "archetype": "object", "entity": "OperationBulletin", "flagship": true} },
  },
  {
    path: "line-balancing",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M4.6", "title": "Line Balancing", "module": "M4", "section": "Engineer", "archetype": "board", "entity": "LineBalancing", "flagship": false} },
  },
  {
    path: "line-layout",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M4.7", "title": "Line Layout", "module": "M4", "section": "Engineer", "archetype": "list", "entity": "LineLayout", "flagship": false} },
  },
  {
    path: "line-layout/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.7", "title": "Line Layout — record", "module": "M4", "section": "Engineer", "archetype": "object", "entity": "LineLayout", "flagship": false} },
  },
  {
    path: "workstation-assignment",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M4.8", "title": "Workstation Assignment", "module": "M4", "section": "Engineer", "archetype": "list", "entity": "WorkstationAssignment", "flagship": false} },
  },
  {
    path: "workstation-assignment/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.8", "title": "Workstation Assignment — record", "module": "M4", "section": "Engineer", "archetype": "object", "entity": "WorkstationAssignment", "flagship": false} },
  },
  {
    path: "capacity-calendar-minutes",
    loadComponent: () => import('../../shared/screens/calendar-screen.component')
      .then(m => m.CalendarScreenComponent),
    data: { screen: {"code": "M4.9", "title": "Capacity Calendar (minutes)", "module": "M4", "section": "Capacity", "archetype": "calendar", "entity": "LineCapacityCalendar", "flagship": true} },
  },
  {
    path: "capacity-booking",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M4.10", "title": "Capacity Booking", "module": "M4", "section": "Capacity", "archetype": "form", "entity": "CapacityBooking", "flagship": false} },
  },
  {
    path: "unit-load-balancer",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M4.11", "title": "Unit Load Balancer", "module": "M4", "section": "Capacity", "archetype": "list", "entity": "UnitLoadBalancer", "flagship": false} },
  },
  {
    path: "unit-load-balancer/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.11", "title": "Unit Load Balancer — record", "module": "M4", "section": "Capacity", "archetype": "object", "entity": "UnitLoadBalancer", "flagship": false} },
  },
  {
    path: "order-acceptance-score",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M4.12", "title": "Order Acceptance Score", "module": "M4", "section": "Capacity", "archetype": "board", "entity": "OrderAcceptanceScore", "flagship": true} },
  },
  {
    path: "cost-per-minute",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M4.13", "title": "Cost Per Minute", "module": "M4", "section": "Cost", "archetype": "list", "entity": "CostPerMinute", "flagship": false} },
  },
  {
    path: "cost-per-minute/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.13", "title": "Cost Per Minute — record", "module": "M4", "section": "Cost", "archetype": "object", "entity": "CostPerMinute", "flagship": false} },
  },
  {
    path: "cm-calculation",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M4.14", "title": "CM Calculation", "module": "M4", "section": "Cost", "archetype": "list", "entity": "CMCalculation", "flagship": true} },
  },
  {
    path: "cm-calculation/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M4.14", "title": "CM Calculation — record", "module": "M4", "section": "Cost", "archetype": "object", "entity": "CMCalculation", "flagship": true} },
  },
  {
    path: "productivity-analysis",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M4.15", "title": "Productivity Analysis", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "ProductivityAnalysis", "flagship": false} },
  },
  {
    path: "non-productive-time",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M4.16", "title": "Non-Productive Time", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "NonProductiveTime", "flagship": false} },
  },
  {
    path: "delivery-prediction",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M4.17", "title": "Delivery Prediction", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "DeliveryPrediction", "flagship": true} },
  },
  {
    path: "disruption-simulation",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "M4.18", "title": "Disruption Simulation", "module": "M4", "section": "Monitor", "archetype": "wizard", "entity": "DisruptionSimulation", "flagship": false} },
  },
  {
    path: "smv-accuracy-feedback",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M4.19", "title": "SMV Accuracy Feedback", "module": "M4", "section": "Monitor", "archetype": "board", "entity": "SMVAccuracyFeedback", "flagship": false} },
  },
];
