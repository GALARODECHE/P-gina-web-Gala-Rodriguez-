import React, { useState } from 'react';
import { Smartphone, Star, ExternalLink, CheckCircle, Calculator, ChefHat, HeartPulse, Sparkles, Download, Eye, Stethoscope, Clock, ShieldCheck } from 'lucide-react';
import { NutritionApp, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface AppsSectionProps {
  profile: NutritionistProfile;
  apps: NutritionApp[];
  onOpenCMS: () => void;
}

const getAppIcon = (iconName: string) => {
  switch (iconName) {
    case 'Stethoscope':
      return <Stethoscope className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    case 'Eye':
      return <Eye className="w-6 h-6 text-teal-500" />;
    case 'Calculator':
      return <Calculator className="w-6 h-6 text-indigo-500" />;
    case 'ChefHat':
      return <ChefHat className="w-6 h-6 text-amber-500" />;
    case 'HeartPulse':
      return <HeartPulse className="w-6 h-6 text-rose-500" />;
    default:
      return <Smartphone className="w-6 h-6 text-emerald-500" />;
  }
};

export const AppsSection: React.FC<AppsSectionProps> = ({
  profile,
  apps,
  onOpenCMS,
}) => {
  const [selectedApp, setSelectedApp] = useState<NutritionApp | null>(apps[0] || null);
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <section id="apps" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <Smartphone className="w-3.5 h-3.5" />
            <span>Innovación & E-Health</span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight">
            Herramientas Digitales & Apps Clínicas
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Desarrollo aplicaciones especializadas para facilitar el seguimiento dietético, cálculo nutricional y adherencia de mis pacientes en consulta.
          </p>
        </div>

        {/* Apps Showcase Grid & Active Featured Display */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* App Select Cards (List) */}
          <div className="lg:col-span-5 space-y-3.5">
            <p className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Selecciona una aplicación para ver detalles:
            </p>

            {apps.map((app) => {
              const isSelected = selectedApp?.id === app.id;
              return (
                <div
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? `bg-white dark:bg-slate-800 ${theme.primaryBorder} shadow-sm ring-1 ${theme.ring}`
                      : 'bg-white dark:bg-slate-800/80 border-stone-200 dark:border-slate-700/80 hover:border-stone-300 dark:hover:border-slate-600 shadow-xs'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${theme.badge} shadow-xs flex-shrink-0`}>
                    {getAppIcon(app.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-slate-700 dark:text-slate-200 truncate text-base">
                        {app.name}
                      </h3>
                      {app.rating && (
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold flex-shrink-0">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{app.rating}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                      {app.tagline}
                    </p>

                    <div className="flex items-center gap-2 mt-2.5 text-[11px] text-slate-600 dark:text-slate-300 font-semibold">
                      <span>{app.usersCount || '+10,000 usuarios'}</span>
                      <span>•</span>
                      <span className={`${theme.primaryText}`}>Explorar Detalles</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onOpenCMS}
                className="w-full py-2.5 px-4 rounded-xl border border-dashed border-stone-300 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
              >
                + Añadir / Modificar Aplicaciones en el Gestor
              </button>
            </div>
          </div>

          {/* Active Selected App Detailed View */}
          {selectedApp && (
            <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-sm p-6 sm:p-7 space-y-6">
              
              {/* Top Banner */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 shadow-xs">
                <img
                  src={selectedApp.imageUrl}
                  alt={selectedApp.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${theme.badge}`}>
                      App Clínica
                    </span>
                    <span className="text-xs text-stone-300">{selectedApp.usersCount}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold">{selectedApp.name}</h3>
                  <p className="text-xs text-stone-200 line-clamp-1">{selectedApp.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                  Objetivo Clínico
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedApp.fullDescription || selectedApp.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                  Funcionalidades Principales:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedApp.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-slate-700">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tecnologías e Integraciones:</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedApp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Store Action Links or Development Status */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedApp.appStoreUrl ? (
                    <a
                      href={selectedApp.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>App Store</span>
                    </a>
                  ) : null}

                  {selectedApp.playStoreUrl ? (
                    <a
                      href={selectedApp.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Google Play</span>
                    </a>
                  ) : null}

                  {!selectedApp.appStoreUrl && !selectedApp.playStoreUrl && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200 text-xs font-bold shadow-xs">
                      <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>En fase de desarrollo activo · Próximamente disponible</span>
                    </div>
                  )}
                </div>

                <div className={`p-2.5 px-3 rounded-xl ${theme.badge} text-xs font-medium flex items-center gap-2`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Plataforma e-health para consulta clínica</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
