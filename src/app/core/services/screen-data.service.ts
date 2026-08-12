import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { resourceFor } from '../data/resource.registry';
import { ENTITY_SCHEMA } from '../data/mock-schema.generated';
import { FieldSpec, generateRow, generateValue, ghash } from '../data/mock-generator';
import { DEMO_USERS } from '../models/demo-users';

export interface Page<T> {
  content: T[];
  totalElements: number;
  number: number;
  size: number;
}

export interface ListQuery {
  page?: number;
  size?: number;
  /** Free-text search across every string field in the row. */
  q?: string;
  status?: string;
  sort?: string;
}

type Row = Record<string, unknown> & { id: number; _deleted?: boolean };

/** Rows per entity. Enough to page through, not so many the demo feels padded. */
const ROW_COUNT = 28;

/**
 * Generic access to an entity's records — with no backend behind it.
 *
 * There is no Java service and no Postgres here. Every screen names its
 * entity in the route data, and this fabricates a coherent, deterministic
 * register for it from `ENTITY_SCHEMA` (every field any screen in the
 * information architecture ever asks for) the first time it is opened, then
 * persists edits to `localStorage` — the same trick `Prototype/index.html`
 * uses, so a merchandiser can add a buyer, refresh, and still see it.
 *
 * The class name and method signatures are unchanged from when this called a
 * real API, on purpose: every screen component that injects
 * `ScreenDataService` needed no changes at all to run against mock data.
 */
@Injectable({ providedIn: 'root' })
export class ScreenDataService {
  private readonly cache = new Map<string, Row[]>();

  /**
   * The full field set a row for this entity is generated from: the
   * hand-written registry's columns and fields first (their types are the
   * ones someone actually chose — currency, incoterm, select options), then
   * whatever `ENTITY_SCHEMA` adds that the hand-written registry did not
   * cover. Without the merge, a hand-tuned entity like Buyer would only
   * generate the handful of fields `screen_content.json` happened to carry
   * for its one list screen, and every hand-written column beyond that
   * (currency, incoterm, AQL, ...) would render blank.
   */
  private schemaFor(entity: string): FieldSpec[] {
    const meta = resourceFor(entity);
    const seen = new Map<string, FieldSpec>();
    for (const c of meta?.columns ?? []) seen.set(c.key, { key: c.key, label: c.label, type: c.type });
    for (const f of meta?.fields ?? []) {
      if (seen.has(f.key)) continue;
      seen.set(f.key, { key: f.key, label: f.label, type: f.type === 'number' ? 'num' : 'text' });
    }
    for (const f of ENTITY_SCHEMA[entity] ?? []) {
      if (!seen.has(f.key)) seen.set(f.key, f);
    }
    return [...seen.values()];
  }

  private storeKey(entity: string): string {
    return `tanabana:mock:${entity}`;
  }

  private load(entity: string): Row[] {
    const cached = this.cache.get(entity);
    if (cached) return cached;

    const raw = localStorage.getItem(this.storeKey(entity));
    if (raw) {
      try {
        const rows = JSON.parse(raw) as Row[];
        this.cache.set(entity, rows);
        return rows;
      } catch { /* fall through and reseed a corrupted entry */ }
    }

    if (entity === 'AppUser') {
      const rows = this.seedAppUsers();
      this.save(entity, rows);
      return rows;
    }

    const schema = this.schemaFor(entity);
    const meta = resourceFor(entity);
    const seed = ghash(entity);
    const ctx = entity.toLowerCase();
    const rows: Row[] = [];
    for (let r = 0; r < ROW_COUNT; r++) {
      const row = generateRow(schema, seed, r, ctx) as Row;
      row.id = r + 1;
      row['createdBy'] = generateValue(
        { key: 'createdBy', label: 'Created by', type: 'text' }, seed + r, seed + r, ctx);
      row['updatedBy'] = generateValue(
        { key: 'updatedBy', label: 'Last changed by', type: 'text' }, seed + r + 3, seed + r + 3, ctx);
      // A registered entity's real status enum wins over the generic
      // Approved/Draft/... pool the generator falls back to.
      if (meta?.statuses?.length) {
        row['status'] = meta.statuses[(seed + r) % meta.statuses.length];
      }
      // A hand-written select field (buyerType: DIRECT/BUYING_HOUSE/...) has
      // real business options — those win over whatever the generic 'status'
      // type would have picked for a column that borrows it purely for pill
      // styling.
      for (const f of meta?.fields ?? []) {
        if (f.type !== 'select' || f.key === 'status' || !f.options?.length) continue;
        if (f.options[0] === 'Yes' || f.options[0] === 'No') continue;
        row[f.key] = f.options[(seed + r + ghash(f.key)) % f.options.length];
      }
      rows.push(row);
    }
    this.save(entity, rows);
    return rows;
  }

