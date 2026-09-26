import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import { COURSES_DATA } from '../data/academyData';

export const CourseCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kids' | 'beginners' | 'hifz' | 'advanced'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'beginners', label: 'Noorani Qaida' },
    { id: 'kids', label: 'Kids & Tajweed' },
    { id: 'hifz', label: 'Hifz Program' },
    { id: 'advanced', label: 'Tafseer & Arabic' },
  ];

  const filteredCourses = activeFilter === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === activeFilter);

  return (
    <section id="courses" className="py-12 md:py-16 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum & Programs</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Our Quran Courses
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Authentic Quranic lessons taught online one-on-one by certified scholars.
          </p>
        </div>

        {/* Segmented Filter Control */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1 bg-white/85 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-xs max-w-full overflow-x-auto scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-emerald-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid: Clean, without duration/months, without age category, without syllabus/enroll buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/80 hover:border-emerald-700/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between p-6 group"
            >
              <div className="space-y-4">
                {/* Course Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                    {course.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.shortDesc}
                </p>

                {/* Features Bullet List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
