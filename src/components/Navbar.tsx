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
    { id: 'tarifas', label: 'Servicios y Consulta' },
    { id: 'instituciones', label: 'Instituciones y Charlas' },
    { id: 'apps', label: 'TuNutriLens (App)' },
    { id: 'blog', label: 'Blog y Substack' },
    { id: 'faq', label: 'Preguntas Frecuentes' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            id="brand-logo-btn"
          >
            <div className="relative shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-stone-200 dark:ring-slate-700 shadow-sm transition-transform group-hover:scale-105"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" title="Disponible para Consulta" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-800 dark:text-slate-100 group-hover:opacity-90 block leading-tight">
                {profile.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
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
                className="px-3 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              id="theme-toggle-btn"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
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
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around text-xs font-bold text-slate-600 dark:text-slate-300">
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
