import React from "react";
import "./ChatInput.scss";

import source from './send.jpeg'

const ChatInput = (props) => {
  return (
    <div className="ChatInput">
      <input onKeyDown={props.send} />
      <img src={source} onClick={props.send} />
    </div>
  )
}

export default ChatInput;