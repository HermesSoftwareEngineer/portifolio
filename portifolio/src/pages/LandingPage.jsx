import { useState, useEffect } from 'react';
import Home from '../components/Landing/Home';
import About from '../components/Landing/About';
import Skills from '../components/Landing/Skills';
import Projects from '../components/Landing/Projects';
import Contact from '../components/Landing/Contact';
import InteractiveBackground from '../components/InteractiveBackground';

// Componente Principal da Landing Page
const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="LandingPage relative">
      {/* InteractiveBackground colocado com position fixed para cobrir toda a página */}
      <div className="fixed inset-0 z-0">
        <InteractiveBackground />
      </div>
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default LandingPage;