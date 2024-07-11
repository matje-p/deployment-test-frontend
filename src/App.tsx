import React from "react";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";

const App: React.FC = () => {
  return (
    <div>
      <h1>Messages</h1>
      <MessageForm />
      <MessageList />
    </div>
  );
};

export default App;
