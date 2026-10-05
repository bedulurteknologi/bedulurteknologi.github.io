import React from 'react';
import { cn } from '../../lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  href?: string;
  isExternal?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}


export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className,
  href,
  isExternal = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg cursor-pointer select-none group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-500/50';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white shadow-[0_0_20px_rgba(0,242,254,0.15)] active:scale-[0.98]',
    secondary:
      'bg-white/[0.04] text-slate-200 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white active:scale-[0.98]',
    outline:
      'bg-transparent text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-400 hover:text-cyan-300 hover:bg-white/[0.03] active:scale-[0.98]',
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

