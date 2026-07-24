export type ThemeColorKey = 'teal' | 'navy' | 'slate' | 'sage' | 'amber';
export type BgThemeKey = 'default' | 'pure-white' | 'warm-cream' | 'soft-mint' | 'cool-sky';

export interface ThemeStyleConfig {
  name: string;
  primary: string;
  primaryHover: string;
  primaryBorder: string;
  primaryText: string;
  primaryBgLight: string;
  ring: string;
  accentGradient: string;
  badge: string;
  iconBg: string;
  iconText: string;
}

export interface BgStyleConfig {
  name: string;
  description: string;
  bodyBg: string;
  cardBg: string;
  accentSectionBg: string;
  border: string;
  previewBg: string;
}

export const bgThemeStyles: Record<BgThemeKey, BgStyleConfig> = {
  default: {
    name: 'Gris Neutro Clínico',
    description: 'Fondo gris/azul suave equilibrado',
    bodyBg: 'bg-slate-50 dark:bg-slate-900',
    cardBg: 'bg-white dark:bg-slate-800',
    accentSectionBg: 'bg-slate-100/80 dark:bg-slate-800/60',
    border: 'border-slate-200 dark:border-slate-800',
    previewBg: 'bg-slate-100',
  },
  'pure-white': {
    name: 'Blanco Puro Luminoso',
    description: 'Fondo blanco despejado y brillante',
    bodyBg: 'bg-white dark:bg-slate-950',
    cardBg: 'bg-slate-50 dark:bg-slate-900',
    accentSectionBg: 'bg-slate-100 dark:bg-slate-900/80',
    border: 'border-slate-200 dark:border-slate-800',
    previewBg: 'bg-white border border-slate-300',
  },
  'warm-cream': {
    name: 'Crema & Marfil Cálido',
    description: 'Tono marfil relajante e impecable',
    bodyBg: 'bg-[#faf8f5] dark:bg-[#1a1816]',
    cardBg: 'bg-white dark:bg-[#24211e]',
    accentSectionBg: 'bg-[#f3efe9] dark:bg-[#1e1b18]',
    border: 'border-[#e6dfd5] dark:border-[#38332d]',
    previewBg: 'bg-[#f5f0e6]',
  },
  'soft-mint': {
    name: 'Verde Salvia Fresco',
    description: 'Fondo con matiz verde fresco suave',
    bodyBg: 'bg-[#f4f8f6] dark:bg-[#121c18]',
    cardBg: 'bg-white dark:bg-[#192621]',
    accentSectionBg: 'bg-[#e8f1ed] dark:bg-[#15221d]',
    border: 'border-[#d2e4dc] dark:border-[#283d34]',
    previewBg: 'bg-[#e2f0e8]',
  },
  'cool-sky': {
    name: 'Azul Hielo / Sanitario',
    description: 'Tono azul claro limpio y profesional',
    bodyBg: 'bg-[#f0f7fb] dark:bg-[#0f172a]',
    cardBg: 'bg-white dark:bg-[#1e293b]',
    accentSectionBg: 'bg-[#e1f0f8] dark:bg-[#131f37]',
    border: 'border-[#cce3f0] dark:border-[#2a3a59]',
    previewBg: 'bg-[#e0f2fe]',
  },
};

export const themeStyles: Record<ThemeColorKey, ThemeStyleConfig> = {
  teal: {
    name: 'Teal Clínico Lindo & Luminoso',
    primary: 'bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-400',
    primaryHover: 'hover:bg-teal-700 dark:hover:bg-teal-400',
    primaryBorder: 'border-teal-500 dark:border-teal-400',
    primaryText: 'text-teal-700 dark:text-teal-300',
    primaryBgLight: 'bg-teal-50/80 dark:bg-teal-950/40',
    ring: 'focus:ring-teal-500',
    accentGradient: 'from-teal-500 via-emerald-500 to-cyan-500',
    badge: 'bg-teal-50 text-teal-800 border border-teal-200 dark:bg-teal-950/80 dark:text-teal-200 dark:border-teal-800',
    iconBg: 'bg-teal-600 text-white',
    iconText: 'text-teal-600 dark:text-teal-400',
  },
  navy: {
    name: 'Azul Sanitario Luminoso',
    primary: 'bg-sky-600 hover:bg-sky-700 text-white dark:bg-sky-500 dark:hover:bg-sky-400',
    primaryHover: 'hover:bg-sky-700 dark:hover:bg-sky-400',
    primaryBorder: 'border-sky-500 dark:border-sky-400',
    primaryText: 'text-sky-700 dark:text-sky-300',
    primaryBgLight: 'bg-sky-50/80 dark:bg-sky-950/40',
    ring: 'focus:ring-sky-500',
    accentGradient: 'from-sky-500 via-indigo-500 to-cyan-500',
    badge: 'bg-sky-50 text-sky-800 border border-sky-200 dark:bg-sky-950/80 dark:text-sky-200 dark:border-sky-800',
    iconBg: 'bg-sky-600 text-white',
    iconText: 'text-sky-600 dark:text-sky-400',
  },
  slate: {
    name: 'Gris Platino Elegante',
    primary: 'bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-200 dark:hover:bg-white dark:text-slate-900',
    primaryHover: 'hover:bg-slate-900 dark:hover:bg-white',
    primaryBorder: 'border-slate-800 dark:border-slate-200',
    primaryText: 'text-slate-800 dark:text-slate-200',
    primaryBgLight: 'bg-slate-100 dark:bg-slate-800/80',
    ring: 'focus:ring-slate-600',
    accentGradient: 'from-slate-700 via-slate-600 to-slate-500',
    badge: 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700',
    iconBg: 'bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900',
    iconText: 'text-slate-700 dark:text-slate-300',
  },
  sage: {
    name: 'Menta & Salvia Clara',
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400',
    primaryHover: 'hover:bg-emerald-700 dark:hover:bg-emerald-400',
    primaryBorder: 'border-emerald-500 dark:border-emerald-400',
    primaryText: 'text-emerald-700 dark:text-emerald-300',
    primaryBgLight: 'bg-emerald-50/80 dark:bg-emerald-950/40',
    ring: 'focus:ring-emerald-500',
    accentGradient: 'from-emerald-500 via-teal-500 to-green-500',
    badge: 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-600 text-white',
    iconText: 'text-emerald-600 dark:text-emerald-400',
  },
  amber: {
    name: 'Cálido Coral & Melocotón',
    primary: 'bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-400',
    primaryHover: 'hover:bg-amber-700 dark:hover:bg-amber-400',
    primaryBorder: 'border-amber-500 dark:border-amber-400',
    primaryText: 'text-amber-700 dark:text-amber-300',
    primaryBgLight: 'bg-amber-50/80 dark:bg-amber-950/40',
    ring: 'focus:ring-amber-500',
    accentGradient: 'from-amber-500 via-orange-500 to-rose-400',
    badge: 'bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-600 text-white',
    iconText: 'text-amber-600 dark:text-amber-400',
  },
};
