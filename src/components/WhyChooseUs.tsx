import React from 'react';
import { UserCheck, Shield, Clock, Award, HeartHandshake, Laptop } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Certified & Experienced Faculty',
      desc: 'Graduates from Al-Azhar, Jamia Ashrafia, and Wifaq-ul-Madaris holding authentic Sanad in Qira’at with extensive online tutoring experience.',
      image: '/images/pillar_faculty.jpg'
    },
    {
      icon: HeartHandshake,
      title: '1-on-1 Individual Attention',
      desc: 'No crowded group sessions. Every single minute of class is solely dedicated to correcting pronunciation, pacing, and Tajweed.',
      image: '/images/pillar_one_on_one.jpg'
    },
    {
      icon: Clock,
      title: '24/7 Flexible Timings',
      desc: 'Learn around your work or school timetable. Tutors available across all USA, UK, Canada, Australia, and Gulf time zones.',
      image: '/images/pillar_timings.jpg'
    },
    {
      icon: Laptop,
      title: 'Interactive Digital Whiteboard',
      desc: 'High-definition Quran screen-sharing with color-coded Tajweed highlights, making learning intuitive, visual, and engaging.',
      image: '/images/pillar_whiteboard.jpg'
    },
    {
      icon: Award,
      title: 'Monthly Progress Tracking',
      desc: 'Regular evaluations, recorded progress metrics, and recognized completion certificates upon finishing each course.',
      image: '/images/pillar_progress.jpg'
    },
    {
      icon: Shield,
      title: 'Affordable & Transparent Tuition',
      desc: 'Straightforward monthly packages with no hidden registration costs, and generous sibling discounts for families.',
      image: '/images/pillar_tuition.jpg'
    }
  ];

  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            The Academy Difference
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Why Choose Quran Education Academy
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Combining traditional reverence with modern online convenience for students of all ages worldwide.
          </p>
        </div>

        {/* 6 Key Pillars Grid with Individual Dedicated Professional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 hover:border-emerald-700/50 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Dedicated Card Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-xs border border-emerald-900/10 flex items-center justify-center text-emerald-900">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-950 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
