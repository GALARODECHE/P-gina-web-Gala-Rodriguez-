import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatesAndServices } from './components/RatesAndServices';
import { AppsSection } from './components/AppsSection';
import { BlogSubstack } from './components/BlogSubstack';
import { NutritionCalculator } from './components/NutritionCalculator';
import { SocialHub } from './components/SocialHub';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactBookingModal } from './components/ContactBookingModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { CMSManagerModal } from './components/CMSManagerModal';
import { Footer } from './components/Footer';
import { bgThemeStyles, BgThemeKey, ThemeColorKey } from './utils/theme';

import {
  initialProfile,
  initialServices,
  initialApps,
  initialPosts,
  initialTestimonials,
  initialInstagramFeed,
} from './data/initialNutritionData';

import {
  NutritionistProfile,
  NutritionService,
  NutritionApp,
  BlogPost,
} from './types';

export default function App() {
  // Local persistence for profile, services, apps and blog posts
  const [profile, setProfile] = useState<NutritionistProfile>(() => {
    const saved = localStorage.getItem('nutri_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...parsed, title: initialProfile.title, bio: initialProfile.bio, extendedBio: initialProfile.extendedBio };
    }
    return initialProfile;
  });

  const [services, setServices] = useState<NutritionService[]>(() => {
    const saved = localStorage.getItem('nutri_services');
    if (!saved) return initialServices;
    const parsed: NutritionService[] = JSON.parse(saved);
    return parsed
      .filter((s) => s.id !== 's-val')
      .map((s) => {
        const fresh = initialServices.find((i) => i.id === s.id);
        if (fresh) {
          return { ...s, title: fresh.title, period: fresh.period, description: fresh.description, ctaText: fresh.ctaText, price: fresh.price };
        }
        return s;
      });
  });

  const [apps, setApps] = useState<NutritionApp[]>(() => {
    const saved = localStorage.getItem('nutri_apps');
    if (!saved) return initialApps;
    const parsed: NutritionApp[] = JSON.parse(saved);
    // Ensure all items in initialApps are present in parsed array
    const existingIds = new Set(parsed.map((a) => a.id));
    const missing = initialApps.filter((i) => !existingIds.has(i.id));
    return missing.length > 0 ? [...missing, ...parsed] : parsed;
  });

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('nutri_posts');
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return (
      localStorage.getItem('theme_mode') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<NutritionService | null>(null);
  const [calcDetailsForBooking, setCalcDetailsForBooking] = useState<string>('');

  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

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

  // Handlers for CMS saving & theme switching
  const handleSaveProfile = (newProfile: NutritionistProfile) => {
    setProfile(newProfile);
    localStorage.setItem('nutri_profile', JSON.stringify(newProfile));
  };

  const handleSelectThemeColor = (color: ThemeColorKey) => {
    const updated = { ...profile, themeColor: color };
    handleSaveProfile(updated);
  };

  const handleSelectBgColor = (bg: BgThemeKey) => {
    const updated = { ...profile, bgTheme: bg };
    handleSaveProfile(updated);
  };

  const handleSaveServices = (newServices: NutritionService[]) => {
    setServices(newServices);
    localStorage.setItem('nutri_services', JSON.stringify(newServices));
  };

  const handleSaveApps = (newApps: NutritionApp[]) => {
    setApps(newApps);
    localStorage.setItem('nutri_apps', JSON.stringify(newApps));
  };

  const handleSavePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('nutri_posts', JSON.stringify(newPosts));
  };

  // Quick Action Handlers
  const handleOpenBookingWithService = (service?: NutritionService) => {
    if (service) {
      setSelectedServiceForBooking(service);
    } else {
      setSelectedServiceForBooking(services[0] || null);
    }
    setCalcDetailsForBooking('');
    setIsBookingOpen(true);
  };

  const handleBookFromCalculator = (calcData: { tdee: number; goal: string; details: string }) => {
    setCalcDetailsForBooking(calcData.details);
    const packService = services.find((s) => s.id === 's-pack') || services[0];
    setSelectedServiceForBooking(packService || null);
    setIsBookingOpen(true);
  };

  const currentBg = bgThemeStyles[profile.bgTheme || 'default'];

  return (
    <div className={`min-h-screen ${currentBg.bodyBg} text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 antialiased selection:bg-teal-600 selection:text-white`}>
      
      {/* Header Navigation */}
      <Navbar
        profile={profile}
        onOpenCMS={() => setIsCMSOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onBookClick={() => handleOpenBookingWithService()}
        onSelectThemeColor={handleSelectThemeColor}
        onSelectBgColor={handleSelectBgColor}
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
          onOpenCMS={() => setIsCMSOpen(true)}
        />

        {/* Developed Apps Section (Apps Propias) */}
        <AppsSection
          profile={profile}
          apps={apps}
          onOpenCMS={() => setIsCMSOpen(true)}
        />

        {/* Blog & Substack Section (Unificación) */}
        <BlogSubstack
          profile={profile}
          posts={posts}
          onReadPost={(post) => setReadingPost(post)}
          onOpenCMS={() => setIsCMSOpen(true)}
        />

        {/* Interactive Nutrition Calculator (Lead Magnet) */}
        <NutritionCalculator
          profile={profile}
          onBookWithData={handleBookFromCalculator}
        />

        {/* Social Media & Community Hub (IG, FB, Substack) */}
        <SocialHub
          profile={profile}
          instagramPosts={initialInstagramFeed}
        />

        {/* About & Methodology */}
        <AboutSection profile={profile} />

        {/* Patient Testimonials */}
        <TestimonialsSection testimonials={initialTestimonials} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenCMS={() => setIsCMSOpen(true)}
        onBookClick={() => handleOpenBookingWithService()}
      />

      {/* Booking Modal */}
      <ContactBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        profile={profile}
        services={services}
        initialService={selectedServiceForBooking}
        initialCalcDetails={calcDetailsForBooking}
      />

      {/* Article Reader Modal */}
      <ArticleReaderModal
        post={readingPost}
        onClose={() => setReadingPost(null)}
        profile={profile}
      />

      {/* Content Management System (CMS) Modal */}
      <CMSManagerModal
        isOpen={isCMSOpen}
        onClose={() => setIsCMSOpen(false)}
        profile={profile}
        services={services}
        apps={apps}
        posts={posts}
        onSaveProfile={handleSaveProfile}
        onSaveServices={handleSaveServices}
        onSaveApps={handleSaveApps}
        onSavePosts={handleSavePosts}
      />

    </div>
  );
}
