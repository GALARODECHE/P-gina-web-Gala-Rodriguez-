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
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Send,
  Mail,
  FileCheck2,
  BookOpen,
  FileText,
  Copy,
  Check,
  Printer,
  Download,
  Video,
  MapPin,
  HelpCircle,
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
    price: '550 €',
    duration: '60 minutos',
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
    price: '650 €',
    duration: '60 minutos',
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
    title: 'Capacitación y Taller Personal Sociosanitario',
    subtitle: 'Protocolos IDDSI, Calibración y Desnutrición',
    price: '650 €',
    duration: '60 minutos',
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
    title: 'Auditoría y Calibración de Menús Colectivos',
    subtitle: 'Revisión técnica de dietas basales y terapéuticas',
    price: '1.500 €',
    duration: 'Por ciclo estacional o servicio',
    modality: 'Servicio Técnico Visado',
    targetAudience: 'Residencias de Mayores, Colegios, Hospitales y Catering',
    description:
      'Evaluación nutricional integral de ciclos de menús: aporte calórico, macronutrientes, micronutrientes, libro de alérgenos y adaptación de texturas IDDSI con memoria visada.',
    includes: [
      'Memoria técnica oficial visada por dietista-nutricionista colegiada',
      'Calibración y propuestas de mejora nutricional por plato',
      'Revisión del libro de alérgenos y dietas derivadas',
      'Reunión técnica de entrega y asesoramiento al equipo directivo',
    ],
    badge: 'Validez Normativa Autonómica',
  },
];

export interface InstitutionalServiceItem {
  id: string;
  title: string;
  badge: string;
  target: string;
  format: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  ctaText: string;
  icon: any;
}

