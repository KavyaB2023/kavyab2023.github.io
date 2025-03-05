import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="w-full flex-shrink-0 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-y-auto">
      <div className="absolute inset-0 bg-gray-800/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 to-transparent" />
      <div className="relative z-10 min-h-screen w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 pb-20 flex flex-col items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300 mb-4 md:mb-8 text-center">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-grow">
            {/* Experience Entry 1: Application Development Analyst */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center justify-between mb-3 md:mb-4 flex-col sm:flex-row gap-3 md:gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-2">
                    Nov 2021 - Dec 2023
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Application Development Analyst</h3>
                  <p className="text-xs sm:text-sm md:text-base text-purple-200 mt-1">Accenture, Hyderabad, India</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase size={16} className="text-purple-300" />
                </div>
              </div>

              <div className="mb-3 md:mb-4">
                <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1 md:mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {['Java', 'Javascript', 'Springboot', 'Junit', 'Microservices', 'Spring MVC', 'Postman', 'Git', 'JIRA'].map(tech => (
                    <span key={tech} className="px-1 py-0.5 md:px-2 md:py-1 bg-purple-500/10 text-purple-200 rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1 md:mb-2">Key Achievements</h4>
                <ul className="space-y-1 md:space-y-2 text-xs sm:text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Integrated Dynamic Media Configuration.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Led AEM migration with minimal downtime.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Designed RESTful APIs.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Created sling models and OSGi configs.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Entry 2: Software Engineer */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex items-center justify-between mb-3 md:mb-4 flex-col sm:flex-row gap-3 md:gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-2">
                    Aug 2019 - Nov 2021
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Software Engineer</h3>
                  <p className="text-xs sm:text-sm md:text-base text-purple-200 mt-1">Tata Consultancy Services, Hyderabad, India</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase size={16} className="text-purple-300" />
                </div>
              </div>

              <div className="mb-3 md:mb-4">
                <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1 md:mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {['JAVA', 'HTL', 'JavaScript', 'CSS', 'Maven', 'Jira', 'Bitbucket', 'GIT', 'Confluence'].map(tech => (
                    <span key={tech} className="px-1 py-0.5 md:px-2 md:py-1 bg-purple-500/10 text-purple-200 rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1 md:mb-2">Key Achievements</h4>
                <ul className="space-y-1 md:space-y-2 text-xs sm:text-sm md:text-base">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Developed AEM backend.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Created three website pages.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Built custom components.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-1 md:mr-2 flex-shrink-0">•</span>
                    <p className="text-gray-300">Managed multilingual content.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;