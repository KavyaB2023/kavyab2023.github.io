import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, Database, Briefcase, Award, Mail, Home } from 'lucide-react';
import SkillsSection from './SkillsSection';
import IntroductionSection from './IntroductionSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';

const NavigationBar = ({ activeSlide, slides, handlePrev, handleNext, goToSlide }) => (
  <div className="fixed bottom-0 left-0 w-full z-20 bg-gray-900/80 backdrop-blur-sm py-3 md:py-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 gap-3 md:gap-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={activeSlide === 0}
          aria-label="Previous slide"
          className={`hidden md:block w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${activeSlide === 0 ? 'bg-gray-700 text-gray-400' : 'bg-gray-600 text-white hover:bg-gray-500'} transition-all`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={activeSlide === slides.length - 1}
          aria-label="Next slide"
          className={`hidden md:block w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${activeSlide === slides.length - 1 ? 'bg-gray-700 text-gray-400' : 'bg-gray-600 text-white hover:bg-gray-500'} transition-all`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${slide.title} section`}
            className={`px-2 py-1 md:px-3 md:py-2 rounded-full flex items-center space-x-1 md:space-x-2 
              ${activeSlide === index
                ? 'bg-gray-600 backdrop-blur-sm border border-gray-500'
                : 'bg-transparent hover:bg-gray-700'
              } transition-all`}
          >
            <div className={`${activeSlide === index ? 'text-white' : 'text-gray-400'}`}>
              {slide.icon}
            </div>
            {activeSlide === index && (
              <span className="text-xs md:text-sm font-medium text-white hidden sm:inline">{slide.title}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const KavyaPortfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    { id: 'intro', icon: <Home size={20} />, title: 'Introduction' },
    { id: 'skills', icon: <Code size={20} />, title: 'Skills' },
    { id: 'experience', icon: <Briefcase size={20} />, title: 'Experience' },
    { id: 'education', icon: <Database size={20} />, title: 'Education' },
    { id: 'certifications', icon: <Award size={20} />, title: 'Certifications' },
    { id: 'contact', icon: <Mail size={20} />, title: 'Contact' },
  ];

  useEffect(() => {
    // Check if the device is mobile (screen width <= 768px or touch capability)
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;

    let timeoutId;
    const handleKeyDown = (e) => {
      if (isMobile) return; // Skip keydown events on mobile
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        }
      }, 200);
    };

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) handleNext();
        else handlePrev();
      }
    };

    const slider = sliderRef.current;

    // Only add keydown listener if not on mobile
    if (!isMobile) {
      window.addEventListener('keydown', handleKeyDown);
    }

    // Always add touch events for mobile support
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (!isMobile) {
        window.removeEventListener('keydown', handleKeyDown);
      }
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(timeoutId);
    };
  }, [activeSlide]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-900 text-white" ref={sliderRef}>
      <div
        className="h-screen flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        <IntroductionSection goToSlide={goToSlide} />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </div>
      <NavigationBar
        activeSlide={activeSlide}
        slides={slides}
        handlePrev={handlePrev}
        handleNext={handleNext}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default KavyaPortfolio;