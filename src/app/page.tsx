'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuickInfoBar from '@/components/QuickInfoBar';
import AboutSection from '@/components/AboutSection';
import WhatYouWillLearn from '@/components/WhatYouWillLearn';
import CourseJourney from '@/components/CourseJourney';
import TwoWeekProgram from '@/components/TwoWeekProgram';
import ProgramDetails from '@/components/ProgramDetails';
import EligibilitySection from '@/components/EligibilitySection';
import RegistrationSection from '@/components/RegistrationSection';
import ApplicationStatus from '@/components/ApplicationStatus';
import OfficialPosterSection from '@/components/OfficialPosterSection';
import OrganizersSection from '@/components/OrganizersSection';
import VenueSection from '@/components/VenueSection';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'course', 'schedule', 'eligibility', 'apply', 'status', 'faqs', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#11261B] selection:bg-[#F4E500] selection:text-[#004D2A]">
      {/* Premium Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <HeroSection />

      {/* Floating Information Bar */}
      <QuickInfoBar />

      {/* About Section */}
      <AboutSection />

      {/* Curriculum Highlights */}
      <WhatYouWillLearn />

      {/* Visual Roadmap */}
      <CourseJourney />

      {/* Two-Week Syllabus Breakdown */}
      <TwoWeekProgram />

      {/* Deep-Green Program Parameters */}
      <ProgramDetails />

      {/* Eligibility Requirements */}
      <EligibilitySection />

      {/* Registration / Application Portal */}
      <RegistrationSection />

      {/* Application Verification & Progress Tracker */}
      <ApplicationStatus />

      {/* Official Poster Showcase with Zoom */}
      <OfficialPosterSection />

      {/* Institutional Organizers */}
      <OrganizersSection />

      {/* Venue & Directions */}
      <VenueSection />

      {/* Contact Channels */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
