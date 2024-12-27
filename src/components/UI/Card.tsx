import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({ children, className = '', hover = true, onClick }: CardProps) => {
  const { currentTheme } = useTheme();

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`
        bg-opacity-50 backdrop-blur-lg rounded-xl p-6
        border border-opacity-20 shadow-lg
        ${className}
      `}
      style={{
        backgroundColor: currentTheme.background,
        borderColor: currentTheme.primary,
        color: currentTheme.text
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card; 