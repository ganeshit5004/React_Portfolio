import React, { useEffect, useRef, useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const API_URL = "https://ai-chatbot-gnur.onrender.com/api/v1/chat";

const AiAssistant = ({ open, setOpen }) => {
  const [input, setInput] = useState("");
  const [chainId, setChainId] = useState(null);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const id = sessionStorage.getItem("chain_id");
    const history = sessionStorage.getItem("chat_history");

    if (id && history) {
      setChainId(id);
      setMessages(JSON.parse(history));
    } else startNewChat();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startNewChat = () => {
    const newId = Date.now().toString();
    const greeting = [{ from: "bot", text: "👋 Hi! I’m Ganesh's AI assistant. Ask me about his projects or experience." }];
    setChainId(newId);
    setMessages(greeting);
    sessionStorage.setItem("chain_id", newId);
    sessionStorage.setItem("chat_history", JSON.stringify(greeting));
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    sessionStorage.setItem("chat_history", JSON.stringify(updated));

    const res = await axios.post(API_URL, {
      message: input,
      chain_id: chainId,
      new_chat: false
    });

    const botMsg = { from: "bot", text: res.data.response || "Sorry, I couldn't understand that." };
    const finalChat = [...updated, botMsg];
    setMessages(finalChat);
    sessionStorage.setItem("chat_history", JSON.stringify(finalChat));
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full shadow-xl z-50 hover:scale-105"
        >
          <FaRobot size={22} className="text-white" />
        </button>
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-1/4 bg-[#0f0f0f] border-l border-white/10 z-40 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-[#1a1a1a] border-b border-white/10">
          <span className="font-semibold text-white">Ganesh AI Assistant</span>
          <FaTimes onClick={() => setOpen(false)} className="cursor-pointer text-gray-400 hover:text-white"/>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 text-sm">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`px-4 py-3 rounded-2xl max-w-[85%] whitespace-pre-wrap break-words ${
                  m.from === "user"
                    ? "bg-cyan-600 text-white rounded-br-none"
                    : "bg-[#1f1f1f] text-gray-200 rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-[#1a1a1a]">
          <div className="flex items-center bg-black/40 rounded-xl px-3">
            <input
              className="flex-1 bg-transparent text-white outline-none py-3 text-sm"
              placeholder="Message Ganesh AI..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="text-cyan-400 hover:text-cyan-300">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAssistant;
