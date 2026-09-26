import React from 'react';
import { Phone, Mail, MessageCircle, ShieldCheck, HeartHandshake, Clock, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            About Quran Education Academy
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Dedicated to Authentic Quranic Education
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Providing accessible, personalized 1-on-1 online Quran lessons for students and families worldwide.
          </p>
        </div>

        {/* Highlighted Official Contact Information Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white shadow-2xl border-2 border-emerald-500/40 relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                Official Contact &amp; Admission Information
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Quran Education Academy
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Connect with our academic team directly for admission queries, schedule consultations, or syllabus guidance.
              </p>
            </div>

            {/* High-visibility Contact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Highlighted Phone / WhatsApp */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-emerald-400/40 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                    <Phone className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-300 block font-medium">
                      Contact / WhatsApp Number
                    </span>
                    <a
                      href="https://wa.me/923187779954"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl font-bold text-emerald-300 hover:text-emerald-200 tracking-wide block"
                    >
                      03187779954
                    </a>
                  </div>
                </div>
              </div>

              {/* Highlighted Email */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-emerald-400/40 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                    <Mail className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-slate-300 block font-medium">
                      Official Email
                    </span>
                    <a
                      href="mailto:quraaneducationacademy@gmail.com"
                      className="text-xs sm:text-sm font-bold text-emerald-300 hover:text-emerald-200 block truncate"
                    >
                      quraaneducationacademy@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-2">
              <a
                href="https://wa.me/923187779954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Chat on WhatsApp: 03187779954</span>
              </a>
            </div>

          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/10 flex items-center justify-center text-emerald-900">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Certified Tutors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every instructor is vetted through rigorous recitation and Tajweed assessment, holding Sanad and Madaris degrees.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/10 flex items-center justify-center text-emerald-900">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">1-on-1 Individual Attention</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patient correction and personalized guidance for children and adults at every skill level.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/10 flex items-center justify-center text-emerald-900">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Flexible Scheduling</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Classes available round the clock according to your convenient timezone and schedule.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/10 flex items-center justify-center text-emerald-900">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Structured Learning</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive progression from foundational Noorani Qaida to full Quran recitation and Tajweed.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
