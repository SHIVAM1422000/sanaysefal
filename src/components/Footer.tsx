import React from 'react';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A0A26] text-white py-6 px-4 sm:px-8 relative border-t border-pink-900/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-100 font-medium">
        <p>© 2025 Sanya & Shifa Makeup Academy. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <span className="text-[#FF4081]">♥</span> for beauty & dreams.
        </p>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-gradient-to-r from-[#EB4083] to-[#D82D6A] hover:from-[#D82D6A] hover:to-[#B31952] text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-white/20"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
