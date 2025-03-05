import { Code, Database, Server, Award } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section className="w-full flex-shrink-0 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-y-auto">
      <div className="absolute inset-0 bg-gray-800/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 to-transparent" />
      <div className="relative z-10 min-h-screen w-full px-4 sm:px-8 md:px-16 py-8 md:py-12 pb-20 flex flex-col items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-300 mb-4 md:mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Languages */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 group">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-blue-500/30 transition-all flex-shrink-0">
                  <Code size={16} className="text-blue-300" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {['Java', 'Python', 'C', 'C++', 'Node JS'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-md text-xs md:text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Web Technologies */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-purple-500/30 transition-all flex-shrink-0">
                  <Code size={16} className="text-purple-300" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {['JavaScript', 'HTML5', 'CSS', 'Angular 4', 'React', 'Bootstrap', 'TypeScript'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-md text-xs md:text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/20 group">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-indigo-500/30 transition-all flex-shrink-0">
                  <Database size={16} className="text-indigo-300" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {['SQL', 'MongoDB', 'Cosmos DB', 'Oracle', 'PostgreSQL', 'DynamoDB', 'Redis'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-md text-xs md:text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/20 group">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-teal-500/30 transition-all flex-shrink-0">
                  <Server size={16} className="text-teal-300" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">DevOps & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {['GitHub', 'Kubernetes', 'Jenkins', 'AWS', 'Azure CI/CD', 'Swagger', 'JIRA', 'Postman'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-teal-500/10 text-teal-300 rounded-md text-xs md:text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-cyan-500/30 transition-all flex-shrink-0">
                  <Code size={16} className="text-cyan-300" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {['Spring Boot', 'Spring MVC', 'Spring', 'Express.js', 'Angular', 'React'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-md text-xs md:text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Specialized Skills */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/20 group">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-pink-500/30 transition-all flex-shrink-0">
                  <Award size={16} className="text-pink-300" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Specialized Skills</h3>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {['AEM Development', 'REST APIs', 'Cloud Service', 'Microservices', 'CI/CD', 'OSGi', 'JCR', 'HTL'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-pink-500/10 text-pink-300 rounded-md text-xs md:text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;