import { useState, type FormEvent } from 'react';
import { Lock, LogIn, Mail } from 'lucide-react';
import Logo from '@/components/Logo';
import { useAdminAuth } from './AdminAuth';
import type { ApiError } from '@/lib/api';

const FIELD =
  'w-full h-10 pl-9 pr-3 rounded-lg bg-input-bg border border-border text-text-main text-sm placeholder:text-text-hint focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors';

/** Sign-in gate for the admin panel. */
export default function LoginScreen() {
  const { signIn } = useAdminAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setBusy(true);
    setError(null);

    try {
      await signIn(String(data.get('email')), String(data.get('password')));
    } catch (err) {
      setError((err as ApiError).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      {/* Brand wash so the sign-in screen is not a bare form on a flat page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-sky/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <Logo markClassName="h-9" />
        </div>

        <div className="surface-card p-6">
          <h1 className="text-lg font-bold text-text-main">Admin sign in</h1>
          <p className="text-text-sub text-xs mt-1 mb-5">
            Form submissions from the website live here.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="admin-email" className="block text-xs font-semibold text-text-main mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-hint" />
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="username"
                  defaultValue="admin@achivora.com"
                  className={FIELD}
                />
              </div>
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-xs font-semibold text-text-main mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-hint" />
                <input
                  id="admin-password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className={FIELD}
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-error bg-urgent-bg border border-error/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="btn-primary w-full py-2.5 text-sm disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {busy ? 'Signing in…' : 'Sign in'}
              <LogIn className="h-4 w-4" />
            </button>
          </form>
        </div>

        <p className="text-center text-text-hint text-[11px] mt-4">
          Credentials are set in <code className="text-text-sub">.env</code> (ADMIN_EMAIL /
          ADMIN_PASSWORD).
        </p>
      </div>
    </div>
  );
}
