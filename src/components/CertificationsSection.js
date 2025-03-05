import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  return (
    <section className="w-full flex-shrink-0 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-y-auto">
      <div className="absolute inset-0 bg-gray-800/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 to-transparent" />
      <div className="relative z-10 min-h-screen w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 pb-20 flex flex-col items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-300 mb-4 md:mb-8 text-center">Certifications</h2>
          <div className="space-y-3 md:space-y-4 flex flex-col justify-center">
            {/* Certification 1: Adobe Certified Expert */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-blue-500/10 rounded-full blur-lg" />
              <div className="flex items-center flex-col sm:flex-row gap-3 md:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-blue-300" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium mb-2">
                    Dec 2022
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Adobe Certified Expert</h3>
                  <p className="text-blue-200 mt-1 text-xs sm:text-sm md:text-base">Adobe Experience Manager Sites Developer</p>
                </div>
              </div>
            </div>

            {/* Certification 2: AWS Certified Developer */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-blue-500/10 rounded-full blur-lg" />
              <div className="flex items-center flex-col sm:flex-row gap-3 md:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-blue-300" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium mb-2">
                    Mar 2022
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">AWS Certified Developer</h3>
                  <p className="text-blue-200 mt-1 text-xs sm:text-sm md:text-base">Associate Level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;