import "./chunk-XANLCPOO.js";

// src/app/features/inventory/inventory.routes.ts
var INVENTORY_ROUTES = [
  { path: "", redirectTo: "warehouse-and-bin", pathMatch: "full" },
  {
    path: "warehouse-and-bin",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.1", "title": "Warehouse & Bin", "module": "M3", "section": "Setup", "archetype": "list", "entity": "Warehouse", "flagship": false } }
  },
  {
    path: "warehouse-and-bin/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.1", "title": "Warehouse & Bin \u2014 record", "module": "M3", "section": "Setup", "archetype": "object", "entity": "Warehouse", "flagship": false } }
  },
  {
    path: "uom-conversion",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.2", "title": "UOM Conversion", "module": "M3", "section": "Setup", "archetype": "list", "entity": "UOMConversion", "flagship": false } }
  },
  {
    path: "uom-conversion/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.2", "title": "UOM Conversion \u2014 record", "module": "M3", "section": "Setup", "archetype": "object", "entity": "UOMConversion", "flagship": false } }
  },
  {
    path: "gate-pass-in-out",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.3", "title": "Gate Pass In/Out", "module": "M3", "section": "Receive", "archetype": "list", "entity": "GatePass", "flagship": false } }
  },
  {
    path: "gate-pass-in-out/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.3", "title": "Gate Pass In/Out \u2014 record", "module": "M3", "section": "Receive", "archetype": "object", "entity": "GatePass", "flagship": false } }
  },
  {
    path: "grn/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.4", "title": "GRN", "module": "M3", "section": "Receive", "archetype": "object", "entity": "GRN", "flagship": false } }
  },
  {
    path: "fabric-roll-register/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.5", "title": "Fabric Roll Register", "module": "M3", "section": "Receive", "archetype": "object", "entity": "FabricRoll", "flagship": true } }
  },
  {
    path: "shade-band",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.6", "title": "Shade Band", "module": "M3", "section": "Receive", "archetype": "list", "entity": "ShadeBand", "flagship": false } }
  },
  {
    path: "shade-band/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.6", "title": "Shade Band \u2014 record", "module": "M3", "section": "Receive", "archetype": "object", "entity": "ShadeBand", "flagship": false } }
  },
  {
    path: "barcode-label-print",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.7", "title": "Barcode Label Print", "module": "M3", "section": "Receive", "archetype": "list", "entity": "BarcodeLabel", "flagship": false } }
  },
  {
    path: "barcode-label-print/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.7", "title": "Barcode Label Print \u2014 record", "module": "M3", "section": "Receive", "archetype": "object", "entity": "BarcodeLabel", "flagship": false } }
  },
  {
    path: "material-status-stock-ledger",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "B4", "title": "Material Status / Stock Ledger", "module": "M3", "section": "Stock", "archetype": "list", "entity": "StockLedger", "flagship": true } }
  },
  {
    path: "material-status-stock-ledger/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "B4", "title": "Material Status / Stock Ledger \u2014 record", "module": "M3", "section": "Stock", "archetype": "object", "entity": "StockLedger", "flagship": true } }
  },
  {
    path: "material-readiness-board",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M3.8", "title": "Material Readiness Board", "module": "M3", "section": "Stock", "archetype": "board", "entity": "MaterialReadinessBoard", "flagship": true } }
  },
  {
    path: "stock-issue",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.9", "title": "Stock Issue", "module": "M3", "section": "Stock", "archetype": "list", "entity": "StockIssue", "flagship": false } }
  },
  {
    path: "stock-issue/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.9", "title": "Stock Issue \u2014 record", "module": "M3", "section": "Stock", "archetype": "object", "entity": "StockIssue", "flagship": false } }
  },
  {
    path: "roll-allocation-by-shade",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.10", "title": "Roll Allocation by Shade", "module": "M3", "section": "Stock", "archetype": "list", "entity": "RollAllocationPlan", "flagship": false } }
  },
  {
    path: "roll-allocation-by-shade/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.10", "title": "Roll Allocation by Shade \u2014 record", "module": "M3", "section": "Stock", "archetype": "object", "entity": "RollAllocationPlan", "flagship": false } }
  },
  {
    path: "stock-transfer",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.11", "title": "Stock Transfer", "module": "M3", "section": "Stock", "archetype": "list", "entity": "StockTransfer", "flagship": false } }
  },
  {
    path: "stock-transfer/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.11", "title": "Stock Transfer \u2014 record", "module": "M3", "section": "Stock", "archetype": "object", "entity": "StockTransfer", "flagship": false } }
  },
  {
    path: "inter-unit-transfer",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.12", "title": "Inter-Unit Transfer", "module": "M3", "section": "Stock", "archetype": "list", "entity": "InterUnitTransfer", "flagship": false } }
  },
  {
    path: "inter-unit-transfer/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.12", "title": "Inter-Unit Transfer \u2014 record", "module": "M3", "section": "Stock", "archetype": "object", "entity": "InterUnitTransfer", "flagship": false } }
  },
  {
    path: "physical-count",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M3.13", "title": "Physical Count", "module": "M3", "section": "Stock", "archetype": "form", "entity": "PhysicalStockCount", "flagship": false } }
  },
  {
    path: "general-store-item",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.14", "title": "General Store Item", "module": "M3", "section": "Store", "archetype": "list", "entity": "GeneralStoreItem", "flagship": false } }
  },
  {
    path: "general-store-item/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.14", "title": "General Store Item \u2014 record", "module": "M3", "section": "Store", "archetype": "object", "entity": "GeneralStoreItem", "flagship": false } }
  },
  {
    path: "general-store-issue",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M3.15", "title": "General Store Issue", "module": "M3", "section": "Store", "archetype": "list", "entity": "GeneralStoreIssue", "flagship": false } }
  },
  {
    path: "general-store-issue/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M3.15", "title": "General Store Issue \u2014 record", "module": "M3", "section": "Store", "archetype": "object", "entity": "GeneralStoreIssue", "flagship": false } }
  },
  {
    path: "stock-aging-and-dead-stock",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M3.16", "title": "Stock Aging & Dead Stock", "module": "M3", "section": "Insight", "archetype": "board", "entity": "StockAging", "flagship": false } }
  },
  {
    path: "fabric-reuse-suggestion",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M3.17", "title": "Fabric Reuse Suggestion", "module": "M3", "section": "Insight", "archetype": "board", "entity": "FabricReuseSuggestion", "flagship": false } }
  }
];
export {
  INVENTORY_ROUTES
};
//# debugId=9418cb5d-18d5-52d2-986b-fbbef3aaddd2
//# sourceMappingURL=chunk-LDEWGFK4.js.map
