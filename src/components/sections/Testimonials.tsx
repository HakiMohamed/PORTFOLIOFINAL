import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Soukaina El Azizi",
    role: "PC HALLE CEO  ",
    image: "/public/uploads/soukainaAzizi.jpeg",
    text: "Mohamed a développé un excellent système de plugins pour notre plateforme e-commerce. Son travail a considérablement amélioré la flexibilité de notre système.",
    rating: 5
  },
  {
    id: 2,
    name: "YouCode UMPF",
    role: "Institution",
    image: "/testimonials/client2.jpg",
    text: "Un étudiant exemplaire qui a démontré d'excellentes capacités techniques et une grande motivation dans le développement web.",
    rating: 5
  },
  {
    id: 3,
    name: "FSJES Cadi ayad",
    role: "Institution",
    image: "/testimonials/client3.jpg",
    text: "Mohamed a excellé dans ses études en droit tout en développant ses compétences en programmation, montrant une capacité remarquable à gérer plusieurs disciplines.",
    rating: 5
  }
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
          Témoignages
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-green-500 transition-colors"
          >
            <FaChevronLeft className="text-3xl" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-400 hover:text-green-500 transition-colors"
          >
            <FaChevronRight className="text-3xl" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-lg p-8"
              >
                <div className="flex flex-col items-center text-center">
                  <FaQuoteLeft className="text-4xl text-green-500 mb-6" />
                  
                  <p className="text-gray-300 text-lg mb-6 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mx-1" />
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 