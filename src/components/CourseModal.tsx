import React from 'react';
import { X, Sparkles, Heart, Check, BookOpen, Award, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { AcademyCourse } from '../types';
import { BRAND_INFO } from '../data/mockData';

interface CourseModalProps {
  course: AcademyCourse | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  const handleWhatsAppEnquiry = () => {
    const text = `Hey Sanya & Shifa Academy! ♡ I would like to know the next batch dates, fee structure, and seat availability for the *${course.title}*.`;
    window.open(`https://wa.me/919990677769?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFFDFB] rounded-3xl border border-[#D8B4FE] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header with Course Badge & Image Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#581C87] to-[#3B071E] text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-lg">
            <span className="px-3 py-1 rounded-full bg-[#FAF5FF] text-[#7E22CE] text-xs font-bold inline-block">
              {course.badge} • {course.level}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              {course.title}
            </h3>
            <p className="font-script text-lg text-pink-200">
              {course.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E22CE]">
              COURSE OVERVIEW ✦
            </h4>
            <p className="text-xs sm:text-sm text-[#4A0E2E]/90 leading-relaxed">
              {course.overview}
            </p>
          </div>

          {/* Practical Training Spotlight */}
          <div className="p-4 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#7E22CE]">
              <Users className="w-4 h-4 text-[#9333EA]" />
              <span>HANDS-ON PRACTICAL METHODOLOGY</span>
            </div>
            <p className="text-xs text-[#3B071E] leading-relaxed">
              {course.practicalTraining}
            </p>
          </div>

          {/* Full Curriculum Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7E22CE]">
              DETAILED SYLLABUS MODULES ♡
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.curriculum.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-[#E9D5FF] flex items-start gap-2 text-xs text-[#3B071E] shadow-sm"
                >
                  <Check className="w-3.5 h-3.5 text-[#9333EA] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div className="p-4 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EC4899] text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase text-[#831843]">Official Recognition</p>
              <p className="text-xs font-bold text-[#3B071E]">{course.certification}</p>
            </div>
          </div>

          {/* Enrollment Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#9333EA] via-[#7E22CE] to-[#581C87] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-102 transition-transform flex items-center justify-center gap-2"
            >
              <span>Enquire & Reserve Seat</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppEnquiry}
              className="py-3.5 px-6 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-bold text-xs hover:bg-[#D1FAE5] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#059669]" />
              <span>WhatsApp Admission Desk</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
