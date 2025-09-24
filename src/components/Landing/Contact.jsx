import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaEnvelope, FaYoutube, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { isDark } = useTheme();
  
  const contactInfo = [
    { 
      icon: <FaEnvelope className="w-6 h-6" />, 
      title: 'Email', 
      value: 'dev.hbp@gmail.com', 
      link: 'mailto:dev.hbp@gmail.com',
      color: 'blue'
    },
    { 
      icon: <FaYoutube className="w-6 h-6" />, 
      title: 'YouTube', 
      value: '@DevHermes', 
      link: 'https://www.youtube.com/@DevHermes',
      color: 'red'
    },
    { 
      icon: <FaInstagram className="w-6 h-6" />, 
      title: 'Instagram', 
      value: '@hermess.dev', 
      link: 'https://www.instagram.com/hermess.dev/',
      color: 'pink'
    },
    { 
      icon: <FaGithub className="w-6 h-6" />, 
      title: 'GitHub', 
      value: 'HermesSoftwareEngineer', 
      link: 'https://github.com/HermesSoftwareEngineer/',
      color: 'purple'
    },
    { 
      icon: <FaLinkedin className="w-6 h-6" />, 
      title: 'LinkedIn', 
      value: 'Hermes Barbosa | Dev Full Stack', 
      link: 'https://www.linkedin.com/in/hermes-barbosa-78840118a/',
      color: 'indigo'
    },
    { 
      icon: <FaWhatsapp className="w-6 h-6" />, 
      title: 'WhatsApp', 
      value: '+55 (85) 99668-8778', 
      link: 'https://wa.me/5585996688778',
      color: 'green'
    },
  ];
  
  return (
    <section id="contact" className={`min-h-screen py-20 transition-all duration-300 relative ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contato</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <a 
                key={index} 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-105 ${
                  isDark ? 'bg-slate-900/60 hover:bg-slate-800/80' : 'bg-white shadow hover:shadow-md'
                }`}
              >
                <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-${contact.color}-500/20`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className={`text-${contact.color}-${isDark ? '400' : '600'}`}>{contact.value}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-4 text-center">
            <a 
              href="https://wa.me/5585996688778?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-white transition-all ${
                isDark 
                  ? 'bg-green-600 hover:bg-green-500' 
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              <FaWhatsapp className="mr-2 h-6 w-6" />
              Iniciar conversa no WhatsApp
            </a>
          </div>

          {/* <form className={`space-y-6 rounded-lg p-6 ${isDark ? 'bg-slate-900/60' : 'bg-white shadow'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-center">Ou envie uma mensagem</h3>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Nome</label>
              <input 
                type="text" 
                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  isDark 
                    ? 'bg-slate-800 border border-slate-700 text-white' 
                    : 'bg-white border border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Email</label>
              <input 
                type="email" 
                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  isDark 
                    ? 'bg-slate-800 border border-slate-700 text-white' 
                    : 'bg-white border border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Mensagem</label>
              <textarea 
                rows="4" 
                className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
                  isDark 
                    ? 'bg-slate-800 border border-slate-700 text-white' 
                    : 'bg-white border border-gray-300 text-gray-900'
                }`}
              ></textarea>
            </div>
            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              isDark 
                ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                : 'bg-blue-700 hover:bg-blue-800 text-white'
            }`}>
              Enviar Mensagem
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;