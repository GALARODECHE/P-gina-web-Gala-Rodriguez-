import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageCircle, Send, Video, ShieldCheck } from 'lucide-react';
import { NutritionistProfile, NutritionService, BookingRequest } from '../types';
import { themeStyles } from '../utils/theme';

interface ContactBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: NutritionistProfile;
  services: NutritionService[];
  initialService?: NutritionService | null;
  initialCalcDetails?: string;
}

export const ContactBookingModal: React.FC<ContactBookingModalProps> = ({
  isOpen,
  onClose,
  profile,
  services,
  initialService,
  initialCalcDetails,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || services[0]?.id || ''
  );
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('Disfagia / Nutrición Enteral / Clínica');
  const [notes, setNotes] = useState(initialCalcDetails || '');

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const theme = themeStyles[profile.themeColor || 'emerald'];
  const currentService = services.find((s) => s.id === selectedServiceId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hola ${profile.name}, me gustaría reservar cita para el plan "${currentService?.title || 'Consulta Online'}". %0A%0AMis datos:%0A- Nombre: ${clientName}%0A- Email: ${clientEmail}%0A- Teléfono: ${clientPhone}%0A- Objetivo Clínico: ${primaryGoal}%0A- Modalidad: Consulta 100% Online (Videollamada segura)%0A- Notas: ${notes}`;
    const cleanNumber = profile.whatsappNumber.replace(/\+/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                ¡Solicitud de Cita Online Registrada!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Gracias {clientName}. Te responderé en un plazo máximo de 24 horas a {clientEmail} con el enlace de videollamada segura y las opciones de horario.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirmar Inmediatamente por WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-xs text-slate-700 dark:text-slate-300"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300">
                  <Calendar className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Reserva de Cita Nutricional</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      100% Online
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Atención directa por {profile.name} ({profile.colegiadorNumber})
                  </p>
                </div>
              </div>

              {/* Online Exclusivity Badge */}
              <div className="mt-3 p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 flex items-center gap-2.5 text-xs text-teal-900 dark:text-teal-200">
                <Video className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>
                  <strong>Servicio 100% Online:</strong> Consultas por videollamada cifrada y seguimiento clínico digital desde cualquier lugar, con total comodidad.
                </span>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Selecciona la Tarifa o Servicio
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.price} - {s.period})
                  </option>
                ))}
              </select>
            </div>

            {/* Client Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: María García"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Tu Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+34 600 000 000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Modalidad de Consulta
                </label>
                <div className="px-3.5 py-2.5 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50/70 dark:bg-teal-950/50 text-xs sm:text-sm font-semibold text-teal-800 dark:text-teal-300 flex items-center gap-2">
                  <Video className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>100% Online (Videollamada segura)</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                ¿Cuál es el motivo principal de la consulta o patología?
              </label>
              <input
                type="text"
                placeholder="Ej: Disfagia, soporte oncológico, nutrición enteral, digestiones..."
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Notas adicionales (analíticas recientes, medicación o disponibilidad horaria)
              </label>
              <textarea
                rows={3}
                placeholder="Menciona alergias, patologías o disponibilidad horaria..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 ${theme.primary}`}
              >
                <span>Solicitar Cita Online</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
