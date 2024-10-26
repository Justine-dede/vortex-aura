import React, { useState } from 'react';
import frente from './../../images/frente.png';
import "./Chatbot.css";

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          className='chatInput-Bar'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tapez un message..."
        />
        <button className="chatbot-button" type="submit">
          <img src={frente} alt="Nouvelle discussion" className="icon-img" />
        </button>
      </form>
      {/* <p>Envoyez nous un mail sur <a href="mailto:ivan.chatbotsc@gmail.com">ivan.chatbotsc@gmail.com</a> pour nous faire part de vos avis.</p> */}
      <p className='warning'>IVAN est suceptible de faire des erreurs. <a href='https://wa.me/message/NN7S7ES26GV4D1' target='blanc'>Contactez un agent</a> pour la vérification des informations importantes.</p>
    </>
  );
};

export default ChatInput;
