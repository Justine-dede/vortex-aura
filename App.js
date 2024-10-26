// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import About from './components/Accueil/About';
import Chatbot from './components/Chatbot/Chatbot';
import RegisterForm from './components/Authentification/register';
import LoginForm from './components/Authentification/login';
import { Helmet } from "react-helmet";

function Navigation() {
  const location = useLocation();
  
  if (location.pathname === '/chatbot') {
    return null;
  }
  
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/login">Connexion</Link></li>
          <li><Link to="/register">Inscription</Link></li>
          {/* <li><Link to="/about">À Propos</Link></li> Lien vers la page À propos */}
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>Vortex Aura</title>
      </Helmet>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<About />} /> {/* Route pour la page À propos */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
