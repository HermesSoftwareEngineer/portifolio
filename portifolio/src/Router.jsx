import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import NavBar from './components/NavBar';

// Importar páginas
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';

// Componente principal do Router
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            {/* Rota principal - Landing Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Página 404 para rotas não encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
