import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube } from 'react-icons/si';
import { useNavigate } from '@tanstack/react-router';
import Logo from './Logo';
import { FOOTER_LINKS, SITE } from '@/constants/site';

const SOCIALS = [
  { Icon: SiYoutube, href: SITE.social.youtube, label: 'YouTube' },
  { Icon: SiX, href: SITE.social.twitter, label: 'X' },
  { Icon: SiLinkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
  { Icon: SiInstagram, href: SITE.social.instagram, label: 'Instagram' },
  { Icon: SiFacebook, href: SITE.social.facebook, label: 'Facebook' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-[#191919] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top: brand · presence · contacts ── */}
        <div className="grid lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand + presence */}
          <div>
            <button onClick={() => navigate({ to: '/' })} className="mb-4 group">
              <Logo
                onDark
                markClassName="h-10 w-10 group-hover:scale-105 transition-transform"
              />
            </button>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              {SITE.tagline}
            </p>

            <h4 className="font-bold text-white text-sm mb-3">Our Presence</h4>
            <div className="space-y-3">
              {SITE.offices.map((office) => (
                <div key={office.country} className="flex gap-2.5 text-sm text-white/50">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    <span className="text-white/80 font-semibold">{office.flag} {office.country}</span>
                    <br />
                    {office.address}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business contacts */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Get In Touch</h4>
            <ul className="space-y-2.5 text-sm text-white/50 mb-8">
              <li>
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" /> {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </li>
            </ul>

            <h4 className="font-bold text-white text-sm mb-4">Business Hours</h4>
            <p className="text-sm text-white/50 inline-flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" /> {SITE.businessHours}
            </p>
          </div>

          {/* Social + newsletter-ish CTA */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-150"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="font-bold text-white text-sm mb-1">Have a project in mind?</p>
              <p className="text-white/50 text-sm mb-4">
                Share a brief and get an estimate within two working days.
              </p>
              <button
                onClick={() => navigate({ to: '/contact' })}
                className="btn-white w-full py-2.5 text-sm"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        {/* ── Link columns ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 py-12 border-b border-white/10">
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-white text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate({ to: link.path })}
                      className="text-white/50 text-sm hover:text-white transition-colors duration-150 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-sm text-center md:text-left">
            © {currentYear} {SITE.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => navigate({ to: '/terms-conditions' })}
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate({ to: '/privacy-policy' })}
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="tag bg-remote-bg text-remote-txt">Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
