import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/academyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative bg-white/70 backdrop-blur-xs border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <span>Verified Parent Reviews</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Loved by Over 1,500 Families Worldwide
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Real stories from families across UK, USA, Canada, and Australia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {t.period}
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.feedback}"
                </p>

              </div>

              {/* Attribution */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {t.parentName}
                  </h4>
                  <p className="text-[11px] text-emerald-900 font-medium">
                    Student: {t.studentName} · {t.courseTaken}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span>{t.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
