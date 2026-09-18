import { motion } from "motion/react";
import { Bot, Zap, Cpu, Layers, CheckCircle2, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Agentic Workflows",
      icon: <Bot className="w-8 h-8" />,
      desc: "Autonomous agents that handle complex business logic without human intervention.",
      features: ["Self-correcting loops", "Multi-agent collaboration", "24/7 autonomous operation"]
    },
    {
      title: "WhatsApp AI Chatbot",
      icon: <Layers className="w-8 h-8" />,
      desc: "Fully automated appointment booking system integrated directly into WhatsApp.",
      features: ["24/7 Appointment Booking", "Natural language processing", "Calendar sync integration"]
    },
    {
      title: "CRM Integration",
      icon: <Zap className="w-8 h-8" />,
      desc: "Connect your CRM with AI to automate lead qualification and follow-ups.",
      features: ["GoHighLevel integration", "Automated lead scoring", "Smart follow-up sequences"]
    },
    {
      title: "Custom LLMs",
      icon: <Cpu className="w-8 h-8" />,
      desc: "Train AI models on your proprietary business data for expert-level insights.",
      features: ["Private data fine-tuning", "Custom RAG pipelines", "Internal knowledge base"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Specialized AI solutions to help your business scale faster and smarter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] border-white/10 hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 text-brand-primary group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">{s.desc}</p>
              <ul className="space-y-4">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
