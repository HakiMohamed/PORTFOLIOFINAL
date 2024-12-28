import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">About</h3>
            <p className="text-gray-400">
              Passionate Full-Stack developer creating modern and high-performance web applications.
            </p>
          </div>

         

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2"
                >
                  <FaEnvelope />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a 
                  href={`https://github.com/${personalInfo.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href={`https://linkedin.com/in/${personalInfo.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 