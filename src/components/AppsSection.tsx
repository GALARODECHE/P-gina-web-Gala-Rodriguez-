import React, { useState } from 'react';
import {
  Smartphone,
  CheckCircle,
  Sparkles,
  Eye,
  Camera,
  ShoppingCart,
  Calendar,
  Droplets,
  Flame,
  ShieldCheck,
  Zap,
  Layers,
  ChevronRight,
  Info,
} from 'lucide-react';
import { NutritionApp, NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface AppsSectionProps {
  profile: NutritionistProfile;
  apps: NutritionApp[];
}

type ScreenKey = 'scanner' | 'supermarket' | 'diary';

export const AppsSection: React.FC<AppsSectionProps> = ({
  profile,
  apps,
}) => {
  const selectedApp = apps[0];
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('scanner');
  const theme = themeStyles[profile.themeColor || 'teal'];

  const screens = [
    {
      id: 'scanner' as ScreenKey,
      title: '1. Escáner de Comida IA',
      shortTitle: 'Escáner IA',
      icon: Camera,
      badge: 'Visión Artificial',
      summary: 'Detección instantánea de alimentos, cálculo de calorías y desglose exacto de macronutrientes.',
      color: 'from-emerald-500 to-teal-600',
      tagColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300',
    },
    {
      id: 'supermarket' as ScreenKey,
      title: '2. Supermercado Lens',
      shortTitle: 'Supermercado',
      icon: ShoppingCart,
      badge: 'NutriScore y NOVA',
      summary: 'Semáforo nutricional en tiempo real, detección de ultraprocesados y veredicto clínico.',
      color: 'from-teal-500 to-cyan-600',
      tagColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950/70 dark:text-teal-300',
    },
    {
      id: 'diary' as ScreenKey,
      title: '3. Diario e Hidratación',
      shortTitle: 'Diario de Hoy',
      icon: Calendar,
      badge: 'Seguimiento Diario',
      summary: 'Balance calórico de ingestas, registro fotográfico y control de hidratación sincronizado.',
      color: 'from-cyan-600 to-blue-600',
      tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300',
    },
  ];

  return (
    <section id="apps" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80 bg-gradient-to-b from-stone-50/50 via-white to-stone-50/50 dark:from-slate-900/40 dark:via-slate-900/90 dark:to-slate-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <Smartphone className="w-3.5 h-3.5" />
            <span>Innovación E-Health y App Propia</span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            TuNutriLens: ¡Nutre Tu Vida!
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Herramienta clínica desarrollada por <strong>Gala Rodríguez Echebarrieta</strong> que combina inteligencia visual para el análisis de platos, control nutricional y sincronización directa con tu seguimiento en consulta.
          </p>
        </div>

        {/* Official Banner Card */}
        {selectedApp && (
          <div className="mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-emerald-200/80 dark:border-emerald-900/50 bg-gradient-to-r from-[#0d6840] via-[#0f764a] to-[#128353] text-white">
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Left Brand Identity */}
              <div className="flex items-center gap-5 text-left w-full md:w-auto">
                <div className="relative shrink-0">
                  {selectedApp.iconUrl ? (
                    <img
                      src={selectedApp.iconUrl}
                      alt="Icono oficial TuNutriLens"
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover shadow-md ring-4 ring-white/20"
                    />
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-emerald-800/80 flex items-center justify-center ring-4 ring-white/20">
                      <Eye className="w-10 h-10 text-emerald-300" />
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 p-1 rounded-full shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-400/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-300" />
                    <span>App Oficial E-Health</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    TuNutriLens
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                    ¡Nutre Tu Vida! · Desarrollada por Gala Rodríguez
                  </p>
                </div>
              </div>

              {/* Right 4 Pillars Chips */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full md:max-w-md">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/40 text-emerald-200 shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs leading-tight">Escaneo con IA</div>
                    <div className="text-[10px] text-emerald-100/90 leading-tight">Análisis visual fotográfico</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/40 text-amber-200 shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs leading-tight">Calorías y Macros</div>
                    <div className="text-[10px] text-emerald-100/90 leading-tight">Desglose nutricional exacto</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/40 text-cyan-200 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs leading-tight">Diario Nutricional</div>
                    <div className="text-[10px] text-emerald-100/90 leading-tight">Seguimiento de ingestas</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-teal-500/40 text-teal-200 shrink-0">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs leading-tight">Supermercado Lens</div>
                    <div className="text-[10px] text-emerald-100/90 leading-tight">Semáforo de productos</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Real App Screens Interactive Showcase */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Capturas Reales de la Aplicación</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Interactúa con las pantallas reales de TuNutriLens y descubre cómo asiste tu plan nutricional diario.
              </p>
            </div>

            {/* Screen Switcher Tabs */}
            <div className="flex p-1 rounded-2xl bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 w-full md:w-auto overflow-x-auto">
              {screens.map((s) => {
                const IconComponent = s.icon;
                const isActive = activeScreen === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex-1 md:flex-initial justify-center ${
                      isActive
                        ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-sm border border-stone-200/80 dark:border-slate-700'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-teal-600 dark:text-teal-400' : ''}`} />
                    <span>{s.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Screen Feature & Realistic Smartphone UI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-9 border border-stone-200/90 dark:border-slate-700/80 shadow-sm">
            
            {/* Left: Realistic Smartphone Mockup Render */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[340px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl ring-1 ring-slate-800 relative">
                
                {/* Speaker & Camera Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>

                {/* Inner Screen Canvas */}
                <div className="bg-[#f7fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 rounded-[36px] overflow-hidden border border-slate-200 dark:border-slate-800 pt-7 pb-4 px-4 min-h-[580px] flex flex-col justify-between select-none">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 dark:text-slate-200 px-2 mb-3">
                    <span>9:41</span>
                    <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">100% 🔋</span>
                  </div>

                  {/* SCREEN 1: Escáner de Comida con IA */}
                  {activeScreen === 'scanner' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="flex items-center justify-between px-1">
                        <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                          TuNutriLens
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-800">
                          Escáner IA
                        </span>
                      </div>

                      {/* Food Photo Card */}
                      <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                        <div className="relative h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
                            alt="Bowl Salmón y Quinoa"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-emerald-600/90 text-white text-[10px] font-bold backdrop-blur-xs flex items-center gap-1 shadow-xs">
                            <Sparkles className="w-3 h-3" />
                            <span>Detección IA</span>
                          </span>
                        </div>

                        <div className="p-3 bg-white dark:bg-slate-900 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                          <div>
                            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white leading-tight">
                              Bowl Salmón y Quinoa
                            </h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                              Salmón, aguacate, edamame
                            </p>
                          </div>
                          <span className="text-xs font-black text-emerald-700 dark:text-emerald-400">
                            520 kcal
                          </span>
                        </div>
                      </div>

                      {/* Macronutrients */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
                          Macronutrientes
                        </span>
                        <div className="grid grid-cols-3 gap-1.5">
                          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-900/60 text-center">
                            <div className="text-[9px] font-bold text-emerald-800 dark:text-emerald-300">Proteína</div>
                            <div className="text-xs font-black text-emerald-900 dark:text-emerald-200">36g</div>
                          </div>
                          <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-900/60 text-center">
                            <div className="text-[9px] font-bold text-amber-800 dark:text-amber-300">Carbos</div>
                            <div className="text-xs font-black text-amber-900 dark:text-amber-200">48g</div>
                          </div>
                          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/60 text-center">
                            <div className="text-[9px] font-bold text-blue-800 dark:text-blue-300">Grasas</div>
                            <div className="text-xs font-black text-blue-900 dark:text-blue-200">18g</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full py-2.5 rounded-xl bg-[#0f764a] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-900/20">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Registrar en Diario</span>
                      </button>
                    </div>
                  )}

                  {/* SCREEN 2: Supermercado Lens */}
                  {activeScreen === 'supermarket' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="flex items-center justify-between px-1">
                        <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                          Supermercado Lens
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 text-[10px] font-bold border border-cyan-300 dark:border-cyan-800 flex items-center gap-1">
                          <ShoppingCart className="w-3 h-3" />
                          <span>Escáner</span>
                        </span>
                      </div>

                      {/* Product Header Card */}
                      <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-black text-xl shrink-0">
                            A
                          </div>
                          <div>
                            <h4 className="font-extrabold text-xs text-slate-900 dark:text-white leading-tight">
                              Yogur Griego 0% Natural
                            </h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                              Hacendado / Mercadona
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[9px] font-bold">
                            NutriScore A
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-[9px] font-bold">
                            NOVA 1 (Natural)
                          </span>
                        </div>
                      </div>

                      {/* Nutritional Traffic Light */}
                      <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                          Semáforo Nutricional
                        </span>
                        <div className="space-y-1 text-[10px]">
                          <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 flex items-center justify-between font-semibold">
                            <span>Azúcares: 3.5g (Bajo)</span>
                            <span className="font-bold text-emerald-700 dark:text-emerald-400">✓ Excelente</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 flex items-center justify-between font-semibold">
                            <span>Grasas Sat: 0.1g (Bajo)</span>
                            <span className="font-bold text-emerald-700 dark:text-emerald-400">✓ Excelente</span>
                          </div>
                          <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 flex items-center justify-between font-semibold">
                            <span>Proteínas: 10.3g (Alto)</span>
                            <span className="font-bold text-blue-700 dark:text-blue-400">★ Fuente Proteica</span>
                          </div>
                        </div>
                      </div>

                      {/* Clinical Verdict */}
                      <div className="p-3 rounded-2xl bg-[#0f764a] text-white text-[10px] leading-relaxed space-y-0.5 shadow-sm">
                        <div className="font-black text-emerald-200 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          <span>Veredicto Nutricional:</span>
                        </div>
                        <p className="text-white/90">
                          Producto altamente recomendado sin ultraprocesados ni aditivos perjudiciales.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3: Diario de Hoy & Hidratación */}
                  {activeScreen === 'diary' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="flex items-center justify-between px-1">
                        <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                          Diario de Hoy
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0f764a] text-white text-[10px] font-bold">
                          1.450 / 2.100 kcal
                        </span>
                      </div>

                      {/* Calorie Target Card */}
                      <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-700 dark:text-slate-300">Calorías Restantes</span>
                          <span className="font-black text-emerald-600 dark:text-emerald-400">650 kcal</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full w-[69%]" />
                        </div>
                      </div>

                      {/* Food Log Entries */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
                          Comidas Registradas
                        </span>
                        <div className="space-y-1 text-xs">
                          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-xs">
                            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11px]">
                              🍳 Desayuno Saludable
                            </span>
                            <span className="font-black text-slate-700 dark:text-slate-300 text-[11px]">420 kcal</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-xs">
                            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11px]">
                              🥗 Almuerzo Salmón Bowl
                            </span>
                            <span className="font-black text-slate-700 dark:text-slate-300 text-[11px]">520 kcal</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-xs">
                            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11px]">
                              🍇 Merienda Frutos Rojos
                            </span>
                            <span className="font-black text-slate-700 dark:text-slate-300 text-[11px]">210 kcal</span>
                          </div>
                        </div>
                      </div>

                      {/* Water Intake Tracker */}
                      <div className="p-2.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-200">
                          <Droplets className="w-3.5 h-3.5 text-blue-600" />
                          <span>Agua: 1.75L / 2.5L</span>
                        </div>
                        <button className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[10px] shadow-xs">
                          + Vaso
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Home Bar Indicator */}
                  <div className="w-24 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-3" />
                </div>
              </div>
            </div>

            {/* Right: Technical & Clinical Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                  screens.find(s => s.id === activeScreen)?.tagColor
                }`}>
                  <Zap className="w-3 h-3" />
                  <span>{screens.find(s => s.id === activeScreen)?.badge}</span>
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                  {screens.find(s => s.id === activeScreen)?.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {screens.find(s => s.id === activeScreen)?.summary}
                </p>
              </div>

              {/* Functional Highlights */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Beneficios en tu Tratamiento Nutricional:
                </h5>
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Cero pesajes tediosos:</strong> La inteligencia artificial reconoce ingredientes y raciones con solo hacer una foto antes de comer.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Control de texturas para Disfagia (IDDSI):</strong> Validación fotográfica de consistencias idóneas para pacientes con dificultad de deglución.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900/80 border border-stone-200/80 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong>Sincronización con tu Dietista:</strong> Gala revisa directamente las tomas y la adherencia en tus consultas de revisión.
                    </div>
                  </div>
                </div>
              </div>

              {/* Pack Integration Callout */}
              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-teal-900 dark:text-teal-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>Incluido con descuento en los Packs Clínicos</span>
                  </div>
                  <p className="text-[11px] text-teal-800/80 dark:text-teal-300/80">
                    Hasta un 20% de descuento en la suscripción de TuNutriLens al contratar el Programa de 6 meses o 1 año.
                  </p>
                </div>

                <a
                  href="#tarifas"
                  className="px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs whitespace-nowrap transition-colors shadow-xs"
                >
                  Ver Tarifas
                </a>
              </div>

            </div>

          </div>

          {/* Three Mobile Screens Gallery Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {screens.map((s) => {
              const IconComp = s.icon;
              const isCurrent = activeScreen === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveScreen(s.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700 shadow-xs ring-2 ring-emerald-400/20'
                      : 'bg-white dark:bg-slate-800/60 border-stone-200 dark:border-slate-700 hover:bg-stone-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      {isCurrent ? 'Pantalla Activa' : 'Ver Pantalla'}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                    {s.summary}
                  </p>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

