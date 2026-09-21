import React, { useState } from 'react';
import {
  Award,
  Briefcase,
  GraduationCap,
  Building2,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { NutritionistProfile } from '../types';
import { themeStyles } from '../utils/theme';

interface AboutSectionProps {
  profile: NutritionistProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const theme = themeStyles[profile.themeColor || 'teal'];
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const careerPositions = [
    {
      company: 'Hospital de la Zarzuela',
      role: 'Nutrición Clínica Hospitalaria',
      area: 'Atención a Pacientes Agudos',
    },
    {
      company: 'Abbott Laboratories',
      role: 'Nutrición Enteral Adulto y Pediatría',
      area: 'Especialista de Producto Clínico',
    },
    {
      company: 'Danone Nutricia',
      role: 'Especialidad Hospitalaria y Soporte Nutricional',
      area: 'División Nutrición Médica Avanzada',
    },
    {
      company: 'Laboratorios Ordesa',
      role: 'Nutrición Enteral Adulto',
      area: 'Línea de Nutrición Médica',
    },
    {
      company: 'Mediterránea de Catering',
      role: 'Coordinación y Calibración Nutricional',
      area: 'Restauración Colectiva y Centros Sanitarios',
    },
  ];

  const academicList = [
    {
      degree: 'Diplomatura en Nutrición Humana y Dietética',
      institution: 'Universidad de Navarra',
      status: 'Titulación Oficial Sanitaria',
      badge: 'Diplomada Universitaria',
      description:
        'Formación clínica integral, dietoterapia aplicada, bioquímica nutricional, fisiopatología y nutrición clínica en hospital docente.',
    },
  ];

  const certifiedCoursesList = [
    {
      title: 'Avances en Disfagia Orofaríngea en el nuevo entorno clínico',
      institution: 'Formación Sanitaria Especializada · 10 horas',
      area: 'Disfagia y Deglución',
    },
    {
      title: 'XX Edición de la Jornada de actualización en Nutrición: "Nutrición y piel: Evidencia científica y aplicación práctica"',
      institution: 'Universidad de Navarra · 5 horas',
      area: 'Nutrición y Dermatología',
    },
    {
      title: 'Monográfico de Nutrición y Menopausia',
      institution: 'Academia AIZEA · 5 horas',
      area: 'Salud de la Mujer y Menopausia',
    },
    {
      title: 'La cocina como aliada en la nutrición clínica: descubre el mundo de las texturas',
      institution: 'Barcelona · Formación Práctica en Texturas',
      area: 'Texturas y Gastronomía Clínica',
    },
    {
      title: 'Ponente en: I Curso teórico-práctico de Nutrición para Enfermería Geriátrica',
      institution: 'Docencia Sanitaria Especializada',
      area: 'Docencia y Geriatría',
    },
    {
      title: 'I Curso Nestlé Nutrition para residencias geriátricas: "El anciano y su entorno"',
      institution: 'Nestlé Nutrition · Madrid',
      area: 'Geriatría y Residencias',
    },
    {
      title: 'Intervención nutricional y Asesoramiento dietético en la Insuficiencia Renal Crónica',
      institution: 'Universidad de Navarra',
      area: 'Nefrología y Dietoterapia',
    },
    {
      title: 'Nutrición y Dietética: Últimas perspectivas',
      institution: 'Universidad Complutense · 100 horas lectivas',
      area: 'Nutrición Clínica Avanzada',
    },
    {
      title: 'Aula Nestlé de actualidad en Nutrición: Las Proteínas',
      institution: 'Aula Nestlé · Madrid',
      area: 'Proteínas y Metabolismo',
    },
    {
      title: 'II Jornada Nacional de Obesidad y factores de riesgo cardiovascular',
      institution: 'Formación Sanitaria Especializada',
      area: 'Obesidad y Riesgo Cardiovascular',
    },
    {
      title: 'Participación en trabajo de campo: Encuestas alimentarias en Residencias Geriátricas',
      institution: 'Investigación y Trabajo de Campo Nutricional',
      area: 'Investigación y Geriatría',
    },
  ];

  return (
    <section id="sobre-mi" className="py-14 sm:py-20 border-b border-black/5 dark:border-slate-800/80 bg-transparent transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${theme.badge}`}>
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Trayectoria y Formación de Gala Rodríguez</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3b6e5a] dark:text-[#9fc3b0] tracking-tight">
            Experiencia Sanitaria y Formación Académica
          </h2>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Más de dos décadas de práctica clínica en hospitales de referencia, multinacionales líderes en nutrición médica y constante actualización científica.
          </p>
        </div>

        {/* Tab Navigation - Fully responsive on mobile without overflowing */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col xs:flex-row w-full max-w-lg p-1 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-2xs gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`flex-1 flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? `${theme.primary} shadow-2xs`
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 shrink-0" />
              <span className="xs:hidden">Experiencia (+20A)</span>
              <span className="hidden xs:inline">Entornos Sanitarios (+20 Años)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`flex-1 flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? `${theme.primary} shadow-2xs`
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span className="xs:hidden">Titulación y Cursos</span>
              <span className="hidden xs:inline">Titulación y Cursos Certificados</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Experiencia en Entornos Sanitarios */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 divide-y divide-slate-300 dark:divide-slate-700/70 overflow-hidden shadow-2xs">
              {careerPositions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-300/40 dark:hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-800 dark:text-white">
                        {item.company}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-right pl-11 sm:pl-0">
                    <span className="inline-flex px-3 py-1 rounded-lg text-xs font-semibold bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      {item.area}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality seal badge */}
            <div className="p-4 rounded-2xl bg-slate-300 dark:bg-slate-800/70 border border-slate-400 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-800 dark:text-slate-300">
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Experiencia contrastada en hospitales docentes, laboratorios farmacéuticos y centros de día</span>
              </div>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">
                Universidad de Navarra · CV02386
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Titulaciones y Formación Sanitaria */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            {/* Titulación Universitaria */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Titulación Sanitaria Oficial</span>
              </h3>
              
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-2xs space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${theme.badge}`}>
                    Diplomada Universitaria
                  </span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Titulación Oficial Sanitaria
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-white">
                  Diplomatura en Nutrición Humana y Dietética
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-300">
                  Universidad de Navarra
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                  Formación clínica integral, dietoterapia aplicada, bioquímica nutricional, fisiopatología y nutrición clínica en hospital docente universitario.
                </p>
              </div>
            </div>

            {/* Cursos Certificados en formato listado */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Listado de Cursos y Formación Continuada</span>
                </h3>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {certifiedCoursesList.length} Cursos Certificados
                </span>
              </div>

              <div className="rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 divide-y divide-slate-300 dark:divide-slate-700/70 overflow-hidden shadow-2xs">
                {certifiedCoursesList.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 hover:bg-slate-300/40 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white leading-snug">
                          {course.title}
                        </h5>
                        <p className="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-400">
                          {course.institution}
                        </p>
                      </div>
                    </div>
                    {course.area && (
                      <div className="sm:text-right shrink-0 pl-8 sm:pl-0">
                        <span className="inline-flex px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-bold bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-300">
                          {course.area}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
