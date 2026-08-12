# Tanabana — Angular Frontend Presentation

**Tanabana** (তানাবানা — Bangla/Urdu for "warp and weft", the crossing threads that make woven fabric) is a prototype ERP frontend for a Bangladeshi RMG (Ready-Made Garment) factory group. Built entirely in **Angular 22.1** using standalone components, signals, and reactive forms — no backend server; all data is mocked and persisted to the browser's `localStorage`.

---

## 1. What This Is (একনজরে)

- **234 screens** across **13 business modules**
- **367 routed pages** (list + detail routes counted separately)
- **6 reusable screen archetypes** (list, object, board, form, wizard, calendar) — every screen is one of these, driven by route data, not hand-built per screen
- **15 user roles**, two-tier RBAC (module gate + section-level permission grant)
- Runs 100% client-side — a realistic **prototype/demo**, not a production system (explained honestly in the closing section)

---

## 2. Architecture (কীভাবে বানানো হয়েছে)

| Piece                              | What it does                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NAV: NavModule[]` (`nav.data.ts`) | Single source of truth: module → section → screen tree. Drives the side rail, the landing-page redirect, and the Roles & Permissions audit screen — all three read from the same array so nothing gets out of sync.                                                                                                                                         |
| `ScreenDataService`                | Stand-in "backend". Every screen reads/writes through it; data is namespaced per entity as `tanabana:mock:<Entity>` in `localStorage`, so state survives a page refresh.                                                                                                                                                                                    |
| Screen archetypes                  | **List** (searchable/sortable table), **Object** (detail page with tabs/sub-records), **Board** (kanban/status board), **Form** (single data-entry form), **Wizard** (multi-step guided flow), **Calendar** (date-grid view). One Angular component per archetype, reused across all 234 screens via routing data — not 234 separate hand-built components. |
| RBAC                               | Two tiers: (1) module-level — is this role allowed into the module at all; (2) section-level — which sections inside the module are granted. Computed once via `authoritiesFor(role)` and consumed identically everywhere permissions are checked.                                                                                                          |
| Signals & standalone components    | State managed with Angular `signal`/`computed` (no NgRx/RxJS store needed for this scale); every component is `standalone: true`, no NgModules.                                                                                                                                                                                                             |

---

## 3. Module-by-Module Feature Breakdown

### M1 — Merchandising (মার্চেন্ডাইজিং) — 26 screens
Owner role: **MERCH**
- **Master data**: Buyer Master, Colour Master, TNA (Time & Action) Template Builder
- **Costing**: Costing Template, Pre-Costing, Costing Simulator, Costing Revisions, Final Costing, Buyer Price History — full cost-build lifecycle from estimate to buyer-approved price
- **Style**: Style Details, Style Library & Clone, Measurement Spec (POM), Sample Request, Sample Costing, Buyer Approval Tracker — style development & sampling workflow
- **Order**: Order Breakdown (PO summary + size/colour matrix), PO Amendment Log, Sales Contract & Budget, BOM Generate — order intake and bill-of-materials generation
- **T&A**: My Tasks, Traffic Light Board (red/yellow/green order status), TNA Re-baseline, Order Timeline — deadline tracking per order
- **Insight**: Buyer Scorecard, Consumption Learning — analytics on buyer performance and fabric consumption trends

### M2 — Supply Chain (সাপ্লাই চেইন) — 15 screens
Owner role: **SCM**
- **Master**: Item Group Hierarchy, Item Master, Supplier Master, Vendor Rating
- **Procure**: Purchase Requisition, RFQ & Quotation Compare, SPO (Sub-Purchase Order) for Fabric & Trims, SPO Delivery Schedule, SPO Amendment, PI (Proforma Invoice) Entry — full procure-to-pay-adjacent flow
- **Track**: Import Shipment Tracking, Lead Time Alerts, Supplier Recommendation (AI-style suggestion screen)
- **Portal**: Supplier Portal Admin — manage supplier-facing portal access

### M3 — Inventory & Store (ইনভেন্টরি) — 18 screens
Owner role: **STORE**
- **Setup**: Warehouse & Bin, UOM Conversion
- **Receive**: Gate Pass In/Out, GRN (Goods Receipt Note), Fabric Roll Register, Shade Band, Barcode Label Print — physical goods intake
- **Stock**: Material Status/Stock Ledger, Material Readiness Board, Stock Issue, Roll Allocation by Shade, Stock Transfer, Inter-Unit Transfer, Physical Count
- **Store**: General Store Item, General Store Issue — non-fabric consumables
- **Insight**: Stock Aging & Dead Stock, Fabric Reuse Suggestion

### M4 — Industrial Engineering (আইই) — 19 screens
Owner role: **IE**
- **Master**: Machine Type, Operation Master, Learning Curve Profile
- **Engineer**: Time Study, Operation Bulletin (SMV per operation), Line Balancing, Line Layout, Workstation Assignment
- **Capacity**: Capacity Calendar (minutes-based), Capacity Booking, Unit Load Balancer, Order Acceptance Score
- **Cost**: Cost Per Minute, CM (Cost of Making) Calculation
- **Monitor**: Productivity Analysis, Non-Productive Time, Delivery Prediction, Disruption Simulation, SMV Accuracy Feedback

### M5 — Production (প্রোডাকশন) — 23 screens
Owner role: **GM**
- **Setup**: Production Line, Machine Register, Subcontractor Master
- **Plan**: Capacity Plan, Cut Plan (size/colour), Marker Plan, Line Allocation
- **Execute** (the shop-floor entry screens): Cutting Entry, Bundle Register, Bundle Tracking, EMB/Print Entry, Wash Entry, Sewing Hourly Entry, Rework Entry, Finishing Entry, Packing List & Assortment, Container Loading Plan, Subcontract Order
- **Monitor**: Production Dashboard, Andon Board (line-stop alerts), Bottleneck Alerts
- **Maintain**: Machine Maintenance, Spare Parts

### M6 — Quality (কোয়ালিটি) — 18 screens
Owner role: **QC**
- **Master**: Defect Code, AQL Standard, Buyer Inspection Criteria
- **Colour**: Lab Dip approval
- **Inspect**: Fabric Inspection (4-point system), Testing Lab Record, Inline QC, Endline QC, Wash Quality Check, Finishing Audit, Measurement Audit (POM), Inspection Booking, Final Inspection
- **Improve**: CAPA (Corrective & Preventive Action), Defect Trend Analysis, Supplier Quality Scorecard, Cost of Quality, Quality Risk Prediction

### M7 — Commercial & Shipping (কমার্শিয়াল) — 18 screens
Owner role: **COMM**
- **Import**: Import LC, Utilization Declaration, LC Expiry Monitor
- **Export**: Export LC, Export Permission, Commercial Invoice, Shipping Documents, Document Checklist, Forwarder Booking, Shipment Tracking, Document Submission, Document Discrepancy, Export Payment
- **Settle**: Short/Excess Reconciliation, Buyer Claim, Export Incentive Claim
- **Gate**: Export Compliance Check, Shipment Mode Advisor

### M8 — Finance (ফাইন্যান্স) — 18 screens
Owner role: **FIN**
- **Setup**: Chart of Accounts, Cost Centre, Bank Account, Fiscal Period Control
- **Transact**: Journal Voucher, Accounts Payable, Accounts Receivable, Cash/Bank Transaction, Bank Reconciliation, Landed Cost
- **Assets**: Fixed Assets, Tax/VAT, Company Budget
- **Analyse**: Cost Variance, Order Profitability, Unit Profitability & Consolidation, Working Capital Forecast, Payment Aging

### M9 — HR & Payroll (এইচআর) — 22 screens
Owner role: **HR**
- **Master**: Employee Master, Department & Designation, Wage Grade, Shift & Holiday Calendar
- **Attend**: Attendance Device Monitor, Daily Attendance & Correction, Overtime Approval, Manpower Plan
- **Leave**: Leave Application & Balance, Maternity Benefit
- **Pay**: Salary Structure, Payroll Run (wizard), Salary Disbursement, Festival Bonus, Provident Fund, Advance & Recovery, Final Settlement
- **Welfare**: Grievance Case, Disciplinary Action, Training Record, Worker Skill Matrix, Worker Unit Transfer

### M10 — Compliance & ESG (কমপ্লায়েন্স) — 20 screens
Owner role: **HR**
- **Audit**: Buyer Code of Conduct, Compliance Audit, Audit Findings to Closure, Audit Readiness Score
- **Certify**: Certification Register, Renewal Alerts
- **Safety**: Safety Inspection, Safety Incident, Emergency Drill
- **Chemical**: Chemical Inventory (ZDHC), Chemical Usage Log, Restricted Substance Test
- **Environment**: Utility Consumption, Carbon & Water Footprint, Effluent Treatment, Waste Record
- **ESG**: Sustainability Ledger (per PO), Recycled Content Trace, Buyer ESG Questionnaire, Higg Assessment

### M11 — Textile Processing (টেক্সটাইল) — 14 screens
Owner role: **DYE**
- **Yarn**: Yarn Lot Register
- **Knit**: Knitting Program, Knitting Production, Greige Fabric Stock
- **Dye**: Dyeing Recipe, Dyeing Batch, Reprocess Entry, Batch Sequence Optimizer, Recipe Recommendation
- **Finish**: Finishing Process
- **Analyse**: Right First Time Tracker, Fabric Yield Analysis, Dyeing Cost Sheet, Greige Requirement Plan

### M12 — Reports & Analytics (রিপোর্টস) — 5 screens
Owner role: **ADMIN** (shared by 10 roles)
- Report View — Fabric, Report View — Trims, Report Builder (self-service wizard), Report Subscriptions, Export Jobs

### M13 — Administration (অ্যাডমিনিস্ট্রেশন) — 18 screens
Owner role: **ADMIN** (ADMIN/OWNER only)
- Company & Business Units, Unit Capability, **Users** (live user directory — add/edit/deactivate), **Roles & Permissions** (the RBAC audit/edit screen), Unit Access Grants, Data Scope Rules, Delegation of Authority, Workflow Designer, Numbering Series, System Settings, KPI Alert Rules, Notification Channels, Bulk Import, Audit Log Viewer, Recycle Bin, Integrations, Localisation Strings, Announcements

---

## 4. The 6 Screen Archetypes (স্ক্রিন টাইপ)

| Archetype | Purpose | Example |
|---|---|---|
| **List** | Searchable/sortable/filterable table of records | Buyer Master, Item Master |
| **Object** | Detail page for one record, with sub-sections/tabs | Style Details, GRN |
| **Board** | Kanban-style or status-grouped view | Traffic Light Board, Production Dashboard |
| **Form** | Single-record data entry | Cutting Entry, Journal Voucher |
| **Wizard** | Multi-step guided process | BOM Generate, Payroll Run |
| **Calendar** | Date-grid scheduling view | Capacity Calendar, Shift & Holiday Calendar |

Every one of the 234 screens is one of these six, rendered by a shared component per archetype and configured via route `data` — this is why 234 screens didn't need 234 hand-written components.

---

## 5. Access Control — RBAC (রোল-ভিত্তিক অ্যাক্সেস)

- **15 roles**: MERCH, SCM, STORE, IE, GM, QC, COMM, FIN, HR, DYE, ADMIN, OWNER, and a few narrower ones.
- **Two-tier gate**:
  1. Module level — is this role listed in the module's `roles[]`? If not, the module doesn't even show in the rail.
  2. Section level — inside an allowed module, which specific sections is this role granted? Computed via `authoritiesFor(role)`.
- Same computation feeds **three places** identically: the side navigation rail, the landing-page redirect (send the user straight to the first screen they can access), and the Roles & Permissions audit screen in Administration — so what a role sees in the rail always matches what the audit screen reports.
- **Bug found & fixed during build**: a role with a module-level grant but an *empty* section grant could still reach screens through direct routing — fixed by making the section-level check authoritative everywhere, not just in the rail.

---

## 6. Administration Module Highlights (অ্যাডমিনিস্ট্রেশন)

- **Users (M13.3)**: real add/edit/deactivate flows against the mock user list, persisted to `localStorage`.
- **Roles & Permissions (M13.4)**: a live audit grid — pick a role, see every module/section it can reach, computed from the same `nav.data.ts` + role-grant logic the rail uses. Lets an admin (or "sir") visually verify the whole RBAC model in one screen.
- **Sign-in**: demo-picker login lets you switch between any of the 15 roles instantly to see the app from that role's point of view, without needing real credentials.

---

## 7. Honest Boundaries (যা এখনো নেই — সততার সাথে বলা)

This is a **frontend prototype**, not a production system:
- **No backend / API** — `ScreenDataService` simulates one; nothing talks to a real server.
- **No real authentication** — login is a role-picker, not a credential/session system.
- **Single-browser only** — all data lives in that browser's `localStorage`; nothing is shared across devices or users.

These are deliberate scope decisions for an assignment-scale prototype, not oversights — worth stating clearly when presenting.

---

## 8. Summary Numbers (সারসংক্ষেপ)

| Stat | Value |
|---|---|
| Modules | 13 |
| Screens | 234 |
| Routed pages | 367 |
| Screen archetypes | 6 |
| User roles | 15 |
| Data persistence | Browser `localStorage`, mock backend service |
| Framework | Angular 22.1, standalone components + signals |

---

*Prepared as a walkthrough script — use each module section as one talking point when presenting to your instructor.*