export const institutionalServicesList: InstitutionalServiceItem[] = [
  {
    id: 'inst-auditoria-menus',
    title: 'Auditoría y Calibración de Menús Colectivos',
    badge: 'Cumplimiento Normativo Sanitario',
    target: 'Residencias de Mayores, Hospitales, Centros de Día y Catering',
    format: 'Revisión por ciclo de temporada o convenio anual',
    description:
      'Validación técnico-sanitaria rigurosa de dietas basales y derivaciones terapéuticas: protocolo de disfagia con texturas IDDSI, hiposódicas, diabéticas y alérgenos. Emisión de informe técnico visado.',
    deliverables: [
      'Memoria técnica de revisión y calibración nutricional por ración',
      'Protocolo de texturas IDDSI para disfagia y prevención de broncoaspiración',
      'Pautas de enriquecimiento calórico/proteico natural contra la desnutrición',
      'Reunión técnica con el equipo de cocina y dirección del centro',
    ],
    idealFor: 'Centros sociosanitarios que necesitan certificar la calidad nutricional y cumplir la normativa autonómica.',
    ctaText: 'Solicitar Auditoría de Menús',
    icon: UtensilsCrossed,
  },
  {
    id: 'inst-ponencias-charlas',
    title: 'Ponencias, Talleres y Charlas Formativas',
    badge: 'Divulgación Sanitaria con Evidencia',
    target: 'Asociaciones de Pacientes, Colegios, AMPAS y Eventos Sanitarios',
    format: 'Sesiones de 90 a 120 min (Online o Presencial)',
    description:
      'Divulgación rigurosa, amena y 100% aplicable adaptada a cada audiencia: disfagia en el hogar para cuidadores, nutrición en oncología, educación alimentaria escolar o salud hormonal.',
    deliverables: [
      'Ponencia estructurada con casos reales y turno abierto de preguntas',
      'Dossier resumen descargable con infografías y recetario práctico',
      'Adaptación completa a la temática o patología requerida por la entidad',
      'Certificado de asistencia para el personal o las familias',
    ],
    idealFor: 'Asociaciones de pacientes (ELA, Alzheimer, Cáncer), congresos, fundaciones y centros educativos.',
    ctaText: 'Solicitar Charla o Taller',
    icon: Presentation,
  },
  {
    id: 'inst-direccion-nutricional',
    title: 'Asesoría Nutricional Externa y Capacitación de Equipos',
    badge: 'Acompañamiento Continuo 360°',
    target: 'Grupos de Residencias, Centros Terapéuticos y Colectividades',
    format: 'Convenio de asesoría continuada',
    description:
      'Dirección técnica nutricional externa sin costes de personal fijo. Supervisión continua de menús, resolución de incidencias, valoración de casos complejos y formación del personal auxiliar.',
    deliverables: [
      'Supervisión continua de menús estacionales y adaptaciones',
      'Capacitación periódica a cuidadores y personal de cocina/enfermería',
      'Asesoramiento prioritario en casos clínicos de alta complejidad',
      'Modelos estandarizados de registro de ingesta e hidratación',
    ],
    idealFor: 'Instituciones que buscan excelencia clínica constante y tranquilidad en inspecciones sanitarias.',
    ctaText: 'Solicitar Convenio de Asesoría',
    icon: Building2,
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

  const talksWhatsappText = `*GALA RODRÍGUEZ ECHEBARRIETA — TARIFAS DE CHARLAS, PONENCIAS Y FORMACIÓN*
_Diplomada en Nutrición Humana y Dietética (Univ. de Navarra) | +20 años de experiencia clínica sanitaria_

📋 *TARIFAS Y FORMATOS DE PONENCIAS, TALLERES Y AUDITORÍAS:*

1️⃣ *CHARLA TEMÁTICA / WEBINAR ONLINE (550 €)*
• Duración: 60 minutos en directo (Zoom / Teams / Meet).
• Preparación integral de presentación visual adaptada a la temática.
• Hasta 100 asistentes + Turno amplio de preguntas.
• Incluye dossier resumen descargable en PDF para los participantes.

2️⃣ *PONENCIA Y TALLER PARA ASOCIACIONES Y FAMILIAS (650 €)*
• Duración: 60 minutos (Presencial u Online).
• Temáticas: Disfagia y texturas en el hogar (IDDSI), Nutrición en Oncología, Salud Hormonal.
• Enfoque 100% práctico con resolución de casos reales y guía/recetario adaptado.

3️⃣ *CAPACITACIÓN TÉCNICA / TALLER PARA PERSONAL SOCIOSANITARIO (650 €)*
• Duración: 60 minutos (En el centro o virtual).
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

  const handlePrintTalks = () => {
    window.print();
  };

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

    const subject = encodeURIComponent(`[PROPUESTA INSTITUCIONAL] ${institutionName || 'Entidad'} - ${selectedEntityForQuote}`);
    const body = encodeURIComponent(`SOLICITUD DE PROPUESTA TÉCNICA / CHARLAS / AUDITORÍA - www.galarodrigueznutricion.es
--------------------------------------------------
DATOS DE LA ENTIDAD / CENTRO:
• Nombre del Centro: ${institutionName || 'Por especificar'}
• Tipo de Entidad: ${selectedEntityForQuote}
• Email de Contacto: ${contactEmail}
• Teléfono: ${contactPhone}

DETALLES DEL SERVICIO / NECESIDAD:
• Descripción de la solicitud: ${message || 'Solicitud de charla / taller / auditoría de menús'}

Fecha: ${new Date().toLocaleString('es-ES')}`);

    window.location.href = `mailto:${profile.email || 'gala@galarodrigueznutricion.es'}?subject=${subject}&body=${body}`;
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
            <span>Consultoría Institucional, Ponencias y Formación</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            Tarifas de Charlas, Ponencias y Asesoría Institucional
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Formación sanitaria rigurosa y asesoría técnica para Asociaciones de Pacientes, Residencias, Colegios y Empresas. Más de 20 años de experiencia clínica y coordinación de menús hospitalarios.
          </p>

          {/* Quick Action Buttons for Talks Infographics */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handlePrintTalks}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Descargar Infografía en PDF</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DEDICATED VISUAL INFOGRAPHIC / DOSSIER DE CHARLAS & PONENCIAS */}
        {/* ========================================================================= */}
        <div id="infografia-charlas" className="mt-12 max-w-6xl mx-auto rounded-3xl bg-white dark:bg-slate-800 border-2 border-teal-600 dark:border-teal-500 shadow-xl overflow-hidden">
          
          {/* Infographic Top Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-800/90 border border-teal-500/50 text-teal-200 text-xs font-bold uppercase tracking-wider">
                <Presentation className="w-3.5 h-3.5" />
                <span>INFOGRAFÍA Y DOSSIER DE HONORARIOS FORMATIVOS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Tarifario Oficial: Charlas, Ponencias, Talleres y Auditorías
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/90 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>• Gala Rodríguez Echebarrieta</span>
                <span>• Diplomada Univ. de Navarra</span>
                <span>• Facturación oficial visada</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handlePrintTalks}
                className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir / PDF</span>
              </button>
            </div>
          </div>

          {/* Infographic Main Content Grid with Transparent Rates */}
          <div className="p-6 sm:p-8 space-y-8 bg-sky-50/40 dark:bg-slate-900/50">
            
            {/* 4 Clear Tariff Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {talksTariffList.map((talk) => (
                <div
                  key={talk.id}
                  className={`p-5 rounded-2xl flex flex-col justify-between space-y-4 bg-white dark:bg-slate-800 transition-all ${
                    talk.popular
                      ? 'border-2 border-teal-600 dark:border-teal-400 shadow-md relative'
                      : 'border border-sky-200/90 dark:border-slate-700 shadow-2xs'
                  }`}
                >
                  {talk.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-teal-700 text-white text-[9px] font-bold uppercase tracking-wider shadow-2xs whitespace-nowrap">
                      ★ MÁS DEMANDADO
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        talk.popular ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300' : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                      }`}>
                        {talk.duration}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {talk.modality.split('(')[0]}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-base text-slate-800 dark:text-slate-100 leading-snug">
                        {talk.title}
                      </h4>
                      <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-0.5">
                        {talk.subtitle}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="py-2 border-y border-sky-100 dark:border-slate-700">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-slate-800 dark:text-white">
                          {talk.price}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          / sesión
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        👥 <strong>Audiencia:</strong> {talk.targetAudience}
                      </p>
                    </div>

                    {/* Included bullets */}
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
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
                      className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs ${
                        talk.popular
                          ? 'bg-teal-700 hover:bg-teal-800 text-white'
                          : 'bg-slate-700 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600'
                      }`}
                    >
                      <span>Solicitar {talk.title.split('/')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Annual Integral Service 15% Discount Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-teal-500/10 to-emerald-500/15 border border-amber-300 dark:border-amber-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-start sm:items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span>15% de Descuento en Servicio Integral Anual (1 Año)</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-black uppercase">
                      Todas las opciones
                    </span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Aplicable en asesoría continuada de 1 año con compromiso de pago (auditorías periódicas, ciclos estacionales, formación recurrente y soporte institucional).
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenBooking('Servicio Integral Anual (15% Dto)')}
                className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shrink-0 transition-all shadow-xs"
              >
                Consultar Plan Anual
              </button>
            </div>

            {/* Infographic Summary: Formats, Modality & Conditions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-sky-200/80 dark:border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-teal-700 dark:text-teal-400">
                  <Video className="w-4 h-4" />
                  <span>Modalidad Online (En toda España)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Realización a través de plataforma interactiva (Meet / Zoom / Teams) con soporte audiovisual y entrega de material digital en PDF.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-sky-200/80 dark:border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                  <MapPin className="w-4 h-4" />
                  <span>Modalidad Presencial</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  En centros de día, residencias, sedes de asociaciones o colegios (gastos de transporte, kilometraje y dietas aparte fuera de la zona habitual).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-sky-200/80 dark:border-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-indigo-700 dark:text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certificación y Facturación</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Emisión de factura oficial profesional y certificados de asistencia/aprovechamiento con firma y número de colegiación sanitaria.
                </p>
              </div>
            </div>

            {/* Conditions & Policies for Institutional Services */}
            <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs space-y-2">
              <h4 className="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Condiciones de Pago, Reserva y Cancelación</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  💳 <strong>Forma de pago:</strong> Se abonará el <strong>50% al contratar</strong> los servicios y el <strong>50% restante al finalizar</strong>, excepto en las <strong>Auditorías de Menús</strong>, que se abonan el <strong>100% por adelantado</strong>.
                </p>
                <p>
                  ⚠️ <strong>Política de cancelación:</strong> Si se cancela con <strong>24 horas o menos</strong> de antelación respecto a la fecha del taller o la charla, se cobrará el <strong>importe total (100%)</strong>.
                </p>
                <p>
                  🎁 <strong>Compromiso Anual:</strong> 15% de descuento en cualquiera de las opciones al contratar un servicio integral de 1 año de duración (con compromiso de pago).
                </p>
                <p>
                  🚗 <strong>Desplazamientos:</strong> En formaciones y ponencias presenciales que requieran traslado fuera de la zona habitual, los gastos de kilometraje, transporte y dietas se cobran y presupuestan aparte.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Value Highlights Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300 shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Revisión de Menús</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Basales y adaptados IDDSI</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 shrink-0">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Charlas y Talleres</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Asociaciones y Familias</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Informes Técnicos</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Memoria y Calibración</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">Garantía Sanitaria</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Univ. de Navarra</p>
            </div>
          </div>
        </div>

        {/* 3 Main B2B Services Cards (Clean, Professional y Elegant) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {institutionalServicesList.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 1;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-800 transition-all duration-200 ${
                  isFeatured
                    ? `border-2 ${theme.primaryBorder} shadow-lg relative`
                    : 'border border-stone-200/90 dark:border-slate-700/80 shadow-xs hover:border-stone-300'
                }`}
              >
                {isFeatured && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full ${theme.primary} text-[11px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1`}>
                    <Sparkles className="w-3 h-3" />
                    <span>ALTA DEMANDA FORMATIVA</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Badge & Format */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      isFeatured ? theme.badge : 'bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {service.badge}
                    </span>

                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.format}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl ${theme.badge} shrink-0 mt-0.5`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-100 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-1">
                        {service.target}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-3 border-t border-stone-100 dark:border-slate-700/60">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                      Servicios y Entregables Incluidos:
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

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-slate-700/60 space-y-2">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95 ${
                      isFeatured
                        ? theme.primary
                        : 'bg-slate-700 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-700 dark:hover:bg-stone-100'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                    <strong className="font-semibold text-slate-600 dark:text-slate-300">Ideal para:</strong> {service.idealFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Formats & Temáticas de Charlas (Elegante y Sintético) */}
        <div className="mt-16 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-stone-50/80 dark:bg-slate-800/60 border border-stone-200/80 dark:border-slate-700/70">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Temáticas Formativas Más Solicitadas</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              Ponencias Adaptadas al Perfil de tu Audiencia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Contenido adaptado con rigor científico, lenguaje accesible y herramientas prácticas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wide">
                <HeartHandshake className="w-4 h-4" />
                <span>Para Asociaciones y Familias</span>
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                Disfagia y Alimentación en el Hogar
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Técnicas de texturas seguras, prevención de atragantamientos, recetas atractivas y pautas para personas con ELA, Alzheimer o Parkinson.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wide">
                <Users className="w-4 h-4" />
                <span>Para Personal Sociosanitario</span>
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                Capacitación en Enriquecimiento y IDDSI
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Formación práctica para auxiliares de enfermería y personal de cocina en la prevención de la desnutrición clínica en residencias.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-xs uppercase tracking-wide">
                <GraduationCap className="w-4 h-4" />
                <span>Para Colegios, AMPAS y Empresas</span>
              </div>
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                Educación Alimentaria y Salud Integral
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Desmontando mitos de redes sociales, desayunos y meriendas saludables, salud digestiva y gestión energética en el día a día.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Institutional Proposal & Quote Form Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 p-6 sm:p-9 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Presupuestos y Propuestas a Medida</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                ¿Necesitas una propuesta para tu centro o entidad?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Diseñamos convenios personalizados y presupuestos adaptados al volumen de menús, número de asistentes o alcance formativo.
              </p>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Emisión de facturas y convenios marco de colaboración</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Modalidad presencial u online según localización</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Respuesta y valoración técnica en menos de 48 horas</span>
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
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base">
                    ¡Solicitud de Propuesta Recibida!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Me pondré en contacto con la dirección de {institutionName || 'su centro'} en menos de 24-48 horas.
                  </p>
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => {
                        const text = `Hola Gala, represento a una entidad (${selectedEntityForQuote}) y nos gustaría solicitar información y propuesta institucional.%0A%0A- Entidad: ${institutionName || 'Por especificar'}%0A- Contacto: ${contactEmail} / ${contactPhone}%0A- Necesidad: ${message || 'Auditoría / Charlas / Asesoría'}`;
                        const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
                        window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
                      }}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Notificar por WhatsApp</span>
                    </button>
                    <a
                      href={`mailto:${profile.email || 'gala@galarodrigueznutricion.es'}?subject=${encodeURIComponent(`[PROPUESTA INSTITUCIONAL] ${institutionName || 'Entidad'}`)}&body=${encodeURIComponent(`Solicitud de propuesta enviada para ${institutionName || 'Entidad'}. Contacto: ${contactEmail} / ${contactPhone}`)}`}
                      className="w-full py-2 rounded-xl bg-stone-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-stone-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>Abrir en mi Correo ({profile.email})</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendInstitutionInquiry} className="space-y-3 text-xs">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                    Solicitud Rápida de Propuesta
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
                      <option value="Asociación de Enfermos">Asociación de Enfermos / Familiares</option>
                      <option value="Colegio o Escuela Infantil">Colegio, Escuela Infantil o AMPA</option>
                      <option value="Empresa o Catering">Empresa de Catering / Colectividades</option>
                      <option value="Otra Entidad">Otra Entidad Sanitaria / Social</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                        Nombre de la Entidad *
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
                      Email de Contacto *
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
                      ¿Qué necesidad o servicio desean consultar?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej: Charla sobre disfagia para familiares, revisión de menús basales o capacitación para el equipo..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs shadow-xs flex items-center justify-center gap-2 ${theme.primary}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Solicitar Propuesta y Presupuesto</span>
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
