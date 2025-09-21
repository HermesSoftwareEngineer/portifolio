import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="contact" className={`min-h-screen py-20 transition-all duration-300 relative ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contato</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className={`text-center p-4 rounded-lg ${isDark ? 'bg-slate-900/60' : 'bg-white shadow'}`}>
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className={isDark ? 'text-blue-300' : 'text-blue-600'}>hermes@example.com</p>
            </div>
            <div className={`text-center p-4 rounded-lg ${isDark ? 'bg-slate-900/60' : 'bg-white shadow'}`}>
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className={isDark ? 'text-green-300' : 'text-green-600'}>linkedin.com/in/hermes</p>
            </div>
          </div>
          <form className={`space-y-6 rounded-lg p-6 ${isDark ? 'bg-slate-900/60' : 'bg-white shadow'}`}>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;