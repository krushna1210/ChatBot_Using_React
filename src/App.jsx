import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);

  const generateBotResponse = async (history) => {
    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      ...history.map(({ role, text }) => ({
        role: role === "user" ? "user" : "assistant",
        content: text,
      })),
    ];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages,
        temperature: 0.7,
        stream: false,
      }),
    };

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "Something went wrong!");

      const botReply = data?.choices?.[0]?.message?.content || "⚠️ No response";

      setChatHistory((prev) => {
        const newHistory = [...prev];
        let idx = -1;
        for (let i = newHistory.length - 1; i >= 0; i--) {
          if (newHistory[i].role === "model" && newHistory[i].text === "Thinking...") {
            idx = i;
            break;
          }
        }
        if (idx !== -1) {
          newHistory[idx] = { role: "model", text: botReply };
        } else {
          newHistory.push({ role: "model", text: botReply });
        }
        return newHistory;
      });
    } catch (error) {
      console.log(error);
      setChatHistory((prev) => {
        const newHistory = [...prev];
        let idx = -1;
        for (let i = newHistory.length - 1; i >= 0; i--) {
          if (newHistory[i].role === "model" && newHistory[i].text === "Thinking...") {
            idx = i;
            break;
          }
        }
        const errMsg = "❌ Error fetching response";
        if (idx !== -1) newHistory[idx] = { role: "model", text: errMsg };
        else newHistory.push({ role: "model", text: errMsg });
        return newHistory;
      });
    }
  };

  useEffect(() => {
    // Auto-scroll whenever chat history updates
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      {/* Chatbot Toggler */}
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        {showChatbot ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">mode_comment</span>
        )}
      </button>

      {/* Chatbot Popup */}
      <div className="chatbot-popup">
        {/* ChatBot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button onClick={() => setShowChatbot((prev) => !prev)}className="material-symbols-outlined" aria-label="minimize">
            keyboard_arrow_down
          </button>
        </div>

        {/* ChatBot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋
              <br /> How can I help you today?
            </p>
          </div>

          {/* Render chat history */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* ChatBot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
