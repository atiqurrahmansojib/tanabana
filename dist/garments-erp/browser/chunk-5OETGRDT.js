import "./chunk-XANLCPOO.js";

// src/app/features/finance/finance.routes.ts
var FINANCE_ROUTES = [
  { path: "", redirectTo: "chart-of-accounts", pathMatch: "full" },
  {
    path: "chart-of-accounts",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M8.1", "title": "Chart of Accounts", "module": "M8", "section": "Setup", "archetype": "form", "entity": "ChartOfAccount", "flagship": false } }
  },
  {
    path: "cost-centre",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M8.2", "title": "Cost Centre", "module": "M8", "section": "Setup", "archetype": "list", "entity": "CostCenter", "flagship": false } }
  },
  {
    path: "cost-centre/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M8.2", "title": "Cost Centre \u2014 record", "module": "M8", "section": "Setup", "archetype": "object", "entity": "CostCenter", "flagship": false } }
  },
  {
    path: "bank-account",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M8.3", "title": "Bank Account", "module": "M8", "section": "Setup", "archetype": "form", "entity": "BankAccount", "flagship": false } }
  },
  {
    path: "fiscal-period-control",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M8.4", "title": "Fiscal Period Control", "module": "M8", "section": "Setup", "archetype": "list", "entity": "FiscalPeriod", "flagship": false } }
  },
  {
    path: "fiscal-period-control/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M8.4", "title": "Fiscal Period Control \u2014 record", "module": "M8", "section": "Setup", "archetype": "object", "entity": "FiscalPeriod", "flagship": false } }
  },
  {
    path: "journal-voucher",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M8.5", "title": "Journal Voucher", "module": "M8", "section": "Transact", "archetype": "form", "entity": "JournalVoucher", "flagship": false } }
  },
  {
    path: "accounts-payable",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M8.6", "title": "Accounts Payable", "module": "M8", "section": "Transact", "archetype": "form", "entity": "AccountsPayable", "flagship": false } }
  },
  {
    path: "accounts-receivable",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M8.7", "title": "Accounts Receivable", "module": "M8", "section": "Transact", "archetype": "form", "entity": "AccountsReceivable", "flagship": false } }
  },
  {
    path: "cash-bank-transaction",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M8.8", "title": "Cash / Bank Transaction", "module": "M8", "section": "Transact", "archetype": "list", "entity": "CashTransaction", "flagship": false } }
  },
  {
    path: "cash-bank-transaction/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M8.8", "title": "Cash / Bank Transaction \u2014 record", "module": "M8", "section": "Transact", "archetype": "object", "entity": "CashTransaction", "flagship": false } }
  },
  {
    path: "bank-reconciliation",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M8.9", "title": "Bank Reconciliation", "module": "M8", "section": "Transact", "archetype": "form", "entity": "BankReconciliation", "flagship": false } }
  },
  {
    path: "landed-cost",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M8.10", "title": "Landed Cost", "module": "M8", "section": "Transact", "archetype": "list", "entity": "LandedCost", "flagship": true } }
  },
  {
    path: "landed-cost/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M8.10", "title": "Landed Cost \u2014 record", "module": "M8", "section": "Transact", "archetype": "object", "entity": "LandedCost", "flagship": true } }
  },
  {
    path: "fixed-assets",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M8.11", "title": "Fixed Assets", "module": "M8", "section": "Assets", "archetype": "list", "entity": "FixedAsset", "flagship": false } }
  },
  {
    path: "fixed-assets/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M8.11", "title": "Fixed Assets \u2014 record", "module": "M8", "section": "Assets", "archetype": "object", "entity": "FixedAsset", "flagship": false } }
  },
  {
    path: "tax-vat",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M8.12", "title": "Tax / VAT", "module": "M8", "section": "Assets", "archetype": "list", "entity": "TaxRecord", "flagship": false } }
  },
  {
    path: "tax-vat/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M8.12", "title": "Tax / VAT \u2014 record", "module": "M8", "section": "Assets", "archetype": "object", "entity": "TaxRecord", "flagship": false } }
  },
  {
    path: "company-budget",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M8.13", "title": "Company Budget", "module": "M8", "section": "Assets", "archetype": "list", "entity": "CompanyBudget", "flagship": false } }
  },
  {
    path: "company-budget/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M8.13", "title": "Company Budget \u2014 record", "module": "M8", "section": "Assets", "archetype": "object", "entity": "CompanyBudget", "flagship": false } }
  },
  {
    path: "cost-variance",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M8.14", "title": "Cost Variance", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "CostVarianceReport", "flagship": false } }
  },
  {
    path: "order-profitability",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M8.15", "title": "Order Profitability", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "OrderProfitability", "flagship": true } }
  },
  {
    path: "unit-profitability-and-consolidation",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M8.16", "title": "Unit Profitability & Consolidation", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "UnitProfitability", "flagship": true } }
  },
  {
    path: "working-capital-forecast",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M8.17", "title": "Working Capital Forecast", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "WorkingCapitalForecast", "flagship": false } }
  },
  {
    path: "payment-aging",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M8.18", "title": "Payment Aging", "module": "M8", "section": "Analyse", "archetype": "board", "entity": "PaymentAging", "flagship": false } }
  }
];
export {
  FINANCE_ROUTES
};
//# debugId=6056578f-0c51-58b8-887d-1959e29ec0d3
//# sourceMappingURL=chunk-5OETGRDT.js.map
