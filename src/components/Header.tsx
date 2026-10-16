import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { MEGA_MENUS, NAV_LINKS, type MegaMenu } from '@/constants/megaMenu';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();
  const currentPath = useRouterState().location.pathname;

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }, [currentPath]);

  // Close the panel on Escape, for keyboard users.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenMenu(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // A click outside the header dismisses an open dropdown.
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [openMenu]);

  const go = (path: string) => {
    navigate({ to: path });
    setMobileOpen(false);
    setOpenMenu(null);
  };

  /* Dropdowns open on click, not hover: a pointer crossing the bar should
     never take over the screen. */
  const toggleMenu = (label: string) =>
    setOpenMenu((current) => (current === label ? null : label));

  const isActive = (path: string) =>
    currentPath === path || currentPath.startsWith(`${path}/`);
  const menuActive = (menu: MegaMenu) =>
    menu.columns.some((c) => c.path && isActive(c.path)) || isActive(menu.path);

  const linkClass = (active: boolean) =>
    `px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-150 inline-flex items-center gap-1 ${
      active
        ? 'text-primary bg-job-tag-bg'
        : 'text-text-body hover:text-primary hover:bg-job-tag-bg'
    }`;

  const mobileLinkClass = (active: boolean) =>
    `w-full flex items-center justify-between text-left px-4 py-3 rounded-xl font-semibold transition-colors ${
      active ? 'text-primary bg-job-tag-bg' : 'text-text-body hover:text-primary hover:bg-job-tag-bg'
    }`;

  return (
    <header ref={navRef} className="sticky top-0 z-50">
      <div className="bg-surface backdrop-blur-md shadow-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <button onClick={() => go('/')} className="group" aria-label="Achivora home">
              <Logo markClassName="h-8 group-hover:scale-105 transition-transform" />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <button onClick={() => go('/')} className={linkClass(currentPath === '/')}>
                Home
              </button>

              {MEGA_MENUS.map((menu) => (
                <button
                  key={menu.label}
                  onClick={() => toggleMenu(menu.label)}
                  className={linkClass(menuActive(menu) || openMenu === menu.label)}
                  aria-expanded={openMenu === menu.label}
                  aria-haspopup="true"
                >
                  {menu.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openMenu === menu.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ))}

              {NAV_LINKS.map((link) => (
                <button key={link.path} onClick={() => go(link.path)} className={linkClass(isActive(link.path))}>
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <button onClick={() => go('/contact')} className="btn-primary text-xs px-4 py-1.5">
                Get a Quote
              </button>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-lg text-text-main hover:bg-bg-soft transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Dropdown panels ── */}
        {MEGA_MENUS.map((menu) => (
          <div
            key={menu.label}
            className={`hidden lg:block absolute left-0 right-0 top-full origin-top transition-all duration-200 ${
              openMenu === menu.label
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
              <div
                className="bg-surface rounded-2xl border border-border shadow-card-hover p-6 grid gap-x-8 gap-y-6"
                style={{ gridTemplateColumns: `repeat(${menu.columns.length}, minmax(0, 1fr))` }}
              >
                {menu.columns.map((column, i) => (
                  <div key={column.title ?? i}>
                    {column.title && (
                      <button
                        onClick={() => column.path && go(column.path)}
                        className="font-extrabold text-text-main text-sm mb-3 hover:text-primary transition-colors"
                      >
                        {column.title}
                      </button>
                    )}
                    <ul className="space-y-2">
                      {column.links.map((link) => (
                        <li key={link.path}>
                          <button
                            onClick={() => go(link.path)}
                            className="text-text-sub text-sm hover:text-primary transition-colors text-left"
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-border shadow-card-hover max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <button onClick={() => go('/')} className={mobileLinkClass(currentPath === '/')}>
              Home
            </button>

            {MEGA_MENUS.map((menu) => {
              const open = mobileSection === menu.label;
              return (
                <div key={menu.label}>
                  <button
                    onClick={() => setMobileSection(open ? null : menu.label)}
                    className={mobileLinkClass(menuActive(menu))}
                    aria-expanded={open}
                  >
                    {menu.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                  </button>

                  {open && (
                    <div className="pl-3 ml-3 mt-1 mb-2 border-l-2 border-border flex flex-col">
                      {menu.columns.flatMap((c) => c.links).map((link) => (
                        <button
                          key={link.path}
                          onClick={() => go(link.path)}
                          className="block w-full px-4 py-2 rounded-lg text-text-sub text-sm text-left hover:text-primary hover:bg-job-tag-bg transition-colors"
                        >
                          {link.label}
                        </button>
                      ))}
                      <button
                        onClick={() => go(menu.path)}
                        className="mx-4 my-1 text-primary text-sm font-bold text-left inline-flex items-center gap-1.5"
                      >
                        View all {menu.label.toLowerCase()}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {NAV_LINKS.map((link) => (
              <button key={link.path} onClick={() => go(link.path)} className={mobileLinkClass(isActive(link.path))}>
                {link.label}
              </button>
            ))}

            <button onClick={() => go('/contact')} className="btn-primary mt-3">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
