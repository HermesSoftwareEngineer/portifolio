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
              Sou Hermes Barbosa, estudante de Ciência da Computação e desenvolvedor full stack. Atualmente trabalho principalmente com JavaScript, React, Node, Python e Langgraph, desenvolvendo projetos que vão de <b>sistemas web a automações inteligentes</b>. Amo unir <i>lógica</i>, <i>tecnologia</i> e <i>criatividade</i> para resolver problemas e entregar soluções eficientes. Além de programar, valorizo <i>organização</i>, <i>aprendizado contínuo</i> e <i>colaboração em equipe</i>.
            </p>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Sempre em busca de <b>novos desafios</b> e <b>oportunidades</b> para crescer profissionalmente. Procuro constantemente expandir meus conhecimentos em <b>desenvolvimento de software</b> e aplicá-los em projetos que gerem <b>valor</b> e <b>impacto positivo</b>.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-800'}`}>React</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-green-900 text-green-100' : 'bg-green-100 text-green-800'}`}>Node.js</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-yellow-900 text-yellow-100' : 'bg-yellow-100 text-yellow-800'}`}>JavaScript</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-800'}`}>Python</span>
              <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-gray-700 text-purple-100' : 'bg-gray-200 text-gray-800'}`}>Langgraph</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;