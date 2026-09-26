import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/academyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Everything you need to know about our online Quran classes, scheduling, and certified tutors.
          </p>
        </div>

        {/* Accordion List with Smooth Expand Transitions */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-300 shadow-xs hover:border-emerald-700/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/70"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900 transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen ? 'bg-emerald-900 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated content expansion */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
