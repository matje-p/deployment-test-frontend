import React, { useState } from "react";
import axios from "axios";

interface Message {
  _id: string;
  content: string;
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showMessages, setShowMessages] = useState<boolean>(false);

  const fetchMessages = async () => {
    const res = await axios.get("/messages");
    setMessages(res.data);
    setShowMessages(true);
  };

  return (
    <div>
      <button onClick={fetchMessages}>Retrieve messages from database</button>
      {showMessages && (
        <div>
          {messages.map((message) => (
            <div key={message._id}>{message.content}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageList;
