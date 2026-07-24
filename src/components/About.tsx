import React from 'react';
import { Target, Users, Zap, Award, CheckCircle } from 'lucide-react';
import { WebsiteConfig } from '../types';
import { themeStyles } from '../utils/theme';

interface AboutProps {
  config: WebsiteConfig;
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ config, onContactClick }) => {
  const theme = themeStyles[config.themeColor];

  const values = [
    {
      icon: <Target className="w-5 h-5 text-indigo-500" />,
      title: 'Enfoque en Resultados',
      desc: 'Diseñamos pensando en métricas reales de rendimiento y conversión.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: 'Velocidad y Agilidad',
      desc: 'Optimización extrema para tiempos de carga ultrarrápidos en móvil y PC.',
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      title: 'Atención Personalizada',
      desc: 'Acompañamiento continuo y directo durante todas las etapas del proyecto.',
    },
    {
      icon: <Award className="w-5 h-5 text-rose-500" />,
      title: 'Estándares Modernos',
      desc: 'Utilizamos las tecnologías web más avanzadas y seguras del mercado.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase / Workspace Photo Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Equipo de trabajo"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-lg">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Filosofía de Trabajo
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    "Código limpio, diseños intuitivos y soluciones duraderas."
                  </p>
                </div>
              </div>

              {/* Decorative Accent Card */}
              <div className={`hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl items-center gap-3 z-10`}>
                <div className={`p-2.5 rounded-lg ${theme.primaryBgLight} ${theme.primaryText}`}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Garantía de Calidad</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">100% Satisfacción</p>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${theme.badge}`}>
              Sobre Nosotros
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {config.aboutTitle}
            </h2>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{config.aboutText1}</p>
              <p>{config.aboutText2}</p>
            </div>

            {/* Core Pillars / Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {v.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onContactClick}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm shadow-md transition-all ${theme.primary}`}
              >
                <span>Conoce Más de Nuestro Trabajo</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
