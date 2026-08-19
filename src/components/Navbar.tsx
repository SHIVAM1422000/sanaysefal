import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      {/* Top Rose Berry Announcement Ribbon */}
      <div id="top-announcement-bar" className="bg-[#941B48] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 flex items-center justify-between font-normal tracking-wide">
        <div className="flex items-center gap-1.5">
          <span>✨ Unleash Your Beauty. Learn The Art. Build Your Dream Career.</span>
        </div>
        <div className="hidden sm:flex items-center gap-2.5 text-[11px]">
          <span className="text-pink-100 font-normal">Follow Us:</span>
          {/* Instagram / Social Outline Icons matching screenshot */}
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-4 h-4 rounded-full border border-white/80 flex items-center justify-center text-[9px] hover:bg-white hover:text-[#941B48] transition-all"
            aria-label="Instagram"
          >
            <span>📷</span>
          </a>
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-4 h-4 rounded-full border border-white/80 flex items-center justify-center text-[9px] hover:bg-white hover:text-[#941B48] transition-all"
            aria-label="WhatsApp"
          >
            <span>💬</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav id="main-navigation-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* Brand Logo with Ornamental S&S Emblem */}
        <a 
          href="#hero" 
          id="nav-brand-logo" 
          className="flex items-center gap-2 group cursor-pointer"
        >
          {/* Ornamental S&S Crest */}
          <div className="w-10 h-10 rounded-full border-1.5 border-[#D82D6A] flex items-center justify-center text-[#D82D6A] font-editorial text-sm font-bold bg-[#FFF5F8] shadow-xs">
            S&S
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-lg sm:text-xl font-bold tracking-wider text-[#8E1B45] leading-tight">
              SANYA & SHIFA
            </span>
            <span className="text-[9px] tracking-[0.25em] font-semibold text-[#D82D6A] uppercase">
              MAKEUP ACADEMY
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.id)}
              id={`nav-link-${link.name.toLowerCase()}`}
              className={`relative py-1 text-sm transition-colors ${
                activeSection === link.id
                  ? 'text-[#D82D6A] font-semibold'
                  : 'text-gray-800 hover:text-[#D82D6A] font-normal'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D82D6A] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Right Phone Call Pill Button */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND_INFO.phone}`}
            id="nav-phone-button"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#D82D6A] to-[#B31952] hover:from-[#EB4083] hover:to-[#9E1447] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:scale-102 active:scale-98 transition-all flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            <span>9990677769</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-full text-[#8E1B45] hover:bg-[#FFF0F5] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-fullscreen-menu"
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 animate-fadeIn lg:hidden overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-pink-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border border-[#D82D6A] flex items-center justify-center text-[#D82D6A] font-editorial text-sm font-bold bg-pink-50">
                S&S
              </div>
              <span className="font-editorial text-lg font-bold text-[#8E1B45]">
                SANYA & SHIFA
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-[#FFF0F5] text-[#8E1B45]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-8 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-xl font-editorial font-semibold text-gray-800 hover:text-[#D82D6A] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-pink-100">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#D82D6A] to-[#B31952] text-white font-bold flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 fill-white" /> Call 9990677769
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#FFF0F5] border border-[#D82D6A] text-[#D82D6A] font-bold flex items-center justify-center gap-1.5 text-sm"
            >
              Book Your Glow ✨
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
