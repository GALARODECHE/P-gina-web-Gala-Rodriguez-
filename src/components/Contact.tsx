import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { WebsiteConfig } from '../types';
import { themeStyles } from '../utils/theme';

interface ContactProps {
  config: WebsiteConfig;
  preselectedSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ config, preselectedSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: preselectedSubject || 'Consulta General',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const theme = themeStyles[config.themeColor];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Consulta General',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${theme.badge}`}>
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Ponte en contacto con nosotros hoy mismo. Te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Información de contacto
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl ${theme.primaryBgLight} ${theme.primaryText}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Correo Electrónico</p>
                    <a href={`mailto:${config.email}`} className="text-slate-600 dark:text-slate-300 hover:underline">
                      {config.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl ${theme.primaryBgLight} ${theme.primaryText}`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Teléfono / WhatsApp</p>
                    <a href={`tel:${config.phone}`} className="text-slate-600 dark:text-slate-300 hover:underline">
                      {config.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl ${theme.primaryBgLight} ${theme.primaryText}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Ubicación</p>
                    <p className="text-slate-600 dark:text-slate-300">{config.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  <div className={`p-2.5 rounded-xl ${theme.primaryBgLight} ${theme.primaryText}`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Horario de Atención</p>
                    <p className="text-slate-600 dark:text-slate-300">Lunes a Viernes: 09:00 - 19:00 hrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response highlight */}
            <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-900 dark:text-indigo-200 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-medium">
                ¿Tienes una idea en mente? Te enviamos una propuesta detallada y presupuesto sin compromiso.
              </p>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Muchas gracias por contactarnos, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>.
                    Hemos recibido tu mensaje sobre "<span className="font-semibold">{formData.subject}</span>" y te responderemos a <span className="font-semibold">{formData.email}</span> a la brevedad.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Envíanos un mensaje
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                        Asunto del Mensaje
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Consulta General">Consulta General</option>
                        <option value="Desarrollo Web">Desarrollo Web</option>
                        <option value="Diseño UX/UI">Diseño UX/UI</option>
                        <option value="Tienda Online">Tienda Online (E-Commerce)</option>
                        <option value="Mantenimiento">Optimización o Mantenimiento</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Mensaje / Detalles del Proyecto *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos un poco sobre tus necesidades, objetivos o plazos estimados..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-form"
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${theme.primary}`}
                  >
                    {isSubmitting ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
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
