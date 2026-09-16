'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Raven Labs executed our enterprise deployment with absolute precision. Their Australian engineers understood our compliance constraints and achieved 99.4% user adoption in under four weeks.",
    author: "David Vance",
    role: "Head of Operations",
    company: "Apex Global Logistics",
    location: "Melbourne, VIC"
  },
  {
    quote: "The structured training frameworks and custom workflow integrations eliminated our manual data entry bottlenecks. Our sales reps save over 8 hours every single week.",
    author: "Elena Rostova",
    role: "Chief Digital Officer",
    company: "Vanguard Retail Group",
    location: "Sydney, NSW"
  },
  {
    quote: "Their team's deep partner expertise ensured zero downtime during our enterprise transition. Raven Labs is our trusted AI and automation partner.",
    author: "Marcus Thornton",
    role: "Managing Director",
    company: "Pacific Asset Management",
    location: "Brisbane, QLD"
  }
];

export function TestimonialCarousel({ testimonials = defaultTestimonials }: { testimonials?: Testimonial[] }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurr((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const active = testimonials[curr] || testimonials[0];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative bg-gradient-to-b from-[#F8F9FE] to-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 shadow-xl text-center space-y-8">
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-700 ml-2 font-['Poppins']">
              5.0 / 5.0 Rated by Australian Enterprises
            </span>
          </div>

          {/* Quote */}
          <div className="relative">
            <p className="text-lg sm:text-2xl font-medium text-slate-900 leading-relaxed font-['Quicksand'] italic">
              &ldquo;{active.quote}&rdquo;
            </p>
          </div>

          {/* Author */}
          <div className="space-y-1">
            <h4 className="font-bold text-lg text-slate-900 font-['Poppins']">
              {active.author}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-['Quicksand']">
              {active.role} • <span className="font-semibold text-slate-700">{active.company}</span>
              {active.location && ` (${active.location})`}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurr(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    i === curr ? "w-8 bg-[#4A00E1]" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
