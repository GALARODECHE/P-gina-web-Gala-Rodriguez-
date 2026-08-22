import React, { useState } from 'react';
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Users,
  UtensilsCrossed,
  Presentation,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  BadgePercent,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Send,
  HelpCircle,
  Layers,
  Award,
} from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

export interface InstitutionalServiceItem {
  id: string;
  title: string;
  badge: string;
  target: string;
  frequency: string;
  priceOneTime?: string;
  subscriptionPrice?: string;
  savingsBadge?: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  ctaText: string;
  iconName: 'Building' | 'School' | 'Presentation' | 'Association';
}

export const initialInstitutionalServices: InstitutionalServiceItem[] = [
  {
    id: 'inst-menus',
    title: 'Auditoría & Calibración de Menús Basales y Terapéuticos',
    badge: 'Cumplimiento Normativo & Seguridad',
    target: 'Residencias de Mayores, Hospitales y Centros Educativos',
    frequency: 'Revisión por ciclo de temporada o trimestral',
    priceOneTime: '1.450€ / auditoría técnica completa',
    subscriptionPrice: '637€ / mes (Suscripción Anual con -15% Dto. | Regular 750€/mes)',
    savingsBadge: '-15% Descuento Anual',
    description:
      'Revisión y validación técnico-sanitaria de dietas basales y derivaciones terapéuticas (disfagia con texturas IDDSI, hiposódicas, diabéticas, alérgenos). Emisión de informe y memoria técnica nutricional elaborada por nutricionista clínica con más de 20 años de experiencia.',
    deliverables: [
      'Informe y memoria técnica de revisión nutricional detallada para el centro',
      'Calibración calórico-proteica y balance nutricional por ración',
      'Protocolo de texturas adaptadas para pacientes con disfagia y riesgo de broncoaspiración',
      'Pautas de enriquecimiento calórico/proteico natural para prevención de desnutrición clínica',
      'Reunión técnica trimestral por videoconferencia con el equipo de cocina y dirección médica',
    ],
    idealFor:
      'Centros residenciales, hospitales y centros educativos que necesitan garantizar la seguridad nutricional, cumplir la normativa sanitaria estricta y optimizar costes.',
    ctaText: 'Solicitar Presupuesto o Auditoría',
    iconName: 'Building',
  },
  {
    id: 'inst-charlas',
    title: 'Talleres, Ponencias & Charlas Formativas Especializadas',
    badge: 'Divulgación con Rigor Científico',
    target: 'Asociaciones de Pacientes, Colegios, AMPAS & Equipos Sanitarios',
    frequency: 'Sesiones de 90 a 120 minutos (Online o Presencial)',
    priceOneTime: '850€ / ponencia o taller',
    subscriptionPrice: '467€ / mes (Ciclo Anual con -15% Dto. | Regular 550€/mes)',
    savingsBadge: '-15% Descuento Anual',
    description:
      'Formaciones dinámicas e interactivas adaptadas al público: familiares y cuidadores de personas con disfagia/deterioro cognitivo, hábitos saludables en edad escolar, o nutrición en patologías específicas.',
    deliverables: [
      'Ponencia estructurada de 90-120 min con turno abierto de preguntas',
      'Dossier digital descargable con infografías y recetarios prácticos para los asistentes',
      'Grabación en alta definición si la sesión es online para el archivo de la entidad',
      'Demostración práctica de adaptación de texturas o lectura de etiquetas',
      'Certificado de asistencia y aprovechamiento para el personal o las familias',
    ],
    idealFor:
      'Asociaciones de afectados (ELA, Párkinson, Alzheimer, Oncología), colegios, AMPAS y fundaciones de salud.',
    ctaText: 'Contratar Charla o Ciclo Formativo',
    iconName: 'Presentation',
  },
  {
    id: 'inst-asesoria-integral',
    title: 'Dirección Nutricional Externa & Asesoría Integral 360°',
    badge: 'Dirección Técnica Nutricional de Alto Nivel',
    target: 'Catering institucional, Grupos de Residencias & Centros de Día',
    frequency: 'Acompañamiento Continuo Mensual / Anual',
    priceOneTime: '1.200€ / mes (Contratación Mensual)',
    subscriptionPrice: '1.020€ / mes (Suscripción Anual con -15% Dto. | Regular 1.200€/mes)',
    savingsBadge: '-15% Descuento Anual (Ahorro 2.160€/año)',
    description:
      'Tu dirección técnica nutricional externa de máxima confianza. Supervisión de incidencias clínicas, elaboración de fichas técnicas de platos, formación continua al personal de cocina/enfermería y atención a casos clínicos complejos.',
    deliverables: [
      'Diseño y supervisión continua de menús estacionales y derivaciones terapéuticas',
      'Canal prioritario por email para dudas técnicas del equipo de cocina y enfermería',
      'Valoración clínica de casos complejos (pérdida ponderal severa, úlceras por presión, disfagia)',
      'Sesión mensual de capacitación para cuidadores y personal sociosanitario',
      'Modelos y protocolos estandarizados de registro de ingesta e hidratación',
    ],
    idealFor:
      'Instituciones que desean externalizar con total garantía la dirección nutricional sin costes de personal fijo.',
    ctaText: 'Activar Suscripción Institucional',
    iconName: 'School',
  },
];

