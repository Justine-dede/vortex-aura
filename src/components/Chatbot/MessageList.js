import React, { useEffect } from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  
  useEffect(() => {
    const typingEffectElement = document.querySelector('.typing-effect');

    if (typingEffectElement) {
      typingEffectElement.addEventListener('animationend', function (e) {
        if (e.animationName === 'typing' || e.animationName === 'deleteText') {
          this.style.animation = 'none';
          void this.offsetWidth; // Déclenche un reflow
          this.style.animation = `
            typing 5s steps(30) forwards,
            blink 0.75s step-end infinite,
            deleteText 3s steps(30) 7s forwards,
            typing 5s steps(30) 10s forwards
          `;
        }
      });
    }

    return () => {
      if (typingEffectElement) {
        typingEffectElement.removeEventListener('animationend', () => {});
      }
    };
  }, []);

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div class="typing-container"><p className="typing-effect">Comment puis-je vous aider aujourd'hui ?</p></div> 
      ) : (
        messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))
      )}
    </div>
  );
};

export default MessageList;
