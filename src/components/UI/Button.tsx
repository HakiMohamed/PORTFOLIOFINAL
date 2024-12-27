import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon
}: ButtonProps) => {
  const { currentTheme } = useTheme();

  const baseStyles = "rounded-lg font-medium transition-all duration-200 flex items-center justify-center";
  
  const variants = {
    primary: `bg-[${currentTheme.primary}] text-white hover:brightness-110`,
    secondary: `bg-[${currentTheme.secondary}] text-white hover:brightness-110`,
    outline: `border-2 border-[${currentTheme.primary}] text-[${currentTheme.primary}] 
              hover:bg-[${currentTheme.primary}] hover:text-white`
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button; 