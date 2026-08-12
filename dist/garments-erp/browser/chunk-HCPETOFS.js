// src/app/core/data/mock-pools.ts
var GBUYER = [
  "Aurora Retail Group",
  "Nordwind Apparel",
  "Cedar & Pine",
  "Halden Bros",
  "Meridian Denim",
  "Kestrel Outdoor",
  "Brightwater Stores",
  "Ashcombe & Co",
  "Vantage Basics",
  "Northsea Workwear",
  "Larkspur Kids",
  "Tenby Sportswear",
  "Delmar Retail",
  "Ostro Fashion",
  "Rowan & Vale",
  "Sundeck Living"
];
var GSTYLE = [
  "GRS73104TB",
  "GRS73110PL",
  "AUR2291JK",
  "NRD5540SH",
  "CDP8812TR",
  "HLD4407PT",
  "MRD9013DN",
  "KES1180AN",
  "BRW6602HD",
  "ASH3341SW",
  "VAN7714TE",
  "NSW2205CV",
  "LKS9908DR",
  "TEN4417LG",
  "DEL5521PO",
  "OST8830BL"
];
var GPO = [
  "PO-2026-00841",
  "PO-2026-00857",
  "PO-2026-00863",
  "PO-2026-00879",
  "PO-2026-00884",
  "PO-2026-00902",
  "PO-2026-00915",
  "PO-2026-00928",
  "PO-2026-00934",
  "PO-2026-00947",
  "PO-2026-00951",
  "PO-2026-00966",
  "PO-2026-00972",
  "PO-2026-00988",
  "PO-2026-00993",
  "PO-2026-01004"
];
var GSUP = [
  "Verdatex Intl",
  "Nitex Accessories",
  "NATCO Global",
  "Shifat Textile",
  "Zenith Dyeing",
  "Orion Textiles",
  "Dhaka Trim Co",
  "SSAM Design",
  "Pacific Accessories",
  "Everbright Trims",
  "Meghna Spinning",
  "Padma Weaving",
  "Karnaphuli Knit",
  "Bengal Zipper",
  "Sonargaon Poly",
  "Turag Chemicals"
];
var GPERSON = [
  "Rashida Akter",
  "Kamal Hossain",
  "Nasrin Sultana",
  "Anwar Hossain",
  "Tanvir Ahmed",
  "Salma Khatun",
  "Faruk Ahmed",
  "Jasim Mia",
  "Shahin Alam",
  "Rubina Yasmin",
  "Mizanur Rahman",
  "Taslima Begum",
  "Abdul Karim",
  "Shirin Sultana",
  "Habibur Rahman",
  "Nazma Parvin"
];
var GCOLOUR = ["Olive drab", "Navy", "Taupe", "Off white", "Charcoal", "Rust", "Sage", "Ecru", "Bottle green", "Slate"];
var GSIZE = ["XS", "S", "M", "L", "XL", "2XL"];
var GMAT = [
  "Peach finish cotton 240gsm",
  "Drawcord poly 5mm",
  "YKK zipper #3",
  "Main label woven",
  "Polybag recycled",
  "Pocketing fabric",
  "Care label satin",
  "Carton 5-ply",
  "Sewing thread 40/2",
  "Interlining fusible",
  "Snap button 15L",
  "Elastic 25mm knitted",
  "Hangtag recycled board",
  "Twill tape 12mm",
  "Rib 1x1 220gsm",
  "Mesh lining 60gsm"
];
var GDEFECT = ["Broken stitch", "Skip stitch", "Oil spot", "Measurement out", "Shade variation", "Open seam", "Puckering"];
var GOPER = ["Attach waistband", "Join side seam", "Hem bottom", "Attach pocket", "Set drawcord", "Bartack loop", "Final press"];
var GSTAGE = ["Cutting", "Sewing", "Washing", "Finishing", "Packing"];
var GREASON = ["Machine breakdown", "No input", "Quality hold", "Manpower short", "Power outage"];
var GGROUP = ["Fabric", "Trims", "Accessories", "Packaging", "Chemical"];
var GLOC = [
  ["Plot 44, DEPZ", "Savar", "Bangladesh"],
  ["Zirabo Bazar", "Ashulia", "Bangladesh"],
  ["BSCIC Estate", "Gazipur", "Bangladesh"],
  ["Kalurghat H/A", "Chattogram", "Bangladesh"],
  ["Tongi I/A", "Gazipur", "Bangladesh"],
  ["Adamjee EPZ", "Narayanganj", "Bangladesh"],
  ["Baridhara DOHS", "Dhaka", "Bangladesh"],
  ["Karnaphuli EPZ", "Chattogram", "Bangladesh"],
  ["12 Hanover Quay", "Dublin", "Ireland"],
  ["Speicherstadt 8", "Hamburg", "Germany"],
  ["Keizersgracht 210", "Amsterdam", "Netherlands"],
  ["44 Wellington St", "Leeds", "United Kingdom"],
  ["Sveavagen 44", "Stockholm", "Sweden"],
  ["220 Bay Street", "Toronto", "Canada"],
  ["Rue du Commerce 9", "Brussels", "Belgium"],
  ["Via Tortona 37", "Milan", "Italy"]
];
var GPORT = ["Chattogram", "Mongla", "Rotterdam", "Hamburg", "Felixstowe", "Antwerp"];
var GBANK = ["BRAC Bank", "Eastern Bank", "City Bank", "HSBC Bangladesh", "Standard Chartered"];
var GUOM = ["PCS", "YDS", "KGS", "MTR", "DOZ", "CONE"];
var GINCO = ["FOB", "CIF", "CFR", "DDP", "EXW"];
var GTERM = ["LC at sight", "LC 90 days", "TT 30 days", "DP", "Open account"];
var GCUR = ["USD", "EUR", "GBP", "BDT"];
var GSEASON = ["SS26", "AW26", "SS27", "Basic"];
var GSCHEME = ["BSCI", "SEDEX", "WRAP", "GOTS", "OEKO-TEX", "GRS", "Higg FEM"];
var GDEPT = ["Cutting", "Sewing", "Finishing", "Store", "Quality", "Maintenance", "Admin"];
var GDESIG = ["Operator", "Helper", "Line Chief", "Supervisor", "Quality Inspector", "Store Officer"];
var GSHIFT = ["A \u2014 08:00-16:00", "B \u2014 16:00-00:00", "C \u2014 00:00-08:00"];
var GBIN = ["A-12-03", "A-12-04", "B-04-11", "B-07-02", "C-01-18", "C-09-06"];
var GWH = ["Main Store \u2014 Unit 1", "Fabric Store \u2014 Unit 2", "Trims Store \u2014 Unit 3", "Finished Goods \u2014 Unit 4"];
var GCHEM = ["Reactive Red 195", "Caustic soda flake", "Hydrogen peroxide 50%", "Softener silicone", "Sodium sulphate"];
var GMACH = ["Single needle lockstitch", "Overlock 4-thread", "Flatlock", "Bartack", "Button attach", "Snap attach"];
var GCHAN = ["Email", "SMS", "In-app", "Webhook"];
var GSUPTYPE = ["Fabric mill", "Trims", "Accessories", "Washing plant", "Printing", "Embroidery", "Chemical", "Packaging"];
var GLEAVE = ["Casual", "Sick", "Earned", "Maternity", "Unpaid", "Compensatory"];
var GLEAVEWHY = ["Personal", "Medical", "Family emergency", "Travel", "Study", "Bereavement"];
var GMOVE = ["Receipt", "Issue", "Transfer", "Adjustment", "Return", "Write-off"];
var GWHY = [
  "Corrected after physical count",
  "Buyer request",
  "Supplier delay",
  "Internal decision",
  "Documentation error",
  "Rescheduled at planning meeting"
];
var GDOC = [
  "Commercial invoice",
  "Packing list",
  "Bill of lading",
  "Certificate of origin",
  "Inspection certificate",
  "Beneficiary certificate"
];
var GNOTE = [
  "Approved without change",
  "Buyer asked for a revised submission",
  "Rebooked after the vessel slipped",
  "Closed after evidence was uploaded",
  "Waiting on the merchandiser",
  "Raised at the daily production meeting",
  "Corrected against the physical count",
  "Escalated to the unit head"
];
var GSTAT = [
  ["ok", "Approved"],
  ["info", "In progress"],
  ["warn", "At risk"],
  ["bad", "Overdue"],
  ["pend", "Awaiting"],
  ["idle", "Draft"]
];
var GMON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// src/app/core/data/mock-generator.ts
function gmix(k) {
  k = Math.imul(k ^ k >>> 16, 2246822507);
  k = Math.imul(k ^ k >>> 13, 3266489909);
  return (k ^ k >>> 16) >>> 0;
}
function ghash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function gent(h, ek, ctx = "") {
  h = h.toLowerCase();
  if (/\s(name|title|label)$/.test(h)) {
    const e = gent(h.replace(/\s(name|title|label)$/, ""), ek, ctx);
    if (e != null) return e;
  }
  if (/\s(type|category|group|class|kind)$/.test(h)) {
    const base = h.replace(/\s(type|category|group|class|kind)$/, "");
    if (/supplier|vendor|mill/.test(base)) return GSUPTYPE[ek % GSUPTYPE.length];
    if (/machine|equipment/.test(base)) return GMACH[ek % GMACH.length];
    if (/leave/.test(base)) return GLEAVE[ek % GLEAVE.length];
    if (/defect|fault/.test(base)) return GDEFECT[ek % GDEFECT.length];
    if (/document|doc/.test(base)) return GDOC[ek % GDOC.length];
    if (/movement|transaction|stock/.test(base)) return GMOVE[ek % GMOVE.length];
    if (/audit|certificat/.test(base)) return GSCHEME[ek % GSCHEME.length];
    if (/issue|alert|andon|downtime/.test(base)) return GREASON[ek % GREASON.length];
    return GGROUP[ek % GGROUP.length];
  }
  if (/shift/.test(h)) return GSHIFT[ek % GSHIFT.length];
  if (/buyer|customer|brand|client/.test(h)) return GBUYER[ek % GBUYER.length];
  if (/style|garment/.test(h)) return GSTYLE[ek % GSTYLE.length];
  if (/\bpo\b|order|contract/.test(h)) return GPO[ek % GPO.length];
  if (/supplier|vendor|forwarder|subcontract|mill/.test(h)) return GSUP[ek % GSUP.length];
  if (/unit|factory|plant/.test(h)) return "U" + (1 + ek % 4);
  if (/employee|worker|operator|user|person|approver|inspector|auditor|owner|by\b/.test(h)) return GPERSON[ek % GPERSON.length];
  if (/line/.test(h)) return "Line " + String(1 + ek % 12).padStart(2, "0");
  if (/machine/.test(h)) return "M-" + (101 + ek % 40);
  if (/shade band|shade group/.test(h)) return "SB-" + GCOLOUR[ek % GCOLOUR.length].slice(0, 2).toUpperCase() + "-" + String(1 + ek % 4).padStart(2, "0");
  if (/colou?r|shade/.test(h)) return GCOLOUR[ek % GCOLOUR.length];
  if (/\bsize\b/.test(h)) return GSIZE[ek % GSIZE.length];
  if (/item|material|fabric|trim|article|product/.test(h)) return GMAT[ek % GMAT.length];
  if (/defect|fault|ncr|finding/.test(h)) return GDEFECT[ek % GDEFECT.length];
  if (/operation|process step|task/.test(h)) return GOPER[ek % GOPER.length];
  if (/stage|process|department|section/.test(h)) return GSTAGE[ek % GSTAGE.length];
  if (/leave/.test(h) || /leave/.test(ctx)) {
    if (/type|category|kind/.test(h)) return GLEAVE[ek % GLEAVE.length];
    if (/reason|cause|purpose/.test(h)) return GLEAVEWHY[ek % GLEAVEWHY.length];
  }
  if (/movement|transaction/.test(h) && /type/.test(h)) return GMOVE[ek % GMOVE.length];
  if (/issue|alert|andon|downtime|stoppage/.test(h + " " + ctx) && /type|category|code/.test(h)) return GREASON[ek % GREASON.length];
  if (/document/.test(h) && /type|name/.test(h)) return GDOC[ek % GDOC.length];
  if (/defect/.test(h) && /type|category/.test(h)) return GDEFECT[ek % GDEFECT.length];
  if (/reason|cause/.test(h)) {
    if (/downtime|stop|npt|non.?product|delay|breakdown/.test(h + " " + ctx)) return GREASON[ek % GREASON.length];
    return GWHY[ek % GWHY.length];
  }
  if (/address|street/.test(h)) return GLOC[ek % GLOC.length][0] + ", " + GLOC[ek % GLOC.length][1];
  if (/city|district|town/.test(h)) return GLOC[ek % GLOC.length][1];
  if (/country|origin|destination|nationality/.test(h)) return GLOC[ek % GLOC.length][2];
  if (/port|terminal/.test(h)) return GPORT[ek % GPORT.length];
  if (/bank|issuing|advising/.test(h)) return GBANK[ek % GBANK.length];
  if (/uom|unit of measure|measure/.test(h)) return GUOM[ek % GUOM.length];
  if (/incoterm|delivery term|shipping term/.test(h)) return GINCO[ek % GINCO.length];
  if (/payment term|term/.test(h)) return GTERM[ek % GTERM.length];
  if (/currency/.test(h)) return GCUR[ek % GCUR.length];
  if (/season/.test(h)) return GSEASON[ek % GSEASON.length];
  if (/scheme|certificat|standard|audit type/.test(h)) return GSCHEME[ek % GSCHEME.length];
  if (/department|dept/.test(h)) return GDEPT[ek % GDEPT.length];
  if (/designation|grade|role|title|position/.test(h)) return GDESIG[ek % GDESIG.length];
  if (/bin|rack|location/.test(h)) return GBIN[ek % GBIN.length];
  if (/warehouse|store/.test(h)) return GWH[ek % GWH.length];
  if (/chemical|dyestuff|recipe/.test(h)) return GCHEM[ek % GCHEM.length];
  if (/machine type|equipment/.test(h)) return GMACH[ek % GMACH.length];
  if (/channel|medium/.test(h)) return GCHAN[ek % GCHAN.length];
  if (/email|mail/.test(h)) return GPERSON[ek % GPERSON.length].split(" ")[0].toLowerCase() + "@" + GSUP[ek % GSUP.length].split(" ")[0].toLowerCase() + ".com";
  if (/phone|mobile|telephone|^contact$|contact no/.test(h)) return "+8801" + (7e8 + ek * 7919 % 99999999);
  if (/remark|note|comment|description|narration|justification/.test(h)) return GNOTE[ek % GNOTE.length];
  if (/group|category|type|class/.test(h)) return GGROUP[ek % GGROUP.length];
  return null;
}
function gident(h, ek, ctx) {
  const e = gent(h, ek, ctx);
  if (e != null && (!/\s/.test(e) || /^(U\d|PO-|Line )/.test(e))) return e;
  const plain = (h.match(/[a-z]+/g) || []).length <= 2;
  if (plain) {
    if (/buyer|customer|brand|client/.test(h)) return "BUY-" + (101 + ek % GBUYER.length);
    if (/supplier|vendor|mill/.test(h)) return "SUP-" + (201 + ek % GSUP.length);
    if (/employee|worker|operator/.test(h)) return "EMP-" + (4100 + ek % GPERSON.length);
    if (/item|material|fabric|trim|article/.test(h)) return "ITM-" + (3100 + ek % GMAT.length);
  }
  if (/^(code|id|ref|reference|no|number)$/.test(h.trim())) {
    if (/buyer|customer|brand|client/.test(ctx)) return "BUY-" + (101 + ek % GBUYER.length);
    if (/supplier|vendor|mill/.test(ctx)) return "SUP-" + (201 + ek % GSUP.length);
    if (/employee|worker|operator/.test(ctx)) return "EMP-" + (4100 + ek % GPERSON.length);
    if (/item|material|fabric|trim|article/.test(ctx)) return "ITM-" + (3100 + ek % GMAT.length);
    const prefix = ctx.replace(/[^a-z]/g, "").slice(0, 3).toUpperCase() || "REF";
    return prefix + "-2026-" + String(1e3 + ghash(ctx) % 700 + ek % 90);
  }
  const pre = (h.match(/[a-z]+/g) || ["ref"]).map((w) => w[0]).join("").toUpperCase().slice(0, 3);
  return pre + "-2026-" + String(1e3 + ghash(h) % 700 + ek % 90);
}
function gdate(k, add = 0) {
  const d = new Date(2026, 7, 5);
  d.setDate(d.getDate() + k % 170 - 70 + add);
  return String(d.getDate()).padStart(2, "0") + " " + GMON[d.getMonth()] + " " + String(d.getFullYear()).slice(2);
}
function gnum(h, type, k0) {
  const k = gmix(k0);
  if (type === "pct") {
    const v = 62 + k % 37 + (k >> 4) % 10 / 10;
    return v;
  }
  if (type === "money") {
    if (/rate|price|per |unit cost|cpm/.test(h)) return k % 940 / 100 + 0.05;
    return 800 + k % 2600 * Math.max(1, Math.round(k % 9 + 1) * 11);
  }
  if (type === "qty") return 200 + k % 480 * 50;
  if (/smv|sam|minute/.test(h)) return k % 2400 / 100 + 0.4;
  if (/day|lead|age/.test(h)) return k % 90;
  return 1 + k % 240;
}
function generateValue(f, ek, k, ctx, colIndex = 0) {
  const h = f.label.toLowerCase();
  switch (f.type) {
    case "status":
      return GSTAT[(ek + colIndex) % GSTAT.length][1];
    case "bool":
      return k % 3 !== 0;
    case "date":
      return gdate(gmix(ek * 3), colIndex * (3 + ek % 20));
    case "ident":
      return gident(h, ek, ctx);
    case "money":
    case "pct":
    case "qty":
    case "num": {
      const v = gnum(h, f.type, k);
      return f.type === "num" && v % 1 === 0 ? v : Math.round(v * 100) / 100;
    }
    case "swatch":
      return "#" + (gmix(ek) & 16777215).toString(16).padStart(6, "0");
    default: {
      const e = gent(h, ek, ctx);
      return e != null ? e : gident(h, ek, ctx);
    }
  }
}
function generateRow(schema, seed, r, ctx) {
  const ek = seed + r >>> 0;
  const row = {};
  let dateRank = 0;
  schema.forEach((f, i) => {
    const k = seed + r * 7 + i * 13 >>> 0;
    const colIndex = f.type === "date" ? dateRank++ : i;
    row[f.key] = generateValue(f, ek, k, ctx, colIndex);
  });
  return row;
}

export {
  gmix,
  ghash,
  generateValue,
  generateRow
};
//# debugId=6dcdb8f7-71c9-5207-9347-696feb64ba24
//# sourceMappingURL=chunk-HCPETOFS.js.map
