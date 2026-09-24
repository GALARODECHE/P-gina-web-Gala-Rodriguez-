import tuNutriLensBannerRaw from '../assets/images/TuNutriLens_Elemento_Grafico_Destacado_1024x500.png';
import tuNutriLensIconRaw from '../assets/images/tunutrilens_logo.svg';

const tuNutriLensBanner = `${tuNutriLensBannerRaw}?v=20260924_final`;
const tuNutriLensIcon = `${tuNutriLensIconRaw}?v=20260924_final`;
import {
  NutritionistProfile,
  NutritionService,
  NutritionApp,
  BlogPost,
  InstagramPostPreview,
} from '../types';

export const initialProfile: NutritionistProfile = {
  name: 'Gala Rodríguez Echebarrieta',
  title: 'Diplomada en Nutrición Humana y Dietética · Experta en Salud de la Mujer, Disfagia y Oncología',
  colegiadorNumber: 'Col. Oficial Sanitaria CV02386',
  bio: 'Acompañamiento clínico integral y personalizado basado en la evidencia científica para optimizar tu salud, abordar patologías complejas y consolidar hábitos sostenibles.',
  extendedBio: 'Dietista-Nutricionista con más de dos décadas de práctica en hospitales de referencia, laboratorios líderes en nutrición médica y centros sociosanitarios. Especialización en salud hormonal femenina, disfagia, oncología y soporte nutricional.',
  avatarUrl: '',
  email: 'gala@galarodrigueznutricion.es',
  phone: '697 166 126',
  whatsappNumber: '+34697166126',
  location: 'Online',
  websiteUrl: 'https://www.galarodrigueznutricion.es',
  websiteDomain: 'www.galarodrigueznutricion.es',
  tunutrilensUrl: 'https://www.tunutrilens.es',
  instagramUrl: 'https://www.instagram.com/galanutricion/',
  facebookUrl: 'https://www.facebook.com/galanutricion',
  substackUrl: 'https://galanutricion.substack.com',
  linkedinUrl: 'https://www.linkedin.com/in/galarodriguezechebarrieta/',
  themeColor: 'teal',
  bgTheme: 'default',
  stat1Number: '+20 Años',
  stat1Label: 'Práctica Clínica',
  stat1Subtext: 'Entornos hospitalarios y sociosanitarios',
  stat2Number: 'Multinacionales',
  stat2Label: 'Empresas Sanitarias',
  stat2Subtext: 'Danone Nutricia, Abbott, Ordesa',
  stat3Number: 'Univ. Navarra',
  stat3Label: 'Nutrición y Dietética',
  stat3Subtext: 'Diplomada Universitaria Oficial',
  stat4Number: '100% A Medida',
  stat4Label: 'Pautas Clínicas',
  stat4Subtext: 'Entrega individualizada en <48h',
};

export const initialCareerTimeline = [
  {
    company: 'DANONE NUTRICIA',
    role: 'Especialista Hospitalaria',
  },
  {
    company: 'LABORATORIOS ORDESA',
    role: 'Nutrición Enteral Adulto',
  },
  {
    company: 'ABBOTT LABORATORIES',
    role: 'Nutrición Enteral Adulto y Pediatría',
  },
  {
    company: 'MEDITERRÁNEA DE CATERING',
    role: 'Coordinación de Nutrición',
  },
  {
    company: 'HOSPITAL DE LA ZARZUELA',
    role: 'Nutricionista Hospitalaria',
  },
];

