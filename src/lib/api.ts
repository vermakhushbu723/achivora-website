/**
 * Thin fetch wrapper for the Express API.
 *
 * In development Vite proxies `/api` to the backend, and in production the
 * two are served from the same origin — so requests stay relative and there
 * is no base URL to configure per environment.
 */

const TOKEN_KEY = 'achivora.admin.token';

export type ApiError = {
  message: string;
  /** Field-level messages from a 422, keyed by input name. */
  fields?: Record<string, string>;
  status: number;
};

export const tokenStore = {
  get: () => {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  },
  set: (token: string) => {
    try {
      localStorage.setItem(TOKEN_KEY, token);
    } catch {
      /* private window — the session simply lasts until reload */
    }
  },
  clear: () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
    } catch {
      /* nothing to clear */
    }
  },
};

async function request<T>(
  path: string,
  { method = 'GET', body, auth = false }: {
    method?: string;
    body?: unknown;
    auth?: boolean;
  } = {},
): Promise<T> {
  const headers: Record<string, string> = {};
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (auth) {
    const token = tokenStore.get();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let res: Response;
  try {
    res = await fetch(`/api${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw { message: 'Cannot reach the server. Is the API running?', status: 0 } as ApiError;
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw {
      message: data.error ?? 'Something went wrong. Please try again.',
      fields: data.errors,
      status: res.status,
    } as ApiError;
  }

  return data as T;
}

/* ── Public forms ──────────────────────────────────────────────────────── */

export type SubmissionKind = 'contact' | 'enquiry' | 'application';

export const submitForm = (kind: SubmissionKind, payload: Record<string, unknown>) =>
  request<{ ok: true; id: string }>(`/submissions/${kind}`, {
    method: 'POST',
    body: { ...payload, page: window.location.pathname },
  });

/* ── Admin ─────────────────────────────────────────────────────────────── */

export type Submission = {
  _id: string;
  formType: SubmissionKind;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  extra?: Record<string, unknown>;
  status: 'new' | 'in-progress' | 'done' | 'archived';
  notes?: string;
  meta?: { page?: string; userAgent?: string; ip?: string };
  createdAt: string;
  updatedAt: string;
};

export type SubmissionStats = {
  total: number;
  thisWeek: number;
  byType: Partial<Record<SubmissionKind, number>>;
  byStatus: Partial<Record<Submission['status'], number>>;
  recent: Submission[];
};

export const api = {
  login: (email: string, password: string) =>
    request<{ ok: true; token: string; admin: { email: string; role: string } }>('/auth/login', {
      method: 'POST',
      body: { email, password },
    }),

  me: () => request<{ ok: true; admin: { email: string } }>('/auth/me', { auth: true }),

  list: (params: {
    page?: number;
    limit?: number;
    formType?: string;
    status?: string;
    q?: string;
  }) => {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== '' && v !== null) search.set(k, String(v));
    });
    return request<{
      ok: true;
      items: Submission[];
      total: number;
      page: number;
      pages: number;
    }>(`/submissions?${search}`, { auth: true });
  },

  stats: () => request<{ ok: true } & SubmissionStats>('/submissions/stats', { auth: true }),

  get: (id: string) => request<{ ok: true; item: Submission }>(`/submissions/${id}`, { auth: true }),

  update: (id: string, patch: { status?: Submission['status']; notes?: string }) =>
    request<{ ok: true; item: Submission }>(`/submissions/${id}`, {
      method: 'PATCH',
      body: patch,
      auth: true,
    }),

  remove: (id: string) =>
    request<{ ok: true }>(`/submissions/${id}`, { method: 'DELETE', auth: true }),
};
