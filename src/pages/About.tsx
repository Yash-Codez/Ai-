import { motion } from "motion/react";
import { Cpu, Zap, Bot, Users, BarChart3, Rocket } from "lucide-react";

const About = () => {
  const values = [
    { icon: <Cpu />, title: "Innovation", desc: "We push the boundaries of what's possible with AI agents." },
    { icon: <Zap />, title: "Efficiency", desc: "We focus on results that save you time and money." },
    { icon: <Users />, title: "Collaboration", desc: "We work closely with your team to build custom solutions." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">The Story of <br /><span className="brand-gradient-text">AI Innovator7</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Founded in 2024, AI Innovator7 was born from a simple realization: businesses are drowning in repetitive tasks while powerful AI tools sit idle.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              We don't just sell AI. We build autonomous systems that integrate deeply into your workflows, replacing 70% of manual work with intelligent agents that never sleep.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[3rem] border-white/10 flex items-center justify-center relative overflow-hidden"
          >
            <Rocket className="w-48 h-48 text-brand-primary opacity-20 absolute -bottom-10 -right-10 rotate-12" />
            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div className="p-8 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 text-center">
                <div className="text-4xl font-black text-brand-primary mb-2">50+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Agents Built</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl font-black text-white mb-2">100+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Clients</div>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Automation</div>
              </div>
              <div className="p-8 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 text-center">
                <div className="text-4xl font-black text-brand-primary mb-2">1M+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Tasks Done</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] border-white/10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-8 text-brand-primary">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
