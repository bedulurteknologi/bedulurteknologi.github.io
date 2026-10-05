import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'purple' | 'emerald' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className,
  ...props
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/25',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    neutral: 'bg-white/[0.04] text-slate-300 border-white/[0.08]',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-normal',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono-tech uppercase font-medium rounded-full border',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
