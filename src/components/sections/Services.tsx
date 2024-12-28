import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "Creating modern and reactive user interfaces with React.js, Next.js, and TypeScript.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Next.js","Vue.js"]
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Designing and developing robust and scalable RESTful APIs.",
    technologies: ["Node.js", "Nest.js", "Express.js", "MongoDB",]
  },
  {
    icon: FaMobile,
    title: "Responsive Applications",
    description: "Developing adaptive web applications for all devices.",
    technologies: ["Mobile-First", "Progressive Web Apps", "Responsive Design"]
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description: "Designing and optimizing NoSQL and SQL databases.",
    technologies: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    icon: FaCloud,
    title: "Cloud Deployment",
    description: "Deploying and maintaining applications on the cloud.",
    technologies: ["AWS", "Docker", "CI/CD" ]
  },
  {
    icon: FaCogs,
    title: "Integration & API",
    description: "Integrating third-party services and developing custom APIs.",
    technologies: ["REST APIs", "GraphQL", "WebSocket", "Socket.io","RabbitMQ"]
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
          My Services & Expertise
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
