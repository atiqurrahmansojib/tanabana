import * as P from './mock-pools';

/**
 * Deterministic fake-data engine — a TypeScript port of the generator inside
 * `Prototype/index.html` (`gent`/`gident`/`gdate`/`gnum`), kept faithful so
 * the Angular client's mock data reads exactly like the approved prototype's:
 * the same header word ("buyer", "supplier", "shade") always resolves to the
 * same kind of value, and a row's fields agree with each other.
 *
 * There is no backend behind this app. Every list, board, form and object
 * screen reads and writes through here, with `localStorage` standing in for
 * the database (see `screen-data.service.ts`).
 */

/** Scatters a counter so consecutive rows do not produce an arithmetic progression. */
export function gmix(k: number): number {
  k = Math.imul(k ^ (k >>> 16), 2246822507);
  k = Math.imul(k ^ (k >>> 13), 3266489909);
  return (k ^ (k >>> 16)) >>> 0;
}

export function ghash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/** Entity lookup keyed on the row (`ek`), never the cell — so two columns on the same row agree. */
function gent(h: string, ek: number, ctx = ''): string | null {
  h = h.toLowerCase();
  if (/\s(name|title|label)$/.test(h)) {
    const e = gent(h.replace(/\s(name|title|label)$/, ''), ek, ctx);
    if (e != null) return e;
  }
  if (/\s(type|category|group|class|kind)$/.test(h)) {
    const base = h.replace(/\s(type|category|group|class|kind)$/, '');
    if (/supplier|vendor|mill/.test(base)) return P.GSUPTYPE[ek % P.GSUPTYPE.length];
    if (/machine|equipment/.test(base)) return P.GMACH[ek % P.GMACH.length];
    if (/leave/.test(base)) return P.GLEAVE[ek % P.GLEAVE.length];
    if (/defect|fault/.test(base)) return P.GDEFECT[ek % P.GDEFECT.length];
    if (/document|doc/.test(base)) return P.GDOC[ek % P.GDOC.length];
    if (/movement|transaction|stock/.test(base)) return P.GMOVE[ek % P.GMOVE.length];
    if (/audit|certificat/.test(base)) return P.GSCHEME[ek % P.GSCHEME.length];
    if (/issue|alert|andon|downtime/.test(base)) return P.GREASON[ek % P.GREASON.length];
    return P.GGROUP[ek % P.GGROUP.length];
  }
  if (/shift/.test(h)) return P.GSHIFT[ek % P.GSHIFT.length];
  if (/buyer|customer|brand|client/.test(h)) return P.GBUYER[ek % P.GBUYER.length];
  if (/style|garment/.test(h)) return P.GSTYLE[ek % P.GSTYLE.length];
  if (/\bpo\b|order|contract/.test(h)) return P.GPO[ek % P.GPO.length];
  if (/supplier|vendor|forwarder|subcontract|mill/.test(h)) return P.GSUP[ek % P.GSUP.length];
  if (/unit|factory|plant/.test(h)) return 'U' + (1 + ek % 4);
  if (/employee|worker|operator|user|person|approver|inspector|auditor|owner|by\b/.test(h)) return P.GPERSON[ek % P.GPERSON.length];
  if (/line/.test(h)) return 'Line ' + String(1 + ek % 12).padStart(2, '0');
  if (/machine/.test(h)) return 'M-' + (101 + ek % 40);
  if (/shade band|shade group/.test(h)) return 'SB-' + P.GCOLOUR[ek % P.GCOLOUR.length].slice(0, 2).toUpperCase() + '-' + String(1 + ek % 4).padStart(2, '0');
  if (/colou?r|shade/.test(h)) return P.GCOLOUR[ek % P.GCOLOUR.length];
  if (/\bsize\b/.test(h)) return P.GSIZE[ek % P.GSIZE.length];
  if (/item|material|fabric|trim|article|product/.test(h)) return P.GMAT[ek % P.GMAT.length];
  if (/defect|fault|ncr|finding/.test(h)) return P.GDEFECT[ek % P.GDEFECT.length];
  if (/operation|process step|task/.test(h)) return P.GOPER[ek % P.GOPER.length];
  if (/stage|process|department|section/.test(h)) return P.GSTAGE[ek % P.GSTAGE.length];
  if (/leave/.test(h) || /leave/.test(ctx)) {
    if (/type|category|kind/.test(h)) return P.GLEAVE[ek % P.GLEAVE.length];
    if (/reason|cause|purpose/.test(h)) return P.GLEAVEWHY[ek % P.GLEAVEWHY.length];
  }
  if (/movement|transaction/.test(h) && /type/.test(h)) return P.GMOVE[ek % P.GMOVE.length];
  if (/issue|alert|andon|downtime|stoppage/.test(h + ' ' + ctx) && /type|category|code/.test(h)) return P.GREASON[ek % P.GREASON.length];
  if (/document/.test(h) && /type|name/.test(h)) return P.GDOC[ek % P.GDOC.length];
  if (/defect/.test(h) && /type|category/.test(h)) return P.GDEFECT[ek % P.GDEFECT.length];
  if (/reason|cause/.test(h)) {
    if (/downtime|stop|npt|non.?product|delay|breakdown/.test(h + ' ' + ctx)) return P.GREASON[ek % P.GREASON.length];
    return P.GWHY[ek % P.GWHY.length];
  }
  if (/address|street/.test(h)) return P.GLOC[ek % P.GLOC.length][0] + ', ' + P.GLOC[ek % P.GLOC.length][1];
  if (/city|district|town/.test(h)) return P.GLOC[ek % P.GLOC.length][1];
  if (/country|origin|destination|nationality/.test(h)) return P.GLOC[ek % P.GLOC.length][2];
  if (/port|terminal/.test(h)) return P.GPORT[ek % P.GPORT.length];
  if (/bank|issuing|advising/.test(h)) return P.GBANK[ek % P.GBANK.length];
  if (/uom|unit of measure|measure/.test(h)) return P.GUOM[ek % P.GUOM.length];
  if (/incoterm|delivery term|shipping term/.test(h)) return P.GINCO[ek % P.GINCO.length];
  if (/payment term|term/.test(h)) return P.GTERM[ek % P.GTERM.length];
  if (/currency/.test(h)) return P.GCUR[ek % P.GCUR.length];
  if (/season/.test(h)) return P.GSEASON[ek % P.GSEASON.length];
  if (/scheme|certificat|standard|audit type/.test(h)) return P.GSCHEME[ek % P.GSCHEME.length];
  if (/department|dept/.test(h)) return P.GDEPT[ek % P.GDEPT.length];
  if (/designation|grade|role|title|position/.test(h)) return P.GDESIG[ek % P.GDESIG.length];
  if (/bin|rack|location/.test(h)) return P.GBIN[ek % P.GBIN.length];
  if (/warehouse|store/.test(h)) return P.GWH[ek % P.GWH.length];
  if (/chemical|dyestuff|recipe/.test(h)) return P.GCHEM[ek % P.GCHEM.length];
  if (/machine type|equipment/.test(h)) return P.GMACH[ek % P.GMACH.length];
  if (/channel|medium/.test(h)) return P.GCHAN[ek % P.GCHAN.length];
  if (/email|mail/.test(h)) return P.GPERSON[ek % P.GPERSON.length].split(' ')[0].toLowerCase() + '@' +
    P.GSUP[ek % P.GSUP.length].split(' ')[0].toLowerCase() + '.com';
  if (/phone|mobile|telephone|^contact$|contact no/.test(h)) return '+8801' + (700000000 + ek * 7919 % 99999999);
  if (/remark|note|comment|description|narration|justification/.test(h)) return P.GNOTE[ek % P.GNOTE.length];
  if (/group|category|type|class/.test(h)) return P.GGROUP[ek % P.GGROUP.length];
  return null;
}

