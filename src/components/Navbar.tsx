import React, { useState } from 'react';
import { Menu, X, Settings, Moon, Sun, Apple, Calendar, ShieldCheck, Palette, Layout } from 'lucide-react';
import { NutritionistProfile, ThemeColorKey } from '../types';
import { BgThemeKey, themeStyles } from '../utils/theme';
import { ThemeColorPicker } from './ThemeColorPicker';

interface NavbarProps {
  profile: NutritionistProfile;
  onOpenCMS: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onBookClick: (serviceTitle?: string) => void;
  onSelectThemeColor?: (color: ThemeColorKey) => void;
  onSelectBgColor?: (bg: BgThemeKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenCMS,
  isDarkMode,
  onToggleDarkMode,
  onBookClick,
  onSelectThemeColor,
  onSelectBgColor,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = themeStyles[profile.themeColor || 'teal'];

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'tarifas', label: 'Tarifas & Servicios' },
    { id: 'apps', label: 'Mis Apps' },
    { id: 'blog', label: 'Blog & Substack' },
    { id: 'calculadora', label: 'Calculadora' },
    { id: 'redes', label: 'Redes & Comunidad' },
    { id: 'sobre-mi', label: 'Sobre Mí & CV' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            id="brand-logo-btn"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${theme.accentGradient} flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105`}>
              <Apple className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:opacity-90">
                  {profile.name}
                </span>
                <span className={`hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${theme.badge}`}>
                  <ShieldCheck className="w-3 h-3" />
                  <span>20+ Años Exp. Entornos Sanitarios</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                {profile.title}
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                id={`nav-link-${link.id}`}
                className="px-3 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Live Theme Color Switcher */}
            {onSelectThemeColor && (
              <ThemeColorPicker
                currentColor={profile.themeColor || 'teal'}
                currentBg={profile.bgTheme || 'default'}
                onSelectColor={onSelectThemeColor}
                onSelectBg={onSelectBgColor}
              />
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              id="theme-toggle-btn"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CMS Launcher */}
            <button
              onClick={onOpenCMS}
              id="open-cms-btn"
              className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all"
              title="Gestor de contenidos (Añadir/Editar posts, apps y servicios)"
            >
              <Settings className={`w-4 h-4 ${theme.primaryText}`} />
              <span className="hidden sm:inline font-bold">Gestor / Editar Web</span>
            </button>

            {/* Primary Booking CTA */}
            <button
              onClick={() => onBookClick()}
              id="header-book-cta"
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 ${theme.primary}`}
            >
              <Calendar className="w-4 h-4" />
              <span>Pedir Cita Online</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="xl:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
            </button>
          ))}
          <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800">
            {onSelectBgColor && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Color de Fondo de la Web:</span>
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { key: 'default', label: 'Neutro', bg: 'bg-slate-200' },
                    { key: 'pure-white', label: 'Blanco', bg: 'bg-white border border-slate-300' },
                    { key: 'warm-cream', label: 'Crema', bg: 'bg-[#f5f0e6]' },
                    { key: 'soft-mint', label: 'Salvia', bg: 'bg-[#e2f0e8]' },
                    { key: 'cool-sky', label: 'Hielo', bg: 'bg-[#e0f2fe]' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => {
                        onSelectBgColor(item.key as BgThemeKey);
                      }}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg text-[10px] font-bold transition-all ${
                        (profile.bgTheme || 'default') === item.key
                          ? 'bg-white dark:bg-slate-900 shadow-sm text-teal-700 dark:text-teal-300 ring-2 ring-teal-500'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${item.bg} mb-1 shadow-xs`} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {onSelectThemeColor && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Color de Botones y Destacados:</span>
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { key: 'teal', label: 'Teal', bg: 'bg-teal-600' },
                    { key: 'navy', label: 'Azul', bg: 'bg-sky-700' },
                    { key: 'slate', label: 'Gris', bg: 'bg-slate-700' },
                    { key: 'sage', label: 'Salvia', bg: 'bg-emerald-600' },
                    { key: 'amber', label: 'Cálido', bg: 'bg-amber-600' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => {
                        onSelectThemeColor(item.key as ThemeColorKey);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg text-[10px] font-bold transition-all ${
                        profile.themeColor === item.key
                          ? 'bg-white dark:bg-slate-900 shadow-sm text-slate-900 dark:text-white ring-2 ring-teal-500'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${item.bg} mb-1`} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                onOpenCMS();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              <Settings className={`w-4 h-4 ${theme.primaryText}`} />
              <span>Gestor de Contenidos (Editar Web)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
