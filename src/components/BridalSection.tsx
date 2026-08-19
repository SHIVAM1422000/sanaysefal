import React from 'react';
import { Sparkles, Heart, Check, ArrowRight, ShieldCheck, Camera, Sparkle } from 'lucide-react';
import { BRIDAL_PILLARS } from '../data/mockData';

interface BridalSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="bridal" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#3B071E] text-white relative overflow-hidden">
      {/* Decorative Glow Elements & Sparkles */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#EC4899]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#BE185D]/20 blur-3xl pointer-events-none" />
      
      {/* Sparkle Icons */}
      <div className="absolute top-12 right-1/6 text-[#F472B6] text-3xl animate-sparkle pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-20 left-12 text-[#FBCFE8] text-2xl animate-sparkle pointer-events-none">
        ♡
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bridal Manifesto & Feature Pills */}
          <div className="lg:col-span-6 space-y-7 z-10">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A0E2E] text-[#FBCFE8] text-xs font-bold uppercase tracking-widest border border-[#F472B6]/40 shadow-inner">
              <span className="text-[#F472B6]">♡</span>
              <span>FOR THE BRIDE-TO-BE</span>
              <span className="text-[#F472B6]">♡</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Your Main <br />
                <span className="font-script text-[#F472B6] text-5xl sm:text-6xl md:text-7xl font-bold block sm:inline">
                  Character Moment.
                </span>
              </h2>
              <div className="flex items-center gap-2 pt-1 text-[#FBCFE8] font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#F472B6]" />
                <span>BRIDE ERA ✦</span>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-pink-100/90 leading-relaxed max-w-xl">
              Your wedding day is your biggest beauty moment. Let's create a look that feels like you — only more confident, more radiant and completely unforgettable.
            </p>

            {/* Feature Pills Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {BRIDAL_PILLARS.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#4A0E2E]/80 border border-[#F472B6]/30 backdrop-blur-sm space-y-1 hover:border-[#F472B6] transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FBCFE8]">
                    <span className="text-[#EC4899]">{pillar.icon}</span>
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-[11px] text-pink-200/80 leading-snug">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="pt-3">
              <button
                onClick={() => onOpenBooking('Bridal Glam Package')}
                id="bridal-section-book-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#EC4899] via-[#DB2777] to-[#BE185D] text-white font-bold text-sm sm:text-base shadow-[0_12px_30px_rgba(236,72,153,0.35)] hover:shadow-[0_16px_36px_rgba(236,72,153,0.5)] hover:scale-103 active:scale-98 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>LET'S CREATE YOUR BRIDAL LOOK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Large Close-Up Bridal Portrait with Luxury Badges */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white text-[#831843] px-3.5 py-2 rounded-2xl shadow-xl border border-[#FBCFE8] rotate-[-5deg]">
                <p className="text-[10px] font-bold uppercase text-[#DB2777]">BRIDE ERA APPROVED</p>
                <p className="text-xs font-editorial font-bold">14+ Hours Cry-Proof ♡</p>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 bg-gradient-to-r from-[#DB2777] to-[#831843] text-white px-4 py-2 rounded-2xl shadow-xl border border-[#F472B6]/40 rotate-[4deg] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span className="text-xs font-bold">4K Camera Ready ✦</span>
              </div>

              {/* Main Photo Card */}
              <div className="rounded-3xl p-3 bg-gradient-to-b from-[#F472B6]/40 to-[#DB2777]/20 border border-[#F472B6]/40 backdrop-blur-md shadow-2xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-[#2A0414]">
                  <img
                    src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
                    alt="Sanya & Shifa Bridal Artistry"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0414]/80 via-transparent to-transparent" />
                  
                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-pink-200 border border-pink-400/30">
                      SANYA & SHIFA BRIDES
                    </span>
                    <span className="font-script text-xl text-[#F472B6]">
                      pure magic ✦
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
