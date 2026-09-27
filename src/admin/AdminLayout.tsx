import { useState } from 'react';
import { Link, Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import {
  Briefcase,
  ExternalLink,
  FileText,
  Inbox,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Settings,
  X,
} from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { AdminAuthProvider, useAdminAuth } from './AdminAuth';
import LoginScreen from './LoginScreen';

const NAV = [
  { to: '/admin', label: 'Dashboard', Icon: LayoutDashboard, exact: true },
  { to: '/admin/submissions', label: 'All Submissions', Icon: Inbox },
  { to: '/admin/enquiries', label: 'Project Enquiries', Icon: FileText },
  { to: '/admin/contacts', label: 'Contact Messages', Icon: Mail },
  { to: '/admin/applications', label: 'Job Applications', Icon: Briefcase },
  { to: '/admin/settings', label: 'Settings', Icon: Settings },
];

/** Sidebar + top bar around whichever admin page is routed. */
function Shell() {
  const { email, ready, signOut } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const path = useRouterState().location.pathname;
  const navigate = useNavigate();

  if (!ready) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <span className="text-text-sub text-sm">Loading…</span>
      </div>
    );
  }

  if (!email) return <LoginScreen />;

  const current = NAV.find((item) =>
    item.exact ? path === item.to : path.startsWith(item.to),
  );

  return (
    <div className="min-h-screen bg-bg-soft flex">
      {/* ── Sidebar ── */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-56 bg-surface border-r border-border flex flex-col transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-14 flex items-center gap-2 px-4 border-b border-border shrink-0">
          <Logo markClassName="h-6" />
          <span className="text-text-main font-bold text-sm">Admin</span>
        </div>

        <nav className="flex-1 overflow-y-auto p-2.5 space-y-0.5">
          {NAV.map(({ to, label, Icon, exact }) => {
            const active = exact ? path === to : path.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  active
                    ? 'bg-job-tag-bg text-primary'
                    : 'text-text-sub hover:text-primary hover:bg-job-tag-bg/60'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="p-2.5 border-t border-border">
          <button
            onClick={() => navigate({ to: '/' })}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-text-sub hover:text-primary hover:bg-job-tag-bg/60 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View website
          </button>
        </div>
      </aside>

      {/* Scrim behind the mobile sidebar */}
      {sidebarOpen && (
        <button
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* ── Main column ── */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-14 bg-surface border-b border-border flex items-center justify-between gap-3 px-4 sticky top-0 z-20">
          <div className="flex items-center gap-2 min-w-0">
            <button
              className="lg:hidden p-1.5 rounded-lg text-text-sub hover:bg-bg-soft"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <h1 className="text-sm font-bold text-text-main truncate">
              {current?.label ?? 'Admin'}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <span className="hidden sm:inline text-[11px] text-text-sub truncate max-w-[160px]">
              {email}
            </span>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-text-sub border border-border hover:text-error hover:border-error/40 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout() {
  return (
    <AdminAuthProvider>
      <Shell />
    </AdminAuthProvider>
  );
}
