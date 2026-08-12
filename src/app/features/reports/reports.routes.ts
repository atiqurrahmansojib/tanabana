import { Routes } from '@angular/router';

/**
 * M12 · Reports & Analytics — 5 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const REPORTS_ROUTES: Routes = [
  { path: '', redirectTo: "report-view-fabric", pathMatch: 'full' },
  {
    path: "report-view-fabric",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "D", "title": "Report View — Fabric", "module": "M12", "section": "General", "archetype": "board", "entity": "derived", "flagship": false} },
  },
  {
    path: "report-view-trims",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "D'", "title": "Report View — Trims", "module": "M12", "section": "General", "archetype": "board", "entity": "derived", "flagship": false} },
  },
  {
    path: "report-builder",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "M12.1", "title": "Report Builder", "module": "M12", "section": "General", "archetype": "wizard", "entity": "ReportDefinition", "flagship": false} },
  },
  {
    path: "report-subscriptions",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M12.2", "title": "Report Subscriptions", "module": "M12", "section": "General", "archetype": "list", "entity": "ReportSubscription", "flagship": false} },
  },
  {
    path: "report-subscriptions/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M12.2", "title": "Report Subscriptions — record", "module": "M12", "section": "General", "archetype": "object", "entity": "ReportSubscription", "flagship": false} },
  },
  {
    path: "export-jobs",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M12.3", "title": "Export Jobs", "module": "M12", "section": "General", "archetype": "list", "entity": "ExportJob", "flagship": false} },
  },
  {
    path: "export-jobs/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M12.3", "title": "Export Jobs — record", "module": "M12", "section": "General", "archetype": "object", "entity": "ExportJob", "flagship": false} },
  },
];
