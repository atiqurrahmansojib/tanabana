import { Column } from '../models/screen.model';
import { GENERATED_RESOURCES } from './resource.registry.generated';

/**
 * What the generic screens need to know about an entity that the route data
 * cannot tell them: where its REST resource lives, which columns a list of it
 * should show, and which fields a user may fill in.
 *
 * Without an entry here a screen falls back to a kebab-cased path and to
 * whatever keys the first row happens to have — enough to prove a screen
 * renders, not enough to ship. Each module fills its entities in as its slice
 * is written; M1.1 Buyer below is the worked example to copy.
 */
export interface ResourceMeta {
  /** Kebab-case identifier, e.g. "m1/buyers" — kept for continuity with the
   *  real backend's REST path even though the mock keys its localStorage
   *  store by entity name instead. */
  path: string;
  /** Columns for the list archetype, in display order. */
  columns: Column[];
  /** Status values the list screen offers as a filter, if the entity has one. */
  statuses?: string[];
  /**
   * The authority a user needs to add, change or remove one of these.
   * Absent means the screen is read-only for everybody — the right default for
   * an entity whose write rules have not been written yet.
   */
  writeAuthority?: string;
  /** Fields the add and edit form offers, in the order they are asked for. */
  fields?: FormField[];
  /** Singular noun for buttons and messages: "buyer", "colour". */
  noun?: string;
}

export interface FormField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'number' | 'email' | 'tel';
  required?: boolean;
  /** Shown under the field — say why the rule exists, not just what it is. */
  hint?: string;
  options?: string[];
  /** Locked after creation: a business key other records already point at. */
  immutable?: boolean;
  placeholder?: string;
  /** Only ask for this when another field holds one of these values. */
  showWhen?: { field: string; equals: string[] };
}

