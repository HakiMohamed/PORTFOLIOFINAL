import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="text-center space-y-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Full Stack Developer
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Spécialisé dans la stack MERN avec une passion pour créer des applications web modernes et performantes.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition"
          >
            Me contacter
          </a>
          <a 
            href="#projects" 
            className="bg-gray-800 dark:bg-white dark:text-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition"
          >
            Voir mes projets
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 