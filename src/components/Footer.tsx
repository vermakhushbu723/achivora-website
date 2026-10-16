import { Clock, Heart, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube } from 'react-icons/si';
import { useNavigate } from '@tanstack/react-router';
import Logo from './Logo';
import { SITE } from '@/constants/site';

const SOCIALS = [
  { Icon: SiYoutube, href: SITE.social.youtube, label: 'YouTube' },
  { Icon: SiX, href: SITE.social.twitter, label: 'X' },
  { Icon: SiLinkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
  { Icon: SiInstagram, href: SITE.social.instagram, label: 'Instagram' },
  { Icon: SiFacebook, href: SITE.social.facebook, label: 'Facebook' },
];

/** Pages the header does not link to directly, plus the main entry points. */
const FOOTER_LINKS = [
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Locations', path: '/locations' },
  { label: 'Career', path: '/career' },
  { label: 'FAQ', path: '/faq' },
];

/**
 * Compact footer: brand, a short link list for the pages the header leaves
 * out, and every way to reach us. The call to action lives in the band just
 * above the footer on each page, so it is not repeated here.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="relative bg-[rgb(var(--c-band-dark))] text-white overflow-hidden">
      {/* Brand hairline that travels across the top edge */}
      <div className="footer-beam" aria-hidden="true" />

      {/* Slow drifting wash so the band is never flat */}
      <div className="footer-aurora pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1.4fr] pb-8 border-b border-white/10">
          {/* Brand + socials */}
          <div>
            <button onClick={() => navigate({ to: '/' })} className="mb-3 group block">
              <Logo
                onDark
                markClassName="h-8 group-hover:scale-105 transition-transform"
              />
            </button>

            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xs">
              {SITE.tagline}
            </p>

            <div className="flex flex-wrap gap-2">
              {SOCIALS.map(({ Icon, href, label }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className="footer-social w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate({ to: link.path })}
                    className="footer-link hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {SITE.phones.map((line) => (
                <li key={line.href}>
                  <a
                    href={line.href}
                    className="footer-link inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" /> {line.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.emailHref}
                  className="footer-link inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" /> {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" /> Chat on WhatsApp
                </a>
              </li>
              {SITE.offices.map((office) => (
                <li key={office.address} className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" /> {office.address}
                </li>
              ))}
              <li className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 shrink-0 mt-0.5" /> {SITE.businessHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            © {currentYear} {SITE.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate({ to: '/terms-conditions' })}
              className="text-white/50 text-xs hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate({ to: '/privacy-policy' })}
              className="text-white/50 text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="inline-flex items-center gap-1.5 text-white/40 text-xs">
              Made with
              <Heart className="footer-heart h-3 w-3 text-primary" fill="currentColor" />
              in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
