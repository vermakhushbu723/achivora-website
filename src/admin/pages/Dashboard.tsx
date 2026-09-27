import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Briefcase, FileText, Inbox, Mail, TrendingUp } from 'lucide-react';
import { api, type ApiError, type SubmissionStats } from '@/lib/api';

const shortDate = (iso: string) =>
  new Date(iso).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });

/** Counts, a status breakdown, and the six newest submissions. */
export default function Dashboard() {
  const [stats, setStats] = useState<SubmissionStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .stats()
      .then(setStats)
      .catch((err) => setError((err as ApiError).message));
  }, []);

  if (error) {
    return (
      <p className="text-xs text-error bg-urgent-bg border border-error/20 rounded-lg px-3 py-2">
        {error}
      </p>
    );
  }

  if (!stats) return <p className="text-text-sub text-xs">Loading…</p>;

  const tiles = [
    { label: 'Total submissions', value: stats.total, Icon: Inbox, to: '/admin/submissions' },
    { label: 'Project enquiries', value: stats.byType.enquiry ?? 0, Icon: FileText, to: '/admin/enquiries' },
    { label: 'Contact messages', value: stats.byType.contact ?? 0, Icon: Mail, to: '/admin/contacts' },
    { label: 'Job applications', value: stats.byType.application ?? 0, Icon: Briefcase, to: '/admin/applications' },
  ];

  const statuses = ['new', 'in-progress', 'done', 'archived'] as const;

  return (
    <div className="space-y-4">
      {/* ── Counts ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {tiles.map(({ label, value, Icon, to }) => (
          <Link
            key={label}
            to={to}
            className="bg-surface border border-border rounded-xl p-3.5 hover:border-primary/40 hover:-translate-y-0.5 transition-all group"
          >
            <span className="w-8 h-8 rounded-lg bg-job-tag-bg flex items-center justify-center mb-2.5 group-hover:bg-primary transition-colors">
              <Icon className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
            </span>
            <p className="text-xl font-black text-text-main tabular-nums">{value}</p>
            <p className="text-[11px] text-text-sub mt-0.5">{label}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-3">
        {/* ── This week + status split ── */}
        <div className="bg-surface border border-border rounded-xl p-3.5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            <h2 className="text-xs font-bold text-text-main">Last 7 days</h2>
          </div>

          <p className="text-2xl font-black text-primary tabular-nums">{stats.thisWeek}</p>
          <p className="text-[11px] text-text-sub mb-4">new submissions</p>

          <div className="space-y-1.5">
            {statuses.map((s) => {
              const count = stats.byStatus[s] ?? 0;
              const pct = stats.total ? Math.round((count / stats.total) * 100) : 0;
              return (
                <div key={s}>
                  <div className="flex justify-between text-[11px] mb-0.5">
                    <span className="text-text-sub capitalize">{s}</span>
                    <span className="text-text-main font-semibold tabular-nums">{count}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-bg-soft overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Recent ── */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-xl overflow-hidden">
          <div className="px-3.5 py-2.5 border-b border-border flex items-center justify-between">
            <h2 className="text-xs font-bold text-text-main">Latest submissions</h2>
            <Link to="/admin/submissions" className="text-[11px] text-primary font-semibold hover:underline">
              View all
            </Link>
          </div>

          {stats.recent.length === 0 ? (
            <p className="px-3.5 py-10 text-center text-text-sub text-xs">Nothing yet.</p>
          ) : (
            <ul className="divide-y divide-border">
              {stats.recent.map((row) => (
                <li key={row._id} className="px-3.5 py-2.5 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-job-tag-bg flex items-center justify-center shrink-0 text-[10px] font-black text-primary uppercase">
                    {row.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-text-main truncate">
                      {row.name}
                      <span className="text-text-hint font-normal"> · {row.email}</span>
                    </p>
                    <p className="text-[11px] text-text-sub truncate">{row.message || '—'}</p>
                  </div>
                  <span className="text-[10px] text-text-hint whitespace-nowrap shrink-0">
                    {shortDate(row.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