  /**
   * The account directory `AuthService.login()` actually reads. Seeded from
   * the fifteen personas so the app opens exactly as it did before this was
   * editable, but from here on it is a real, mutable register — remove or
   * deactivate M13.3's own System Admin row and it locks the admin out too;
   * this seeds the account, it does not stand guard over it.
   */
  private seedAppUsers(): Row[] {
    return DEMO_USERS.map((u, i) => ({
      id: i + 1,
      username: u.username,
      fullName: u.fullName,
      title: u.title,
      role: u.role,
      unit: u.unit,
      status: 'ACTIVE',
      createdBy: 'System Admin',
      updatedBy: 'System Admin',
    }));
  }

  private save(entity: string, rows: Row[]): void {
    this.cache.set(entity, rows);
    localStorage.setItem(this.storeKey(entity), JSON.stringify(rows));
  }

  list<T>(entity: string, query: ListQuery = {}): Observable<Page<T>> {
    let rows = this.load(entity).filter(r => !r._deleted);

    if (query.status) {
      rows = rows.filter(r => r['status'] === query.status);
    }
    if (query.q) {
      const q = query.q.toLowerCase();
      rows = rows.filter(r => Object.values(r).some(v =>
        typeof v === 'string' && v.toLowerCase().includes(q)));
    }

    const page = query.page ?? 0;
    const size = query.size ?? 25;
    const content = rows.slice(page * size, page * size + size) as unknown as T[];
    return of({ content, totalElements: rows.length, number: page, size });
  }

  get<T>(entity: string, id: number | string): Observable<T> {
    const row = this.load(entity).find(r => String(r.id) === String(id) && !r._deleted);
    return row
      ? of(row as unknown as T)
      : throwError(() => ({ error: { message: 'This record could not be found.' } }));
  }

  create<T>(entity: string, body: unknown): Observable<T> {
    const rows = this.load(entity);
    const schema = this.schemaFor(entity);
    const seed = ghash(entity);
    // A freshly generated row supplies every field the form did not ask for,
    // so a record created from a four-field add form is not mostly blank.
    const base = generateRow(schema, seed, rows.length + ROW_COUNT, entity.toLowerCase());
    const id = rows.reduce((max, r) => Math.max(max, r.id), 0) + 1;
    const row: Row = { ...base, ...(body as object), id };
    rows.push(row);
    this.save(entity, rows);
    return of(row as unknown as T);
  }

  update<T>(entity: string, id: number | string, body: unknown): Observable<T> {
    const rows = this.load(entity);
    const idx = rows.findIndex(r => String(r.id) === String(id));
    if (idx < 0) {
      return throwError(() => ({ error: { message: 'This record could not be found.' } }));
    }
    rows[idx] = { ...rows[idx], ...(body as object), id: rows[idx].id };
    this.save(entity, rows);
    return of(rows[idx] as unknown as T);
  }

  /**
   * Deletes a record, with the reason the real server would have required.
   * Soft, same as the design this mocks: the row is marked, not dropped, so
   * an accidental remove during a walkthrough is not permanent.
   */
  remove(entity: string, id: number | string, _reason: string): Observable<void> {
    const rows = this.load(entity);
    const idx = rows.findIndex(r => String(r.id) === String(id));
    if (idx >= 0) {
      rows[idx]._deleted = true;
      this.save(entity, rows);
    }
    return of(void 0);
  }

  restore<T>(entity: string, id: number | string, _reason: string): Observable<T> {
    const rows = this.load(entity);
    const idx = rows.findIndex(r => String(r.id) === String(id));
    if (idx < 0) {
      return throwError(() => ({ error: { message: 'This record could not be found.' } }));
    }
    rows[idx]._deleted = false;
    this.save(entity, rows);
    return of(rows[idx] as unknown as T);
  }
}
