import React from 'react';
import { Award, Sparkles, Heart, Users, Briefcase, Smile, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const PILLARS = [
    {
      id: 1,
      title: 'Expert Trainers',
      desc: 'Industry experts with real experience',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Premium Products',
      desc: 'We use top quality & skin friendly products',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3h12l2 6H4l2-6Z" />
          <path d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
          <path d="M10 14h4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Hands-on Training',
      desc: 'Practical learning with live models',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m14 12-4 4" />
          <path d="m16 8-8 8" />
          <path d="M3 21l3-3" />
          <path d="m15 5 4 4" />
          <path d="m19 9 2-2a2.828 2.828 0 1 0-4-4l-2 2" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Certification',
      desc: 'Get certified & become a professional',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="18" height="14" x="3" y="5" rx="2" />
          <path d="M7 15h4" />
          <path d="M7 11h8" />
          <path d="M7 7h8" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Placement Support',
      desc: 'Career guidance & job opportunities',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Friendly Environment',
      desc: 'Learn in a positive & comfortable space',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4A0A26] via-[#661036] to-[#7E1544] text-white relative overflow-hidden">
      
      {/* Background Subtle Bridal Portrait on Far Right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop"
          alt="Why Choose Us Background"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A0A26] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-pink-200 font-semibold">
            WHY CHOOSE US?
          </p>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-wide">
              More Than Just Makeup
            </h2>
            <span className="text-[#FF80AB] text-lg">♥</span>
          </div>
        </div>

        {/* 6 Feature Pillars Horizontal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-pink-300/20">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`flex flex-col items-start space-y-2.5 ${idx !== 0 ? 'lg:pl-4' : ''} ${idx >= 2 ? 'pt-4 lg:pt-0' : ''}`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center shadow-xs">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-editorial text-sm sm:text-base font-bold text-white leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-pink-100/85 leading-snug">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