interface InstitutionalConsultingProps {
  profile: NutritionistProfile;
  onOpenBooking: (serviceTitle: string) => void;
}

export const InstitutionalConsulting: React.FC<InstitutionalConsultingProps> = ({
  profile,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residencias' | 'charlas' | 'colegios'>('all');
  const [pricingMode, setPricingMode] = useState<'subscription' | 'onetime'>('subscription');
  const [selectedEntityForQuote, setSelectedEntityForQuote] = useState<string>('Residencia de Mayores');
  const [institutionName, setInstitutionName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isQuoteSent, setIsQuoteSent] = useState(false);

  const theme = themeStyles[profile.themeColor || 'teal'];

  const handleSendInstitutionInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoteSent(true);
  };

  return (
    <section
      id="instituciones"
      className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <Building2 className="w-3.5 h-3.5" />
            <span>Consultoría Institucional & Formación</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight">
            Asesoría Nutricional para Residencias, Colegios, Centros de Día & Asociaciones
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Más de 20 años de trayectoria clínica y experiencia en coordinación de menús hospitalarios y de colectividades (Hospital La Zarzuela, Mediterránea de Catering, Abbott y Danone Nutricia).
          </p>
        </div>

        {/* Value Highlights Pill Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300 shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Revisión de Menús</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Basales y adaptados IDDSI</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 shrink-0">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Charlas & Talleres</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Asociaciones y Colegios</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Informes Técnicos</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Memoria y Calibración</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
              <BadgePercent className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Planes de Suscripción</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Ahorro y soporte continuo</p>
            </div>
          </div>
        </div>

        {/* Pricing Toggle: Suscripción vs Servicio Puntual */}
        <div className="mt-12 flex flex-col items-center justify-center space-y-3">
          <div className="inline-flex p-1.5 rounded-2xl bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-inner">
            <button
              onClick={() => setPricingMode('subscription')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                pricingMode === 'subscription'
                  ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ⭐ Planes de Suscripción Mensual (Recomendado)
            </button>
            <button
              onClick={() => setPricingMode('onetime')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                pricingMode === 'onetime'
                  ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Auditorías & Charlas Puntuales
            </button>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {pricingMode === 'subscription'
              ? 'Los planes de suscripción mensual garantizan asesoría continua, revisiones periódicas y hasta un 50% de ahorro.'
              : 'Servicios de contratación única para revisiones específicas o eventos formativos aislados.'}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {initialInstitutionalServices.map((service, index) => {
            const isFeatured = service.id === 'inst-menus' || service.id === 'inst-asesoria-integral';
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-800/90 border transition-all duration-200 ${
                  isFeatured
                    ? 'border-teal-500/80 dark:border-teal-500/80 shadow-md ring-2 ring-teal-500/20'
                    : 'border-stone-200/90 dark:border-slate-700/80 shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {service.badge}
                    </span>
                    {service.savingsBadge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {service.savingsBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Target */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-1">
                      Dirigido a: {service.target}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-700/60">
                    <p className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                      {pricingMode === 'subscription' ? 'Cuota de Suscripción' : 'Tarifa Contratación Única'}
                    </p>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-700 dark:text-slate-200">
                        {pricingMode === 'subscription'
                          ? service.subscriptionPrice || service.priceOneTime
                          : service.priceOneTime || service.subscriptionPrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      Frecuencia: {service.frequency}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-slate-700/60">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                      Servicios & Entregables Incluidos:
                    </p>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-slate-700/60 space-y-2">
                  <button
                    onClick={() => {
                      const topic = `${service.title} (${pricingMode === 'subscription' ? 'Plan Suscripción' : 'Servicio Puntual'})`;
                      onOpenBooking(topic);
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98 ${theme.primary}`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Ponencias & Formación Modalities Breakdown */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              <Presentation className="w-3.5 h-3.5" />
              <span>Modalidades de Contratación de Ponencias & Formación</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-700 dark:text-slate-200">
              Tarifas Claras y Formatos Formativos sin Sorpresas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Formatos estructurados para cada tipo de entidad: desde ponencias magistrales de alta especialización hasta talleres prácticos para equipos sociosanitarios o familias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Modality 1 */}
            <div className="rounded-2xl p-5 bg-white dark:bg-slate-800 border-2 border-amber-500/70 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
                    Congresos & Entidades
                  </span>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                    1,5 a 2 Horas
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-700 dark:text-slate-200">
                  Ponencia Magistral / Jornada Técnica
                </h4>
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/60">
                  <p className="text-2xl font-black text-slate-800 dark:text-white">
                    850€ <span className="text-xs font-normal text-slate-500">/ ponencia</span>
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Online o Presencial (+ gastos desplazamiento si aplica)
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  <strong>Dirigido a:</strong> Congresos médicos, Colegios Profesionales, Laboratorios farmacéuticos, Grupos residenciales o Empresas de Catering.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Contenido científico de alto impacto clínico</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Turno abierto de debate y resolución de casos</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Entrega de presentación y dossier en PDF</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('Ponencia Magistral / Jornada Técnica (850€)')}
                className="mt-4 w-full py-2 px-3 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Contratar Ponencia (850€)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modality 2 */}
            <div className="rounded-2xl p-5 bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    Equipos & Personal
                  </span>
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                    2h a 4h (Media Jornada)
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-700 dark:text-slate-200">
                  Curso de Capacitación Sociosanitaria
                </h4>
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/60">
                  <p className="text-2xl font-black text-slate-800 dark:text-white">
                    550€ <span className="text-xs font-normal text-slate-500">(2h)</span> / 850€ <span className="text-xs font-normal text-slate-500">(4h)</span>
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Formación práctica in situ o por streaming
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  <strong>Dirigido a:</strong> Residencias, Centros de Día, personal auxiliar de enfermería y equipos de cocina.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>Adaptación de consistencias y texturas seguras</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>Pautas de enriquecimiento calórico/proteico natural</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>Certificado de aprovechamiento para el centro</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('Curso de Capacitación Sociosanitaria')}
                className="mt-4 w-full py-2 px-3 rounded-xl text-xs font-bold bg-stone-800 hover:bg-black text-white dark:bg-slate-700 dark:hover:bg-slate-600 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Solicitar Capacitación</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modality 3 */}
            <div className="rounded-2xl p-5 bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    Asociaciones & Familias
                  </span>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    90 Minutos
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-700 dark:text-slate-200">
                  Taller Divulgativo para Cuidadores
                </h4>
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/60">
                  <p className="text-2xl font-black text-slate-800 dark:text-white">
                    350€ – 450€ <span className="text-xs font-normal text-slate-500">/ sesión</span>
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Tarifa especial adaptada a entidades sin ánimo de lucro
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  <strong>Dirigido a:</strong> Asociaciones de afectados (ELA, Alzheimer, Párkinson, Cáncer), AMPAS y colectivos de pacientes.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Lenguaje cercano, empático y 100% comprensible</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Resolución directa de dudas cotidianas en el hogar</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Guía práctica descargable con recetas adaptadas</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onOpenBooking('Taller Divulgativo para Cuidadores (Asociaciones)')}
                className="mt-4 w-full py-2 px-3 rounded-xl text-xs font-bold bg-stone-800 hover:bg-black text-white dark:bg-slate-700 dark:hover:bg-slate-600 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Organizar Taller</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Direct Institutional Proposal & Quote Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 p-6 sm:p-9 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Propuestas a Medida & Licitaciones</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-700 dark:text-slate-200">
                ¿Necesitas un plan adaptado a las características de tu centro?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Diseñamos convenios personalizados para grupos de residencias, federaciones de enfermos, colegios concertados/privados y empresas de restauración colectiva.
              </p>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Emisión de facturas y convenios marco de colaboración</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Atención presencial u online según localización geográfica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Respuesta y propuesta técnica en menos de 48 horas</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Contacto directo con Gala Rodríguez:{' '}
                  <a href={`mailto:${profile.email}`} className="text-teal-700 dark:text-teal-400 font-bold hover:underline">
                    {profile.email}
                  </a>{' '}
                  o al{' '}
                  <a href={`tel:${profile.phone}`} className="text-teal-700 dark:text-teal-400 font-bold hover:underline">
                    {profile.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Quick Quote Form */}
            <div className="lg:col-span-6 bg-stone-50 dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-stone-200 dark:border-slate-700">
              {isQuoteSent ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-700 dark:text-slate-200 text-base">
                    ¡Solicitud de Presupuesto Recibida!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Me pondré en contacto con la dirección de {institutionName || 'su centro'} en menos de 24-48 horas.
                  </p>
                  <button
                    onClick={() => {
                      const text = `Hola Gala, represento a una entidad/institución (${selectedEntityForQuote}) y nos gustaría solicitar información y propuesta sobre consultoría. %0A%0A- Institución: ${institutionName || 'Por especificar'}%0A- Contacto: ${contactEmail} / ${contactPhone}%0A- Necesidad: ${message || 'Revisión de menús / Charlas / Asesoría'}`;
                      const cleanNumber = profile.whatsappNumber.replace(/\+/g, '');
                      window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
                    }}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Hablar ahora por WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendInstitutionInquiry} className="space-y-3 text-xs">
                  <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                    Solicitud Rápida de Propuesta Institucional
                  </h4>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                      Tipo de Entidad
                    </label>
                    <select
                      value={selectedEntityForQuote}
                      onChange={(e) => setSelectedEntityForQuote(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                    >
                      <option value="Residencia de Mayores">Residencia de Mayores / Centro Geriátrico</option>
                      <option value="Centro de Día">Centro de Día / Terapéutico</option>
                      <option value="Colegio o Escuela Infantil">Colegio, Escuela Infantil o AMPA</option>
                      <option value="Asociación de Enfermos">Asociación de Enfermos / Familiares</option>
                      <option value="Empresa de Catering">Empresa de Catering o Colectividades</option>
                      <option value="Otra Institución">Otra Institución Sanitaria / Social</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                        Nombre de la Institución *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Residencia San José"
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                        Teléfono de Contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej: 600 000 000"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                      Email Corporativo / Contacto *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="direccion@centro.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                      ¿Qué servicio principal necesitan?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej: Revisión de 4 menús basales y adaptación para disfagia, o taller para familiares..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 ${theme.primary}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Solicitar Propuesta Técnica y Presupuesto</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
