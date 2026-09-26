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

export default function App() {
  // Page Routing State - only the chosen page opens!
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmissionPage = () => {
    setCurrentPage('admission');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        
        {/* Navigation Top Bar: Logo + Brand Name + Navigation Pages (Top Contact removed) */}
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        {/* 
          Main Dynamic Page Area:
          Shows ONLY the selected page (Home, Courses, Quran Studio, About Us, Admission Form)
        */}
        <main className="flex-1">
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
