/** Metadata every route carries, so one component serves many screens. */
export type Archetype = 'list' | 'board' | 'object' | 'form' | 'wizard' | 'calendar';

export interface ScreenMeta {
  /** IA code, e.g. "M3.8" or "A4-A" — matches INFORMATION_ARCHITECTURE.md. */
  code: string;
  title: string;
  module: string;
  section: string;
  archetype: Archetype;
  /** Backing entity from the class diagrams; drives the generic REST path. */
  entity: string;
  flagship: boolean;
}

export interface Column {
  key: string;
  label: string;
  type: 'text' | 'ident' | 'status' | 'date' | 'qty' | 'money' | 'pct' | 'num' | 'bool'
      | 'swatch';
  align?: 'l' | 'r';
}
