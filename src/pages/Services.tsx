import { motion } from "motion/react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive digital solutions ranging from marketing to advanced AI automation and web development.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {/* Digital Marketing */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Digital Marketing</span></h2>
              <p className="text-lg text-gray-400">Measurable results across industries: organic traffic, AI chatbots, sales, and brand visibility.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Social Media Management", desc: "Create content that relates and ranks well." },
                { title: "Local SEO Strategy", desc: "Attract local leads with precision." },
                { title: "Google and Meta Ads", desc: "Data-driven ads that convert immediately." },
                { title: "Analytics & Reporting", desc: "Measure success with detailed insights." }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl border-white/10 hover:border-brand-primary/30 transition-all flex justify-between items-center group cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-display font-bold mb-1 tracking-tight text-white">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Website Development */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Website Development</span></h2>
              <p className="text-lg text-gray-400">Stunning, lightning-fast digital experiences tailored to your business needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Custom Web Apps", desc: "Tailored applications for your unique business needs." },
                { title: "Responsive UI/UX", desc: "Beautiful interfaces that work flawlessly on any device." },
                { title: "E-commerce Platforms", desc: "Scalable stores designed to maximize conversions." },
                { title: "CMS Integration", desc: "Easy-to-manage content systems for your team." }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl border-white/10 hover:border-brand-primary/30 transition-all flex justify-between items-center group cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-display font-bold mb-1 tracking-tight text-white">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* AI Employees */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">AI Employees</span></h2>
              <p className="text-lg text-gray-400">Deploy intelligent, autonomous AI agents tailored to specific roles within your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Custom AI Voice Assistants", desc: "Deliver conversational voice support for seamless customer service." },
                { title: "Custom AI Agents", desc: "Automate tasks, analyze data, and build efficient workflows." },
                { title: "AI CRM Integrations", desc: "Optimize processes, personalize outreach, and streamline operations." },
                { title: "Role-Specific Agents", desc: "Pre-trained agents for specific business functions like SDRs." }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0C1510] border border-[#1a3326] p-6 rounded-2xl text-left hover:border-brand-primary/30 transition-all flex justify-between items-center group cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-display font-bold mb-1 tracking-tight text-white">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-display font-bold mb-8">Ready to transform your business?</h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-primary text-black px-10 py-4 rounded-full text-lg font-black hover:bg-white transition-all shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
