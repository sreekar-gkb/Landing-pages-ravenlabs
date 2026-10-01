'use client';
import { useEffect, useState } from 'react';
import { useReducedMotion } from './motion';

// Copilot hero word: changes every 2200ms using the slide-up keyframe; an invisible sizer keeps width stable.
export function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [reduce, words.length]);
  return (
    // The box height equals the H1 line-height (1.25em at every breakpoint) so descenders are never clipped
    // and the word shares the baseline of "into real". clip-path (not just overflow) is required:
    // Chromium lets animated, composited children escape overflow:hidden inside framer-motion wrappers.
    <span className="relative inline-block h-[1.25em] overflow-hidden align-top leading-[1.25] text-[#4A00E1] [clip-path:inset(0)]">
      <span className="invisible whitespace-nowrap leading-[1.25]">{words[i]}</span>
      <span key={i} aria-hidden="true" className="absolute left-0 top-0 whitespace-nowrap leading-[1.25] motion-safe:animate-[lp-slide-up_2.2s_cubic-bezier(.4,0,.2,1)_forwards]">{words[i]}</span>
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  );
}
