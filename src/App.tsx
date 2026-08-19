/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AcademySection } from './components/AcademySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CourseModal } from './components/CourseModal';
import { ServiceModal } from './components/ServiceModal';
import { LightboxModal } from './components/LightboxModal';
import { Toast } from './components/Toast';
import { AcademyCourse, ServiceItem, PortfolioItem } from './types';

export default function App() {
  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string>('Bridal Glam');
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<PortfolioItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedBookingService(serviceName);
    } else {
      setSelectedBookingService('Bridal Glam');
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenAcademyModal = (courseName?: string) => {
    handleOpenBooking(courseName || 'Professional Makeup Course');
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans-ui flex flex-col relative selection:bg-pink-100 selection:text-[#D82D6A]">
      
      {/* 1. Header & Announcement Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections matching exact mockup */}
      <main className="flex-1">
        {/* 2. Hero Section: Where Beauty MEETS ARTISTRY */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onOpenAcademyModal={handleOpenAcademyModal} 
        />

        {/* 3. Services: Beauty Beyond Boundaries (7 Cards) */}
        <ServicesSection 
          onOpenBooking={handleOpenBooking}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 4. Courses: Learn. Practice. Excel. (5 Cards) */}
        <AcademySection 
          onSelectCourse={(course) => setSelectedCourse(course)}
          onOpenAcademyModal={handleOpenAcademyModal}
        />

        {/* 5. Reviews: What Makes Us Special (4 Cards + Google Reviews) */}
        <TestimonialsSection />

        {/* 6. Why Us: More Than Just Makeup (Maroon Banner 6 Pillars) */}
        <WhyChooseUs />

        {/* 7. Follow Our Work: @sanyashifa (7 Photo Grid) */}
        <InstagramSection 
          onOpenLightbox={(idx) => {}}
        />

        {/* 8. Let's Connect: Contact Info + Map + Visit Us */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedBookingService}
        onShowToast={handleShowToast}
      />

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(courseTitle) => {
          setSelectedCourse(null);
          handleOpenBooking(courseTitle);
        }}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(serviceTitle) => {
          setSelectedService(null);
          handleOpenBooking(serviceTitle);
        }}
      />

      <LightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
        onBook={(lookTitle) => {
          setSelectedLightboxItem(null);
          handleOpenBooking(lookTitle);
        }}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

    </div>
  );
}
