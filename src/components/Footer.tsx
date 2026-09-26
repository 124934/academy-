import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { PageId } from './Header';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800 text-xs">
          
          {/* Brand Info & Contacts */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <span className="font-display text-lg font-bold text-white tracking-wide block">
                Quran Education Academy
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-md">
              Dedicated to offering authentic 1-on-1 online Quran learning, Noorani Qaida, and Tajweed with certified mentors worldwide.
            </p>

            {/* Official Contact Info */}
            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Contact No : <strong className="text-white font-semibold">03187779954</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Email : <a href="mailto:quraaneducationacademy@gmail.com" className="text-emerald-300 hover:underline">quraaneducationacademy@gmail.com</a></span>
              </div>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-[11px]">Pages</h4>
            <div className="flex flex-col space-y-2 text-slate-400">
              <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-emerald-400 transition-colors">Home</button>
              <button onClick={() => { onNavigate('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-emerald-400 transition-colors">Courses</button>
              <button onClick={() => { onNavigate('reciter'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-emerald-400 transition-colors">Quran Studio</button>
              <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-emerald-400 transition-colors">About Us</button>
              <button onClick={() => { onNavigate('admission'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-emerald-400 transition-colors font-medium text-emerald-400">Admission Form</button>
            </div>
          </div>

          {/* Admission Action Box */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-white tracking-wide uppercase text-[11px]">Admission</h4>
            <p className="text-slate-400 leading-relaxed">
              Submit the online admission form to begin personalized one-on-one Quran classes.
            </p>
            <button
              onClick={() => { onNavigate('admission'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="py-2.5 px-5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors text-center shadow-xs block w-full"
            >
              Open Admission Form
            </button>
          </div>

        </div>

        {/* Middle Bar: Copyright */}
        <div className="pt-6 pb-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Quran Education Academy. All rights reserved.</p>
          <p>Teaching the Holy Quran with sincerity and dedication.</p>
        </div>

        {/* Developer Credit at the very bottom of every page */}
        <div className="pt-4 border-t border-slate-900/80 text-center text-xs text-slate-400">
          <p className="flex items-center justify-center flex-wrap gap-1.5 font-medium">
            <span>Developed &amp; Designed by Abixion Digital Marketing</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="https://abixion.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 inline-flex items-center gap-1 font-semibold underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-300"
            >
              <span>abixion.pk</span>
              <ExternalLink className="w-3 h-3 stroke-[2.2]" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
