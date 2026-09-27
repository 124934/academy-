import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Logo } from './Logo';

export type PageId = 'home' | 'courses' | 'reciter' | 'about' | 'admission';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Top navigation pages without contact page
  const pages: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'reciter', label: 'Quran Studio' },
    { id: 'about', label: 'About Us' },
    { id: 'admission', label: 'Admission Form' },
  ];

  const handlePageClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-950/10 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name grouped directly with Navigation Pages */}
          <div className="flex items-center gap-3.5 lg:gap-6 min-w-0">
            <button 
              onClick={() => handlePageClick('home')}
              className="flex items-center gap-3.5 group focus-visible:outline-none text-left shrink-0"
            >
              <Logo size="md" />
              <div>
                <span className="font-display text-lg sm:text-xl xl:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-950 transition-colors block">
                  Quran Education Academy
                </span>
              </div>
            </button>

            {/* Navigation Pages right beside the logo and name */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3 flex-wrap">
              {pages.map((page) => {
                const isActive = currentPage === page.id;
                const isAdmission = page.id === 'admission';
                return (
                  <button
                    key={page.id}
                    onClick={() => handlePageClick(page.id)}
                    className={`text-[11px] lg:text-xs xl:text-sm font-semibold transition-all py-1.5 px-2 lg:px-2.5 rounded-lg whitespace-nowrap ${
                      isActive
                        ? 'text-emerald-950 bg-emerald-100/80 shadow-xs font-bold'
                        : isAdmission
                        ? 'text-emerald-900 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200'
                        : 'text-slate-700 hover:text-emerald-900 hover:bg-white/70'
                    }`}
                  >
                    {page.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => handlePageClick('admission')}
              className="px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-100 rounded-lg whitespace-nowrap flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Admission</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Visible Pages Bar directly with Logo */}
        <nav className="flex md:hidden items-center gap-1.5 overflow-x-auto py-2 border-t border-slate-200/60 scrollbar-none">
          {pages.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handlePageClick(page.id)}
                className={`shrink-0 text-[11px] font-semibold transition-colors py-1 px-2.5 rounded-full ${
                  isActive
                    ? 'text-[#0A3826] font-bold bg-emerald-100 border border-emerald-300 shadow-xs'
                    : 'text-slate-600 bg-white/90 border border-slate-200 hover:text-[#0A3826]'
                }`}
              >
                {page.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2">
          <div className="flex flex-col space-y-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handlePageClick(page.id)}
                className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === page.id
                    ? 'bg-emerald-100 text-emerald-950 font-bold'
                    : 'text-slate-800 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
