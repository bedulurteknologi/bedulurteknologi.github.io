import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  if (!visible) return null;
  return <button type="button" aria-label="Back to top" title="Back to top" className="back-to-top fixed z-40 right-5 bottom-5 w-11 h-11 rounded-full flex items-center justify-center border border-cyan-300/30 bg-[#10161d]/95 text-cyan-300 shadow-xl hover:bg-cyan-300 hover:text-black focus-visible:outline-2 focus-visible:outline-cyan-300 transition-colors" onClick={() => {
    if (location.pathname === '/' && location.hash) navigate('/', { replace: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }}><ArrowUp size={18} /></button>;
}
