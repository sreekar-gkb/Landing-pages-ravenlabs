import { ClipboardCheck, Database, Factory, Plug, Rocket, SlidersHorizontal, TrendingUp, TriangleAlert } from 'lucide-react';
export const ICONS = { ClipboardCheck, Database, Factory, Plug, Rocket, SlidersHorizontal, TrendingUp, TriangleAlert } as const;
export type IconName = keyof typeof ICONS;
