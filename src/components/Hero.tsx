import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Smartphone, BookOpen, Star, Stethoscope, Award, CheckCircle2, Globe, Instagram, Facebook, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';
import tuNutriLensIcon from '../assets/images/tunutrilens_logo.svg';

interface HeroProps {
  profile: NutritionistProfile;
  onExploreRates: () => void;
  onExploreApps: () => void;
  onExploreInstitutions?: () => void;
  onBookFreeValuation: () => void;
  onOpenTuNutriLens?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onExploreRates,
  onExploreApps,
  onExploreInstitutions,
  onBookFreeValuation,
  onOpenTuNutriLens,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-12 sm:pt-14 sm:pb-20 border-b border-black/5 dark:border-slate-800/80 bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Clinical & Academic Badges - Melocotón and Light Green */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-orange-100 text-orange-950 border border-orange-300 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-800 inline-flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>+20 Años en Entornos Sanitarios</span>
              </span>
              
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/90 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800 inline-flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Colegiada CV02386</span>
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100/80 text-orange-900 border border-orange-300/80 dark:bg-orange-950/60 dark:text-orange-200 dark:border-orange-800/80 inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 shrink-0" />
                <span>Univ. de Navarra</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#3b6e5a] dark:text-[#9fc3b0] leading-[1.2] sm:leading-[1.15]">
              Nutrición Clínica Especializada
            </h1>

