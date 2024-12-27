import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: "Développement Frontend",
    description: "Création d'interfaces utilisateurs modernes et réactives avec React.js, Next.js et TypeScript.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    icon: FaServer,
    title: "Développement Backend",
    description: "Conception et développement d'APIs RESTful robustes et évolutives.",
    technologies: ["Node.js", "Express.js", "MongoDB", "API REST"]
  },
  {
    icon: FaMobile,
    title: "Applications Responsives",
    description: "Développement d'applications web adaptatives pour tous les appareils.",
    technologies: ["Mobile-First", "Progressive Web Apps", "Responsive Design"]
  },
  {
    icon: FaDatabase,
    title: "Gestion de Base de Données",
    description: "Conception et optimisation de bases de données NoSQL et SQL.",
    technologies: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    icon: FaCloud,
    title: "Déploiement Cloud",
    description: "Déploiement et maintenance d'applications sur le cloud.",
    technologies: ["AWS", "Docker", "CI/CD"]
  },
  {
    icon: FaCogs,
    title: "Intégration & API",
    description: "Intégration de services tiers et développement d'APIs personnalisées.",
    technologies: ["REST APIs", "GraphQL", "WebSocket"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Services & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-2xl text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
