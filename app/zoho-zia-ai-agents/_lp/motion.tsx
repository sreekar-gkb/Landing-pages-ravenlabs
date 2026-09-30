'use client';
// Minimal stand-in for framer-motion used by bundled campaigns (main has no framer-motion).
// Supports what the template uses: motion.div/figure with initial/whileInView/animate/transition/viewport,
// AnimatePresence (pass-through), useReducedMotion and useInView.
import { createElement, useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';

export function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)'); setR(m.matches);
    const h = () => setR(m.matches); m.addEventListener('change', h); return () => m.removeEventListener('change', h);
  }, []);
  return r;
}

export function useInView(ref: RefObject<Element>, opts?: { margin?: string }) {
  const [v, setV] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => setV(e.isIntersecting), { rootMargin: opts?.margin });
    io.observe(ref.current); return () => io.disconnect();
  }, [ref, opts?.margin]);
  return v;
}

type State = { opacity?: number; y?: number; scale?: number; filter?: string };
function make(tag: 'div' | 'figure') {
  return function Motion({ initial, whileInView, animate, exit, viewport, transition, style, ...rest }: any) {
    const ref = useRef<HTMLElement>(null);
    const [on, setOn] = useState(false);
    const reduce = useReducedMotion();
    useEffect(() => {
      if (animate && !whileInView) { const id = requestAnimationFrame(() => setOn(true)); return () => cancelAnimationFrame(id); }
      const el = ref.current; if (!el) return;
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); if (viewport?.once !== false) io.disconnect(); } }, { rootMargin: viewport?.margin });
      io.observe(el); return () => io.disconnect();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const st: State = reduce || on ? (whileInView || animate || {}) : (initial || {});
    const d = transition?.duration ?? 0.5, delay = transition?.delay ?? 0, ease = 'cubic-bezier(.21,.47,.32,.98)';
    const css = { ...style, opacity: st.opacity, transform: `translateY(${st.y ?? 0}px) scale(${st.scale ?? 1})`, filter: st.filter,
      transition: reduce ? 'none' : `opacity ${d}s ${ease} ${delay}s, transform ${d}s ${ease} ${delay}s, filter ${d}s ${ease} ${delay}s` };
    return createElement(tag, { ref, style: css, ...rest });
  };
}
export const motion = { div: make('div'), figure: make('figure') };
export function AnimatePresence({ children }: { children: ReactNode; mode?: string }) { return <>{children}</>; }
