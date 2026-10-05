import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0, normX: 0, normY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setPosition({
        x: e.clientX,
        y: e.clientY,
        normX: (e.clientX / width) * 2 - 1,
        normY: -(e.clientY / height) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}
