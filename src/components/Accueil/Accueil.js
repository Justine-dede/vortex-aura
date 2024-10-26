// import React, { useState } from 'react';
import '../../App.css';
import './Accueil.css';
import React from 'react';
import ChatWidget from '../Chatbot/ChatWidget';

// Importation des images
import facebook from './../../images/facebook.png'
import gmail from './../../images/gmail.png'
import linkedin from './../../images/linkedin.png'
import logoInfinix from './../../images/logoInfinix.png'
import logoIpnet from './../../images/logoIpnet.png'
import logo from './../../images/logo.png'

function Accueil() {

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

export default Accueil;
