import React from 'react';
import { X, Sparkles, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';
import { BRAND_INFO } from '../data/mockData';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBook: (lookTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onBook }) => {
  if (!item) return null;

  const handleWhatsAppLook = () => {
    const text = `Hey Sanya & Shifa! ♡ I love the *${item.title}* from your portfolio! I'd like to book a similar look for my upcoming event.`;
    window.open(`https://wa.me/919990677769?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FFFDFB] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-[#831843] hover:bg-white shadow-lg transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo Left */}
        <div className="lg:w-7/12 bg-[#2A0414] relative flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Details Right */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F5] text-[#DB2777] text-xs font-bold uppercase tracking-wider border border-[#FBCFE8]">
              <span>{item.categoryLabel}</span>
              <span>♡</span>
            </div>

            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#3B071E]">
                {item.title}
              </h3>
              <p className="text-xs text-[#9D174D] font-semibold pt-0.5">
                {item.clientType}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4A0E2E]/85 leading-relaxed">
              {item.lookDetails}
            </p>

            {/* Techniques Used */}
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#831843]">
                KEY TECHNIQUES:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.techniques.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-[#FFF0F5] text-[#831843] text-xs font-medium border border-[#FBCFE8]"
                  >
                    ✦ {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Action Triggers */}
          <div className="space-y-2.5 pt-4 border-t border-[#FCE7F3]">
            <button
              onClick={() => {
                onClose();
                onBook(item.title);
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EC4899] to-[#BE185D] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-102 transition-transform flex items-center justify-center gap-2"
            >
              <span>Book This Exact Look ✦</span>
            </button>

            <button
              onClick={handleWhatsAppLook}
              className="w-full py-3 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-bold text-xs hover:bg-[#D1FAE5] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#059669]" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
