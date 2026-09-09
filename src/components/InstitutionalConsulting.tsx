import React, { useState } from 'react';
import {
  Building2,
  Users,
  UtensilsCrossed,
  Presentation,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Send,
  Mail,
  FileCheck2,
  BookOpen,
  Check,
  Video,
  MapPin,
  AlertCircle,
} from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

export interface TalkTariffItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  modality: string;
  targetAudience: string;
  description: string;
  includes: string[];
  popular?: boolean;
  badge: string;
}

export const talksTariffList: TalkTariffItem[] = [
  {
    id: 'talk-webinar-online',
    title: 'Charla Temática / Webinar Online',
    subtitle: 'Divulgación científica interactiva en directo',
    price: 'Presupuesto a Medida',
    duration: '60 - 90 min',
    modality: '100% Online (Zoom / Teams / Meet)',
    targetAudience: 'Asociaciones de pacientes, AMPAS, empresas saludables y colectivos',
    description:
      'Diseño y preparación a medida de material gráfico y científico, sesión dinámica en directo con resolución de casos y turno amplio de preguntas.',
    includes: [
      'Preparación integral de presentación visual adaptada a la temática',
      'Videoconferencia en directo (hasta 100 asistentes)',
      'Turno de preguntas e interacción personalizada',
      'Dossier resumen descargable en PDF para los asistentes',
      'Grabación de la sesión para uso interno de la entidad',
    ],
    badge: 'Formato Ágil y Accesible',
  },
  {
    id: 'talk-taller-asociaciones',
    title: 'Ponencia y Taller para Asociaciones',
    subtitle: 'Disfagia en el hogar, Oncología o Salud Hormonal',
    price: 'Presupuesto a Medida',
    duration: '60 - 120 min',
    modality: 'Presencial u Online',
    targetAudience: 'Asociaciones de Pacientes (ELA, Alzheimer, Parkinson, Cáncer) y Familias',
    description:
      'Elaboración de contenidos específicos y recetarios adaptados, impartición clínica práctica, demostración de texturas y resolución de dudas directas.',
    includes: [
      'Elaboración a medida de contenidos clínicos para cuidadores y familias',
      'Demostración de adaptación de texturas (IDDSI) y trucos culinarios',
      'Guía y recetario práctico de enriquecimiento nutricional',
      'Resolución de dudas individuales al finalizar',
    ],
    popular: true,
    badge: 'MÁS SOLICITADO · ALTO IMPACTO FAMILIAR',
  },
  {
    id: 'talk-capacitacion-residencias',
    title: 'Capacitación Personal Sociosanitario',
    subtitle: 'Protocolos IDDSI, Calibración y Desnutrición',
    price: 'Presupuesto a Medida',
    duration: '2h 30 min',
    modality: 'Presencial (en el centro) u Online',
    targetAudience: 'Equipos de Cocina, Auxiliares de Enfermería, Terapeutas y Dirección',
    description:
      'Formación técnica de alto impacto para residencias y centros de día: preparación de protocolos IDDSI, estandarización de texturas, prevención de broncoaspiraciones y fichas de enriquecimiento.',
    includes: [
      'Diseño y adaptación del plan formativo al perfil del centro',
      'Capacitación técnica al personal de planta, cocina y auxiliares',
      'Protocolos claros de actuación ante disfagia y pérdidas de peso',
      'Fichas técnicas de enriquecimiento natural por menú',
      'Certificado de aprovechamiento formativo institucional',
    ],
    badge: 'Excelencia Sanitaria y Cumplimiento',
  },
  {
    id: 'talk-auditoria-menus',
    title: 'Auditoría y Calibración de Menús',
    subtitle: 'Revisión técnica de dietas basales y terapéuticas',
    price: 'Presupuesto a Medida',
    duration: 'Por ciclo estacional o servicio',
    modality: 'Servicio Técnico Visado',
    targetAudience: 'Residencias de Mayores, Colegios, Hospitales y Catering',
    description:
      'Evaluación nutricional integral de ciclos de menús: aporte calórico, macronutrientes, micronutrientes, libro de alérgenos y adaptación de texturas IDDSI con memoria visada.',
    includes: [
      'Memoria técnica oficial visada por dietista-nutricionista colegiada (Col. CV02386)',
      'Calibración y propuestas de mejora nutricional por plato',
      'Revisión del libro de alérgenos y dietas derivadas',
      'Reunión técnica de entrega y asesoramiento al equipo directivo',
    ],
    badge: 'Validez Normativa Autonómica',
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
  const [selectedEntityForQuote, setSelectedEntityForQuote] = useState<string>('Asociación de Enfermos');
  const [institutionName, setInstitutionName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isQuoteSent, setIsQuoteSent] = useState(false);

  const theme = themeStyles[profile.themeColor || 'teal'];

  const handleSendInstitutionInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newInquiry = {
        id: 'inst_' + Date.now(),
        date: new Date().toISOString(),
        entityType: selectedEntityForQuote,
        institutionName,
        contactEmail,
        contactPhone,
        message,
      };
      const existing = JSON.parse(localStorage.getItem('gala_consultoria_solicitadas') || '[]');
      existing.unshift(newInquiry);
      localStorage.setItem('gala_consultoria_solicitadas', JSON.stringify(existing));
    } catch {
      // ignore
    }

    const subject = encodeURIComponent(`[PROPUESTA TALLER / INSTITUCIONAL] ${institutionName || 'Entidad'} - ${selectedEntityForQuote}`);
    const body = encodeURIComponent(`SOLICITUD DE TALLER / PONENCIA / AUDITORÍA - www.galarodrigueznutricion.es
--------------------------------------------------
DATOS DE LA ENTIDAD / ASOCIACIÓN:
• Entidad: ${institutionName || 'Por especificar'}
• Tipo de Colectivo: ${selectedEntityForQuote}
• Email de Contacto: ${contactEmail}
• Teléfono: ${contactPhone}

DETALLES DEL TALLER O SERVICIO:
• Necesidad: ${message || 'Solicitud de taller o formación'}

Fecha: ${new Date().toLocaleString('es-ES')}`);

    window.location.href = `mailto:${profile.email || 'gala@galarodrigueznutricion.es'}?subject=${subject}&body=${body}`;
    setIsQuoteSent(true);
  };

  return (
    <section
      id="talleres-formacion"
      className="relative py-14 sm:py-20 border-b border-slate-400/80 dark:border-slate-800/80 transition-colors"
    >
      {/* Anchor alias to support legacy #instituciones links */}
      <div id="instituciones" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge} inline-flex items-center gap-1.5`}>
              <Presentation className="w-3.5 h-3.5" />
              <span>2. Apartado de Talleres, Ponencias y Formación</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Talleres, Ponencias y Formación Especializada
          </h2>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Capacitaciones prácticas, conferencias divulgativas y asesoría técnica para asociaciones de pacientes, familias, residencias de mayores, centros de día y colectivos.
          </p>
        </div>

        {/* 4 Formatos de Talleres y Formación (Grid Claro sin duplicados) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {talksTariffList.map((talk) => (
            <div
              key={talk.id}
              className={`p-5 rounded-2xl flex flex-col justify-between space-y-4 bg-slate-200 dark:bg-slate-800 transition-all ${
                talk.popular
                  ? 'border-2 border-orange-500 dark:border-orange-400 shadow-md relative'
                  : 'border border-slate-400 dark:border-slate-700 shadow-2xs hover:border-orange-400'
              }`}
            >
              {talk.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wider shadow-2xs whitespace-nowrap">
                  ★ MÁS DEMANDADO
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    talk.popular ? 'bg-orange-100 text-orange-950 border border-orange-300 dark:bg-orange-950 dark:text-orange-200' : 'bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-300'
                  }`}>
                    {talk.duration}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-orange-500" />
                    {talk.modality.split('(')[0]}
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-slate-800 dark:text-white leading-snug">
                    {talk.title}
                  </h4>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold mt-0.5">
                    {talk.subtitle}
                  </p>
                </div>

                {/* Price / Budget Tag */}
                <div className="py-2.5 border-y border-slate-300 dark:border-slate-700">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-orange-100 dark:bg-orange-950/60 border border-orange-300 dark:border-orange-800/60 text-orange-950 dark:text-orange-200 text-xs font-bold">
                    Presupuesto a Medida
                  </span>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 mt-1.5 leading-tight">
                    👥 <strong>Audiencia:</strong> {talk.targetAudience}
                  </p>
                </div>

                {/* Included bullets */}
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {talk.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking(talk.title)}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer ${
                    talk.popular
                      ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md'
                      : 'bg-[#3b6e5a] hover:bg-[#2f5747] text-white'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Solicitar Taller / Presupuesto</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Descuento Anual 15% */}
        <div className="max-w-5xl mx-auto p-4 sm:p-5 rounded-2xl bg-orange-50/90 dark:bg-orange-950/40 border border-orange-300 dark:border-orange-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500 text-white shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-white flex items-center gap-2 flex-wrap">
                <span>15% de Descuento en Servicio Integral Anual (1 Año)</span>
                <span className="px-2 py-0.5 rounded-full bg-orange-200 dark:bg-orange-900 text-orange-950 dark:text-orange-200 text-[10px] font-black uppercase">
                  Todas las opciones
                </span>
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                Aplicable en asesoría continuada de 1 año con compromiso de pago (auditorías periódicas, formación recurrente y soporte institucional).
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('Servicio Integral Anual de Talleres (15% Dto)')}
            className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shrink-0 transition-all shadow-2xs cursor-pointer"
          >
            Consultar Plan Anual
          </button>
        </div>

        {/* Condiciones Claras de Talleres y Formación */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-orange-600 dark:text-orange-400">
              <Video className="w-4 h-4" />
              <span>Modalidad Online y Presencial</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Talleres virtuales por Zoom/Teams para toda España o presenciales en la sede de la entidad. En desplazamientos fuera de zona habitual, gastos de transporte y dietas aparte.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-orange-600 dark:text-orange-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Forma de Pago y Validez</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              50% al contratar el taller y 50% al finalizar (en auditorías de menús se abona el 100% por adelantado). Factura oficial con colegiación sanitaria (Col. CV02386).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-orange-600 dark:text-orange-400">
              <AlertCircle className="w-4 h-4" />
              <span>Política de Cancelación</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Por reserva de agenda y preparación de material exclusivo, si se cancela con 24 horas o menos respecto a la fecha del taller, se cobrará el 100% del importe.
            </p>
          </div>
        </div>

        {/* Formulario de Solicitud de Propuesta para Entidades */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-md p-4.5 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950 text-orange-950 dark:text-orange-200 border border-orange-300 dark:border-orange-800">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Presupuestos y Propuestas a Medida</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-white">
                ¿Deseas organizar un taller o ponencia en tu entidad?
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Diseñamos propuestas personalizadas y presupuestos adaptados al formato (presencial u online), número de asistentes y objetivos específicos de tu colectivo.
              </p>

              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Emisión de factura y convenios de colaboración oficial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Modalidad presencial u online según localización</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Respuesta y valoración en menos de 24-48 horas</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Contacto directo:{' '}
                  <a href={`mailto:${profile.email}`} className="text-orange-600 dark:text-orange-400 font-bold hover:underline">
                    {profile.email}
                  </a>{' '}
                  o al{' '}
                  <a href={`tel:${profile.phone}`} className="text-orange-600 dark:text-orange-400 font-bold hover:underline">
                    {profile.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Quick Quote Form */}
            <div className="lg:col-span-6 bg-slate-300 dark:bg-slate-900/80 p-4 sm:p-6 rounded-2xl border border-slate-400 dark:border-slate-700">
              {isQuoteSent ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white text-base">
                    ¡Solicitud de Propuesta Recibida!
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-400">
                    Me pondré en contacto con la dirección de {institutionName || 'su centro'} en menos de 24-48 horas.
                  </p>
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => {
                        const text = `Hola Gala, represento a una entidad (${selectedEntityForQuote}) y nos gustaría solicitar información sobre un taller / formación.%0A%0A- Entidad: ${institutionName || 'Por especificar'}%0A- Contacto: ${contactEmail} / ${contactPhone}%0A- Necesidad: ${message || 'Taller / Ponencia'}`;
                        const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
                        window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
                      }}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Notificar por WhatsApp</span>
                    </button>
                    <a
                      href={`mailto:${profile.email || 'gala@galarodrigueznutricion.es'}?subject=${encodeURIComponent(`[PROPUESTA TALLER] ${institutionName || 'Entidad'}`)}&body=${encodeURIComponent(`Solicitud de taller para ${institutionName || 'Entidad'}. Contacto: ${contactEmail} / ${contactPhone}`)}`}
                      className="w-full py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                      <span>Abrir en mi Correo ({profile.email})</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendInstitutionInquiry} className="space-y-3 text-xs">
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">
                    Solicitud Rápida de Propuesta de Taller
                  </h4>

                  <div>
                    <label className="block text-slate-800 dark:text-slate-300 font-semibold mb-1">
                      Tipo de Colectivo o Entidad
                    </label>
                    <select
                      value={selectedEntityForQuote}
                      onChange={(e) => setSelectedEntityForQuote(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium cursor-pointer text-base sm:text-xs"
                    >
                      <option value="Asociación de Enfermos">Asociación de Pacientes / Familiares</option>
                      <option value="Residencia de Mayores">Residencia de Mayores / Centro Geriátrico</option>
                      <option value="Centro de Día">Centro de Día / Terapéutico</option>
                      <option value="Colegio o Escuela Infantil">Colegio, Escuela Infantil o AMPA</option>
                      <option value="Empresa o Colectivo">Empresa Saludable / Colectivo</option>
                      <option value="Particular / Familia">Particular / Familia</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-slate-800 dark:text-slate-300 font-semibold mb-1">
                        Nombre de la Entidad o Colectivo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Asociación Alzheimer / Colegio"
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-base sm:text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-800 dark:text-slate-300 font-semibold mb-1">
                        Teléfono de Contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej: 600 000 000"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-base sm:text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-800 dark:text-slate-300 font-semibold mb-1">
                      Email de Contacto *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contacto@asociacion.org"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-base sm:text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-800 dark:text-slate-300 font-semibold mb-1">
                      ¿Qué taller o temática desean consultar?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej: Taller práctico de disfagia en el hogar para familiares, ponencia online sobre nutrición oncológica..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 resize-none text-base sm:text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl font-bold text-xs shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Solicitar Propuesta y Presupuesto de Taller</span>
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
