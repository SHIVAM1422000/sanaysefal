import React, { useState } from 'react';
import { Sparkles, Heart, ZoomIn, Eye, ArrowLeftRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

interface TransformationGalleryProps {
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenBooking: (lookTitle?: string) => void;
}

export const TransformationGallery: React.FC<TransformationGalleryProps> = ({ onOpenLightbox, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [beforeAfterSlider, setBeforeAfterSlider] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'ALL ♡' },
    { id: 'bridal', label: 'BRIDAL ✦' },
    { id: 'engagement', label: 'GLAM ♡' },
    { id: 'hair', label: 'HAIR ✦' },
    { id: 'before-after', label: 'BEFORE & AFTER ✧' },
    { id: 'student', label: 'STUDENTS ♡' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : activeCategory === 'before-after'
    ? [] // We handle the interactive before & after showcase in a dedicated panel
    : activeCategory === 'engagement'
    ? PORTFOLIO_ITEMS.filter(i => i.category === 'engagement' || i.category === 'reception' || i.category === 'party')
    : PORTFOLIO_ITEMS.filter(i => i.category === activeCategory);

  // Playful captions pool for polaroid vibe
  const cuteCaptions = [
    'soft glam ♡',
    'bridal glow ✦',
    'main character energy ♡',
    'she understood the assignment ✦',
    'viral skin era ♡',
    'ethereal beauty ✦',
    'flawless blend ♡',
    'academy proud moment ✦'
  ];

  return (
    <section id="looks" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDFB] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDF2F8] text-[#DB2777] text-xs font-bold uppercase tracking-widest border border-[#FBCFE8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PINTEREST MOODBOARD</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B071E] tracking-tight">
            THE GLOW-UP FILES <span className="text-[#EC4899]">♡</span>
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#DB2777] font-bold">
            Swipe. Save. Fall in love.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`filter-tab-${cat.id}`}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#EC4899] to-[#BE185D] text-white shadow-md shadow-pink-400/30 scale-105'
                  : 'bg-[#FFF0F5] text-[#831843] hover:bg-[#FCE7F3] border border-[#FBCFE8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Before & After Slider Showcase (shown when selected or featured on top) */}
        {activeCategory === 'before-after' ? (
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#FBCFE8] shadow-xl space-y-6 mb-12">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DB2777]">
                INTERACTIVE TRANSFORMATION SLIDER
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#831843]">
                Skin-Focused Artistry • Zero Filter Illusion
              </h3>
              <p className="text-xs text-[#9D174D]">
                Drag the slider left and right to witness the flawless HD skin prep & micro-blending
              </p>
            </div>

            {/* Before After Image Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none shadow-inner border border-[#FBCFE8]">
              {/* After Image (Full Glam) */}
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop"
                alt="After Makeup Glam"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#DB2777] to-[#BE185D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                AFTER: Signature Bridal HD Glam ♡
              </div>

              {/* Before Image with Clip Path */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${beforeAfterSlider}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  alt="Before Makeup Prep"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  BEFORE: Bare Skin Prep ✦
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${beforeAfterSlider}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-tr from-[#EC4899] to-[#BE185D] text-white flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Range Input Trigger */}
              <input
                type="range"
                min="0"
                max="100"
                value={beforeAfterSlider}
                onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
                aria-label="Before and after transformation slider"
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#831843] pt-2">
              <span className="font-semibold">← Drag left for Bare Skin</span>
              <button
                onClick={() => onOpenBooking('Signature HD Transformation')}
                className="font-bold text-[#DB2777] underline"
              >
                Book This Transformation →
              </button>
              <span className="font-semibold">Drag right for Full Glam →</span>
            </div>
          </div>
        ) : (
          /* Pinterest Style Masonry Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => {
              const caption = cuteCaptions[idx % cuteCaptions.length];
              const isLarge = idx === 0 || idx === 3;

              return (
                <div
                  key={item.id}
                  id={`gallery-item-${item.id}`}
                  onClick={() => onOpenLightbox(item)}
                  className={`polaroid-frame rounded-2xl cursor-pointer group transition-all duration-300 ${
                    isLarge ? 'sm:row-span-2' : ''
                  }`}
                >
                  {/* Photo Container */}
                  <div className={`relative overflow-hidden rounded-xl bg-[#FCE7F3] ${isLarge ? 'aspect-[3/4]' : 'aspect-square'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-[#3B071E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#DB2777] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-[#831843] border border-[#FBCFE8]">
                      {item.categoryLabel}
                    </div>
                  </div>

                  {/* Polaroid Handwritten Caption */}
                  <div className="pt-2.5 px-1 flex items-center justify-between">
                    <div>
                      <p className="font-script text-base text-[#831843] font-bold">
                        {caption}
                      </p>
                      <p className="text-[10px] text-[#9D174D] font-medium truncate max-w-[150px]">
                        {item.title}
                      </p>
                    </div>
                    <span className="text-[#EC4899] text-xs font-bold">♡</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Gallery Bottom Note & Consultation CTA */}
        <div className="mt-12 text-center">
          <p className="font-editorial text-lg text-[#831843] font-semibold mb-3">
            Want a customized look inspired by any of these styles?
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 rounded-full bg-[#FFF0F5] hover:bg-[#EC4899] text-[#831843] hover:text-white font-bold text-xs sm:text-sm border border-[#FBCFE8] hover:border-[#EC4899] transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Book Consultation & Show Reference</span>
            <span>✦</span>
          </button>
        </div>

      </div>
    </section>
  );
};
