import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaGraduationCap, FaLanguage, FaHeart } from 'react-icons/fa';
import { education, languages, interests, softSkills } from '../../data/portfolioData';

const About = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'languages' | 'interests'>('education');

  const tabs = [
    { id: 'education', label: 'Formation', icon: FaGraduationCap },
    { id: 'languages', label: 'Langues', icon: FaLanguage },
    { id: 'interests', label: 'Intérêts', icon: FaHeart },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>

        {/* Responsive Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {tabs.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300
                ${activeTab === id 
                  ? 'bg-white text-gray-900 shadow-lg' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}
            >
              <Icon className="mr-2 text-lg" />
              <span className="whitespace-nowrap">{label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
         

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                      {edu.logo && (
                        <img 
                          src={edu.logo} 
                          alt={edu.institution} 
                          className={`object-contain max-h-12 ${
                            edu.logo === '/uploads/logofsjes.png' 
                              ? 'bg-white w-[120px] md:w-[90px]' 
                              : 'w-[160px] md:w-[140px]'
                          }`}
                        />
                      )}
                      {edu.logo2 && (
                        <img 
                          src={edu.logo2} 
                          alt={edu.institution} 
                          className="object-contain w-[160px] md:w-[140px] max-h-12" 
                        />
                      )}
                      {edu.logo3 && (
                        <img 
                          src={edu.logo3} 
                          alt={edu.institution} 
                          className="object-contain w-[160px] md:w-[140px] max-h-12 bg-white" 
                        />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-3">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-gray-300 text-lg mb-2">{edu.institution}</p>
                    <p className="text-green-400 mb-3">{edu.period}</p>
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'languages' && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {lang.language}
                    </h3>
                    <p className="text-gray-400 mb-4">{lang.level}</p>
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute h-full  bg-green-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'interests' && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-all duration-300"
                    >
                      <div className="text-green-400 text-xl mr-4">❖</div>
                      <span className="text-white">{interest}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
