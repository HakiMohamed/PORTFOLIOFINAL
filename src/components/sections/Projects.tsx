import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import CodeSnippet from '../effects/CodeSnippet';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Projets Réalisés
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="px-6 py-2 bg-green-500 text-white rounded-lg"
                    >
                      Voir détails
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-green-500"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-green-500"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find(p => p.id === selectedProject) && (
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        {projects.find(p => p.id === selectedProject)?.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    <img
                      src={projects.find(p => p.id === selectedProject)?.image}
                      alt={projects.find(p => p.id === selectedProject)?.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          Description
                        </h4>
                        <p className="text-gray-300">
                          {projects.find(p => p.id === selectedProject)?.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          Fonctionnalités
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          {projects.find(p => p.id === selectedProject)?.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {projects.find(p => p.id === selectedProject)?.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={projects.find(p => p.id === selectedProject)?.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-gray-700 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-600"
                        >
                          <FaGithub />
                          <span>Voir le code</span>
                        </a>
                        <a
                          href={projects.find(p => p.id === selectedProject)?.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-green-500 text-white rounded-lg flex items-center space-x-2 hover:bg-green-600"
                        >
                          <FaExternalLinkAlt />
                          <span>Voir le site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
