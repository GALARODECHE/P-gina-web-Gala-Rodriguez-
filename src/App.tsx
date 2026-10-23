import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatesAndServices } from './components/RatesAndServices';
import { InstitutionalConsulting } from './components/InstitutionalConsulting';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { TuNutriLensSection } from './components/TuNutriLensSection';
import { ContactBookingModal } from './components/ContactBookingModal';
import { TuNutriLensModal } from './components/TuNutriLensModal';
import { Footer } from './components/Footer';
import { bgThemeStyles } from './utils/theme';

import {
  initialProfile,
  initialServices,
} from './data/initialNutritionData';

import {
  NutritionService,
} from './types';

export default function App() {
  const profile = initialProfile;
  const services = initialServices;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme_mode') === 'dark';
    } catch {
      return false;
    }
  });

  // Clean up any stale data-palette & load uniform bg if set
  useEffect(() => {
    document.documentElement.removeAttribute('data-palette');
    try {
      localStorage.removeItem('selected_palette');
      const savedBg = localStorage.getItem('gala_custom_bg');
      if (savedBg) {
        document.documentElement.style.setProperty('--bg-page-uniform', savedBg);
      }
    } catch {
      // ignore
    }
  }, []);

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<NutritionService | null>(null);
  const [isTuNutriLensOpen, setIsTuNutriLensOpen] = useState(false);

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

  const handleReturnToServicesFromApp = () => {
    setIsTuNutriLensOpen(false);
    setTimeout(() => {
      const el = document.getElementById('sesiones-online') || document.getElementById('servicios');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const scrollToInstitutions = () => {
    const el = document.getElementById('talleres-formacion') || document.getElementById('instituciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentBg = bgThemeStyles[profile.bgTheme || 'default'];

  return (
    <div className={`min-h-screen app-unified-gradient dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans transition-colors duration-200 antialiased selection:bg-amber-500 selection:text-white`}>
      
      {/* Header Navigation */}
      <Navbar
        profile={profile}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onBookClick={() => handleOpenBookingWithService()}
        onOpenTuNutriLens={() => setIsTuNutriLensOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          onExploreRates={() => {
            const el = document.getElementById('sesiones-online') || document.getElementById('servicios');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreApps={() => setIsTuNutriLensOpen(true)}
          onExploreInstitutions={scrollToInstitutions}
          onBookFreeValuation={() => {
            const featuredProg = services.find((s) => s.id === 's-pack') || services[0];
            handleOpenBookingWithService(featuredProg);
          }}
        />

        {/* Clinical Services Section */}
        <RatesAndServices
          profile={profile}
          services={services}
          onSelectPlan={(service) => handleOpenBookingWithService(service)}
        />

        {/* Talleres, Ponencias y Formación para Entidades (Restaurado en el flujo principal) */}
        <InstitutionalConsulting
          profile={profile}
          onOpenBooking={(topic) => {
            const customService: NutritionService = {
              id: 'inst-custom',
              title: topic,
              subtitle: 'Servicios a Instituciones y Colectividades',
              price: 'Presupuesto a medida',
              period: 'Por Proyecto o Sesión',
              description: 'Asesoría técnica para residencias, centros de día, colegios o asociaciones.',
              features: ['Revisión de menús basales y adaptados', 'Talleres y ponencias', 'Cumplimiento normativo e informe oficial'],
              idealFor: 'Instituciones y colectividades sanitarias/educativas',
              ctaText: 'Solicitar Propuesta',
              category: 'Consulta',
            };
            handleOpenBookingWithService(customService);
          }}
        />

        {/* About & Methodology */}
        <AboutSection
          profile={profile}
        />

        {/* App TuNutriLens (Sección al final de la página) */}
        <TuNutriLensSection
          profile={profile}
          onOpenTuNutriLens={() => setIsTuNutriLensOpen(true)}
        />

        {/* Clinical & Service FAQ Section */}
        <FAQSection
          profile={profile}
          onBookClick={() => handleOpenBookingWithService()}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onBookClick={() => handleOpenBookingWithService()}
        onOpenTuNutriLens={() => setIsTuNutriLensOpen(true)}
        onOpenInstitutions={scrollToInstitutions}
      />

      {/* Booking Modal */}
      <ContactBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        profile={profile}
        services={services}
        initialService={selectedServiceForBooking}
      />

      {/* TuNutriLens In-App Modal with Return Navigation */}
      <TuNutriLensModal
        isOpen={isTuNutriLensOpen}
        onClose={() => setIsTuNutriLensOpen(false)}
        onGoToServices={handleReturnToServicesFromApp}
        onBookAppointment={() => handleOpenBookingWithService()}
      />

    </div>
  );
}
