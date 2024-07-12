import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
function Chat({ socket, username, room }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  
  const text = async () => {
    if (message !== "") {
      const messageDetails = {
        room: room,
        author: username,
        message: message,
      };

      await socket.emit("send", messageDetails);
      setMessageList((list) => [...list, messageDetails]);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive", (data) => {
      setMessageList((list) => [...list, data]);
    });
    
  }, [socket]);

  return (
    
    <div >
      <div className="messageBox">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="foot">
        <input
          type="text"
          value={message}
          placeholder="Send Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && text();
          }}
        />
        <button onClick={text}>send</button>
      </div>
    </div>
  );
}

export default Chat;