import React from 'react';
import { BookOpen, ShieldCheck, Star, Users, CheckCircle2, Play, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenAdmission: (courseId?: string) => void;
  onExploreCourses: () => void;
  onOpenReciter: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmission,
  onExploreCourses,
  onOpenReciter
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:pt-10 md:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Bar */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-emerald-900/15 shadow-xs text-xs text-slate-800 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-medium">
              Admissions Open: Personalized 1-on-1 Sessions with Certified Tutors
            </span>
            <span className="text-emerald-800 font-semibold cursor-pointer hover:underline" onClick={() => onOpenAdmission()}>
              Admission Form →
            </span>
          </div>
        </div>

        {/* Centered Clean Value Proposition */}
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase">
              Premier Online Quran Academy
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Learn Holy Quran <br />
              <span className="text-emerald-900">With Certified Scholars</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Personalized 1-on-1 live online classes for children and adults worldwide. Master Noorani Qaida, Tajweed, Hifz, and Tafseer at your preferred schedule.
            </p>
          </div>

          {/* Value Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/85 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Certified & Experienced Faculty</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/85 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>24/7 Global Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/85 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>1-on-1 Individual Attention & Care</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/85 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Interactive Digital Whiteboard</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenAdmission()}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Admission Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenReciter}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white/90 hover:bg-white hover:text-emerald-950 rounded-xl border border-slate-300 transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-emerald-700 fill-emerald-700" />
              <span>Interactive Quran Studio</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 border-t border-slate-200/80">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="font-semibold text-slate-800">4.98 / 5.0</span>
              <span>(350+ Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Al-Azhar & Wifaq Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-800" />
              <span>1,500+ Active Students</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
