import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Terminal from '../effects/Terminal';
import CodeSnippet from '../effects/CodeSnippet';
import MatrixRain from '../effects/MatrixRain';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface HeroProps {
  personalInfo: {
    name: string;
    title: string;
    bio: string;
    image: string;
    social: {
      github: string;
      linkedin: string;
    };
    email: string;
    codeSnippet: string;
    terminalCommands: Array<{ command: string; output: string }>;
  };
}

const Hero = ({ personalInfo }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const textToType = `Hello, I'm ${personalInfo.name}`;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textToType]);

  return (
    <div className="relative min-h-screen   flex items-center">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-10">
        <MatrixRain />
      </div>

      <div className="container md:mt-1 mt-20 mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center  relative">
            
            
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 mt-6 text-center">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  |
                </motion.span>
              </h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-3xl text-green-500 mb-6 text-center"
              >
                {personalInfo.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-gray-300 mb-8 max-w-2xl text-center"
              >
                {personalInfo.bio}
              </motion.p>
              
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex gap-4"
            >
              <motion.a
                href={`https://github.com/${personalInfo.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-green-500 transition-colors"
              >
                <FaGithub className="text-2xl text-white" />
              </motion.a>
              <motion.a
                href={`https://linkedin.com/in/${personalInfo.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-green-500 transition-colors"
              >
                <FaLinkedin className="text-2xl text-white" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-green-500 transition-colors"
              >
                <FaEnvelope className="text-2xl text-white" />
              </motion.a>
              <motion.a
                href="uploads\cv\MohamedHaki-MernDeveloper.pdf"
                download
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-green-500 transition-colors flex items-center"
              >
                <span className="text-white font-medium">Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-6 md:mt-10 mt-1">
            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >


              {/* <Terminal
                commands={personalInfo.terminalCommands}
                prompt="visitor@portfolio:~$"
              /> */}


            </motion.div>

            {/* Code Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <CodeSnippet
                code={personalInfo.codeSnippet}
                language="javascript"
                title="MohamedHaki.js"
                runnable={true}
              /> 
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
