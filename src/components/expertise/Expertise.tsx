import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SpotlightCard } from '../ui/SpotlightCard';
import { servicesData } from '../../data/services';
import { Layers, Globe, Smartphone, Network, Cpu, Server, Check } from 'lucide-react';

export const Expertise: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-teal-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 relative bg-[#07080a] border-t border-white/[0.06]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Core Competencies"
          title="What We"
          highlight="Build"
          description="Focused digital engineering services structured to solve complex operational bottlenecks through dependable architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <SpotlightCard key={service.id} className="p-7 sm:p-8 flex flex-col justify-between h-full">
              <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono-tech text-xs tracking-widest text-slate-400">
                    {service.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs font-mono-tech text-cyan-400 mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Items List */}
              <div className="pt-6 border-t border-white/[0.06]">
                <ul className="space-y-2.5">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="mt-0.5 text-cyan-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
              <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center border-t border-white/10 pt-12">
          <div><span className="text-xs font-mono-tech text-cyan-300 uppercase tracking-widest">Existing applications</span><h3 className="text-3xl text-white font-semibold tracking-tight mt-4">Build. Improve. Keep moving.</h3><p className="text-slate-400 leading-relaxed mt-4">Laravel development, API integration, bug fixing, and ongoing improvements for the systems your business already relies on.</p></div>
          <a href={`${import.meta.env.BASE_URL}images/projects/laravel-services/presentation.png`} target="_blank" rel="noopener noreferrer" className="rounded-2xl overflow-hidden border border-white/10 block"><img src={`${import.meta.env.BASE_URL}images/projects/laravel-services/presentation.png`} alt="Laravel development and application maintenance services" loading="lazy" className="w-full" /></a>
        </div>
      </Container>
    </section>
  );
};

