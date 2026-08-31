import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Calendar,
  MessageCircle,
  FileText,
  Activity,
  HeartHandshake,
  Video,
  Clock,
  Printer,
  Copy,
  Eye,
  CheckCircle2,
  UtensilsCrossed,
  Presentation,
  Building2,
  Phone,
  Mail,
  Share2,
  Users,
  MapPin,
} from 'lucide-react';
import { NutritionistProfile, NutritionService } from '../types';
import { themeStyles } from '../utils/theme';
import { talksTariffList } from './InstitutionalConsulting';

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
  onOpenInfographic,
}) => {
  const [infographicTab, setInfographicTab] = useState<'all' | 'clinic' | 'talks'>('all');
  const [selectedProgramTier, setSelectedProgramTier] = useState<'3m' | '6m' | '1y'>('3m');

  const theme = themeStyles[profile.themeColor || 'teal'];

  const clinicalSteps = [
    {
      icon: Calendar,
      step: '01',
      title: 'Reserva de Cita Online',
      desc: 'Eliges día y hora cómodamente desde tu móvil u ordenador según tu disponibilidad.',
    },
    {
      icon: Video,
      step: '02',
      title: 'Videollamada 1 a 1 (60 min)',
      desc: 'Sesión clínica directa donde evaluamos tus hábitos, rutinas, horarios, síntomas y objetivos.',
    },
    {
      icon: Activity,
      step: '03',
      title: 'Pauta personalizada (<48h)',
      desc: 'Recibes tu plan nutricional individualizado, recetas prácticas y recomendaciones personalizadas.',
    },
    {
      icon: HeartHandshake,
      step: '04',
      title: 'Soporte y acompañamiento',
      desc: 'Resolución continuada de dudas y revisiones periódicas para consolidar resultados sostenibles.',
    },
  ];

  const shareableWhatsappText = `*GALA RODRÍGUEZ ECHEBARRIETA — CONSULTA NUTRICIONAL ONLINE*
_Diplomada en Nutrición Humana y Dietética (Univ. de Navarra) | +20 años de experiencia clínica_

📋 *TARIFAS Y SERVICIOS DE CONSULTA:*

1️⃣ *1ª CONSULTA CLÍNICA Y DIAGNÓSTICO (90 €)*
• Duración: 60 minutos por videollamada 1 a 1.
• Anamnesis clínica integral directa, evaluación de sintomatología y requerimientos.
• Entrega de plan nutricional en <48h + resolución de dudas por email durante 15 días.

2️⃣ *PROGRAMAS CLÍNICOS DE CONTINUIDAD Y ACOMPAÑAMIENTO:*
• 🟢 *Pack 3 Meses (520 €)*:
  - 1 Sesión Inicial (60 min) + 6 Consultas de Revisión (30-40 min).
  - Reajuste dinámico de menús, evolución periódica y adaptación de pautas.
• 🟡 *Programa 6 Meses (970 €)*:
  - Seguimiento regular continuado y revisiones periódicas.
  - 🎁 *10% de descuento en la suscripción a TuNutriLens*.
• 🟣 *Programa Integral 1 Año (1.850 €)*:
  - Acompañamiento clínico integral de 12 meses.
  - 🎁 *20% de descuento en la suscripción anual a TuNutriLens*.

3️⃣ *CONSULTA DE REVISIÓN Y EVOLUCIÓN (75 €)*
• Duración: 30-40 minutos por videollamada.
• Para pacientes ya evaluados en 1ª consulta: reajuste de menús, evolución y consolidación de hábitos.

🏢 *CONSULTORÍA PARA RESIDENCIAS, COLEGIOS Y ASOCIACIONES:*
• Auditoría y calibración de menús basales y disfagia (texturas IDDSI).
• Charlas y talleres para asociaciones de pacientes y cuidadores.
• Asesoría técnica continuada.

📌 *CONDICIONES Y METODOLOGÍA:*
• 100% Online por videollamada segura.
• Pauta adaptada a tus horarios, preferencias y patologías (sin dietas fotocopiadas).
• Reserva confirmada tras agendar y abono previo por Bizum o Transferencia.

🌐 Web oficial: https://galarodrigueznutricion.es
✉️ Email: ${profile.email || 'gala@galarodrigueznutricion.es'}
📲 WhatsApp / Tel: ${profile.phone || '+34 697 166 126'}`;

  const shareableWhatsappTalks = `*GALA RODRÍGUEZ ECHEBARRIETA — TARIFAS DE CHARLAS, PONENCIAS Y FORMACIÓN*
_Diplomada en Nutrición Humana y Dietética (Univ. de Navarra) | +20 años de experiencia clínica sanitaria_

📋 *TARIFAS Y FORMATOS DE PONENCIAS, TALLERES Y AUDITORÍAS:*

1️⃣ *CHARLA TEMÁTICA / WEBINAR ONLINE (550 €)*
• Duración: 90 minutos en directo (Zoom / Teams / Meet).
• Preparación integral de presentación visual adaptada a la temática.
• Hasta 100 asistentes + Turno amplio de preguntas.
• Incluye dossier resumen descargable en PDF para los participantes.

2️⃣ *PONENCIA Y TALLER PARA ASOCIACIONES Y FAMILIAS (650 €)*
• Duración: 2 horas (Presencial u Online).
• Temáticas: Disfagia y texturas en el hogar (IDDSI), Nutrición en Oncología, Salud Hormonal.
• Enfoque 100% práctico con resolución de casos reales y guía/recetario adaptado.

3️⃣ *CAPACITACIÓN TÉCNICA / TALLER PARA PERSONAL SOCIOSANITARIO (650 €)*
• Duración: 2h 30 min (En el centro o virtual).
• Para: Equipos de Residencias, Centros de Día, Cocina y Auxiliares de Enfermería.
• Protocolos IDDSI para disfagia, prevención de desnutrición y enriquecimiento natural.
• Incluye certificado de aprovechamiento institucional.

4️⃣ *AUDITORÍA Y CALIBRACIÓN DE MENÚS COLECTIVOS (1.500 €)*
• Memoria técnica oficial visada por Dietista-Nutricionista colegiada.
• Validación de dietas basales, terapéuticas, libro de alérgenos y aporte calórico/proteico.

🎁 *DESCUENTO SERVICIO INTEGRAL ANUAL (1 AÑO):*
• *15% de Descuento* en cualquiera de las opciones al contratar un servicio integral de 1 año de duración (con compromiso de pago).

📌 *CONDICIONES Y FORMA DE PAGO:*
• 💳 *Forma de pago:* Se abonará el 50% al contratar el servicio y el 50% restante al finalizar (excepto en las Auditorías de Menús, que se abonan el 100% por adelantado).
• ⚠️ *Política de cancelación:* Si se cancela con 24 horas o menos de antelación respecto a la fecha del taller o la charla, se cobrará el importe total (100%).
• 🚗 *Gastos de desplazamiento:* En caso de requerir desplazamiento presencial fuera de la zona habitual, los gastos de transporte, dietas y kilometraje se cobran y presupuestan aparte.
• Factura oficial con firma y número de colegiación sanitaria.

🌐 Web oficial: https://galarodrigueznutricion.es
✉️ Email: ${profile.email || 'gala@galarodrigueznutricion.es'}
📲 WhatsApp / Tel: ${profile.phone || '+34 697 166 126'}`;

  return (
    <section id="tarifas" className="py-16 sm:py-24 border-b border-sky-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
              Servicios Clínicos y Modalidades de Acompañamiento
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-100 tracking-tight">
            Consulta Nutricional Online
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Atención clínica individualizada con más de 20 años de experiencia sanitaria. Especializada en salud de la mujer, patología digestiva, oncología y adaptación de texturas (disfagia).
          </p>

          {/* Banner de Pre-reserva y Agendamiento */}
          <div className="p-3.5 rounded-2xl bg-teal-50/90 dark:bg-slate-800/90 border border-teal-200 dark:border-teal-800/60 max-w-2xl mx-auto text-left flex items-start gap-3 shadow-xs">
            <div className="p-2 rounded-xl bg-teal-600 text-white shrink-0 mt-0.5">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="space-y-0.5 text-xs sm:text-sm">
              <div className="font-bold text-teal-950 dark:text-teal-200 flex items-center gap-2">
                <span>Modo Pre-reserva y Contacto Directo</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-200 dark:bg-teal-900/80 text-teal-900 dark:text-teal-200 font-bold uppercase tracking-wider">
                  Sin cobro inmediato
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                Solicita tu cita rellenando el formulario o por WhatsApp. Gala revisará tu caso, acordará contigo el día y hora exactos por videollamada y coordinará la reserva de tu sesión.
              </p>
            </div>
          </div>

          {/* Infographic Trigger Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                if (onOpenInfographic) onOpenInfographic();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Abrir Infografía / Dossier en PDF</span>
            </button>
          </div>
        </div>

        {/* Pricing & Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
          {services.map((service) => {
            const isPopular = service.isPopular;
            const isPack = service.id === 's-pack' || service.category === 'Programa';

            // Dynamic values for pack based on selected tier
            let displayPrice = service.price;
            let displayPeriod = service.period;
            let packDescription = service.description;

            if (isPack) {
              if (selectedProgramTier === '3m') {
                displayPrice = '520 €';
                displayPeriod = 'Tratamiento 3 Meses';
                packDescription = 'Incluye 1 Sesión Inicial clínica exhaustiva (60 min) + 6 Consultas de Revisión (30-40 min) con soporte directo continuado.';
              } else if (selectedProgramTier === '6m') {
                displayPrice = '970 €';
                displayPeriod = 'Programa 6 Meses';
                packDescription = 'Acompañamiento continuado regular con soporte directo prioritario + 10% de descuento en la app TuNutriLens.';
              } else {
                displayPrice = '1.850 €';
                displayPeriod = 'Programa Anual (12 Meses)';
                packDescription = 'Acompañamiento clínico integral de 1 año completo para máxima adherencia y reeducación metabólica + 20% de descuento en suscripción anual TuNutriLens.';
              }
            }

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl flex flex-col justify-between p-6 sm:p-7 transition-all duration-200 ${
                  isPopular
                    ? `bg-white dark:bg-slate-800 text-slate-700 dark:text-white shadow-lg border-2 ${theme.primaryBorder} transform lg:-translate-y-1.5`
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-sky-200/80 dark:border-slate-700/80 shadow-xs hover:border-sky-300'
                }`}
              >
                {/* Popular / Focus Badge */}
                {isPopular && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full ${theme.primary} text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1`}>
                    <Sparkles className="w-3 h-3" />
                    <span>{service.popularBadge || 'RECOMENDADO · MÁXIMA ADHERENCIA'}</span>
                  </div>
                )}

                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      isPopular
                        ? `${theme.badge}`
                        : 'bg-sky-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {service.category}
                    </span>

                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {displayPeriod}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-700 dark:text-slate-100">{service.title}</h3>
                  <p className="text-xs mt-1.5 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Interactive Duration Selector for Program */}
                  {isPack && (
                    <div className="mt-4 p-1.5 rounded-2xl bg-sky-50 dark:bg-slate-900/80 border border-sky-200/80 dark:border-slate-700/80">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 py-1">
                        Elige la duración de tu programa:
                      </p>
                      <div className="grid grid-cols-3 gap-1 mt-1">
                        <button
                          type="button"
                          onClick={() => setSelectedProgramTier('3m')}
                          className={`px-2 py-2 rounded-xl text-center text-xs font-bold transition-all ${
                            selectedProgramTier === '3m'
                              ? 'bg-teal-700 text-white shadow-xs'
                              : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="text-[11px]">3 Meses</div>
                          <div className="text-[13px] font-extrabold">520 €</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedProgramTier('6m')}
                          className={`px-2 py-2 rounded-xl text-center text-xs font-bold transition-all relative ${
                            selectedProgramTier === '6m'
                              ? 'bg-teal-700 text-white shadow-xs'
                              : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="text-[11px]">6 Meses</div>
                          <div className="text-[13px] font-extrabold">970 €</div>
                          <span className="inline-block text-[9px] text-amber-300 font-extrabold">-10% App</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedProgramTier('1y')}
                          className={`px-2 py-2 rounded-xl text-center text-xs font-bold transition-all relative ${
                            selectedProgramTier === '1y'
                              ? 'bg-teal-700 text-white shadow-xs'
                              : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="text-[11px]">1 Año</div>
                          <div className="text-[13px] font-extrabold">1.850 €</div>
                          <span className="inline-block text-[9px] text-amber-300 font-extrabold">-20% App</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Price Banner */}
                  <div className="my-5 pb-5 border-b border-sky-100 dark:border-slate-700/50">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-700 dark:text-white">
                        {displayPrice}
                      </span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        / {displayPeriod}
                      </span>
                    </div>

                    {isPack && selectedProgramTier === '6m' && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-[11px] font-bold text-amber-800 dark:text-amber-300">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Incluye 10% DTO. en la app TuNutriLens</span>
                      </div>
                    )}

                    {isPack && selectedProgramTier === '1y' && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-[11px] font-bold text-amber-800 dark:text-amber-300">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Incluye 20% DTO. en suscripción anual TuNutriLens</span>
                      </div>
                    )}

                    <p className="text-xs mt-2.5 leading-relaxed text-slate-600 dark:text-slate-300">
                      {packDescription}
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                      Lo que incluye tu servicio:
                    </p>
                    <ul className="space-y-2.5 text-xs">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
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
                          price: displayPrice,
                          period: displayPeriod,
                          subtitle: `${displayPeriod} · ${displayPrice}`,
                        };
                        onSelectPlan(updatedService);
                      } else {
                        onSelectPlan(service);
                      }
                    }}
                    id={`select-plan-${service.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs active:scale-95 flex items-center justify-center gap-2 ${
                      isPopular
                        ? `${theme.primary}`
                        : 'bg-slate-700 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-700 dark:hover:bg-stone-100'
                    }`}
                  >
                    <span>{isPack ? `Reservar ${displayPeriod} (${displayPrice})` : service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center mt-3 text-slate-500 dark:text-slate-400 leading-tight">
                    <strong className="font-semibold text-slate-600 dark:text-slate-300">Recomendado para:</strong> {service.idealFor}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* EMBEDDED VISUAL INFOGRAPHIC / DOSSIER SECTION */}
        <div id="infografia-precios" className="max-w-6xl mx-auto rounded-3xl bg-white dark:bg-slate-800 border-2 border-sky-200 dark:border-slate-700 shadow-xl overflow-hidden">
          {/* Infographic Header Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-800 via-teal-700 to-slate-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Infografía y Dossier de Tarifas</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Gala Rodríguez Echebarrieta · Resumen de Honorarios y Servicios
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/90">
                Diplomada Univ. Navarra · +20 años de experiencia clínica sanitaria
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => {
                  if (onOpenInfographic) onOpenInfographic();
                  else window.print();
                }}
                className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir / PDF</span>
              </button>
            </div>
          </div>

          {/* Tab Selector Bar */}
          <div className="px-6 py-3 bg-sky-100/60 dark:bg-slate-800/90 border-b border-sky-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl border border-sky-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setInfographicTab('all')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  infographicTab === 'all'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Dossier Completo
              </button>
              <button
                onClick={() => setInfographicTab('clinic')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  infographicTab === 'clinic'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Consulta Online
              </button>
              <button
                onClick={() => setInfographicTab('talks')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  infographicTab === 'talks'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Tarifas Charlas y Ponencias
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              💡 {infographicTab === 'talks' ? 'Formatos presenciales y online con presupuesto transparente.' : 'Tarifas cerradas sin sorpresas ni permanencias.'}
            </p>
          </div>

          {/* Infographic Visual Cards Grid */}
          <div className="p-6 sm:p-8 space-y-8 bg-sky-50/40 dark:bg-slate-900/40">
            
            {/* Section 1: Clinical Cards (Shown on 'all' and 'clinic') */}
            {(infographicTab === 'all' || infographicTab === 'clinic') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-700 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-100 uppercase tracking-wider">
                    Tarifas de Consulta Nutricional Online
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Card 1 */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-sky-200/90 dark:border-slate-700 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                        Sesión Inicial
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        60 min
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-slate-700 dark:text-slate-100">
                      1ª Consulta Clínica y Diagnóstico
                    </h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">90 €</span>
                      <span className="text-xs text-slate-500">/ sesión única</span>
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 border-t border-sky-100 dark:border-slate-700">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Videollamada 1 a 1 de 60 min</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Anamnesis clínica integral directa</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Plan personalizado entregado en &lt;48h</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>15 días de soporte por email</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2 */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-teal-600 dark:border-teal-400 space-y-3 shadow-md relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        Acompañamiento
                      </span>
                      <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                        Recomendado
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-slate-700 dark:text-slate-100">
                      Programas Clínicos de Continuidad
                    </h4>
                    
                    {/* Tiers summary */}
                    <div className="space-y-1.5 py-1">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-teal-50 dark:bg-slate-900/80 border border-teal-200 dark:border-teal-900 text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200">Pack 3 Meses:</span>
                        <span className="font-extrabold text-teal-700 dark:text-teal-400 text-sm">520 €</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-teal-50 dark:bg-slate-900/80 border border-teal-200 dark:border-teal-900 text-xs">
                        <div>
                          <span className="font-bold text-slate-800 dark:text-slate-200">Pack 6 Meses:</span>
                          <span className="ml-1 text-[10px] text-amber-700 dark:text-amber-400 font-bold">(-10% TuNutriLens)</span>
                        </div>
                        <span className="font-extrabold text-teal-700 dark:text-teal-400 text-sm">970 €</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-teal-50 dark:bg-slate-900/80 border border-teal-200 dark:border-teal-900 text-xs">
                        <div>
                          <span className="font-bold text-slate-800 dark:text-slate-200">Pack 1 Año:</span>
                          <span className="ml-1 text-[10px] text-amber-700 dark:text-amber-400 font-bold">(-20% TuNutriLens)</span>
                        </div>
                        <span className="font-extrabold text-teal-700 dark:text-teal-400 text-sm">1.850 €</span>
                      </div>
                    </div>

                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 border-t border-sky-100 dark:border-slate-700">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>1ª Consulta inicial (60 min) + Revisiones</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>En pack 3m: 1 inicial + 6 revisiones</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Revisiones clínicas periódicas cada 15 días</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Reajuste dinámico de menús y texturas</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 3 */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-sky-200/90 dark:border-slate-700 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                        Seguimiento
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        30-40 min
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-slate-700 dark:text-slate-100">
                      Consulta de Revisión y Evolución
                    </h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">75 €</span>
                      <span className="text-xs text-slate-500">/ sesión</span>
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 border-t border-sky-100 dark:border-slate-700">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Videollamada 1 a 1 de 30-40 min</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Ajuste de nutrientes, menús y recetas</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Resolución de dudas del día a día</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Adaptación a cambios de rutina o viajes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Talks & Ponencias Cards (Shown on 'all' and 'talks') */}
            {(infographicTab === 'all' || infographicTab === 'talks') && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-sky-200 dark:border-slate-700 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-100 uppercase tracking-wider">
                      Tarifas de Charlas, Ponencias, Talleres y Auditorías
                    </h4>
                  </div>
                  <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold hidden sm:inline">
                    Asociaciones · Residencias · Empresas
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {talksTariffList.map((talk) => (
                    <div
                      key={talk.id}
                      className={`p-4 rounded-2xl flex flex-col justify-between space-y-3 bg-white dark:bg-slate-800 transition-all ${
                        talk.popular
                          ? 'border-2 border-amber-600 dark:border-amber-500 shadow-md relative'
                          : 'border border-sky-200/90 dark:border-slate-700 shadow-2xs'
                      }`}
                    >
                      {talk.popular && (
                        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-700 text-white text-[8px] font-bold uppercase tracking-wider whitespace-nowrap shadow-xs">
                          ★ MÁS DEMANDADO
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            talk.popular ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300' : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                          }`}>
                            {talk.duration}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 flex items-center gap-0.5">
                            <Clock className="w-3 h-3" />
                            {talk.modality.split('(')[0]}
                          </span>
                        </div>

                        <h5 className="font-bold text-sm text-slate-800 dark:text-slate-100 leading-snug">
                          {talk.title}
                        </h5>

                        <div className="flex items-baseline gap-1 py-1 border-y border-sky-100 dark:border-slate-700">
                          <span className="text-2xl font-black text-slate-800 dark:text-white">
                            {talk.price}
                          </span>
                          <span className="text-[10px] text-slate-500">/ sesión</span>
                        </div>

                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
                          {talk.description}
                        </p>

                        <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                          {talk.includes.slice(0, 3).map((inc, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-tight">{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-1 text-[10px] text-slate-500 dark:text-slate-400 bg-sky-50/60 dark:bg-slate-900/60 p-1.5 rounded-lg border border-sky-100 dark:border-slate-700">
                        👥 {talk.targetAudience.slice(0, 45)}...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conditions & Policies */}
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed space-y-1.5">
              <p>
                📌 <strong>Condiciones Generales y Facturación:</strong> Cita confirmada tras recepción del comprobante de abono (Bizum o Transferencia bancaria). Emisión de factura oficial con firma y número de colegiación sanitaria para particulares, asociaciones o empresas.
              </p>
              <p>
                💳 <strong>Forma de pago en Charlas y Talleres:</strong> Se abonará el <strong>50% al contratar</strong> los servicios y el <strong>50% restante al finalizar</strong>, excepto en las <strong>Auditorías de Menús</strong>, que se abonan el <strong>100% por adelantado</strong>.
              </p>
              <p>
                ⚠️ <strong>Política de cancelación:</strong> Si se cancela con <strong>24 horas o menos</strong> de la fecha del taller o la charla, se cobrará el <strong>importe total (100%)</strong>.
              </p>
              <p>
                🎁 <strong>Servicio Integral Anual (1 Año):</strong> <strong>15% de descuento</strong> en todas las opciones de ponencias/auditorías al contratar el servicio integral de 1 año (con compromiso de pago).
              </p>
              <p>
                🚗 <strong>Desplazamientos:</strong> En formaciones y ponencias presenciales que requieran traslado fuera de la zona habitual, los gastos de kilometraje, transporte y dietas se cobran y presupuestan aparte.
              </p>
            </div>

          </div>
        </div>

        {/* Clinical Step-by-Step Guide */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-100">
              ¿Cómo es el proceso de consulta online?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Un método estructurado, confidencial y 100% individualizado para cuidar tu salud con evidencia científica
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clinicalSteps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-sky-200/80 dark:border-slate-700/70 flex flex-col justify-between space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${theme.badge}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-black text-slate-400 dark:text-slate-600">
                      {st.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-700 dark:text-slate-100">
                      {st.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Institutional / B2B Direct Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-0.5 rounded-full bg-teal-800/80 border border-teal-600/60 text-teal-200 text-[11px] font-bold uppercase tracking-wider">
              Servicios para Empresas y Colectividades
            </span>
            <h4 className="text-lg sm:text-xl font-bold">
              ¿Eres una Residencia, Colegio o Institución Sociosanitaria?
            </h4>
            <p className="text-xs sm:text-sm text-teal-100/90 max-w-2xl leading-relaxed">
              Auditorías y revisión de menús colectivos, adaptación de texturas para disfagia (IDDSI), nutrición enteral y talleres formativos especializados.
            </p>
          </div>

          <a
            href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              'Hola Gala, me gustaría solicitar una propuesta para asesoría institucional / residencia / charlas.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-slate-800 hover:bg-stone-100 font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Consultar Propuesta Institucional</span>
          </a>
        </div>

        {/* Quality & Rigor Guarantee Banner */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-sky-200/80 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xs">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className={`p-3 rounded-2xl ${theme.badge} flex-shrink-0 mx-auto sm:mx-0`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-700 dark:text-white">
                Rigor clínico hospitalario y máxima confidencialidad
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Diplomada en Nutrición Humana y Dietética por la Universidad de Navarra. Abordaje basado en evidencia y personalización absoluta.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
