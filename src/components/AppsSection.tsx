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
  Globe,
  ExternalLink,
  Search,
  Refrigerator,
  BarChart3,
  Wheat,
} from 'lucide-react';
import { NutritionApp, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';
import tuNutriLensIcon from '../assets/images/TuNutriLens-App-Icon-512x512.png';
import tuNutriLensBanner from '../assets/images/TuNutriLens_Elemento_Grafico_Destacado_1024x500.png';

interface AppsSectionProps {
  profile: NutritionistProfile;
  apps?: NutritionApp[];
  onOpenTuNutriLens?: () => void;
}

export const AppsSection: React.FC<AppsSectionProps> = ({ profile, onOpenTuNutriLens }) => {
  const theme = themeStyles[profile.themeColor || 'teal'];
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interestProfile, setInterestProfile] = useState('paciente');

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement>, fallbackUrl: string) => {
    const target = e.currentTarget;
    if (!target.dataset.fallbackApplied) {
      target.dataset.fallbackApplied = 'true';
      target.src = fallbackUrl;
    }
  };
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
      className="py-16 sm:py-24 border-b border-black/5 dark:border-slate-800/80 bg-transparent transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>App Oficial</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3b6e5a] dark:text-[#9fc3b0] tracking-tight">
            Tu Nutricionista de bolsillo
          </h2>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.
          </p>
        </div>

        {/* Banner Gráfico Destacado Oficial (1024x500) */}
        <div className="rounded-3xl overflow-hidden border border-slate-400 dark:border-slate-700 shadow-md group bg-slate-900">
          {onOpenTuNutriLens ? (
            <button
              type="button"
              onClick={onOpenTuNutriLens}
              title="Abrir TuNutriLens (con retorno a servicios)"
              className="block w-full relative overflow-hidden text-left cursor-pointer"
            >
              <img
                src={tuNutriLensBanner}
                onError={(e) => handleImageFallback(e, '/TuNutriLens_Elemento_Grafico_Destacado_1024x500.png')}
                alt="TuNutriLens - Escanea tus platos en 2 segundos. Calorías, Macronutrientes y Comida Real"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.015]"
              />
            </button>
          ) : (
            <a
              href="https://www.tunutrilens.es"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir a www.tunutrilens.es - Escáner nutricional inteligente"
              className="block relative overflow-hidden"
            >
              <img
                src={tuNutriLensBanner}
                onError={(e) => handleImageFallback(e, '/TuNutriLens_Elemento_Grafico_Destacado_1024x500.png')}
                alt="TuNutriLens - Escanea tus platos en 2 segundos. Calorías, Macronutrientes y Comida Real"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.015]"
              />
            </a>
          )}
        </div>

        {/* Main App Presentation Card */}
        <div className="rounded-3xl p-4.5 xs:p-6 sm:p-8 lg:p-10 bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-sm transition-all hover:shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
            
            {/* App Icon Image - Foto original TuNutriLens */}
            <div className="relative shrink-0">
              {onOpenTuNutriLens ? (
                <button
                  type="button"
                  onClick={onOpenTuNutriLens}
                  title="Abrir app TuNutriLens con retorno directo"
                  className="block group cursor-pointer"
                >
                  <img
                    src={tuNutriLensIcon}
                    onError={(e) => handleImageFallback(e, '/TuNutriLens-App-Icon-512x512.png')}
                    alt="Foto original oficial de la app TuNutriLens"
                    loading="eager"
                    decoding="async"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-lg ring-4 ring-emerald-500/30 dark:ring-emerald-400/30 transition-transform group-hover:scale-105"
                  />
                </button>
              ) : (
                <a
                  href="https://www.tunutrilens.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Abrir web oficial TuNutriLens"
                  className="block group"
                >
                  <img
                    src={tuNutriLensIcon}
                    onError={(e) => handleImageFallback(e, '/TuNutriLens-App-Icon-512x512.png')}
                    alt="Foto original oficial de la app TuNutriLens"
                    loading="eager"
                    decoding="async"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover shadow-lg ring-4 ring-emerald-500/30 dark:ring-emerald-400/30 transition-transform group-hover:scale-105"
                  />
                </a>
              )}
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
                {onOpenTuNutriLens ? (
                  <button
                    type="button"
                    onClick={onOpenTuNutriLens}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-emerald-950 dark:text-emerald-200 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 transition-colors cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    <span>www.tunutrilens.es</span>
                  </button>
                ) : (
                  <a
                    href="https://www.tunutrilens.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-emerald-950 dark:text-emerald-200 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    <span>www.tunutrilens.es</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span>En fase de lanzamiento</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white tracking-tight">
                Tu Nutricionista de bolsillo
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.
              </p>

              {/* Botones de acción: Visitar web oficial y Pre-registro */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {onOpenTuNutriLens ? (
                  <button
                    type="button"
                    onClick={onOpenTuNutriLens}
                    id="btn-visit-tunutrilens-web"
                    className="px-6 py-3 rounded-2xl bg-[#2f5747] hover:bg-[#234336] active:bg-[#1a3026] text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <img
                      src={tuNutriLensIcon}
                      onError={(e) => handleImageFallback(e, '/TuNutriLens-App-Icon-512x512.png')}
                      alt="TuNutriLens"
                      loading="eager"
                      className="w-5 h-5 rounded-md object-contain shrink-0 ring-1 ring-white/30"
                    />
                    <span>Explorar App: www.tunutrilens.es</span>
                  </button>
                ) : (
                  <a
                    href="https://www.tunutrilens.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-visit-tunutrilens-web"
                    className="px-6 py-3 rounded-2xl bg-[#2f5747] hover:bg-[#234336] active:bg-[#1a3026] text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <img
                      src={tuNutriLensIcon}
                      onError={(e) => handleImageFallback(e, '/TuNutriLens-App-Icon-512x512.png')}
                      alt="TuNutriLens"
                      loading="eager"
                      className="w-5 h-5 rounded-md object-contain shrink-0 ring-1 ring-white/30"
                    />
                    <span>Visitar web: www.tunutrilens.es</span>
                    <ExternalLink className="w-4 h-4 text-emerald-300 opacity-80" />
                  </a>
                )}

                <button
                  type="button"
                  id="btn-tunutrilens-toggle"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-5 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-orange-200" />
                  <span>{isExpanded ? 'Ocultar funciones' : 'Ver funciones y avisarme'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 ml-1 text-orange-200" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-1 text-orange-200" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* DESPLEGABLE: Información detallada de la App y Pre-registro */}
          {isExpanded && (
            <div className="mt-8 pt-8 border-t border-slate-400 dark:border-slate-700 space-y-8 animate-fadeIn">
              
              {/* Bloque 1: ✨ LO QUE PUEDES HACER CON TUNUTRILENS */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">
                    ✨ LO QUE PUEDES HACER CON TUNUTRILENS:
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.
                </p>

                {/* Grid con las 5 funciones clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
                  
                  {/* 1. Lente Plato */}
                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                        <Camera className="w-4 h-4" />
                      </div>
                      <span>📸 1. Escáner Inteligente de Platos (Lente Plato)</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Apunta tu cámara a tu comida casera o de restaurante. La IA desglosa al instante ingredientes, calorías reales y equilibrio de macronutrientes.
                    </p>
                  </div>

                  {/* 2. Lente Súper */}
                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                        <Search className="w-4 h-4" />
                      </div>
                      <span>🔍 2. Detector de Trampas en el Supermercado (Lente Súper)</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Escanea envases y tablas nutricionales. Descubre qué estás comprando de verdad, desmitificando reclamos engañosos como &quot;0% azúcares&quot; o &quot;rico en fibra&quot;.
                    </p>
                  </div>

                  {/* 3. Lente Nevera */}
                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                        <Refrigerator className="w-4 h-4" />
                      </div>
                      <span>🧊 3. Aprovecha tu Nevera (Lente Nevera)</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      ¿No sabes qué cocinar? Fotografía tus ingredientes sueltos y recibe sugerencias de recetas saludables en segundos, reduciendo el desperdicio.
                    </p>
                  </div>

                  {/* 4. Diario y Semáforo */}
                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span>📊 4. Diario y Semáforo Nutricional Diario</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Registra tus comidas con un clic y visualiza tu equilibrio semanal (proteínas, grasas saludables, fibra) sin obsesionarte con números rígidos.
                    </p>
                  </div>

                  {/* 5. Filtros Clínicos Personalizados */}
                  <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-900/80 border border-slate-400 dark:border-slate-700/80 space-y-2 sm:col-span-2 lg:col-span-2">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                      <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                        <Wheat className="w-4 h-4" />
                      </div>
                      <span>🌾 5. Filtros Clínicos Personalizados</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      Adapta todas las recomendaciones a tu estilo de vida: sin gluten (celiaquía), sin lactosa, opciones vegetarianas o control glucémico.
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
                        <option value="paciente">Soy paciente o particular (quiero aprender a comer con criterio científico)</option>
                        <option value="profesional">Soy profesional sanitario o centro de salud</option>
                        <option value="familiar">Soy familiar o quiero mejorar la alimentación en mi hogar</option>
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

        {/* Banner web oficial TuNutriLens */}
        <div className="rounded-3xl p-5 sm:p-6 bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={tuNutriLensIcon}
              onError={(e) => handleImageFallback(e, '/TuNutriLens-App-Icon-512x512.png')}
              alt="TuNutriLens"
              loading="eager"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30 shrink-0"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-300">
                  Portal Oficial
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">www.tunutrilens.es</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                Tu Nutricionista de bolsillo · TuNutriLens
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.
              </p>
            </div>
          </div>
          {onOpenTuNutriLens ? (
            <button
              type="button"
              onClick={onOpenTuNutriLens}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <img
                src={tuNutriLensIcon}
                onError={(e) => handleImageFallback(e, '/TuNutriLens-App-Icon-512x512.png')}
                alt="TuNutriLens"
                loading="eager"
                className="w-4 h-4 rounded-md object-contain shrink-0 ring-1 ring-white/30"
              />
              <span>Abrir App TuNutriLens</span>
            </button>
          ) : (
            <a
              href="https://www.tunutrilens.es"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <img
                src={tuNutriLensIcon}
                onError={(e) => handleImageFallback(e, '/TuNutriLens-App-Icon-512x512.png')}
                alt="TuNutriLens"
                loading="eager"
                className="w-4 h-4 rounded-md object-contain shrink-0 ring-1 ring-white/30"
              />
              <span>Abrir www.tunutrilens.es</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          )}
        </div>

      </div>
    </section>
  );
};
