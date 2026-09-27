import { useEffect, useState } from 'react';
import { CheckCircle2, Database, KeyRound, Server, XCircle } from 'lucide-react';
import { useAdminAuth } from '../AdminAuth';

type Health = { ok: boolean; service: string; time: string };

/**
 * Read-only panel: who is signed in, whether the API answers, and where the
 * operational settings actually live. Editing credentials from a web form
 * would mean writing them somewhere the app can change at runtime, which is
 * a worse place for them than `.env`.
 */
export default function Settings() {
  const { email } = useAdminAuth();
  const [health, setHealth] = useState<Health | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setFailed(true));
  }, []);

  return (
    <div className="space-y-3 max-w-2xl">
      <section className="bg-surface border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <KeyRound className="h-3.5 w-3.5 text-primary" />
          <h2 className="text-xs font-bold text-text-main">Account</h2>
        </div>
        <dl className="text-xs space-y-1.5">
          <div className="flex gap-3">
            <dt className="w-28 text-text-hint">Signed in as</dt>
            <dd className="text-text-main">{email}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-28 text-text-hint">Role</dt>
            <dd className="text-text-main">Administrator</dd>
          </div>
        </dl>
        <p className="text-[11px] text-text-sub mt-3 leading-relaxed">
          Credentials come from <code className="text-text-main">ADMIN_EMAIL</code> and{' '}
          <code className="text-text-main">ADMIN_PASSWORD</code> in <code className="text-text-main">.env</code>.
          Change them there and restart the API.
        </p>
      </section>

      <section className="bg-surface border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Server className="h-3.5 w-3.5 text-primary" />
          <h2 className="text-xs font-bold text-text-main">API</h2>
        </div>

        {failed ? (
          <p className="inline-flex items-center gap-1.5 text-xs text-error">
            <XCircle className="h-3.5 w-3.5" />
            Not reachable — start it with <code>npm run dev</code>.
          </p>
        ) : health ? (
          <dl className="text-xs space-y-1.5">
            <div className="flex gap-3">
              <dt className="w-28 text-text-hint">Status</dt>
              <dd className="inline-flex items-center gap-1.5 text-success">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Online
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-28 text-text-hint">Service</dt>
              <dd className="text-text-main">{health.service}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-28 text-text-hint">Checked</dt>
              <dd className="text-text-main">{new Date(health.time).toLocaleString('en-IN')}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-xs text-text-sub">Checking…</p>
        )}
      </section>

      <section className="bg-surface border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Database className="h-3.5 w-3.5 text-primary" />
          <h2 className="text-xs font-bold text-text-main">Storage</h2>
        </div>
        <p className="text-[11px] text-text-sub leading-relaxed">
          Every submission is stored in the <code className="text-text-main">submissions</code>{' '}
          collection of the MongoDB database named by{' '}
          <code className="text-text-main">MONGODB_DB</code>. The three public forms are told apart
          by their <code className="text-text-main">formType</code> field, which is what the pages
          in the sidebar filter on.
        </p>
      </section>
    </div>
  );
}
