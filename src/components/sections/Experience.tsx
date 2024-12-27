import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCode, FaChartLine } from 'react-icons/fa';
import CodeSnippet from '../effects/CodeSnippet';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  logo: string;
  description: string;
  technologies: string[];
  codeSnippet?: string;
  metrics?: {
    teamSize: number;
    codeReviews: number;
    deployments: number;
    uptime: string;
  };
}

interface ExperienceProps {
  experiences: Experience[];
}

function Experience({ experiences }: ExperienceProps) {
  const [selectedExp, setSelectedExp] = useState<string>(experiences[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'details' | 'code' | 'metrics'>('details');

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Expérience 
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {experiences.map((exp) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setSelectedExp(exp.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-6 rounded-lg text-left transition-all
                    ${selectedExp === exp.id 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  <img src={exp.logo} alt={exp.company} className="w-20 h-10" />
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <p className="text-sm opacity-75">{exp.company}</p>
                  <p className="text-sm mt-2">{exp.period}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {experiences.find(exp => exp.id === selectedExp) && (
                <motion.div
                  key={selectedExp}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  {/* Tabs */}
                  <div className="flex space-x-4 mb-6">
                    <button
                      onClick={() => setActiveTab('details')}
                      className={`px-4 py-2 rounded-lg transition-colors
                        ${activeTab === 'details' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                    >
                      <FaBriefcase className="inline-block mr-2" />
                      Détails
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-4 py-2 rounded-lg transition-colors
                        ${activeTab === 'code' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
                    >
                      <FaCode className="inline-block mr-2" />
                      Code
                    </button>
                   
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    {activeTab === 'details' && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p className="text-gray-300 mb-6">
                          {experiences.find(exp => exp.id === selectedExp)?.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experiences.find(exp => exp.id === selectedExp)?.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'code' && (
                      <motion.div
                        key="code"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <CodeSnippet
                          code={experiences.find(exp => exp.id === selectedExp)?.codeSnippet || ''}
                          language="typescript"
                          title="example.ts"
                        />
                      </motion.div>
                    )}

                    {activeTab === 'metrics' && (
                      <motion.div
                        key="metrics"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      >
                        {experiences.find(exp => exp.id === selectedExp)?.metrics && (
                          <>
                            <MetricCard
                              label="Taille de l'équipe"
                              value={experiences.find(exp => exp.id === selectedExp)?.metrics?.teamSize || 0}
                            />
                            <MetricCard
                              label="Code Reviews"
                              value={experiences.find(exp => exp.id === selectedExp)?.metrics?.codeReviews || 0}
                            />
                            <MetricCard
                              label="Déploiements"
                              value={experiences.find(exp => exp.id === selectedExp)?.metrics?.deployments || 0}
                            />
                            <MetricCard
                              label="Uptime"
                              value={experiences.find(exp => exp.id === selectedExp)?.metrics?.uptime || '0%'}
                            />
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Experience;
