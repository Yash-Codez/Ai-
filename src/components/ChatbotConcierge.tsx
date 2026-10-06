import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Instagram, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const ChatbotConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chatSession, setChatSession] = useState<any>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your AI concierge.", isBot: true },
    { text: "Want to know how much time we can save your enterprise? Ask me a question or send me a message!", isBot: true }
  ]);

  // Initialize Gemini Chat on mount
  useEffect(() => {
    // You must set VITE_GEMINI_API_KEY in your .env file
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (apiKey) {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: "You are a helpful AI concierge for AI Innovator7, an agency that builds enterprise AI tools to save time and automate workflows. Keep answers brief (1-3 sentences max). If a user asks a question, answer it. If they seem interested in a service, ask for their email or phone number so a specialist can reach out with a custom ROI plan. If they provide contact info, thank them enthusiastically and say the team will reach out soon, and remind them they can always use the WhatsApp button below for immediate help."
      });
      
      const session = model.startChat({
        history: [],
      });
      setChatSession(session);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const currentInput = inputText;
    setMessages(prev => [...prev, { text: currentInput, isBot: false }]);
    setInputText("");
    
    if (!chatSession) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I'm currently running in demo mode (API key missing). To get the fastest response, please click the 'Chat on WhatsApp' button below!", 
          isBot: true 
        }]);
      }, 1000);
      return;
    }

    setIsTyping(true);
    try {
      const result = await chatSession.sendMessage(currentInput);
      const responseText = result.response.text();
      setMessages(prev => [...prev, { text: responseText, isBot: true }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble connecting right now. Please use the WhatsApp button below to reach us!", 
        isBot: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 flex-col gap-4 z-50 items-center ${isOpen ? 'hidden' : 'flex'}`}>
        <a 
          href="mailto:aiinnovator7.in@gmail.com"
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform shadow-lg"
          title="Email Us"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/aiinnovator7/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
          title="Follow on Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
          title="Chat with AI Concierge"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#128C7E] p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-200 animate-pulse"></div>
                <span className="font-bold text-white text-sm">AI Agent Live</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 min-h-[200px] max-h-[300px]">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[80%] rounded-xl p-3 text-sm ${msg.isBot ? 'bg-white/10 text-gray-200 self-start rounded-tl-none' : 'bg-[#25D366] text-black font-medium self-end rounded-tr-none'}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input / WhatsApp Redirect */}
            <div className="p-4 border-t border-white/5 bg-bg-dark flex flex-col gap-3">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#25D366] transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="bg-[#25D366] text-black p-2 rounded-lg hover:bg-[#128C7E] hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <a 
                href="https://wa.me/918957821289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-[#25D366]/50 text-white py-2 rounded-lg flex justify-center items-center gap-2 font-bold hover:bg-[#25D366] transition-colors text-sm"
              >
                <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotConcierge;
