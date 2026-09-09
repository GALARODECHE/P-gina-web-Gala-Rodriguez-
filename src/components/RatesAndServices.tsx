import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Calendar,
  MessageCircle,
  Activity,
  HeartHandshake,
  Video,
  Clock,
  CheckCircle2,
  Mail,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import { NutritionistProfile, NutritionService } from '../types';
import { themeStyles } from '../utils/theme';

interface RatesAndServicesProps {
  profile: NutritionistProfile;
  services: NutritionService[];
  onSelectPlan: (service: NutritionService) => void;
  onOpenInfographic?: () => void;
}

export const RatesAndServices: React.FC<RatesAndServicesProps> = ({
  profile,
  services,
  onSelectPlan,
}) => {
  const [selectedProgramTier, setSelectedProgramTier] = useState<'3m' | '6m' | '1y'>('3m');

  const theme = themeStyles[profile.themeColor || 'teal'];

  const clinicalSteps = [
    {
      icon: Calendar,
      step: '01',
      title: 'Reserva de Cita Online',
      desc: 'Eliges la modalidad de consulta y solicitas tu cita online coordinando día y hora según tu disponibilidad.',
    },
    {
      icon: Video,
      step: '02',
      title: 'Videollamada 1 a 1 (60 min)',
      desc: 'Sesión clínica directa y confidencial donde evaluamos tu historial médico, hábitos, analíticas, síntomas y metas.',
    },
    {
      icon: Activity,
      step: '03',
      title: 'Pauta personalizada (<48h)',
      desc: 'Recibes tu plan nutricional individualizado y adaptado a tus horarios, recetas prácticas y recomendaciones.',
    },
    {
      icon: HeartHandshake,
      step: '04',
      title: 'Soporte y acompañamiento',
      desc: 'Resolución de dudas por email y consultas periódicas de evolución para consolidar cambios sostenibles.',
    },
  ];

  const clinicalAreas = [
    {
      title: 'Salud de la Mujer y Hormonal',
      desc: 'Abordaje integral en perimenopausia, menopausia, síndrome de ovario poliquístico (SOP), fertilidad y salud tiroidea.',
    },
    {
      title: 'Disfagia y Nutrición Enteral',
      desc: 'Adaptación de texturas seguras (protocolo IDDSI), prevención de atragantamientos y enriquecimiento natural contra la desnutrición.',
    },
    {
      title: 'Soporte en Paciente Oncológico',
      desc: 'Manejo de náuseas, mucositis, alteración del gusto y preservación de masa muscular durante tratamientos oncológicos.',
    },
    {
      title: 'Salud Digestiva y Reeducación',
      desc: 'Pautas para SIBO, colon irritable, disbiosis, reflujo y construcción de hábitos alimentarios saludables para toda la vida.',
    },
  ];

  return (
    <section id="sesiones-online" className="relative py-14 sm:py-20 border-b border-slate-400/80 dark:border-slate-800/80">
      {/* Anchor alias to support legacy #servicios links */}
      <div id="servicios" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
              1. Consulta Clínica Individualizada
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Sesiones Nutricionales Online
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Atención clínica individualizada por videollamada confidencial. Pautas dietoterapéuticas basadas en la evidencia científica y adaptadas a tus necesidades.
          </p>
        </div>

        {/* Pricing & Services Cards Grid (3 Modalidades Claras) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
          {services.map((service) => {
            const isPopular = service.isPopular;
            const isPack = service.id === 's-pack' || service.category === 'Programa';

            let displayPeriod = service.period;
            let packDescription = service.description;

            if (isPack) {
              if (selectedProgramTier === '3m') {
                displayPeriod = 'Tratamiento 3 Meses';
                packDescription = 'Incluye 1 Sesión Inicial clínica exhaustiva (60 min) + 6 Consultas de Revisión (30-40 min) con soporte directo continuado.';
              } else if (selectedProgramTier === '6m') {
                displayPeriod = 'Programa 6 Meses';
                packDescription = 'Acompañamiento continuado regular con revisiones periódicas + 10% de descuento en la app TuNutriLens.';
              } else {
                displayPeriod = 'Programa Anual (12 Meses)';
                packDescription = 'Acompañamiento clínico integral de 1 año completo para consolidar hábitos sostenibles + 20% de descuento en la app TuNutriLens.';
              }
            }

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl flex flex-col justify-between p-4.5 xs:p-5 sm:p-7 transition-all duration-200 ${
                  isPopular
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white shadow-md border-2 border-amber-500 ring-2 ring-amber-400/25 transform md:-translate-y-1'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-400 dark:border-slate-700/80 shadow-2xs hover:border-[#3b6e5a]'
                }`}
              >
                {/* Popular / Focus Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{service.popularBadge || 'RECOMENDADO · MÁXIMA ADHERENCIA'}</span>
                  </div>
                )}

                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      isPopular
                        ? 'bg-orange-100 text-orange-950 border border-orange-300 dark:bg-orange-950/80 dark:text-orange-200 dark:border-orange-800'
                        : 'bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-300'
                    }`}>
                      {service.category}
                    </span>

                    <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-500" />
                      {displayPeriod}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{service.title}</h3>
                  <p className="text-xs mt-1 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Sub-selector for continuity packs */}
                  {isPack && (
                    <div className="mt-3 p-1.5 rounded-xl bg-slate-300 dark:bg-slate-900 border border-slate-400 dark:border-slate-700">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-1 text-center">
                        Duración del Acompañamiento:
                      </p>
                      <div className="grid grid-cols-3 gap-1">
                        <button
                          type="button"
                          onClick={() => setSelectedProgramTier('3m')}
                          className={`py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                            selectedProgramTier === '3m'
                              ? 'bg-orange-600 text-white shadow-2xs'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                          }`}
                        >
                          3 Meses
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedProgramTier('6m')}
                          className={`py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                            selectedProgramTier === '6m'
                              ? 'bg-orange-600 text-white shadow-2xs'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                          }`}
                        >
                          6 Meses
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedProgramTier('1y')}
                          className={`py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                            selectedProgramTier === '1y'
                              ? 'bg-orange-600 text-white shadow-2xs'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                          }`}
                        >
                          1 Año
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Plan Banner */}
                  <div className="my-4 pb-4 border-b border-slate-300 dark:border-slate-700/50">
                    <div className="flex flex-col gap-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-orange-100 dark:bg-orange-950/60 border border-orange-300 dark:border-orange-800 text-orange-950 dark:text-orange-200 text-xs font-bold w-fit">
                        <Sparkles className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                        Videollamada 1 a 1
                      </span>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-400">
                        Modalidad: {displayPeriod}
                      </span>
                    </div>

                    {isPack && selectedProgramTier === '6m' && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-orange-100/90 dark:bg-orange-950/60 border border-orange-300 dark:border-orange-800 text-[10px] font-bold text-orange-950 dark:text-orange-300">
                        <Sparkles className="w-3 h-3 text-orange-600" />
                        <span>Incluye 10% DTO en la app TuNutriLens</span>
                      </div>
                    )}

                    {isPack && selectedProgramTier === '1y' && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-orange-100/90 dark:bg-orange-950/60 border border-orange-300 dark:border-orange-800 text-[10px] font-bold text-orange-950 dark:text-orange-300">
                        <Sparkles className="w-3 h-3 text-orange-600" />
                        <span>Incluye 20% DTO en suscripción anual TuNutriLens</span>
                      </div>
                    )}

                    <p className="text-xs mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                      {packDescription}
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      Lo que incluye esta sesión:
                    </p>
                    <ul className="space-y-2 text-xs">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${theme.badge}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-600 dark:text-slate-300 leading-snug">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (isPack) {
                        const updatedService: NutritionService = {
                          ...service,
                          period: displayPeriod,
                          subtitle: `${displayPeriod} · Acompañamiento clínico`,
                        };
                        onSelectPlan(updatedService);
                      } else {
                        onSelectPlan(service);
                      }
                    }}
                    id={`select-plan-${service.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-2xs active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white shadow-md'
                        : 'bg-[#3b6e5a] hover:bg-[#2f5747] text-white'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>{isPack ? `Solicitar Información del ${displayPeriod}` : 'Solicitar Cita de esta Sesión'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center mt-2.5 text-slate-500 dark:text-slate-400 leading-tight">
                    <strong className="font-semibold text-slate-700 dark:text-slate-300">Ideal para:</strong> {service.idealFor}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* CÓMO FUNCIONA LA CONSULTA ONLINE (Paso a Paso) */}
        <div className="max-w-5xl mx-auto space-y-6 pt-4">
          <div className="text-center space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-white">
              ¿Cómo Funciona la Consulta Nutricional Online?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
              Un proceso clínico cómodo, estructurado y sin desplazamientos desde la tranquilidad de tu hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicalSteps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-200 dark:bg-slate-800/80 border border-slate-400 dark:border-slate-700 flex flex-col justify-between space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-xl ${theme.badge}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base font-black text-slate-500 dark:text-slate-600">
                      {st.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white">
                      {st.title}
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ÁREAS CLÍNICAS TRATADAS EN SESIONES ONLINE */}
        <div className="max-w-5xl mx-auto p-4 sm:p-8 rounded-3xl bg-slate-300/80 dark:bg-slate-800/60 border border-slate-400 dark:border-slate-700/80 space-y-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-400 dark:border-slate-700 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Especialidades Sanitarias
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-white mt-0.5">
                Patologías y Objetivos Tratados en Consulta Online
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Evidencia Científica y Rigor</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clinicalAreas.map((area, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 space-y-1">
                <h4 className="font-bold text-sm text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>{area.title}</span>
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-4">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Garantías y Condiciones de Sesión */}
          <div className="pt-3 border-t border-slate-400 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Plataforma de videollamada cifrada y confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Factura oficial con firma y número de colegiación sanitaria (Col. CV02386)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sin dietas fotocopiadas: pauta adaptada 100% a tu rutina</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
