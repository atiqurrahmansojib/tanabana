/** Roles as the backend issues them; the guard checks these authorities. */
export type Role =
  | 'OWNER' | 'MERCH' | 'SCM' | 'STORE' | 'IE' | 'GM'
  | 'QC' | 'COMM' | 'FIN' | 'HR' | 'DYE' | 'ADMIN'
  // Not numbered modules: the shop-floor app and the external portal.
  | 'FLOOR' | 'BUYERP' | 'SUPP';

export interface CurrentUser {
  username: string;
  fullName: string;
  role: Role;
  /**
   * The units this session may see — the fourth layer of data scoping.
   *
   * A set, not a value: a merchandiser covering two factories holds both, a
   * store keeper holds one, a group user holds the sentinel "ALL".
   */
  unitScope: string[];
  authorities: string[];
}
