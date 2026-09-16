import Image from 'next/image';

interface RavenLabsLogoProps {
  partnerName?: string;
  partnerLogo?: string;
  variant?: 'dark' | 'light';
  height?: number;
}

export function RavenLabsLogo({
  partnerName,
  partnerLogo,
  variant = 'dark',
  height = 36,
}: RavenLabsLogoProps) {
  const logoSrc = variant === 'light' ? '/raven-labs-logo-white.png' : '/raven-labs-logo.png';

  return (
    <div className="flex items-center gap-3">
      <Image
        src={logoSrc}
        alt="Raven Labs"
        width={140}
        height={height}
        priority
        className="h-8 sm:h-9 w-auto object-contain"
      />

      {partnerName && (
        <div className="flex items-center gap-2">
          <div className={`h-5 w-px ${variant === 'light' ? 'bg-slate-700' : 'bg-slate-300'} mx-1`} />
          {partnerLogo && (
            <img src={partnerLogo} alt={partnerName} className="h-5 w-auto object-contain" />
          )}
          <span
            className={`font-bold text-sm sm:text-base tracking-tight font-['Poppins'] ${
              variant === 'light' ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            {partnerName}
          </span>
        </div>
      )}
    </div>
  );
}
