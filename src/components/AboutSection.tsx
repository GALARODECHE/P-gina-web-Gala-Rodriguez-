import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2, Building2, Stethoscope, ShieldCheck, ChevronRight, Camera } from 'lucide-react';
import { NutritionistProfile } from '../types';
import { initialCareerTimeline } from '../data/initialNutritionData';
import { themeStyles } from '../utils/theme';

interface AboutSectionProps {
  profile: NutritionistProfile;
  onUpdateAvatar?: (url: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onUpdateAvatar }) => {
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
      degree: 'Diplomatura en Nutrición Humana y Dietética',
      institution: 'Universidad de Navarra',
      status: 'Titulación Oficial Sanitaria',
      badge: 'Grado Universitario',
      description: 'Formación clínica integral, dietoterapia, bioquímica nutricional y fisiopatología aplicada.',
    },
    {
      degree: 'Licenciatura en Farmacia',
      institution: 'Universidad de Navarra',
      status: '3 Cursos Académicos Superados',
      badge: 'Ciencias de la Salud',
      description: 'Sólida base en farmacología, interacciones fármaco-nutriente, formulación y fisiología humana.',
    },
  ];

  const certifiedCoursesList = [
    {
      title: 'Manejo Clínico y Soporte Nutricional en Disfagia Orofaríngea',
      institution: 'Formación Sanitaria Especializada',
      area: 'Disfagia & Nutrición Enteral',
      description: 'Evaluación clínica de la deglución, prevención de broncoaspiración y pautas de hidratación segura.',
    },
    {
      title: 'Especialización en Nutrición en el Paciente Oncológico',
      institution: 'Sociedad Española de Nutrición Clínica (SENPE / AEDN)',
      area: 'Oncología Médica & Radioterápica',
      description: 'Abordaje de la caquexia tumoral, soporte nutricional durante quimioterapia y radioterapia.',
    },
    {
      title: 'Estandarización de Texturas y Dietas Terapéuticas (IDDSI)',
      institution: 'International Dysphagia Diet Standardisation Initiative',
      area: 'Seguridad Deglutoria',
      description: 'Calibración y verificación práctica de niveles 0 a 7 en alimentos y líquidos adaptados.',
    },
    {
      title: 'Nutrición Enteral y Artificial en Geriatría y Patología Neurológica',
      institution: 'Formación Médica Continuada',
      area: 'Geriatría & Neurología',
      description: 'Manejo de sondas, gastrostomías (PEG), fórmulas enterales específicas y prevención de desnutrición.',
    },
    {
      title: 'Farmacoterapia Nutricional e Interacciones en Pacientes Polimedicados',
      institution: 'Especialización Clínica',
      area: 'Farmacia & Nutrición',
      description: 'Optimización de absorción de micronutrientes y prevención de incompatibilidades fármaco-dieta.',
    },
    {
      title: 'Soluciones Digitales, Telemedicina y E-Health en Consulta Nutricional',
      institution: 'Desarrollo Tecnológico Aplicado a Salud',
      area: 'E-Health & Software Clínico',
      description: 'Diseño de protocolos y herramientas digitales para la monitorización remota y adherencia de pacientes.',
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

              {onUpdateAvatar && (
                <label className="absolute inset-0 rounded-full bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer text-xs font-bold gap-1">
                  <Camera className="w-5 h-5" />
                  <span>Subir Foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (evt) => {
                          if (evt.target?.result) {
                            onUpdateAvatar(evt.target.result as string);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              )}
            </div>

            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 dark:bg-slate-700 text-stone-700 dark:text-slate-200">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Nutricionista Clínica & Sanitaria</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                {profile.name}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {profile.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs">
                <span className={`px-2.5 py-1 rounded-lg font-bold ${theme.badge}`}>
                  Graduada por la Univ. de Navarra
                </span>
                <span className="px-2.5 py-1 rounded-lg font-semibold bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  +20 Años en Entornos Sanitarios
                </span>
                <span className="px-2.5 py-1 rounded-lg font-semibold bg-stone-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  Experta en Disfagia & Nutrición Enteral
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
              <span>Competencias & Especialidades</span>
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
                    <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">ALTER</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Línea Adubén</p>
                  </div>
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
                    <p className="text-xs text-slate-500 dark:text-slate-400">Adulto & Pediatría</p>
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
                <p className="font-bold text-slate-700 dark:text-slate-200">Empresas & Entidades Sanitarias:</p>
                <div className="flex flex-wrap gap-1.5 text-slate-700 dark:text-slate-300">
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">Abbott Laboratories</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">Danone Nutricia</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">Laboratorios Ordesa</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-slate-700 font-medium">ALTER (Línea Adubén)</span>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 shadow-xs space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold ${theme.badge}`}>
                        {item.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {item.degree}
                      </h4>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                        {item.institution}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">Acreditación:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{item.status}</span>
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
                  <span>Cursos de Especialización & Formación Continuada</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  CV & Certificaciones Clínicas
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
