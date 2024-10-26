import React from 'react';

const Message = ({ text, sender }) => (
  <div className={`message ${sender}`}>
    {/* <p>{text}</p> */}
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

export default Message;
