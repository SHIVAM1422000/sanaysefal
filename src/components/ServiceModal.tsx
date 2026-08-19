import React from 'react';
import { X, Sparkles, Heart, Check, Clock, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';
import { BRAND_INFO } from '../data/mockData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    const text = `Hey Sanya & Shifa! ♡ I'd love to know pricing and date availability for *${service.title}* (${service.idealFor}).`;
    window.open(`https://wa.me/919990677769?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FFFDFB] rounded-3xl border border-[#FBCFE8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Banner with Image */}
        <div className="relative h-48 bg-[#FCE7F3] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B071E] via-[#3B071E]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-pink-200">
              {service.idealFor}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
          
          {/* Tagline & Full Details */}
          <div className="space-y-2">
            <p className="font-script text-xl text-[#DB2777] font-bold">
              {service.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#4A0E2E]/85 leading-relaxed">
              {service.fullDetails}
            </p>
          </div>

          {/* Time & Duration */}
          <div className="p-3.5 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] flex items-center justify-between text-xs text-[#831843] font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#DB2777]" />
              <span>Session Duration: {service.duration}</span>
            </div>
            <span className="text-[#EC4899]">✦ High-Definition Luxury</span>
          </div>

          {/* Key Inclusions */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#831843]">
              WHAT'S INCLUDED IN THIS LOOK:
            </h4>
            <div className="space-y-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#3B071E]">
                  <Check className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBook(service.title);
              }}
              className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#EC4899] via-[#DB2777] to-[#BE185D] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-102 transition-transform flex items-center justify-center gap-2"
            >
              <span>Book This Signature Glam ✦</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-3.5 px-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-bold text-xs hover:bg-[#D1FAE5] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#059669]" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
