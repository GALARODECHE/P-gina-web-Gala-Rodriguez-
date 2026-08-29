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
  cardBorderHighlight: string;
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
    name: 'Azul Clarito Sereno (Recomendado)',
    description: 'Fondo azul clarito limpio, suave y luminoso',
    bodyBg: 'bg-[#f0f7fc]',
    cardBg: 'bg-white',
    accentSectionBg: 'bg-[#e2effa]',
    border: 'border-sky-200/70',
    previewBg: 'bg-[#f0f7fc] border border-sky-300',
  },
  'pure-white': {
    name: 'Blanco Puro Inmaculado',
    description: 'Fondo blanco 100% brillante y minimalista',
    bodyBg: 'bg-white',
    cardBg: 'bg-white',
    accentSectionBg: 'bg-[#f8f9fa]',
    border: 'border-slate-200',
    previewBg: 'bg-white border border-slate-300',
  },
  'warm-cream': {
    name: 'Crema y Marfil Cálido',
    description: 'Tono marfil relajante y natural',
    bodyBg: 'bg-[#fbf9f5]',
    cardBg: 'bg-white',
    accentSectionBg: 'bg-[#f4f0e8]',
    border: 'border-[#e8e2d8]',
    previewBg: 'bg-[#f7f2e9] border border-[#e0d8cc]',
  },
  'soft-mint': {
    name: 'Verde Salvia Muy Suave',
    description: 'Fondo con ligerísimo matiz salvia orgánico',
    bodyBg: 'bg-[#f5f9f7]',
    cardBg: 'bg-white',
    accentSectionBg: 'bg-[#eaf3ef]',
    border: 'border-[#d6e7df]',
    previewBg: 'bg-[#e7f3ed] border border-[#cbe0d6]',
  },
  'cool-sky': {
    name: 'Azul Hielo Sanitario',
    description: 'Tono azul claro limpio y profesional',
    bodyBg: 'bg-[#f0f7fc]',
    cardBg: 'bg-white',
    accentSectionBg: 'bg-[#e2effa]',
    border: 'border-sky-200',
    previewBg: 'bg-[#e2f0fb] border border-sky-300',
  },
};

export const themeStyles: Record<ThemeColorKey, ThemeStyleConfig> = {
  teal: {
    name: 'Verde Salvia y Esmeralda Clínico',
    primary: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm',
    primaryHover: 'hover:bg-emerald-800',
    primaryBorder: 'border-emerald-600',
    primaryText: 'text-emerald-800 dark:text-emerald-300',
    primaryBgLight: 'bg-emerald-50/90 dark:bg-emerald-950/40',
    ring: 'focus:ring-emerald-600',
    accentGradient: 'from-emerald-700 to-teal-800',
    badge: 'bg-emerald-50 text-emerald-900 border border-emerald-200/90 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-700 text-white',
    iconText: 'text-emerald-700 dark:text-emerald-400',
    cardBorderHighlight: 'border-emerald-600 ring-2 ring-emerald-500/20',
  },
  navy: {
    name: 'Azul Sanitario Sereno',
    primary: 'bg-sky-700 hover:bg-sky-800 text-white shadow-sm',
    primaryHover: 'hover:bg-sky-800',
    primaryBorder: 'border-sky-600',
    primaryText: 'text-sky-800 dark:text-sky-300',
    primaryBgLight: 'bg-sky-50/90 dark:bg-sky-950/40',
    ring: 'focus:ring-sky-600',
    accentGradient: 'from-sky-700 to-indigo-800',
    badge: 'bg-sky-50 text-sky-900 border border-sky-200/90 dark:bg-sky-950/80 dark:text-sky-200 dark:border-sky-800',
    iconBg: 'bg-sky-700 text-white',
    iconText: 'text-sky-700 dark:text-sky-400',
    cardBorderHighlight: 'border-sky-600 ring-2 ring-sky-500/20',
  },
  slate: {
    name: 'Grafito y Platino Minimalista',
    primary: 'bg-slate-900 hover:bg-black text-white shadow-sm dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white',
    primaryHover: 'hover:bg-black dark:hover:bg-white',
    primaryBorder: 'border-slate-800 dark:border-slate-300',
    primaryText: 'text-slate-900 dark:text-slate-100',
    primaryBgLight: 'bg-slate-100/90 dark:bg-slate-800/80',
    ring: 'focus:ring-slate-900',
    accentGradient: 'from-slate-900 to-slate-800',
    badge: 'bg-slate-100 text-slate-900 border border-slate-300/80 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700',
    iconBg: 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900',
    iconText: 'text-slate-800 dark:text-slate-200',
    cardBorderHighlight: 'border-slate-900 ring-2 ring-slate-700/20',
  },
  sage: {
    name: 'Oliva y Eucalipto Natural',
    primary: 'bg-teal-700 hover:bg-teal-800 text-white shadow-sm',
    primaryHover: 'hover:bg-teal-800',
    primaryBorder: 'border-teal-600',
    primaryText: 'text-teal-800 dark:text-teal-300',
    primaryBgLight: 'bg-teal-50/90 dark:bg-teal-950/40',
    ring: 'focus:ring-teal-600',
    accentGradient: 'from-teal-700 to-emerald-800',
    badge: 'bg-teal-50 text-teal-900 border border-teal-200/90 dark:bg-teal-950/80 dark:text-teal-200 dark:border-teal-800',
    iconBg: 'bg-teal-700 text-white',
    iconText: 'text-teal-700 dark:text-teal-400',
    cardBorderHighlight: 'border-teal-600 ring-2 ring-teal-500/20',
  },
  amber: {
    name: 'Tierra y Terracota Cálido',
    primary: 'bg-amber-700 hover:bg-amber-800 text-white shadow-sm',
    primaryHover: 'hover:bg-amber-800',
    primaryBorder: 'border-amber-600',
    primaryText: 'text-amber-800 dark:text-amber-300',
    primaryBgLight: 'bg-amber-50/90 dark:bg-amber-950/40',
    ring: 'focus:ring-amber-600',
    accentGradient: 'from-amber-700 to-orange-800',
    badge: 'bg-amber-50 text-amber-900 border border-amber-200/90 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-700 text-white',
    iconText: 'text-amber-700 dark:text-amber-400',
    cardBorderHighlight: 'border-amber-600 ring-2 ring-amber-500/20',
  },
};
