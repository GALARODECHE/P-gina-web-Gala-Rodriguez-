import React, { useState } from 'react';
import { Smartphone, Star, ExternalLink, CheckCircle, Calculator, ChefHat, HeartPulse, Sparkles, Download, Eye } from 'lucide-react';
import { NutritionApp, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface AppsSectionProps {
  profile: NutritionistProfile;
  apps: NutritionApp[];
  onOpenCMS: () => void;
}

const getAppIcon = (iconName: string) => {
  switch (iconName) {
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
  const theme = themeStyles[profile.themeColor || 'emerald'];

  return (
    <section id="apps" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/70 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            <Smartphone className="w-4 h-4 text-indigo-500" />
            <span>Innovación & E-Health</span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Aplicaciones Nutricionales Desarrolladas
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Diseño mis propias herramientas móviles y web para poner la ciencia de la nutrición al alcance de tus manos. Gratis para todos mis pacientes en consulta.
          </p>
        </div>

        {/* Apps Showcase Grid & Active Featured Display */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* App Select Cards (List) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Haz clic en una app para explorar sus funciones:
            </p>

            {apps.map((app) => {
              const isSelected = selectedApp?.id === app.id;
              return (
                <div
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 border-indigo-500 shadow-xl ring-2 ring-indigo-500/20'
                      : 'bg-white/70 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md'
                  }`}
                >
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 shadow-sm flex-shrink-0">
                    {getAppIcon(app.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-slate-900 dark:text-white truncate text-base">
                        {app.name}
                      </h3>
                      {app.rating && (
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold flex-shrink-0">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{app.rating}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                      {app.tagline}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                      <span>{app.usersCount || '+10,000 usuarios'}</span>
                      <span>•</span>
                      <span>Ver Detalles</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onOpenCMS}
                className="w-full py-2.5 px-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                + Añadir / Editar Aplicación en Gestor
              </button>
            </div>
          </div>

          {/* Active Selected App Detailed View */}
          {selectedApp && (
            <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
              
              {/* Top Banner */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-md">
                <img
                  src={selectedApp.imageUrl}
                  alt={selectedApp.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider">
                      App Destacada
                    </span>
                    <span className="text-xs text-slate-300">{selectedApp.usersCount}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold">{selectedApp.name}</h3>
                  <p className="text-xs text-slate-200 line-clamp-1">{selectedApp.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  ¿Qué resuelve esta aplicación?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedApp.fullDescription || selectedApp.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Funcionalidades Principales:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedApp.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                <p className="text-xs font-semibold text-slate-400">Tecnologías de Desarrollo:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedApp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Store Action Links */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedApp.appStoreUrl && (
                    <a
                      href={selectedApp.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>App Store</span>
                    </a>
                  )}

                  {selectedApp.playStoreUrl && (
                    <a
                      href={selectedApp.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Google Play</span>
                    </a>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>Incluido gratis en la consulta online</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
