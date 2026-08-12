/**
 * Word pools for the mock-data generator. Ported from `Prototype/index.html`
 * so the Angular client's fake data reads the same way the approved
 * prototype's does — coherent BD RMG names, not "Lorem Ipsum".
 *
 * Keep in sync with the prototype by eye; there is no build step linking the
 * two. If the prototype's pools change, copy the changed array here.
 */
export const GBUYER = ["Aurora Retail Group", "Nordwind Apparel", "Cedar & Pine", "Halden Bros", "Meridian Denim",
  "Kestrel Outdoor", "Brightwater Stores", "Ashcombe & Co", "Vantage Basics", "Northsea Workwear",
  "Larkspur Kids", "Tenby Sportswear", "Delmar Retail", "Ostro Fashion", "Rowan & Vale", "Sundeck Living"];

export const GSTYLE = ["GRS73104TB", "GRS73110PL", "AUR2291JK", "NRD5540SH", "CDP8812TR", "HLD4407PT", "MRD9013DN",
  "KES1180AN", "BRW6602HD", "ASH3341SW", "VAN7714TE", "NSW2205CV", "LKS9908DR", "TEN4417LG", "DEL5521PO", "OST8830BL"];

export const GPO = ["PO-2026-00841", "PO-2026-00857", "PO-2026-00863", "PO-2026-00879", "PO-2026-00884", "PO-2026-00902",
  "PO-2026-00915", "PO-2026-00928", "PO-2026-00934", "PO-2026-00947", "PO-2026-00951", "PO-2026-00966",
  "PO-2026-00972", "PO-2026-00988", "PO-2026-00993", "PO-2026-01004"];

export const GSUP = ["Verdatex Intl", "Nitex Accessories", "NATCO Global", "Shifat Textile", "Zenith Dyeing", "Orion Textiles",
  "Dhaka Trim Co", "SSAM Design", "Pacific Accessories", "Everbright Trims", "Meghna Spinning", "Padma Weaving",
  "Karnaphuli Knit", "Bengal Zipper", "Sonargaon Poly", "Turag Chemicals"];

export const GPERSON = ["Rashida Akter", "Kamal Hossain", "Nasrin Sultana", "Anwar Hossain", "Tanvir Ahmed", "Salma Khatun",
  "Faruk Ahmed", "Jasim Mia", "Shahin Alam", "Rubina Yasmin", "Mizanur Rahman", "Taslima Begum",
  "Abdul Karim", "Shirin Sultana", "Habibur Rahman", "Nazma Parvin"];

export const GCOLOUR = ["Olive drab", "Navy", "Taupe", "Off white", "Charcoal", "Rust", "Sage", "Ecru", "Bottle green", "Slate"];
export const GSIZE = ["XS", "S", "M", "L", "XL", "2XL"];

export const GMAT = ["Peach finish cotton 240gsm", "Drawcord poly 5mm", "YKK zipper #3", "Main label woven", "Polybag recycled",
  "Pocketing fabric", "Care label satin", "Carton 5-ply", "Sewing thread 40/2", "Interlining fusible",
  "Snap button 15L", "Elastic 25mm knitted", "Hangtag recycled board", "Twill tape 12mm", "Rib 1x1 220gsm", "Mesh lining 60gsm"];

export const GDEFECT = ["Broken stitch", "Skip stitch", "Oil spot", "Measurement out", "Shade variation", "Open seam", "Puckering"];
export const GOPER = ["Attach waistband", "Join side seam", "Hem bottom", "Attach pocket", "Set drawcord", "Bartack loop", "Final press"];
export const GSTAGE = ["Cutting", "Sewing", "Washing", "Finishing", "Packing"];
export const GREASON = ["Machine breakdown", "No input", "Quality hold", "Manpower short", "Power outage"];
export const GGROUP = ["Fabric", "Trims", "Accessories", "Packaging", "Chemical"];

