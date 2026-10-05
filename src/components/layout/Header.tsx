import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Container } from '../ui/Container';

interface NavItem {
  label: string;
  href: string;
  isHash?: boolean;
}

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems: NavItem[] = [
    { label: 'Work', href: '#work', isHash: true },
    { label: 'Expertise', href: '#expertise', isHash: true },
    { label: 'About', href: '#about', isHash: true },
    { label: 'Technology', href: '#technology', isHash: true },
    { label: 'Contact', href: '#contact', isHash: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (!isHomePage) return;

      const sections = ['work', 'expertise', 'about', 'technology', 'contact'];
      const scrollPosition = window.scrollY + 200;

      let currentSection = 'hero';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 sm:py-5',
        isScrolled
          ? 'bg-[#08090A]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5 sm:py-4'
          : 'bg-transparent'
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-cyan-500/50 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0E1015] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/50 transition-colors">
              <span className="font-mono-tech text-xs font-bold text-cyan-400">BTI</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white font-sans group-hover:text-cyan-300 transition-colors">
                BEDULUR TEKNOLOGI
              </span>
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-400">
                Digital Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0E1015]/60 border border-white/[0.06] backdrop-blur-md rounded-full px-4 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.href.replace('#', '');
              return (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full',
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.1)] group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0E1015] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-2xl bg-[#08090A]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <nav id="mobile-navigation" className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 mt-1">
                <Link
                  to="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-sm font-semibold"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};


