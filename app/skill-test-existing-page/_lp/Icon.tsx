import { ICONS, type IconName } from "./icons";
export function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  const L = ICONS[name];
  return <L size={size} className={className} aria-hidden="true" />;
}