function gident(h: string, ek: number, ctx: string): string {
  const e = gent(h, ek, ctx);
  if (e != null && (!/\s/.test(e) || /^(U\d|PO-|Line )/.test(e))) return e;
  const plain = (h.match(/[a-z]+/g) || []).length <= 2;
  if (plain) {
    if (/buyer|customer|brand|client/.test(h)) return 'BUY-' + (101 + ek % P.GBUYER.length);
    if (/supplier|vendor|mill/.test(h)) return 'SUP-' + (201 + ek % P.GSUP.length);
    if (/employee|worker|operator/.test(h)) return 'EMP-' + (4100 + ek % P.GPERSON.length);
    if (/item|material|fabric|trim|article/.test(h)) return 'ITM-' + (3100 + ek % P.GMAT.length);
  }
  // A bare "Code"/"Ref"/"ID" column says nothing about what it identifies —
  // read the entity context instead, so a Buyer's own business key still
  // reads BUY-101 rather than a prefix taken from the word "Code".
  if (/^(code|id|ref|reference|no|number)$/.test(h.trim())) {
    if (/buyer|customer|brand|client/.test(ctx)) return 'BUY-' + (101 + ek % P.GBUYER.length);
    if (/supplier|vendor|mill/.test(ctx)) return 'SUP-' + (201 + ek % P.GSUP.length);
    if (/employee|worker|operator/.test(ctx)) return 'EMP-' + (4100 + ek % P.GPERSON.length);
    if (/item|material|fabric|trim|article/.test(ctx)) return 'ITM-' + (3100 + ek % P.GMAT.length);
    const prefix = (ctx.replace(/[^a-z]/g, '').slice(0, 3).toUpperCase()) || 'REF';
    return prefix + '-2026-' + String(1000 + ghash(ctx) % 700 + ek % 90);
  }
  const pre = (h.match(/[a-z]+/g) || ['ref']).map(w => w[0]).join('').toUpperCase().slice(0, 3);
  return pre + '-2026-' + String(1000 + ghash(h) % 700 + ek % 90);
}

