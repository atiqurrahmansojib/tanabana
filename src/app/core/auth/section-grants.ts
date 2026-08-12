import { Role } from '../models/role.model';

/**
 * Which sections of a module each role reads, modelled on how a Bangladeshi
 * RMG factory actually separates duties — not "everyone in the module sees
 * everything in it."
 *
 * Two rules run through every entry here, tighter than the first pass:
 *
 * 1. **Money and the ledger stay with the role accountable for the number.**
 *    A quoted price, a journal entry, a payroll run — visibility follows
 *    who answers for it, not who is nearby in the workflow. Where a
 *    section bundles a genuine cross-functional need together with
 *    negotiation- or ledger-only screens that don't split any finer than
 *    "the whole section," the money-adjacent screens win and the section is
 *    left out rather than granted for the sake of the one screen that was
 *    wanted. `SCM: []` in M8 and `COMM: []` in M8 read as absent, on
 *    purpose: Finance's ledger is Finance's, full stop.
 * 2. **Floor-execution visibility is granted more freely than ledger
 *    visibility.** A GM reading line-balancing or a Store keeper reading
 *    the stock ledger costs nothing — it is coordination, not exposure. A
 *    Store keeper reading sewing-floor production entries (M5 Execute) or
 *    the full quality-inspection stack (M6 Inspect) is not coordination,
 *    it is a section they have no reason to open — pulled in the second
 *    pass below.
 *
 * A module's **owner** always reads and writes every section of their own
 * module (enforced in `authorities.ts`, not listed here). OWNER (Managing
 * Director) and ADMIN read and write everything, also enforced there. A
 * role present in a module's `NAV.roles` but absent from this table for that
 * module gets every section — that only happens for OWNER/ADMIN and for the
 * two single-section modules (M12, M13), where there is nothing to narrow.
 * An **explicit empty list** (`SCM: []`) is different from absence: it
 * denies the module outright even though `nav.data.ts` still lists the role
 * under it — see the comment on `authoritiesFor()`.
 */
