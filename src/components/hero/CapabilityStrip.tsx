import React from 'react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    'CUSTOM BUSINESS APPLICATIONS',
    'MOBILE DEVELOPMENT (FLUTTER / ANDROID)',
    'SYSTEM & REST API INTEGRATION',
    'WORKFLOW & POWER AUTOMATION',
    'CLOUD & LINUX INFRASTRUCTURE',
    'INDUSTRIAL IOT & TELEMETRY',
    'LABORATORY & ENTERPRISE SYSTEMS',
    'SECURE INFORMATION ARCHITECTURE',
  ];

  return (
    <div className="w-full border-y border-white/[0.07] bg-[#07080a] py-4 overflow-hidden relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Render twice for continuous loop */}
        {[...capabilities, ...capabilities].map((cap, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-xs font-mono-tech tracking-[0.2em] uppercase text-slate-400 font-medium">
              {cap}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 ml-12" />
          </div>
        ))}
      </div>
    </div>
  );
};
