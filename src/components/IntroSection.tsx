import React from 'react';
import { Sparkles, Heart, CheckCircle2, Award, Star } from 'lucide-react';

interface IntroSectionProps {
  onOpenBooking: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDFB] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FCE7F3]/40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#FDF2F8]/60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 4-Photo Rich Indian Brides & Glam Girls Collage */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg">
              
              {/* Main Indian Bride Portrait Frame */}
              <div className="polaroid-frame rounded-3xl z-10 relative rotate-[-2deg] shadow-xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#FBCFE8]">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
                    alt="Sanya & Shifa Royal Indian Bride"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B071E]/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-medium border border-pink-300/30">
                    👰‍♀️ Traditional Indian Bridal Couture
                  </div>
                </div>
                <div className="pt-2.5 flex items-center justify-between px-2">
                  <p className="font-script text-base sm:text-lg text-[#831843] font-bold">
                    real bride • pure magic glow ♡
                  </p>
                  <span className="text-xs font-bold text-[#DB2777]">✦ 4K HD</span>
                </div>
              </div>

              {/* Top Right: Pastel Sagan & Mehndi Bride Mini Frame */}
              <div className="absolute -top-10 -right-4 sm:-right-8 w-44 sm:w-52 polaroid-frame rounded-2xl rotate-[6deg] z-20 shadow-2xl hidden sm:block">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#FCE7F3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop"
                    alt="Pastel Mehndi & Sagan Indian Bride"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-[#EC4899] to-[#DB2777] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                    Mehndi & Sagan ♡
                  </span>
                </div>
                <p className="text-[11px] font-editorial font-bold text-center text-[#DB2777] pt-1">
                  Dewy Floral Beauty ✦
                </p>
              </div>

              {/* Bottom Left: Reception Glam & Academy Practice Mini Frame */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 w-44 sm:w-48 polaroid-frame rounded-2xl rotate-[-7deg] z-20 shadow-xl hidden sm:block">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#FCE7F3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop"
                    alt="Reception Party Glam Girl"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    Party & Sangeet ✨
                  </span>
                </div>
                <p className="text-[10px] font-script text-center text-[#831843] font-bold pt-1">
                  cocktail queen ♡
                </p>
              </div>

              {/* Center Floating Love Badge */}
              <div className="absolute top-1/2 -left-6 z-30 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#F472B6]/40 shadow-lg hidden md:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#EC4899] to-[#F472B6] flex items-center justify-center text-white">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#831843]">Crafted with Love</p>
                  <p className="text-[10px] text-[#9D174D]">Personalized For You</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Editorial Typography & Story */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            {/* Small Cute Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDF2F8] text-[#DB2777] text-xs font-bold uppercase tracking-widest border border-[#FBCFE8]">
              <span>HEY, BEAUTY! ♡</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B071E] leading-tight">
              Your beauty era <br />
              <span className="font-script text-[#DB2777] text-4xl sm:text-5xl md:text-6xl font-bold">
                starts right here.
              </span>
            </h2>

            {/* Brand Manifesto Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#4A0E2E]/90 leading-relaxed">
              <p>
                At <strong>Sanya & Shifa Makeup Academy</strong>, beauty is more than makeup — it's confidence, creativity, and feeling like the most radiant, authentic version of yourself on your special day.
              </p>
              <p>
                Whether you're an Indian bride seeking that timeless royal bridal glow or an aspiring makeup artist looking to master professional artistry on live models, we craft every look with luxury precision and genuine care.
              </p>
            </div>

            {/* Handwritten Highlight Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF0F5] to-[#FCE7F3] border border-[#F472B6]/30">
              <p className="font-script text-2xl sm:text-3xl text-[#BE185D] font-bold">
                "because you deserve to feel GORGEOUS."
              </p>
              <p className="text-xs uppercase tracking-wider text-[#831843] font-bold pt-1">
                — Sanya & Shifa Philosophy ♡
              </p>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#831843]">
                <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0" />
                <span>Customized to Your Face & Outfit</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#831843]">
                <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0" />
                <span>International Luxury Vanity Kits</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#831843]">
                <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0" />
                <span>100% Practical Model Training</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#831843]">
                <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0" />
                <span>Delhi NCR Studio & Academy</span>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#DB2777] hover:text-[#9D174D] underline underline-offset-4 decoration-2 decoration-[#F472B6] hover:decoration-[#DB2777] transition-all cursor-pointer"
              >
                <span>Plan Your Look With Sanya & Shifa</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
