// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import './components/Accueil/Accueil.css';
import About from './components/Accueil/About';
import Chatbot from './components/Chatbot/Chatbot';
import RegisterForm from './components/Authentification/register';
import LoginForm from './components/Authentification/login';
import { Helmet } from "react-helmet";

import React from 'react';
import ChatWidget from './components/Chatbot/ChatWidget';

// Importation des images
import facebook from './images/facebook.png'
import gmail from './images/gmail.png'
import linkedin from './images/linkedin.png'
import logoInfinix from './images/logoInfinix.png'
import logoIpnet from './images/logoIpnet.png'
import logo from './images/logo.png'

function Accueil1() {

  return (
     <div className='Accueil'>
      <div className='Body'>
        <div className='Logo'>
          <ChatWidget/>
          <h2>
            INFINIX VIRTUAL ASSITANT NAVIGATOR
          </h2>
        </div>
        <div className='Text'>
          <h2>
            Avec IVAN, tout devient plus simple !
          </h2>
          <p>
            IVAN, l'assistant virtuel d'INFINIX, est conçu pour vous offrir des informations complètes et actualisées. IVAN est votre guide fiable pour une expérience utilisateur réussie !
          </p>
          
        </div>
        <div className='Boutons'>
          <nav>
            <ul>
              <a href="/login" className="chat">Parler au chat</a>
              <a href="https://wa.me/message/NN7S7ES26GV4D1" className='serviceCom'>Contacter le service commercial</a>
            </ul>
          </nav>
        </div>
        <div>

        </div>
        
      </div>
      <div className='Foooter'>
        <Footer />
      </div>
    </div>
  );
}

// Footer de la page
function Footer() {
  return (
    <div className='footer-container'>
    <footer className="footer">
      <div className="footer-section">
          <img src={logo} alt="Logo" className='ivan'/>
          <p></p>
          <p>L'information désormais à portée de main.</p>
          <p></p>
          <div className="logo1">
          <img src={logoInfinix} alt="Logo" className='logoInfinix'/>
          <img src={logoIpnet} alt="Logo"/>
        </div>     
      </div>

      <div className="footer-section">
        CONTACT
        <p>E-mail : ivan.chatbotsc@gmail.com </p>
          <p>Contact :  +228 93 81 59 82 
            <br/> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+228 92 63 01 36 
            <br/> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+228 70 93 37 22
          </p>
        <p>LinkedIn :</p>
        <div className='logoContact'>
          <a href='mailto:ivan.chatbotsc@gmail.com'><img src={gmail} alt="Logo" className='gmail'/></a>
          <img src= {facebook} alt="Logo" className='facebook'/>
          <a src='https://www.canva.com/design/DAGUnqS47HU/view'>
            <img src={linkedin} alt="Logo" className='linkedin'/>
          </a>
        </div>
      </div>

      <div className="footer-section">
        <div className='footNav'>
          <a href="/about">A PROPOS</a> <br/>
          <a href="/login">CONNEXION</a> <br/>
          <a href="/register">INSCRIPTION</a><br/>
          <a href="/">ACCUEIL</a> <br/>
          <a href="/chatbot">CHATBOT</a>
        </div>
      </div>

    </footer>
    <p>IVAN pour une révolution à IPNET © Edéda Eunice Zaria. Tous Droits réservés.</p>

      </div>
  );
}


function Navigation() {
  const location = useLocation();
  
  if (location.pathname === '/chatbot') {
    return null;
  }
  
  return (
    <>
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/login">Chatbot</Link></li>
          <li><Link to="/login">Connexion</Link></li>
          <li><Link to="/register">Inscription</Link></li>
          {/* <li><Link to="/about">À Propos</Link></li> Lien vers la page À propos */}
        </ul>
      </nav>
    </header>
    </>
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
    {/* <Accueil1 /> */}
    </>
  );
}

export default App;
