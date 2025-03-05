import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full flex-shrink-0 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-y-auto">
      <div className="absolute inset-0 bg-gray-800/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 to-transparent" />
      <div className="relative z-10 min-h-screen w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 pb-20 flex justify-center items-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
          {/* Contact Information */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-300 mb-3 md:mb-6">Get In Touch</h2>
            <p className="text-xs sm:text-sm md:text-base text-indigo-100 mb-4 md:mb-8 max-w-lg">
              I'm open to new opportunities and collaborations. Reach out to connect!
            </p>

            <div className="space-y-4 md:space-y-6 w-full max-w-md">
              {/* Email */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-indigo-300" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <p className="text-xs text-indigo-300">Email</p>
                  <p className="text-xs sm:text-sm md:text-base text-white font-medium">kxb20250@ucmo.edu</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-300"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-start text-left">
                  <p className="text-xs text-indigo-300">LinkedIn</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kavya-barki/"
                    className="text-xs sm:text-sm md:text-base text-white font-medium hover:underline"
                  >
                    linkedin.com/in/kavya-barki
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;