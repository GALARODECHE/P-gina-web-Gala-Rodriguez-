import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Smartphone, BookOpen, Star, PhoneCall, Stethoscope } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface HeroProps {
  profile: NutritionistProfile;
  onExploreRates: () => void;
  onExploreApps: () => void;
  onBookFreeValuation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onExploreRates,
  onExploreApps,
  onBookFreeValuation,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/95">
      
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-20 dark:opacity-10 blur-3xl -z-10">
        <div className={`w-96 h-96 mx-auto rounded-full bg-gradient-to-tr ${theme.accentGradient}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm ${theme.badge} flex items-center gap-1.5`}>
                <Stethoscope className="w-4 h-4" />
                <span>+20 Años Exp. Entornos Sanitarios</span>
              </span>
              
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-indigo-500" />
                <span>Experta en Disfagia & Nutrición Enteral</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Nutrición Clínica Hospitalaria & <span className={`${theme.primaryText}`}>Apps E-Health</span>
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onExploreRates}
                id="hero-view-rates-btn"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95 ${theme.primary}`}
              >
                <span>Ver Servicios y Tarifas</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreApps}
                id="hero-view-apps-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all"
              >
                <Smartphone className="w-4 h-4 text-indigo-500" />
                <span>Ver Mis Apps</span>
              </button>
            </div>

            {/* Social Trust Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <a
                href={profile.substackUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Substack Newsletter</span>
              </a>

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs text-slate-600 dark:text-slate-400 ml-1 font-bold">20+ Años Experiencia Sanitaria</span>
              </div>
            </div>

          </div>

          {/* Profile Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Profile Card Frame */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xl p-6 overflow-hidden">
                
                {/* Photo & Identity */}
                <div className="flex items-center gap-4 pb-5 border-b border-slate-100 dark:border-slate-700/60">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-slate-200 dark:ring-slate-700 shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      {profile.title}
                    </p>
                    <span className={`inline-block mt-1 px-2.5 py-0.5 rounded text-[11px] font-bold ${theme.badge}`}>
                      {profile.colegiadorNumber}
                    </span>
                  </div>
                </div>

                {/* Combined Ecosystem Summary */}
                <div className="mt-5 space-y-3">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${theme.accentGradient} text-white shadow-md space-y-1.5`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                        Ecosistema Clínico & Digital
                      </span>
                      <Sparkles className="w-4 h-4 opacity-90" />
                    </div>
                    <p className="text-sm font-bold">Evidencia Científica & Reeducación</p>
                    <p className="text-xs text-white/90 leading-snug">
                      Consulta clínica online y prescripción nutricional asistida por aplicaciones web/móviles propias.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50">
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Entornos Sanitarios</p>
                      <p className={`text-base font-extrabold ${theme.primaryText} mt-0.5`}>+20 Años Exp.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50">
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Especialización</p>
                      <p className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5">Disfagia & Enteral</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-300 font-medium">Ubicación y Cobertura:</span>
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-[10px]">
                      Madrid, Cuenca, Ávila & Online
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/50 shadow-sm text-center sm:text-left">
            <p className={`text-2xl sm:text-3xl font-extrabold ${theme.primaryText}`}>+20 Años</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Entornos Sanitarios</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Nutrición enteral y disfagia</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/50 shadow-sm text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">4 Líderes</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Farmacéuticos / Nutrición</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Abbott, Danone Nutricia, Ordesa, Alter</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/50 shadow-sm text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400">Univ. Navarra</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Nutrición & Dietética</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">+ MBA Gestión Sanitaria</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/50 shadow-sm text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">3 Apps</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Desarrollo E-Health</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Herramientas propias de seguimiento</p>
          </div>
        </div>

      </div>
    </section>
  );
};
