import React, { useState, useEffect } from 'react';
import axios from 'axios';
import charger from './../../images/charger.png'; // Chemin relatif vers l'image
import './Header.css';

const Header = ({ onConversationClick, token }) => {
  const [discussions, setDiscussions] = useState([]);

  const handleLoadConversations = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/conversations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onConversationClick(response.data); // Appelle la fonction avec les données récupérées
    } catch (error) {
      console.error('Erreur lors de la récupération des conversations:', error);
    }
  };

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/discussions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDiscussions(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des discussions:', error);
      }
    };

    if (token) {
      fetchDiscussions();
    }
  }, [token]);

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <button onClick={handleLoadConversations} className="charger">
              <img src={charger} alt="charger les discussions" className="icon-img" />
            </button>
          </li>
          <li><a href="http://localhost:3000/">Accueil</a></li>
          <li><a href="http://localhost:3000/login">Connexion</a></li>
          <li><a href="http://localhost:3000/About">A propos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
