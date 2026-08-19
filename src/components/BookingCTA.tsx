import React from 'react';
import { Sparkles, Heart, Phone, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface BookingCTAProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAcademyModal: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking, onOpenAcademyModal }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FCE7F3] via-[#FDF2F8] to-[#FFF0F5] relative overflow-hidden border-y border-[#FBCFE8]">
      {/* Decorative Sparkles & Floating Hearts */}
      <div className="absolute top-8 left-12 text-[#EC4899] text-3xl animate-sparkle pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-8 right-16 text-[#DB2777] text-4xl animate-sparkle pointer-events-none">
        ✧
      </div>
      <div className="absolute top-1/2 right-1/12 text-[#F472B6] text-2xl animate-sparkle pointer-events-none">
        ♡
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#DB2777] text-xs font-bold uppercase tracking-widest border border-[#F472B6]/40 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR GLAM APPOINTMENT</span>
          <Heart className="w-3.5 h-3.5 fill-[#DB2777]" />
        </div>

        {/* Large Headline */}
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#3B071E] tracking-tight leading-tight">
          SO… ARE WE DOING <br />
          <span className="font-script text-[#DB2777] text-5xl sm:text-6xl md:text-7xl font-bold">
            GLAM? ♡
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#4A0E2E] font-medium max-w-xl mx-auto">
          Your dream look is one appointment away. Whether it's your wedding day or mastering pro makeup artistry, let's create something unforgettable.
        </p>

        {/* Dual Primary Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenBooking()}
            id="big-cta-book-glam-btn"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#EC4899] via-[#DB2777] to-[#BE185D] text-white font-bold text-base shadow-[0_12px_28px_rgba(219,39,119,0.4)] hover:shadow-[0_16px_34px_rgba(219,39,119,0.55)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>BOOK YOUR GLAM ✦</span>
          </button>

          <button
            onClick={() => onOpenAcademyModal()}
            id="big-cta-join-academy-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#831843] hover:text-[#DB2777] font-bold text-base border-2 border-[#F472B6] hover:bg-[#FDF2F8] shadow-sm hover:scale-103 active:scale-97 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>JOIN THE ACADEMY</span>
            <span className="text-[#EC4899]">♡</span>
          </button>
        </div>

        {/* Direct Phone / WhatsApp Assistance */}
        <p className="text-xs text-[#9D174D] font-medium pt-2">
          Prefer a quick call? Reach out directly at{' '}
          <a href={`tel:${BRAND_INFO.phone}`} className="underline font-bold text-[#831843]">
            9990677769
          </a>{' '}
          or chat on{' '}
          <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#059669]">
            WhatsApp
          </a>
        </p>

      </div>
    </section>
  );
};
