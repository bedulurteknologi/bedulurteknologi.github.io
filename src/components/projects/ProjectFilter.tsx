import React from 'react';
import { cn } from '../../lib/utils';

export type FilterCategory =
  | 'all'
  | 'web'
  | 'mobile'
  | 'business'
  | 'automation'
  | 'iot'
  | 'enterprise';

interface ProjectFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeFilter,
  onFilterChange,
  counts,
}) => {
  const filters: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'business', label: 'Business Systems' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web Platforms' },
    { id: 'automation', label: 'Automation' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'iot', label: 'IoT' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 mb-12 sm:mb-16">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        const count = counts[filter.id] || 0;

        return (
          <button
            key={filter.id}
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer select-none',
              isActive
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
            )}
          >
            <span>{filter.label}</span>
            <span
              className={cn(
                'text-[10px] font-mono-tech px-1.5 py-0.2 rounded-full',
                isActive ? 'bg-cyan-500/30 text-white' : 'bg-white/[0.05] text-slate-400'
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
