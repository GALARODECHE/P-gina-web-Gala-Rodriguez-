import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, ShieldCheck, Activity, Flame, Scale, Droplets } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface NutritionCalculatorProps {
  profile: NutritionistProfile;
  onBookWithData: (calcData: { tdee: number; goal: string; details: string }) => void;
}

export const NutritionCalculator: React.FC<NutritionCalculatorProps> = ({
  profile,
  onBookWithData,
}) => {
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [age, setAge] = useState<number>(30);
  const [height, setHeight] = useState<number>(168);
  const [weight, setWeight] = useState<number>(68);
  const [activity, setActivity] = useState<number>(1.375); // 1.2, 1.375, 1.55, 1.725
  const [goal, setGoal] = useState<string>('Perder Grasa Corporal');

  const theme = themeStyles[profile.themeColor || 'emerald'];

  // Mifflin-St Jeor Calculation
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  if (gender === 'female') {
    bmr -= 161;
  } else {
    bmr += 5;
  }

  const tdee = Math.round(bmr * activity);

  // Target Protein (g) based on goal & weight
  let proteinFactor = 1.8;
  if (goal === 'Ganar Masa Muscular') proteinFactor = 2.0;
  if (goal === 'Perder Grasa Corporal') proteinFactor = 2.0;
  if (goal === 'Salud Digestiva / Inflamación') proteinFactor = 1.6;

  const targetProtein = Math.round(weight * proteinFactor);
  const recommendedWater = (weight * 0.035).toFixed(1);

  const handleBookWithMetrics = () => {
    const details = `Métricas estimadas: Peso ${weight}kg, Altura ${height}cm, Edad ${age}, TDEE ${tdee} kcal/día, Proteína recomendada ~${targetProtein}g/día, Meta: ${goal}.`;
    onBookWithData({ tdee, goal, details });
  };

  return (
    <section id="calculadora" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${theme.badge}`}>
            <Calculator className="w-3.5 h-3.5" />
            <span>Herramienta Interactiva</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-tight">
            Calculadora de Necesidades Energéticas & Macros
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Estimación personalizada basada en la ecuación de Mifflin-St Jeor. Descubre tu gasto energético diario estimado antes de agendar tu consulta.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Form Inputs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Gender Switcher */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Género Biológico
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    gender === 'female'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Mujer
                </button>
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    gender === 'male'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Hombre
                </button>
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Age */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Edad</span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">{age} años</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="85"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Weight */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Peso</span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Height */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Altura</span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="135"
                  max="210"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

            </div>

            {/* Activity Level Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Nivel de Actividad Física
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value={1.2}>Sedentario (Trabajo de oficina, poco ejercicio)</option>
                <option value={1.375}>Ligero (1-3 días de ejercicio a la semana)</option>
                <option value={1.55}>Moderado (3-5 días de ejercicio a la semana)</option>
                <option value={1.725}>Muy Activo (6-7 días de entrenamiento intenso)</option>
              </select>
            </div>

            {/* Main Goal Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Objetivo Principal
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Perder Grasa Corporal',
                  'Ganar Masa Muscular',
                  'Salud Digestiva / Inflamación',
                  'Reeducación & Hábitos',
                ].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-left truncate ${
                      goal === g
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-6 sm:p-8 space-y-6 shadow-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Resultado Estimado
              </span>
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>

            {/* Main TDEE Number */}
            <div>
              <p className="text-xs text-slate-400 font-medium">Gasto Energético Total (TDEE):</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-emerald-400">{tdee}</span>
                <span className="text-sm font-semibold text-slate-300">kcal / día</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Calorías necesarias para mantener tu peso actual.
              </p>
            </div>

            {/* Secondary Macro Guidelines */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Proteína Recomendada</span>
                </div>
                <p className="text-lg font-bold text-white mt-1">~{targetProtein} g / día</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  <span>Agua Estimada</span>
                </div>
                <p className="text-lg font-bold text-white mt-1">{recommendedWater} L / día</p>
              </div>
            </div>

            {/* Call to action using calculated metrics */}
            <div className="pt-2 space-y-3">
              <button
                onClick={handleBookWithMetrics}
                id="book-from-calculator-btn"
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 ${theme.primary}`}
              >
                <span>Solicitar Consulta con mis Datos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-slate-400 text-center leading-normal">
                *Cálculo orientativo. En la consulta online adaptaremos exactamente estos números a tus analíticas y gustos personales.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
