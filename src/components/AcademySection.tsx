import React from 'react';
import { Sparkles, Heart, Clock, GraduationCap, ArrowRight } from 'lucide-react';

interface AcademySectionProps {
  onSelectCourse: (course: any) => void;
  onOpenAcademyModal: (courseName?: string) => void;
}

const COURSES_DATA = [
  {
    id: 'pro-course',
    title: 'Professional Makeup Course',
    duration: '1 - 2 Months',
    level: 'Beginner to Pro',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Professional Makeup Course Student Model',
  },
  {
    id: 'bridal-course',
    title: 'Bridal Makeup Course',
    duration: '15 - 30 Days',
    level: 'Master Bridal Looks',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Bridal Makeup Masterclass Model',
  },
  {
    id: 'self-makeup',
    title: 'Self Makeup Course',
    duration: '5 - 7 Days',
    level: 'For Personal Grooming',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Self Makeup Personal Grooming Model',
  },
  {
    id: 'advanced-training',
    title: 'Advanced Makeup Training',
    duration: '2 - 3 Months',
    level: 'Advance Your Skills',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Advanced High Fashion Makeup Student',
  },
  {
    id: 'one-to-one',
    title: 'Customized 1 to 1 Classes',
    duration: 'Flexible Timing',
    level: 'Personal Guidance',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop',
    imageAlt: 'Customized 1 on 1 Private Coaching',
  },
];

export const AcademySection: React.FC<AcademySectionProps> = ({ onSelectCourse, onOpenAcademyModal }) => {
  return (
    <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFDFB] relative">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Eyebrow */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#D82D6A]">
          OUR COURSES
        </p>

        {/* Section Heading with Centered Heart Divider */}
        <div className="relative inline-block my-2">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Learn. Practice. Excel.
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-[1px] w-16 sm:w-24 bg-pink-300" />
            <span className="text-[#D82D6A] text-xs">♥</span>
            <span className="h-[1px] w-16 sm:w-24 bg-pink-300" />
          </div>
        </div>

        {/* 5-Card Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-pink-200 hover:border-[#D82D6A] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group text-center"
            >
              {/* Course Top Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-pink-50 relative">
                <img
                  src={course.image}
                  alt={course.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Course Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-editorial text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    {course.title}
                  </h3>
                  <div className="flex justify-center pt-1 text-[#D82D6A] text-xs">
                    ♥
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-1.5 text-xs text-gray-600">
                  <div className="flex items-center justify-center gap-1.5 text-gray-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D82D6A]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-gray-700 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-[#D82D6A]" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Enquire Now Button */}
                <button
                  onClick={() => onOpenAcademyModal(course.title)}
                  id={`course-enquire-${course.id}`}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#EB4083] to-[#D82D6A] hover:from-[#D82D6A] hover:to-[#B31952] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  Enquire Now
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
