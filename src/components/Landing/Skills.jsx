import React, { useEffect, useCallback } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma, FaHtml5, FaCss3Alt, 
  FaJs, FaDatabase, FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, 
  SiPostgresql
} from 'react-icons/si';

const SkillCarousel = ({ skills, title, isDark, reverse }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: 'keepSnaps',
      slidesToScroll: 1,
      direction: reverse ? 'rtl' : 'ltr', // Define a direção com base na prop "reverse"
    },
    [
      AutoScroll({
        speed: 0.5,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        restartDelay: 1000,
      })
    ]
  );


  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills];

  return (
    <div className="mb-12">

      
      <div className="embla" ref={emblaRef}>
        <div className={`embla__container ${reverse ? 'row-reverse' : ''}`}>
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="embla__slide">
              <div className="flex flex-col items-center justify-center p-4">
                <div
                  className={`p-4 rounded-lg mb-2 hover:scale-110 transition-transform duration-300 ${
                    isDark ? "bg-slate-800/50" : "bg-white shadow"
                  }`}
                >
                  {skill.icon}
                </div>
                <p
                  className={`text-sm font-medium text-center ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        
        .embla__container {
          display: flex;
        }
          
        .row-reverse {
          flex-direction: row-reverse;
        }

        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
          width: 120px;
        }
        
        @media (max-width: 768px) {
          .embla__slide {
            width: 100px;
          }
        }
        
        @media (max-width: 640px) {
          .embla__slide {
            width: 90px;
          }
        }
      `}</style>
    </div>
  );
};

const Skills = () => {
  const { isDark } = useTheme();

  // Separar habilidades por categorias
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'React', icon: <FaReact size={40} className="text-blue-500" /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-600" /> },
        { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
        { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-600" /> },
        { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-400" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600" /> },
        { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-800 dark:text-gray-200" /> },
        { name: 'Python', icon: <FaPython size={40} className="text-yellow-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-800" /> },
        { name: 'Databases', icon: <FaDatabase size={40} className="text-purple-600" /> },
        { name: 'Flask', icon: <FaPython size={40} className="text-red-500" /> },
        { name: 'LangGraph', icon: <FaCode size={40} className="text-green-500" /> },
        { name: 'LangChain', icon: <FaCode size={40} className="text-blue-500" /> },
        { name: 'MCPServer', icon: <FaDatabase size={40} className="text-gray-500" /> },
        { name: 'Django', icon: <FaPython size={40} className="text-green-700" /> },
        { name: 'Sequelize', icon: <FaDatabase size={40} className="text-blue-600" /> },
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
        { name: 'Docker', icon: <FaDocker size={40} className="text-blue-500" /> },
        { name: 'VS Code', icon: <FaCode size={40} className="text-blue-500" /> },
        { name: 'Figma', icon: <FaFigma size={40} className="text-purple-500" /> },
        { name: 'GitHub', icon: <FaGitAlt size={40} className="text-black" /> },
      ]
    }
  ];

  return (
    <section
      id="skills"
      className={`py-20 transition-all duration-300 relative overflow-hidden ${
        isDark ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center mb-16 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Habilidades
        </h2>

        {skillCategories.map((category, index) => (
          <SkillCarousel
            key={index}
            skills={category.skills}
            title={category.title}
            isDark={isDark}
            reverse={!(index % 2 === 0)} // Define direção reversa para índices pares
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;