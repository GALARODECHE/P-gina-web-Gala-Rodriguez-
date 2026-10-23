import React from 'react';
import { Sparkles, ExternalLink, ShieldCheck, Smartphone, ArrowRight } from 'lucide-react';
import { themeStyles } from '../utils/theme';
import { NutritionistProfile } from '../types';
import tuNutriLensIconRaw from '../assets/images/tunutrilens_logo.svg';
import tuNutriLensBannerRaw from '../assets/images/TuNutriLens_Elemento_Grafico_Destacado_1024x500.png';

const tuNutriLensIcon = `${tuNutriLensIconRaw}?v=20260924_svg`;
const tuNutriLensBanner = `${tuNutriLensBannerRaw}?v=20260924_svg`;

interface TuNutriLensSectionProps {
  profile: NutritionistProfile;
  onOpenTuNutriLens: () => void;
}

export const TuNutriLensSection: React.FC<TuNutriLensSectionProps> = ({
  profile,
  onOpenTuNutriLens,
}) => {
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <section id="app-tunutrilens" className="py-14 sm:py-20 border-b border-black/5 dark:border-slate-800/80 bg-transparent transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-md p-6 sm:p-10 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge} inline-flex items-center gap-1.5`}>
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Innovación en Nutrición Digital</span>
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <img
                  src={tuNutriLensIcon}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/tunutrilens_logo.svg';
                  }}
                  alt="TuNutriLens Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl object-contain shadow-xs border border-emerald-300 dark:border-emerald-700"
                />
                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-[#3b6e5a] dark:text-[#9fc3b0] tracking-tight">
                    App TuNutriLens
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                    Tu nutricionista clínica en el bolsillo
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
                Herramienta clínica desarrollada para complementar tus sesiones: escanea etiquetas de alimentos, identifica alérgenos, interpreta tablas nutricionales complejas y detecta azúcares añadidos en segundos.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={onOpenTuNutriLens}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Probar App TuNutriLens</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://www.tunutrilens.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 border border-slate-300 dark:border-slate-600 transition-colors shadow-2xs"
                >
                  <span>Web Oficial (tunutrilens.es)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Banner Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={onOpenTuNutriLens}
                className="relative rounded-2xl overflow-hidden border border-slate-400 dark:border-slate-700 shadow-md group cursor-pointer max-w-sm"
              >
                <img
                  src={tuNutriLensBanner}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/tunutrilens_banner.png';
                  }}
                  alt="TuNutriLens Banner"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-slate-900/80 text-white font-bold text-xs shadow-lg backdrop-blur-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Abrir App
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
