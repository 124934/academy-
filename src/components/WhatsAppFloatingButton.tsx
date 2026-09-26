import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const message = encodeURIComponent(
    'Assalamu Alaikum! I would like to get information regarding online Quran classes at Quran Education Academy.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      <div className="hidden sm:block bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200 text-xs font-semibold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp: 03187779954
      </div>

      <a
        href={`https://wa.me/923187779954?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Quran Education Academy on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
