import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatesAndServices } from './components/RatesAndServices';
import { InstitutionalConsulting } from './components/InstitutionalConsulting';
import { BlogSubstack } from './components/BlogSubstack';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactBookingModal } from './components/ContactBookingModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { TuNutriLensModal } from './components/TuNutriLensModal';
import { Footer } from './components/Footer';
import { bgThemeStyles } from './utils/theme';

import {
  initialProfile,
  initialServices,
  initialPosts,
} from './data/initialNutritionData';

import {
  NutritionistProfile,
  NutritionService,
  BlogPost,
} from './types';
import { fetchLiveSubstackPosts } from './services/substackService';

export default function App() {
  const profile = initialProfile;
  const services = initialServices;
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isSyncingSubstack, setIsSyncingSubstack] = useState(false);
  const [lastUpdatedSubstack, setLastUpdatedSubstack] = useState<number | null>(null);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme_mode') === 'dark';
    } catch {
      return false;
    }
  });

  // Clean up any stale data-palette
  useEffect(() => {
    document.documentElement.removeAttribute('data-palette');
    try {
      localStorage.removeItem('selected_palette');
    } catch {
      // ignore
    }
  }, []);

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<NutritionService | null>(null);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
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

  // Real-time Substack Feed Sync & Auto-polling
  const loadSubstackFeed = async (force = false) => {
    setIsSyncingSubstack(true);
    try {
      const result = await fetchLiveSubstackPosts(force);
      if (result.posts && result.posts.length > 0) {
        setPosts(result.posts);
        setLastUpdatedSubstack(result.timestamp);
      }
    } catch (e) {
      console.warn('Error loading live Substack feed:', e);
    } finally {
      setIsSyncingSubstack(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    loadSubstackFeed(false);

    // Continuous auto-update polling every 60 seconds
    const interval = setInterval(() => {
      loadSubstackFeed(true);
    }, 60000);

    // Auto-update when user switches back to this tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadSubstackFeed(true);
      }
    };

    const handleFocus = () => {
      loadSubstackFeed(true);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

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
          onOpenTuNutriLens={() => setIsTuNutriLensOpen(true)}
          onExploreRates={() => {
            const el = document.getElementById('sesiones-online') || document.getElementById('servicios');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreInstitutions={() => {
            const el = document.getElementById('talleres-formacion') || document.getElementById('instituciones');
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

        {/* Clinical Services Section */}
        <RatesAndServices
          profile={profile}
          services={services}
          onSelectPlan={(service) => handleOpenBookingWithService(service)}
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

        {/* Blog & Substack Section (Unificación) */}
        <BlogSubstack
          profile={profile}
          posts={posts}
          onReadPost={(post) => setReadingPost(post)}
          onRefreshFeed={() => loadSubstackFeed(true)}
          isSyncing={isSyncingSubstack}
          lastUpdated={lastUpdatedSubstack}
        />

        {/* About & Methodology */}
        <AboutSection
          profile={profile}
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
