'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Phone,
  Layers,
  Lock,
  Workflow,
  BarChart3,
  DollarSign,
  AlertTriangle,
  RefreshCw,
  Target,
  Gauge,
  Wrench,
  Bell,
  Search,
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  MapPin,
  Mail,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import TrackedCta from '@/components/TrackedCta';
import EngagementTracker from '@/components/EngagementTracker';
import { RavenLabsLogo } from '@/components/RavenLabsLogo';
import { EcosystemStrip, ToolIcon } from '@/components/IntegrationLogos';
import type { CampaignContent } from './CampaignContent.types';

const ICONS: Record<string, LucideIcon> = {
  zap: Zap,
  shield: ShieldCheck,
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign,
  clock: Clock,
  check: CheckCircle2,
  chart: BarChart3,
  users: Users,
  settings: Wrench,
  'line-chart': TrendingUp,
  alert: AlertTriangle,
  lock: Lock,
  refresh: RefreshCw,
  sparkles: Sparkles,
  target: Target,
  layers: Layers,
  gauge: Gauge,
  wrench: Wrench,
  bell: Bell,
  search: Search,
  mail: Mail,
  database: Layers,
  'trending-down': TrendingUp,
};

type Props = {
  campaign: string;
  content: CampaignContent;
};

export default function CampaignTemplate({ campaign, content }: Props) {
  const [before, accent, after] = splitOnAccent(content.hero.headlineTemplate);

  // Stepper active state
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  // Testimonial active state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // FAQ open state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const steps = content.process.steps.map((s, i) => ({
    num: `0${i + 1}`,
    name: s.title.split(' ')[0] || `Step ${i + 1}`,
    title: s.title,
    desc: s.body,
  }));

  const testimonials = content.proof.testimonials.map((t) => ({
    quote: t.quote,
    author: t.name,
    role: t.title,
    company: content.partnerName ? `${content.partnerName} Client` : 'Enterprise Client',
  }));

  const featureImages = [
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  ];

  // Dynamically calculate grid columns based on count so there are never orphaned cards
  const benefitCount = content.answer.benefits.length;
  const benefitGridClass =
    benefitCount === 3
      ? 'grid grid-cols-1 md:grid-cols-3 gap-6'
      : benefitCount === 4
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
      : benefitCount === 5
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      : 'grid grid-cols-1 md:grid-cols-2 gap-6';

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-slate-900 font-['Quicksand'] selection:bg-[#4A00E1] selection:text-white antialiased">
      <EngagementTracker campaign={campaign} />

      {/* 1. Co-branded Sticky Glass Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-22 flex items-center justify-between">
          <RavenLabsLogo
            partnerName={content.partnerName}
            partnerLogo={content.partnerLogoSrc}
            height={48}
          />

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={content.nav.phoneHref || 'tel:1300305009'}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#4A00E1] transition-colors font-['Poppins']"
            >
              <Phone className="w-4 h-4 text-[#4A00E1]" />
              <span>{content.nav.phoneLabel || '1300 305 009'}</span>
            </a>

            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#4A00E1] hover:bg-[#3B00B3] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#4A00E1]/20 hover:shadow-lg hover:shadow-[#4A00E1]/30 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 font-['Poppins'] group cursor-pointer"
            >
              <span>{content.hero.ctaLabel || 'Book Strategy Session'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* 2. Hero Section (58% / 42%) */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-20 bg-ambient-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column (7 cols = ~58%) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Pulsing Eyebrow badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#4A00E1]/20 shadow-xs text-xs font-bold text-[#4A00E1] font-['Poppins']">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A00E1] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A00E1]" />
                  </span>
                  <span>Raven Labs Enterprise Implementation</span>
                </div>

                {/* H1 with Playfair Display Italic Serif Accent */}
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 font-['Poppins'] leading-[1.1]">
                  {before}
                  {accent && (
                    <span className="font-serif italic font-normal text-[#4A00E1]">
                      {accent}
                    </span>
                  )}
                  {after}
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-['Quicksand'] font-medium max-w-2xl">
                  {content.hero.subhead}
                </p>

                {/* Bullets with Lavender Icon Containers */}
                <div className="pt-2 space-y-3.5">
                  {content.hero.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A00E1]" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-slate-800 font-['Quicksand']">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust metrics strip */}
                <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Poppins']">50+</div>
                    <div className="text-xs text-slate-500 font-['Quicksand'] font-medium">Enterprise Rollouts</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#4A00E1] font-['Poppins']">99.4%</div>
                    <div className="text-xs text-slate-500 font-['Quicksand'] font-medium">User Adoption Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Poppins']">100%</div>
                    <div className="text-xs text-slate-500 font-['Quicksand'] font-medium">Australian Engineers</div>
                  </div>
                </div>
              </div>

              {/* Right Lead Capture Form (5 cols = ~42%) */}
              <div className="lg:col-span-5">
                <LeadForm
                  campaign={campaign}
                  title={content.hero.formHeading}
                  subhead={content.hero.formSubhead}
                  buttonText={content.hero.ctaLabel}
                  redirectPath={`/${campaign}/thanks`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. macOS Showcase Simulation Mockup */}
        <section className="py-12 bg-transparent relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200/80 bg-gradient-to-tr from-[#F8F9FE] via-white to-[#F3E8FF]/20 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4A00E1]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6400E1]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* macOS window control bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 pl-2 border-l border-slate-200">
                    Raven Labs {content.partnerName || 'Enterprise'} Engine Active
                  </span>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-white border border-[#4A00E1]/20 shadow-sm text-xs font-bold text-[#4A00E1] flex items-center gap-2 font-['Poppins'] animate-float">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A00E1] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A00E1]" />
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#4A00E1]" />
                  <span>Ask AI: &quot;Forecast pipeline bottlenecks and automate executive sync&quot;</span>
                </div>
              </div>

              {/* Simulation cards */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.answer.benefits.slice(0, 3).map((benefit, idx) => {
                  const Icon = benefit.icon ? ICONS[benefit.icon] || Zap : Zap;
                  return (
                    <div
                      key={idx}
                      className="group relative p-6 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-[#4A00E1]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-widest font-bold text-[#4A00E1] font-['Poppins']">
                          Module 0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#4A00E1] group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-bold text-slate-900 text-lg font-['Poppins'] tracking-tight group-hover:text-[#4A00E1] transition-colors">
                        {benefit.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Quicksand']">
                        {benefit.body}
                      </p>

                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Continuous Live Sync</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ecosystem Integration Strip with 100% Reliable Inline SVGs */}
        <EcosystemStrip
          title="SEAMLESSLY INTEGRATED ACROSS YOUR ENTERPRISE STACK"
          tools={[
            { name: 'Microsoft 365', category: 'Productivity' },
            { name: 'Teams & Outlook', category: 'Collaboration' },
            { name: 'Power BI', category: 'Analytics' },
            { name: 'PostgreSQL / Dataverse', category: 'Data Architecture' },
            { name: 'Custom AI Models', category: 'Intelligence' },
          ]}
        />

        {/* 5. Balanced Benefit Solution Grid (No orphaned gaps) */}
        <section className="py-20 bg-[#F8F9FE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
                The Core Challenge
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Poppins']">
                {content.problem.heading}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-['Quicksand'] leading-relaxed">
                {content.problem.body}
              </p>
            </div>

            {/* Balanced Grid without orphaned gaps */}
            <div className={benefitGridClass}>
              {content.answer.benefits.map((benefit, i) => {
                const Icon = benefit.icon ? ICONS[benefit.icon] || Zap : Zap;
                return (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 hover:border-[#4A00E1]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-[#4A00E1]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 font-['Poppins']">{benefit.title}</h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-['Quicksand']">{benefit.body}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#4A00E1] font-['Poppins']">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Enterprise Ready</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Centered 5-Stage Process Stepper with Circular Timeline Nodes */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
                Implementation Framework
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Poppins']">
                {content.process.heading}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-['Quicksand'] leading-relaxed">
                {content.process.subhead}
              </p>
            </div>

            {/* Stepper Timeline Navigation */}
            <div className="relative max-w-4xl mx-auto">
              <div className="hidden sm:block absolute top-7 left-10 right-10 h-0.5 bg-slate-200 -z-0" />

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10 justify-items-center">
                {steps.map((step, idx) => {
                  const isActive = idx === activeStepIdx;
                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActiveStepIdx(idx)}
                      className="group flex flex-col items-center cursor-pointer transition-all duration-200 focus:outline-none"
                    >
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                          isActive
                            ? "bg-[#4A00E1] text-white ring-4 ring-[#4A00E1]/20 shadow-xl scale-110"
                            : "bg-white border-2 border-slate-200 text-slate-600 group-hover:border-[#4A00E1] group-hover:text-[#4A00E1] shadow-sm"
                        } font-['Poppins']`}
                      >
                        {step.num}
                      </div>

                      <span
                        className={`mt-2.5 text-xs sm:text-sm font-bold transition-colors font-['Poppins'] ${
                          isActive ? "text-[#4A00E1]" : "text-slate-600 group-hover:text-slate-900"
                        }`}
                      >
                        {step.name}
                      </span>

                      <div
                        className={`h-1.5 rounded-full transition-all duration-300 mt-1.5 ${
                          isActive ? "w-8 bg-[#4A00E1]" : "w-0 bg-transparent"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Details */}
            {steps[activeStepIdx] && (
              <div className="bg-[#F8F9FE] border border-slate-200/90 shadow-xl rounded-[28px] p-6 sm:p-10 max-w-4xl mx-auto space-y-6 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F3E8FF] text-[#4A00E1] font-['Poppins']">
                      Stage {steps[activeStepIdx].num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins']">
                      {steps[activeStepIdx].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-['Quicksand'] font-medium">
                  {steps[activeStepIdx].desc}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 7. 4-Column 3D Interactive Flipping Feature Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
                Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Poppins']">
                Engineered for <span className="font-serif italic font-normal text-[#4A00E1]">Enterprise Velocity.</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-['Quicksand'] leading-relaxed">
                Hover over any capability card to explore technical deliverables and operational outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.answer.benefits.slice(0, 4).map((feat, idx) => (
                <div
                  key={idx}
                  className="group [perspective:1000px] h-[400px] w-full cursor-pointer"
                >
                  <div className="relative h-full w-full rounded-[28px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg hover:shadow-2xl">
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 h-full w-full rounded-[28px] overflow-hidden [backface-visibility:hidden] border border-slate-200/80">
                      <img
                        src={featureImages[idx % featureImages.length]}
                        alt={feat.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-xs font-bold text-slate-900 shadow-md border border-white/50 font-['Poppins']">
                        0{idx + 1}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 text-white flex flex-col justify-end space-y-2">
                        <h4 className="text-xl font-bold leading-tight font-['Poppins'] text-white">
                          {feat.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-['Quicksand'] line-clamp-2">
                          {feat.body}
                        </p>
                        <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-[#F3E8FF] uppercase tracking-wider font-['Poppins']">
                          <span>Hover to flip</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Back Face (Flipped) */}
                    <div className="absolute inset-0 h-full w-full rounded-[28px] bg-white border-2 border-[#4A00E1]/30 p-6 sm:p-7 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-gradient-to-b from-white via-[#F8F9FE] to-white">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F3E8FF] text-[#4A00E1] font-['Poppins']">
                            Capability 0{idx + 1}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#4A00E1]">
                            <Sparkles className="w-4 h-4" />
                          </div>
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 font-['Poppins'] leading-tight">
                          {feat.title}
                        </h4>

                        <p className="text-xs text-slate-600 font-['Quicksand'] leading-relaxed">
                          {feat.body}
                        </p>

                        <div className="pt-2 space-y-2 border-t border-slate-100">
                          <div className="flex items-start gap-2 text-xs text-slate-800 font-semibold font-['Quicksand']">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4A00E1] mt-0.5 shrink-0" />
                            <span>Enterprise data governance</span>
                          </div>
                          <div className="flex items-start gap-2 text-xs text-slate-800 font-semibold font-['Quicksand']">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4A00E1] mt-0.5 shrink-0" />
                            <span>Zero pipeline downtime</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#4A00E1] font-['Poppins']">
                        <span>Raven Labs Standard</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Testimonial Carousel */}
        {testimonials.length > 0 && (
          <section className="py-20 bg-[#F8F9FE] border-y border-slate-200/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 shadow-xl text-center space-y-8">
                <div className="flex items-center justify-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2 font-['Poppins']">
                    5.0 Rated by Australian Enterprises
                  </span>
                </div>

                <p className="text-xl sm:text-2xl lg:text-[28px] font-medium text-slate-900 leading-relaxed font-['Quicksand'] italic">
                  &ldquo;{testimonials[activeTestimonialIdx]?.quote || testimonials[0]?.quote}&rdquo;
                </p>

                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-slate-900 font-['Poppins']">
                    {testimonials[activeTestimonialIdx]?.author || testimonials[0]?.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-['Quicksand']">
                    {testimonials[activeTestimonialIdx]?.role || testimonials[0]?.role} •{' '}
                    <span className="font-semibold text-slate-700">
                      {testimonials[activeTestimonialIdx]?.company || testimonials[0]?.company}
                    </span>
                  </p>
                </div>

                {testimonials.length > 1 && (
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTestimonialIdx((c) => (c === 0 ? testimonials.length - 1 : c - 1))
                      }
                      className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition shadow-sm cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveTestimonialIdx(i)}
                          className={`h-2 transition-all rounded-full cursor-pointer ${
                            i === activeTestimonialIdx ? "w-8 bg-[#4A00E1]" : "w-2 bg-slate-200 hover:bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveTestimonialIdx((c) => (c === testimonials.length - 1 ? 0 : c + 1))
                      }
                      className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition shadow-sm cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 9. 2-Column FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
                  FAQ & Direct Support
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-['Poppins']">
                  {content.faq.heading}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-['Quicksand'] leading-relaxed">
                  Everything you need to know about implementation, licensing, and ongoing optimization.
                </p>

                <div className="p-6 rounded-3xl bg-[#F8F9FE] border border-slate-200/80 shadow-md space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#4A00E1]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm font-['Poppins']">Direct Australian Support</h4>
                      <p className="text-xs text-slate-500 font-['Quicksand']">Certified engineers on call</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-['Quicksand']">
                    Speak directly with a Melbourne-based implementation lead today to evaluate your readiness.
                  </p>
                  <a
                    href="tel:1300305009"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#4A00E1] hover:underline font-['Poppins']"
                  >
                    <span>Call 1300 305 009</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {content.faq.items.map((item, i) => {
                  const isOpen = openFaqIdx === i;
                  return (
                    <div
                      key={i}
                      className={`border rounded-2xl transition-all ${
                        isOpen
                          ? "bg-white border-[#4A00E1]/30 shadow-md ring-1 ring-[#4A00E1]/10"
                          : "bg-[#F8F9FE] hover:bg-white border-slate-200"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIdx(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                      >
                        <span className="font-bold text-slate-900 text-base sm:text-lg font-['Poppins']">
                          {item.q}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isOpen
                              ? "bg-[#4A00E1] text-white rotate-180"
                              : "bg-white text-slate-600 hover:bg-[#F3E8FF] hover:text-[#4A00E1]"
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
            </div>
          </div>
        </section>

        {/* 10. Direct Contact Pre-Footer Banner & Legal Footer */}
        <section className="py-16 bg-[#0B0C10] text-white relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4A00E1]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6400E1]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#F3E8FF] text-xs font-bold uppercase tracking-wider font-['Poppins'] border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F3E8FF]" />
              <span>Guaranteed Zero Pipeline Disruption</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Poppins']">
              {content.finalCta.heading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-['Quicksand'] leading-relaxed">
              {content.finalCta.body}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4A00E1] hover:bg-[#3B00B3] text-white font-bold text-base shadow-xl shadow-[#4A00E1]/30 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 font-['Poppins'] group cursor-pointer"
              >
                <span>{content.finalCta.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:1300305009"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all font-['Poppins'] cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call 1300 305 009</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2 font-['Quicksand']">
              {content.finalCta.reassurance}
            </p>
          </div>
        </section>
      </main>

      {/* Main Legal Footer */}
      <footer className="border-t border-slate-200 bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <RavenLabsLogo height={44} />

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600 font-['Poppins']">
              <a href="tel:1300305009" className="hover:text-[#4A00E1] transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>1300 305 009</span>
              </a>
              <span className="text-slate-300">•</span>
              <a href="mailto:info@ravenlabs.com.au" className="hover:text-[#4A00E1] transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>info@ravenlabs.com.au</span>
              </a>
              <span className="text-slate-300">•</span>
              <a href="https://theravenlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A00E1] transition-colors flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>theravenlabs.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-['Quicksand']">
            <div className="flex items-center gap-2 text-center md:text-left">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>
                © {new Date().getFullYear()} Raven Labs Australia. Level 4, 150 Collins St, Melbourne VIC 3000 | Sydney Operations. ABN {content.footer.abn}.
              </span>
            </div>

            <div className="flex items-center gap-6 font-medium">
              <a href="https://theravenlabs.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A00E1] transition underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="https://theravenlabs.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A00E1] transition underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function splitOnAccent(template: string): [string, string | null, string] {
  const match = template.match(/^(.*)\\{(.+)\\}(.*)$/);
  if (!match) return [template, null, ''];
  const [, before, accent, after] = match;
  return [before, accent, after];
}
