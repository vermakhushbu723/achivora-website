import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const servicePages = [
    { path: '/website-development', label: 'Website Development' },
    { path: '/app-development', label: 'App Development' },
    { path: '/software-solutions', label: 'Software Solutions' }
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setIsMobileMenuOpen(false);
  };

  const isServicePage = servicePages.some(page => currentPath === page.path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-blue-500/20'
        : 'bg-background/80 backdrop-blur-sm border-b border-blue-500/10'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 group"
          >
            <img src={logo} alt="Achivora" className="h-10 w-auto object-contain group-hover:scale-110 transition-all duration-300" />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text group-hover:from-blue-300 group-hover:via-cyan-200 group-hover:to-blue-400 transition-all duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Achivora
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              if (item.path === '/services') {
                return (
                  <DropdownMenu key={item.path}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="relative px-5 py-2 text-white text-sm font-medium transition-all duration-300 group flex items-center gap-1"
                      >
                        <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300">
                          {item.label}
                        </span>
                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />

                        <span className="absolute inset-0 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${currentPath === item.path || isServicePage
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                            }`}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card/95 backdrop-blur-md border-blue-500/20">
                      <DropdownMenuItem
                        onClick={() => handleNavigation('/services')}
                        className="text-white hover:text-blue-400 hover:bg-blue-500/10 cursor-pointer"
                      >
                        All Services
                      </DropdownMenuItem>
                      {servicePages.map((service) => (
                        <DropdownMenuItem
                          key={service.path}
                          onClick={() => handleNavigation(service.path)}
                          className="text-white hover:text-blue-400 hover:bg-blue-500/10 cursor-pointer"
                        >
                          {service.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="relative px-5 py-2 text-white text-sm font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300">
                    {item.label}
                  </span>

                  <span className="absolute inset-0 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${currentPath === item.path
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                      }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10 hover:text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="relative px-4 py-3 text-white text-sm font-medium text-left rounded-md transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>

                  <span
                    className={`absolute inset-0 transition-all duration-300 ${currentPath === item.path || (item.path === '/services' && isServicePage)
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                      : 'bg-white/5 opacity-0 group-hover:opacity-100'
                      }`}
                  />

                  {(currentPath === item.path || (item.path === '/services' && isServicePage)) && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-r-full" />
                  )}
                </button>
              ))}

              {/* Mobile Service Submenu */}
              <div className="pl-4 space-y-2 border-l-2 border-blue-500/20 ml-4">
                {servicePages.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleNavigation(service.path)}
                    className="relative px-4 py-2 text-white text-sm text-left rounded-md transition-all duration-300 group overflow-hidden w-full"
                  >
                    <span className="relative z-10">{service.label}</span>

                    <span
                      className={`absolute inset-0 transition-all duration-300 ${currentPath === service.path
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                        : 'bg-white/5 opacity-0 group-hover:opacity-100'
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
