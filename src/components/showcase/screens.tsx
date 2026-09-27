import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  Home,
  MapPin,
  Search,
  Send,
  Sparkles,
  Star,
  User,
} from 'lucide-react';

/**
 * App screens are rendered in code from a small set of archetypes, each fed
 * domain-specific data. That keeps every screenshot crisp at any size, on
 * brand automatically, and free of image payload — while still letting a
 * food-delivery app look nothing like a fintech or matrimonial one.
 */

export type ScreenSpec =
  | { kind: 'auth'; title: string; sub: string; cta: string; hint?: string }
  | {
      kind: 'list';
      place?: string;
      searchHint: string;
      chips: string[];
      items: { title: string; meta: string; badge?: string }[];
    }
  | {
      kind: 'detail';
      title: string;
      sub: string;
      tags: string[];
      rows: { name: string; meta: string; action?: string }[];
      cta: string;
      ctaMeta?: string;
    }
  | {
      kind: 'map';
      status: string;
      agent: string;
      agentMeta: string;
      steps: [string, boolean][];
    }
  | {
      kind: 'wallet';
      label: string;
      amount: string;
      sub: string;
      chartLabel: string;
      rows: { k: string; v: string; up?: boolean }[];
    }
  | {
      kind: 'dashboard';
      title: string;
      sub: string;
      stats: { v: string; l: string }[];
      chartLabel: string;
      rows: { k: string; v: string }[];
    }
  | {
      kind: 'profile';
      name: string;
      meta: string;
      badges: string[];
      rows: { k: string; v: string }[];
      actions: [string, string];
    }
  | {
      kind: 'chat';
      title: string;
      sub: string;
      messages: { me?: boolean; text: string }[];
      inputHint: string;
    }
  | {
      kind: 'calendar';
      title: string;
      month: string;
      slots: { time: string; label: string; tone?: 'busy' | 'free' | 'done' }[];
    };

/* ── Shared bits ─────────────────────────────────────────────────────────── */

