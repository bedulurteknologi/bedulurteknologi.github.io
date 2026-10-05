import React from 'react';

export const FallbackCore: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Outer ambient glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-500/10 blur-[80px] animate-pulse" />

      {/* Geometric concentric orbital rings */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Ring 1 */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed animate-spin"
          style={{ animationDuration: '30s' }}
        />
        {/* Ring 2 tilted */}
        <div
          className="absolute inset-6 rounded-full border border-blue-500/30 animate-spin"
          style={{ animationDuration: '20s', animationDirection: 'reverse' }}
        />
        {/* Ring 3 */}
        <div
          className="absolute inset-12 rounded-full border border-indigo-500/40 border-t-cyan-400 animate-spin"
          style={{ animationDuration: '15s' }}
        />

        {/* Center glowing core */}
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-950 via-slate-900 to-indigo-950 border border-cyan-400/40 shadow-[0_0_50px_rgba(0,242,254,0.25)] flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-300 animate-ping opacity-75" />
          <div className="absolute w-6 h-6 rounded-full bg-cyan-300 shadow-[0_0_20px_#00f2fe]" />
        </div>
      </div>
    </div>
  );
};
