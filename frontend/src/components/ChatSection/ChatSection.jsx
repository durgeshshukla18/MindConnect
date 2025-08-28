import React, { useState } from "react";
import "./ChatSection.css";

function ChatSection() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋, I'm your AI wellness companion. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    // For MVP: mock bot reply (later connect with backend + GPT API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I hear you. Can you tell me more about that?" },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>🧘 MindConnect Chat</h2>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form className="chat-input-container" onSubmit={handleSend}>
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
  );
}

export default ChatSection;