export const SECTION_GRANTS: Partial<Record<string, Partial<Record<Role, string[]>>>> = {
  // M1 Merchandising — the documented table (DEVELOPMENT.md "Who reads what in M1").
  // Left untouched: this is the one module with an actual written decision
  // behind it, not a judgment call made here.
  M1: {
    MERCH: ['Master', 'Costing', 'Style', 'Order', 'T&A', 'Insight'],
    GM: ['Master', 'Style', 'Order', 'T&A'],
    IE: ['Master', 'Style', 'Order', 'T&A'],
    SCM: ['Master', 'Order', 'T&A'],
    COMM: ['Master', 'Costing', 'Order', 'Insight'],
    FIN: ['Costing', 'Insight'],
  },

  // M2 Supply Chain — SCM procures. Everyone else reads only what bears on
  // their own work. Finance does not sit in on RFQ negotiation or a
  // purchase requisition — `Procure` is dropped entirely, because it
  // bundles that negotiation together with PI Entry and does not split
  // finer. Finance's real payment/LC touchpoint is M7 Import, already
  // granted there; what is left worth reading here is shipment timing,
  // which affects when a landed cost accrues.
  M2: {
    SCM: ['Master', 'Procure', 'Track', 'Portal'],
    MERCH: ['Master', 'Track'],
    STORE: ['Master', 'Track'],
    FIN: ['Track'],
  },

  // M3 Inventory & Store — Store runs the warehouse. Other roles read the
  // stock position that bears on their own job, never the receiving desk.
  // GM's `Insight` (stock aging, dead-stock, fabric-reuse analytics) came
  // out — that is an inventory-management write-off call, not something a
  // production GM acts on day to day; `Stock` alone covers what a GM
  // actually needs, material readiness for the line.
  M3: {
    STORE: ['Setup', 'Receive', 'Stock', 'Store', 'Insight'],
    SCM: ['Setup', 'Stock'],
    GM: ['Stock'],
    QC: ['Receive'],
    DYE: ['Receive', 'Stock'],
  },

  // M4 Industrial Engineering — IE sets the SMV; Merchandising reads the
  // cost-per-minute and capacity that feed a quote, GM reads the floor-facing
  // sections that run the line. Both are operational coordination, kept broad.
  M4: {
    IE: ['Master', 'Engineer', 'Capacity', 'Cost', 'Monitor'],
    MERCH: ['Cost', 'Capacity'],
    GM: ['Engineer', 'Capacity', 'Monitor'],
  },

  // M5 Production — GM runs the floor; IE plans capacity against it, QC
  // inspects what comes off it. Store came out entirely: `Execute` is
  // eleven screens of sewing-floor, wash and finishing entries a warehouse
  // keeper has no reason to open. Store's real side of the transaction —
  // issuing material to the line, receiving finished goods back — already
  // lives in M3's own Stock/Store sections, which Store owns.
  M5: {
    GM: ['Setup', 'Plan', 'Execute', 'Monitor', 'Maintain'],
    IE: ['Setup', 'Plan', 'Monitor'],
    QC: ['Execute', 'Monitor'],
    STORE: [],
  },

  // M6 Quality — QC owns inspection end to end. GM reads results and CAPA
  // impacting the floor. Store's `Inspect` came out — the full inspection
  // stack (inline QC, endline QC, wash quality, finishing audit...) is
  // QC's floor work, not a warehouse concern; a store keeper's real question
  // is whether a colour is approved before it is shelved, which `Colour`
  // alone answers. Dyeing keeps `Inspect` — a dye batch's own inspection
  // result is direct accountability, not a tangential read.
  M6: {
    QC: ['Master', 'Colour', 'Inspect', 'Improve'],
    GM: ['Inspect', 'Improve'],
    STORE: ['Colour'],
    DYE: ['Colour', 'Inspect'],
  },

  // M7 Commercial & Shipping — Commercial runs the LC and the shipment.
  // Merchandising reads export status for their own orders; Finance reads
  // the import/settlement side because that is money moving.
  M7: {
    COMM: ['Import', 'Export', 'Settle', 'Gate'],
    MERCH: ['Export', 'Gate'],
    FIN: ['Import', 'Settle'],
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
    FIN: ['Setup', 'Transact', 'Assets', 'Analyse'],
    COMM: [],
    SCM: [],
  },

  // M9 HR & Payroll — Payroll, leave and welfare cases are HR-only. GM
  // reads the roster and attendance needed to run shifts, nothing about pay
  // or a colleague's grievance.
  M9: {
    HR: ['Master', 'Attend', 'Leave', 'Pay', 'Welfare'],
    GM: ['Master', 'Attend'],
  },

  // M10 Compliance & ESG — HR owns social compliance. QC's safety/chemical
  // audits and Commercial's buyer-facing ESG paperwork are the only slices
  // that cross into their own work — both are the role's own accountability,
  // not a spillover read, so both stay.
  M10: {
    HR: ['Audit', 'Certify', 'Safety', 'Chemical', 'Environment', 'ESG'],
    QC: ['Audit', 'Safety', 'Chemical'],
    COMM: ['ESG', 'Certify'],
  },

  // M11 Textile Processing — Dyeing owns the process. Store reads the
  // yarn/greige/finished-fabric stock it actually holds; QC reads the
  // sections that feed its own inspection (dye batches, finishing,
  // right-first-time) — both are direct, not tangential.
  M11: {
    DYE: ['Yarn', 'Knit', 'Dye', 'Finish', 'Analyse'],
    STORE: ['Yarn', 'Knit', 'Finish'],
    QC: ['Dye', 'Finish', 'Analyse'],
  },

  // M12 Reports & Analytics, M13 Administration — single "General" section
  // each; nothing to narrow within them. Module-level `NAV.roles` is the
  // whole gate.
};
