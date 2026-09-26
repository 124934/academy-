import React from 'react';
import { CalendarCheck, UserCheck, PlayCircle, Award } from 'lucide-react';

interface HowItWorksProps {
  onOpenAdmissionModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenAdmissionModal }) => {
  const steps = [
    {
      number: '01',
      icon: CalendarCheck,
      title: 'Quick Registration',
      desc: 'Fill out our simple registration form with the student’s age, desired course, and preferred time slot.'
    },
    {
      number: '02',
      icon: UserCheck,
      title: 'Tutor & Schedule Match',
      desc: 'Our academic coordinator assigns a dedicated scholar matching your timezone and language preference.'
    },
    {
      number: '03',
      icon: PlayCircle,
      title: 'Live 1-on-1 Sessions',
      desc: 'Attend live classes via Zoom or Google Meet with screen-shared digital books and interactive exercises.'
    },
    {
      number: '04',
      icon: Award,
      title: 'Progress & Certification',
      desc: 'Receive regular evaluations, track mastery across Quranic lessons, and receive completion certificates.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            How to Begin Your Quranic Journey
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Zero hassle, zero technical barrier. Get connected with your mentor within hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between relative shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-extrabold text-emerald-800/40">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/10 flex items-center justify-center text-emerald-900">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenAdmissionModal}
            className="px-8 py-3.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-all shadow-md active:scale-98"
          >
            Start Step 1: Enroll in Online Classes
          </button>
        </div>

      </div>
    </section>
  );
};
