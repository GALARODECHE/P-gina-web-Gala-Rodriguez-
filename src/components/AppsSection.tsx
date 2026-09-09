import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Sparkles,
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Camera,
  Layers,
  UtensilsCrossed,
  ShieldCheck,
  Mail,
  User,
  Send,
  Calendar,
  Eye,
  Check,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { NutritionApp, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';
import appIconImg from '../assets/images/icon-512.png';

interface AppsSectionProps {
  profile: NutritionistProfile;
  apps?: NutritionApp[];
}

export const AppsSection: React.FC<AppsSectionProps> = ({ profile }) => {
  const theme = themeStyles[profile.themeColor || 'teal'];
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interestProfile, setInterestProfile] = useState('paciente');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [storedEmail, setStoredEmail] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tunutrilens_preregister_email');
      if (saved) {
        setStoredEmail(saved);
        setIsSubmitted(true);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const handlePreRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      const registrationData = {
        name: name.trim(),
        email: email.trim(),
        interestProfile,
        registeredAt: new Date().toISOString(),
      };
      localStorage.setItem('tunutrilens_preregister_email', email.trim());
      localStorage.setItem(
        'tunutrilens_preregistration_data',
        JSON.stringify(registrationData)
      );
    } catch {
      // Local storage fallback
    }

    setStoredEmail(email.trim());
    setIsSubmitted(true);
  };

  const handleResetRegistration = () => {
    try {
      localStorage.removeItem('tunutrilens_preregister_email');
      localStorage.removeItem('tunutrilens_preregistration_data');
    } catch {
      // Ignore
    }
    setStoredEmail(null);
    setIsSubmitted(false);
    setName('');
    setEmail('');
  };

  return (
    <section
      id="apps"
      className="py-16 sm:py-24 border-b border-slate-400/80 dark:border-slate-800/80 bg-slate-300 dark:bg-slate-900/40 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <Smartphone className="w-3.5 h-3.5" />
            <span>Innovación E-Health</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3b6e5a] dark:text-[#9fc3b0] tracking-tight">
            TuNutriLens: ¡Nutre Tu Vida!
          </h2>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Aplicación de salud digital y nutrición clínica desarrollada por <strong>Gala Rodríguez Echebarrieta</strong> para conectar la alimentación diaria con tu seguimiento en consulta.
          </p>
        </div>

        {/* Main App Presentation Card */}
        <div className="rounded-3xl p-4.5 xs:p-6 sm:p-8 lg:p-10 bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
            
            {/* App Icon Image */}
            <div className="relative shrink-0">
              <img
                src={appIconImg}
                alt="Icono oficial de la app TuNutriLens"
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-lg ring-4 ring-orange-500/25 dark:ring-orange-400/25"
                onError={(e) => {
                  // Fallback to public path if needed
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/icon-512.png')) {
                    target.src = '/icon-512.png';
                  }
                }}
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 p-1.5 rounded-full shadow-xs">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>

            {/* App Header & Details */}
            <div className="flex-1 space-y-3 min-w-0">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/70 text-orange-950 dark:text-orange-200 border border-orange-300 dark:border-orange-800/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                  <span>App Oficial E-Health</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span>En fase de lanzamiento</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white tracking-tight">
                TuNutriLens
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Inteligencia visual aplicada a la nutrición clínica: reconocimiento fotográfico de platos, cálculo de energía y macronutrientes, y validación de texturas para disfagia.
              </p>

              {/* Botón "Próximamente disponible" que despliega la información */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  id="btn-tunutrilens-toggle"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-orange-200" />
                  <span>Próximamente disponible</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 ml-1 text-orange-200" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-1 text-orange-200" />
                  )}
                </button>

                <span className="text-xs text-slate-700 dark:text-slate-400">
                  {isExpanded
                    ? 'Información y pre-registro desplegados'
                    : 'Haz clic para ver funciones y pre-registrarte'}
                </span>
              </div>
            </div>

          </div>

          {/* DESPLEGABLE: Información detallada de la App y Pre-registro */}
          {isExpanded && (
            <div className="mt-8 pt-8 border-t border-slate-400 dark:border-slate-700 space-y-8 animate-fadeIn">
              
              {/* Bloque 1: ¿Qué es TuNutriLens y funcionalidades? */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                    ¿Cómo te ayudará TuNutriLens en tu día a día?
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  TuNutriLens nace de la experiencia clínica de Gala Rodríguez para resolver el mayor reto de cualquier tratamiento nutricional: la adherencia real y la comunicación fluida entre paciente y profesional sanitario.
                </p>

                {/* Grid de 4 pilares */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  
                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        <Camera className="w-4 h-4" />
                      </div>
                      <span>Escáner Inteligente con IA</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Fotografía tu plato y obtén al instante una estimación rigurosa de calorías, distribución de macronutrientes y calidad de los ingredientes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-orange-100 text-orange-950 border border-orange-300 dark:bg-orange-950 dark:text-orange-200">
                        <UtensilsCrossed className="w-4 h-4 text-orange-600" />
                      </div>
                      <span>Texturas y Disfagia (IDDSI)</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Algoritmos orientados a pacientes con problemas de deglución o personas mayores para evaluar viscosidades y evitar atragantamientos.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span>Diario Nutricional Sincronizado</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Registro continuo de ingestas, sensaciones digestivas y evolución calórica compartido directamente con la consulta de Gala.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span>Supermercado Lens</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Semáforo nutricional en tiempo real para leer códigos de barras, detectar ultraprocesados y tomar mejores decisiones en la compra.
                    </p>
                  </div>

                </div>
              </div>

              {/* Bloque 2: Pre-registro y aviso cuando esté disponible */}
              <div className="rounded-2xl p-5 sm:p-7 bg-slate-300 dark:bg-slate-900 border border-slate-400 dark:border-slate-700 shadow-2xs space-y-5">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      <Bell className="w-3 h-3" />
                      <span>Acceso Anticipado</span>
                    </div>
                    <h5 className="text-lg font-extrabold text-slate-800 dark:text-white">
                      Pre-regístrate para el Lanzamiento
                    </h5>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                      Te avisaremos por correo en cuanto TuNutriLens esté disponible en App Store y Google Play, con acceso preferente para pacientes de consulta.
                    </p>
                  </div>
                </div>

                {/* Formulario o confirmación de pre-registro */}
                {isSubmitted ? (
                  <div className="p-4 rounded-xl bg-slate-200 dark:bg-slate-800 border border-emerald-400 dark:border-emerald-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-slate-800 dark:text-white">
                          ¡Pre-registro confirmado con éxito!
                        </p>
                        <p className="text-xs text-slate-700 dark:text-slate-300">
                          Te enviaremos la invitación de descarga y aviso de publicación a{' '}
                          <strong className="text-emerald-800 dark:text-emerald-400">{storedEmail}</strong>.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleResetRegistration}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 underline cursor-pointer shrink-0"
                    >
                      Modificar correo
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePreRegister} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      
                      {/* Campo Nombre */}
                      <div>
                        <label
                          htmlFor="preregister-name"
                          className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1"
                        >
                          Tu Nombre
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            id="preregister-name"
                            required
                            placeholder="Ej. María Gómez"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-base sm:text-sm bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>

                      {/* Campo Email */}
                      <div>
                        <label
                          htmlFor="preregister-email"
                          className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1"
                        >
                          Correo Electrónico para Avisarte
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            id="preregister-email"
                            required
                            placeholder="tu.correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-base sm:text-sm bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 text-slate-800 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Selector de Perfil */}
                    <div>
                      <label
                        htmlFor="preregister-profile"
                        className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1"
                      >
                        ¿Cuál es tu interés principal?
                      </label>
                      <select
                        id="preregister-profile"
                        value={interestProfile}
                        onChange={(e) => setInterestProfile(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl text-base sm:text-sm bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                      >
                        <option value="paciente">Soy paciente o particular (quiero mejorar mi alimentación)</option>
                        <option value="profesional">Soy profesional sanitario o centro de salud</option>
                        <option value="familiar">Soy familiar o cuidador de persona con disfagia o mayores</option>
                        <option value="asociacion">Represento a una asociación o empresa</option>
                      </select>
                    </div>

                    {/* Botón de envío */}
                    <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        type="submit"
                        id="btn-confirm-preregister"
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Pre-registrarme y avisarme cuando esté disponible</span>
                      </button>

                      <span className="text-[11px] text-slate-600 dark:text-slate-400 text-center sm:text-right">
                        Sin compromiso. Notificación exclusiva al ser publicada.
                      </span>
                    </div>

                  </form>
                )}

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
