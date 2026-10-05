import React, { useState, useMemo } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectFilter } from './ProjectFilter';
import type { FilterCategory } from './ProjectFilter';

import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../data/projects';

export const SelectedWork: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [showAll, setShowAll] = useState(false);

  // Compute category counts
  const counts = useMemo(() => {
    const map: Record<FilterCategory, number> = {
      all: projectsData.length,
      web: 0,
      mobile: 0,
      business: 0,
      automation: 0,
      iot: 0,
      enterprise: 0,
    };

    projectsData.forEach((p) => {
      if (p.filterCategory in map) {
        map[p.filterCategory]++;
      }
    });

    return map;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-[#050505]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Portfolio & Systems"
          title="Selected"
          highlight="Work"
          description="Real projects. Practical systems. A closer look at the software we build for business, research, and the field."
        />

        <ProjectFilter
          activeFilter={activeFilter}
          onFilterChange={(filter) => { setActiveFilter(filter); setShowAll(false); }}
          counts={counts}
        />

        <div className="portfolio-grid">
          {(showAll ? filteredProjects : filteredProjects.slice(0, 9)).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {filteredProjects.length > 9 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400 mb-4">{showAll ? filteredProjects.length : 9} of {filteredProjects.length} projects</p>
            <button type="button" className="px-6 py-3 rounded-xl border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show fewer projects' : 'Explore all projects'}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

