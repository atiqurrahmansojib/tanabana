import { Routes } from '@angular/router';

/**
 * M8 · Finance — 18 screens.
 * Generated from Product/screen_manifest.json; regenerate with
 * python3 tools/gen_angular.py rather than editing by hand.
 */
export const FINANCE_ROUTES: Routes = [
  { path: '', redirectTo: "chart-of-accounts", pathMatch: 'full' },
  {
    path: "chart-of-accounts",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M8.1", "title": "Chart of Accounts", "module": "M8", "section": "Setup", "archetype": "form", "entity": "ChartOfAccount", "flagship": false} },
  },
  {
    path: "cost-centre",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M8.2", "title": "Cost Centre", "module": "M8", "section": "Setup", "archetype": "list", "entity": "CostCenter", "flagship": false} },
  },
  {
    path: "cost-centre/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M8.2", "title": "Cost Centre — record", "module": "M8", "section": "Setup", "archetype": "object", "entity": "CostCenter", "flagship": false} },
  },
  {
    path: "bank-account",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M8.3", "title": "Bank Account", "module": "M8", "section": "Setup", "archetype": "form", "entity": "BankAccount", "flagship": false} },
  },
  {
    path: "fiscal-period-control",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M8.4", "title": "Fiscal Period Control", "module": "M8", "section": "Setup", "archetype": "list", "entity": "FiscalPeriod", "flagship": false} },
  },
  {
    path: "fiscal-period-control/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M8.4", "title": "Fiscal Period Control — record", "module": "M8", "section": "Setup", "archetype": "object", "entity": "FiscalPeriod", "flagship": false} },
  },
  {
    path: "journal-voucher",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M8.5", "title": "Journal Voucher", "module": "M8", "section": "Transact", "archetype": "form", "entity": "JournalVoucher", "flagship": false} },
  },
  {
    path: "accounts-payable",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M8.6", "title": "Accounts Payable", "module": "M8", "section": "Transact", "archetype": "form", "entity": "AccountsPayable", "flagship": false} },
  },
  {
    path: "accounts-receivable",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M8.7", "title": "Accounts Receivable", "module": "M8", "section": "Transact", "archetype": "form", "entity": "AccountsReceivable", "flagship": false} },
  },
  {
    path: "cash-bank-transaction",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M8.8", "title": "Cash / Bank Transaction", "module": "M8", "section": "Transact", "archetype": "list", "entity": "CashTransaction", "flagship": false} },
  },
  {
    path: "cash-bank-transaction/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M8.8", "title": "Cash / Bank Transaction — record", "module": "M8", "section": "Transact", "archetype": "object", "entity": "CashTransaction", "flagship": false} },
  },
  {
    path: "bank-reconciliation",
    loadComponent: () => import('../../shared/screens/form-screen.component')
      .then(m => m.FormScreenComponent),
    data: { screen: {"code": "M8.9", "title": "Bank Reconciliation", "module": "M8", "section": "Transact", "archetype": "form", "entity": "BankReconciliation", "flagship": false} },
  },
  {
    path: "landed-cost",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M8.10", "title": "Landed Cost", "module": "M8", "section": "Transact", "archetype": "list", "entity": "LandedCost", "flagship": true} },
  },
  {
    path: "landed-cost/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M8.10", "title": "Landed Cost — record", "module": "M8", "section": "Transact", "archetype": "object", "entity": "LandedCost", "flagship": true} },
  },
  {
    path: "fixed-assets",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M8.11", "title": "Fixed Assets", "module": "M8", "section": "Assets", "archetype": "list", "entity": "FixedAsset", "flagship": false} },
  },
  {
    path: "fixed-assets/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M8.11", "title": "Fixed Assets — record", "module": "M8", "section": "Assets", "archetype": "object", "entity": "FixedAsset", "flagship": false} },
  },
  {
    path: "tax-vat",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M8.12", "title": "Tax / VAT", "module": "M8", "section": "Assets", "archetype": "list", "entity": "TaxRecord", "flagship": false} },
  },
  {
    path: "tax-vat/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M8.12", "title": "Tax / VAT — record", "module": "M8", "section": "Assets", "archetype": "object", "entity": "TaxRecord", "flagship": false} },
  },
  {
    path: "company-budget",
    loadComponent: () => import('../../shared/screens/list-screen.component')
      .then(m => m.ListScreenComponent),
    data: { screen: {"code": "M8.13", "title": "Company Budget", "module": "M8", "section": "Assets", "archetype": "list", "entity": "CompanyBudget", "flagship": false} },
  },
  {
    path: "company-budget/:id",
    loadComponent: () => import('../../shared/screens/object-screen.component')
      .then(m => m.ObjectScreenComponent),
    data: { screen: {"code": "M8.13", "title": "Company Budget — record", "module": "M8", "section": "Assets", "archetype": "object", "entity": "CompanyBudget", "flagship": false} },
  },
  {
    path: "cost-variance",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M8.14", "title": "Cost Variance", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "CostVarianceReport", "flagship": false} },
  },
  {
    path: "order-profitability",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M8.15", "title": "Order Profitability", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "OrderProfitability", "flagship": true} },
  },
  {
    path: "unit-profitability-and-consolidation",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M8.16", "title": "Unit Profitability & Consolidation", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "UnitProfitability", "flagship": true} },
  },
  {
    path: "working-capital-forecast",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M8.17", "title": "Working Capital Forecast", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "WorkingCapitalForecast", "flagship": false} },
  },
  {
    path: "payment-aging",
    loadComponent: () => import('../../shared/screens/board-screen.component')
      .then(m => m.BoardScreenComponent),
    data: { screen: {"code": "M8.18", "title": "Payment Aging", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "PaymentAging", "flagship": false} },
  },
];
