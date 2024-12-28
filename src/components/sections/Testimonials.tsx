import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaLinkedin } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Soukaina El Azizi",
    role: "PC HALLE CEO",
    image: "/public/uploads/soukainaAzizi.jpeg",
    text: "Mohamed a effectué un stage de 6 mois au sein de Pchalle, durant lequel il a su démontrer son autonomie ainsi que sa capacité à prendre des initiatives pour résoudre divers problèmes techniques. Je le recommande vivement et lui souhaite beaucoup de succès pour la suite.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/mohamedhaki/details/recommendations/?detailScreenTabIndex=0"
  },
  
  
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Testimonials
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials Slider */}
          <div className="overflow-hidden cursor-pointer">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-lg p-8"
              >
                <div onClick={() => window.open(testimonials[currentIndex].linkedinUrl, '_blank')}  className="flex flex-col items-center text-center">
                  <FaQuoteLeft className="text-4xl cursor-pointer text-green-500 mb-6" />
                  
                  <p className="text-gray-300 cursor-pointer text-lg mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mx-1" />
                    ))}
                  </div>

                  <div  className="flex items-center space-x-4 cursor-pointer" 
                       onClick={() => window.open(testimonials[currentIndex].linkedinUrl, '_blank')}>
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="text-white font-bold">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                      {testimonials[currentIndex].linkedinUrl && (
                        <span className="text-blue-400 hover:text-blue-500 inline-flex items-center gap-2 mt-2">
                          <FaLinkedin />
                          <span>View on LinkedIn</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons and Dots - Moved to bottom for mobile */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button
              onClick={handlePrevious}
              className="text-gray-400 hover:text-green-500 transition-colors p-2"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors
                    ${index === currentIndex 
                      ? 'bg-green-500' 
                      : 'bg-gray-600 hover:bg-gray-500'}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-green-500 transition-colors p-2"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 