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
    'Soporte Nutricional',
    'Dietoterapia Clínica',
    'Adaptación de Menús',
    'Geriatría',
    'Disfagia',
    'Salud de la Mujer',
    'Desarrollo de Soluciones Clínicas E-Health',
    'Soporte Nutricional Oncológico (Quimioterapia y Radioterapia)',
    'Nutrición Enteral Adulto y Pediátrica',
    'Reeducación Nutricional y Estilo de Vida',
  ];

  const academicList = [
    {
      degree: 'Diplomatura en Nutrición Humana y Dietética',
      institution: 'Universidad de Navarra',
      status: 'Titulación Oficial Sanitaria',
      badge: 'Diplomada Universitaria',
      description: 'Formación clínica integral, dietoterapia, bioquímica nutricional, fisiopatología aplicada y nutrición clínica.',
    },
  ];

  const certifiedCoursesList = [
    {
      title: 'Avances en Disfagia Orofaríngea en el nuevo entorno clínico',
      institution: 'Formación Sanitaria Especializada · 10 horas',
      area: 'Disfagia y Deglución',
      description: 'Abordaje clínico avanzado, diagnóstico y adaptación de texturas y viscosidades en disfagia orofaríngea.',
    },
    {
      title: 'XX Edición de la Jornada de actualización en Nutrición: "Nutrición y piel: Evidencia científica y aplicación práctica"',
      institution: 'Universidad de Navarra · 5 horas',
      area: 'Nutrición y Dermatología',
      description: 'Evidencia científica y aplicación práctica del impacto nutricional en la salud dérmica y cutánea.',
    },
    {
      title: 'Monográfico de Nutrición y Menopausia',
      institution: 'Academia AIZEA · 5 horas',
      area: 'Salud de la Mujer y Menopausia',
      description: 'Abordaje dietético, metabólico y de estilo de vida en la etapa de perimenopausia y menopausia.',
    },
    {
      title: 'La cocina como aliada en la nutrición clínica: descubre el mundo de las texturas',
      institution: 'Barcelona',
      area: 'Texturas y Gastronomía Clínica',
      description: 'Técnicas de modificación y adecuación de texturas para la alimentación segura y apetecible en nutrición clínica.',
    },
    {
      title: 'Ponente en: I Curso teórico-práctico de Nutrición para Enfermería Geriátrica',
      institution: 'Ponencia / Docencia Sanitaria Especializada',
      area: 'Docencia y Geriatría',
      description: 'Impartición docente orientada a la valoración del estado nutricional y cuidados dietéticos en el paciente anciano.',
    },
    {
      title: 'I Curso Nestlé Nutrition para residencias geriátricas: "El anciano y su entorno"',
      institution: 'Nestlé Nutrition · Madrid',
      area: 'Geriatría y Residencias',
      description: 'Estrategias de valoración geriátrica, prevención de desnutrición y optimización del soporte alimentario.',
    },
    {
      title: 'Intervención nutricional y Asesoramiento dietético en la Insuficiencia renal crónica',
      institution: 'Universidad de Navarra',
      area: 'Nefrología y Dietoterapia',
      description: 'Manejo dietoterápico integral, control de electrolitos, balance proteico y pautas en patología renal crónica.',
    },
    {
      title: 'Nutrición y Dietética: Últimas perspectivas',
      institution: 'Universidad Complutense · 100 horas lectivas',
      area: 'Nutrición Clínica Avanzada',
      description: 'Actualización científica integral en dietoterapia, metabolismo, nutrición avanzada y práctica clínica.',
    },
    {
      title: 'Aula Nestlé de actualidad en Nutrición: Las Proteínas',
      institution: 'Aula Nestlé · Madrid',
      area: 'Proteínas y Metabolismo',
      description: 'Actualización sobre el metabolismo proteico, requerimientos específicos y soporte en estados catabólicos.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-16 sm:py-24 border-b border-stone-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title & Photo Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Photo & Bio Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="relative group shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover ring-4 ring-teal-500/20 dark:ring-teal-400/20 shadow-md transition-transform group-hover:scale-105"
              />
              <span className="absolute bottom-1 right-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-xs ring-2 ring-white dark:ring-slate-800 z-10">
                Activa Online
              </span>
            </div>

            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 dark:bg-slate-700 text-stone-700 dark:text-slate-200">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Diplomada en Nutrición Humana y Dietética</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                {profile.name}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {profile.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs">
                <span className={`px-2.5 py-1 rounded-lg font-bold ${theme.badge}`}>
                  Diplomada por la Univ. de Navarra
                </span>
                <span className="px-2.5 py-1 rounded-lg font-semibold bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  +20 Años en Entornos Sanitarios
                </span>
                <span className="px-2.5 py-1 rounded-lg font-semibold bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  Experta en Salud de la Mujer, Disfagia y Oncología
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs gap-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'experience'
                  ? `${theme.primary} shadow-xs`
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Entornos Sanitarios (+20 años)</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'profile'
                  ? `${theme.primary} shadow-xs`
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Competencias y Especialidades</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'education'
                  ? `${theme.primary} shadow-xs`
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formación Académica</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Experience Summary */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs space-y-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 pb-5 border-b border-stone-100 dark:border-slate-700">
                <div className={`p-3.5 rounded-2xl ${theme.badge}`}>
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200">
                    Resumen de Trayectoria Sanitaria (+20 Años)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    Nutrición clínica hospitalaria, desarrollo de proyectos de nutrición enteral y colaboración especializada en centros y multinacionales del sector salud.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Entidades y Compañías de Referencia:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/70">
                    <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">DANONE NUTRICIA</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Especialidad Hospitalaria</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/70">
                    <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">LABORATORIOS ORDESA</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Nutrición Enteral Adulto</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/70">
                    <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">ABBOTT LABORATORIES</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Adulto y Pediatría</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/70">
                    <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">MEDITERRÁNEA DE CATERING</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Coordinación de Nutrición</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-700/70">
                    <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">HOSPITAL DE LA ZARZUELA</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Nutrición Clínica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Competencias y Especialidades */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <ShieldCheck className={`w-5 h-5 ${theme.primaryText}`} />
                <span>Perfil Profesional Integrado</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {profile.extendedBio}
              </p>
              <div className="pt-3 border-t border-stone-100 dark:border-slate-700 space-y-2 text-xs">
                <p className="font-bold text-slate-700 dark:text-slate-200">Empresas y Entidades Sanitarias:</p>
                <div className="flex flex-wrap gap-1.5 text-slate-700 dark:text-slate-300">
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">Abbott Laboratories</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">Danone Nutricia</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">Laboratorios Ordesa</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">Hospital de la Zarzuela</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specialties.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700/80 shadow-xs flex items-center gap-3"
                >
                  <div className={`p-1.5 rounded-xl ${theme.badge}`}>
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

        {/* Tab Content 3: Education & Certified Courses */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* University Degrees */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Titulaciones Universitarias Oficiales</span>
              </h3>
              <div className="grid grid-cols-1 gap-4 max-w-2xl">
                {academicList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold ${theme.badge}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                          {item.status}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {item.degree}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {item.institution}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">Centro Sanitario / Académico:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">Universidad de Navarra</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Courses & Certifications */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Cursos de Especialización y Formación Continuada</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  CV y Certificaciones Clínicas
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certifiedCoursesList.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {course.area}
                      </span>
                      <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400">
                        Certificado
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {course.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {course.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-0.5">
                      {course.description}
                    </p>
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
