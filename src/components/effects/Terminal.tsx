import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
  commands: Array<{
    command: string;
    output: string;
  }>;
  prompt?: string;
}

const Terminal = ({ commands, prompt = "visitor@portfolio:~$" }: TerminalProps) => {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < commands.length) {
      const timer = setTimeout(() => {
        setHistory(prev => [...prev, commands[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, commands]);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-sm text-gray-400">terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        <AnimatePresence>
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-green-500">
                {prompt} <span className="text-white">{item.command}</span>
              </div>
              <div className="text-gray-300 ml-4 mt-1 mb-3">
                {item.output}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-green-500"
        >
          {prompt} <span className="text-white">_</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Terminal;