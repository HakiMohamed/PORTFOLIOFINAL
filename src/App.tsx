import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { personalInfo, experiences, skills, projects } from './data/portfolioData';
import Navbar from './components/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = `${personalInfo.name} - Portfolio`;
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-gray-900">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-green-500 transform-origin-left z-50"
          style={{ scaleX }}
        />

        {/* Wrapper pour le contenu principal */}
        <div className="relative">
          {/* Navbar en position absolute pour ne pas affecter le flux */}
          <div className="absolute top-0 left-0 right-0 z-40">
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="relative z-10 ">
            <section id="home">
              <Hero personalInfo={personalInfo} />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience experiences={experiences} />
            </section>
            <section id="skills">
              <Skills skills={skills} />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="projects">
              <Projects projects={projects} />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
            <section id="contact">
              <Contact personalInfo={personalInfo} />
            </section>
          </main>
        </div>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App; 