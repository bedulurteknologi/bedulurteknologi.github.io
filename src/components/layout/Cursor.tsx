import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Cursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
    setIsTouch(isTouchDevice);

    if (isTouchDevice || prefersReduced) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="project"]');
      const buttonTarget = target.closest('button, a, [data-cursor="pointer"]');

      if (projectTarget) {
        setCursorVariant('project');
        setCursorText('VIEW');
      } else if (buttonTarget) {
        setCursorVariant('button');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, prefersReduced]);

  if (isTouch || prefersReduced || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small crisp center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorVariant === 'project' ? 0 : 0.8,
        }}
      />

      {/* Larger soft follower with contextual state */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-200"
        style={{
          x: followerX,
          y: followerY,
          width: cursorVariant === 'project' ? 68 : cursorVariant === 'button' ? 38 : 28,
          height: cursorVariant === 'project' ? 68 : cursorVariant === 'button' ? 38 : 28,
          backgroundColor:
            cursorVariant === 'project'
              ? 'rgba(0, 242, 254, 0.95)'
              : cursorVariant === 'button'
              ? 'rgba(0, 242, 254, 0.15)'
              : 'rgba(255, 255, 255, 0.04)',
          border:
            cursorVariant === 'project'
              ? 'none'
              : cursorVariant === 'button'
              ? '1px solid rgba(0, 242, 254, 0.4)'
              : '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        {cursorText && (
          <span className="text-[11px] font-mono-tech font-bold tracking-wider text-black select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
