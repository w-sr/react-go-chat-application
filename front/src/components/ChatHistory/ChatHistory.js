import React from 'react';
import "./ChatHistory.scss";

const ChatHistory = (props) => {

  const messages = props.chatHistory.map((msg, index) => {
    return (
      <p key={index}>{msg.data}</p>
    )
  });

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  )
}

export default ChatHistory;