function TabBar({ active = 0 }: { active?: number }) {
  const tabs = [Home, Search, Bell, User];
  return (
    <div className="absolute bottom-0 inset-x-0 h-11 bg-white border-t border-border flex items-center justify-around px-2">
      {tabs.map((Icon, i) => (
        <span
          key={i}
          className={`flex items-center justify-center w-7 h-7 rounded-lg ${
            i === active ? 'bg-job-tag-bg text-primary' : 'text-text-hint'
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
      ))}
    </div>
  );
}

function MiniChart({ label, bars }: { label: string; bars: number[] }) {
  return (
    <div className="bg-white rounded-lg border border-border p-2.5">
      <p className="text-[8px] font-bold text-text-hint uppercase tracking-wider mb-2">
        {label}
      </p>
      <div className="flex items-end gap-1 h-14">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-[3px] ${
              i === bars.indexOf(Math.max(...bars)) ? 'bg-primary' : 'bg-job-tag-bg'
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Archetypes ──────────────────────────────────────────────────────────── */

function Auth(s: Extract<ScreenSpec, { kind: 'auth' }>) {
  return (
    <div className="h-full bg-primary-gradient flex flex-col items-center justify-center px-6 text-center">
      <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-4">
        <Sparkles className="h-7 w-7 text-white" />
      </div>
      <p className="text-white font-black text-base leading-tight mb-1.5">{s.title}</p>
      <p className="text-white/75 text-[10px] leading-relaxed mb-5">{s.sub}</p>

      <div className="w-full space-y-2 mb-3">
        <div className="h-8 rounded-lg bg-white/90 flex items-center px-3">
          <span className="text-[9px] text-text-hint">{s.hint ?? 'Mobile number'}</span>
        </div>
        <div className="h-8 rounded-lg bg-white/90 flex items-center px-3">
          <span className="text-[9px] text-text-hint">••••••</span>
        </div>
      </div>

      <div className="w-full h-9 rounded-lg bg-white flex items-center justify-center">
        <span className="text-primary font-bold text-[11px]">{s.cta}</span>
      </div>
    </div>
  );
}

function List(s: Extract<ScreenSpec, { kind: 'list' }>) {
  return (
    <div className="h-full bg-bg-soft relative">
      <div className="bg-white px-4 pb-3">
        {s.place && (
          <div className="flex items-center gap-1.5 mb-2">
            <MapPin className="h-3 w-3 text-primary" />
            <span className="text-[9px] font-bold text-text-main">{s.place}</span>
            <ChevronRight className="h-2.5 w-2.5 text-text-hint" />
            <Bell className="h-3 w-3 text-text-hint ml-auto" />
          </div>
        )}
        <div className="h-7 rounded-lg bg-bg-soft flex items-center gap-1.5 px-2.5">
          <Search className="h-3 w-3 text-text-hint" />
          <span className="text-[9px] text-text-hint truncate">{s.searchHint}</span>
        </div>
      </div>

      <div className="px-4 py-2.5 flex gap-1.5 overflow-hidden">
        {s.chips.map((c, i) => (
          <span
            key={c}
            className={`px-2 py-1 rounded-full text-[8px] font-bold whitespace-nowrap ${
              i === 0 ? 'bg-primary text-white' : 'bg-white text-text-sub border border-border'
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="px-4 space-y-2">
        {s.items.map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-2 flex gap-2 border border-border">
            <div className="w-11 h-11 rounded-lg bg-primary-gradient shrink-0 opacity-90" />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-text-main truncate">{item.title}</p>
              <p className="text-[8px] text-text-sub truncate">{item.meta}</p>
              {item.badge && (
                <span className="inline-flex items-center gap-0.5 mt-0.5 px-1 py-px rounded bg-remote-bg">
                  <Star className="h-2 w-2 fill-success text-success" />
                  <span className="text-[7px] font-bold text-success">{item.badge}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <TabBar active={0} />
    </div>
  );
}

function Detail(s: Extract<ScreenSpec, { kind: 'detail' }>) {
  return (
    <div className="h-full bg-white relative">
      <div className="h-24 bg-primary-gradient relative">
        <ArrowLeft className="h-3.5 w-3.5 text-white absolute top-3 left-3" />
      </div>

      <div className="px-4 -mt-4 relative">
        <div className="bg-white rounded-xl border border-border p-2.5 shadow-card">
          <p className="text-[11px] font-black text-text-main">{s.title}</p>
          <p className="text-[8px] text-text-sub mt-0.5">{s.sub}</p>
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {s.tags.map((t, i) => (
              <span
                key={t}
                className={`px-1.5 py-px rounded text-[7px] font-bold ${
                  i === 0 ? 'bg-remote-bg text-success' : 'bg-job-tag-bg text-primary'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 mt-3 space-y-2">
        {s.rows.map((r) => (
          <div key={r.name} className="flex items-center gap-2 pb-2 border-b border-border">
            <div className="w-8 h-8 rounded-md bg-job-tag-bg shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold text-text-main truncate">{r.name}</p>
              <p className="text-[8px] text-text-sub truncate">{r.meta}</p>
            </div>
            {r.action && (
              <span className="px-2 py-0.5 rounded-md border border-primary text-[8px] font-bold text-primary shrink-0">
                {r.action}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 inset-x-4 h-9 rounded-xl bg-primary-gradient flex items-center justify-between px-3">
        <span className="text-white text-[9px] font-bold truncate">{s.ctaMeta ?? ''}</span>
        <span className="text-white text-[9px] font-black shrink-0 inline-flex items-center gap-0.5">
          {s.cta}
          <ArrowRight className="h-2.5 w-2.5" />
        </span>
      </div>
    </div>
  );
}

function Map(s: Extract<ScreenSpec, { kind: 'map' }>) {
  return (
    <div className="h-full bg-white relative">
      <div className="h-40 bg-tint-blue relative overflow-hidden">
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <path d="M0 40 H70 V90 H140 V140 H200" stroke="#e7e7e7" strokeWidth="10" fill="none" />
          <path d="M0 110 H50 V20 H120 V70 H200" stroke="#e7e7e7" strokeWidth="8" fill="none" />
          <path
            d="M30 130 Q80 120 100 80 T170 30"
            stroke="#2f9e6f"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="7 5"
          />
          <circle cx="30" cy="130" r="6" fill="#29abe2" />
          <circle cx="170" cy="30" r="6" fill="#2f9e6f" />
        </svg>
        <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white text-[8px] font-black text-text-main shadow-card">
          {s.status}
        </span>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-xl border border-border p-2.5 flex items-center gap-2 shadow-card">
          <div className="w-8 h-8 rounded-full bg-job-tag-bg flex items-center justify-center shrink-0">
            <MapPin className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-black text-text-main truncate">{s.agent}</p>
            <p className="text-[8px] text-text-sub truncate">{s.agentMeta}</p>
          </div>
        </div>

        <div className="mt-3 space-y-2.5">
          {s.steps.map(([label, done]) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  done ? 'bg-primary' : 'border-2 border-border bg-white'
                }`}
              />
              <span className={`text-[9px] ${done ? 'font-bold text-text-main' : 'text-text-hint'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WalletScreen(s: Extract<ScreenSpec, { kind: 'wallet' }>) {
  return (
    <div className="h-full bg-white relative">
      <div className="bg-primary-gradient px-4 pt-3 pb-6">
        <p className="text-white/70 text-[8px] font-bold uppercase tracking-wider">{s.label}</p>
        <p className="text-white font-black text-2xl leading-none mt-1.5">{s.amount}</p>
        <p className="text-white/70 text-[8px] mt-1">{s.sub}</p>
      </div>

      <div className="px-4 -mt-3">
        <MiniChart label={s.chartLabel} bars={[45, 70, 38, 88, 62, 100, 54]} />
      </div>

      <div className="px-4 mt-3 space-y-1.5">
        {s.rows.map((r) => (
          <div key={r.k} className="flex items-center justify-between py-1.5 border-b border-border">
            <span className="text-[9px] text-text-sub truncate">{r.k}</span>
            <span
              className={`text-[9px] font-black shrink-0 ${
                r.up === false ? 'text-urgent-txt' : 'text-success'
              }`}
            >
              {r.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard(s: Extract<ScreenSpec, { kind: 'dashboard' }>) {
  const tones = ['text-primary', 'text-success', 'text-sky', 'text-warning'];
  return (
    <div className="h-full bg-bg-soft relative">
      <div className="bg-white px-4 py-3 border-b border-border">
        <p className="text-[11px] font-black text-text-main">{s.title}</p>
        <p className="text-[8px] text-text-sub">{s.sub}</p>
      </div>

      <div className="p-3 grid grid-cols-2 gap-2">
        {s.stats.map((st, i) => (
          <div key={st.l} className="bg-white rounded-lg border border-border p-2">
            <p className={`text-[13px] font-black leading-none ${tones[i % 4]}`}>{st.v}</p>
            <p className="text-[7px] text-text-sub mt-1 truncate">{st.l}</p>
          </div>
        ))}
      </div>

      <div className="px-3">
        <MiniChart label={s.chartLabel} bars={[52, 68, 44, 82, 96, 74, 60]} />
      </div>

      <div className="px-3 mt-2 space-y-1">
        {s.rows.map((r) => (
          <div
            key={r.k}
            className="bg-white rounded-lg border border-border p-2 flex items-center justify-between gap-2"
          >
            <span className="text-[8px] font-bold text-text-main truncate">{r.k}</span>
            <span className="text-[8px] font-black text-primary shrink-0">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Profile(s: Extract<ScreenSpec, { kind: 'profile' }>) {
  return (
    <div className="h-full bg-white relative">
      <div className="h-28 bg-primary-gradient relative">
        <ArrowLeft className="h-3.5 w-3.5 text-white absolute top-3 left-3" />
      </div>

      <div className="px-4 -mt-9 relative text-center">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-white shadow-card mx-auto overflow-hidden">
          <div className="w-full h-full bg-job-tag-bg flex items-center justify-center">
            <User className="h-8 w-8 text-primary" />
          </div>
        </div>
        <p className="text-[12px] font-black text-text-main mt-2">{s.name}</p>
        <p className="text-[8px] text-text-sub">{s.meta}</p>

        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {s.badges.map((b) => (
            <span key={b} className="px-1.5 py-px rounded bg-job-tag-bg text-[7px] font-bold text-primary">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 mt-3 space-y-1.5">
        {s.rows.map((r) => (
          <div key={r.k} className="flex items-center justify-between py-1.5 border-b border-border">
            <span className="text-[8px] text-text-hint">{r.k}</span>
            <span className="text-[8px] font-bold text-text-main truncate ml-2">{r.v}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 inset-x-4 flex gap-2">
        <div className="flex-1 h-9 rounded-xl border-2 border-primary flex items-center justify-center">
          <span className="text-primary text-[9px] font-black">{s.actions[0]}</span>
        </div>
        <div className="flex-1 h-9 rounded-xl bg-primary-gradient flex items-center justify-center">
          <span className="text-white text-[9px] font-black">{s.actions[1]}</span>
        </div>
      </div>
    </div>
  );
}

function Chat(s: Extract<ScreenSpec, { kind: 'chat' }>) {
  return (
    <div className="h-full bg-bg-soft relative flex flex-col">
      <div className="bg-white px-4 py-2.5 border-b border-border flex items-center gap-2">
        <ArrowLeft className="h-3.5 w-3.5 text-text-main shrink-0" />
        <span className="w-7 h-7 rounded-full bg-job-tag-bg flex items-center justify-center shrink-0">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-black text-text-main truncate">{s.title}</p>
          <p className="text-[7px] text-success font-bold">{s.sub}</p>
        </div>
      </div>

      <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden">
        {s.messages.map((m, i) => (
          <div key={i} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
            <span
              className={`max-w-[80%] px-2.5 py-1.5 text-[8px] leading-relaxed rounded-xl ${
                m.me
                  ? 'bg-primary-gradient text-white rounded-br-sm'
                  : 'bg-white border border-border text-text-main rounded-bl-sm'
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div className="p-3">
        <div className="h-8 rounded-full bg-white border border-border flex items-center gap-2 px-3">
          <span className="text-[8px] text-text-hint flex-1 truncate">{s.inputHint}</span>
          <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Send className="h-2.5 w-2.5 text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Calendar(s: Extract<ScreenSpec, { kind: 'calendar' }>) {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  return (
    <div className="h-full bg-bg-soft relative">
      <div className="bg-white px-4 py-3 border-b border-border">
        <p className="text-[11px] font-black text-text-main">{s.title}</p>
        <p className="text-[8px] text-text-sub">{s.month}</p>
      </div>

      <div className="px-3 py-2.5">
        <div className="bg-white rounded-lg border border-border p-2">
          <div className="grid grid-cols-7 gap-0.5 mb-1">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <span key={i} className="text-[6px] text-text-hint text-center font-bold">
                {d}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-0.5">
            {days.map((d) => (
              <span
                key={d}
                className={`text-[7px] text-center py-0.5 rounded ${
                  d === 14
                    ? 'bg-primary text-white font-black'
                    : [8, 19, 23].includes(d)
                      ? 'bg-job-tag-bg text-primary font-bold'
                      : 'text-text-sub'
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 space-y-1.5">
        {s.slots.map((slot) => (
          <div key={slot.time + slot.label} className="bg-white rounded-lg border border-border p-2 flex items-center gap-2">
            <span className="text-[8px] font-black text-primary w-10 shrink-0">{slot.time}</span>
            <span className="text-[8px] text-text-main truncate flex-1">{slot.label}</span>
            {slot.tone === 'done' ? (
              <Check className="h-3 w-3 text-success shrink-0" />
            ) : (
              <span
                className={`px-1.5 py-px rounded text-[6px] font-black shrink-0 ${
                  slot.tone === 'busy' ? 'bg-urgent-bg text-urgent-txt' : 'bg-remote-bg text-success'
                }`}
              >
                {slot.tone === 'busy' ? 'FULL' : 'OPEN'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Dispatches a spec to its archetype. */
export function Screen({ spec }: { spec: ScreenSpec }) {
  switch (spec.kind) {
    case 'auth':
      return <Auth {...spec} />;
    case 'list':
      return <List {...spec} />;
    case 'detail':
      return <Detail {...spec} />;
    case 'map':
      return <Map {...spec} />;
    case 'wallet':
      return <WalletScreen {...spec} />;
    case 'dashboard':
      return <Dashboard {...spec} />;
    case 'profile':
      return <Profile {...spec} />;
    case 'chat':
      return <Chat {...spec} />;
    case 'calendar':
      return <Calendar {...spec} />;
  }
}