function gdate(k: number, add = 0): string {
  const d = new Date(2026, 7, 5);
  d.setDate(d.getDate() + (k % 170) - 70 + add);
  return String(d.getDate()).padStart(2, '0') + ' ' + P.GMON[d.getMonth()] + ' ' + String(d.getFullYear()).slice(2);
}

function gnum(h: string, type: string, k0: number): number {
  const k = gmix(k0);
  if (type === 'pct') { const v = 62 + k % 37 + ((k >> 4) % 10) / 10; return v; }
  if (type === 'money') {
    if (/rate|price|per |unit cost|cpm/.test(h)) return (k % 940) / 100 + 0.05;
    return 800 + (k % 2600) * Math.max(1, Math.round((k % 9) + 1) * 11);
  }
  if (type === 'qty') return 200 + (k % 480) * 50;
  if (/smv|sam|minute/.test(h)) return (k % 2400) / 100 + 0.4;
  if (/day|lead|age/.test(h)) return k % 90;
  return 1 + k % 240;
}

export interface FieldSpec {
  key: string;
  label: string;
  /** ident | text | status | date | num | money | pct | qty | bool | swatch */
  type: string;
}

/** One field's value for one row. `colIndex` varies the date-walk and the status pick across a row. */
export function generateValue(f: FieldSpec, ek: number, k: number, ctx: string, colIndex = 0): unknown {
  const h = f.label.toLowerCase();
  switch (f.type) {
    case 'status':
      return P.GSTAT[(ek + colIndex) % P.GSTAT.length][1];
    case 'bool':
      return k % 3 !== 0;
    case 'date':
      return gdate(gmix(ek * 3), colIndex * (3 + ek % 20));
    case 'ident':
      return gident(h, ek, ctx);
    case 'money': case 'pct': case 'qty': case 'num': {
      const v = gnum(h, f.type, k);
      return f.type === 'num' && v % 1 === 0 ? v : Math.round(v * 100) / 100;
    }
    case 'swatch':
      return '#' + (gmix(ek) & 0xffffff).toString(16).padStart(6, '0');
    default: {
      const e = gent(h, ek, ctx);
      return e != null ? e : gident(h, ek, ctx);
    }
  }
}

/**
 * A full row for one entity. `seed` is per-entity (see `ghash`), `r` is the
 * row number — together they are `ek`, which walks one entity per row so a
 * list reads down without repeating. `k` varies per field, so numbers and
 * dates differ across the row the way they would in a real register.
 */
export function generateRow(schema: FieldSpec[], seed: number, r: number, ctx: string): Record<string, unknown> {
  const ek = (seed + r) >>> 0;
  const row: Record<string, unknown> = {};
  let dateRank = 0;
  schema.forEach((f, i) => {
    const k = (seed + r * 7 + i * 13) >>> 0;
    const colIndex = f.type === 'date' ? dateRank++ : i;
    row[f.key] = generateValue(f, ek, k, ctx, colIndex);
  });
  return row;
}
