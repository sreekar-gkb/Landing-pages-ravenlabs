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
  height = 40,
}: RavenLabsLogoProps) {
  const logoSrc = variant === 'light' ? '/raven-labs-logo-white.png' : '/raven-labs-logo.png';

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Raven Labs"
          width={160}
          height={height}
          priority
          className={`h-9 sm:h-10 w-auto object-contain transition-opacity ${
            variant === 'light' ? 'brightness-0 invert' : ''
          }`}
        />
      </div>

      {partnerName && (
        <div className="flex items-center gap-2.5">
          <div className={`h-6 w-px ${variant === 'light' ? 'bg-slate-700' : 'bg-slate-300'} mx-0.5`} />
          {partnerLogo && (
            <img src={partnerLogo} alt={partnerName} className="h-5 sm:h-6 w-auto object-contain" />
          )}
          <span
            className={`font-bold text-sm sm:text-base tracking-tight font-['Poppins'] ${
              variant === 'light' ? 'text-slate-200' : 'text-slate-800'
            }`}
          >
            {partnerName}
          </span>
        </div>
      )}
    </div>
  );
}
