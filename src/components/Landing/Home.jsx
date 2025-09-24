import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Home = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="home" className={`
      min-h-screen flex items-center justify-center transition-all duration-300 relative
      ${isDark ? 'text-white' : 'text-gray-900'}
    `}>
      
      <div className="text-center animate-fade-in px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          Olá, eu sou <span className={`${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Hermes</span>
        </h1>
        <p className={`
          text-xl md:text-2xl mb-8 animate-slide-up
          ${isDark ? 'text-gray-200' : 'text-gray-700'}
        `}>
          Desenvolvedor Full Stack
        </p>
        <p className={`
          text-lg mb-8 max-w-2xl mx-auto animate-slide-up
          ${isDark ? 'text-gray-300' : 'text-gray-600'}
        `}>
          Profissional proativo e resiliente, que não tem medo de novos desafios e vê em cada um deles a chance de evoluir e entregar soluções de valor.
        </p>
        <div className="space-x-4 animate-slide-up">
          <button className={`
            px-8 py-3 rounded-lg font-semibold transition-all duration-300 
            transform hover:scale-105 shadow-lg hover:shadow-xl
            ${isDark 
              ? 'bg-blue-600 hover:bg-blue-500 text-white' 
              : 'bg-blue-700 hover:bg-blue-800 text-white'
            }
          `}>
            Ver Projetos
          </button>
          <button className={`
            px-8 py-3 rounded-lg font-semibold transition-all duration-300 
            transform hover:scale-105 shadow-lg hover:shadow-xl border-2
            ${isDark 
              ? 'border-blue-300 text-blue-200 hover:bg-blue-300 hover:text-slate-900' 
              : 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'
            }
          `}>
            Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;