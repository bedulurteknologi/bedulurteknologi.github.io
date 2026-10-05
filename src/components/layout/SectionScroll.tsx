import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function SectionScroll() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (pathname !== '/') return;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}
