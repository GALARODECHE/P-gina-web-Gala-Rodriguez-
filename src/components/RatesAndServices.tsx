import React, { useState } from 'react';
import { Check, ArrowRight, Shield, ShieldCheck, BadgePercent, Sparkles } from 'lucide-react';
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
  const theme = themeStyles[profile.themeColor || 'teal'];
  const [billingCycle, setBillingCycle] = useState<'standard' | 'annual'>('standard');

  return (
    <section id="tarifas" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            Tarifas & Servicios de Consulta Online
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight">
            Consulta Nutricional Online
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Análisis clínico exhaustivo por videollamada (1 a 1). Estudio minucioso de analíticas recientes, medicación, soporte enteral y diseño de pauta 100% individualizada.
          </p>
        </div>

        {/* 15% Annual Discount Billing Toggle */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-3">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-inner">
            <button
              onClick={() => setBillingCycle('standard')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'standard'
                  ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Modalidad Estándar
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BadgePercent className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Suscripción Anual (-15% Dto.)</span>
            </button>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-md">
            {billingCycle === 'annual' ? (
              <span className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Descuento del 15% aplicado en todas las modalidades con compromiso anual
              </span>
            ) : (
              'Selecciona suscripción anual para disfrutar de un 15% de descuento en el programa completo y consultas.'
            )}
          </p>
        </div>

        {/* Annual Subscription and Sessions Explanatory Guide Box */}
        <div className="mt-8 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="font-bold text-slate-900 dark:text-amber-200 text-sm sm:text-base">
                Estructura de Sesiones y Condiciones del Plan de Fidelización Anual
              </p>
              <p className="leading-relaxed">
                <strong>• Programa Clínico Completo (500€):</strong> Incluye <strong>6 Sesiones Clínicas Individuales</strong> (1ª Consulta diagnóstica de 60 min + 5 Consultas de seguimiento de 30-40 min) para realizar a lo largo de 3 a 6 meses con contacto directo y resolución de dudas entre sesiones.
              </p>
              <p className="leading-relaxed">
                <strong>• ¿Cómo funciona el Plan Anual con -15% Dto. y Permanencia de 1 Año?</strong> Diseñado para pacientes crónicos (disfagia persistente, oncología en tratamiento activo, soporte enteral prolongado) que requieren atención nutricional continua. Al acogerse a la tarifa reducida con descuento del 15%, <strong>se formaliza un compromiso de permanencia mínima de 12 meses (pago único anual o domiciliación mensual con contrato anual)</strong>, garantizando la reserva de agenda, revisiones periódicas y tarifa protegida durante todo el ejercicio sin riesgo de cancelaciones imprevistas.
              </p>
              <div className="pt-2 border-t border-amber-200/70 dark:border-amber-800/50 flex items-center gap-2 text-[11px] sm:text-xs text-amber-900 dark:text-amber-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
                <span>Garantía de fidelización: Pago por adelantado del bono anual o suscripción mensual con contrato de 12 meses de permanencia mínima.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
          {services.map((service) => {
            const isPopular = service.isPopular;
            const isAnnual = billingCycle === 'annual';
            const displayPrice = isAnnual && service.annualPrice ? service.annualPrice : service.price;
            const displayPeriod = isAnnual && service.annualPeriod ? service.annualPeriod : service.period;

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl flex flex-col justify-between p-6 sm:p-7 transition-all duration-200 ${
                  isPopular
                    ? `bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md border-2 ${theme.primaryBorder} transform lg:-translate-y-1.5`
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-stone-200 dark:border-slate-700/80 shadow-xs hover:border-stone-300'
                }`}
              >
                {/* Popular / Discount Badge */}
                {isPopular ? (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full ${theme.primary} text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1`}>
                    <span>{service.popularBadge || 'PROGRAMA COMPLETO'}</span>
                  </div>
                ) : isAnnual ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    -15% DTO. ANUAL
                  </div>
                ) : null}

                <div>
                  {/* Category & Discount pill */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      isPopular
                        ? `${theme.badge}`
                        : 'bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {service.category}
                    </span>

                    {isAnnual && service.annualDiscount && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {service.annualDiscount}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200">{service.title}</h3>
                  <p className="text-xs mt-1 text-slate-500 dark:text-slate-400 font-medium">
                    {service.subtitle}
                  </p>

                  {/* Price Banner */}
                  <div className="my-5 pb-5 border-b border-stone-100 dark:border-slate-700/50">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-700 dark:text-slate-200">
                        {displayPrice}
                      </span>
                      {isAnnual && service.annualPrice && (
                        <span className="text-sm line-through text-slate-400 dark:text-slate-500 font-medium">
                          {service.price}
                        </span>
                      )}
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        / {displayPeriod}
                      </span>
                    </div>
                    <p className="text-xs mt-2.5 leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      Lo que incluye:
                    </p>
                    <ul className="space-y-2.5 text-xs">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${theme.badge}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">
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
                    onClick={() => onSelectPlan({
                      ...service,
                      price: displayPrice,
                      period: displayPeriod,
                    })}
                    id={`select-plan-${service.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-95 flex items-center justify-center gap-2 ${
                      isPopular
                        ? `${theme.primary}`
                        : 'bg-stone-900 hover:bg-black text-white dark:bg-white dark:text-slate-900 dark:hover:bg-stone-100'
                    }`}
                  >
                    <span>
                      {isAnnual
                        ? `Contratar con 15% Dto. (${displayPrice})`
                        : `${service.ctaText} (${displayPrice})`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center mt-3 text-slate-500 dark:text-slate-400 line-clamp-2">
                    Ideal para: {service.idealFor}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Additional Guarantee Notice */}
        <div className="mt-12 p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-stone-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className={`p-3 rounded-2xl ${theme.badge} flex-shrink-0`}>
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Rigor clínico hospitalario y transparencia profesional
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Revisión integral de informes médicos y analíticas previas antes de cada pauta personalizada.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCMS}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-slate-700 border border-stone-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-stone-200 transition-colors flex-shrink-0"
          >
            Editar Tarifas en Gestor
          </button>
        </div>

      </div>
    </section>
  );
};
