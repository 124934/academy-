import React, { useState } from 'react';
import { Award, GraduationCap, Languages, Star, User } from 'lucide-react';
import { TEACHERS_DATA } from '../data/academyData';

interface TeachersSectionProps {
  onRequestTeacher: (teacherName: string, gender: 'male' | 'female') => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onRequestTeacher }) => {
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');

  const filteredTeachers = genderFilter === 'all'
    ? TEACHERS_DATA
    : TEACHERS_DATA.filter((t) => t.gender === genderFilter);

  return (
    <section id="faculty" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <span>Faculty & Scholars</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Learn from Dedicated, Certified Instructors
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Rigorous vetting, authentic credentials, and multilingual fluency.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white/85 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-xs">
            <button
              onClick={() => setGenderFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                genderFilter === 'all'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Tutors
            </button>
            <button
              onClick={() => setGenderFilter('female')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                genderFilter === 'female'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Female Tutors
            </button>
            <button
              onClick={() => setGenderFilter('male')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                genderFilter === 'male'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Male Tutors
            </button>
          </div>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/80 hover:border-emerald-700/40 transition-all duration-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-emerald-900/10 border border-emerald-900/20 flex items-center justify-center text-emerald-900 shrink-0 font-display font-bold text-lg">
                    <User className="w-7 h-7 stroke-[1.6]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-900 truncate">
                      {teacher.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-amber-600 mt-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-semibold text-slate-800">{teacher.rating}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{teacher.experienceYears} Years Exp.</span>
                    </div>
                  </div>
                </div>

                {/* Role and Specialty */}
                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                  <p className="text-xs font-semibold text-emerald-950">
                    {teacher.role}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    {teacher.specialty}
                  </p>
                </div>

                {/* Credentials */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>{teacher.education}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{teacher.certification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Speaks: {teacher.languages.join(', ')}</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={() => onRequestTeacher(teacher.name, teacher.gender)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-emerald-900 hover:text-white bg-emerald-50 hover:bg-emerald-900 rounded-xl transition-all border border-emerald-200 hover:border-emerald-900 active:scale-98 flex items-center justify-center gap-2"
                >
                  Select {teacher.gender === 'female' ? 'Female Tutor' : 'Male Tutor'}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
