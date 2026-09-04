import galaFotoOficial from '../assets/images/gala_rodriguez_perfil.png';
import tuNutriLensBanner from '../assets/images/tunutrilens_banner_real_1787570430380.jpg';
import tuNutriLensIcon from '../assets/images/tunutrilens_icon_real_1787570446381.jpg';
import tuNutriLensImage from '../assets/images/tunutrilens_mockup_1787427123608.jpg';
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
  colegiadorNumber: 'Diplomada por la Universidad de Navarra',
  bio: 'Diplomada en Nutrición Humana y Dietética por la Universidad de Navarra con más de 20 años de experiencia en entornos sanitarios. Experta en salud de la mujer, disfagia y oncología.',
  extendedBio: 'Diplomada en Nutrición Humana y Dietética por la Universidad de Navarra con más de 20 años de experiencia en entornos sanitarios y alta especialización clínica como experta en salud de la mujer, disfagia, oncología, soporte nutricional enteral y reeducación alimentaria, complementada con el desarrollo de soluciones e-health para el seguimiento clínico de pacientes.',
  avatarUrl: galaFotoOficial,
  email: 'gala@galarodrigueznutricion.es',
  phone: '697 166 126',
  whatsappNumber: '+34697166126',
  location: 'Online',
  websiteUrl: 'https://www.galarodrigueznutricion.es',
  websiteDomain: 'www.galarodrigueznutricion.es',
  instagramUrl: 'https://www.instagram.com/galanutricion/',
  facebookUrl: 'https://www.facebook.com/galanutricion',
  substackUrl: 'https://galanutricion.substack.com',
  linkedinUrl: 'https://www.linkedin.com/in/galarodriguezechebarrieta/',
  themeColor: 'teal',
  bgTheme: 'default',
  stat1Number: '+20 Años',
  stat1Label: 'Entornos Sanitarios',
  stat1Subtext: 'Salud de la Mujer, Disfagia y Oncología',
  stat2Number: 'Multinacionales',
  stat2Label: 'Empresas Sanitarias',
  stat2Subtext: 'Danone Nutricia, Ordesa, Abbott',
  stat3Number: 'Univ. Navarra',
  stat3Label: 'Nutrición y Dietética',
  stat3Subtext: 'Diplomada por la Univ. de Navarra',
  stat4Number: 'TuNutriLens',
  stat4Label: 'Innovación E-Health',
  stat4Subtext: 'App clínica propia para pacientes',
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
    price: '90€',
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
    ctaText: 'Reservar Primera Consulta (90€)',
    category: 'Consulta',
  },
  {
    id: 's-pack',
    title: 'Programa Clínico de Continuidad y Acompañamiento',
    subtitle: '1 Sesión Inicial (60 min) + Revisiones clínicas periódicas con soporte directo',
    price: 'Desde 520 €',
    period: 'Packs de 3 Meses · 6 Meses · 1 Año',
    isPopular: true,
    popularBadge: 'RECOMENDADO · MÁXIMA ADHERENCIA',
    description: 'Tratamiento continuo con sesiones clínicas periódicas y revisiones estructuradas para salud hormonal, patología digestiva, oncología o disfagia.',
    features: [
      '1ª Consulta Clínica Inicial Exhaustiva (60 min) incluida',
      'Pack 3 Meses: 1 Sesión Inicial + 6 Revisiones quincenales (520 €)',
      'Pack 6 Meses: Seguimiento continuado (970 €) + 10% DTO. en TuNutriLens',
      'Pack 1 Año: Acompañamiento integral de 12 meses (1.850 €) + 20% DTO. suscripción anual TuNutriLens',
      'Reajuste dinámico de menús, pautas nutricionales y consistencias',
      'Seguimiento clínico riguroso en cada consulta de revisión',
    ],
    idealFor: 'Salud de la mujer, trastornos digestivos/hormonales, patología oncológica, disfagia o reeducación metabólica duradera.',
    ctaText: 'Elegir Programa de Continuidad',
    category: 'Programa',
  },
  {
    id: 's-seg',
    title: 'Consulta de Revisión y Evolución',
    subtitle: 'Seguimiento clínico para pacientes ya en tratamiento',
    price: '75€',
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
    ctaText: 'Reservar Revisión (75€)',
    category: 'Seguimiento',
  },
];

