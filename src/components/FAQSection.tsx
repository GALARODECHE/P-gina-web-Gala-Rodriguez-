import React, { useState } from 'react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';
import { 
  HelpCircle, ChevronDown, MessageCircle, CalendarCheck, 
  Clock, ShieldCheck, HeartHandshake, FileText, Smartphone 
} from 'lucide-react';

interface FAQSectionProps {
  profile: NutritionistProfile;
  onBookClick: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: 'consulta' | 'revisiones' | 'institucional';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ profile, onBookClick }) => {
  const theme = themeStyles[profile.themeColor || 'teal'];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'consulta' | 'revisiones' | 'institucional'>('all');

  const faqs: FAQItem[] = [
    {
      category: 'revisiones',
      question: '¿Cómo funcionan las revisiones quincenales en los packs de 3 meses, 6 meses y 1 año?',
      answer: 'Todos los programas incluyen 1 consulta inicial de 60 minutos y revisiones de 30-45 minutos cada 15 días (6 revisiones en el pack de 3 meses, 12 en el de 6 meses y 24 en el de 1 año). En cada revisión evaluamos sintomatología, ajustes metabólicos, adherencia y actualizamos tu plan.',
    },
    {
      category: 'consulta',
      question: '¿Cómo se abona el pack seleccionado?',
      answer: 'El importe total del pack elegido se abona en la consulta inicial mediante Bizum o transferencia bancaria. Se emite factura sanitaria oficial completa desgravable.',
    },
    {
      category: 'revisiones',
      question: '¿Qué ocurre si necesito cambiar la fecha u hora de una revisión?',
      answer: 'Puedes reprogramar tu cita sin ningún coste siempre que nos avises con al menos 24 horas de antelación. Las citas canceladas con menos de 24h o no asistidas se computarán como realizadas para respetar la agenda clínica.',
    },
    {
      category: 'consulta',
      question: '¿Cómo se coordina mi plan nutricional con mis médicos especialistas?',
      answer: 'Con más de 20 años de experiencia en entornos hospitalarios y sanitarios, elaboro planes y pautas 100% compatibles con tus tratamientos médicos (oncología, digestivo, endocrinología). Si es necesario, puedo redactar informes nutricionales para tu especialista.',
    },
    {
      category: 'institucional',
      question: '¿Cómo se estructuran las charlas, talleres y capacitaciones de 60 minutos?',
      answer: 'Las ponencias y talleres tienen una duración de 60 minutos y se realizan tanto en modalidad presencial como online (vía Zoom/Meet/Teams). Incluyen soporte audiovisual interactivo, turno de resolución de dudas en directo y un dossier resumen en PDF para los asistentes.',
    },
    {
      category: 'institucional',
      question: '¿Qué servicios se ofrecen a residencias, centros de día y colectividades?',
      answer: 'Ofrezco auditoría y validación técnica de menús basales y derivaciones, protocolos de adaptación de texturas para disfagia según la escala internacional IDDSI, formación de 60 min para personal sociosanitario y asesoría en nutrición enteral.',
    },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hola Gala, tengo una duda antes de reservar mi consulta nutricional.'
  )}`;

  return (
    <section id="faq" className="py-16 sm:py-24 bg-stone-50/60 dark:bg-slate-900/40 border-b border-sky-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
              <HelpCircle className="w-3.5 h-3.5 inline mr-1" />
              Resolución de Dudas Frecuentes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            Preguntas Frecuentes sobre las Consultas y Servicios
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre el funcionamiento de las citas, pagos, revisiones quincenales y formación.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Todas las Preguntas' },
            { id: 'consulta', label: 'Consulta y Pagos' },
            { id: 'revisiones', label: 'Packs y Revisiones' },
            { id: 'institucional', label: 'Charlas y Entidades' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? `${theme.primary} shadow-xs scale-102`
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-750'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 rotate-180'
                        : 'bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-750">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 hidden sm:flex">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                ¿Tienes una consulta específica o caso clínico?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Escríbeme directamente por WhatsApp o reserva tu primera sesión online.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-teal-700 hover:bg-teal-800 text-white transition-all inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar por WhatsApp</span>
            </a>
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 transition-all shadow-xs cursor-pointer"
            >
              Pedir Cita Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
