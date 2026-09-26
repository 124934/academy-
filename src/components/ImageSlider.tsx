import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, BookOpen, Sparkles } from 'lucide-react';

interface ImageSliderProps {
  onOpenAdmission: (courseId?: string) => void;
  onExploreCourses: () => void;
  onOpenReciter: () => void;
}

interface SlideItem {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryText: string;
  targetCourse?: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    image: '/images/slider_1.jpg',
    badge: 'Admissions Open',
    title: 'Learn Holy Quran with Certified Tutors',
    subtitle: '1-on-1 personalized live classes with proper Tajweed.',
    ctaText: 'Admission Form',
    secondaryText: 'Listen Audio',
    targetCourse: 'quran-reading-tajweed'
  },
  {
    id: 2,
    image: '/images/slider_2.jpg',
    badge: 'Beginner & Kids Friendly',
    title: 'Noorani Qaida & Islamic Studies',
    subtitle: 'Foundational Arabic phonetics, prayers, and manners.',
    ctaText: 'Admission Form',
    secondaryText: 'Explore Courses',
    targetCourse: 'noorani-qaida'
  },
  {
    id: 3,
    image: '/images/slider_3.jpg',
    badge: '24/7 Global Classes',
    title: 'Hifz Program & Quran Translation',
    subtitle: 'Flexible scheduling matching your timezone.',
    ctaText: 'Admission Form',
    secondaryText: 'Explore Courses',
    targetCourse: 'hifz-quran'
  }
];

export const ImageSlider: React.FC<ImageSliderProps> = ({
  onOpenAdmission,
  onExploreCourses,
  onOpenReciter
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
      <div 
        className="relative h-[320px] sm:h-[400px] md:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides loop */}
        {SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Refined gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>
          );
        })}

        {/* Content Box */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 md:p-14 max-w-3xl text-white">
          <div className="space-y-3 sm:space-y-4">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-xs font-semibold backdrop-blur-sm shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>{slide.badge}</span>
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              {slide.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-slate-200 line-clamp-2 max-w-xl font-normal drop-shadow">
              {slide.subtitle}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenAdmission(slide.targetCourse)}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>{slide.ctaText}</span>
              </button>

              <button
                onClick={slide.secondaryText === 'Listen Audio' ? onOpenReciter : onExploreCourses}
                className="px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl transition-all border border-white/25 flex items-center gap-2"
              >
                {slide.secondaryText === 'Listen Audio' ? (
                  <Play className="w-4 h-4 fill-white" />
                ) : null}
                <span>{slide.secondaryText}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-xs border border-white/10 active:scale-90"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-xs border border-white/10 active:scale-90"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicators Dots */}
        <div className="absolute bottom-4 right-6 z-30 flex items-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
