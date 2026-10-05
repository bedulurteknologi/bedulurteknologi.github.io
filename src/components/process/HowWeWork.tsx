import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/services';
import { CheckCircle2 } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-[#07080a] border-t border-white/[0.06]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Methodology"
          title="How We"
          highlight="Work"
          description="A disciplined, transparent delivery framework focused on de-risking technology investments and building what your business genuinely needs."
        />

        <div className="relative mt-16">
          {/* Vertical progress line on desktop */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="relative lg:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
              >
                {/* Step circle node */}
                <div className="hidden lg:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-[#0E1015] border-2 border-cyan-400/50 items-center justify-center font-mono-tech text-xs font-bold text-cyan-300 group-hover:border-cyan-300 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>

                {/* Left Step Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="lg:hidden px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 font-mono-tech text-xs text-cyan-300 font-bold">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-cyan-400 font-sans">
                    {step.headline}
                  </p>
                </div>

                {/* Right Description & Deliverables */}
                <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-white/[0.05] flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-mono-tech uppercase text-slate-400 tracking-wider">
                      Key Deliverables:
                    </span>
                    {step.deliverables.map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 font-mono-tech"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
