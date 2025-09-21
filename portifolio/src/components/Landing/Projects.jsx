import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const listaProjetos = [
  {
    id: 1,
    titulo: "Sistema de Gestão",
    descricao: "Aplicação web para gerenciamento de tarefas e recursos empresariais",
    tituloLinks: ["Demo", "GitHub"],
    links: ["https://demo.exemplo.com", "https://github.com/seu-usuario/projeto1"],
    ferramentas: ["React", "Node.js", "MongoDB"],
    imagem: ""
  },
  {
    id: 2,
    titulo: "E-commerce App",
    descricao: "Plataforma de comércio eletrônico com carrinho de compras e pagamentos",
    tituloLinks: ["Demo", "GitHub"],
    links: ["https://ecommerce.exemplo.com", "https://github.com/seu-usuario/ecommerce"],
    ferramentas: ["React", "Express", "PostgreSQL", "Stripe"],
    imagem: ""
  },
  {
    id: 3,
    titulo: "Portfolio Pessoal",
    descricao: "Site responsivo para apresentação de projetos e habilidades",
    tituloLinks: ["Live", "Código"],
    links: ["https://portfolio.exemplo.com", "https://github.com/seu-usuario/portfolio"],
    ferramentas: ["React", "Tailwind CSS", "Vite"],
    imagem: ""
  },
  {
    id: 4,
    titulo: "Aplicativo de Finanças",
    descricao: "Aplicativo para controle de despesas e planejamento financeiro",
    tituloLinks: ["Demo", "Repositório"],
    links: ["https://financas.exemplo.com", "https://github.com/seu-usuario/finances-app"],
    ferramentas: ["React Native", "Firebase", "Redux"],
    imagem: ""
  },
  {
    id: 5,
    titulo: "API de Serviços",
    descricao: "Backend robusto para gerenciamento de usuários e recursos",
    tituloLinks: ["Documentação", "GitHub"],
    links: ["https://api.exemplo.com/docs", "https://github.com/seu-usuario/api-services"],
    ferramentas: ["Node.js", "Express", "MongoDB", "JWT"],
    imagem: ""
  },
  {
    id: 6,
    titulo: "Dashboard Analytics",
    descricao: "Interface de visualização de dados com gráficos interativos",
    tituloLinks: ["Demo", "Código Fonte"],
    links: ["https://dashboard.exemplo.com", "https://github.com/seu-usuario/dashboard"],
    ferramentas: ["React", "D3.js", "Material UI", "GraphQL"],
    imagem: ""
  }
];

const Projects = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="projects" className={`min-h-screen py-20 transition-all duration-300 relative ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaProjetos.map((projeto) => (
            <div key={projeto.id} className={`rounded-lg overflow-hidden transition-shadow ${isDark 
              ? 'bg-slate-900/60 shadow-blue-900/20 hover:shadow-blue-800/30' 
              : 'bg-white shadow-md hover:shadow-lg'}`
            }>
              {projeto.imagem ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={projeto.imagem} 
                    alt={projeto.titulo} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : (
                <div className={`h-48 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              )}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{projeto.titulo}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {projeto.descricao}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.ferramentas.map((ferramenta, index) => (
                    <span 
                      key={index}
                      className={`text-sm px-2 py-1 rounded ${
                        isDark 
                          ? `bg-${getColorForTool(ferramenta)}-900/60 text-${getColorForTool(ferramenta)}-100` 
                          : `bg-${getColorForTool(ferramenta)}-100 text-${getColorForTool(ferramenta)}-800`
                      }`}
                    >
                      {ferramenta}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {projeto.tituloLinks.map((titulo, index) => (
                    <a 
                      key={index}
                      href={projeto.links[index]} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${isDark 
                        ? index === 0 ? 'text-blue-400' : 'text-gray-300' 
                        : index === 0 ? 'text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      {titulo}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Função para definir cores diferentes para cada ferramenta
const getColorForTool = (tool) => {
  const toolColors = {
    'React': 'blue',
    'React Native': 'blue',
    'Node.js': 'green',
    'Node': 'green',
    'Express': 'gray',
    'MongoDB': 'green',
    'PostgreSQL': 'indigo',
    'Firebase': 'yellow',
    'Redux': 'purple',
    'JavaScript': 'yellow',
    'TypeScript': 'blue',
    'Tailwind CSS': 'teal',
    'Material UI': 'blue',
    'D3.js': 'orange',
    'GraphQL': 'pink',
    'JWT': 'red',
    'Stripe': 'purple',
    'Vite': 'purple'
  };
  
  return toolColors[tool] || 'gray';
};

export default Projects;