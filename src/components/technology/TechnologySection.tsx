import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { technologiesData, technologyCategories } from '../../data/technologies';
import { cn } from '../../lib/utils';
import { Terminal } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTech =
    activeCategory === 'all'
      ? technologiesData
      : technologiesData.filter((item) => item.category === activeCategory);

  return (
    <section id="technology" className="py-24 sm:py-32 relative bg-[#050505]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Engineering Stack"
          title="Technology We"
          highlight="Work With"
          description="A deliberate stack of battle-tested languages, enterprise frameworks, and infrastructure tools chosen for reliability, maintainability, and long-term stability."
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {technologyCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none',
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-xl border border-white/[0.07] bg-[#0A0C10] hover:border-cyan-500/30 transition-all duration-300 hover:bg-[#0E1117] group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
                  <span className="font-mono-tech text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/[0.03]">
                  {tech.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
