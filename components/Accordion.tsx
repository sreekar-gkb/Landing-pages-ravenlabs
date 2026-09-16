'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIdx((current) => (current === i ? null : i));

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className={`border rounded-2xl transition-all ${
              isOpen
                ? "bg-white border-[#4A00E1]/30 shadow-md ring-1 ring-[#4A00E1]/10"
                : "bg-white/70 hover:bg-white border-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
            >
              <span className="font-bold text-slate-900 text-base sm:text-lg font-['Poppins']">
                {item.q}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isOpen
                    ? "bg-[#4A00E1] text-white rotate-180"
                    : "bg-slate-100 text-slate-600 hover:bg-[#F3E8FF] hover:text-[#4A00E1]"
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base font-['Quicksand'] border-t border-slate-100">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