export const initialServices: NutritionService[] = [
  {
    id: 's-prim',
    title: 'Primera Consulta Clínica y Diagnóstico',
    subtitle: 'Evaluación clínica individualizada · 60 min (Videollamada 1 a 1)',
    price: 'Tarifa bajo consulta',
    period: 'Sesión Inicial 60 min',
    isPopular: false,
    description: 'Consulta clínica inicial individualizada por videollamada. Evaluamos en profundidad tus hábitos, horarios, historial y necesidades para diseñar tu pauta nutricional 100% personalizada con entrega en <48h.',
    features: [
      'Videollamada individual 1 a 1 de 60 minutos con Gala',
      'Anamnesis clínica integral, valoración de sintomatología y objetivos',
      'Protocolo clínico adaptado (salud de la mujer, digestivo, oncología o disfagia)',
      'Plan nutricional individualizado y recomendaciones prácticas en <48h',
      'Resolución estructurada de dudas clínicas vía correo electrónico durante 15 días',
    ],
    idealFor: 'Personas que inician su proceso nutricional y desean una valoración exhaustiva y pauta rigurosa desde el primer momento.',
    ctaText: 'Solicitar Información y Cita',
    category: 'Consulta',
  },
  {
    id: 's-pack',
    title: 'Programa Clínico de Continuidad y Acompañamiento',
    subtitle: '1 Sesión Inicial (60 min) + Revisiones periódicas con soporte continuado',
    price: 'Tarifa bajo consulta',
    period: 'Packs de 3 Meses · 6 Meses · 12 Meses',
    isPopular: true,
    popularBadge: 'RECOMENDADO · MÁXIMA ADHERENCIA',
    description: 'Tratamiento continuo con sesiones clínicas periódicas y revisiones estructuradas para consolidar cambios definitivos en patologías y reeducación alimentaria.',
    features: [
      '1ª Consulta Clínica Inicial Exhaustiva (60 min) incluida',
      'Pack 3 Meses: 1 Sesión Inicial + 6 Revisiones (acompañamiento trimestral)',
      'Pack 6 Meses: Seguimiento regular semestral (mayor consolidación de hábitos)',
      'Pack 12 Meses: Acompañamiento integral anual continuado',
      'Reajuste dinámico de menús, pautas nutricionales y consistencias',
      'Seguimiento clínico riguroso y resolución de dudas entre sesiones',
    ],
    idealFor: 'Salud de la mujer, trastornos digestivos/hormonales, patología oncológica, disfagia o reeducación metabólica duradera.',
    ctaText: 'Solicitar Información del Programa',
    category: 'Programa',
  },
  {
    id: 's-seg',
    title: 'Consulta de Revisión y Evolución',
    subtitle: 'Seguimiento clínico para pacientes ya en tratamiento',
    price: 'Tarifa bajo consulta',
    period: 'Sesión de Revisión (30-40 min)',
    isPopular: false,
    description: 'Revisión periódica de la evolución, reajuste de menús y nutrientes, evaluación de tolerancia y resolución de dudas para consolidar resultados.',
    features: [
      'Sesión clínica de revisión (30-40 min por videollamada 1 a 1)',
      'Ajuste dinámico de calorías, macronutrientes, micronutrientes y texturas',
      'Evaluación de sensaciones, avances y adherencia',
      'Resolución de dudas y adaptación a viajes o cambios de rutina',
    ],
    idealFor: 'Pacientes ya evaluados en 1ª consulta que requieren revisiones puntuales de mantenimiento.',
    ctaText: 'Solicitar Información y Cita',
    category: 'Seguimiento',
  },
];

export const initialApps: NutritionApp[] = [
  {
    id: 'app-tunutrilens',
    name: 'TuNutriLens',
    tagline: 'Tu Nutricionista de bolsillo',
    description: 'TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.',
    fullDescription: 'Tu Nutricionista de bolsillo. TuNutriLens no es una calculadora de calorías aburrida: es tu asistente visual inteligente para aprender a comer con criterio científico, sin culpas ni restricciones absurdas.',
    imageUrl: tuNutriLensBanner,
    iconUrl: tuNutriLensIcon,
    iconName: 'Eye',
    tags: ['Lente Plato', 'Lente Súper', 'Lente Nevera', 'Semáforo Nutricional', 'Filtros Clínicos'],
    webAppUrl: 'https://www.tunutrilens.es',
    usersCount: 'App Oficial E-Health',
    rating: 5.0,
    features: [
      '📸 1. Escáner Inteligente de Platos (Lente Plato): Apunta tu cámara a tu comida casera o de restaurante. La IA desglosa al instante ingredientes, calorías reales y equilibrio de macronutrientes.',
      '🔍 2. Detector de Trampas en el Supermercado (Lente Súper): Escanea envases y tablas nutricionales. Descubre qué estás comprando de verdad, desmitificando reclamos engañosos como "0% azúcares" o "rico en fibra".',
      '🧊 3. Aprovecha tu Nevera (Lente Nevera): ¿No sabes qué cocinar? Fotografía tus ingredientes sueltos y recibe sugerencias de recetas saludables en segundos, reduciendo el desperdicio.',
      '📊 4. Diario y Semáforo Nutricional Diario: Registra tus comidas con un clic y visualiza tu equilibrio semanal (proteínas, grasas saludables, fibra) sin obsesionarte con números rígidos.',
      '🌾 5. Filtros Clínicos Personalizados: Adapta todas las recomendaciones a tu estilo de vida: sin gluten (celiaquía), sin lactosa, opciones vegetarianas o control glucémico.',
    ],
  },
];

import { snapshotPosts } from './substackPostsSnapshot';

export const initialPosts: BlogPost[] = snapshotPosts;
