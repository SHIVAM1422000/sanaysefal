import React from 'react';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface InstagramSectionProps {
  onOpenLightbox?: (index: number) => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ onOpenLightbox }) => {
  const POSTS = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
      alt: 'Sanya & Shifa Indian Bride Portrait',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
      alt: 'Traditional Red Kundan Indian Bride',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
      alt: 'Macro Crystal Eye Artistry',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop',
      alt: 'Luxury Makeup Vanity & Brushes',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop',
      alt: 'Soft Pink Dewy Eye Makeup',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop',
      alt: 'Academy Student Live Practical Training',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
      alt: 'Glamorous Bridal Cut Crease',
    },
  ];

  return (
    <section id="gallery" className="py-14 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
              FOLLOW OUR WORK
            </p>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-1.5">
              <span>@sanyashifa</span>
              <span className="text-[#D82D6A] font-script text-3xl">♡</span>
            </h2>
          </div>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-btn"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EB4083] to-[#D82D6A] hover:from-[#D82D6A] hover:to-[#B31952] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center gap-2"
          >
            <span>Follow Us on Instagram</span>
          </a>
        </div>

        {/* 7-Photo Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 sm:gap-3">
          {POSTS.map((post, idx) => (
            <a
              key={post.id}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-xl overflow-hidden bg-pink-100 relative group cursor-pointer shadow-xs hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
