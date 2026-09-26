import React from 'react';
import { UserCheck, Shield, Clock, Award, HeartHandshake, Laptop, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Certified & Experienced Faculty',
      desc: 'Graduates from Al-Azhar, Jamia Ashrafia, and Wifaq-ul-Madaris holding Sanad in Qira’at with years of online tutoring experience.'
    },
    {
      icon: HeartHandshake,
      title: '1-on-1 Individual Attention',
      desc: 'No crowded group sessions. Every minute of the class is solely dedicated to correcting pronunciation, pacing, and Tajweed.'
    },
    {
      icon: Clock,
      title: '24/7 Flexible Timings',
      desc: 'Learn around your work or school timetable. Tutors available across all USA, UK, Canada, Australia, and Gulf time zones.'
    },
    {
      icon: Laptop,
      title: 'Interactive Digital Whiteboard',
      desc: 'High-definition digital Quran and Qaida screen-sharing with color-coded Tajweed highlights, making learning engaging.'
    },
    {
      icon: Award,
      title: 'Monthly Progress Tracking',
      desc: 'Regular evaluations, recorded progress metrics, and recognized completion certificates upon finishing each course.'
    },
    {
      icon: Shield,
      title: 'Affordable & Transparent Tuition',
      desc: 'Straightforward monthly packages with no hidden registration costs, and generous sibling discounts for families.'
    }
  ];

  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with vibrant Royal Emerald & Gold accent styling */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Academy Difference</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Why Choose Quran Education Academy
          </h2>

          <p className="text-xs sm:text-sm text-emerald-900/80 font-medium">
            Combining traditional reverence with modern online convenience for students of all ages.
          </p>
        </div>

        {/* Bento Grid with rich, premium contrast cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white border border-emerald-500/25 hover:border-emerald-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500/25 group-hover:text-amber-300 transition-colors mb-4">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-200 transition-colors mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed">
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
