import { Role } from '../models/role.model';

export interface DemoUser {
  username: string;
  fullName: string;
  title: string;
  role: Role;
  /** The module this person owns, for grouping the picker. */
  module: string;
  unit: string;
}

/**
 * The fifteen original personas, one per role — the one-time seed for the
 * M13.3 Users register (`ScreenDataService`, entity `AppUser`), not the
 * login source itself. `AuthService.login()` reads that register, not this
 * array, so an admin adding, removing or deactivating an account through
 * Users changes who can actually sign in; this only supplies what the
 * register starts with on a fresh browser.
 *
 * The login screen's own picker (`AuthService.signInOptions()`) reads the
 * live register too, gated on `environment.production` there. A production
 * login page that enumerates its own accounts hands an attacker the user
 * list for free; a demo that makes you remember fifteen usernames does not
 * get used.
 */
export const DEMO_USERS: DemoUser[] = [
  { username: 'hoque',    fullName: 'Mr. Hoque',      title: 'Managing Director',     role: 'OWNER',  module: 'Command centre', unit: 'ALL' },
  { username: 'rashida',  fullName: 'Rashida Akter',  title: 'Merchandising Manager', role: 'MERCH',  module: 'M1 · Merchandising', unit: 'ALL' },
  { username: 'kamrul',   fullName: 'Kamrul Islam',   title: 'Supply Chain',          role: 'SCM',    module: 'M2 · Supply Chain', unit: 'ALL' },
  { username: 'jasim',    fullName: 'Jasim Mia',      title: 'Store Keeper',          role: 'STORE',  module: 'M3 · Inventory & Store', unit: 'U4' },
  { username: 'kamal',    fullName: 'Kamal Hossain',  title: 'Industrial Engineering', role: 'IE',    module: 'M4 · Industrial Engineering', unit: 'ALL' },
  { username: 'faruk',    fullName: 'Faruk Ahmed',    title: 'General Manager',       role: 'GM',     module: 'M5 · Production', unit: 'U4' },
  { username: 'nasrin',   fullName: 'Nasrin Sultana', title: 'Quality Manager',       role: 'QC',     module: 'M6 · Quality', unit: 'U4' },
  { username: 'anwar',    fullName: 'Anwar Hossain',  title: 'Commercial / ExIm',     role: 'COMM',   module: 'M7 · Commercial & Shipping', unit: 'ALL' },
  { username: 'tanvir',   fullName: 'Tanvir Ahmed',   title: 'Finance Controller',    role: 'FIN',    module: 'M8 · Finance', unit: 'ALL' },
  { username: 'salma',    fullName: 'Salma Khatun',   title: 'HR & Compliance',       role: 'HR',     module: 'M9 · HR & Payroll', unit: 'U2' },
  { username: 'dyeing',   fullName: 'Dyeing Manager', title: 'Dyeing Manager',        role: 'DYE',    module: 'M11 · Textile', unit: 'U3' },
  { username: 'admin',    fullName: 'System Admin',   title: 'System Administrator',  role: 'ADMIN',  module: 'M13 · Administration', unit: 'ALL' },
  { username: 'shahin',   fullName: 'Shahin Alam',    title: 'Line Supervisor',       role: 'FLOOR',  module: 'Shop-floor app', unit: 'U4' },
  { username: 'walmart',  fullName: 'Walmart Canada', title: 'Buyer — external',      role: 'BUYERP', module: 'External portal', unit: 'ALL' },
  { username: 'verdatex', fullName: 'Verdatex Intl',  title: 'Supplier — external',   role: 'SUPP',   module: 'External portal', unit: 'ALL' },
];
