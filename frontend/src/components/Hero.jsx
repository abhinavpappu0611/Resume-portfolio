import React, { useEffect, useState } from 'react';
const Hero = ({ personalInfo }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['AI Engineer', 'Data Analyst', 'ML Enthusiast', 'Cloud Developer'];

  useEffect(() => {
    const typeText = () => {
      const text = texts[currentIndex];
      if (currentText.length < text.length) {
        setCurrentText(text.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((currentIndex + 1) % texts.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeText, 150);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, texts]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950" style={{background: 'linear-gradient(135deg, #0f0f0f 0%, #111827 50%, #064e3b 100%)'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                {personalInfo.name}
              </span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">
              <span>I'm an </span>
              <span className="text-emerald-400 min-w-[200px] inline-block text-left">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg transition-colors">
              View My Work
            </a>
            <a href="#contact" className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-950 px-8 py-3 rounded-full text-lg transition-colors">
              Get In Touch  
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 text-lg">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 text-lg">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors text-2xl">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
