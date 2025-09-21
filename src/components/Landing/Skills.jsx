import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma, FaHtml5, FaCss3Alt, 
  FaJs, FaDatabase, FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, 
  SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  const { isDark } = useTheme();
  
  // Definindo as habilidades em 4 linhas
  const skillRows = [
    // Frontend
    [
      { name: 'React', icon: <FaReact size={40} className="text-blue-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-600" /> },
      { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
      { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-400" /> },
    ],
    // Backend
    [
      { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-800 dark:text-gray-200" /> },
      { name: 'Python', icon: <FaPython size={40} className="text-yellow-600" /> },
      { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-800" /> },
      { name: 'Databases', icon: <FaDatabase size={40} className="text-purple-600" /> },
    ],
    // Ferramentas
    [
      { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
      { name: 'Docker', icon: <FaDocker size={40} className="text-blue-500" /> },
      { name: 'VS Code', icon: <FaCode size={40} className="text-blue-500" /> },
      { name: 'Figma', icon: <FaFigma size={40} className="text-purple-500" /> },
      { name: 'AWS', icon: <FaAws size={40} className="text-yellow-500" /> },
    ],
  ];

  return (
    <section id="skills" className={` py-20 transition-all duration-300 relative overflow-hidden ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6 mb-12">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>Habilidades</h2>
        
        <div className="space-y-12">
          {skillRows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="skill-row-container overflow-hidden"
            >
              <div
                className={`skill-row flex ${rowIndex % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'}`}
                style={{ 
                  animationDuration: `${20 + rowIndex * 5}s`, 
                  animationDelay: `${rowIndex * 0.5}s` 
                }}
              >
                {/* Triplicando os itens para garantir a continuidade visual */}
                {[...row, ...row, ...row].map((skill, skillIndex) => (
                  <div 
                    key={`${rowIndex}-${skillIndex}`} 
                    className={`flex flex-col items-center justify-center min-w-[100px] mx-8 hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`p-4 rounded-lg mb-2 ${isDark ? 'bg-slate-800/50' : 'bg-white shadow'}`}>
                      {skill.icon}
                    </div>
                    <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-right {
          animation: scrollRight linear infinite;
        }
        
        .animate-scroll-left {
          animation: scrollLeft linear infinite;
        }
        
        .skill-row-container {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Skills;