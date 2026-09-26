import React from 'react';
import { X, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Course } from '../data/academyData';

interface CourseDetailsModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="pr-8 space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
              Syllabus & Course Structure
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              {course.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-white/15 text-xs text-slate-200">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Target: {course.suitableFor}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm">
          
          {/* Overview */}
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Course Overview</h4>
            <p className="text-slate-600 leading-relaxed">
              {course.shortDesc}
            </p>
          </div>

          {/* Key Competencies Covered */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Core Learning Outcomes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus Stages */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Structured Curriculum Roadmap</h4>
            <div className="space-y-3">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between font-semibold text-xs text-emerald-900 mb-1">
                    <span>{item.week}</span>
                    <span className="font-mono text-slate-400">Step {idx + 1}</span>
                  </div>
                  <h5 className="font-bold text-slate-800 text-xs mb-1">
                    {item.topic}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
            <span className="font-bold text-slate-800">Prerequisites: </span>
            {course.prerequisites}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onEnroll(course.id);
            }}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>Fill Admission Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
