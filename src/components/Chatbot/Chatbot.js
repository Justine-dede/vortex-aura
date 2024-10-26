import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import Sidebar from '../Sidebar/sidebar'
import Header from '../Chatbot/Header'; // Importation du header

import axios from 'axios';
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [token, setToken] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentConversationId, setCurrentConversationId] = useState(null)

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const messagesKey = `messages_${storedUsername}`;
  
    const storedMessages = localStorage.getItem(messagesKey);
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  
    const storedPassword = localStorage.getItem('password');
  
    const fetchToken = async () => {
      if (storedUsername && storedPassword) {
        try {
          const response = await axios.post('http://127.0.0.1:8000/token', {
            username: storedUsername,
            password: storedPassword
          });
          setToken(response.data.access_token);
        } catch (error) {
          console.error('Erreur lors de la récupération du token:', error);
        }
      }
    };
  
    fetchToken();
  }, []);
  
  const handleSendMessage = async (message) => {
    if (!token) {
      console.error('Token is not available yet');
      return;
    }
  
    const storedUsername = localStorage.getItem('username');
    const messagesKey = `messages_${storedUsername}`;
  
    const updatedMessages = [
      ...messages,
      { text: message, sender: 'user' },
    ];
    setMessages(updatedMessages);
    localStorage.setItem(messagesKey, JSON.stringify(updatedMessages));
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/chatbot', 
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const botResponse = response.data.response;
  
      const newMessages = [
        ...updatedMessages,
        { text: botResponse, sender: 'bot' },
      ];
      setMessages(newMessages);
      localStorage.setItem(messagesKey, JSON.stringify(newMessages));
    } catch (error) {
      console.error('Erreur lors de la communication avec le chatbot:', error.response ? error.response.data : error);
      const errorMessages = [
        ...updatedMessages,
        { text: "Erreur lors de la récupération de la réponse. Veuillez réessayer.", sender: 'bot' },
      ];
      setMessages(errorMessages);
      localStorage.setItem(messagesKey, JSON.stringify(errorMessages));
    }
  };
  

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCreateNewConversation = () => {
    setMessages([]);
    setCurrentConversationId(null); // Nouvelle discussion sans ID
  };

  const handleConversationClick = (conversation) => {
    const formattedMessages = conversation.map((item) => [
      { text: item.message, sender: 'user' },
      { text: item.response, sender: 'bot' },
    ]).flat();
    setMessages(formattedMessages);
  };

  const handleDiscussionClick = (messages) => {
    const formattedMessages = messages.map(([userMsg, botResponse]) => [
      { text: userMsg, sender: 'user' },
      { text: botResponse, sender: 'bot' },
    ]).flat();
    setMessages(formattedMessages);
  };

  return (
    <div className={`chatbot-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Header 
        token={token}
        onConversationClick={handleConversationClick} 
        /> 
        
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        token={token}
        onSelectConversation={setCurrentConversationId}
        onCreateNewConversation={handleCreateNewConversation}
        onConversationClick={handleConversationClick} 
        onDiscussionClick={handleDiscussionClick}
      />
      
      <button className="close-open" onClick={toggleSidebar}>
        ☰
      </button>

      <div className="chatbot">
        <MessageList messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
        <div className="header"></div>
      </div>
    </div>
  );
};

export default Chatbot;





