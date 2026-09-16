import React from 'react';

export interface IntegrationTool {
  name: string;
  category?: string;
}

export function ToolIcon({ name, className = "h-8 w-8" }: { name: string; className?: string }) {
  const normalized = name.toLowerCase();

  if (normalized.includes('microsoft 365') || normalized.includes('m365') || normalized.includes('office')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="10" height="10" rx="1.5" fill="#F25022" />
        <rect x="13" y="1" width="10" height="10" rx="1.5" fill="#7FBA00" />
        <rect x="1" y="13" width="10" height="10" rx="1.5" fill="#00A4EF" />
        <rect x="13" y="13" width="10" height="10" rx="1.5" fill="#FFB900" />
      </svg>
    );
  }

  if (normalized.includes('team')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 7.5A2.5 2.5 0 1 0 19.5 2.5a2.5 2.5 0 0 0 0 5zM22 9h-5a1 1 0 0 0-1 1v5.5a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5V10a1 1 0 0 0-1-1z" fill="#5059C9" />
        <path d="M14.5 6A3.5 3.5 0 1 0 14.5 0a3.5 3.5 0 0 0 0 7zM18 8H11a2 2 0 0 0-2 2v8a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-8a2 2 0 0 0-2-2z" fill="#7B83EB" />
        <rect x="2" y="7" width="9" height="9" rx="2" fill="#4B53BC" />
        <path d="M5 10h3v1.2H7v3H5.8v-3H5V10z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized.includes('outlook') || normalized.includes('mail')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10l8-6-8-6v-4z" fill="#0078D4" />
        <path d="M14 4h6a2 2 0 0 1 2 2v6l-8-4V4z" fill="#28A8EA" />
        <path d="M14 16l8-4v6a2 2 0 0 1-2 2h-6v-4z" fill="#004E8C" />
        <circle cx="8" cy="12" r="3.5" fill="#FFFFFF" />
        <circle cx="8" cy="12" r="2" fill="#0078D4" />
      </svg>
    );
  }

  if (normalized.includes('power bi') || normalized.includes('bi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="12" width="4" height="9" rx="1.5" fill="#E6AD10" />
        <rect x="10" y="7" width="4" height="14" rx="1.5" fill="#F2C811" />
        <rect x="17" y="3" width="4" height="18" rx="1.5" fill="#F9E05E" />
      </svg>
    );
  }

  if (normalized.includes('postgres') || normalized.includes('dataverse') || normalized.includes('database') || normalized.includes('sql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5z" fill="#336791" opacity="0.2" />
        <ellipse cx="12" cy="7" rx="10" ry="5" fill="#336791" />
        <path d="M2 12c0 2.76 4.48 5 10 5s10-2.24 10-5" stroke="#336791" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 17c0 2.76 4.48 5 10 5s10-2.24 10-5" stroke="#336791" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes('ai') || normalized.includes('gpt') || normalized.includes('openai') || normalized.includes('model') || normalized.includes('copilot') || normalized.includes('zia')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#4A00E1" />
        <path d="M12 5l1.8 4.2L18 11l-4.2 1.8L12 17l-1.8-4.2L6 11l4.2-1.8L12 5z" fill="#FFFFFF" />
        <circle cx="18" cy="6" r="1.5" fill="#F3E8FF" />
        <circle cx="6" cy="18" r="1.5" fill="#F3E8FF" />
      </svg>
    );
  }

  if (normalized.includes('zoho')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#EA212D" />
        <path d="M5 8h4v2H7v4h2v2H5V8zm5 0h4l-3 6h3v2h-4v-2l3-6h-3V8zm5 0h4v8h-4V8zm2 2v4h-0.5v-4H17z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (normalized.includes('shopify')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 6.4L16.2 3.8C16 3.6 15.6 3.5 15.3 3.6L14.2 4.1C13.8 2.6 12.8 1.5 11.4 1.5C10.7 1.5 10 1.9 9.5 2.5C9 3.2 8.8 4.2 8.9 5.3L7 5.9C6.5 6 6.2 6.5 6.2 7L5 19.5C4.9 20.3 5.5 21 6.3 21H17.7C18.5 21 19.1 20.3 19 19.5L19.5 7.1C19.6 6.8 19.3 6.5 18.8 6.4Z" fill="#95BF47" />
        <path d="M12.5 5.5C12.5 4.5 12.1 3.5 11.4 3.5C10.8 3.5 10.4 4.5 10.4 5.5L12.5 5.5Z" fill="#5E8E3E" />
      </svg>
    );
  }

  if (normalized.includes('salesforce')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 5.5A4.5 4.5 0 0 1 17 7.5a4 4 0 0 1 3.5 4 4.5 4.5 0 0 1-3.5 4.5h-10a4 4 0 0 1-4-4 4 4 0 0 1 2.5-3.8 4.5 4.5 0 0 1 4-2.7z" fill="#00A1E0" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#F3E8FF" />
      <path d="M12 6v12M6 12h12" stroke="#4A00E1" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function EcosystemStrip({
  title = "SEAMLESSLY INTEGRATED ACROSS YOUR ENTERPRISE STACK",
  tools = [
    { name: "Microsoft 365", category: "Core Suite" },
    { name: "Teams & Outlook", category: "Collaboration" },
    { name: "Power BI", category: "Analytics" },
    { name: "PostgreSQL / Dataverse", category: "Data Layer" },
    { name: "Custom AI Models", category: "Intelligence" },
  ]
}: {
  title?: string;
  tools?: { name: string; category?: string }[];
}) {
  return (
    <section className="py-14 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 font-['Poppins']">
          {title}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-center">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-[#F8F9FE] border border-slate-200/80 hover:border-[#4A00E1]/40 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ToolIcon name={tool.name} className="w-9 h-9" />
              </div>
              <div className="text-center">
                <span className="font-bold text-xs sm:text-sm text-slate-900 font-['Poppins'] block group-hover:text-[#4A00E1] transition-colors">
                  {tool.name}
                </span>
                {tool.category && (
                  <span className="text-[10px] font-semibold text-slate-400 font-['Quicksand'] block">
                    {tool.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
