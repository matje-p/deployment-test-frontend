import React, { useEffect, useState } from "react";
import api from "../api";

interface Message {
  _id: string;
  content: string;
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showMessages, setShowMessages] = useState<boolean>(false);

  const fetchMessages = async () => {
    const res = await api.get("/messages");
    setMessages(res.data);
    setShowMessages(true);
  };

  return (
    <div>
      <button onClick={fetchMessages}>Show Messages</button>
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
