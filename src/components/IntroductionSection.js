import React from 'react';
import kavya from '../components/images/kavya.jpeg'

const IntroductionSection = ({ goToSlide }) => {
  return (
    <section className="w-full flex-shrink-0 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 bg-gray-800/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 to-transparent" />
      </div>
      <div className="relative z-10 min-h-screen w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 pb-20 flex flex-col items-center justify-between">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 flex-grow">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4 md:mb-6">
              <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-4">
                Software Engineer
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 leading-tight mb-2 md:mb-4">
                Kavya B
              </h1>
              <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 md:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed max-w-xl">
                With nearly 4 years of experience, I excel in designing distributed systems and robust solutions using OOP and SOLID principles.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <a
          href="/Kavya_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium text-sm md:text-base transition transform hover:scale-105 text-center"
        >
          View My Resume
        </a>
              <button
                onClick={() => goToSlide(5)}
                className="px-6 py-2 md:px-8 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm md:text-base transition transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-purple-500 rounded-full filter blur-3xl opacity-20 -top-4 sm:-top-6 md:-top-10 -right-4 sm:-right-6 md:-right-10"></div>
            <div className="w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/20">
              <img src={kavya} alt="Kavya B" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;