import "./chunk-XANLCPOO.js";

// src/app/features/admin/admin.routes.ts
var ADMIN_ROUTES = [
  { path: "", redirectTo: "company-and-business-units", pathMatch: "full" },
  {
    path: "company-and-business-units",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.1", "title": "Company & Business Units", "module": "M13", "section": "General", "archetype": "list", "entity": "Company", "flagship": false } }
  },
  {
    path: "company-and-business-units/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.1", "title": "Company & Business Units \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "Company", "flagship": false } }
  },
  {
    path: "unit-capability/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.2", "title": "Unit Capability", "module": "M13", "section": "General", "archetype": "object", "entity": "UnitCapability", "flagship": false } }
  },
  {
    path: "users",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.3", "title": "Users", "module": "M13", "section": "General", "archetype": "list", "entity": "AppUser", "flagship": false } }
  },
  {
    path: "users/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.3", "title": "Users \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "AppUser", "flagship": false } }
  },
  {
    path: "roles-and-permissions",
    loadComponent: () => import("./chunk-N4LUFWVN.js").then((m) => m.RolesPermissionsScreenComponent),
    data: { screen: { "code": "M13.4", "title": "Roles & Permissions", "module": "M13", "section": "General", "archetype": "form", "entity": "Role", "flagship": false } }
  },
  {
    path: "unit-access-grants",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.5", "title": "Unit Access Grants", "module": "M13", "section": "General", "archetype": "list", "entity": "UserUnitAccess", "flagship": false } }
  },
  {
    path: "unit-access-grants/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.5", "title": "Unit Access Grants \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "UserUnitAccess", "flagship": false } }
  },
  {
    path: "data-scope-rules",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.6", "title": "Data Scope Rules", "module": "M13", "section": "General", "archetype": "list", "entity": "DataScopeRule", "flagship": false } }
  },
  {
    path: "data-scope-rules/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.6", "title": "Data Scope Rules \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "DataScopeRule", "flagship": false } }
  },
  {
    path: "delegation-of-authority",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.7", "title": "Delegation of Authority", "module": "M13", "section": "General", "archetype": "list", "entity": "DelegationOfAuthority", "flagship": false } }
  },
  {
    path: "delegation-of-authority/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.7", "title": "Delegation of Authority \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "DelegationOfAuthority", "flagship": false } }
  },
  {
    path: "workflow-designer",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "M13.8", "title": "Workflow Designer", "module": "M13", "section": "General", "archetype": "wizard", "entity": "WorkflowDefinition", "flagship": false } }
  },
  {
    path: "numbering-series",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.9", "title": "Numbering Series", "module": "M13", "section": "General", "archetype": "list", "entity": "NumberingSeries", "flagship": false } }
  },
  {
    path: "numbering-series/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.9", "title": "Numbering Series \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "NumberingSeries", "flagship": false } }
  },
  {
    path: "system-settings",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.10", "title": "System Settings", "module": "M13", "section": "General", "archetype": "list", "entity": "SystemSetting", "flagship": false } }
  },
  {
    path: "system-settings/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.10", "title": "System Settings \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "SystemSetting", "flagship": false } }
  },
  {
    path: "kpi-alert-rules",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M13.11", "title": "KPI Alert Rules", "module": "M13", "section": "General", "archetype": "board", "entity": "KPIAlert", "flagship": false } }
  },
  {
    path: "notification-channels",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.12", "title": "Notification Channels", "module": "M13", "section": "General", "archetype": "list", "entity": "NotificationChannel", "flagship": false } }
  },
  {
    path: "notification-channels/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.12", "title": "Notification Channels \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "NotificationChannel", "flagship": false } }
  },
  {
    path: "bulk-import",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "M13.13", "title": "Bulk Import", "module": "M13", "section": "General", "archetype": "wizard", "entity": "DataImportBatch", "flagship": false } }
  },
  {
    path: "audit-log-viewer",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.14", "title": "Audit Log Viewer", "module": "M13", "section": "General", "archetype": "list", "entity": "MasterDataAudit", "flagship": false } }
  },
  {
    path: "audit-log-viewer/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.14", "title": "Audit Log Viewer \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "MasterDataAudit", "flagship": false } }
  },
  {
    path: "recycle-bin",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.15", "title": "Recycle Bin", "module": "M13", "section": "General", "archetype": "list", "entity": "SoftDeleteRegistry", "flagship": false } }
  },
  {
    path: "recycle-bin/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.15", "title": "Recycle Bin \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "SoftDeleteRegistry", "flagship": false } }
  },
  {
    path: "integrations",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.16", "title": "Integrations", "module": "M13", "section": "General", "archetype": "list", "entity": "IntegrationEndpoint", "flagship": false } }
  },
  {
    path: "integrations/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.16", "title": "Integrations \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "IntegrationEndpoint", "flagship": false } }
  },
  {
    path: "localisation-strings",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.17", "title": "Localisation Strings", "module": "M13", "section": "General", "archetype": "list", "entity": "LocalizationString", "flagship": false } }
  },
  {
    path: "localisation-strings/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.17", "title": "Localisation Strings \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "LocalizationString", "flagship": false } }
  },
  {
    path: "announcements",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M13.18", "title": "Announcements", "module": "M13", "section": "General", "archetype": "list", "entity": "Announcement", "flagship": false } }
  },
  {
    path: "announcements/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M13.18", "title": "Announcements \u2014 record", "module": "M13", "section": "General", "archetype": "object", "entity": "Announcement", "flagship": false } }
  }
];
export {
  ADMIN_ROUTES
};
//# debugId=2922c30c-bf1f-585d-8b2a-46c391429e95
//# sourceMappingURL=chunk-WSWMIK5U.js.map
