import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Share2,
  Download,
  ShieldCheck,
  Clock,
  Video,
  FileText,
  HeartHandshake,
  Sparkles,
  Phone,
  Mail,
  Building2,
  UtensilsCrossed,
  Presentation,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Stethoscope,
  Calendar,
  Users,
  MapPin,
} from 'lucide-react';
import { NutritionistProfile, NutritionService } from '../types';
import { talksTariffList } from './InstitutionalConsulting';

interface ServiceInfographicModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: NutritionistProfile;
  services: NutritionService[];
}

export const ServiceInfographicModal: React.FC<ServiceInfographicModalProps> = ({
  isOpen,
  onClose,
  profile,
  services,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'clinic' | 'talks'>('all');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const shareableWhatsappClinic = `*GALA RODRÍGUEZ ECHEBARRIETA — CONSULTA NUTRICIONAL ONLINE*
_Diplomada en Nutrición Humana y Dietética (Univ. de Navarra) | +20 años de experiencia clínica_

📋 *TARIFAS DE CONSULTA INDIVIDUAL:*

1️⃣ *1ª CONSULTA CLÍNICA Y DIAGNÓSTICO INTEGRAL (90 €)*
• Duración: 60 minutos por videollamada 1 a 1.
• Anamnesis clínica integral directa, evaluación de objetivos y requerimientos.
• Entrega de plan nutricional 100% individualizado (<48h) + resolución de dudas por email durante 15 días.

2️⃣ *PROGRAMAS CLÍNICOS DE CONTINUIDAD Y ACOMPAÑAMIENTO:*
• 🟢 *Pack 3 Meses (520 €)*:
  - 1 Sesión Inicial (60 min) + 6 Consultas de Revisión (30-40 min).
  - Soporte continuado por WhatsApp / e-Health y reajuste dinámico de menús.
• 🟡 *Programa 6 Meses (970 €)*:
  - Seguimiento regular continuado + Soporte directo.
  - 🎁 *10% de descuento en la suscripción a TuNutriLens*.
• 🟣 *Programa Integral 1 Año (1.850 €)*:
  - Acompañamiento clínico integral de 12 meses.
  - 🎁 *20% de descuento en la suscripción anual a TuNutriLens*.

3️⃣ *CONSULTA DE REVISIÓN Y EVOLUCIÓN (75 €)*
• Duración: 30-40 minutos por videollamada.
• Para pacientes ya evaluados en 1ª consulta: reajuste de menús, evolución y consolidación de hábitos.

📌 *CONDICIONES:*
• 100% Online por videollamada segura. Factura oficial colegiada.

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-sky-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:w-full print:rounded-none">
        
        {/* Modal Action Bar (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-sky-50 dark:bg-slate-800/90 border-b border-sky-200 dark:border-slate-700/80 print:hidden shrink-0">
          
          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-xl border border-sky-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Dossier Completo
            </button>
            <button
              onClick={() => setActiveTab('clinic')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                activeTab === 'clinic'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Consulta Online
            </button>
            <button
              onClick={() => setActiveTab('talks')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                activeTab === 'talks'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tarifas Charlas y Ponencias
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-sky-100 dark:hover:bg-slate-700 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Infographic Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:overflow-visible print:text-black">
          
          {/* Header Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white relative overflow-hidden shadow-md print:bg-teal-900 print:text-white">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-600/50 text-teal-200 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Dossier de Honorarios y Servicios Sanitarios</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Gala Rodríguez Echebarrieta
                </h1>
                <p className="text-sm sm:text-base text-teal-100 font-medium">
                  Diplomada en Nutrición Humana y Dietética por la Universidad de Navarra
                </p>
                <p className="text-xs text-teal-200/90 flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                  <span>• +20 años de experiencia clínica sanitaria</span>
                  <span>• Salud de la Mujer y Hormonal</span>
                  <span>• Oncología y Disfagia (IDDSI)</span>
                  <span>• Ponencias y Formación Institucional</span>
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs space-y-1.5 text-teal-50 sm:text-right">
                <p className="font-bold text-white flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{profile.phone}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </p>
                <p className="text-[11px] text-teal-200 pt-1 border-t border-white/10">
                  Consulta Online y Charlas en toda España
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Modalidades de Consulta y Tarifas (Shown on 'all' and 'clinic') */}
          {(activeTab === 'all' || activeTab === 'clinic') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-sky-200 dark:border-slate-700 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                <h2 className="text-lg font-bold text-slate-700 dark:text-slate-100 uppercase tracking-wider">
                  1. Tarifas y Servicios de Consulta Online Individual
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Card 1: 1ª Consulta */}
                <div className="p-5 rounded-2xl bg-[#f4f9fd] dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 flex flex-col justify-between space-y-4 print:border-stone-400">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                        Sesión Inicial
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        60 min
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-slate-700 dark:text-slate-100">
                      1ª Consulta Clínica y Diagnóstico
                    </h3>
                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">90 €</span>
                      <span className="text-xs text-slate-500">/ sesión única</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Evaluación clínica integral y diseño de tu pauta personalizada en &lt;48h.
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-sky-200 dark:border-slate-700">
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
                        <span>Plan nutricional individualizado (&lt;48h)</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Resolución de dudas por email (15 días)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/60 p-2 rounded-xl border border-sky-200/60 dark:border-slate-700/60">
                    🎯 <strong>Para quién:</strong> Nuevos pacientes que buscan evaluación completa y pauta clara desde el primer momento.
                  </div>
                </div>

                {/* Card 2: Programa Completo */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-teal-600 dark:border-teal-500 shadow-sm flex flex-col justify-between space-y-4 relative print:border-teal-700">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-teal-700 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-2xs">
                    <Sparkles className="w-3 h-3" />
                    <span>Máxima Adherencia</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        Acompañamiento
                      </span>
                      <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                        3 m · 6 m · 1 Año
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-slate-700 dark:text-slate-100">
                      Programas Clínicos de Continuidad
                    </h3>
                    
                    {/* Tiers Pricing Grid */}
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

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Especialmente indicado para salud hormonal, oncología, patología digestiva o disfagia.
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-sky-200 dark:border-slate-700">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>1ª Consulta inicial exhaustiva (60 min) incluida</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>En pack 3m: 1 inicial + 6 revisiones (30-40 min)</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Soporte directo por WhatsApp / e-Health</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Reajuste dinámico de menús y texturas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-sky-50 dark:bg-slate-900/60 p-2 rounded-xl border border-sky-200/60 dark:border-slate-700/60">
                    🎯 <strong>Para quién:</strong> Procesos que requieren reeducación metabólica duradera o acompañamiento clínico estrecho.
                  </div>
                </div>

                {/* Card 3: Revisión */}
                <div className="p-5 rounded-2xl bg-[#f4f9fd] dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 flex flex-col justify-between space-y-4 print:border-stone-400">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                        Revisión
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        30-40 min
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-slate-700 dark:text-slate-100">
                      Consulta de Revisión y Evolución
                    </h3>
                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">75 €</span>
                      <span className="text-xs text-slate-500">/ sesión</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Evaluación del progreso, ajuste de nutrientes y resolución de dudas.
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-sky-200 dark:border-slate-700">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Videollamada 1 a 1 de 30-40 min</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Reajuste de pauta dietética y nutrientes</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Resolución de dudas del día a día</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Adaptación a viajes, eventos o cambios</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/60 p-2 rounded-xl border border-sky-200/60 dark:border-slate-700/60">
                    🎯 <strong>Para quién:</strong> Pacientes que ya han realizado la 1ª Consulta y buscan seguimiento.
                  </div>
                </div>

              </div>

              {/* Step-by-Step Clinical Process Inside Infographic */}
              <div className="p-5 rounded-2xl bg-[#f4f9fd] dark:bg-slate-800/50 border border-sky-200 dark:border-slate-700 space-y-3">
                <h3 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Metodología Directa de Consulta Online:</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700">
                    <span className="font-black text-teal-700 text-sm">01. Reserva</span>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      Eliges día y hora online según tu disponibilidad.
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700">
                    <span className="font-black text-teal-700 text-sm">02. Videollamada</span>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      Sesión 1 a 1 de 60 min analizando hábitos, síntomas y objetivos.
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700">
                    <span className="font-black text-teal-700 text-sm">03. Pauta (&lt;48h)</span>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      Recibes tu plan nutricional completo, recetas y pautas prácticas.
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700">
                    <span className="font-black text-teal-700 text-sm">04. Acompañamiento</span>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      Resolución de dudas continua y revisiones periódicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Tarifas de Charlas, Ponencias y Formación (Shown on 'all' and 'talks') */}
          {(activeTab === 'all' || activeTab === 'talks') && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-sky-200 dark:border-slate-700 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  <h2 className="text-lg font-bold text-slate-700 dark:text-slate-100 uppercase tracking-wider">
                    2. Tarifario de Charlas, Ponencias, Talleres y Auditorías
                  </h2>
                </div>
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 hidden sm:inline">
                  Para Asociaciones, Residencias, Colegios y Empresas
                </span>
              </div>

              {/* 4 Detailed Talk Tariff Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {talksTariffList.map((talk) => (
                  <div
                    key={talk.id}
                    className={`p-4 rounded-2xl flex flex-col justify-between space-y-3 bg-[#f4f9fd] dark:bg-slate-800/80 transition-all ${
                      talk.popular
                        ? 'border-2 border-amber-600 dark:border-amber-500 shadow-md relative bg-white dark:bg-slate-800'
                        : 'border border-sky-200 dark:border-slate-700 shadow-2xs'
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

                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 leading-snug">
                        {talk.title}
                      </h4>

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

                    <div className="pt-1 text-[10px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/60 p-1.5 rounded-lg border border-sky-100 dark:border-slate-700">
                      👥 {talk.targetAudience.slice(0, 45)}...
                    </div>
                  </div>
                ))}
              </div>
              {/* Annual Integral Service 15% Discount Banner */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-teal-500/10 to-emerald-500/15 border border-amber-300 dark:border-amber-700/60 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500 text-white shrink-0 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                      <span>15% de Descuento en Servicio Integral Anual (1 Año)</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[9px] font-black uppercase">
                        Todas las opciones
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                      Válido para convenios formativos y consultoría institucional de 1 año con compromiso de pago.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Condiciones Generales y Política de Cancelación */}
          <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs space-y-2">
            <h4 className="font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Condiciones del Servicio, Pagos y Política de Cancelación</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                • 💳 <strong>Forma de pago:</strong> Se abonará el <strong>50% al contratar</strong> los servicios y el <strong>50% restante al finalizar</strong>, excepto en las <strong>Auditorías de Menús</strong>, que se abonan el <strong>100% por adelantado</strong>.
              </p>
              <p>
                • ⚠️ <strong>Política de cancelación:</strong> Si se cancela con <strong>24 horas o menos</strong> de la fecha del taller o la charla, se cobrará el <strong>importe total (100%)</strong>.
              </p>
              <p>
                • 🎁 <strong>Servicio Integral Anual (1 Año):</strong> <strong>15% de descuento</strong> en todas las modalidades con compromiso de pago.
              </p>
              <p>
                • 📄 <strong>Facturación Oficial:</strong> Emisión de factura desglosada y documentación técnica con firma y número de colegiación sanitaria.
              </p>
              <p className="sm:col-span-2 pt-1 text-amber-900 dark:text-amber-300 font-medium">
                • 🚗 <strong>Gastos de desplazamiento:</strong> En formaciones y ponencias presenciales que requieran traslado fuera de la zona habitual, los gastos de transporte, kilometraje y dietas se cobran y presupuestan aparte.
              </p>
            </div>
          </div>

          {/* Footer of Infographic */}
          <div className="pt-4 border-t border-sky-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
            <p>
              © {new Date().getFullYear()} Gala Rodríguez Echebarrieta · Nutrición Humana y Dietética (Univ. de Navarra)
            </p>
            <div className="flex items-center gap-4 font-semibold text-teal-700 dark:text-teal-400">
              <span>{profile.email}</span>
              <span>{profile.phone}</span>
              <span>www.galarodrigueznutricion.es</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
