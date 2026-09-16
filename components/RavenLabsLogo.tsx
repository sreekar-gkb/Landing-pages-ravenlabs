export function RavenLabsLogo({ partnerName, partnerLogo }: { partnerName?: string; partnerLogo?: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* Official Geometric R Raven Monogram */}
      <svg className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#4A00E1" />
        <path
          d="M30 22H56C68.1503 22 78 31.8497 78 44C78 52.8257 72.7845 60.4431 65.3163 63.8562L76.5 78H60.5L50.5 65H44V78H30V22ZM44 35V52H55C59.4183 52 63 48.4183 63 44C63 39.5817 59.4183 36 55 36L44 35Z"
          fill="white"
        />
        <path d="M52 38L61 44L52 48V38Z" fill="#7900E1" />
      </svg>
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 font-['Poppins']">
          Raven <span className="text-[#4A00E1]">Labs</span>
        </span>

        {partnerName && (
          <>
            <div className="h-5 w-px bg-slate-300 mx-1" />
            {partnerLogo && <img src={partnerLogo} alt={partnerName} className="h-5 w-auto object-contain" />}
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-700 font-['Poppins']">
              {partnerName}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
