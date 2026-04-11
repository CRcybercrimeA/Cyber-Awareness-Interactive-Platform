import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I am SafeClick AI. How can I help you?", sender: "bot" },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };

    // Dummy AI response (upgrade later)
    const botReply = {
      text:
        input.toLowerCase().includes("phishing")
          ? "Phishing is a cyber attack where attackers trick you into revealing sensitive info."
          : "I can help you with cybersecurity questions, phishing detection, and safe browsing tips.",
      sender: "bot",
    };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.7)] z-50"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-[420px] bg-[#020617] border border-white/10 rounded-2xl shadow-lg flex flex-col overflow-hidden z-50">

          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center gap-2">
            <MessageCircle className="text-cyan-400" />
            <h3 className="font-semibold">SafeClick AI</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-cyan-500 text-black ml-auto"
                    : "bg-white/10 text-gray-300"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 p-2 rounded-lg bg-black/40 border border-white/10 outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="bg-cyan-400 p-2 rounded-lg text-black"
            >
              <Send size={16} />
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot;