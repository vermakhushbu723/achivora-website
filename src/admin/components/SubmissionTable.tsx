import { useCallback, useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  RefreshCw,
  Search,
  Trash2,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { api, type ApiError, type Submission, type SubmissionKind } from '@/lib/api';

const STATUSES: Submission['status'][] = ['new', 'in-progress', 'done', 'archived'];

const STATUS_STYLE: Record<Submission['status'], string> = {
  new: 'bg-job-tag-bg text-job-tag-txt',
  'in-progress': 'bg-remote-bg text-remote-txt',
  done: 'bg-tint-green-2 text-success',
  archived: 'bg-bg-soft text-text-hint',
};

const TYPE_LABEL: Record<SubmissionKind, string> = {
  enquiry: 'Enquiry',
  contact: 'Contact',
  application: 'Application',
};

const shortDate = (iso: string) =>
  new Date(iso).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });

/**
 * The one table every admin list page renders.
 *
 * `formType` fixes the list to a single form (the per-form pages) or shows
 * everything (the combined inbox). Rows open a side panel rather than a new
 * route, so triaging a queue never loses the filters you set.
 */
export default function SubmissionTable({ formType }: { formType?: SubmissionKind }) {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('all');
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Submission | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.list({ page, limit: 20, formType, status, q: search });
      setItems(res.items);
      setPages(res.pages);
      setTotal(res.total);
    } catch (err) {
      toast.error((err as ApiError).message);
    } finally {
      setLoading(false);
    }
  }, [page, formType, status, search]);

  useEffect(() => {
    void load();
  }, [load]);

  // A new filter should always land on the first page of results.
  useEffect(() => setPage(1), [status, search, formType]);

  const patch = async (id: string, update: { status?: Submission['status']; notes?: string }) => {
    try {
      const res = await api.update(id, update);
      setItems((rows) => rows.map((r) => (r._id === id ? res.item : r)));
      setSelected((s) => (s && s._id === id ? res.item : s));
      toast.success('Updated');
    } catch (err) {
      toast.error((err as ApiError).message);
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm('Delete this submission permanently?')) return;
    try {
      await api.remove(id);
      setSelected(null);
      toast.success('Deleted');
      void load();
    } catch (err) {
      toast.error((err as ApiError).message);
    }
  };

  return (
    <div className="space-y-3">
      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(query.trim());
          }}
          className="relative flex-1 min-w-[180px]"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-hint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, email, phone or message…"
            className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface border border-border text-text-main text-xs placeholder:text-text-hint focus:outline-none focus:border-primary transition-colors"
          />
        </form>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-9 px-2.5 rounded-lg bg-surface border border-border text-text-main text-xs cursor-pointer focus:outline-none focus:border-primary"
        >
          <option value="all">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          onClick={() => void load()}
          className="h-9 px-3 rounded-lg border border-border text-text-sub text-xs font-semibold hover:text-primary hover:border-primary/40 inline-flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* ── Table ── */}
      <div className="bg-surface border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-bg-soft text-text-sub text-left">
                <th className="px-3 py-2 font-semibold">Name</th>
                <th className="px-3 py-2 font-semibold hidden sm:table-cell">Contact</th>
                {!formType && <th className="px-3 py-2 font-semibold">Type</th>}
                <th className="px-3 py-2 font-semibold hidden md:table-cell">Message</th>
                <th className="px-3 py-2 font-semibold">Status</th>
                <th className="px-3 py-2 font-semibold hidden sm:table-cell">Received</th>
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody>
              {loading && items.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-10 text-center text-text-sub">
                    Loading…
                  </td>
                </tr>
              )}

              {!loading && items.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-12 text-center">
                    <Inbox className="h-6 w-6 text-text-hint mx-auto mb-2" />
                    <p className="text-text-sub">Nothing here yet.</p>
                  </td>
                </tr>
              )}

              {items.map((row) => (
                <tr
                  key={row._id}
                  onClick={() => setSelected(row)}
                  className="border-t border-border hover:bg-bg-soft/70 cursor-pointer transition-colors"
                >
                  <td className="px-3 py-2">
                    <span className="font-semibold text-text-main">{row.name}</span>
                    <span className="block sm:hidden text-text-hint">{row.email}</span>
                  </td>
                  <td className="px-3 py-2 hidden sm:table-cell text-text-sub">
                    {row.email}
                    {row.phone && <span className="block text-text-hint">{row.phone}</span>}
                  </td>
                  {!formType && (
                    <td className="px-3 py-2">
                      <span className="tag bg-bg-soft text-text-sub !text-[10px] !py-0.5">
                        {TYPE_LABEL[row.formType]}
                      </span>
                    </td>
                  )}
                  <td className="px-3 py-2 hidden md:table-cell text-text-sub max-w-[260px] truncate">
                    {row.message || '—'}
                  </td>
                  <td className="px-3 py-2">
                    <span className={`tag !text-[10px] !py-0.5 ${STATUS_STYLE[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 hidden sm:table-cell text-text-hint whitespace-nowrap">
                    {shortDate(row.createdAt)}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        void remove(row._id);
                      }}
                      className="p-1.5 rounded-md text-text-hint hover:text-error hover:bg-urgent-bg transition-colors"
                      aria-label={`Delete submission from ${row.name}`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Pager ── */}
        <div className="flex items-center justify-between gap-3 px-3 py-2 border-t border-border bg-bg-soft/60">
          <p className="text-[11px] text-text-sub">
            {total} record{total === 1 ? '' : 's'} · page {page} of {pages}
          </p>
          <div className="flex items-center gap-1">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="p-1.5 rounded-md border border-border text-text-sub disabled:opacity-40 hover:text-primary transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              disabled={page >= pages}
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              className="p-1.5 rounded-md border border-border text-text-sub disabled:opacity-40 hover:text-primary transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Detail panel ── */}
      {selected && (
        <DetailPanel
          item={selected}
          onClose={() => setSelected(null)}
          onPatch={patch}
          onDelete={remove}
        />
      )}
    </div>
  );
}

function DetailPanel({
  item,
  onClose,
  onPatch,
  onDelete,
}: {
  item: Submission;
  onClose: () => void;
  onPatch: (id: string, update: { status?: Submission['status']; notes?: string }) => void;
  onDelete: (id: string) => void;
}) {
  const [notes, setNotes] = useState(item.notes ?? '');

  // Switching rows while the panel is open must reload the note it shows.
  useEffect(() => setNotes(item.notes ?? ''), [item._id, item.notes]);

  const extras = Object.entries(item.extra ?? {}).filter(
    ([, v]) => v !== '' && v !== null && v !== undefined,
  );

  return (
    <>
      <button className="fixed inset-0 z-40 bg-black/40" onClick={onClose} aria-label="Close" />

      <aside className="fixed right-0 inset-y-0 z-50 w-full sm:w-96 bg-surface border-l border-border shadow-card-hover flex flex-col animate-fade-in">
        <div className="h-12 px-4 flex items-center justify-between border-b border-border shrink-0">
          <h2 className="text-sm font-bold text-text-main truncate">{item.name}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-text-sub hover:text-primary hover:bg-bg-soft"
            aria-label="Close panel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          <dl className="space-y-2">
            <Row label="Form">{TYPE_LABEL[item.formType]}</Row>
            <Row label="Email">
              <a href={`mailto:${item.email}`} className="text-primary hover:underline">
                {item.email}
              </a>
            </Row>
            {item.phone && (
              <Row label="Phone">
                <a href={`tel:${item.phone}`} className="text-primary hover:underline">
                  {item.phone}
                </a>
              </Row>
            )}
            {extras.map(([k, v]) => (
              <Row key={k} label={k}>
                {typeof v === 'boolean' ? (v ? 'Yes' : 'No') : String(v)}
              </Row>
            ))}
            <Row label="Received">{new Date(item.createdAt).toLocaleString('en-IN')}</Row>
            {item.meta?.page && <Row label="Page">{item.meta.page}</Row>}
          </dl>

          {item.message && (
            <div>
              <p className="font-semibold text-text-main mb-1.5">Message</p>
              <p className="text-text-sub leading-relaxed whitespace-pre-wrap bg-bg-soft rounded-lg p-3">
                {item.message}
              </p>
            </div>
          )}

          <div>
            <p className="font-semibold text-text-main mb-1.5">Status</p>
            <div className="flex flex-wrap gap-1.5">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => onPatch(item._id, { status: s })}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                    item.status === s
                      ? 'bg-primary text-white border-primary'
                      : 'border-border text-text-sub hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-text-main mb-1.5">Internal notes</p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Who is following up, what was agreed…"
              className="w-full px-3 py-2 rounded-lg bg-input-bg border border-border text-text-main text-xs placeholder:text-text-hint focus:outline-none focus:border-primary resize-none"
            />
            <button
              onClick={() => onPatch(item._id, { notes })}
              disabled={notes === (item.notes ?? '')}
              className="mt-2 px-3 py-1.5 rounded-lg bg-primary text-white text-[11px] font-semibold disabled:opacity-40 hover:bg-primary-dark transition-colors"
            >
              Save note
            </button>
          </div>
        </div>

        <div className="p-3 border-t border-border shrink-0">
          <button
            onClick={() => onDelete(item._id)}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-error/30 text-error text-[11px] font-semibold hover:bg-urgent-bg transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete submission
          </button>
        </div>
      </aside>
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <dt className="w-20 shrink-0 text-text-hint capitalize">{label}</dt>
      <dd className="text-text-main break-words min-w-0">{children}</dd>
    </div>
  );
}
