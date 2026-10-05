import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const frame = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const featured = index === 0;
  const move = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!frame.current || !window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return;
    const rect = frame.current.getBoundingClientRect();
    setTilt({ x: ((event.clientY - rect.top) / rect.height - .5) * -3, y: ((event.clientX - rect.left) / rect.width - .5) * 3 });
  };
  return (
    <article className={cn('project-editorial group', featured && 'project-featured')}>
      <div className="flex items-center gap-4 mb-5 text-[11px] font-mono-tech uppercase tracking-[.16em]">
        <span className="text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
        <span className="text-slate-400">{project.category}</span>
        <span className="h-px bg-white/10 flex-1" />
      </div>
      <Link ref={frame} to={`/projects/${project.slug}`} data-cursor="project" onMouseMove={move} onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="project-visual block focus-visible:outline-2 focus-visible:outline-cyan-300"
        style={{ transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        <img src={project.coverImage} alt={`${project.name} — project presentation`} loading="lazy" decoding="async" className="w-full h-full object-contain" />
        <span className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#08090a]/90 border border-white/20 text-white group-hover:bg-cyan-300 group-hover:text-black transition-colors"><ArrowUpRight size={20} /></span>
      </Link>
      <div className={cn('pt-6', featured && 'lg:grid lg:grid-cols-2 lg:gap-16')}>
        <div>
          <h3 className={cn('text-2xl md:text-3xl font-semibold tracking-tight text-white', featured && 'md:text-4xl')}><Link to={`/projects/${project.slug}`}>{project.name}</Link></h3>
          <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">{project.headline}</p>
        </div>
        <div>
          {featured && <p className="mt-4 lg:mt-0 text-sm leading-relaxed text-slate-400">{project.description}</p>}
          <div className="flex flex-wrap gap-2 mt-5">{project.technologies.map(tech => <Badge key={tech} variant="neutral">{tech}</Badge>)}</div>
          <Link to={`/projects/${project.slug}`} className="inline-flex gap-2 items-center mt-6 text-sm text-cyan-300 hover:text-white">Explore case study <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
};
