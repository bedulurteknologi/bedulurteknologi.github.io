import React, { lazy, Suspense } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { FallbackCore } from '../three/FallbackCore';
const TechCoreCanvas = lazy(() => import('../three/TechCoreCanvas').then(module => ({ default: module.TechCoreCanvas })));
import { contactConfig } from '../../data/contact';
import { ArrowDown, Code2, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const elem = document.getElementById('work');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-tech-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                {contactConfig.statusText}
              </span>
            </div>

            {/* Small Eyebrow */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-tech tracking-[0.15em] text-cyan-400 uppercase font-semibold mb-3">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>BEDULUR TEKNOLOGI INDONESIA • DIGITAL ENGINEERING STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2.65rem] sm:text-6xl lg:text-[clamp(3.4rem,5.3vw,5.4rem)] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Technology Built{' '}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                Around Your Business.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
              We design and build reliable digital solutions — from custom business applications
              and mobile platforms to automation, cloud infrastructure, and IoT telemetry.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                href="#work"
                onClick={handleScrollToWork}
                showArrow
              >
                Explore Our Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                onClick={handleScrollToContact}
              >
                Start a Project
              </Button>
            </div>

            {/* Credibility mini notes */}
            <div className="pt-6 border-t border-white/[0.07] flex flex-wrap items-center gap-6 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Production-Tested Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>Built for Real Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>Direct Technical Collaboration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Digital Core */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              <Suspense fallback={<FallbackCore />}><TechCoreCanvas /></Suspense>
              {/* Subtle caption below canvas */}
              <div className="text-center mt-2">
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-slate-400">
                  Connected systems. Considered engineering.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="hidden md:flex justify-center mt-8">
          <a
            href="#work"
            onClick={handleScrollToWork}
            className="flex flex-col items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
};

