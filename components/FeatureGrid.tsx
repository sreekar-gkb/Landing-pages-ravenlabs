'use client';

import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap, Layers } from 'lucide-react';

export interface FlipFeature {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  badge?: string;
  deliverables?: string[];
  backHeading?: string;
  backDetail?: string;
}

const defaultFeatures: FlipFeature[] = [
  {
    id: "01",
    title: "Executive Readiness & AI Strategy",
    description: "Align business objectives, executive reporting, and governance with a clear 90-day execution roadmap.",
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    badge: "Strategy",
    backHeading: "Architecture & Roadmap",
    backDetail: "Full organizational diagnostic identifying high-impact automation opportunities and data workflows.",
    deliverables: [
      "Executive alignment workshops",
      "Sovereign data governance audit",
      "90-day ROI milestone roadmap"
    ]
  },
  {
    id: "02",
    title: "Enterprise Security & Governance",
    description: "Multi-layered data loss prevention, permission boundaries, and sovereign Australian compliance.",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    badge: "Security",
    backHeading: "Compliance & DLP",
    backDetail: "Lock down sensitive SharePoint, CRM, and financial boundaries before scaling user access.",
    deliverables: [
      "Tenant-level DLP configuration",
      "Role-based permission gating",
      "Australian privacy compliance"
    ]
  },
  {
    id: "03",
    title: "Custom Automated Workflows",
    description: "Connect core CRM, ERP, and communication tools into autonomous, self-optimizing business pipelines.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "Workflows",
    backHeading: "Native Integrations",
    backDetail: "Zero-code and API integrations connecting your daily tools into high-speed automation loops.",
    deliverables: [
      "Teams, Outlook & CRM sync",
      "Automated lead enrichment",
      "Real-time pipeline alerts"
    ]
  },
  {
    id: "04",
    title: "Continuous Adoption Telemetry",
    description: "Live usage analytics, prompt engineering playbooks, and dedicated Australian engineer office hours.",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    badge: "Enablement",
    backHeading: "Team Mastery & Scaling",
    backDetail: "Department-specific training and live telemetry dashboards to track compound weekly time savings.",
    deliverables: [
      "Role-based prompt playbooks",
      "Adoption telemetry reporting",
      "Dedicated engineer support"
    ]
  }
];

export function FeatureGrid({
  tag = "Capabilities",
  headline = "Engineered for Rapid Enterprise Execution.",
  subhead = "Hover over any capability card to explore technical deliverables and operational outcomes.",
  features = defaultFeatures
}: {
  tag?: string;
  headline?: string;
  subhead?: string;
  features?: FlipFeature[];
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
            {tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Poppins']">
            {headline}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Quicksand'] leading-relaxed">
            {subhead}
          </p>
        </div>

        {/* 4-Column 3D Flipping Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group [perspective:1000px] h-[400px] w-full cursor-pointer"
            >
              {/* Inner card with 3D transform */}
              <div className="relative h-full w-full rounded-[28px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg hover:shadow-2xl">
                
                {/* FRONT FACE */}
                <div className="absolute inset-0 h-full w-full rounded-[28px] overflow-hidden [backface-visibility:hidden] border border-slate-200/80">
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Frosted Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-xs font-bold text-slate-900 shadow-md border border-white/50 font-['Poppins']">
                    {feature.id}
                  </div>

                  {feature.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider font-['Poppins'] border border-white/20">
                      {feature.badge}
                    </div>
                  )}

                  {/* Gradient Overlay & Text */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 text-white flex flex-col justify-end space-y-2">
                    <h4 className="text-xl font-bold leading-tight font-['Poppins'] text-white">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-['Quicksand'] line-clamp-2">
                      {feature.description}
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-[#F3E8FF] uppercase tracking-wider font-['Poppins']">
                      <span>Hover to inspect</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* BACK FACE (Flipped 180deg) */}
                <div className="absolute inset-0 h-full w-full rounded-[28px] bg-white border-2 border-[#4A00E1]/30 p-6 sm:p-7 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl bg-gradient-to-b from-white via-[#F8F9FE] to-white">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F3E8FF] text-[#4A00E1] font-['Poppins']">
                        Capability {feature.id}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#4A00E1]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 font-['Poppins'] leading-tight">
                      {feature.backHeading || feature.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-['Quicksand'] leading-relaxed">
                      {feature.backDetail || feature.description}
                    </p>

                    {feature.deliverables && (
                      <div className="pt-2 space-y-2 border-t border-slate-100">
                        {feature.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-800 font-semibold font-['Quicksand']">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4A00E1] mt-0.5 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    )}
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
  );
}
