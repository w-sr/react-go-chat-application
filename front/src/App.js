import React, { useState, useEffect } from 'react';
import './App.css';
import { connect, sendMsg } from "./api"

import Header from "./components/Header"
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      setChatHistory(chatHistory.concat(msg))
    });
  }, [chatHistory])

  const send = event => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;
