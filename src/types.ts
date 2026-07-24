export interface NutritionService {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  isPopular?: boolean;
  popularBadge?: string;
  description: string;
  features: string[];
  idealFor: string;
  ctaText: string;
  category: 'Consulta' | 'Seguimiento' | 'Pack' | 'Gratuito';
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
  avatar: string;
  comment: string;
  rating: number;
  serviceUsed: string;
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
