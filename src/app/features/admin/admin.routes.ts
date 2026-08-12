import { Routes } from '@angular/router';

/**
 * M13 · Administration — 18 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: "company-and-business-units", pathMatch: 'full' },
  {
    path: "company-and-business-units",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.1", "title": "Company & Business Units", "module": "M13", "section": "General", "archetype": "list", "entity": "Company", "flagship": false} },
  },
  {
    path: "company-and-business-units/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.1", "title": "Company & Business Units — record", "module": "M13", "section": "General", "archetype": "object", "entity": "Company", "flagship": false} },
  },
  {
    path: "unit-capability/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.2", "title": "Unit Capability", "module": "M13", "section": "General", "archetype": "object", "entity": "UnitCapability", "flagship": false} },
  },
  {
    path: "users",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.3", "title": "Users", "module": "M13", "section": "General", "archetype": "list", "entity": "AppUser", "flagship": false} },
  },
  {
    path: "users/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.3", "title": "Users — record", "module": "M13", "section": "General", "archetype": "object", "entity": "AppUser", "flagship": false} },
  },
  {
    path: "roles-and-permissions",
    loadComponent: () => import('./roles-permissions-screen.component')
      .then(m => m.RolesPermissionsScreenComponent),
    data: { screen: {"code": "M13.4", "title": "Roles & Permissions", "module": "M13", "section": "General", "archetype": "form", "entity": "Role", "flagship": false} },
  },
  {
    path: "unit-access-grants",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.5", "title": "Unit Access Grants", "module": "M13", "section": "General", "archetype": "list", "entity": "UserUnitAccess", "flagship": false} },
  },
  {
    path: "unit-access-grants/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.5", "title": "Unit Access Grants — record", "module": "M13", "section": "General", "archetype": "object", "entity": "UserUnitAccess", "flagship": false} },
  },
  {
    path: "data-scope-rules",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.6", "title": "Data Scope Rules", "module": "M13", "section": "General", "archetype": "list", "entity": "DataScopeRule", "flagship": false} },
  },
  {
    path: "data-scope-rules/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.6", "title": "Data Scope Rules — record", "module": "M13", "section": "General", "archetype": "object", "entity": "DataScopeRule", "flagship": false} },
  },
  {
    path: "delegation-of-authority",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.7", "title": "Delegation of Authority", "module": "M13", "section": "General", "archetype": "list", "entity": "DelegationOfAuthority", "flagship": false} },
  },
  {
    path: "delegation-of-authority/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.7", "title": "Delegation of Authority — record", "module": "M13", "section": "General", "archetype": "object", "entity": "DelegationOfAuthority", "flagship": false} },
  },
  {
    path: "workflow-designer",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "M13.8", "title": "Workflow Designer", "module": "M13", "section": "General", "archetype": "wizard", "entity": "WorkflowDefinition", "flagship": false} },
  },
  {
    path: "numbering-series",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.9", "title": "Numbering Series", "module": "M13", "section": "General", "archetype": "list", "entity": "NumberingSeries", "flagship": false} },
  },
  {
    path: "numbering-series/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.9", "title": "Numbering Series — record", "module": "M13", "section": "General", "archetype": "object", "entity": "NumberingSeries", "flagship": false} },
  },
  {
    path: "system-settings",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.10", "title": "System Settings", "module": "M13", "section": "General", "archetype": "list", "entity": "SystemSetting", "flagship": false} },
  },
  {
    path: "system-settings/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.10", "title": "System Settings — record", "module": "M13", "section": "General", "archetype": "object", "entity": "SystemSetting", "flagship": false} },
  },
  {
    path: "kpi-alert-rules",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M13.11", "title": "KPI Alert Rules", "module": "M13", "section": "General", "archetype": "board", "entity": "KPIAlert", "flagship": false} },
  },
  {
    path: "notification-channels",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.12", "title": "Notification Channels", "module": "M13", "section": "General", "archetype": "list", "entity": "NotificationChannel", "flagship": false} },
  },
  {
    path: "notification-channels/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.12", "title": "Notification Channels — record", "module": "M13", "section": "General", "archetype": "object", "entity": "NotificationChannel", "flagship": false} },
  },
  {
    path: "bulk-import",
    loadComponent: () => import('../../shared/screens/wizard-screen.component')
      .then(m => m.WizardScreenComponent),
    data: { screen: {"code": "M13.13", "title": "Bulk Import", "module": "M13", "section": "General", "archetype": "wizard", "entity": "DataImportBatch", "flagship": false} },
  },
  {
    path: "audit-log-viewer",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.14", "title": "Audit Log Viewer", "module": "M13", "section": "General", "archetype": "list", "entity": "MasterDataAudit", "flagship": false} },
  },
  {
    path: "audit-log-viewer/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.14", "title": "Audit Log Viewer — record", "module": "M13", "section": "General", "archetype": "object", "entity": "MasterDataAudit", "flagship": false} },
  },
  {
    path: "recycle-bin",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.15", "title": "Recycle Bin", "module": "M13", "section": "General", "archetype": "list", "entity": "SoftDeleteRegistry", "flagship": false} },
  },
  {
    path: "recycle-bin/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.15", "title": "Recycle Bin — record", "module": "M13", "section": "General", "archetype": "object", "entity": "SoftDeleteRegistry", "flagship": false} },
  },
  {
    path: "integrations",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.16", "title": "Integrations", "module": "M13", "section": "General", "archetype": "list", "entity": "IntegrationEndpoint", "flagship": false} },
  },
  {
    path: "integrations/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.16", "title": "Integrations — record", "module": "M13", "section": "General", "archetype": "object", "entity": "IntegrationEndpoint", "flagship": false} },
  },
  {
    path: "localisation-strings",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.17", "title": "Localisation Strings", "module": "M13", "section": "General", "archetype": "list", "entity": "LocalizationString", "flagship": false} },
  },
  {
    path: "localisation-strings/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.17", "title": "Localisation Strings — record", "module": "M13", "section": "General", "archetype": "object", "entity": "LocalizationString", "flagship": false} },
  },
  {
    path: "announcements",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M13.18", "title": "Announcements", "module": "M13", "section": "General", "archetype": "list", "entity": "Announcement", "flagship": false} },
  },
  {
    path: "announcements/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M13.18", "title": "Announcements — record", "module": "M13", "section": "General", "archetype": "object", "entity": "Announcement", "flagship": false} },
  },
];
