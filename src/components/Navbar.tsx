import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Calendar, ShieldCheck, Instagram, Facebook, BookOpen, MessageCircle, Globe } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface NavbarProps {
  profile: NutritionistProfile;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onBookClick: (serviceTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  isDarkMode,
  onToggleDarkMode,
  onBookClick,
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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-200/95 dark:bg-slate-900/95 border-b border-slate-400/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-1.5 sm:gap-2">
          
          {/* Logo & Brand - Mobile optimized without overflowing */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group min-w-0"
            id="brand-logo-btn"
          >
            <div className="relative shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-8 h-8 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-slate-400 dark:ring-slate-700 shadow-xs transition-transform group-hover:scale-105"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 ring-2 ring-slate-200 dark:ring-slate-900" title="Disponible para Consulta" />
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-xs xs:text-sm sm:text-base lg:text-lg tracking-tight text-slate-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 block leading-tight truncate">
                <span className="xs:hidden">Gala R.</span>
                <span className="hidden xs:inline sm:hidden">Gala Rodríguez</span>
                <span className="hidden sm:inline">{profile.name}</span>
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs text-orange-600 dark:text-orange-400 font-bold block leading-tight truncate">
                Nutrición Clínica
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
                className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-800/80 transition-colors"
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
              className="p-1.5 xs:p-2 sm:p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label="Cambiar tema visual"
            >
              {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            {/* Primary Booking CTA - Acento Naranja Substack (Amber) */}
            <button
              onClick={() => onBookClick()}
              id="header-book-cta"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white shadow-xs transition-all active:scale-95 whitespace-nowrap cursor-pointer hover:shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Pedir Cita<span className="hidden sm:inline"> Online</span></span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="xl:hidden p-1.5 xs:p-2 sm:p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-400 dark:border-slate-800 bg-slate-200 dark:bg-slate-900 px-4 pt-2 pb-6 space-y-2 max-h-[calc(100vh-3.75rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-2">
          
          <div className="pt-1 pb-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Pedir Cita Nutricional Online</span>
            </button>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
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
