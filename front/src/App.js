import React, { useState, useEffect } from 'react';
import './App.css';
import { connect, sendMsg } from "./api"

import Header from "./components/Header"
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

function App() {

  const [userName, setUserName] = useState('');
  const [err, setErrors] = useState('')
  const [join, setJoin] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      setChatHistory(chatHistory.concat(msg))
    });
  }, [chatHistory])

  const send = event => {
    if (event.keyCode === 13) {
      sendMsg(JSON.stringify({
        userName,
        value: event.target.value
      }));
      event.target.value = "";
    }
  }

  const handleChange = e => {
    setUserName(e.target.value)
    window.localStorage.setItem('userName', e.target.value)
  }

  const joinRoom = () => {
    if (userName === '') {
      setErrors('Input Username!')
    } else {
      setJoin(true)
    }
  }

  return (
    <div className="container">
      {!join ? (
        <div className="join-form">
          <div className="user-input">
            <label htmlFor="username">User Name</label>
            <input type="text" className="form-control" id="username" placeholder="username" onChange={handleChange} value={userName} />
          </div>
          {err ? (<span>{err}</span>) : ('')}
          <button className="btn btn-primary" onClick={joinRoom}>Join to Chat Room</button>
        </div>
      ) : (
        <>
          <Header />
          <ChatHistory chatHistory={chatHistory} />
          <ChatInput send={send} />
        </>
      )}
    </div>
  );
}

export default App;
