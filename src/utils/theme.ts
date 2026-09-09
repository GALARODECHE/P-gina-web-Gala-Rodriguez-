export type ThemeColorKey = 'peach' | 'teal' | 'navy' | 'slate' | 'sage' | 'amber';
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
    name: 'Gris Neutro Clínico (Solicitado)',
    description: 'Fondo gris medio con tarjetas en gris claro y alto contraste',
    bodyBg: 'bg-slate-300',
    cardBg: 'bg-slate-200',
    accentSectionBg: 'bg-slate-300',
    border: 'border-slate-400/80',
    previewBg: 'bg-slate-300 border border-slate-400',
  },
  'pure-white': {
    name: 'Gris y Grafito',
    description: 'Fondo gris medio con tarjetas en gris',
    bodyBg: 'bg-slate-300',
    cardBg: 'bg-slate-200',
    accentSectionBg: 'bg-slate-300',
    border: 'border-slate-400',
    previewBg: 'bg-slate-300 border border-slate-400',
  },
  'warm-cream': {
    name: 'Gris Cálido',
    description: 'Fondo gris medio con tarjetas en gris',
    bodyBg: 'bg-slate-300',
    cardBg: 'bg-slate-200',
    accentSectionBg: 'bg-slate-300',
    border: 'border-slate-400',
    previewBg: 'bg-slate-300 border border-slate-400',
  },
  'soft-mint': {
    name: 'Gris y Salvia',
    description: 'Fondo gris medio con tarjetas en gris',
    bodyBg: 'bg-slate-300',
    cardBg: 'bg-slate-200',
    accentSectionBg: 'bg-slate-300',
    border: 'border-slate-400',
    previewBg: 'bg-slate-300 border border-slate-400',
  },
  'cool-sky': {
    name: 'Gris y Pizarra',
    description: 'Fondo gris medio con tarjetas en gris',
    bodyBg: 'bg-slate-300',
    cardBg: 'bg-slate-200',
    accentSectionBg: 'bg-slate-300',
    border: 'border-slate-400',
    previewBg: 'bg-slate-300 border border-slate-400',
  },
};

export const themeStyles: Record<ThemeColorKey, ThemeStyleConfig> = {
  peach: {
    name: 'Naranja Substack (Amber), Grises y Salvia Suave',
    primary: 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white shadow-sm',
    primaryHover: 'hover:bg-amber-700',
    primaryBorder: 'border-amber-500',
    primaryText: 'text-amber-600 dark:text-amber-400',
    primaryBgLight: 'bg-amber-50/90 dark:bg-amber-950/40',
    ring: 'focus:ring-amber-500',
    accentGradient: 'from-amber-600 to-amber-500',
    badge: 'bg-amber-100/90 text-amber-950 border border-amber-300 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-600 text-white',
    iconText: 'text-amber-600 dark:text-amber-400',
    cardBorderHighlight: 'border-amber-500 ring-2 ring-amber-400/25',
  },
  teal: {
    name: 'Verde Salvia & Gris Piedra con Acento Naranja',
    primary: 'bg-[#3b6e5a] hover:bg-[#2f5747] active:bg-[#213b30] text-white shadow-sm',
    primaryHover: 'hover:bg-[#2f5747]',
    primaryBorder: 'border-[#3b6e5a]',
    primaryText: 'text-[#3b6e5a] dark:text-[#9fc3b0]',
    primaryBgLight: 'bg-[#e2ede7]/90 dark:bg-[#213b30]/40',
    ring: 'focus:ring-[#3b6e5a]',
    accentGradient: 'from-[#3b6e5a] to-[#518770]',
    badge: 'bg-orange-100 text-orange-950 border border-orange-300 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-800',
    iconBg: 'bg-[#3b6e5a] text-white',
    iconText: 'text-[#3b6e5a] dark:text-[#9fc3b0]',
    cardBorderHighlight: 'border-[#3b6e5a] ring-2 ring-[#3b6e5a]/25',
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
    name: 'Oliva y Salvia Natural',
    primary: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm',
    primaryHover: 'hover:bg-emerald-800',
    primaryBorder: 'border-emerald-600',
    primaryText: 'text-emerald-800 dark:text-emerald-300',
    primaryBgLight: 'bg-emerald-50/90 dark:bg-emerald-950/40',
    ring: 'focus:ring-emerald-600',
    accentGradient: 'from-emerald-700 to-emerald-800',
    badge: 'bg-emerald-50 text-emerald-900 border border-emerald-200/90 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-700 text-white',
    iconText: 'text-emerald-700 dark:text-emerald-400',
    cardBorderHighlight: 'border-emerald-600 ring-2 ring-emerald-500/20',
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
