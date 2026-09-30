import { Bot, Rocket, Search, ShieldCheck, Target, TrendingUp, Users, Workflow } from 'lucide-react';
export const ICONS = { Bot, Rocket, Search, ShieldCheck, Target, TrendingUp, Users, Workflow } as const;
export type IconName = keyof typeof ICONS;
