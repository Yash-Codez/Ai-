import { motion } from "motion/react";
import { Zap, ArrowRight, Bot, Cpu, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AgentGraph = () => {
  return (
    <div className="relative w-full aspect-square max-w-[300px] md:max-w-[500px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central Node */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-brand-primary/20 border border-brand-primary flex items-center justify-center z-10 shadow-[0_0_40px_rgba(0,255,255,0.2)]"
        >
          <Cpu className="w-8 h-8 md:w-12 md:h-12 text-brand-primary" />
        </motion.div>

        {/* Orbiting Nodes */}
        {[Bot, Zap, BarChart3, Users].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: 360,
              transition: { duration: 15 + i * 2, repeat: Infinity, ease: "linear" }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div 
              style={{ x: window.innerWidth < 768 ? 80 : 140 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md"
            >
              <Icon className="w-4 h-4 md:w-6 md:h-6 text-brand-primary" />
            </motion.div>
          </motion.div>
        ))}

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <circle cx="50%" cy="50%" r={window.innerWidth < 768 ? 80 : 140} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className="text-brand-primary" />
        </svg>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="relative pt-32 md:pt-48 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-4 h-4" /> The Future of Work is Here
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tighter">
              We Build AI Agents <br />
              <span className="brand-gradient-text">That Replace 70% of Your Work</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
              AI Innovator7 builds autonomous systems that handle operations, sales, and support while you focus on high-level strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-brand-primary text-black px-8 py-4 rounded-full text-lg font-black hover:bg-white transition-all shadow-[0_0_30px_rgba(0,255,255,0.3)] min-h-[56px] flex items-center justify-center">
                Book a Call
              </Link>
              <Link to="/services" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all min-h-[56px] flex items-center justify-center">
                See How It Works
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full"
          >
            <AgentGraph />
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { label: "AI Systems Built", value: "50+" },
              { label: "Clients Served", value: "100+" },
              { label: "Tasks Automated", value: "1M+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-6xl font-display font-bold text-white mb-3 tracking-tighter">{stat.value}</h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Scale?</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Book a free 15-minute consultation to see how AI can transform your operations.</p>
        <Link to="/contact" className="inline-block bg-brand-primary text-black px-12 py-6 rounded-full text-2xl font-black hover:bg-white transition-all shadow-[0_0_50px_rgba(0,255,255,0.4)] min-h-[64px]">
          Book My Free Audit
        </Link>
      </section>
    </motion.div>
  );
};

export default Home;
