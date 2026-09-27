import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { api, tokenStore } from '@/lib/api';

type AdminAuth = {
  email: string | null;
  ready: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AdminAuth | null>(null);

/**
 * Holds the admin session for the whole panel.
 *
 * The token lives in localStorage so a reload does not sign you out, but it
 * is re-validated against the API on mount — an expired or tampered token
 * should drop you back to the sign-in screen rather than into an empty
 * dashboard full of failed requests.
 */
export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!tokenStore.get()) {
        if (!cancelled) setReady(true);
        return;
      }
      try {
        const res = await api.me();
        if (!cancelled) setEmail(res.admin.email);
      } catch {
        tokenStore.clear();
      } finally {
        if (!cancelled) setReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const signIn = useCallback(async (e: string, password: string) => {
    const res = await api.login(e, password);
    tokenStore.set(res.token);
    setEmail(res.admin.email);
  }, []);

  const signOut = useCallback(() => {
    tokenStore.clear();
    setEmail(null);
  }, []);

  const value = useMemo(
    () => ({ email, ready, signIn, signOut }),
    [email, ready, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used inside AdminAuthProvider');
  return ctx;
}
