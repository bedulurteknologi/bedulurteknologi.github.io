import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 bg-[#050505]">
      <Container size="narrow" className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono-tech text-xs uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5" />
          <span>Error 404 • Resource Unreachable</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tighter">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-200">
          The requested system node does not exist
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
          The route or document you requested might have been refactored, moved, or is temporarily
          offline.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Button variant="primary" href="/">
            Return to Core Overview
          </Button>
        </div>
      </Container>
    </div>
  );
};
