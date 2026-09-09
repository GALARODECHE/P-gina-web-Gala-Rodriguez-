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
      period: 'Atención a Pacientes Agudos',
      description:
        'Valoración nutricional a pie de cama, diseño de dietoterapias adaptadas a patologías complejas y coordinación multidisciplinar con los equipos médicos de planta.',
    },
    {
      company: 'Abbott Laboratories',
      role: 'Nutrición Enteral Adulto y Pediatría',
      period: 'Especialista de Producto Clínico',
      description:
        'Asesoramiento técnico en formulaciones de soporte nutricional enteral, requerimientos metabólicos específicos y formación a profesionales sanitarios hospitalarios.',
    },
    {
      company: 'Danone Nutricia',
      role: 'Especialidad Hospitalaria y Soporte Nutricional',
      period: 'División Nutrición Médica Avanzada',
      description:
        'Desarrollo e implantación de protocolos de nutrición clínica, disfagia y soporte metabólico en servicios hospitalarios y residencias sociosanitarias.',
    },
    {
      company: 'Laboratorios Ordesa',
      role: 'Nutrición Enteral Adulto',
      period: 'Línea de Nutrición Médica',
      description:
        'Formación técnica y soporte en dietas de textura modificada, productos específicos para desnutrición asociada a la enfermedad y geriatría.',
    },
    {
      company: 'Mediterránea de Catering',
      role: 'Coordinación y Calibración Nutricional',
      period: 'Restauración Colectiva y Centros Sanitarios',
      description:
        'Revisión, calibración nutricional y adaptación de dietas basales y terapéuticas en centros sanitarios, colegios y colectividades.',
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
      description:
        'Abordaje clínico avanzado, diagnóstico y adaptación de texturas y viscosidades en disfagia orofaríngea según protocolo IDDSI.',
    },
    {
      title: 'XX Edición de la Jornada de actualización: "Nutrición y piel: Evidencia científica y aplicación práctica"',
      institution: 'Universidad de Navarra · 5 horas',
      area: 'Nutrición y Dermatología',
      description:
        'Evidencia científica y aplicación práctica del impacto nutricional en la regeneración celular y la salud dérmica.',
    },
    {
      title: 'Monográfico de Nutrición y Menopausia',
      institution: 'Academia AIZEA · 5 horas',
      area: 'Salud de la Mujer y Menopausia',
      description:
        'Abordaje dietético, metabólico y de estilo de vida en la perimenopausia, menopausia y regulación hormonal.',
    },
    {
      title: 'La cocina como aliada en la nutrición clínica: descubre el mundo de las texturas',
      institution: 'Barcelona · Formación Práctica IDDSI',
      area: 'Texturas y Gastronomía Clínica',
      description:
        'Técnicas de modificación y adecuación de texturas para una alimentación segura, nutritiva y apetecible.',
    },
    {
      title: 'Ponente en: I Curso teórico-práctico de Nutrición para Enfermería Geriátrica',
      institution: 'Docencia Sanitaria Especializada',
      area: 'Docencia y Geriatría',
      description:
        'Impartición docente sobre valoración del estado nutricional y cuidados dietéticos en el paciente mayor.',
    },
    {
      title: 'I Curso Nestlé Nutrition para residencias geriátricas: "El anciano y su entorno"',
      institution: 'Nestlé Nutrition · Madrid',
      area: 'Geriatría y Residencias',
      description:
        'Estrategias de valoración geriátrica, prevención de desnutrición y optimización del soporte alimentario institucional.',
    },
    {
      title: 'Intervención nutricional y Asesoramiento dietético en la Insuficiencia Renal Crónica',
      institution: 'Universidad de Navarra',
      area: 'Nefrología y Dietoterapia',
      description:
        'Manejo dietoterápico integral, control de electrolitos, balance proteico y pautas clínicas en patología renal.',
    },
    {
      title: 'Nutrición y Dietética: Últimas perspectivas',
      institution: 'Universidad Complutense · 100 horas lectivas',
      area: 'Nutrición Clínica Avanzada',
      description:
        'Actualización científica integral en dietoterapia, metabolismo, nutrición avanzada y práctica clínica basada en evidencia.',
    },
    {
      title: 'Aula Nestlé de actualidad en Nutrición: Las Proteínas',
      institution: 'Aula Nestlé · Madrid',
      area: 'Proteínas y Metabolismo',
      description:
        'Actualización sobre el metabolismo proteico, requerimientos específicos y soporte en estados catabólicos.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-14 sm:py-20 border-b border-slate-400/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/70 text-orange-950 dark:text-orange-200 border border-orange-300 dark:border-orange-800">
            <Stethoscope className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Trayectoria y Formación de Gala Rodríguez</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerPositions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-2xs flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950 text-orange-950 dark:text-orange-200 border border-orange-300 dark:border-orange-800/60">
                        {item.period}
                      </span>
                      <Building2 className="w-4 h-4 text-slate-500" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-800 dark:text-white">
                      {item.company}
                    </h3>
                    <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                      {item.role}
                    </p>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
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
              <span className="font-bold text-orange-600 dark:text-orange-400">
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
                <GraduationCap className="w-4 h-4 text-orange-600 dark:text-orange-400" />
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

            {/* Cursos Certificados */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Cursos de Especialización y Formación Continuada</span>
                </h3>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  9 Certificaciones Sanitarias
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifiedCoursesList.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 shadow-2xs space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-300">
                          {course.area}
                        </span>
                        <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400">
                          Certificado
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-800 dark:text-white leading-snug">
                        {course.title}
                      </h5>
                      <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                        {course.institution}
                      </p>
                      <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                        {course.description}
                      </p>
                    </div>
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
