import React, { useState, useEffect } from "react";
import "./Message.scss";

const Message = (props) => {

  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    setUserName(window.localStorage.getItem('userName'));
    let temp = JSON.parse(props.message);
    let msg = JSON.parse(temp.body)

    setName(msg.userName)
    setMessage(msg.value)
  }, []);

  return (
    <div className="Message">
      {(userName === name) ? (
        <div className="self">
          <div className="msg-area-1">
            {message}
          </div>
          <div className="icon-1">
            {name && name[0].toUpperCase()}
          </div>
        </div>
      ) : (
        <div className="other">
          <div className="icon-2">
            {name && name[0].toUpperCase()}
          </div>
          <div className="msg-area-2">
            {message}
          </div>
        </div>
      )}
    </div>
  )
}

export default Message;