/** Street, city and country are read from one row so an address never lands in the wrong country. */
export const GLOC: [string, string, string][] = [
  ["Plot 44, DEPZ", "Savar", "Bangladesh"], ["Zirabo Bazar", "Ashulia", "Bangladesh"],
  ["BSCIC Estate", "Gazipur", "Bangladesh"], ["Kalurghat H/A", "Chattogram", "Bangladesh"],
  ["Tongi I/A", "Gazipur", "Bangladesh"], ["Adamjee EPZ", "Narayanganj", "Bangladesh"],
  ["Baridhara DOHS", "Dhaka", "Bangladesh"], ["Karnaphuli EPZ", "Chattogram", "Bangladesh"],
  ["12 Hanover Quay", "Dublin", "Ireland"], ["Speicherstadt 8", "Hamburg", "Germany"],
  ["Keizersgracht 210", "Amsterdam", "Netherlands"], ["44 Wellington St", "Leeds", "United Kingdom"],
  ["Sveavagen 44", "Stockholm", "Sweden"], ["220 Bay Street", "Toronto", "Canada"],
  ["Rue du Commerce 9", "Brussels", "Belgium"], ["Via Tortona 37", "Milan", "Italy"],
];

export const GPORT = ["Chattogram", "Mongla", "Rotterdam", "Hamburg", "Felixstowe", "Antwerp"];
export const GBANK = ["BRAC Bank", "Eastern Bank", "City Bank", "HSBC Bangladesh", "Standard Chartered"];
export const GUOM = ["PCS", "YDS", "KGS", "MTR", "DOZ", "CONE"];
export const GINCO = ["FOB", "CIF", "CFR", "DDP", "EXW"];
export const GTERM = ["LC at sight", "LC 90 days", "TT 30 days", "DP", "Open account"];
export const GCUR = ["USD", "EUR", "GBP", "BDT"];
export const GSEASON = ["SS26", "AW26", "SS27", "Basic"];
export const GSCHEME = ["BSCI", "SEDEX", "WRAP", "GOTS", "OEKO-TEX", "GRS", "Higg FEM"];
export const GDEPT = ["Cutting", "Sewing", "Finishing", "Store", "Quality", "Maintenance", "Admin"];
export const GDESIG = ["Operator", "Helper", "Line Chief", "Supervisor", "Quality Inspector", "Store Officer"];
export const GSHIFT = ["A — 08:00-16:00", "B — 16:00-00:00", "C — 00:00-08:00"];
export const GBIN = ["A-12-03", "A-12-04", "B-04-11", "B-07-02", "C-01-18", "C-09-06"];
export const GWH = ["Main Store — Unit 1", "Fabric Store — Unit 2", "Trims Store — Unit 3", "Finished Goods — Unit 4"];
export const GCHEM = ["Reactive Red 195", "Caustic soda flake", "Hydrogen peroxide 50%", "Softener silicone", "Sodium sulphate"];
export const GMACH = ["Single needle lockstitch", "Overlock 4-thread", "Flatlock", "Bartack", "Button attach", "Snap attach"];
export const GCHAN = ["Email", "SMS", "In-app", "Webhook"];
export const GSUPTYPE = ["Fabric mill", "Trims", "Accessories", "Washing plant", "Printing", "Embroidery", "Chemical", "Packaging"];
export const GLEAVE = ["Casual", "Sick", "Earned", "Maternity", "Unpaid", "Compensatory"];
export const GLEAVEWHY = ["Personal", "Medical", "Family emergency", "Travel", "Study", "Bereavement"];
export const GMOVE = ["Receipt", "Issue", "Transfer", "Adjustment", "Return", "Write-off"];
export const GWHY = ["Corrected after physical count", "Buyer request", "Supplier delay", "Internal decision",
  "Documentation error", "Rescheduled at planning meeting"];
export const GDOC = ["Commercial invoice", "Packing list", "Bill of lading", "Certificate of origin",
  "Inspection certificate", "Beneficiary certificate"];
export const GNOTE = ["Approved without change", "Buyer asked for a revised submission", "Rebooked after the vessel slipped",
  "Closed after evidence was uploaded", "Waiting on the merchandiser", "Raised at the daily production meeting",
  "Corrected against the physical count", "Escalated to the unit head"];

/** [tone, label] — tone matches the CSS state classes used across the app. */
export const GSTAT: [string, string][] = [
  ["ok", "Approved"], ["info", "In progress"], ["warn", "At risk"],
  ["bad", "Overdue"], ["pend", "Awaiting"], ["idle", "Draft"],
];
export const GMON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
