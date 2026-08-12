import "./chunk-XANLCPOO.js";

// src/app/features/textile/textile.routes.ts
var TEXTILE_ROUTES = [
  { path: "", redirectTo: "yarn-lot-register", pathMatch: "full" },
  {
    path: "yarn-lot-register",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M11.1", "title": "Yarn Lot Register", "module": "M11", "section": "Yarn", "archetype": "list", "entity": "YarnLot", "flagship": false } }
  },
  {
    path: "yarn-lot-register/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M11.1", "title": "Yarn Lot Register \u2014 record", "module": "M11", "section": "Yarn", "archetype": "object", "entity": "YarnLot", "flagship": false } }
  },
  {
    path: "knitting-program",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M11.2", "title": "Knitting Program", "module": "M11", "section": "Knit", "archetype": "form", "entity": "KnittingProgram", "flagship": false } }
  },
  {
    path: "knitting-production",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M11.3", "title": "Knitting Production", "module": "M11", "section": "Knit", "archetype": "list", "entity": "KnittingProduction", "flagship": false } }
  },
  {
    path: "knitting-production/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M11.3", "title": "Knitting Production \u2014 record", "module": "M11", "section": "Knit", "archetype": "object", "entity": "KnittingProduction", "flagship": false } }
  },
  {
    path: "greige-fabric-stock",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M11.4", "title": "Greige Fabric Stock", "module": "M11", "section": "Knit", "archetype": "list", "entity": "GreigeFabricRoll", "flagship": false } }
  },
  {
    path: "greige-fabric-stock/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M11.4", "title": "Greige Fabric Stock \u2014 record", "module": "M11", "section": "Knit", "archetype": "object", "entity": "GreigeFabricRoll", "flagship": false } }
  },
  {
    path: "dyeing-recipe",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M11.5", "title": "Dyeing Recipe", "module": "M11", "section": "Dye", "archetype": "form", "entity": "DyeingRecipe", "flagship": false } }
  },
  {
    path: "dyeing-batch/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M11.6", "title": "Dyeing Batch", "module": "M11", "section": "Dye", "archetype": "object", "entity": "DyeingBatch", "flagship": true } }
  },
  {
    path: "reprocess-entry",
    loadComponent: () => import("./chunk-ZVMG3UK3.js").then((m) => m.FormScreenComponent),
    data: { screen: { "code": "M11.7", "title": "Reprocess Entry", "module": "M11", "section": "Dye", "archetype": "form", "entity": "ReprocessEntry", "flagship": false } }
  },
  {
    path: "batch-sequence-optimizer",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "M11.8", "title": "Batch Sequence Optimizer", "module": "M11", "section": "Dye", "archetype": "wizard", "entity": "BatchSequenceOptimizer", "flagship": false } }
  },
  {
    path: "recipe-recommendation",
    loadComponent: () => import("./chunk-MX2CYXBS.js").then((m) => m.WizardScreenComponent),
    data: { screen: { "code": "M11.9", "title": "Recipe Recommendation", "module": "M11", "section": "Dye", "archetype": "wizard", "entity": "RecipeRecommendation", "flagship": false } }
  },
  {
    path: "finishing-process",
    loadComponent: () => import("./chunk-3OI4W6FE.js").then((m) => m.ListScreenComponent),
    data: { screen: { "code": "M11.10", "title": "Finishing Process", "module": "M11", "section": "Finish", "archetype": "list", "entity": "FabricFinishingProcess", "flagship": false } }
  },
  {
    path: "finishing-process/:id",
    loadComponent: () => import("./chunk-WSE4A43E.js").then((m) => m.ObjectScreenComponent),
    data: { screen: { "code": "M11.10", "title": "Finishing Process \u2014 record", "module": "M11", "section": "Finish", "archetype": "object", "entity": "FabricFinishingProcess", "flagship": false } }
  },
  {
    path: "right-first-time-tracker",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M11.11", "title": "Right First Time Tracker", "module": "M11", "section": "Analyse", "archetype": "board", "entity": "RightFirstTimeTracker", "flagship": true } }
  },
  {
    path: "fabric-yield-analysis",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M11.12", "title": "Fabric Yield Analysis", "module": "M11", "section": "Analyse", "archetype": "board", "entity": "FabricYieldAnalysis", "flagship": false } }
  },
  {
    path: "dyeing-cost-sheet",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M11.13", "title": "Dyeing Cost Sheet", "module": "M11", "section": "Analyse", "archetype": "board", "entity": "DyeingCostSheet", "flagship": false } }
  },
  {
    path: "greige-requirement-plan",
    loadComponent: () => import("./chunk-DACD5TMY.js").then((m) => m.BoardScreenComponent),
    data: { screen: { "code": "M11.14", "title": "Greige Requirement Plan", "module": "M11", "section": "Analyse", "archetype": "board", "entity": "GreigeRequirementPlan", "flagship": false } }
  }
];
export {
  TEXTILE_ROUTES
};
//# debugId=eb9f4ae1-1e13-5c5e-89d9-57cbf092d10c
//# sourceMappingURL=chunk-7QMGIUG5.js.map
