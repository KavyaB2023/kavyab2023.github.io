import React from 'react';

const EducationSection = () => {
  return (
    <section className="w-full flex-shrink-0 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-y-auto">
      <div className="absolute inset-0 bg-gray-800/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 to-transparent" />
      <div className="relative z-10 min-h-screen w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 pb-20 flex flex-col items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-300 mb-4 md:mb-8 text-center">Education</h2>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3 md:mb-4 gap-3 md:gap-4">
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium mb-2">
                  Jan 2024 - March 2025
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Masters in Computer Science</h3>
                <p className="text-xs sm:text-sm md:text-base text-blue-200 mt-1">University of Central Missouri</p>
                <div className="mt-1 md:mt-2 px-2 py-1 md:px-3 md:py-1 bg-blue-500/20 inline-block rounded-full">
                  <span className="text-blue-300 font-medium text-xs">GPA: 3.7/4.0</span>
                </div>
              </div>
            </div>

            <div className="flex-grow">
              <h4 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1 md:mb-2">Key Courses</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {['Advanced Algorithms', 'Data Structures', 'Cloud Computing', 'Software Security', 'Information Assurance'].map((course, i) => (
                  <div key={i} className="flex items-center bg-blue-500/10 rounded-lg p-2 hover:bg-blue-500/20 transition-colors">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-blue-300 font-semibold text-xs md:text-base">{i + 1}</span>
                    </div>
                    <span className="text-blue-200 text-xs sm:text-sm md:text-base">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;