export type ThemeColorKey = 'teal' | 'navy' | 'slate' | 'sage' | 'amber';
export type BgThemeKey = 'default' | 'pure-white' | 'warm-cream' | 'soft-mint' | 'cool-sky';

export interface NutritionService {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  annualPrice?: string;
  annualPeriod?: string;
  annualDiscount?: string;
  isPopular?: boolean;
  popularBadge?: string;
  description: string;
  features: string[];
  idealFor: string;
  ctaText: string;
  category: 'Consulta' | 'Seguimiento' | 'Pack' | 'Gratuito' | 'Programa';
}

export interface WebsiteConfig extends Partial<NutritionistProfile> {
  siteName?: string;
  tagline?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaPrimary?: string;
  heroCtaSecondary?: string;
  aboutTitle?: string;
  aboutText1?: string;
  aboutText2?: string;
  showServices?: boolean;
  showPortfolio?: boolean;
  showAbout?: boolean;
  showTestimonials?: boolean;
  showContact?: boolean;
  themeColor: ThemeColorKey;
  [key: string]: any;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image?: string;
  imageUrl?: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  client?: string;
  completionDate?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  category?: string;
}

export interface StatItem {
  number?: string;
  value?: string;
  label: string;
  subtext?: string;
  description?: string;
}

export interface NutritionApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  iconName: string;
  tags: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  webAppUrl?: string;
  usersCount?: string;
  rating?: number;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Nutrición Clínica' | 'Mitos Alimentarios' | 'Recetas Saludables' | 'E-Health & Apps' | 'Rendimiento Deportivo' | 'Hábitos';
  summary: string;
  content: string;
  coverImage: string;
  publishDate: string;
  readTime: string;
  substackUrl?: string;
  isFeatured?: boolean;
  likesCount?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  comment: string;
  rating: number;
  serviceUsed?: string;
  verifiedPatient?: boolean;
}

export interface SocialLink {
  platform: 'Instagram' | 'Facebook' | 'Substack' | 'WhatsApp' | 'YouTube';
  url: string;
  handle: string;
  followers?: string;
}

export interface NutritionistProfile {
  name: string;
  title: string;
  colegiadorNumber: string;
  bio: string;
  extendedBio: string;
  avatarUrl: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
  instagramUrl: string;
  facebookUrl: string;
  substackUrl: string;
  themeColor: 'teal' | 'navy' | 'slate' | 'sage' | 'amber';
  bgTheme?: 'default' | 'pure-white' | 'warm-cream' | 'soft-mint' | 'cool-sky';
  stat1Number?: string;
  stat1Label?: string;
  stat1Subtext?: string;
  stat2Number?: string;
  stat2Label?: string;
  stat2Subtext?: string;
  stat3Number?: string;
  stat3Label?: string;
  stat3Subtext?: string;
  stat4Number?: string;
  stat4Label?: string;
  stat4Subtext?: string;
}

export interface BookingRequest {
  serviceId?: string;
  serviceTitle?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  primaryGoal: string;
  preferredModality: 'Online (Videollamada)' | 'Acompañamiento Chat' | 'Presencial';
  notes?: string;
  calculatedTDEE?: number;
}

export interface InstagramPostPreview {
  id: string;
  caption: string;
  imageUrl: string;
  likes: number;
  comments: number;
  permalink: string;
}
