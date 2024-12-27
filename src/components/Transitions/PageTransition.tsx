import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        <motion.div
          className="fixed inset-0 bg-blue-500"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
        <motion.div
          className="fixed inset-0 bg-gray-900"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 