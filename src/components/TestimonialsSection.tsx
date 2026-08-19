import React from 'react';
import { Star, Heart, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const REVIEWS = [
    {
      id: 1,
      name: 'Neha Sharma',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      review: 'The best decision I made! My bridal look was beyond perfect. Thank you Sanya & Shifa for making me feel like a queen!',
    },
    {
      id: 2,
      name: 'Komal Verma',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      review: 'Their makeup techniques are on point and so natural. Highly recommended for brides-to-be!',
    },
    {
      id: 3,
      name: 'Riya Khan',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      review: "Best academy with the most supportive teachers. I learned so much and now I'm a professional makeup artist!",
    },
    {
      id: 4,
      name: 'Pooja Singh',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
      review: 'Amazing experience and such a friendly environment. They truly care about your growth!',
    },
  ];

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Heading & Google Reviews Button */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D82D6A]">
              HAPPY CLIENTS
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              What Makes <br />
              <span className="flex items-center gap-1.5">
                Us Special <span className="text-[#D82D6A] font-script text-3xl">♡</span>
              </span>
            </h2>

            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-amber-400 py-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Google Reviews Button */}
            <a
              href={BRAND_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="view-google-reviews-btn"
              className="mt-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#EB4083] to-[#D82D6A] hover:from-[#D82D6A] hover:to-[#B31952] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>View More Reviews on Google</span>
            </a>
          </div>

          {/* Right Column: 4 Review Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#FFFDFB] rounded-2xl p-5 border border-pink-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  {/* Top: Avatar & Stars */}
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-200"
                    />
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    "{review.review}"
                  </p>
                </div>

                {/* Reviewer Name */}
                <p className="text-xs font-bold text-gray-900 pt-2 border-t border-pink-50">
                  - {review.name}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
