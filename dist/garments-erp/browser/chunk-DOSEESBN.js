// src/app/core/nav/nav.data.ts
var NAV = [
  {
    "module": "M1",
    "label": "Merchandising",
    "path": "/merchandising",
    "owner": "MERCH",
    "roles": [
      "MERCH",
      "OWNER",
      "IE",
      "SCM",
      "COMM",
      "GM",
      "FIN"
    ],
    "sections": [
      {
        "name": "Master",
        "screens": [
          {
            "code": "M1.1",
            "title": "Buyer Master",
            "path": "/merchandising/buyer-master",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M1.2",
            "title": "Colour Master",
            "path": "/merchandising/colour-master",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M1.3",
            "title": "TNA Template Builder",
            "path": "/merchandising/tna-template-builder",
            "archetype": "wizard",
            "flagship": false
          }
        ]
      },
      {
        "name": "Costing",
        "screens": [
          {
            "code": "M1.4",
            "title": "Costing Template",
            "path": "/merchandising/costing-template",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "A2",
            "title": "Pre-Costing",
            "path": "/merchandising/pre-costing",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "A2.1",
            "title": "Costing Simulator",
            "path": "/merchandising/costing-simulator",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "A2.2",
            "title": "Costing Revisions",
            "path": "/merchandising/costing-revisions",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "A3",
            "title": "Final Costing",
            "path": "/merchandising/final-costing",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "A3.1",
            "title": "Buyer Price History",
            "path": "/merchandising/buyer-price-history",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Style",
        "screens": [
          {
            "code": "A1",
            "title": "Style Details",
            "path": "/merchandising/style-details",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "A1.1",
            "title": "Style Library & Clone",
            "path": "/merchandising/style-library-and-clone",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "A1.2",
            "title": "Measurement Spec (POM)",
            "path": "/merchandising/measurement-spec-pom",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "A1.3",
            "title": "Sample Request",
            "path": "/merchandising/sample-request",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "A1.4",
            "title": "Sample Costing",
            "path": "/merchandising/sample-costing",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "A1.5",
            "title": "Buyer Approval Tracker",
            "path": "/merchandising/buyer-approval-tracker",
            "archetype": "board",
            "flagship": true
          }
        ]
      },
      {
        "name": "Order",
        "screens": [
          {
            "code": "A4-A",
            "title": "Order Breakdown \u2014 PO summary",
            "path": "/merchandising/order-breakdown-po-summary",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "A4-B",
            "title": "Order Breakdown \u2014 size/colour",
            "path": "/merchandising/order-breakdown-size-colour",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "A4.1",
            "title": "PO Amendment Log",
            "path": "/merchandising/po-amendment-log",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "A5",
            "title": "Sales Contract & Budget",
            "path": "/merchandising/sales-contract-and-budget",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "A6",
            "title": "BOM Generate",
            "path": "/merchandising/bom-generate",
            "archetype": "wizard",
            "flagship": true
          }
        ]
      },
      {
        "name": "T&A",
        "screens": [
          {
            "code": "C1",
            "title": "My Tasks",
            "path": "/merchandising/my-tasks",
            "archetype": "list",
            "flagship": true
          },
          {
            "code": "C2",
            "title": "Traffic Light Board",
            "path": "/merchandising/traffic-light-board",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "C2.1",
            "title": "TNA Re-baseline",
            "path": "/merchandising/tna-re-baseline",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "C2.2",
            "title": "Order Timeline",
            "path": "/merchandising/order-timeline",
            "archetype": "board",
            "flagship": false
          }
        ]
      },
      {
        "name": "Insight",
        "screens": [
          {
            "code": "M1.9",
            "title": "Buyer Scorecard",
            "path": "/merchandising/buyer-scorecard",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M1.10",
            "title": "Consumption Learning",
            "path": "/merchandising/consumption-learning",
            "archetype": "board",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M2",
    "label": "Supply Chain",
    "path": "/supply-chain",
    "owner": "SCM",
    "roles": [
      "SCM",
      "OWNER",
      "MERCH",
      "STORE",
      "FIN"
    ],
    "sections": [
      {
        "name": "Master",
        "screens": [
          {
            "code": "M2.1",
            "title": "Item Group Hierarchy",
            "path": "/supply-chain/item-group-hierarchy",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M2.2",
            "title": "Item Master",
            "path": "/supply-chain/item-master",
            "archetype": "list",
            "flagship": true
          },
          {
            "code": "M2.3",
            "title": "Supplier Master",
            "path": "/supply-chain/supplier-master",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M2.4",
            "title": "Vendor Rating",
            "path": "/supply-chain/vendor-rating",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Procure",
        "screens": [
          {
            "code": "M2.5",
            "title": "Purchase Requisition",
            "path": "/supply-chain/purchase-requisition",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M2.6",
            "title": "RFQ & Quotation Compare",
            "path": "/supply-chain/rfq-and-quotation-compare",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "B1",
            "title": "SPO \u2014 Fabric",
            "path": "/supply-chain/spo-fabric",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "B2",
            "title": "SPO \u2014 Trims",
            "path": "/supply-chain/spo-trims",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "M2.7",
            "title": "SPO Delivery Schedule",
            "path": "/supply-chain/spo-delivery-schedule",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M2.8",
            "title": "SPO Amendment",
            "path": "/supply-chain/spo-amendment",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "B3",
            "title": "PI Entry",
            "path": "/supply-chain/pi-entry",
            "archetype": "form",
            "flagship": true
          }
        ]
      },
      {
        "name": "Track",
        "screens": [
          {
            "code": "M2.9",
            "title": "Import Shipment Tracking",
            "path": "/supply-chain/import-shipment-tracking",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M2.10",
            "title": "Lead Time Alerts",
            "path": "/supply-chain/lead-time-alerts",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M2.11",
            "title": "Supplier Recommendation",
            "path": "/supply-chain/supplier-recommendation",
            "archetype": "wizard",
            "flagship": false
          }
        ]
      },
      {
        "name": "Portal",
        "screens": [
          {
            "code": "M2.12",
            "title": "Supplier Portal Admin",
            "path": "/supply-chain/supplier-portal-admin",
            "archetype": "list",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M3",
    "label": "Inventory & Store",
    "path": "/inventory",
    "owner": "STORE",
    "roles": [
      "STORE",
      "OWNER",
      "SCM",
      "GM",
      "QC",
      "DYE"
    ],
    "sections": [
      {
        "name": "Setup",
        "screens": [
          {
            "code": "M3.1",
            "title": "Warehouse & Bin",
            "path": "/inventory/warehouse-and-bin",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.2",
            "title": "UOM Conversion",
            "path": "/inventory/uom-conversion",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Receive",
        "screens": [
          {
            "code": "M3.3",
            "title": "Gate Pass In/Out",
            "path": "/inventory/gate-pass-in-out",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.4",
            "title": "GRN",
            "path": "/inventory/grn",
            "archetype": "object",
            "flagship": false
          },
          {
            "code": "M3.5",
            "title": "Fabric Roll Register",
            "path": "/inventory/fabric-roll-register",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "M3.6",
            "title": "Shade Band",
            "path": "/inventory/shade-band",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.7",
            "title": "Barcode Label Print",
            "path": "/inventory/barcode-label-print",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Stock",
        "screens": [
          {
            "code": "B4",
            "title": "Material Status / Stock Ledger",
            "path": "/inventory/material-status-stock-ledger",
            "archetype": "list",
            "flagship": true
          },
          {
            "code": "M3.8",
            "title": "Material Readiness Board",
            "path": "/inventory/material-readiness-board",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M3.9",
            "title": "Stock Issue",
            "path": "/inventory/stock-issue",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.10",
            "title": "Roll Allocation by Shade",
            "path": "/inventory/roll-allocation-by-shade",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.11",
            "title": "Stock Transfer",
            "path": "/inventory/stock-transfer",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.12",
            "title": "Inter-Unit Transfer",
            "path": "/inventory/inter-unit-transfer",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.13",
            "title": "Physical Count",
            "path": "/inventory/physical-count",
            "archetype": "form",
            "flagship": false
          }
        ]
      },
      {
        "name": "Store",
        "screens": [
          {
            "code": "M3.14",
            "title": "General Store Item",
            "path": "/inventory/general-store-item",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M3.15",
            "title": "General Store Issue",
            "path": "/inventory/general-store-issue",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Insight",
        "screens": [
          {
            "code": "M3.16",
            "title": "Stock Aging & Dead Stock",
            "path": "/inventory/stock-aging-and-dead-stock",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M3.17",
            "title": "Fabric Reuse Suggestion",
            "path": "/inventory/fabric-reuse-suggestion",
            "archetype": "board",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M4",
    "label": "Industrial Engineering",
    "path": "/engineering",
    "owner": "IE",
    "roles": [
      "IE",
      "OWNER",
      "MERCH",
      "GM"
    ],
    "sections": [
      {
        "name": "Master",
        "screens": [
          {
            "code": "M4.1",
            "title": "Machine Type",
            "path": "/engineering/machine-type",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M4.2",
            "title": "Operation Master",
            "path": "/engineering/operation-master",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M4.3",
            "title": "Learning Curve Profile",
            "path": "/engineering/learning-curve-profile",
            "archetype": "board",
            "flagship": false
          }
        ]
      },
      {
        "name": "Engineer",
        "screens": [
          {
            "code": "M4.4",
            "title": "Time Study",
            "path": "/engineering/time-study",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M4.5",
            "title": "Operation Bulletin",
            "path": "/engineering/operation-bulletin",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "M4.6",
            "title": "Line Balancing",
            "path": "/engineering/line-balancing",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M4.7",
            "title": "Line Layout",
            "path": "/engineering/line-layout",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M4.8",
            "title": "Workstation Assignment",
            "path": "/engineering/workstation-assignment",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Capacity",
        "screens": [
          {
            "code": "M4.9",
            "title": "Capacity Calendar (minutes)",
            "path": "/engineering/capacity-calendar-minutes",
            "archetype": "calendar",
            "flagship": true
          },
          {
            "code": "M4.10",
            "title": "Capacity Booking",
            "path": "/engineering/capacity-booking",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M4.11",
            "title": "Unit Load Balancer",
            "path": "/engineering/unit-load-balancer",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M4.12",
            "title": "Order Acceptance Score",
            "path": "/engineering/order-acceptance-score",
            "archetype": "board",
            "flagship": true
          }
        ]
      },
      {
        "name": "Cost",
        "screens": [
          {
            "code": "M4.13",
            "title": "Cost Per Minute",
            "path": "/engineering/cost-per-minute",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M4.14",
            "title": "CM Calculation",
            "path": "/engineering/cm-calculation",
            "archetype": "list",
            "flagship": true
          }
        ]
      },
      {
        "name": "Monitor",
        "screens": [
          {
            "code": "M4.15",
            "title": "Productivity Analysis",
            "path": "/engineering/productivity-analysis",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M4.16",
            "title": "Non-Productive Time",
            "path": "/engineering/non-productive-time",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M4.17",
            "title": "Delivery Prediction",
            "path": "/engineering/delivery-prediction",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M4.18",
            "title": "Disruption Simulation",
            "path": "/engineering/disruption-simulation",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "M4.19",
            "title": "SMV Accuracy Feedback",
            "path": "/engineering/smv-accuracy-feedback",
            "archetype": "board",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M5",
    "label": "Production",
    "path": "/production",
    "owner": "GM",
    "roles": [
      "GM",
      "OWNER",
      "IE",
      "QC",
      "STORE"
    ],
    "sections": [
      {
        "name": "Setup",
        "screens": [
          {
            "code": "M5.1",
            "title": "Production Line",
            "path": "/production/production-line",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M5.2",
            "title": "Machine Register",
            "path": "/production/machine-register",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M5.3",
            "title": "Subcontractor Master",
            "path": "/production/subcontractor-master",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Plan",
        "screens": [
          {
            "code": "M5.4",
            "title": "Capacity Plan",
            "path": "/production/capacity-plan",
            "archetype": "object",
            "flagship": false
          },
          {
            "code": "M5.5",
            "title": "Cut Plan (size/colour)",
            "path": "/production/cut-plan-size-colour",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "M5.6",
            "title": "Marker Plan",
            "path": "/production/marker-plan",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M5.7",
            "title": "Line Allocation",
            "path": "/production/line-allocation",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Execute",
        "screens": [
          {
            "code": "E",
            "title": "Cutting Entry",
            "path": "/production/cutting-entry",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "E.1",
            "title": "Bundle Register",
            "path": "/production/bundle-register",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "E.2",
            "title": "Bundle Tracking",
            "path": "/production/bundle-tracking",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M5.8",
            "title": "EMB / Print Entry",
            "path": "/production/emb-print-entry",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "F",
            "title": "Wash Entry",
            "path": "/production/wash-entry",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M5.9",
            "title": "Sewing \u2014 Hourly Entry",
            "path": "/production/sewing-hourly-entry",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M5.10",
            "title": "Rework Entry",
            "path": "/production/rework-entry",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "G",
            "title": "Finishing Entry",
            "path": "/production/finishing-entry",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M5.11",
            "title": "Packing List & Assortment",
            "path": "/production/packing-list-and-assortment",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M5.12",
            "title": "Container Loading Plan",
            "path": "/production/container-loading-plan",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M5.13",
            "title": "Subcontract Order",
            "path": "/production/subcontract-order",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Monitor",
        "screens": [
          {
            "code": "M5.14",
            "title": "Production Dashboard",
            "path": "/production/production-dashboard",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M5.15",
            "title": "Andon Board",
            "path": "/production/andon-board",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M5.16",
            "title": "Bottleneck Alerts",
            "path": "/production/bottleneck-alerts",
            "archetype": "board",
            "flagship": false
          }
        ]
      },
      {
        "name": "Maintain",
        "screens": [
          {
            "code": "M5.17",
            "title": "Machine Maintenance",
            "path": "/production/machine-maintenance",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M5.18",
            "title": "Spare Parts",
            "path": "/production/spare-parts",
            "archetype": "list",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M6",
    "label": "Quality",
    "path": "/quality",
    "owner": "QC",
    "roles": [
      "QC",
      "OWNER",
      "GM",
      "STORE",
      "DYE"
    ],
    "sections": [
      {
        "name": "Master",
        "screens": [
          {
            "code": "M6.1",
            "title": "Defect Code",
            "path": "/quality/defect-code",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.2",
            "title": "AQL Standard",
            "path": "/quality/aql-standard",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.3",
            "title": "Buyer Inspection Criteria",
            "path": "/quality/buyer-inspection-criteria",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Colour",
        "screens": [
          {
            "code": "M6.4",
            "title": "Lab Dip",
            "path": "/quality/lab-dip",
            "archetype": "object",
            "flagship": false
          }
        ]
      },
      {
        "name": "Inspect",
        "screens": [
          {
            "code": "M6.5",
            "title": "Fabric Inspection (4-point)",
            "path": "/quality/fabric-inspection-4-point",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.6",
            "title": "Testing Lab Record",
            "path": "/quality/testing-lab-record",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.7",
            "title": "Inline QC",
            "path": "/quality/inline-qc",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.8",
            "title": "Endline QC",
            "path": "/quality/endline-qc",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.9",
            "title": "Wash Quality Check",
            "path": "/quality/wash-quality-check",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.10",
            "title": "Finishing Audit",
            "path": "/quality/finishing-audit",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M6.11",
            "title": "Measurement Audit (POM)",
            "path": "/quality/measurement-audit-pom",
            "archetype": "list",
            "flagship": true
          },
          {
            "code": "M6.12",
            "title": "Inspection Booking",
            "path": "/quality/inspection-booking",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "H",
            "title": "Final Inspection",
            "path": "/quality/final-inspection",
            "archetype": "object",
            "flagship": true
          }
        ]
      },
      {
        "name": "Improve",
        "screens": [
          {
            "code": "M6.13",
            "title": "CAPA",
            "path": "/quality/capa",
            "archetype": "object",
            "flagship": false
          },
          {
            "code": "M6.14",
            "title": "Defect Trend Analysis",
            "path": "/quality/defect-trend-analysis",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M6.15",
            "title": "Supplier Quality Scorecard",
            "path": "/quality/supplier-quality-scorecard",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M6.16",
            "title": "Cost of Quality",
            "path": "/quality/cost-of-quality",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M6.17",
            "title": "Quality Risk Prediction",
            "path": "/quality/quality-risk-prediction",
            "archetype": "board",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M7",
    "label": "Commercial & Shipping",
    "path": "/commercial",
    "owner": "COMM",
    "roles": [
      "COMM",
      "OWNER",
      "MERCH",
      "FIN"
    ],
    "sections": [
      {
        "name": "Import",
        "screens": [
          {
            "code": "C1'",
            "title": "Import LC",
            "path": "/commercial/import-lc",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "C2'",
            "title": "Utilization Declaration",
            "path": "/commercial/utilization-declaration",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M7.1",
            "title": "LC Expiry Monitor",
            "path": "/commercial/lc-expiry-monitor",
            "archetype": "board",
            "flagship": false
          }
        ]
      },
      {
        "name": "Export",
        "screens": [
          {
            "code": "M7.2",
            "title": "Export LC",
            "path": "/commercial/export-lc",
            "archetype": "object",
            "flagship": false
          },
          {
            "code": "C3",
            "title": "Export Permission",
            "path": "/commercial/export-permission",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M7.3",
            "title": "Commercial Invoice",
            "path": "/commercial/commercial-invoice",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "C4",
            "title": "Shipping Documents",
            "path": "/commercial/shipping-documents",
            "archetype": "list",
            "flagship": true
          },
          {
            "code": "M7.4",
            "title": "Document Checklist",
            "path": "/commercial/document-checklist",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "C5",
            "title": "Forwarder Booking",
            "path": "/commercial/forwarder-booking",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M7.5",
            "title": "Shipment Tracking",
            "path": "/commercial/shipment-tracking",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "C6",
            "title": "Document Submission",
            "path": "/commercial/document-submission",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M7.6",
            "title": "Document Discrepancy",
            "path": "/commercial/document-discrepancy",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "C7",
            "title": "Export Payment",
            "path": "/commercial/export-payment",
            "archetype": "list",
            "flagship": true
          }
        ]
      },
      {
        "name": "Settle",
        "screens": [
          {
            "code": "M7.7",
            "title": "Short / Excess Reconciliation",
            "path": "/commercial/short-excess-reconciliation",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M7.8",
            "title": "Buyer Claim",
            "path": "/commercial/buyer-claim",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M7.9",
            "title": "Export Incentive Claim",
            "path": "/commercial/export-incentive-claim",
            "archetype": "form",
            "flagship": false
          }
        ]
      },
      {
        "name": "Gate",
        "screens": [
          {
            "code": "M7.10",
            "title": "Export Compliance Check",
            "path": "/commercial/export-compliance-check",
            "archetype": "list",
            "flagship": true
          },
          {
            "code": "M7.11",
            "title": "Shipment Mode Advisor",
            "path": "/commercial/shipment-mode-advisor",
            "archetype": "list",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M8",
    "label": "Finance",
    "path": "/finance",
    "owner": "FIN",
    "roles": [
      "FIN",
      "OWNER",
      "COMM",
      "SCM"
    ],
    "sections": [
      {
        "name": "Setup",
        "screens": [
          {
            "code": "M8.1",
            "title": "Chart of Accounts",
            "path": "/finance/chart-of-accounts",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M8.2",
            "title": "Cost Centre",
            "path": "/finance/cost-centre",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M8.3",
            "title": "Bank Account",
            "path": "/finance/bank-account",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M8.4",
            "title": "Fiscal Period Control",
            "path": "/finance/fiscal-period-control",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Transact",
        "screens": [
          {
            "code": "M8.5",
            "title": "Journal Voucher",
            "path": "/finance/journal-voucher",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M8.6",
            "title": "Accounts Payable",
            "path": "/finance/accounts-payable",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M8.7",
            "title": "Accounts Receivable",
            "path": "/finance/accounts-receivable",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M8.8",
            "title": "Cash / Bank Transaction",
            "path": "/finance/cash-bank-transaction",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M8.9",
            "title": "Bank Reconciliation",
            "path": "/finance/bank-reconciliation",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M8.10",
            "title": "Landed Cost",
            "path": "/finance/landed-cost",
            "archetype": "list",
            "flagship": true
          }
        ]
      },
      {
        "name": "Assets",
        "screens": [
          {
            "code": "M8.11",
            "title": "Fixed Assets",
            "path": "/finance/fixed-assets",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M8.12",
            "title": "Tax / VAT",
            "path": "/finance/tax-vat",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M8.13",
            "title": "Company Budget",
            "path": "/finance/company-budget",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Analyse",
        "screens": [
          {
            "code": "M8.14",
            "title": "Cost Variance",
            "path": "/finance/cost-variance",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M8.15",
            "title": "Order Profitability",
            "path": "/finance/order-profitability",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M8.16",
            "title": "Unit Profitability & Consolidation",
            "path": "/finance/unit-profitability-and-consolidation",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M8.17",
            "title": "Working Capital Forecast",
            "path": "/finance/working-capital-forecast",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M8.18",
            "title": "Payment Aging",
            "path": "/finance/payment-aging",
            "archetype": "board",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M9",
    "label": "HR & Payroll",
    "path": "/hr",
    "owner": "HR",
    "roles": [
      "HR",
      "OWNER",
      "GM"
    ],
    "sections": [
      {
        "name": "Master",
        "screens": [
          {
            "code": "M9.1",
            "title": "Employee Master",
            "path": "/hr/employee-master",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.2",
            "title": "Department & Designation",
            "path": "/hr/department-and-designation",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.3",
            "title": "Wage Grade",
            "path": "/hr/wage-grade",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.4",
            "title": "Shift & Holiday Calendar",
            "path": "/hr/shift-and-holiday-calendar",
            "archetype": "calendar",
            "flagship": false
          }
        ]
      },
      {
        "name": "Attend",
        "screens": [
          {
            "code": "M9.5",
            "title": "Attendance Device Monitor",
            "path": "/hr/attendance-device-monitor",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M9.6",
            "title": "Daily Attendance & Correction",
            "path": "/hr/daily-attendance-and-correction",
            "archetype": "form",
            "flagship": true
          },
          {
            "code": "M9.7",
            "title": "Overtime Approval",
            "path": "/hr/overtime-approval",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.8",
            "title": "Manpower Plan",
            "path": "/hr/manpower-plan",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Leave",
        "screens": [
          {
            "code": "M9.9",
            "title": "Leave Application & Balance",
            "path": "/hr/leave-application-and-balance",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M9.10",
            "title": "Maternity Benefit",
            "path": "/hr/maternity-benefit",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Pay",
        "screens": [
          {
            "code": "M9.11",
            "title": "Salary Structure",
            "path": "/hr/salary-structure",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.12",
            "title": "Payroll Run",
            "path": "/hr/payroll-run",
            "archetype": "wizard",
            "flagship": true
          },
          {
            "code": "M9.13",
            "title": "Salary Disbursement",
            "path": "/hr/salary-disbursement",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.14",
            "title": "Festival Bonus",
            "path": "/hr/festival-bonus",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.15",
            "title": "Provident Fund",
            "path": "/hr/provident-fund",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.16",
            "title": "Advance & Recovery",
            "path": "/hr/advance-and-recovery",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.17",
            "title": "Final Settlement",
            "path": "/hr/final-settlement",
            "archetype": "form",
            "flagship": false
          }
        ]
      },
      {
        "name": "Welfare",
        "screens": [
          {
            "code": "M9.18",
            "title": "Grievance Case",
            "path": "/hr/grievance-case",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M9.19",
            "title": "Disciplinary Action",
            "path": "/hr/disciplinary-action",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M9.20",
            "title": "Training Record",
            "path": "/hr/training-record",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M9.21",
            "title": "Worker Skill Matrix",
            "path": "/hr/worker-skill-matrix",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M9.22",
            "title": "Worker Unit Transfer",
            "path": "/hr/worker-unit-transfer",
            "archetype": "list",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M10",
    "label": "Compliance & ESG",
    "path": "/compliance",
    "owner": "HR",
    "roles": [
      "HR",
      "OWNER",
      "QC",
      "COMM"
    ],
    "sections": [
      {
        "name": "Audit",
        "screens": [
          {
            "code": "M10.1",
            "title": "Buyer Code of Conduct",
            "path": "/compliance/buyer-code-of-conduct",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.2",
            "title": "Compliance Audit",
            "path": "/compliance/compliance-audit",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.3",
            "title": "Audit Findings to Closure",
            "path": "/compliance/audit-findings-to-closure",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "M10.4",
            "title": "Audit Readiness Score",
            "path": "/compliance/audit-readiness-score",
            "archetype": "board",
            "flagship": true
          }
        ]
      },
      {
        "name": "Certify",
        "screens": [
          {
            "code": "M10.5",
            "title": "Certification Register",
            "path": "/compliance/certification-register",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.6",
            "title": "Renewal Alerts",
            "path": "/compliance/renewal-alerts",
            "archetype": "board",
            "flagship": false
          }
        ]
      },
      {
        "name": "Safety",
        "screens": [
          {
            "code": "M10.7",
            "title": "Safety Inspection",
            "path": "/compliance/safety-inspection",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.8",
            "title": "Safety Incident",
            "path": "/compliance/safety-incident",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M10.9",
            "title": "Emergency Drill",
            "path": "/compliance/emergency-drill",
            "archetype": "form",
            "flagship": false
          }
        ]
      },
      {
        "name": "Chemical",
        "screens": [
          {
            "code": "M10.10",
            "title": "Chemical Inventory (ZDHC)",
            "path": "/compliance/chemical-inventory-zdhc",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.11",
            "title": "Chemical Usage Log",
            "path": "/compliance/chemical-usage-log",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.12",
            "title": "Restricted Substance Test",
            "path": "/compliance/restricted-substance-test",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Environment",
        "screens": [
          {
            "code": "M10.13",
            "title": "Utility Consumption",
            "path": "/compliance/utility-consumption",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.14",
            "title": "Carbon & Water Footprint",
            "path": "/compliance/carbon-and-water-footprint",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M10.15",
            "title": "Effluent Treatment",
            "path": "/compliance/effluent-treatment",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.16",
            "title": "Waste Record",
            "path": "/compliance/waste-record",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "ESG",
        "screens": [
          {
            "code": "M10.17",
            "title": "Sustainability Ledger (per PO)",
            "path": "/compliance/sustainability-ledger-per-po",
            "archetype": "list",
            "flagship": true
          },
          {
            "code": "M10.18",
            "title": "Recycled Content Trace",
            "path": "/compliance/recycled-content-trace",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.19",
            "title": "Buyer ESG Questionnaire",
            "path": "/compliance/buyer-esg-questionnaire",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M10.20",
            "title": "Higg Assessment",
            "path": "/compliance/higg-assessment",
            "archetype": "list",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M11",
    "label": "Textile Processing",
    "path": "/textile",
    "owner": "DYE",
    "roles": [
      "DYE",
      "OWNER",
      "STORE",
      "QC"
    ],
    "sections": [
      {
        "name": "Yarn",
        "screens": [
          {
            "code": "M11.1",
            "title": "Yarn Lot Register",
            "path": "/textile/yarn-lot-register",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Knit",
        "screens": [
          {
            "code": "M11.2",
            "title": "Knitting Program",
            "path": "/textile/knitting-program",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M11.3",
            "title": "Knitting Production",
            "path": "/textile/knitting-production",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M11.4",
            "title": "Greige Fabric Stock",
            "path": "/textile/greige-fabric-stock",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Dye",
        "screens": [
          {
            "code": "M11.5",
            "title": "Dyeing Recipe",
            "path": "/textile/dyeing-recipe",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M11.6",
            "title": "Dyeing Batch",
            "path": "/textile/dyeing-batch",
            "archetype": "object",
            "flagship": true
          },
          {
            "code": "M11.7",
            "title": "Reprocess Entry",
            "path": "/textile/reprocess-entry",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M11.8",
            "title": "Batch Sequence Optimizer",
            "path": "/textile/batch-sequence-optimizer",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "M11.9",
            "title": "Recipe Recommendation",
            "path": "/textile/recipe-recommendation",
            "archetype": "wizard",
            "flagship": false
          }
        ]
      },
      {
        "name": "Finish",
        "screens": [
          {
            "code": "M11.10",
            "title": "Finishing Process",
            "path": "/textile/finishing-process",
            "archetype": "list",
            "flagship": false
          }
        ]
      },
      {
        "name": "Analyse",
        "screens": [
          {
            "code": "M11.11",
            "title": "Right First Time Tracker",
            "path": "/textile/right-first-time-tracker",
            "archetype": "board",
            "flagship": true
          },
          {
            "code": "M11.12",
            "title": "Fabric Yield Analysis",
            "path": "/textile/fabric-yield-analysis",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M11.13",
            "title": "Dyeing Cost Sheet",
            "path": "/textile/dyeing-cost-sheet",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M11.14",
            "title": "Greige Requirement Plan",
            "path": "/textile/greige-requirement-plan",
            "archetype": "board",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M12",
    "label": "Reports & Analytics",
    "path": "/reports",
    "owner": "ADMIN",
    "roles": [
      "ADMIN",
      "OWNER",
      "MERCH",
      "SCM",
      "GM",
      "QC",
      "COMM",
      "FIN",
      "HR",
      "IE"
    ],
    "sections": [
      {
        "name": "General",
        "screens": [
          {
            "code": "D",
            "title": "Report View \u2014 Fabric",
            "path": "/reports/report-view-fabric",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "D'",
            "title": "Report View \u2014 Trims",
            "path": "/reports/report-view-trims",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M12.1",
            "title": "Report Builder",
            "path": "/reports/report-builder",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "M12.2",
            "title": "Report Subscriptions",
            "path": "/reports/report-subscriptions",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M12.3",
            "title": "Export Jobs",
            "path": "/reports/export-jobs",
            "archetype": "list",
            "flagship": false
          }
        ]
      }
    ]
  },
  {
    "module": "M13",
    "label": "Administration",
    "path": "/admin",
    "owner": "ADMIN",
    "roles": [
      "ADMIN",
      "OWNER"
    ],
    "sections": [
      {
        "name": "General",
        "screens": [
          {
            "code": "M13.1",
            "title": "Company & Business Units",
            "path": "/admin/company-and-business-units",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.2",
            "title": "Unit Capability",
            "path": "/admin/unit-capability",
            "archetype": "object",
            "flagship": false
          },
          {
            "code": "M13.3",
            "title": "Users",
            "path": "/admin/users",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.4",
            "title": "Roles & Permissions",
            "path": "/admin/roles-and-permissions",
            "archetype": "form",
            "flagship": false
          },
          {
            "code": "M13.5",
            "title": "Unit Access Grants",
            "path": "/admin/unit-access-grants",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.6",
            "title": "Data Scope Rules",
            "path": "/admin/data-scope-rules",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.7",
            "title": "Delegation of Authority",
            "path": "/admin/delegation-of-authority",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.8",
            "title": "Workflow Designer",
            "path": "/admin/workflow-designer",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "M13.9",
            "title": "Numbering Series",
            "path": "/admin/numbering-series",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.10",
            "title": "System Settings",
            "path": "/admin/system-settings",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.11",
            "title": "KPI Alert Rules",
            "path": "/admin/kpi-alert-rules",
            "archetype": "board",
            "flagship": false
          },
          {
            "code": "M13.12",
            "title": "Notification Channels",
            "path": "/admin/notification-channels",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.13",
            "title": "Bulk Import",
            "path": "/admin/bulk-import",
            "archetype": "wizard",
            "flagship": false
          },
          {
            "code": "M13.14",
            "title": "Audit Log Viewer",
            "path": "/admin/audit-log-viewer",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.15",
            "title": "Recycle Bin",
            "path": "/admin/recycle-bin",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.16",
            "title": "Integrations",
            "path": "/admin/integrations",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.17",
            "title": "Localisation Strings",
            "path": "/admin/localisation-strings",
            "archetype": "list",
            "flagship": false
          },
          {
            "code": "M13.18",
            "title": "Announcements",
            "path": "/admin/announcements",
            "archetype": "list",
            "flagship": false
          }
        ]
      }
    ]
  }
];

// src/app/core/nav/landing.ts
function sectionCode(label) {
  return label.toUpperCase().replace(/&/g, "_AND_").replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "");
}
var RAIL_RANK_OVERRIDE = { M12: 13, M13: 12 };
function railRank(module) {
  return RAIL_RANK_OVERRIDE[module] ?? NAV.findIndex((m) => m.module === module);
}
function firstVisiblePath(user, module) {
  const role = user?.role;
  const granted = user?.authorities ?? [];
  if (!role) {
    return "/login";
  }
  let modules;
  if (module) {
    modules = NAV.filter((m) => m.module === module);
  } else {
    const accessible = NAV.filter((m) => granted.includes(`${m.module}_READ`));
    const own = accessible.filter((m) => m.owner === role).sort((a, b) => railRank(a.module) - railRank(b.module));
    const rest = accessible.filter((m) => m.owner !== role).sort((a, b) => railRank(a.module) - railRank(b.module));
    modules = [...own, ...rest];
  }
  for (const m of modules) {
    for (const section of m.sections) {
      if (!granted.includes(`${m.module}_${sectionCode(section.name)}_READ`)) {
        continue;
      }
      const screen = section.screens[0];
      if (screen) {
        return objectPath(screen);
      }
    }
  }
  return "/denied";
}
function objectPath(screen) {
  return screen.archetype === "object" ? `${screen.path}/1` : screen.path;
}

// src/app/core/auth/section-grants.ts
var SECTION_GRANTS = {
  // M1 Merchandising — the documented table (DEVELOPMENT.md "Who reads what in M1").
  // Left untouched: this is the one module with an actual written decision
  // behind it, not a judgment call made here.
  M1: {
    MERCH: ["Master", "Costing", "Style", "Order", "T&A", "Insight"],
    GM: ["Master", "Style", "Order", "T&A"],
    IE: ["Master", "Style", "Order", "T&A"],
    SCM: ["Master", "Order", "T&A"],
    COMM: ["Master", "Costing", "Order", "Insight"],
    FIN: ["Costing", "Insight"]
  },
  // M2 Supply Chain — SCM procures. Everyone else reads only what bears on
  // their own work. Finance does not sit in on RFQ negotiation or a
  // purchase requisition — `Procure` is dropped entirely, because it
  // bundles that negotiation together with PI Entry and does not split
  // finer. Finance's real payment/LC touchpoint is M7 Import, already
  // granted there; what is left worth reading here is shipment timing,
  // which affects when a landed cost accrues.
  M2: {
    SCM: ["Master", "Procure", "Track", "Portal"],
    MERCH: ["Master", "Track"],
    STORE: ["Master", "Track"],
    FIN: ["Track"]
  },
  // M3 Inventory & Store — Store runs the warehouse. Other roles read the
  // stock position that bears on their own job, never the receiving desk.
  // GM's `Insight` (stock aging, dead-stock, fabric-reuse analytics) came
  // out — that is an inventory-management write-off call, not something a
  // production GM acts on day to day; `Stock` alone covers what a GM
  // actually needs, material readiness for the line.
  M3: {
    STORE: ["Setup", "Receive", "Stock", "Store", "Insight"],
    SCM: ["Setup", "Stock"],
    GM: ["Stock"],
    QC: ["Receive"],
    DYE: ["Receive", "Stock"]
  },
  // M4 Industrial Engineering — IE sets the SMV; Merchandising reads the
  // cost-per-minute and capacity that feed a quote, GM reads the floor-facing
  // sections that run the line. Both are operational coordination, kept broad.
  M4: {
    IE: ["Master", "Engineer", "Capacity", "Cost", "Monitor"],
    MERCH: ["Cost", "Capacity"],
    GM: ["Engineer", "Capacity", "Monitor"]
  },
  // M5 Production — GM runs the floor; IE plans capacity against it, QC
  // inspects what comes off it. Store came out entirely: `Execute` is
  // eleven screens of sewing-floor, wash and finishing entries a warehouse
  // keeper has no reason to open. Store's real side of the transaction —
  // issuing material to the line, receiving finished goods back — already
  // lives in M3's own Stock/Store sections, which Store owns.
  M5: {
    GM: ["Setup", "Plan", "Execute", "Monitor", "Maintain"],
    IE: ["Setup", "Plan", "Monitor"],
    QC: ["Execute", "Monitor"],
    STORE: []
  },
  // M6 Quality — QC owns inspection end to end. GM reads results and CAPA
  // impacting the floor. Store's `Inspect` came out — the full inspection
  // stack (inline QC, endline QC, wash quality, finishing audit...) is
  // QC's floor work, not a warehouse concern; a store keeper's real question
  // is whether a colour is approved before it is shelved, which `Colour`
  // alone answers. Dyeing keeps `Inspect` — a dye batch's own inspection
  // result is direct accountability, not a tangential read.
  M6: {
    QC: ["Master", "Colour", "Inspect", "Improve"],
    GM: ["Inspect", "Improve"],
    STORE: ["Colour"],
    DYE: ["Colour", "Inspect"]
  },
  // M7 Commercial & Shipping — Commercial runs the LC and the shipment.
  // Merchandising reads export status for their own orders; Finance reads
  // the import/settlement side because that is money moving.
  M7: {
    COMM: ["Import", "Export", "Settle", "Gate"],
    MERCH: ["Export", "Gate"],
    FIN: ["Import", "Settle"]
  },
  // M8 Finance — the ledger. Journal vouchers, AP/AR, cash/bank, bank
  // reconciliation and the company-wide profitability analytics are
  // Finance-only. Commercial's `Analyse` came out on the second pass too:
  // that section is Cost Variance, Unit Profitability & Consolidation and
  // Working Capital Forecast bundled with Order Profitability — company
  // treasury and consolidated P&L, not "how did my own deal do." Neither
  // Commercial nor Supply Chain reads anything here now; both entries are
  // explicit empty lists, denying the module even though `nav.data.ts`
  // still lists them under it.
  M8: {
    FIN: ["Setup", "Transact", "Assets", "Analyse"],
    COMM: [],
    SCM: []
  },
  // M9 HR & Payroll — Payroll, leave and welfare cases are HR-only. GM
  // reads the roster and attendance needed to run shifts, nothing about pay
  // or a colleague's grievance.
  M9: {
    HR: ["Master", "Attend", "Leave", "Pay", "Welfare"],
    GM: ["Master", "Attend"]
  },
  // M10 Compliance & ESG — HR owns social compliance. QC's safety/chemical
  // audits and Commercial's buyer-facing ESG paperwork are the only slices
  // that cross into their own work — both are the role's own accountability,
  // not a spillover read, so both stay.
  M10: {
    HR: ["Audit", "Certify", "Safety", "Chemical", "Environment", "ESG"],
    QC: ["Audit", "Safety", "Chemical"],
    COMM: ["ESG", "Certify"]
  },
  // M11 Textile Processing — Dyeing owns the process. Store reads the
  // yarn/greige/finished-fabric stock it actually holds; QC reads the
  // sections that feed its own inspection (dye batches, finishing,
  // right-first-time) — both are direct, not tangential.
  M11: {
    DYE: ["Yarn", "Knit", "Dye", "Finish", "Analyse"],
    STORE: ["Yarn", "Knit", "Finish"],
    QC: ["Dye", "Finish", "Analyse"]
  }
  // M12 Reports & Analytics, M13 Administration — single "General" section
  // each; nothing to narrow within them. Module-level `NAV.roles` is the
  // whole gate.
};

// src/app/core/auth/authorities.ts
function authoritiesFor(role) {
  const authorities = [];
  for (const module of NAV) {
    if (!module.roles.includes(role)) continue;
    const narrowTo = SECTION_GRANTS[module.module]?.[role];
    if (narrowTo?.length === 0) continue;
    const isOwner = role === module.owner || role === "OWNER" || role === "ADMIN";
    authorities.push(`${module.module}_READ`);
    if (isOwner) authorities.push(`${module.module}_WRITE`);
    for (const section of module.sections) {
      if (narrowTo && !narrowTo.includes(section.name)) continue;
      const code = `${module.module}_${sectionCode(section.name)}`;
      authorities.push(`${code}_READ`);
      if (isOwner) authorities.push(`${code}_WRITE`);
    }
  }
  return authorities;
}

export {
  NAV,
  sectionCode,
  railRank,
  firstVisiblePath,
  authoritiesFor
};
//# debugId=889444ed-c494-586d-b622-ff3bd6b6f9a6
//# sourceMappingURL=chunk-DOSEESBN.js.map
