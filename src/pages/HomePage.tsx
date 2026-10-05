import React, { useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { CapabilityStrip } from '../components/hero/CapabilityStrip';
import { SelectedWork } from '../components/projects/SelectedWork';
import { Expertise } from '../components/expertise/Expertise';
import { TechnologySection } from '../components/technology/TechnologySection';
import { HowWeWork } from '../components/process/HowWeWork';
import { EngineeringPhilosophy } from '../components/philosophy/EngineeringPhilosophy';
import { AboutBti } from '../components/about/AboutBti';
import { ContactSection } from '../components/contact/ContactSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    // If user arrived with a hash, scroll smoothly
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <CapabilityStrip />
      <SelectedWork />
      <Expertise />
      <TechnologySection />
      <HowWeWork />
      <EngineeringPhilosophy />
      <AboutBti />
      <ContactSection />
    </main>
  );
};