export const initialApps: NutritionApp[] = [
  {
    id: 'app-tunutrilens',
    name: 'TuNutriLens',
    tagline: 'Análisis visual inteligente de alimentos, adaptación de texturas y seguimiento clínico e-health',
    description: 'Aplicación clínica e-health para el reconocimiento fotográfico de platos de comida, cálculo nutricional de macronutrientes y validación de viscosidad y texturas para pacientes con disfagia y soporte enteral.',
    fullDescription: 'TuNutriLens es la aplicación e-health desarrollada por Gala Rodríguez Echebarrieta para conectar la alimentación diaria del paciente con el seguimiento clínico en consulta. Mediante inteligencia visual y reconocimiento fotográfico, analiza la composición de cada plato, evalúa la textura y el nivel de viscosidad idóneo para pacientes con disfagia, y genera un diario fotográfico nutricional sincronizado en tiempo real con la historia clínica.',
    imageUrl: tuNutriLensBanner,
    iconUrl: tuNutriLensIcon,
    iconName: 'Eye',
    tags: ['Análisis Fotográfico IA', 'Adaptación Disfagia (IDDSI)', 'Nutrición Enteral y Clínica', 'E-Health PWA y Móvil'],
    webAppUrl: '#',
    usersCount: 'Solución E-Health Especializada',
    rating: 5.0,
    features: [
      'Análisis fotográfico instantáneo del plato con estimación de macros',
      'Evaluación de texturas, consistencia y viscosidad para disfagia',
      'Diario visual sincronizado directamente con la consulta de Gala',
      'Informe clínico detallado de ingesta calórica, proteica e hidratación',
    ],
  },
];

export const initialPosts: BlogPost[] = [
  {
    id: 'post-real-1',
    title: 'Por qué decidí mirar más allá del plato: Mi camino de la nutrición al bienestar integral',
    category: 'Bienestar y Hábitos',
    summary: 'Hola, soy Gala. Te cuento cómo tras más de 20 años en entornos sanitarios y una década de yoga integré la nutrición con el cuidado consciente "Inside-Out".',
    content: `Si hace unos años me hubieran preguntado en qué consiste mi trabajo como nutricionista, probablemente habría respondido hablando de macronutrientes, calorías y bioquímica. Al fin y al cabo, esa es la ciencia en la que me formé en la Universidad de Navarra y la base de mi profesión sanitaria.

Sin embargo, la vida y el paso del tiempo me han enseñado que la salud real es un tejido mucho más complejo. El cuerpo no es un compartimento estanco; es un reflejo de cómo tratamos a nuestra mente, de cómo gestionamos el estrés, de cómo nos movemos y de cómo nos cuidamos de dentro hacia fuera.

En este espacio fusiono la ciencia de la nutrición clínica con el bienestar consciente, el cuidado de la piel y el equilibrio vital.`,
    coverImage: 'https://substackcdn.com/image/fetch/$s_!Ki0r!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F345c45f7-7a04-40d0-b243-9d97caa8d531_2749x2749.jpeg',
    publishDate: '17 Jul 2026',
    readTime: '5 min de lectura',
    substackUrl: 'https://galanutricion.substack.com/p/por-que-decidi-mirar-mas-alla-del',
    isFeatured: true,
  },
  {
    id: 'post-real-2',
    title: 'La verdad de la Kombucha...',
    category: 'Salud y Digestión',
    summary: 'Análisis nutricional riguroso sobre la kombucha, su impacto en la microbiota intestinal y lo que realmente dice la evidencia científica.',
    content: `La kombucha se ha convertido en una de las bebidas de moda bajo la promesa de mejorar la salud digestiva y repoblar la microbiota. Pero, ¿qué hay de cierto y qué es puro marketing?

La kombucha es el resultado de la fermentación de té azucarado mediante un cultivo simbiótico de bacterias y levaduras (SCOBY). Durante este proceso se generan ácidos orgánicos, pequeñas trazas de vitaminas del grupo B y compuestos antioxidantes.

Sin embargo, no toda la kombucha comercial es igual: muchas marcas añaden azúcares añadidos tras la fermentación o pasteurizan el producto (eliminando los microorganismos vivos). Para una salud digestiva óptima, la base siempre debe ser una alimentación rica en fibra diversa, legumbres, hortalizas y alimentos fermentados tradicionales.`,
    coverImage: 'https://substackcdn.com/image/fetch/$s_!27xB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fee4fefa3-fb00-4981-a203-307d0194a01a_1408x768.png',
    publishDate: '10 Ago 2026',
    readTime: '5 min de lectura',
    substackUrl: 'https://galanutricion.substack.com/p/la-verdad-de-la-kombucha',
    isFeatured: true,
  },
  {
    id: 'post-real-3',
    title: 'El drama de la inflamación abdominal diaria',
    category: 'Salud y Digestión',
    summary: '¿Te levantas con el vientre plano y terminas el día con hinchazón molesta? Causas clínicas frecuentes y abordaje nutricional.',
    content: `La distensión abdominal frecuente no es algo que debas normalizar. Puede deberse a múltiples factores: disbiosis intestinal, intolerancias alimentarias no diagnosticadas, comer con prisa y estrés, falta de masticación adecuada o un exceso de fibra fermentable (FODMAPs) en momentos de inflamación.

En consulta abordamos la causa raíz mediante un análisis minucioso de tus síntomas digestivos para devolver la tranquilidad a tu día a día.`,
    coverImage: 'https://substackcdn.com/image/fetch/$s_!2V_M!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcced0fc8-3611-4ca9-95b1-e4657d11132c_1407x768.png',
    publishDate: '06 Ago 2026',
    readTime: '5 min de lectura',
    substackUrl: 'https://galanutricion.substack.com/p/el-drama-de-la-inflamacion-abdominal',
    isFeatured: true,
  },
];
