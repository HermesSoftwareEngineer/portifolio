import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled 
        ? 'backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-soft border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-transparent'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="group flex items-center space-x-2"
            >
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center
                transition-all duration-300 group-hover:scale-110
                ${isDark 
                  ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                  : 'bg-gradient-to-br from-primary-600 to-secondary-600'
                }
              `}>
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className={`
                text-xl font-bold transition-colors duration-300
                ${isDark 
                  ? 'text-white group-hover:text-primary-400' 
                  : 'text-gray-900 group-hover:text-primary-600'
                }
              `}>
                Hermes
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-4 py-2.5 text-sm font-medium
                    transition-all duration-300 group
                    ${isScrolled
                      ? activeSection === item.id
                        ? isDark 
                          ? 'text-blue-300' 
                          : 'text-blue-700'
                        : isDark 
                          ? 'text-slate-300 hover:text-blue-300' 
                          : 'text-slate-300 hover:text-blue-700'
                      : activeSection === item.id
                        ? isDark 
                          ? 'text-blue-300' 
                          : 'text-blue-700'
                        : isDark 
                          ? 'text-slate-300 hover:text-blue-300' 
                          : 'text-slate-600 hover:text-blue-700'
                    }
                  `}
                >
                  {item.label}
                  <span className={`
                    absolute bottom-0 left-0 h-0.5 w-full 
                    origin-center transition-transform duration-300 scale-x-0
                    ${activeSection === item.id 
                      ? isDark 
                        ? 'bg-blue-400 scale-x-80' 
                        : 'bg-blue-500 scale-x-80' 
                      : isDark
                        ? 'bg-blue-400/70 group-hover:scale-x-80'
                        : 'bg-blue-500/70 group-hover:scale-x-80'
                    }
                    rounded-full
                  `} />
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                transition-all duration-300 group
                ${isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }
              `}
            >
              <span className="text-lg transition-transform duration-300 group-hover:rotate-180">
                {isDark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <button 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                transition-all duration-300
                ${isDark 
                  ? 'bg-gray-800 text-yellow-400' 
                  : 'bg-gray-100 text-gray-600'
                }
              `}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                transition-all duration-300
                ${isDark 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }
              `}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-2 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  block w-full text-left px-4 py-3 text-base font-medium
                  transition-all duration-300 relative
                  ${activeSection === item.id
                    ? isDark 
                      ? 'text-blue-300' 
                      : 'text-blue-700'
                    : isDark 
                      ? 'text-slate-300 hover:text-blue-300' 
                      : 'text-slate-600 hover:text-blue-700'
                  }
                `}
              >
                <div className="flex items-center">
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="ml-2 text-blue-400">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </div>
                <span className={`
                  absolute bottom-0 left-0 h-0.5 w-full
                  transform origin-left transition-transform duration-300 scale-x-0
                  ${activeSection === item.id 
                    ? isDark 
                      ? 'bg-blue-400 scale-x-100' 
                      : 'bg-blue-500 scale-x-100'
                    : 'scale-x-0'
                  }
                `} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
