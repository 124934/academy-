import React, { useState } from 'react';
import { Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { DAILY_HADITHS } from '../data/academyData';

export const DailyInspiration: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const item = DAILY_HADITHS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DAILY_HADITHS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DAILY_HADITHS.length) % DAILY_HADITHS.length);
  };

  const handleCopy = () => {
    const textToCopy = `${item.arabic}\n${item.english} (${item.reference})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
              <span>Prophetic Guidance & Quranic Virtue</span>
            </div>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-900 hover:bg-emerald-50 transition-colors text-xs flex items-center gap-1"
              title="Copy reminder"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="text-[11px]">{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>

          {/* Arabic Core */}
          <div className="py-5 text-center">
            <p className="font-arabic text-2xl sm:text-3xl text-slate-900 leading-[2] tracking-wide">
              «{item.arabic}»
            </p>
            <p className="text-xs text-emerald-800 font-medium italic mt-2">
              {item.transliteration}
            </p>
          </div>

          {/* English Meaning */}
          <div className="pt-3 border-t border-slate-100 text-center text-xs sm:text-sm text-slate-700">
            "{item.english}"
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-slate-100 text-xs text-slate-500">
            <span className="font-medium text-emerald-900">{item.reference}</span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-1 rounded hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-[11px] text-slate-400">
                {currentIndex + 1} / {DAILY_HADITHS.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1 rounded hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
