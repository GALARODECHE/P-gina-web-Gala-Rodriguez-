import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Star, Award, CheckCircle2, Instagram, MessageCircle, BookOpen } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

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
              Acompañamiento clínico integral y personalizado basado en la evidencia científica para optimizar tu salud, abordar patologías complejas y consolidar hábitos sostenibles.
            </p>

            {/* Action Buttons: 1. Naranja (Reserva), 2. Secundario WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={onExploreRates}
                id="hero-reserve-cta-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
              >
                <span>Reserva tu primera consulta</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base text-emerald-800 dark:text-emerald-200 bg-white hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-emerald-300 dark:border-emerald-700 transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Escríbeme por WhatsApp</span>
              </a>
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
                <span>Substack</span>
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
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-xl shadow-stone-900/5 p-5 sm:p-7 space-y-4 sm:space-y-6">
                
                {/* Identity header */}
                <div className="pb-4 border-b border-stone-200 dark:border-slate-800 space-y-2.5">
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

                {/* Clinical Consultation Highlights & Actions */}
                <div className="space-y-3 pt-1">
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Atención clínica 1 a 1 personalizada por videollamada</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Plan adaptado a tus analíticas, estilo de vida y objetivos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Sin dietas restrictivas ni soluciones milagro</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-200 dark:border-slate-800 space-y-2.5">
                    <button
                      onClick={onExploreRates}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Reserva tu consulta</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 text-center font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Escríbeme por WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
