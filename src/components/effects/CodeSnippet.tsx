import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy, FaCheck, FaTerminal } from 'react-icons/fa';

interface CodeSnippetProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
  runnable?: boolean;
  onRun?: () => void;
}

const CodeSnippet = ({
  code = '',
  language,
  title,
  showLineNumbers = true,
  runnable = false,
  onRun
}: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = async () => {
    setShowTerminal(true);
    setIsExecuting(true);
    setOutput([]);

    try {
      setOutput(prev => [...prev, '> Executing code...']);
      
      // Capture console.log output
      const originalConsoleLog = console.log;
      const logs: string[] = [];
      
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalConsoleLog.apply(console, args);
      };

      // Execute the code
      await new Promise((resolve) => {
        setTimeout(() => {
          try {
            eval(code);
            resolve(logs);
          } catch (error) {
            resolve({ error, logs });
          }
        }, 1000);
      });

      // Restore original console.log
      console.log = originalConsoleLog;

      // Display only the logs in terminal
      setOutput(prev => [
        ...prev,
        ...logs.map(log => log),
        '> Execution complete'
      ]);

    } catch (error) {
      setOutput(prev => [...prev, 
        '> Error occurred:',
        String(error)
      ]);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        className="rounded-lg mt-10  overflow-hidden bg-[#1E1E1E]"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 bg-[#2D2D2D]">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            {title && (
              <span className="text-sm text-gray-400 ml-2">{title}</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {runnable && (
              <button
                onClick={handleRun}
                className="px-3 py-1 text-sm text-white bg-green-600 hover:bg-green-700 rounded transition-colors mr-2"
              >
                Run
              </button>
            )}
            <button
              onClick={handleCopy}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <FaCheck className="text-green-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <FaCopy />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Code */}
        <div className="p-4">
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            showLineNumbers={showLineNumbers}
            wrapLines={true}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
            }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* Terminal Modal */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => !isExecuting && setShowTerminal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#1E1E1E] rounded-lg w-full max-w-2xl m-4"
              onClick={e => e.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="flex justify-between items-center px-4 py-2 bg-[#2D2D2D] rounded-t-lg">
                <div className="flex items-center space-x-2">
                  <FaTerminal className="text-gray-400" />
                  <span className="text-sm text-gray-400">Terminal</span>
                </div>
                {!isExecuting && (
                  <button
                    onClick={() => setShowTerminal(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm text-green-400 max-h-[60vh] overflow-y-auto">
                {output.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap">
                    {line}
                  </div>
                ))}
                {isExecuting && (
                  <div className="animate-pulse">▋</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CodeSnippet;