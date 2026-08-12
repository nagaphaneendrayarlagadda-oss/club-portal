import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBox from "../components/ChatBox";
import Message from "../components/Message";
import chatService from "../services/chatService";

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      sender: "Assistant",
      message: "Welcome to the club chat. Ask anything about events, members, or club operations.",
      source: "AI Assistant",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "You",
      message: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const { response } = await chatService.sendMessage(userMessage.message);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "Assistant",
          message: response,
          source: "AI Response",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "Assistant",
          message: "Sorry, something went wrong while sending your message. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="chat-shell">
          <div className="chat-panel">
            <div className="chat-header">
              <div>
                <p className="text-slate-400 uppercase tracking-[0.22em] text-xs mb-2">Club communication</p>
                <h1 className="text-3xl font-semibold">Live member chat</h1>
                <p className="text-slate-400 mt-2">A polished message board for members and club support.</p>
              </div>
              <span className="status-pill">Active</span>
            </div>

            <div className="chat-list">
              {messages.map((item) => (
                <Message key={item.id} sender={item.sender} message={item.message} source={item.source} />
              ))}
            </div>

            <div className="chat-footer">
              <ChatBox
                value={inputValue}
                onChange={(value) => setInputValue(value)}
                onSend={sendMessage}
                loading={loading}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Chat;