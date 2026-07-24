import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2, Building2, Stethoscope, ShieldCheck, ChevronRight } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { initialCareerTimeline } from '../data/initialNutritionData';
import { themeStyles } from '../utils/theme';

interface AboutSectionProps {
  profile: NutritionistProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const theme = themeStyles[profile.themeColor || 'teal'];
  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'education'>('experience');

  const specialties = [
    'Manejo Clínico de la Disfagia & Deglución',
    'Nutrición Enteral Adulto & Pediátrica',
    'Oncología Médica y Radioterápica',
    'Nefrología y Medicina Interna',
    'Cirugía, Neurología y Geriatría',
    'Gestión de Cuentas Hospitalarias',
    'Farmacia Hospitalaria & Fórmulas',
    'Desarrollo de Soluciones E-Health',
  ];

  const academicList = [
    {
      degree: 'MBA en Gestión Sanitaria',
      institution: 'Universidad Camilo José Cela',
      status: 'En curso',
      badge: 'Posgrado',
    },
    {
      degree: 'Diplomatura en Nutrición Humana y Dietética',
      institution: 'Universidad de Navarra',
      status: 'Titulación Oficial',
      badge: 'Grado Sanitario',
    },
    {
      degree: 'Licenciatura en Farmacia',
      institution: 'Universidad de Navarra',
      status: '3 cursos completados',
      badge: 'Ciencias de la Salud',
    },
    {
      degree: 'Módulo en Nutrición en el Paciente Oncológico',
      institution: 'Formación Especializada SENPE / AEDN',
      status: '2019',
      badge: 'Especialización',
    },
  ];

  return (
    <section id="sobre-mi" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${theme.badge}`}>
            <Stethoscope className="w-4 h-4" />
            <span>Perfil Profesional & Trayectoria</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Gala Rodríguez Echebarrieta
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Nutricionista por la Universidad de Navarra con más de 20 años de experiencia en entornos sanitarios y experta en disfagia y nutrición enteral.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'experience'
                  ? `${theme.primary} shadow-md`
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Entornos Sanitarios (+20 años)</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'profile'
                  ? `${theme.primary} shadow-md`
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Competencias & Especialidades</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'education'
                  ? `${theme.primary} shadow-md`
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formación Académica</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialCareerTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                        {item.period}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.role}
                    </h3>
                    <p className={`text-xs font-semibold ${theme.primaryText}`}>
                      {item.company}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Competencias y Especialidades */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className={`w-5 h-5 ${theme.primaryText}`} />
                <span>Perfil Profesional Integrado</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {profile.extendedBio}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs">
                <p className="font-bold text-slate-900 dark:text-white">Empresas & Entidades de Trayectoria:</p>
                <div className="flex flex-wrap gap-2 text-slate-600 dark:text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 font-semibold">Abbott Laboratories</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 font-semibold">Danone Nutricia</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 font-semibold">Laboratorios Ordesa</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 font-semibold">ALTER (Línea Adubén)</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 font-semibold">Hospital de la Zarzuela</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm flex items-center gap-3"
                >
                  <div className={`p-2 rounded-xl ${theme.badge}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold ${theme.badge}`}>
                    {item.badge}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.degree}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {item.institution}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Estado:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
