import { motion } from "motion/react";
import { Bot, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AiEmployees = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <Clock className="w-5 h-5" /> Coming Soon
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            The Future of Work: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Autonomous AI Employees</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Imagine a digital workforce that operates 24/7, never takes a vacation, and integrates seamlessly with your existing software stack. We are building the next generation of autonomous business agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 rounded-3xl border-white/10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Role-Specific Agents</h3>
            <p className="text-gray-400 leading-relaxed">
              From SDRs that book meetings to Customer Support Reps that resolve tickets, these agents are pre-trained for specific business functions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-10 rounded-3xl border-white/10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Flawless Execution</h3>
            <p className="text-gray-400 leading-relaxed">
              No human error, no delays. AI employees connect directly to your CRM, ERP, and communication channels to execute complex multi-step workflows.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-10 rounded-3xl border-white/10 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure & Compliant</h3>
            <p className="text-gray-400 leading-relaxed">
              Enterprise-grade security built into every agent. Complete audit trails, access controls, and data privacy compliance out of the box.
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-8">Want to be the first to know when our AI Employees platform launches?</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(52,211,153,0.4)]">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AiEmployees;
