import React from 'react';

interface ServicesSectionProps {
  onSelectService: (service: any) => void;
  onOpenBooking: (serviceName?: string) => void;
}

const SERVICES_LIST = [
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    icon: (
      <svg className="w-9 h-9 text-[#D82D6A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <path d="M12 3v-1" />
        <path d="M9 2h6" />
      </svg>
    ),
  },
  {
    id: 'engagement-makeup',
    name: 'Engagement Makeup',
    icon: (
      <svg className="w-9 h-9 text-[#D82D6A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: 'party-makeup',
    name: 'Party / Occasion Makeup',
    icon: (
      <svg className="w-9 h-9 text-[#D82D6A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
      </svg>
    ),
  },
  {
    id: 'reception-makeup',
    name: 'Reception Makeup',
    icon: (
      <svg className="w-9 h-9 text-[#D82D6A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 1 0-16 0" />
        <path d="M12 3a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Z" />
      </svg>
    ),
  },
  {
    id: 'hd-makeup',
    name: 'HD Makeup',
    icon: (
      <svg className="w-9 h-9 text-[#D82D6A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="14" x="3" y="5" rx="3" />
        <circle cx="9" cy="12" r="2.5" />
        <path d="M15 9h2" />
        <path d="M15 12h2" />
        <path d="M15 15h2" />
      </svg>
    ),
  },
  {
    id: 'hairstyling',
    name: 'Hairstyling',
    icon: (
      <svg className="w-9 h-9 text-[#D82D6A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3c3 0 4 3 6 3s3-3 6-3 4 3 4 6c0 6-3 12-4 12s-1-4-2-4-1 4-2 4-4-6-4-12c0-3 1-6 4-6Z" />
      </svg>
    ),
  },
  {
    id: 'draping-styling',
    name: 'Draping & Styling',
    icon: (
      <svg className="w-9 h-9 text-[#D82D6A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4c4 2 8 0 12 2s4 6 4 12c0 2-2 2-4 2s-4-4-6-4-4 4-6 4-4-6-4-12c0-2 2-4 4-4Z" />
        <path d="M8 8c2 1 4 1 6 0" />
      </svg>
    ),
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  return (
    <section id="services" className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-[#FFF5F8] relative">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Eyebrow */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#D82D6A] flex items-center justify-center gap-1">
          <span>♥</span> OUR SERVICES
        </p>

        {/* Section Heading with Centered Heart Divider */}
        <div className="relative inline-block my-1.5">
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Beauty Beyond Boundaries
          </h2>
          <div className="flex items-center justify-center gap-3 mt-1.5">
            <span className="h-[1px] w-14 sm:w-20 bg-pink-300" />
            <span className="text-[#D82D6A] text-xs">♥</span>
            <span className="h-[1px] w-14 sm:w-20 bg-pink-300" />
          </div>
        </div>

        {/* 7-Card Horizontal Service Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-3.5 pt-6">
          {SERVICES_LIST.map((service) => (
            <button
              key={service.id}
              onClick={() => onOpenBooking(service.name)}
              id={`service-card-${service.id}`}
              className="bg-white hover:bg-pink-50/40 rounded-2xl p-4 sm:p-4.5 border border-[#FBCFE8] hover:border-[#D82D6A] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer aspect-[1/1.05]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all mb-2.5 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-xs font-bold text-gray-900 group-hover:text-[#D82D6A] transition-colors leading-tight">
                {service.name}
              </h3>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
