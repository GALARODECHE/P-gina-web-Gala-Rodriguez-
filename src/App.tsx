import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatesAndServices } from './components/RatesAndServices';
import { InstitutionalConsulting } from './components/InstitutionalConsulting';
import { AppsSection } from './components/AppsSection';
import { BlogSubstack } from './components/BlogSubstack';
import { SocialHub } from './components/SocialHub';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactBookingModal } from './components/ContactBookingModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { ServiceInfographicModal } from './components/ServiceInfographicModal';
import { Footer } from './components/Footer';
import { bgThemeStyles } from './utils/theme';

import {
  initialProfile,
  initialServices,
  initialApps,
  initialPosts,
  initialTestimonials,
} from './data/initialNutritionData';

import {
  NutritionistProfile,
  NutritionService,
  NutritionApp,
  BlogPost,
} from './types';

export default function App() {
  const profile = initialProfile;
  const services = initialServices;
  const apps = initialApps;
  const posts = initialPosts;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme_mode') === 'dark';
    } catch {
      return false;
    }
  });

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<NutritionService | null>(null);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [isInfographicOpen, setIsInfographicOpen] = useState(false);

  // Sync Dark Mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_mode', 'light');
    }
  }, [isDarkMode]);

  // Quick Action Handlers
  const handleOpenBookingWithService = (service?: NutritionService) => {
    if (service) {
      setSelectedServiceForBooking(service);
    } else {
      setSelectedServiceForBooking(services[0] || null);
    }
    setIsBookingOpen(true);
  };

  const currentBg = bgThemeStyles[profile.bgTheme || 'default'];

  return (
    <div className={`min-h-screen ${currentBg.bodyBg} text-slate-700 dark:text-slate-200 font-sans transition-colors duration-200 antialiased selection:bg-teal-600 selection:text-white`}>
      
      {/* Header Navigation */}
      <Navbar
        profile={profile}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onBookClick={() => handleOpenBookingWithService()}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          onExploreRates={() => {
            const el = document.getElementById('tarifas');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreInstitutions={() => {
            const el = document.getElementById('instituciones');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreApps={() => {
            const el = document.getElementById('apps');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onBookFreeValuation={() => {
            const freeService = services.find((s) => s.id === 's-val') || services[0];
            handleOpenBookingWithService(freeService);
          }}
        />

        {/* Rates & Online Services Section (Tarifas Estudiadas) */}
        <RatesAndServices
          profile={profile}
          services={services}
          onSelectPlan={(service) => handleOpenBookingWithService(service)}
          onOpenInfographic={() => setIsInfographicOpen(true)}
        />

        {/* Institutional Consulting & Training (Residencias, Colegios, Centros de Día, Asociaciones) */}
        <InstitutionalConsulting
          profile={profile}
          onOpenBooking={(topic) => {
            const customService: NutritionService = {
              id: 'inst-custom',
              title: topic,
              subtitle: 'Servicios a Instituciones y Colectividades',
              price: 'A Medida / Suscripción',
              period: 'Mensual o Por Proyecto',
              description: 'Asesoría técnica para residencias, centros de día, colegios o asociaciones.',
              features: ['Revisión de menús basales y adaptados', 'Talleres y ponencias', 'Cumplimiento normativo e informe oficial'],
              idealFor: 'Instituciones y colectividades sanitarias/educativas',
              ctaText: 'Solicitar Propuesta',
              category: 'Consulta',
            };
            handleOpenBookingWithService(customService);
          }}
        />

        {/* Developed Apps Section (Apps Propias) */}
        <AppsSection
          profile={profile}
          apps={apps}
        />

        {/* Blog & Substack Section (Unificación) */}
        <BlogSubstack
          profile={profile}
          posts={posts}
          onReadPost={(post) => setReadingPost(post)}
        />

        {/* Social Media & Community Hub (IG, FB, Substack) */}
        <SocialHub
          profile={profile}
        />

        {/* About & Methodology */}
        <AboutSection
          profile={profile}
        />

        {/* Patient Testimonials */}
        <TestimonialsSection testimonials={initialTestimonials} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onBookClick={() => handleOpenBookingWithService()}
      />

      {/* Booking Modal */}
      <ContactBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        profile={profile}
        services={services}
        initialService={selectedServiceForBooking}
      />

      {/* Article Reader Modal */}
      <ArticleReaderModal
        post={readingPost}
        onClose={() => setReadingPost(null)}
        profile={profile}
      />

      {/* Service Infographic & Pricing Dossier Modal */}
      <ServiceInfographicModal
        isOpen={isInfographicOpen}
        onClose={() => setIsInfographicOpen(false)}
        profile={profile}
        services={services}
      />

    </div>
  );
}
