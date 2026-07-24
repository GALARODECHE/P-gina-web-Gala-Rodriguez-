import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, Shield, Zap, Info } from 'lucide-react';
import { NutritionistProfile, NutritionService } from '../types';
import { themeStyles } from '../utils/theme';

interface RatesAndServicesProps {
  profile: NutritionistProfile;
  services: NutritionService[];
  onSelectPlan: (service: NutritionService) => void;
  onOpenCMS: () => void;
}

export const RatesAndServices: React.FC<RatesAndServicesProps> = ({
  profile,
  services,
  onSelectPlan,
  onOpenCMS,
}) => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const theme = themeStyles[profile.themeColor || 'teal'];

  return (
    <section id="tarifas" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            Tarifas & Servicios de Consulta Online
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Planes Diseñados con Rigor Clínico y Adherencia
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Sin permanencias ni ataduras. Acompañamiento especializado en reeducación nutricional, nutrición clínica y acceso completo a mis aplicaciones e-health.
          </p>

          {/* Button to toggle Pricing Strategy Study */}
          <div className="pt-2">
            <button
              onClick={() => setShowAnalysis(!showAnalysis)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-colors"
            >
              <Info className="w-4 h-4 text-sky-600" />
              <span>{showAnalysis ? 'Ocultar Análisis de Tarifas' : 'Ver Estudio Estratégico de Tarifas Recomendas'}</span>
            </button>
          </div>
        </div>

        {/* Strategic Analysis Box */}
        {showAnalysis && (
          <div className="mt-8 max-w-4xl mx-auto p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-lg space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold text-base">
              <Zap className="w-5 h-5" />
              <h3>Estructura Estratégica de Tarifas para Nutrición Clínica & Online</h3>
            </div>
            
            <p className="leading-relaxed">
              Estructura optimizada de consulta online dividida en 4 niveles estratégicos para maximizar la conversión y adherencia de los pacientes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white mb-1">1. Primera Consulta Clínica Especializada (85€)</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Valoración de alta especialización (disfagia, enteral, oncología) con estudio de analíticas, pauta médica y alta en apps. Refleja tu titulación por la Univ. de Navarra y +20 años de experiencia.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <p className={`font-bold ${theme.primaryText} mb-1`}>2. Programa Clínico 3 Meses (220€ / Maximiza Rentabilidad & Adherencia)</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Tratamiento de máxima adherencia (~73€/mes). Asegura un seguimiento de 12 semanas con 6 sesiones clínicas y soporte VIP por chat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white mb-1">3. Bono Seguimiento Mensual (55€ / mes)</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Supervisión continua con 2 revisiones mensuales + acceso activo e ilimitado a las Apps E-Health desarrolladas.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {services.map((service) => {
            const isPopular = service.isPopular;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-teal-50/90 via-white to-emerald-50/60 dark:from-slate-800 dark:to-slate-800 text-slate-900 dark:text-white shadow-xl border-2 border-teal-500 transform lg:-translate-y-2'
                    : 'bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-700/70 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-teal-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md border border-teal-400">
                    {service.popularBadge || 'RECOMENDADO'}
                  </div>
                )}

                <div>
                  {/* Category */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      isPopular
                        ? 'bg-teal-100 text-teal-800 border border-teal-300 dark:bg-teal-950 dark:text-teal-200'
                        : `${theme.badge}`
                    }`}>
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className={`text-xs mt-1 ${isPopular ? 'text-slate-600 dark:text-slate-300 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                    {service.subtitle}
                  </p>

                  {/* Price Banner */}
                  <div className="my-6 pb-6 border-b border-slate-200 dark:border-slate-700/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">{service.price}</span>
                      <span className={`text-xs font-medium ${isPopular ? 'text-slate-600 dark:text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                        / {service.period}
                      </span>
                    </div>
                    <p className={`text-xs mt-3 leading-relaxed ${isPopular ? 'text-slate-700 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-6">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      Lo que incluye:
                    </p>
                    <ul className="space-y-2.5 text-xs">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${
                            isPopular ? 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300' : `${theme.badge}`
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className={isPopular ? 'text-slate-800 dark:text-slate-200 font-medium' : 'text-slate-700 dark:text-slate-300'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(service)}
                    id={`select-plan-${service.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-teal-600 hover:bg-teal-700 text-white font-extrabold'
                        : `${theme.primary}`
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className={`text-[11px] text-center mt-3 line-clamp-2 ${isPopular ? 'text-slate-500 dark:text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    💡 Ideal para: {service.idealFor}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Additional Guarantee Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${theme.badge} flex-shrink-0`}>
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Rigor clínico hospitalario y transparencia profesional
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Acepto analíticas de sangre recientes y coordino con tu equipo médico especializado (Oncología, Nefrología, Medicina Interna, etc.).
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCMS}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors flex-shrink-0"
          >
            Editar Tarifas en Gestor
          </button>
        </div>

      </div>
    </section>
  );
};
