import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';

/**
 * Root routing. Login is the entry; everything else sits behind the shell and
 * is lazily loaded per module, so a store keeper never downloads Finance.
 *
 * Generated from Product/screen_manifest.json — 234 screens across
 * 13 modules. Regenerate with python3 tools/gen_angular.py.
 */
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component')
      .then(m => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./shell/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'merchandising' },
      {
        path: "merchandising",
        canActivate: [roleGuard],
        data: { roles: ["MERCH", "OWNER", "IE", "SCM", "COMM", "GM", "FIN"], module: "M1" },
        loadChildren: () => import('./features/merchandising/merchandising.routes')
          .then(m => m.MERCHANDISING_ROUTES),
      },
      {
        path: "supply-chain",
        canActivate: [roleGuard],
        data: { roles: ["SCM", "OWNER", "MERCH", "STORE", "FIN"], module: "M2" },
        loadChildren: () => import('./features/supply-chain/supply-chain.routes')
          .then(m => m.SUPPLY_CHAIN_ROUTES),
      },
      {
        path: "inventory",
        canActivate: [roleGuard],
        data: { roles: ["STORE", "OWNER", "SCM", "GM", "QC", "DYE"], module: "M3" },
        loadChildren: () => import('./features/inventory/inventory.routes')
          .then(m => m.INVENTORY_ROUTES),
      },
      {
        path: "engineering",
        canActivate: [roleGuard],
        data: { roles: ["IE", "OWNER", "MERCH", "GM"], module: "M4" },
        loadChildren: () => import('./features/engineering/engineering.routes')
          .then(m => m.ENGINEERING_ROUTES),
      },
      {
        path: "production",
        canActivate: [roleGuard],
        data: { roles: ["GM", "OWNER", "IE", "QC", "STORE"], module: "M5" },
        loadChildren: () => import('./features/production/production.routes')
          .then(m => m.PRODUCTION_ROUTES),
      },
      {
        path: "quality",
        canActivate: [roleGuard],
        data: { roles: ["QC", "OWNER", "GM", "STORE", "DYE"], module: "M6" },
        loadChildren: () => import('./features/quality/quality.routes')
          .then(m => m.QUALITY_ROUTES),
      },
      {
        path: "commercial",
        canActivate: [roleGuard],
        data: { roles: ["COMM", "OWNER", "MERCH", "FIN"], module: "M7" },
        loadChildren: () => import('./features/commercial/commercial.routes')
          .then(m => m.COMMERCIAL_ROUTES),
      },
      {
        path: "finance",
        canActivate: [roleGuard],
        data: { roles: ["FIN", "OWNER", "COMM", "SCM"], module: "M8" },
        loadChildren: () => import('./features/finance/finance.routes')
          .then(m => m.FINANCE_ROUTES),
      },
      {
        path: "hr",
        canActivate: [roleGuard],
        data: { roles: ["HR", "OWNER", "GM"], module: "M9" },
        loadChildren: () => import('./features/hr/hr.routes')
          .then(m => m.HR_ROUTES),
      },
      {
        path: "compliance",
        canActivate: [roleGuard],
        data: { roles: ["HR", "OWNER", "QC", "COMM"], module: "M10" },
        loadChildren: () => import('./features/compliance/compliance.routes')
          .then(m => m.COMPLIANCE_ROUTES),
      },
      {
        path: "textile",
        canActivate: [roleGuard],
        data: { roles: ["DYE", "OWNER", "STORE", "QC"], module: "M11" },
        loadChildren: () => import('./features/textile/textile.routes')
          .then(m => m.TEXTILE_ROUTES),
      },
      {
        path: "reports",
        canActivate: [roleGuard],
        data: { roles: ["ADMIN", "OWNER", "MERCH", "SCM", "GM", "QC", "COMM", "FIN", "HR", "IE"], module: "M12" },
        loadChildren: () => import('./features/reports/reports.routes')
          .then(m => m.REPORTS_ROUTES),
      },
      {
        path: "admin",
        canActivate: [roleGuard],
        data: { roles: ["ADMIN", "OWNER"], module: "M13" },
        loadChildren: () => import('./features/admin/admin.routes')
          .then(m => m.ADMIN_ROUTES),
      },
      {
        path: 'denied',
        loadComponent: () => import('./shell/denied.component')
          .then(m => m.DeniedComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
