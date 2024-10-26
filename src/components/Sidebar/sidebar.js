import React, { useState, useEffect } from 'react';
import logo from './../../images/logo.png';
import axios from 'axios';
import newConv from './../../images/new-conv.png'; // Chemin relatif vers l'image
import './sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, token, onSelectConversation, onCreateNewConversation, onConversationClick }) => {

  
  const [discussions, setDiscussions] = useState([]);

  const handleLoadConversations = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/conversations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onConversationClick(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des conversations:', error);
    }
  };

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/discussions', {
          headers: {
            Authorization: `Bearer ${token}`
          }
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
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button className="new-conversation-btn" onClick={onCreateNewConversation}>
        <img src={newConv} alt="Nouvelle discussion" className="icon-img" />
      </button>
      <button className="close-open" onClick={toggleSidebar}>☰</button>
      <div className="logo">
        <img src={ logo } alt="Logo"/>
      </div>
      <h2>HISTORIQUES</h2>
      {/* <h2 className='historique'></h2> */}
      <ul className="conversation-list">
        {discussions.map((discussion, index) => (
          <li key={index} onClick={() => onSelectConversation(discussion.date)}>
            <strong>{new Date(discussion.date).toLocaleDateString()}</strong> {/* Affiche la date formatée */}
            <ul>
              {discussion.messages.map((messagePair, msgIndex) => (
                <li key={msgIndex}>
                  <span><strong>Message:</strong>{messagePair[0]}</span><br />
                  <span><strong>Réponse:</strong>{messagePair[1].slice(0, 30)}...</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
