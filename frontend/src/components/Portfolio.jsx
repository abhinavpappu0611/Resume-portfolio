import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { personalInfo, projects, skills } from '../data/portfolioData';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header scrolled={scrolled} />
      <Hero personalInfo={personalInfo} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact personalInfo={personalInfo} />
    </div>
  );
};

export default Portfolio;
