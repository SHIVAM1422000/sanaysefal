import React, { useState, useEffect } from 'react';
import { X, Sparkles, Heart, Send, MessageCircle, CheckCircle2, Calendar, Phone, User, Mail, FileText } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onShowToast: (msg: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Bridal Glam',
  onShowToast
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    date: '',
    location: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onShowToast('Please provide your name and contact number ♡');
      return;
    }
    setSubmitted(true);
    onShowToast('Booking request received! Sanya & Shifa will connect with you shortly ♡');
  };

  const handleWhatsAppSend = () => {
    const text = `Hey Sanya & Shifa! ♡%0A%0AI'd like to book / enquire:%0A%0A• Name: ${formData.name || 'Not provided'}%0A• Phone: ${formData.phone || 'Not provided'}%0A• Service / Course: ${formData.service}%0A• Date: ${formData.date || 'Flexible'}%0A• Venue / Location: ${formData.location || 'Delhi NCR'}%0A• Notes: ${formData.notes || 'Looking forward to details!'}`;
    window.open(`https://wa.me/919990677769?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFFDFB] rounded-3xl border border-[#FBCFE8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#FFF0F5] to-[#FDF2F8] border-b border-[#FBCFE8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#EC4899] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#3B071E]">
                Book Your Glam Session ♡
              </h3>
              <p className="text-[11px] text-[#9D174D]">
                Sanya & Shifa Makeup Academy • Delhi NCR
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-[#831843] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-[#065F46]">
                You're in our Glam Queue! ♡
              </h4>
              <p className="text-xs text-[#047857] max-w-sm mx-auto leading-relaxed">
                Thank you <strong>{formData.name}</strong>. Sanya & Shifa or their senior coordinator will reach out to you directly at <strong>{formData.phone}</strong> with date confirmation and consultation slot.
              </p>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 rounded-full bg-[#059669] text-white font-bold text-xs shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send details to WhatsApp for Instant Confirmation</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-[#831843] font-semibold underline pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#831843] flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#EC4899]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aanya Malhotra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDFB] border border-[#FBCFE8] focus:border-[#DB2777] outline-none text-xs text-[#3B071E]"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#831843] flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#EC4899]" />
                    <span>WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9990677769"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDFB] border border-[#FBCFE8] focus:border-[#DB2777] outline-none text-xs text-[#3B071E]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#831843] flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#EC4899]" />
                    <span>Email (Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="aanya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDFB] border border-[#FBCFE8] focus:border-[#DB2777] outline-none text-xs text-[#3B071E]"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#831843] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
                  <span>Select Service / Academy Course *</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDFB] border border-[#FBCFE8] focus:border-[#DB2777] outline-none text-xs text-[#3B071E]"
                >
                  <optgroup label="Bridal & Beauty Services">
                    <option value="Bridal Glam">Bridal Glam (Signature Wedding Look)</option>
                    <option value="Engagement Glam">Engagement / Sagan Soft Glam</option>
                    <option value="Reception Glam">Reception / Sangeet High Glam</option>
                    <option value="Party Glam">Party & Occasion Glam</option>
                    <option value="Hair & Draping">Hair Styling & Dupatta Draping</option>
                  </optgroup>
                  <optgroup label="Academy Courses">
                    <option value="Professional Makeup Course">Professional Makeup Course (Beginner to Pro)</option>
                    <option value="Advanced Makeup Artistry">Advanced Makeup Artistry Masterclass</option>
                    <option value="Bridal Makeup Mastery">Bridal Makeup Mastery Specialization</option>
                    <option value="Personal Makeup Training">Personal Self-Grooming Training</option>
                  </optgroup>
                </select>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#831843] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#EC4899]" />
                    <span>Event / Batch Date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDFB] border border-[#FBCFE8] focus:border-[#DB2777] outline-none text-xs text-[#3B071E]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#831843] flex items-center gap-1">
                    <span>Venue / Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi NCR / Venue Name"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDFB] border border-[#FBCFE8] focus:border-[#DB2777] outline-none text-xs text-[#3B071E]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#831843] flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#EC4899]" />
                  <span>Special Requests / Outfit Color</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Wearing pastel pink lehenga, interested in soft dewy skin..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-2xl bg-[#FFFDFB] border border-[#FBCFE8] focus:border-[#DB2777] outline-none text-xs text-[#3B071E] resize-none"
                />
              </div>

              {/* Submit / WhatsApp Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EC4899] via-[#DB2777] to-[#BE185D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Booking Request ✦</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-bold text-xs hover:bg-[#D1FAE5] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#059669]" />
                  <span>Book Instantly on WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