            {/* Subtitle / Bio - Clear readability */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {profile.bio}
            </p>

            {/* Key Clinical Focus Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 font-medium">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800/90 border border-slate-400 dark:border-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Salud de la Mujer</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800/90 border border-slate-400 dark:border-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Disfagia y Nutrición Enteral</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800/90 border border-slate-400 dark:border-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Oncología Médica</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800/90 border border-slate-400 dark:border-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Consulta Online y Formación</span>
              </span>
            </div>

            {/* Action Buttons - Coherent: 1. Sesiones Online (Naranja Substack), 2. Talleres (Verde Salvia), 3. App */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={onExploreRates}
                id="hero-view-rates-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
              >
                <span>1. Sesiones Nutricionales Online</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {onExploreInstitutions && (
                <button
                  onClick={onExploreInstitutions}
                  id="hero-view-talks-btn"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base text-[#1f4a3b] dark:text-[#9fc3b0] bg-[#e2ede7]/90 hover:bg-[#d5e5dc] dark:bg-[#213b30]/60 dark:hover:bg-[#213b30] border border-[#3b6e5a]/50 dark:border-[#3b6e5a]/60 transition-all shadow-2xs cursor-pointer"
                >
                  <span>2. Talleres y Formación</span>
                </button>
              )}

              {onOpenTuNutriLens ? (
                <button
                  type="button"
                  onClick={onOpenTuNutriLens}
                  id="hero-view-apps-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base bg-emerald-50 hover:bg-emerald-100 text-emerald-950 dark:bg-emerald-950/70 dark:hover:bg-emerald-900/80 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                  title="TuNutriLens: Tu Nutricionista de bolsillo"
                >
                  <img
                    src={`${tuNutriLensIcon}?v=20260924_svg`}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/tunutrilens_logo.svg';
                    }}
                    alt="TuNutriLens"
                    loading="eager"
                    className="w-5 h-5 rounded-md object-contain shrink-0 ring-1 ring-emerald-500/40"
                  />
                  <span>App TuNutriLens</span>
                </button>
              ) : (
                <a
                  href="https://www.tunutrilens.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-view-apps-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base bg-emerald-50 hover:bg-emerald-100 text-emerald-950 dark:bg-emerald-950/70 dark:hover:bg-emerald-900/80 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                >
                  <img
                    src={`${tuNutriLensIcon}?v=20260924_svg`}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/tunutrilens_logo.svg';
                    }}
                    alt="TuNutriLens"
                    loading="eager"
                    className="w-5 h-5 rounded-md object-contain shrink-0 ring-1 ring-emerald-500/40"
                  />
                  <span>App TuNutriLens</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
            </div>

            {/* Social Trust Footer with direct verified channels */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-xs text-slate-500 dark:text-slate-400">
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-600 transition-colors font-semibold text-slate-700 dark:text-slate-300"
              >
                <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Instagram (@galanutricion)</span>
              </a>

              <a
                href={profile.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-600 transition-colors font-semibold text-slate-700 dark:text-slate-300"
              >
                <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Substack Newsletter</span>
              </a>

              <a
                href={profile.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-semibold text-slate-700 dark:text-slate-300"
              >
                <Facebook className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Facebook</span>
              </a>

              <div className="flex items-center gap-1 text-amber-500 sm:pl-2 sm:border-l border-stone-300 dark:border-slate-700">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs text-slate-700 dark:text-slate-300 ml-1 font-bold">Consulta Oficial</span>
              </div>
            </div>

          </div>

          {/* Profile Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Profile Card Frame - Responsive padding and sizing */}
              <div className="relative rounded-3xl bg-slate-200 dark:bg-slate-800/95 border border-slate-400 dark:border-slate-700 shadow-md p-4 sm:p-7 space-y-4 sm:space-y-6">
                
                {/* Identity without app logo next to her name */}
                <div className="pb-4 border-b border-slate-300 dark:border-slate-700/60 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#3b6e5a]/15 text-[#213b30] dark:bg-[#9fc3b0]/20 dark:text-[#9fc3b0] border border-[#3b6e5a]/30">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Consulta Sanitaria Oficial</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-emerald-100 text-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Online Disponible</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#3b6e5a] dark:text-[#9fc3b0] leading-tight">
                      {profile.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mt-1 leading-snug">
                      {profile.title}
                    </p>
                  </div>

                  <div className="pt-0.5 flex flex-wrap items-center gap-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-orange-100 text-orange-950 border border-orange-300 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-800">
                      {profile.colegiadorNumber}
                    </span>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="space-y-3">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/60 border border-slate-400/80 dark:border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        Atención Clínica 1 a 1
                      </span>
                      <span className="text-[10px] uppercase font-bold text-orange-600 dark:text-orange-400">
                        {profile.location || 'Online'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                      Videollamada directa, confidencial y plan nutricional individualizado adaptado a tus analíticas y estilo de vida.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-300 dark:bg-slate-900/60 border border-slate-400/80 dark:border-slate-700/60">
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-[11px]">Pacientes</p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">Consulta Online</p>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-300 dark:bg-slate-900/60 border border-slate-400/80 dark:border-slate-700/60">
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-[11px]">Entidades</p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 leading-snug">
                        Talleres y Formación
                      </p>
                    </div>
                  </div>

                  {/* Direct Contact Buttons inside Card */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-300 dark:border-slate-700/60 text-xs">
                    <a
                      href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-center font-bold flex items-center justify-center gap-1.5 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex-1 py-2 px-2.5 rounded-xl bg-slate-300 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-400 dark:border-slate-700 text-center font-bold flex items-center justify-center gap-1.5 hover:bg-slate-400/50 dark:hover:bg-slate-800 transition-colors min-w-0"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate xs:hidden">Email</span>
                      <span className="hidden xs:inline truncate">{profile.email}</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-6 sm:pt-8 border-t border-slate-400/80 dark:border-slate-800/80">
          <div className="p-3 xs:p-4 sm:p-5 rounded-2xl bg-slate-200 dark:bg-slate-800/90 border border-slate-400/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left min-w-0">
            <p className={`text-base xs:text-lg sm:text-2xl font-extrabold ${theme.primaryText} truncate`}>
              {profile.stat1Number || '+20 Años'}
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
              {profile.stat1Label || 'Entornos Sanitarios'}
            </p>
            <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
              {profile.stat1Subtext || 'Nutrición enteral y disfagia'}
            </p>
          </div>

          <div className="p-3 xs:p-4 sm:p-5 rounded-2xl bg-slate-200 dark:bg-slate-800/90 border border-slate-400/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left min-w-0">
            <p className="text-base xs:text-lg sm:text-2xl font-extrabold text-slate-800 dark:text-slate-200 truncate">
              {profile.stat2Number || 'Multinacionales'}
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
              {profile.stat2Label || 'Empresas Sanitarias'}
            </p>
            <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
              {profile.stat2Subtext || 'Danone Nutricia, Ordesa, Abbott'}
            </p>
          </div>

          <div className="p-3 xs:p-4 sm:p-5 rounded-2xl bg-slate-200 dark:bg-slate-800/90 border border-slate-400/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left min-w-0">
            <p className="text-base xs:text-lg sm:text-2xl font-extrabold text-slate-800 dark:text-slate-200 truncate">
              {profile.stat3Number || 'Univ. Navarra'}
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
              {profile.stat3Label || 'Nutrición y Dietética'}
            </p>
            <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
              {profile.stat3Subtext || 'Diplomada por la Univ. de Navarra'}
            </p>
          </div>

          <div className="p-3 xs:p-4 sm:p-5 rounded-2xl bg-slate-200 dark:bg-slate-800/90 border border-slate-400/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left min-w-0">
            <p className={`text-base xs:text-lg sm:text-2xl font-extrabold ${theme.primaryText} truncate`}>
              {profile.stat4Number || '100% A Medida'}
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
              {profile.stat4Label || 'Pautas Clínicas'}
            </p>
            <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
              {profile.stat4Subtext || 'Entrega individualizada en <48h'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
