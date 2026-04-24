"use client";

import React from 'react';
import information from '@/data/information.json';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Certifications } from '@/components/Certifications';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Portfolio() {
  const { about, projects, contact } = information;
  const sections = ['inicio', 'sobre', 'experiencia', 'projetos', 'contato'];
  const activeSection = useActiveSection(sections);

  return (
    <div className="min-h-screen bg-chess-cream text-chess-ebony">
      <Navbar activeSection={activeSection} name={about.name} />

      <main className="max-w-7xl mx-auto border-x-2 border-chess-ebony pt-16">
        <Hero 
          title={about.title} 
          shortDescription={about.shortDescription} 
          resume={about.resume} 
          image={`/ra1461392321009${about.photo}`}
        />
        
        <About 
          description={about.description} 
          education={about.education} 
          skills={about.skills} 
        />
        
        <Certifications certifications={about.certifications} />
        
        <Experience experience={about.experience} />
        
        <Projects projects={projects} />
        
        <Contact contact={contact} name={about.name} />
      </main>

      <Footer />
    </div>
  );
}
