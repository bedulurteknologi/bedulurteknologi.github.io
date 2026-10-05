import React from 'react';
import { Container } from '../ui/Container';
import { Terminal } from 'lucide-react';


export const EngineeringPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-28 sm:py-36 relative bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative technical line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <Container size="narrow">
        <div className="text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            We don't build technology{' '}
            <span className="text-slate-400 block sm:inline">for the sake of technology.</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />

          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-200 via-white to-sky-200 bg-clip-text text-transparent max-w-2xl mx-auto leading-snug">
            We build systems that solve real operational problems.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed pt-2">
            Every line of code, every architectural selection, and every user interface decision is
            evaluated against a single standard: does this genuinely make your business operations
            more reliable, auditable, and resilient?
          </p>

          {/* Core tenets grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 text-left">
            <div className="p-5 rounded-xl bg-[#090b0f] border border-white/[0.06]">
              <span className="font-mono-tech text-xs text-cyan-400 block mb-2">01 // Pragmatism</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Choose the simplest architecture that completely solves the problem. No unnecessary dependencies.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#090b0f] border border-white/[0.06]">
              <span className="font-mono-tech text-xs text-cyan-400 block mb-2">02 // Reliability</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Systems must function reliably in field conditions, low network coverage, and multi-user concurrency.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#090b0f] border border-white/[0.06]">
              <span className="font-mono-tech text-xs text-cyan-400 block mb-2">03 // Maintainability</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Documented schemas and standard architectural patterns your internal team can understand and operate.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
