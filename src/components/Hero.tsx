import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Smartphone, BookOpen, Star, Stethoscope, Award, CheckCircle2, Globe, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface HeroProps {
  profile: NutritionistProfile;
  onExploreRates: () => void;
  onExploreApps: () => void;
  onExploreInstitutions?: () => void;
  onBookFreeValuation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onExploreRates,
  onExploreApps,
  onExploreInstitutions,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-stone-200/80 dark:border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clinical & Academic Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide ${theme.badge} inline-flex items-center gap-1.5 shadow-sm`}>
                <Stethoscope className="w-3.5 h-3.5" />
                <span>+20 Años en Entornos Sanitarios</span>
              </span>
              
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Diplomada Univ. de Navarra</span>
              </span>

              <a
                href="https://www.galarodrigueznutricion.es"
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 inline-flex items-center gap-1.5 hover:bg-teal-100 dark:hover:bg-teal-900/80 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>www.galarodrigueznutricion.es</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-700 dark:text-slate-200 leading-[1.15]">
              Nutrición Clínica Especializada y{' '}
              <span className={`${theme.primaryText}`}>Soluciones E-Health</span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {profile.bio}
            </p>

            {/* Key Clinical Focus Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Salud de la Mujer
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Disfagia y Nutrición Enteral
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Oncología Médica
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Consulta 100% Online
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreRates}
                id="hero-view-rates-btn"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all transform active:scale-95 ${theme.primary}`}
              >
                <span>Servicios y Consulta Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreApps}
                id="hero-view-apps-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-stone-200 dark:border-slate-800 bg-white/70 dark:bg-slate-800/70 hover:bg-stone-50 dark:hover:bg-slate-750 transition-all shadow-sm"
              >
                <Smartphone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>App TuNutriLens</span>
              </button>
            </div>

            {/* Social Trust Footer with direct verified channels */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-600 transition-colors font-semibold text-slate-700 dark:text-slate-300"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Instagram (@galanutricion)</span>
              </a>

              <a
                href={profile.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-600 transition-colors font-semibold text-slate-700 dark:text-slate-300"
              >
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Substack Newsletter</span>
              </a>

              <a
                href={profile.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-semibold text-slate-700 dark:text-slate-300"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Facebook</span>
              </a>

              <div className="flex items-center gap-1 text-amber-500 pl-2 border-l border-stone-300 dark:border-slate-700">
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
              
              {/* Profile Card Frame */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-800/95 border border-stone-200 dark:border-slate-700 shadow-md p-6 sm:p-7 space-y-6">
                
                {/* Photo & Identity */}
                <div className="flex items-center gap-4 pb-5 border-b border-stone-100 dark:border-slate-700/60">
                  <div className="relative group shrink-0">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-3 ring-teal-500/30 dark:ring-teal-400/30 shadow-md transition-transform group-hover:scale-105"
                    />
                    <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-800 z-10" title="Consulta Online Disponible" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                      {profile.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${theme.badge}`}>
                        {profile.colegiadorNumber}
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700">
                        www.galarodrigueznutricion.es
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                        Ecosistema Clínico y Digital
                      </span>
                      <span className="text-[10px] uppercase font-bold text-stone-500 dark:text-slate-400">
                        {profile.location || 'Online'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-0.5">
                      Consulta clínica individualizada online con soporte de aplicaciones desarrolladas específicamente para el seguimiento del paciente.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-700/60">
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-[11px]">Experiencia</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-0.5">+20 Años</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-700/60">
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-[11px]">Modalidad</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-0.5">100% Online</p>
                    </div>
                  </div>

                  {/* Direct Contact Buttons inside Card */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-100 dark:border-slate-700/60 text-xs">
                    <a
                      href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-center font-bold flex items-center justify-center gap-1.5 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Directo</span>
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex-1 py-2 px-3 rounded-xl bg-stone-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-stone-200 dark:border-slate-700 text-center font-bold flex items-center justify-center gap-1.5 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <span>{profile.email}</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-stone-200/80 dark:border-slate-800/80">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left">
            <p className={`text-xl sm:text-2xl font-extrabold ${theme.primaryText}`}>
              {profile.stat1Number || '+20 Años'}
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-0.5">
              {profile.stat1Label || 'Entornos Sanitarios'}
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              {profile.stat1Subtext || 'Nutrición enteral y disfagia'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-extrabold text-slate-700 dark:text-slate-200">
              {profile.stat2Number || 'Multinacionales'}
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-0.5">
              {profile.stat2Label || 'Empresas Sanitarias'}
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              {profile.stat2Subtext || 'ALTER, Danone Nutricia, Ordesa, Abbott'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-extrabold text-slate-700 dark:text-slate-200">
              {profile.stat3Number || 'Univ. Navarra'}
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-0.5">
              {profile.stat3Label || 'Nutrición y Dietética'}
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              {profile.stat3Subtext || 'Diplomada por la Univ. de Navarra'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200/90 dark:border-slate-700/60 shadow-xs text-center sm:text-left">
            <p className={`text-xl sm:text-2xl font-extrabold ${theme.primaryText}`}>
              TuNutriLens
            </p>
            <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mt-0.5">
              Innovación E-Health
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              App clínica propia para pacientes
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
