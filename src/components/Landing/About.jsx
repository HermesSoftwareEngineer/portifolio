import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={
        `relative
        pb-20
        ${isDark 
          ? 'text-white' 
          : 'text-gray-900'
        }`
      }
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`w-64 h-64 rounded-full mx-auto mb-8 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
              <img src={`/eu.png`} alt="Minha foto" className='rounded-full w-full h-full object-cover object-top' />
            </div>
          </div>
          <div>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Sou Hermes Barbosa, desenvolvedor full stack e estudante de Ciência da Computação com <b>experiência real em produção</b>: construí sistemas internos em uso numa empresa do setor imobiliário, incluindo <i>ferramentas com IA</i>, <i>dashboards</i> e <i>automações</i> que reduziram processos manuais do time.
            </p>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Trabalho principalmente com <b>Python</b>, <b>FastAPI</b>, <b>React</b> e <b>LangGraph</b>, com foco especial em aplicações que combinam <i>IA</i> com fluxos de negócio reais. Mais do que escrever código, me interessa entender o modelo de negócio — o que realmente gera resultado e retorno financeiro para quem usa o software.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-800'}`}>Python</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-green-900 text-green-100' : 'bg-green-100 text-green-800'}`}>FastAPI</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-800'}`}>React</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-gray-700 text-purple-100' : 'bg-gray-200 text-gray-800'}`}>LangGraph</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-yellow-900 text-yellow-100' : 'bg-yellow-100 text-yellow-800'}`}>IA aplicada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;