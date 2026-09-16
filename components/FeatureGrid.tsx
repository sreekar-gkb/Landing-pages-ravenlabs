interface Feature {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  badge?: string;
}

const defaultFeatures: Feature[] = [
  {
    id: "01",
    title: "Executive Readiness & AI Strategy",
    description: "Align business objectives, executive reporting, and governance with a clear 90-day execution roadmap.",
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    badge: "Strategy"
  },
  {
    id: "02",
    title: "Enterprise Security & Governance",
    description: "Multi-layered data loss prevention, permission boundaries, and sovereign Australian compliance.",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    badge: "Security"
  },
  {
    id: "03",
    title: "Custom Automated Workflows",
    description: "Connect core CRM, ERP, and communication tools into autonomous, self-optimizing business pipelines.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "Workflows"
  },
  {
    id: "04",
    title: "Continuous Adoption Telemetry",
    description: "Live usage analytics, prompt engineering playbooks, and dedicated Australian engineer office hours.",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    badge: "Enablement"
  }
];

export function FeatureGrid({
  tag = "Capabilities",
  headline = "Engineered for Rapid Enterprise Execution.",
  subhead = "Structured rollout frameworks that eliminate downtime and ensure 99%+ team adoption.",
  features = defaultFeatures
}: {
  tag?: string;
  headline?: string;
  subhead?: string;
  features?: Feature[];
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
            {tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-['Poppins']">
            {headline}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Quicksand']">
            {subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Number Badge */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-xs font-bold text-slate-900 shadow-md border border-white/50 font-['Poppins']">
                {feature.id}
              </div>

              {feature.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider font-['Poppins'] border border-white/20">
                  {feature.badge}
                </div>
              )}

              {/* Gradient overlay for perfect text contrast */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 text-white flex flex-col justify-end space-y-2">
                <h4 className="text-xl font-bold leading-tight font-['Poppins'] text-white">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-['Quicksand']">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