export const RESOURCES: Readonly<Record<string, ResourceMeta>> = {
  Buyer: {
    path: 'm1/buyers',
    noun: 'buyer',
    writeAuthority: 'M1_MASTER_WRITE',
    statuses: ['ACTIVE', 'INACTIVE', 'BLACKLISTED'],
    columns: [
      { key: 'buyerCode', label: 'Code', type: 'ident' },
      { key: 'buyerName', label: 'Buyer', type: 'text' },
      { key: 'buyerType', label: 'Type', type: 'status' },
      { key: 'country', label: 'Country', type: 'text' },
      { key: 'contactPerson', label: 'Contact', type: 'text' },
      { key: 'defaultCurrency', label: 'Currency', type: 'ident', align: 'r' },
      { key: 'defaultIncoTerm', label: 'Incoterm', type: 'ident' },
      { key: 'defaultPaymentTerm', label: 'Payment term', type: 'text' },
      { key: 'defaultTenureDays', label: 'Tenure', type: 'num', align: 'r' },
      { key: 'defaultAqlLevel', label: 'AQL', type: 'ident', align: 'r' },
      { key: 'status', label: 'Status', type: 'status' },
    ],
    fields: [
      { key: 'buyerCode', label: 'Buyer code', type: 'text', required: true, immutable: true,
        placeholder: 'WMT',
        hint: 'Capitals, digits and hyphens. This is what appears on the PI and the LC, '
            + 'so it is fixed once orders exist against it.' },
      { key: 'buyerName', label: 'Buyer name', type: 'text', required: true,
        placeholder: 'Walmart Canada' },
      { key: 'buyerType', label: 'Buyer type', type: 'select', required: true,
        options: ['DIRECT', 'BUYING_HOUSE', 'AGENT', 'LICENSEE'],
        hint: 'DIRECT is the brand itself. A buying house or agent orders on a brand\'s '
            + 'behalf and takes a commission.' },
      { key: 'agentName', label: 'Buying house / agent', type: 'text',
        showWhen: { field: 'buyerType', equals: ['BUYING_HOUSE', 'AGENT'] },
        hint: 'Who earns the commission.' },
      { key: 'commissionPct', label: 'Commission %', type: 'number',
        showWhen: { field: 'buyerType', equals: ['BUYING_HOUSE', 'AGENT'] } },
      { key: 'country', label: 'Country', type: 'text', placeholder: 'Canada' },
      { key: 'address', label: 'Address', type: 'textarea' },
      { key: 'contactPerson', label: 'Contact person', type: 'text' },
      { key: 'contactNo', label: 'Contact number', type: 'tel', placeholder: '+1 905 821 2111' },
      { key: 'email', label: 'Email', type: 'email' },
      { key: 'defaultCurrency', label: 'Currency', type: 'select',
        options: ['USD', 'EUR', 'GBP', 'CAD', 'JPY', 'BDT'] },
      { key: 'defaultIncoTerm', label: 'Incoterm', type: 'select',
        options: ['EXW', 'FCA', 'FAS', 'FOB', 'CFR', 'CIF', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP'],
        hint: 'FOB is the norm for Bangladeshi exports. Every costing for this buyer '
            + 'starts from what you set here.' },
      { key: 'defaultIncoTermPlace', label: 'Incoterm place', type: 'text',
        placeholder: 'Chattogram' },
      { key: 'defaultPaymentTerm', label: 'Payment term', type: 'text',
        placeholder: 'LC at sight' },
      { key: 'defaultTenureDays', label: 'Tenure (days)', type: 'number',
        hint: '0 for sight. This reaches the LC, so a 60 typed as 90 is expensive.' },
      { key: 'defaultShipmentMode', label: 'Shipment mode', type: 'select',
        options: ['SEA', 'AIR', 'ROAD', 'RAIL', 'COURIER'] },
      { key: 'defaultAqlLevel', label: 'AQL level', type: 'select',
        options: ['0.65', '1.0', '1.5', '2.5', '4.0', '6.5'],
        hint: 'Agreed with the buyer, not chosen at the inspection gate.' },
      { key: 'status', label: 'Status', type: 'select',
        options: ['ACTIVE', 'INACTIVE', 'BLACKLISTED'] },
    ],
  },
  Color: {
    path: 'm1/colors',
    noun: 'colour',
    writeAuthority: 'M1_MASTER_WRITE',
    statuses: ['ACTIVE', 'DISCONTINUED'],
    columns: [
      { key: 'colorCode', label: 'Code', type: 'ident' },
      { key: 'colorName', label: 'Colour', type: 'text' },
      { key: 'hexValue', label: 'Swatch', type: 'swatch' },
      { key: 'pantoneCode', label: 'Pantone', type: 'ident' },
      { key: 'status', label: 'Status', type: 'status' },
    ],
    fields: [
      { key: 'colorCode', label: 'Colour code', type: 'text', required: true, immutable: true,
        placeholder: 'NVY',
        hint: 'Capitals, digits and hyphens. It appears on the lab dip and the shade '
            + 'band, so it is fixed once a style uses it.' },
      { key: 'colorName', label: 'Colour name', type: 'text', required: true,
        placeholder: 'Navy' },
      { key: 'hexValue', label: 'Swatch', type: 'text', placeholder: '#1B2A4A',
        hint: 'Six hex digits. Leave it blank until the buyer sends a reference — a '
            + 'half-typed value renders as black and nobody notices.' },
      { key: 'pantoneCode', label: 'Pantone', type: 'text', placeholder: '19-3933 TCX',
        hint: 'The standard a lab dip is measured against. TCX is the cotton library, '
            + 'TPX the paper one.' },
      { key: 'status', label: 'Status', type: 'select', options: ['ACTIVE', 'DISCONTINUED'],
        hint: 'Discontinued keeps a colour out of new styles while the orders that '
            + 'already used it stay readable.' },
    ],
  },
  CostingTemplate: {
    path: 'm1/costing-templates',
    noun: 'costing template',
    statuses: ['ACTIVE', 'ARCHIVED'],
    columns: [
      { key: 'templateCode', label: 'Code', type: 'ident' },
      { key: 'templateName', label: 'Template', type: 'text' },
      { key: 'productType', label: 'Product type', type: 'ident' },
      { key: 'totalItems', label: 'Lines', type: 'num', align: 'r' },
      { key: 'targetMarginPct', label: 'Target margin', type: 'pct', align: 'r' },
      { key: 'status', label: 'Status', type: 'status' },
    ],
  },
  /**
   * M13.3 Users — hand-written rather than left to the generic mock
   * generator, because this one isn't decorative: `AuthService.login()`
   * reads this exact directory. Add a row here and that person can sign
   * in; set `status` to INACTIVE or remove the row and they immediately
   * cannot. See `screen-data.service.ts` for the one-time seed from the
   * fifteen personas and `auth.service.ts` for the read.
   */
  AppUser: {
    path: 'm13/users',
    noun: 'user',
    writeAuthority: 'M13_WRITE',
    statuses: ['ACTIVE', 'INACTIVE'],
    columns: [
      { key: 'username', label: 'Username', type: 'ident' },
      { key: 'fullName', label: 'Full name', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'role', label: 'Role', type: 'ident' },
      { key: 'unit', label: 'Unit', type: 'ident' },
      { key: 'status', label: 'Status', type: 'status' },
    ],
    fields: [
      { key: 'username', label: 'Username', type: 'text', required: true, immutable: true,
        placeholder: 'nasima',
        hint: 'What this person signs in with. Fixed once the account exists — it is '
            + 'how every other record attributes an action to them.' },
      { key: 'fullName', label: 'Full name', type: 'text', required: true },
      { key: 'title', label: 'Job title', type: 'text', placeholder: 'Merchandiser' },
      { key: 'role', label: 'Role', type: 'select', required: true,
        options: ['OWNER', 'MERCH', 'SCM', 'STORE', 'IE', 'GM', 'QC', 'COMM', 'FIN', 'HR',
                  'DYE', 'ADMIN', 'FLOOR', 'BUYERP', 'SUPP'],
        hint: 'Decides every module and section this account can open — see the rail.' },
      { key: 'unit', label: 'Unit', type: 'select', required: true,
        options: ['ALL', 'U1', 'U2', 'U3', 'U4'],
        hint: '"ALL" for a group-level role; one factory for a unit-scoped one.' },
      { key: 'status', label: 'Status', type: 'select', options: ['ACTIVE', 'INACTIVE'],
        hint: 'INACTIVE blocks sign-in immediately, without deleting the account.' },
    ],
  },
};

/**
 * Every entity beyond the three hand-tuned M1 masters above — 227 of them —
 * comes from `Product/screen_content.json`, the same source the prototype's
 * 234 screens were generated from. Regenerate with
 * `python3 tools/gen_mock_resources.py` rather than editing that file by hand.
 */
export function resourceFor(entity: string): ResourceMeta | undefined {
  return RESOURCES[entity] ?? GENERATED_RESOURCES[entity];
}

/** The fallback path for an entity nobody has registered yet: Buyer -> buyer. */
export function fallbackPath(entity: string): string {
  return entity.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}
