import React from 'react';
import { Phone, MessageCircle, Instagram, MapPin, ExternalLink, Heart, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FFFDFB] relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Card: Contact Information */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#FFF0F5] to-[#FCE7F3] rounded-3xl p-6 sm:p-7 border border-pink-200 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D82D6A] font-bold">
                LET'S CONNECT
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                We'd Love To Hear You!
              </h2>

              <div className="space-y-4 pt-6">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-[#D82D6A] flex items-center justify-center shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a href={`tel:${BRAND_INFO.phone}`} className="font-bold text-gray-900 hover:text-[#D82D6A] text-base">
                      {BRAND_INFO.phone}
                    </a>
                    <p className="text-xs text-gray-500">• Call / WhatsApp</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-[#D82D6A] flex items-center justify-center shadow-xs">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-[#D82D6A] text-base">
                      @sanyashifa
                    </a>
                    <p className="text-xs text-gray-500">• Follow on Instagram</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-[#D82D6A] flex items-center justify-center shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      Sanya & Shifa Makeup Academy
                    </p>
                    <p className="text-xs text-gray-500">Green View Apartments, Delhi NCR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Cute Badge */}
            <div className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#EB4083] to-[#D82D6A] text-white text-xs font-bold text-center shadow-sm">
              We are here to make you shine! ✨
            </div>

          </div>

          {/* Middle Card: Google Maps View */}
          <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-pink-200 shadow-sm relative min-h-[300px]">
            <iframe
              title="Sanya & Shifa Makeup Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11488588636!2d77.1000!3d28.6000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Top Map Card Overlay */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-gray-100 max-w-[220px]">
              <p className="text-xs font-bold text-gray-900 leading-tight">Sanya & Shifa Makeup Academy</p>
              <p className="text-[10px] text-gray-500">Beauty salon • Delhi NCR</p>
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#D82D6A] font-semibold underline pt-0.5 inline-block"
              >
                View larger map
              </a>
            </div>
          </div>

          {/* Right Card: Visit Us & Get Directions */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#FFF5F8] to-[#FFF0F5] rounded-3xl p-6 sm:p-7 border border-pink-200 shadow-sm flex flex-col justify-center items-center text-center space-y-4">
            
            <p className="text-xs uppercase tracking-widest text-[#D82D6A] font-bold flex items-center gap-1">
              <span>♥</span> VISIT US
            </p>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-gray-900">
              Find Our Studio <span className="text-[#D82D6A] font-script text-3xl">♡</span>
            </h2>

            <div className="space-y-1">
              <p className="text-sm font-bold text-gray-900 flex items-center justify-center gap-1">
                <MapPin className="w-4 h-4 text-[#D82D6A]" />
                <span>Sanya & Shifa Makeup Academy</span>
              </p>
              <p className="text-xs text-gray-500">Delhi NCR, India</p>
            </div>

            <a
              href={BRAND_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="get-directions-btn"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#EB4083] to-[#D82D6A] hover:from-[#D82D6A] hover:to-[#B31952] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Directions</span>
            </a>

            <p className="text-[10px] text-gray-500 break-all leading-tight">
              {BRAND_INFO.googleMapsUrl}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
