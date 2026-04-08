import { motion } from "motion/react";
import { Bot, Zap, Database, ArrowRight } from "lucide-react";

export default function AgencyHome() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Custom AI Agents",
      description: "We build tailored LLM-powered agents that handle customer support, sales outreach, and complex reasoning tasks 24/7."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Eliminate manual data entry. We seamlessly connect your software stack and automate repetitive administrative processes."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "RAG & Data Engineering",
      description: "We turn your company's private messy data into highly intelligent, instantly searchable AI knowledge bases."
    }
  ];

  const portfolio = [
    {
      title: "KDP Publishing Swarm",
      category: "Content Automation",
      stat: "10x Faster Generation",
      image: "bg-gradient-to-br from-emerald-500/20 to-teal-900/40 border-emerald-500/30"
    },
    {
      title: "Enterprise Sales SDR",
      category: "Voice & Chatbots",
      stat: "+34% Conversion Rate",
      image: "bg-gradient-to-br from-blue-500/20 to-indigo-900/40 border-blue-500/30"
    },
    {
      title: "Legal Contract Analyzer",
      category: "Document Processing",
      stat: "99.8% Accuracy",
      image: "bg-gradient-to-br from-purple-500/20 to-fuchsia-900/40 border-purple-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#00FFFF] selection:text-black pt-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FFFF]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#00FFFF] font-bold text-sm uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFFF]"></span>
              </span>
              AI Integrations for Scale
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter leading-[1.1]">
              Automate the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-blue-500">
                Impossible.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              AI Innovator7 is an elite automation agency. We build bespoke AI systems that replace repetitive tasks and infinitely scale your revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.open(`https://wa.me/918957821289?text=${encodeURIComponent("Hi! I'm interested in working with your AI Automation Agency.")}`, "_blank")} 
                className="px-10 py-5 rounded-2xl bg-[#00FFFF] text-black font-black text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:shadow-[0_0_60px_rgba(0,255,255,0.4)] hover:scale-105"
              >
                Book a Free Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 border-t border-white/5 relative z-10 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-400">Everything you need to modernize your company.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#00FFFF]/50 transition-all group hover:-translate-y-2 cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00FFFF] mb-8 group-hover:scale-110 group-hover:bg-[#00FFFF]/20 transition-all shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-xl text-gray-400">Systems we've physically engineered in production.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`w-full aspect-[4/3] rounded-[2rem] ${item.image} border flex items-center justify-center p-8 group-hover:border-white/50 transition-all relative overflow-hidden mb-6 shadow-2xl`}>
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
                   <div className="relative z-10 text-center">
                     <div className="inline-block px-5 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-bold text-white shadow-xl group-hover:scale-110 transition-transform">
                       {item.stat}
                     </div>
                   </div>
                </div>
                <div>
                  <div className="text-[#00FFFF] text-sm font-bold uppercase tracking-widest mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00FFFF] transition-all flex items-center justify-between">
                    {item.title}
                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern High-Ticket CTA */}
      <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00FFFF]/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center bg-black/40 backdrop-blur-xl p-12 md:p-24 rounded-[3rem] border border-[#00FFFF]/20 relative z-10 shadow-[0_0_100px_rgba(0,255,255,0.05)]">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to scale?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop wasting time on manual operational tasks. Let's build a custom AI solution that does exactly what you need.
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/918957821289?text=${encodeURIComponent("I'm ready to schedule my Agency Strategy Call.")}`, "_blank")} 
            className="px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-[#00FFFF] hover:scale-105 transition-all shadow-xl"
          >
            Schedule Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
}
