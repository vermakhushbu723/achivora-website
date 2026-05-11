import { SiFacebook,SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import logo from '@/assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const socialLinks = [
    { icon: SiFacebook, href: 'https://www.facebook.com/profile.php?id=61589471525251', label: 'Facebook' },
    { icon: SiInstagram, href: 'https://www.instagram.com/achivora9026', label: 'Instagram' }
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Website Development', path: '/website-development' },
        { label: 'App Development', path: '/app-development' },
        { label: 'Software Solutions', path: '/software-solutions' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', path: '/faq' },
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms & Conditions', path: '/terms-conditions' }
      ]
    }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-blue-500/20 text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <button
              onClick={() => navigate({ to: '/' })}
              className="flex items-center space-x-2 mb-4 group"
            >
              <img src={logo} alt="Achivora" className="h-10 w-auto object-contain group-hover:scale-110 transition-all duration-300" />
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:via-cyan-200 group-hover:to-blue-400 transition-all duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                Achivora
              </span>
            </button>
            <p className="text-muted-foreground mb-4">
              Your trusted development services provider for digital transformation
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 shadow-sm shadow-blue-500/20"
                >
                  <social.icon className="h-5 w-5 text-blue-400" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => navigate({ to: link.path })}
                      className="text-muted-foreground hover:text-blue-400 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear}. Built with{' '}
              <Heart className="inline h-4 w-4 text-red-400 fill-red-400" /> using{' '}
              <a
                href="https://achivora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors underline"
              >
                achivora.com
              </a>
            </p>
            <p className="text-muted-foreground text-sm">
              All Rights Reserved - Achivora
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
