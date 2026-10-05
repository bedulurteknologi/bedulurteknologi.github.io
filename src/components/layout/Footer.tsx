import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { contactConfig, contactPeople } from '../../data/contact';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'What We Build', href: '#expertise' },
    { label: 'Technology Stack', href: '#technology' },
    { label: 'Engineering Philosophy', href: '#philosophy' },
    { label: 'About BTI', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.07] bg-[#050505] pt-16 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0E1015] border border-white/10 flex items-center justify-center font-mono-tech text-xs font-bold text-cyan-400">
                BTI
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                BEDULUR TEKNOLOGI INDONESIA
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Digital engineering partner specializing in custom business applications, mobile
              platforms, systems integration, workflow automation, and IoT telemetry.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-mono-tech">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Technology Built Around Your Business</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={'/' + link.href}
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-300">
              Direct Channels
            </h4>
            <div className="flex flex-col gap-2">
              {contactPeople.map(person => <div key={person.email} className="space-y-1 py-2"><span className="text-xs text-white">{person.name}</span><a href={`mailto:${person.email}`} className="block text-xs text-slate-400 hover:text-cyan-300 break-all">{person.email}</a><a href={person.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block text-xs text-slate-400 hover:text-cyan-300">{person.whatsapp}</a></div>)}
              <a
                href={contactConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-cyan-300 flex items-center justify-between group py-1"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={contactConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-cyan-300 flex items-center justify-between group py-1"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={contactConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-cyan-300 flex items-center justify-between group py-1"
              >
                <span>Upwork Verified Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Bedulur Teknologi Indonesia. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Designed & engineered by Bedulur Teknologi Indonesia</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-mono-tech text-[11px] text-slate-400">React + WebGL</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};


