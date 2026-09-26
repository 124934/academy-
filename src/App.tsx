import React, { useState } from 'react';
import { Header, PageId } from './components/Header';
import { ImageSlider } from './components/ImageSlider';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FAQSection';
import { CourseCatalog } from './components/CourseCatalog';
import { QuranReciter } from './components/QuranReciter';
import { AboutPage } from './components/AboutPage';
import { AdmissionPage } from './components/AdmissionPage';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

const PAGE_ORDER: Record<PageId, number> = {
  home: 0,
  courses: 1,
  reciter: 2,
  about: 3,
  admission: 4,
};

export default function App() {
  // Page Routing State - only the chosen page opens!
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const handleNavigate = (page: PageId) => {
    if (page === currentPage) return;
    const oldIndex = PAGE_ORDER[currentPage] ?? 0;
    const newIndex = PAGE_ORDER[page] ?? 0;
    setDirection(newIndex >= oldIndex ? 'forward' : 'backward');
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmissionPage = () => {
    handleNavigate('admission');
  };

  const transitionClass = direction === 'forward' 
    ? 'push-transition-forward' 
    : 'push-transition-backward';

  return (
    <div className="min-h-screen relative text-slate-900 selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      
      {/* 
        Background image asset preserved exactly as uploaded.
        Rendered prominently at full visibility so the pattern details are clearly seen across the site.
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: 0.95 }}
        aria-hidden="true"
      >
        <img
          src="/images/islamic_bg.jpg"
          alt="Islamic Geometric Background Pattern"
          className="absolute inset-0 w-full h-full object-repeat object-top"
          style={{ objectPosition: 'center top' }}
          loading="eager"
        />
        {/* Seamless high-contrast repeating pattern */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/islamic_bg.jpg')",
            backgroundRepeat: 'repeat',
            backgroundSize: '360px auto',
            backgroundPosition: 'center top'
          }}
        />
      </div>

      {/* Crystal clear ultra-light scrim so the background stays prominent and sharp */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-white/20"
        aria-hidden="true"
      />

      {/* Site Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Top Bar: Logo + Brand Name + Navigation Pages */}
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        {/* 
          Main Dynamic Page Area with Push Transition:
          Pushes gracefully in and out when changing pages (Home, Courses, Quran Studio, About Us, Admission Form)
        */}
        <main className="flex-1 overflow-x-hidden">
          <div key={currentPage} className={transitionClass}>
            {currentPage === 'home' && (
              <div className="space-y-4">
                {/* Image Slider */}
                <ImageSlider
                  onOpenAdmission={handleOpenAdmissionPage}
                  onExploreCourses={() => handleNavigate('courses')}
                  onOpenReciter={() => handleNavigate('reciter')}
                />

                {/* Hero Section */}
                <Hero
                  onOpenAdmission={handleOpenAdmissionPage}
                  onExploreCourses={() => handleNavigate('courses')}
                  onOpenReciter={() => handleNavigate('reciter')}
                />

                {/* Why Choose Us */}
                <WhyChooseUs />

                {/* Frequently Asked Questions */}
                <FAQSection />
              </div>
            )}

            {currentPage === 'courses' && (
              <div className="pt-4">
                <CourseCatalog />
              </div>
            )}

            {currentPage === 'reciter' && (
              <div className="pt-4">
                <QuranReciter
                  onOpenAdmissionModal={() => handleOpenAdmissionPage()}
                />
              </div>
            )}

            {currentPage === 'about' && (
              <div className="pt-4">
                <AboutPage />
              </div>
            )}

            {currentPage === 'admission' && (
              <div className="pt-4">
                <AdmissionPage />
              </div>
            )}
          </div>
        </main>

        {/* Footer with official details & developer credit */}
        <Footer
          onNavigate={handleNavigate}
        />

        {/* 24/7 Floating WhatsApp Assistance */}
        <WhatsAppFloatingButton />

      </div>

    </div>
  );
}
