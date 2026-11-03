import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SoftwareSection } from './components/SoftwareSection';
import { CreativeProcess } from './components/CreativeProcess';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white selection:text-black">
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Cinematic Opening Animation */}
      <Preloader onComplete={() => setIntroFinished(true)} />

      {/* Primary Fixed Navigation */}
      <Navigation />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        {/* Full-Screen Hero */}
        <Hero />

        {/* About Muhammad Bilal */}
        <AboutSection />

        {/* 19 Specialized Services (Graphic Design & Video Editing) */}
        <ServicesSection />

        {/* 6 Software Tools (Photoshop, Illustrator, CorelDRAW, Premiere Pro, After Effects, Canva) */}
        <SoftwareSection />

        {/* 4-Stage Creative Process */}
        <CreativeProcess />
      </main>

      {/* Contact & Editorial Footer */}
      <ContactSection />
    </div>
  );
}
