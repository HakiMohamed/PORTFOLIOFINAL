import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label:'Skills' , href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed bg-gray-900/80 backdrop-blur-xl shadow-lg w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-around">
          {/* Logo with Profile Picture */}
          <motion.a
            href="#"
            className="relative group flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Profile Picture */}
            <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden ring-2 ring-emerald-400/50">
              <img
                src="/uploads/Mypicture.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            {/* Logo Text */}
            <div className="relative">
              <span className="text-3xl font-black tracking-tighter">
                <span className="bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent">
                  M
                </span>
                <span className="bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">
                  H
                </span>
              </span>
            </div>
          </motion.a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative px-4  text-gray-300 hover:text-white rounded-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute inset-0  opacity-0 group-hover:opacity-100"
                  layoutId="navbar-hover"
                  transition={{ type: "spring", bounce: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - Moved to the right */}
          <motion.button
            className="md:hidden relative p-2 rounded-lg text-green-400 border-2 border-green-300  hover:bg-gray-800 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Centered */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col items-center space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="w-full text-center px-4 py-3 text-gray-300 hover:text-white  "
                    whileHover={{ x: 6 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 