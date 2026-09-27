import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { SITE } from '@/constants/site';
import { MEGA_MENUS, type MegaMenu } from '@/constants/megaMenu';
import { icon } from '@/components/home/icons';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const SOCIALS = [
  { Icon: SiFacebook, href: SITE.social.facebook, label: 'Facebook' },
  { Icon: SiYoutube, href: SITE.social.youtube, label: 'YouTube' },
  { Icon: SiLinkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
  { Icon: SiInstagram, href: SITE.social.instagram, label: 'Instagram' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();
  const currentPath = useRouterState().location.pathname;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  // A click outside the header dismisses an open mega menu.
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

  /**
   * Mega menus open on click, not hover: a pointer crossing the bar should
   * never take over the screen. The label toggles its own panel, and a
   * pointerdown anywhere outside the header closes whatever is open.
   */
  const toggleMenu = (label: string) =>
    setOpenMenu((current) => (current === label ? null : label));

  /** The contact strip folds away once you scroll, or a panel takes over. */
  const stripHidden = isScrolled || mobileOpen || openMenu !== null;

  const isActive = (menu: MegaMenu) =>
    currentPath === menu.path || currentPath.startsWith(`${menu.path}/`);

  const linkClass = (active: boolean) =>
    `px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-150 inline-flex items-center gap-1 ${
      active
        ? 'text-primary bg-job-tag-bg'
        : 'text-text-body hover:text-primary hover:bg-job-tag-bg'
    }`;

  return (
    <header ref={navRef} className="sticky top-0 z-50">
      {/* ── Top contact bar ── */}
      <div
        className={`hidden lg:block bg-[rgb(var(--c-band-dark))] transition-all duration-300 overflow-hidden ${
          stripHidden ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 text-xs">
            <div className="flex items-center gap-5 text-white/70">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" /> {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5" /> {SITE.email}
              </a>
              <span className="inline-flex items-center gap-1.5 text-white/50">
                <MapPin className="h-3.5 w-3.5" /> {SITE.offices[0].address}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 rounded-md bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="bg-surface backdrop-blur-md shadow-card border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <button onClick={() => go('/')} className="group">
              <Logo markClassName="h-8 group-hover:scale-105 transition-transform" />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <button onClick={() => go('/')} className={linkClass(currentPath === '/')}>
                Home
              </button>

              {MEGA_MENUS.map((menu) => (
                <div key={menu.label}>
                  <button
                    onClick={() => toggleMenu(menu.label)}
                    className={linkClass(isActive(menu) || openMenu === menu.label)}
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
                </div>
              ))}

              <button
                onClick={() => go('/contact')}
                className={linkClass(currentPath === '/contact')}
              >
                Contact
              </button>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={SITE.phoneHref}
                className="text-xs font-bold px-3.5 py-1.5 rounded-full border-2 border-primary text-primary inline-flex items-center gap-1.5 transition-all duration-150 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                Talk To Experts
              </a>
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

        {/* ── Mega menu panels ── */}
        {MEGA_MENUS.map((menu) => (
          <div
            key={menu.label}
            className={`hidden lg:block absolute left-0 right-0 top-full origin-top transition-all duration-200 ${
              openMenu === menu.label
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
              <div className="bg-surface rounded-2xl border border-border shadow-card-hover overflow-hidden">
                <div className="grid grid-cols-12">
                  {/* Link columns */}
                  <div className="col-span-9 p-5 grid grid-cols-3 gap-x-8 gap-y-7">
                    {menu.columns.map((column) => {
                      const ColIcon = icon(column.icon);
                      return (
                        <div key={column.title}>
                          <button
                            onClick={() => column.path && go(column.path)}
                            className="flex items-center gap-2.5 mb-3 group text-left"
                          >
                            <span className="w-8 h-8 rounded-lg bg-job-tag-bg flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary">
                              <ColIcon className="h-4 w-4 text-primary transition-colors group-hover:text-white" />
                            </span>
                            <span className="font-extrabold text-text-main text-sm group-hover:text-primary transition-colors">
                              {column.title}
                            </span>
                          </button>

                          <ul className="space-y-1.5 pl-1">
                            {column.links.map((link) => (
                              <li key={link.label + link.path}>
                                <button
                                  onClick={() => go(link.path)}
                                  className="text-text-sub text-sm hover:text-primary transition-colors text-left leading-snug"
                                >
                                  {link.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  {/* Promo panel */}
                  <div className="col-span-3 bg-primary-gradient p-5 flex flex-col justify-center">
                    <h3 className="font-extrabold text-white text-lg leading-snug mb-2">
                      {menu.feature.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-5">
                      {menu.feature.description}
                    </p>
                    <button
                      onClick={() => go(menu.feature.ctaPath)}
                      className="btn-white text-sm px-5 py-2.5 self-start"
                    >
                      {menu.feature.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-border shadow-card-hover max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <button
              onClick={() => go('/')}
              className={`text-left px-4 py-3 rounded-xl font-semibold transition-colors ${
                currentPath === '/'
                  ? 'text-primary bg-job-tag-bg'
                  : 'text-text-body hover:text-primary hover:bg-job-tag-bg'
              }`}
            >
              Home
            </button>

            {MEGA_MENUS.map((menu) => {
              const open = mobileSection === menu.label;
              return (
                <div key={menu.label}>
                  <button
                    onClick={() => setMobileSection(open ? null : menu.label)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-colors ${
                      isActive(menu)
                        ? 'text-primary bg-job-tag-bg'
                        : 'text-text-body hover:text-primary hover:bg-job-tag-bg'
                    }`}
                    aria-expanded={open}
                  >
                    {menu.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="pl-3 ml-3 mt-1 mb-2 border-l-2 border-border flex flex-col gap-3">
                      {menu.columns.map((column) => (
                        <div key={column.title}>
                          <button
                            onClick={() => column.path && go(column.path)}
                            className="block px-4 py-1.5 text-text-main font-bold text-sm text-left"
                          >
                            {column.title}
                          </button>
                          {column.links.map((link) => (
                            <button
                              key={link.label + link.path}
                              onClick={() => go(link.path)}
                              className="block w-full px-4 py-2 rounded-lg text-text-sub text-sm text-left hover:text-primary hover:bg-job-tag-bg transition-colors"
                            >
                              {link.label}
                            </button>
                          ))}
                        </div>
                      ))}
                      <button
                        onClick={() => go(menu.path)}
                        className="mx-4 mb-1 text-primary text-sm font-bold text-left inline-flex items-center gap-1.5"
                      >
                        View all {menu.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            <button
              onClick={() => go('/contact')}
              className={`text-left px-4 py-3 rounded-xl font-semibold transition-colors ${
                currentPath === '/contact'
                  ? 'text-primary bg-job-tag-bg'
                  : 'text-text-body hover:text-primary hover:bg-job-tag-bg'
              }`}
            >
              Contact
            </button>

            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
              <a href={SITE.phoneHref} className="btn-secondary">
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <button onClick={() => go('/contact')} className="btn-primary">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
