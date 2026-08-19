import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAcademyModal: (courseName?: string) => void;
}

const HERO_SLIDES = [
  {
    id: 'slide-1',
    scriptText: 'Where Beauty ♡',
    mainHeading: 'MEETS ARTISTRY',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Sanya & Shifa Signature Royal Indian Bride in Kundan Jewellery & Pink Dupatta',
  },
  {
    id: 'slide-2',
    scriptText: 'Where Glamour ♡',
    mainHeading: 'CREATES DREAMS',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Sanya & Shifa Royal Gold Bridal Masterpiece',
  },
  {
    id: 'slide-3',
    scriptText: 'Where Passion ♡',
    mainHeading: 'BECOMES CAREER',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Sanya & Shifa Pastel Sagan & Engagement Bride',
  },
  {
    id: 'slide-4',
    scriptText: 'Where Perfection ♡',
    mainHeading: 'SHINES FOREVER',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Sanya & Shifa Reception Glam Cut-Crease',
  },
  {
    id: 'slide-5',
    scriptText: 'Where Artistry ♡',
    mainHeading: 'INSPIRES GIRLS',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Sanya & Shifa Ethereal Glass Skin Bride',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAcademyModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const active = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-gradient-to-r from-[#FFF0F6] via-[#FFDEEB] to-[#FCE2EE] min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center">
      
      {/* Soft Ambient Floating Rose Petals & Fairy Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-12 -left-12 w-96 h-96 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#FFF5F8]/70 blur-2xl" />
        <div className="absolute -bottom-10 right-1/3 w-96 h-96 rounded-full bg-pink-300/40 blur-3xl" />
        
        <span className="absolute top-16 left-1/3 text-pink-400 text-lg opacity-75 animate-pulse">✦</span>
        <span className="absolute top-1/4 right-1/3 text-pink-400 text-xl opacity-70 animate-pulse">✧</span>
      </div>

      {/* Panoramic Indian Bride Portrait - High Contrast, Vivid, Full Color & Crisp */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] z-0 overflow-hidden select-none">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-full object-cover object-center lg:object-top"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Subtle soft gradient fade ONLY on the left edge so text is readable while image stays 100% vibrant */}
            <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-[#FFF0F6] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FFF0F6]/40 to-transparent pointer-events-none lg:hidden" />
          </div>
        ))}
      </div>

      {/* Floating Sticky Quick Action Cards (Right Edge Sidebar) */}
      <div className="fixed right-2.5 top-1/3 z-40 hidden xl:flex flex-col gap-2.5">
        {/* WhatsApp Float */}
        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-green-200 hover:scale-105 transition-all flex flex-col items-center justify-center text-center w-22 group"
        >
          <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold text-gray-800 pt-1 leading-tight">
            Chat on <br /><span className="text-[#25D366]">WhatsApp</span>
          </span>
        </a>

        {/* Instagram Float */}
        <a
          href={BRAND_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-pink-200 hover:scale-105 transition-all flex flex-col items-center justify-center text-center w-22 group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-xs">
            <Instagram className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-gray-800 pt-1 leading-tight">
            Follow on <br /><span className="text-[#DD2A7B]">Instagram</span>
          </span>
        </a>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        id="hero-prev-arrow"
        aria-label="Previous slide"
        className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#D82D6A] hover:bg-[#B31952] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        id="hero-next-arrow"
        aria-label="Next slide"
        className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#D82D6A] hover:bg-[#B31952] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 py-10 lg:py-14 relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left Column: Headlines & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 sm:space-y-3.5">
          
          {/* Cursive Handwritten Pink Script Line */}
          <p className="font-script text-4xl sm:text-5xl md:text-6xl text-[#E83E8C] font-normal tracking-wide drop-shadow-xs">
            {active.scriptText}
          </p>

          {/* Bold High-Fashion Serif Headline */}
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-wider text-black leading-none">
            {active.mainHeading}
          </h1>

          {/* Pink Brush Stroke Banner Ribbon */}
          <div className="inline-block bg-gradient-to-r from-[#E0357A] via-[#D82D6A] to-[#C2185B] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-2xl shadow-md my-1 transform -rotate-1 hover:rotate-0 transition-transform">
            <p className="font-editorial text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-center leading-tight">
              SANYA & SHIFA <br />
              <span className="text-[11px] sm:text-xs font-medium tracking-[0.25em] text-pink-100">MAKEUP ACADEMY</span>
            </p>
          </div>

          {/* Category Bullets with Icons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#8B1E43] pt-1">
            <span className="flex items-center gap-1.5">
              <span>💄</span> BRIDAL MAKEUP
            </span>
            <span className="text-[#D82D6A]">•</span>
            <span className="flex items-center gap-1.5">
              <span>🎓</span> PROFESSIONAL TRAINING
            </span>
            <span className="text-[#D82D6A]">•</span>
            <span className="flex items-center gap-1.5">
              <span>💄</span> SELF MAKEUP
            </span>
            <span className="text-[#D82D6A]">•</span>
            <span className="flex items-center gap-1.5">
              <span>💇‍♀️</span> HAIR & STYLE
            </span>
          </div>

          {/* Dual Action Rounded Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onOpenBooking('Bridal & Beauty Glam')}
              id="hero-book-glow-btn"
              className="px-7 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#EB4083] to-[#C2185B] hover:from-[#D82D6A] hover:to-[#A31548] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book Your Glow</span>
              <span>✨</span>
            </button>

            <a
              href="#courses"
              onClick={() => onOpenAcademyModal()}
              id="hero-explore-courses-btn"
              className="px-7 sm:px-8 py-3 rounded-full bg-white hover:bg-pink-50 text-[#D82D6A] border-2 border-[#D82D6A] text-xs sm:text-sm font-bold shadow-xs hover:scale-102 active:scale-98 transition-all cursor-pointer inline-block"
            >
              Explore Courses
            </a>
          </div>

          {/* Slide Pagination Dots (Directly Below Buttons) */}
          <div className="flex items-center justify-center lg:justify-start gap-2 pt-3">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide ? 'w-8 bg-[#D82D6A]' : 'w-2.5 bg-pink-300 hover:bg-pink-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Floating Instagram Badge on Bottom Right of Bride */}
      <div className="absolute bottom-4 right-6 sm:right-12 z-20 hidden md:block">
        <a
          href={BRAND_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl border border-pink-200/80 flex items-center gap-2.5 hover:scale-105 transition-all text-xs"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-xs">
            <Instagram className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-gray-500 font-medium leading-none">Follow our journey</p>
            <p className="font-bold text-[#D82D6A] text-xs">@sanyashifa</p>
          </div>
        </a>
      </div>

    </section>
  );
};
