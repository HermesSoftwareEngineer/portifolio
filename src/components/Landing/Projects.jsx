import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const listaProjetos = [
  {
    id: 1,
    titulo: "AuditAI",
    descricao: "O AuditAI é um sistema que integra inteligência artificial e automação para agilizar auditorias de repasses de aluguel em imobiliárias. Ele se conecta à API do software da empresa, analisa os movimentos financeiros em tempo real, identifica variações e explica mudanças de forma clara. Assim, reduz o tempo de conferência, elimina a complexidade de planilhas e aumenta a precisão na prestação de contas.",
    tituloLinks: ["Vídeo de Apresentação", "GitHub - Backend", "Github - Frontend"],
    links: ["https://www.youtube.com/@DevHermes", "https://github.com/HermesSoftwareEngineer/AuditaIA", "https://github.com/HermesSoftwareEngineer/rental-ai-audit"],
    ferramentas: ["JavaScript", "React", "TailwindCSS", "Python", "Flask", "Langgraph", "Docker", "PostgreSQL"],
    imagem: "/auditai-dash.png",
    estrelas: 5
  },
  {
    id: 2,
    titulo: "Ekklesia",
    descricao: "O Ekklesia é um sistema em desenvolvimento (atualmente com 50% concluído) voltado para a gestão de inscrições em eventos religiosos. Ele oferece painéis exclusivos tanto para participantes quanto para administradores, permitindo o gerenciamento completo de inscrições, eventos e vagas. Além disso, possibilita a criação de landing pages personalizadas para cada evento, tornando a experiência de divulgação e organização mais prática e profissional.",
    tituloLinks: ["GitHub - Frotend", "GitHub - Backend"],
    links: ["https://github.com/HermesSoftwareEngineer/ekklesia-frotend", "https://github.com/HermesSoftwareEngineer/ekklesia-backend"],
    ferramentas: ["JavaScript", "React", "TailwindCSS", "Node.js", "Express", "Sequelize", "PostgreSQL"],
    imagem: "ekklesia.jpg",
    estrelas: 5
  },
  {
    id: 3,
    titulo: "Páginas de Apresentação Profissional",
    descricao: "Desenvolvi e gerenciei Landing Pages de apresentação pessoal e profissional, garantindo design moderno e funcionalidade eficiente. Para agilizar o processo, utilizei plataformas de low-code como Lovable e Cursor, sempre realizando revisões de código para assegurar qualidade, desempenho e consistência visual em todas as páginas.",
    tituloLinks: ["LP1", "LP2"],
    links: ["https://www.oseiasmendes.com.br/", ""],
    ferramentas: ["React", "TypeScript", "JavaScript", "Vercel", "Lovable", "Cursor"],
    imagem: "landingpage.png",
    estrelas: 3
  },
  {
    id: 4,
    titulo: "Pirate Bot",
    descricao: "O Pirate Bot é um projeto experimental que integra Flask e LangChain para criar uma inteligência artificial personalizada. Desenvolvido como um laboratório de estudos, o sistema permite explorar interações com IA de forma prática, oferecendo respostas adaptadas ao usuário ou negócio. O projeto demonstra a aplicação inicial de tecnologias modernas de IA, servindo como base para futuros desenvolvimentos mais avançados e customizados.",
    tituloLinks: ["Pub. de Apresentação", "GitHub"],
    links: ["https://www.linkedin.com/posts/hermes-barbosa-78840118a_genteee-comecei-meus-estudos-de-langchain-activity-7287591520528953345-oLMf?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyN2xgBUWip8TS_RSanWkDl0idXTQknUakhttps://ecommerce.exemplo.com", "https://github.com/HermesSoftwareEngineer/PirateBot"],
    ferramentas: ["Python", "Flask", "Langchain"],
    imagem: "piratebot.png",
    estrelas: 2
  },
  {
    id: 5,
    titulo: "Flaskr",
    descricao: "O Flaskr é um projeto de blog desenvolvido com Flask. Desenvolvi ele seguindo o tutorial oficial do flask, com objetivo de consolidar conhecimentos em desenvolvimento de servidores e APIs com a ferramenta. O sistema inclui autenticação de usuários, permitindo a criação, edição e atualização de postagens, oferecendo uma experiência prática com gerenciamento de conteúdos e segurança básica. Este projeto serviu como base para expandir habilidades em Python e Flask, preparando o terreno para aplicações mais complexas em áreas como inteligência artificial e análise de dados.",
    tituloLinks: ["Pub. de Apresentação", "GitHub", "Tutorial"],
    links: ["https://www.linkedin.com/posts/hermes-barbosa-78840118a_explorando-o-flask-na-pr%C3%A1tica-fala-activity-7286089948447870976-dWqd?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyN2xgBUWip8TS_RSanWkDl0idXTQknUak", "https://github.com/HermesSoftwareEngineer/tutorial_flask", "https://flask.palletsprojects.com/en/stable/tutorial/"],
    ferramentas: ["Python", "Flask", "CSS"],
    imagem: "flaskr.png",
    estrelas: 2
  },
  {
    id: 6,
    titulo: "Drip Store",
    descricao: "Sistema desenvolvido no curso de formação Full Stack da Digital College, em parceria com a IEL através do Projeto Geração Tech. No projeto apliquei meus conhecimentos iniciais de React e Node. Projeto realizado em equipe com os colegas do curso.",
    tituloLinks: ["GitHub - Frotend", "GitHub - Backend", "Figma"],
    links: ["https://github.com/HermesSoftwareEngineer/drip_store", "https://github.com/HermesSoftwareEngineer/back-end-drip-store", "https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30"],
    ferramentas: ["JavaScript", "React", "Tailwindcss", "Node", "Sequelize"],
    imagem: "dripstore.png",
    estrelas: 2
  },
  {
    id: 7,
    titulo: "To do List",
    descricao: "A Task List é uma aplicação web desenvolvida com React e Tailwind CSS, criada com o objetivo de aplicar e consolidar conhecimentos recém-adquiridos em React. O sistema permite adicionar, concluir e remover tarefas do dia a dia de forma prática, com persistência de dados no navegador através do localStorage, garantindo que as tarefas permaneçam salvas entre visitas. O projeto serviu como exercício para explorar conceitos fundamentais de React, como gerenciamento de estado e renderização dinâmica.",
    tituloLinks: ["Demo", "Pub. de Apresentação", "GitHub"],
    links: ["https://task-list-peach-nu.vercel.app/", "https://www.linkedin.com/posts/hermes-barbosa-78840118a_novo-projeto-task-list-uma-aplica%C3%A7%C3%A3o-activity-7258083124599812096-mGDS?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyN2xgBUWip8TS_RSanWkDl0idXTQknUak", "https://github.com/HermesSoftwareEngineer/to_do_list"],
    ferramentas: ["React", "Vercel"],
    imagem: "to_do_list.jpg",
    estrelas: 1
  },
  {
    id: 8,
    titulo: "My First Landing Page",
    descricao: "O MyFirstLandingPage é meu primeiro projeto de Landing Page, desenvolvido durante o curso de Desenvolvimento Web Full Stack da Digital College. Criado como exercício prático para aplicar conceitos básicos de HTML e CSS, o projeto permitiu consolidar fundamentos do desenvolvimento web e aprimorar habilidades em design e estruturação de páginas. Essa experiência marcou o início da minha jornada prática na criação de interfaces web interativas e funcionais.",
    tituloLinks: ["Demo", "Pub. de Apresentação", "GitHub"],
    links: ["https://my-first-landing-page-hazel.vercel.app/", "https://www.linkedin.com/posts/hermes-barbosa-78840118a_mais-uma-conquista-no-desenvolvimento-activity-7225673155460161536-adMI?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyN2xgBUWip8TS_RSanWkDl0idXTQknUak", "https://github.com/HermesSoftwareEngineer/MyFirstLandingPage"],
    ferramentas: ["HTML", "CSS"],
    imagem: "myfirstlp.png",
    estrelas: 2
  },
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
                <div className="mb-4">
                  {Array.from({ length: projeto.estrelas }).map((_, index) => (
                    <span key={index} className={`text-yellow-500 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.ferramentas.map((ferramenta, index) => (
                    <span 
                      key={index}
                      className={`text-sm px-2 py-1 rounded-md font-medium transition-all duration-200 ${getToolStyles(ferramenta, isDark)}`}
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

// Função aprimorada para definir estilos personalizados para cada ferramenta
const getToolStyles = (tool, isDark) => {
  const toolStyles = {
    // React e frontend
    'React': isDark ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-300',
    'React Native': isDark ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-300',
    'TailwindCSS': isDark ? 'bg-teal-900/40 text-teal-300 border border-teal-700' : 'bg-teal-100 text-teal-700 border border-teal-300',
    'Tailwindcss': isDark ? 'bg-teal-900/40 text-teal-300 border border-teal-700' : 'bg-teal-100 text-teal-700 border border-teal-300',
    'CSS': isDark ? 'bg-sky-900/40 text-sky-300 border border-sky-700' : 'bg-sky-100 text-sky-700 border border-sky-300',
    'HTML': isDark ? 'bg-orange-900/40 text-orange-300 border border-orange-700' : 'bg-orange-100 text-orange-700 border border-orange-300',
    
    // Backend
    'Node.js': isDark ? 'bg-green-900/40 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-300',
    'Node': isDark ? 'bg-green-900/40 text-green-300 border border-green-700' : 'bg-green-100 text-green-700 border border-green-300',
    'Express': isDark ? 'bg-gray-800/40 text-gray-300 border border-gray-700' : 'bg-gray-200 text-gray-700 border border-gray-400',
    'Flask': isDark ? 'bg-gray-800/40 text-gray-300 border border-gray-700' : 'bg-gray-200 text-gray-700 border border-gray-400',
    
    // Dados
    'MongoDB': isDark ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-700' : 'bg-emerald-100 text-emerald-700 border border-emerald-300',
    'PostgreSQL': isDark ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-700 border border-indigo-300',
    'Sequelize': isDark ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-700 border border-indigo-300',
    
    // Linguagens
    'JavaScript': isDark ? 'bg-yellow-900/40 text-yellow-300 border border-yellow-700' : 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    'TypeScript': isDark ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-300',
    'Python': isDark ? 'bg-yellow-900/40 text-yellow-300 border border-yellow-700' : 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    
    // IA e ferramentas avançadas
    'Langchain': isDark ? 'bg-purple-900/40 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-300',
    'Langgraph': isDark ? 'bg-purple-900/40 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-300',
    'Docker': isDark ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700 border border-blue-300',
    
    // Plataformas e ferramentas
    'Vercel': isDark ? 'bg-gray-800/40 text-gray-300 border border-gray-700' : 'bg-gray-200 text-gray-800 border border-gray-400',
    'Lovable': isDark ? 'bg-pink-900/40 text-pink-300 border border-pink-700' : 'bg-pink-100 text-pink-700 border border-pink-300',
    'Cursor': isDark ? 'bg-violet-900/40 text-violet-300 border border-violet-700' : 'bg-violet-100 text-violet-700 border border-violet-300',
    'Stripe': isDark ? 'bg-purple-900/40 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700 border border-purple-300',
  };
  
  return toolStyles[tool] || (isDark ? 'bg-slate-800/40 text-slate-300 border border-slate-700' : 'bg-slate-200 text-slate-700 border border-slate-400');
};

export default Projects;