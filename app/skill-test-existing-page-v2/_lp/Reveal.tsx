'use client';
// Scroll reveal: identical to the Copilot page's framer-motion settings.
import { motion, useReducedMotion } from './motion';
import type { ReactNode } from 'react';

export function Reveal({ children, delay = 0, y = 20, blur = false, className }: { children: ReactNode; delay?: number; y?: number; blur?: boolean; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)', scale: blur ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
