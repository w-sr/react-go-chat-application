import React, { useState, useEffect } from 'react';
import './App.css';
import { connect, sendMsg } from "./api"

import Header from "./components/Header"
import ChatHistory from "./components/ChatHistory";

function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      setChatHistory(
        ...chatHistory, [msg]
      )
    });
  }, [chatHistory])

  const send = () => {
    sendMsg("hello");
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
