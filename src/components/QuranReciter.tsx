import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronRight, Sparkles, Check } from 'lucide-react';
import { SURAH_SAMPLES, SurahSample } from '../data/academyData';

interface QuranReciterProps {
  onOpenAdmissionModal: (courseId?: string) => void;
}

export const QuranReciter: React.FC<QuranReciterProps> = ({ onOpenAdmissionModal }) => {
  const [selectedSurah, setSelectedSurah] = useState<SurahSample>(SURAH_SAMPLES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeVerseIndex, setActiveVerseIndex] = useState(0);
  const [showTransliteration, setShowTransliteration] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
      setActiveVerseIndex(0);
      audioRef.current.load();
    }
  }, [selectedSurah]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (duration > 0 && selectedSurah.verses.length > 1) {
        const progress = audioRef.current.currentTime / duration;
        const index = Math.min(
          Math.floor(progress * selectedSurah.verses.length),
          selectedSurah.verses.length - 1
        );
        setActiveVerseIndex(index);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <section id="reciter" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tajweed Studio</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Listen, Practice & Master Proper Recitation
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Authentic audio recitation with synchronized Arabic script, Tajweed pronunciation guidelines, and English translation.
          </p>
        </div>

        {/* Studio Card Container */}
        <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden">
          
          {/* Top Bar: Surah Picker & Controls */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Surah Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {SURAH_SAMPLES.map((surah) => {
                const isSelected = selectedSurah.id === surah.id;
                return (
                  <button
                    key={surah.id}
                    onClick={() => setSelectedSurah(surah)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-emerald-500 text-white font-semibold shadow-xs'
                        : 'bg-white/10 hover:bg-white/20 text-white/90'
                    }`}
                  >
                    <span>{surah.name}</span>
                    <span className="font-arabic text-[11px] opacity-80">({surah.nameArabic})</span>
                  </button>
                );
              })}
            </div>

            {/* Display Toggles */}
            <div className="flex items-center gap-3 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer text-slate-200">
                <input
                  type="checkbox"
                  checked={showTransliteration}
                  onChange={(e) => setShowTransliteration(e.target.checked)}
                  className="rounded text-emerald-500 focus:ring-0 cursor-pointer"
                />
                <span>Transliteration</span>
              </label>
            </div>

          </div>

          {/* Audio Player Bar */}
          <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <audio
              ref={audioRef}
              src={selectedSurah.audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            />

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
              </button>

              <div>
                <p className="text-xs font-semibold text-slate-900">
                  {selectedSurah.name} ({selectedSurah.nameArabic})
                </p>
                <p className="text-[11px] text-slate-500">
                  Qari Mishary Rashid Alafasy · {selectedSurah.versesCount} {selectedSurah.versesCount === 1 ? 'Verse' : 'Verses'}
                </p>
              </div>
            </div>

            {/* Scrubber */}
            <div className="flex-1 w-full max-w-md flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-600 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 accent-emerald-800 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
              />
              <span className="text-[11px] font-mono text-slate-600 w-10">
                {formatTime(duration)}
              </span>
            </div>

            {/* Speed Selector */}
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <span className="text-[11px] text-slate-500">Speed:</span>
              {[0.75, 1, 1.25].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                    playbackSpeed === speed
                      ? 'bg-emerald-900 text-white'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>

          </div>

          {/* Verses Display Box */}
          <div className="p-6 md:p-8 space-y-6 max-h-[500px] overflow-y-auto">
            {selectedSurah.verses.map((verse, idx) => {
              const isCurrent = activeVerseIndex === idx;
              return (
                <div
                  key={verse.number}
                  className={`p-5 rounded-xl transition-all duration-300 border ${
                    isCurrent
                      ? 'bg-emerald-50/70 border-emerald-300/80 shadow-xs ring-1 ring-emerald-300/40'
                      : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  {/* Top line: verse number badge & tajweed rule tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold font-mono">
                      {verse.number}
                    </span>
                    {verse.tajweedRule && (
                      <span className="text-[11px] text-emerald-800 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Tajweed: {verse.tajweedRule}
                      </span>
                    )}
                  </div>

                  {/* Arabic Text */}
                  <div className="text-right my-2 font-arabic text-2xl sm:text-3xl text-slate-900 leading-[2.2] tracking-wide select-text">
                    {verse.arabic}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-emerald-600/30 text-emerald-800 text-sm font-arabic font-normal mr-2">
                      ۝
                    </span>
                  </div>

                  {/* Transliteration */}
                  {showTransliteration && (
                    <div className="text-xs sm:text-sm font-medium text-slate-600 italic mt-2">
                      {verse.transliteration}
                    </div>
                  )}

                  {/* English Translation */}
                  <div className="text-xs sm:text-sm text-slate-800 mt-2">
                    <span className="font-semibold text-slate-500 mr-1.5">Meaning:</span>
                    {verse.english}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Action Footer */}
          <div className="p-4 sm:p-5 bg-slate-50/90 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Want a certified teacher to listen and correct your recitation live?</span>
            </div>

            <button
              onClick={() => onOpenAdmissionModal('quran-reading-tajweed')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors shadow-xs flex items-center gap-1.5"
            >
              <span>Practice Recitation with a Tutor</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
