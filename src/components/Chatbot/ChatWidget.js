// src/components/ChatWidget.js
import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const chatElement = document.querySelector('langflow-chat');

    if (chatElement) {
      // chatElement.style.backgroundColor = '#98a4ff';
      chatElement.style.width = '300px';
      chatElement.style.height = '400px';
      chatElement.style.borderRadius = '8px';
      chatElement.style.padding = '10px';
    }
  }, []);

  return (
    <div className="chat-widget">
      <langflow-chat
        window_title="INFINIX FLOW"
        flow_id="95c8eb7d-5d72-4008-9758-aab9983ada00"
        host_url="http://localhost:7860"
      ></langflow-chat>
    </div>
  );
};

export default ChatWidget;
