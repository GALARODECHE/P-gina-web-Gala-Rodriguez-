import React, { useState } from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  MessageCircle,
  Send,
  Video,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Clock,
} from 'lucide-react';
import { NutritionistProfile, NutritionService } from '../types';
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
  const [primaryGoal, setPrimaryGoal] = useState('Salud de la Mujer / Disfagia / Oncología / Nutrición Clínica');
  const [notes, setNotes] = useState(initialCalcDetails || '');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const theme = themeStyles[profile.themeColor || 'teal'];
  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];
  const targetEmail = profile.email || 'gala@galarodrigueznutricion.es';

  const getEmailBody = () => {
    return `SOLICITUD DE CITA ONLINE - www.galarodrigueznutricion.es
--------------------------------------------------
DATOS DEL PACIENTE:
• Nombre completo: ${clientName}
• Email de contacto: ${clientEmail}
• Teléfono / WhatsApp: ${clientPhone}

DETALLES DEL SERVICIO:
• Servicio seleccionado: ${currentService?.title || 'Consulta Nutricional'}
• Tarifa: ${currentService?.price || ''} (${currentService?.period || ''})
• Modalidad: Consulta 100% Online (Videollamada segura)

MOTIVO CLÍNICO Y NOTAS:
• Motivo principal / Patología: ${primaryGoal}
• Notas adicionales / Disponibilidad: ${notes || 'Sin notas adicionales'}

Fecha de solicitud: ${new Date().toLocaleString('es-ES')}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[SOLICITUD CITA ONLINE] ${clientName} - ${currentService?.title || 'Nutrición'}`);
    const body = encodeURIComponent(getEmailBody());
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Gala (${profile.name}), me gustaría solicitar cita online para el plan "${currentService?.title || 'Consulta Online'}".\n\nMis datos:\n- Nombre: ${clientName}\n- Email: ${clientEmail}\n- Teléfono: ${clientPhone}\n- Motivo / Patología: ${primaryGoal}\n- Modalidad: 100% Online\n- Notas: ${notes || 'Ninguna'}`
    );
    const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store in local storage to keep history
    try {
      const newBooking = {
        id: 'cita_' + Date.now(),
        date: new Date().toISOString(),
        clientName,
        clientEmail,
        clientPhone,
        serviceTitle: currentService?.title,
        price: currentService?.price,
        primaryGoal,
        notes,
      };
      const existing = JSON.parse(localStorage.getItem('gala_citas_solicitadas') || '[]');
      existing.unshift(newBooking);
      localStorage.setItem('gala_citas_solicitadas', JSON.stringify(existing));
    } catch {
      // ignore
    }

    // Trigger mail client with all formatted data
    window.location.href = getMailtoLink();
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-4 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                ¡Solicitud de Cita Registrada!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Hemos preparado el correo hacia <strong>{targetEmail}</strong> para <strong>{clientName}</strong> ({currentService?.title}).
              </p>
            </div>

            {/* Next Steps Infobox */}
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-800/80 border border-stone-200/80 dark:border-slate-700/70 text-left space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>¿Cuáles son los siguientes pasos?</span>
              </div>
              <ul className="space-y-1.5 text-[11px] sm:text-xs">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">1.</span>
                  <span><strong>Confirmación de agenda:</strong> Gala revisará tu solicitud y acordará contigo el día y hora exactos por WhatsApp o email.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">2.</span>
                  <span><strong>Abono del servicio:</strong> Una vez agendada la fecha, recibirás las indicaciones para formalizar la reserva previa a la sesión.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-teal-600 dark:text-teal-400">3.</span>
                  <span><strong>Videollamada 1 a 1:</strong> Recibirás tu enlace seguro para conectarte a la sesión clínica en la fecha convenida.</span>
                </li>
              </ul>
            </div>

            {/* Future Direct Stripe / Checkout Action if available */}
            {currentService?.stripePaymentUrl && (
              <a
                href={currentService.stripePaymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95"
              >
                <CreditCard className="w-4 h-4" />
                <span>Formalizar Pago Seguro Online</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            )}

            {/* Direct Multi-Channel Dispatch Actions */}
            <div className="space-y-3 pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirmar Inmediatamente por WhatsApp</span>
              </a>

              <a
                href={getMailtoLink()}
                className="w-full px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-stone-300 dark:border-slate-700"
              >
                <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Abrir / Enviar en mi aplicación de Correo</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <button
                onClick={handleCopySummary}
                className="w-full px-5 py-2.5 rounded-xl border border-dashed border-stone-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Datos copiados al portapapeles!' : 'Copiar resumen de la solicitud'}</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
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
                    Atención directa por {profile.name} ({targetEmail})
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
                  Tu Email de Contacto *
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
                placeholder="Ej: Salud de la mujer (hormonal/menopausia), disfagia, oncología, nutrición enteral..."
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
                placeholder="Menciona alergias, patologías o disponibilidad horaria preferida..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Payment & Coordination info */}
            <div className="p-3 rounded-2xl bg-stone-50 dark:bg-slate-800/60 border border-stone-200/80 dark:border-slate-700/60 flex items-start gap-2.5 text-[11px] text-slate-600 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <span>
                <strong>Gestión transparente:</strong> Al enviar la solicitud, Gala contactará contigo para confirmar el día y hora exactos. El abono se coordina de forma previa a la consulta.
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer ${theme.primary}`}
              >
                <span>Solicitar Cita Online por Email y WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                Se enviará la notificación directa a <strong>{targetEmail}</strong> y podrás confirmar por WhatsApp.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

