import React, { useEffect } from 'react';
import { Sparkles, Heart, CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-6 right-4 sm:right-6 z-50 max-w-sm w-full bg-white/95 backdrop-blur-md rounded-2xl border border-[#F472B6] p-4 shadow-[0_15px_35px_rgba(219,39,119,0.25)] flex items-start gap-3 animate-fadeIn">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#EC4899] to-[#DB2777] text-white flex items-center justify-center shrink-0">
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="flex-1 text-xs text-[#3B071E] font-medium leading-snug">
        {message}
      </div>

      <button
        onClick={onClose}
        className="text-[#9D174D] hover:text-[#3B071E] p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
