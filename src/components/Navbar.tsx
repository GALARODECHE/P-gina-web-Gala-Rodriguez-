import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Calendar, ShieldCheck, Instagram, Facebook, BookOpen, MessageCircle, Globe, FileText, ExternalLink } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';
import tuNutriLensIcon from '../assets/images/TuNutriLens-App-Icon-512x512.png';

interface NavbarProps {
  profile: NutritionistProfile;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onBookClick: (serviceTitle?: string) => void;
  onOpenTuNutriLens?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  isDarkMode,
  onToggleDarkMode,
  onBookClick,
  onOpenTuNutriLens,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = themeStyles[profile.themeColor || 'teal'];

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'sesiones-online', label: 'Sesiones Online' },
    { id: 'talleres-formacion', label: 'Talleres y Formación' },
    { id: 'apps', label: 'TuNutriLens (App)' },
    { id: 'blog', label: 'Blog y Artículos' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'faq', label: 'Preguntas Frecuentes' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#2f5747] dark:bg-slate-900 border-b border-[#234336] dark:border-slate-800 transition-colors shadow-md text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-1.5 sm:gap-2">
          
          {/* Logo & Brand - Nombre profesional sin logo de la app al lado */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left focus:outline-none group min-w-0"
            id="brand-logo-btn"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shrink-0 shadow-xs group-hover:bg-white/25 transition-colors">
              GR
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-xs xs:text-sm sm:text-base lg:text-lg tracking-tight text-white group-hover:text-emerald-200 dark:text-[#9fc3b0] dark:group-hover:text-white block leading-tight truncate">
                <span className="xs:hidden">Gala R.</span>
                <span className="hidden xs:inline sm:hidden">Gala Rodríguez</span>
                <span className="hidden sm:inline">{profile.name}</span>
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs text-emerald-100/90 dark:text-slate-300 font-medium block leading-tight truncate">
                Nutrición Clínica Especializada
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                id={`nav-link-${link.id}`}
                className="px-3 py-2 rounded-lg text-xs font-bold text-white/90 dark:text-[#9fc3b0] hover:text-white dark:hover:text-white hover:bg-white/15 dark:hover:bg-[#3b6e5a]/20 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Tools - Scaled for mobile screens */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              id="theme-toggle-btn"
              className="p-1.5 xs:p-2 sm:p-2.5 rounded-xl text-white dark:text-slate-300 hover:bg-white/15 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label="Cambiar tema visual"
            >
              {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            {/* Direct Link to TuNutriLens modal with official icon */}
            {onOpenTuNutriLens ? (
              <button
                type="button"
                onClick={onOpenTuNutriLens}
                id="header-tunutrilens-btn"
                className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 border border-emerald-400/40 transition-all shadow-xs cursor-pointer"
                title="Abrir app TuNutriLens (con opción de retorno directo)"
              >
                <img
                  src={tuNutriLensIcon}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/TuNutriLens-App-Icon-512x512.png';
                  }}
                  alt="TuNutriLens App"
                  loading="eager"
                  className="w-4 h-4 rounded-md object-contain shrink-0 ring-1 ring-white/30"
                />
                <span>App TuNutriLens</span>
              </button>
            ) : (
              <a
                href="https://www.tunutrilens.es"
                target="_blank"
                rel="noopener noreferrer"
                id="header-tunutrilens-btn"
                className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 border border-emerald-400/40 transition-all shadow-xs cursor-pointer"
                title="Web oficial de la app TuNutriLens"
              >
                <img
                  src={tuNutriLensIcon}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/TuNutriLens-App-Icon-512x512.png';
                  }}
                  alt="TuNutriLens App"
                  loading="eager"
                  className="w-4 h-4 rounded-md object-contain shrink-0 ring-1 ring-white/30"
                />
                <span>App TuNutriLens</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            )}

            {/* Primary Booking CTA - Acento Naranja Substack (Amber) */}
            <button
              onClick={() => onBookClick()}
              id="header-book-cta"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-xs transition-all active:scale-95 whitespace-nowrap cursor-pointer hover:shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Pedir Cita<span className="hidden sm:inline"> Online</span></span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="xl:hidden p-1.5 xs:p-2 sm:p-2.5 rounded-xl text-white dark:text-[#9fc3b0] hover:bg-white/15 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-b border-[#234336] dark:border-slate-800 bg-[#27493c] dark:bg-slate-900 px-4 pt-2 pb-6 space-y-2 max-h-[calc(100vh-3.75rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-2">
          
          <div className="pt-1 pb-2 space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Pedir Cita Nutricional Online</span>
            </button>

            {onOpenTuNutriLens ? (
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTuNutriLens();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <img
                  src={tuNutriLensIcon}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/TuNutriLens-App-Icon-512x512.png';
                  }}
                  alt="TuNutriLens App"
                  loading="eager"
                  className="w-5 h-5 rounded-md object-contain shrink-0 ring-1 ring-white/30"
                />
                <span>Abrir App TuNutriLens</span>
              </button>
            ) : (
              <a
                href="https://www.tunutrilens.es"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <img
                  src={tuNutriLensIcon}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/TuNutriLens-App-Icon-512x512.png';
                  }}
                  alt="TuNutriLens App"
                  loading="eager"
                  className="w-5 h-5 rounded-md object-contain shrink-0 ring-1 ring-white/30"
                />
                <span>Web Oficial App: www.tunutrilens.es</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            )}
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white dark:text-[#9fc3b0] hover:bg-white/15 dark:hover:bg-[#3b6e5a]/20 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-300 dark:border-slate-800 flex items-center justify-around text-xs font-bold text-slate-700 dark:text-slate-300">
            <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-pink-600">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href={profile.substackUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-amber-600">
              <BookOpen className="w-4 h-4" /> Substack
            </a>
            <a href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-600">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
