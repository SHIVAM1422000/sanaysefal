import React from 'react';
import { Sparkles, Heart, Phone, MessageCircle, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div 
      id="sticky-mobile-conversion-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FFFDFB]/95 backdrop-blur-md border-t border-[#FBCFE8] px-4 py-2.5 shadow-[0_-8px_25px_rgba(219,39,119,0.15)] flex items-center justify-between gap-2"
    >
      {/* Quick Direct Call */}
      <a
        href={`tel:${BRAND_INFO.phone}`}
        className="flex flex-col items-center justify-center min-w-[48px] h-11 rounded-2xl bg-[#FFF0F5] text-[#831843] border border-[#FBCFE8] active:scale-95 transition-transform"
        aria-label="Call studio"
      >
        <Phone className="w-4 h-4 text-[#DB2777]" />
        <span className="text-[9px] font-bold">Call</span>
      </a>

      {/* Main Dual Action: Book Now | WhatsApp */}
      <div className="flex-1 flex items-center gap-1.5">
        
        {/* Book Now Button */}
        <button
          onClick={onOpenBooking}
          id="mobile-sticky-book-btn"
          className="flex-1 h-11 rounded-2xl bg-gradient-to-r from-[#EC4899] to-[#BE185D] text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5 active:scale-98 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>♡ BOOK GLAM</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-btn"
          className="flex-1 h-11 rounded-2xl bg-[#059669] text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5 active:scale-98 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP ✦</span>
        </a>

      </div>

      {/* Quick Instagram Icon */}
      <a
        href={BRAND_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center min-w-[48px] h-11 rounded-2xl bg-[#FFF0F5] text-[#DB2777] border border-[#FBCFE8] active:scale-95 transition-transform"
        aria-label="Instagram profile"
      >
        <Instagram className="w-4 h-4" />
        <span className="text-[9px] font-bold">Insta</span>
      </a>
    </div>
  );
};
