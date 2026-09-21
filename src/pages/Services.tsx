import { motion } from "motion/react";
import { Search, Code2, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const steps = [
    {
      id: "01",
      title: "Identify",
      icon: <Search className="w-10 h-10" />,
      subtitle: "Finding the 5% that matters.",
      desc: "Every project starts with clarity. We start by understanding how your team actually works - where time is being lost, what slows things down, and why work piles up. From there, we find the opportunities worth building.",
      features: ["Workflow Audits", "Bottleneck Analysis", "Feasibility Studies", "ROI Projections"]
    },
    {
      id: "02",
      title: "Develop",
      icon: <Code2 className="w-10 h-10" />,
      subtitle: "Building the right way.",
      desc: "Once we know what matters, we move quickly and get to the building. Our team plans and develops solutions that fit seamlessly into your existing systems - built the right way, so they work exactly as they should from day one.",
      features: ["Custom LLM Fine-tuning", "Agentic Workflows", "CRM Integrations", "Secure Data Pipelines"]
    },
    {
      id: "03",
      title: "Adopt",
      icon: <Users className="w-10 h-10" />,
      subtitle: "Making it stick.",
      desc: "Then we make it real. We work side by side with your teams - training, fine-tuning, and helping them integrate your new systems into their everyday work. By the time we step back, it's not a project anymore - it's just how work gets done.",
      features: ["Team Training", "Performance Monitoring", "Iterative Refinements", "24/7 SLA Support"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tighter">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We don't just sell software. We are workflow specialists first, AI specialists second. Here is how we transform your business.
            </p>
          </motion.div>
        </div>

        <div className="space-y-0 relative">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-12 md:gap-24 items-start relative min-h-[120vh] pt-32"
            >
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:order-last' : 'md:order-first'} sticky top-40 h-fit z-10 hidden md:flex justify-center`}>
                <div className="relative w-full aspect-square max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-gray-500/20 rounded-full blur-3xl mix-blend-screen opacity-50"></div>
                  <div className="absolute inset-4 glass-card rounded-[3rem] flex items-center justify-center border-white/10 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent"></div>
                    <div className="text-brand-primary scale-150 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      {s.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:order-first' : 'md:order-last'} pb-32`}>
                <div className="md:hidden relative w-full aspect-square max-w-xs mx-auto mb-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-gray-500/20 rounded-full blur-3xl mix-blend-screen opacity-50"></div>
                  <div className="absolute inset-4 glass-card rounded-3xl flex items-center justify-center border-white/10 overflow-hidden shadow-2xl">
                    <div className="text-brand-primary scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      {s.icon}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-4 text-brand-primary font-bold tracking-widest uppercase mb-6">
                  <span className="text-sm bg-brand-primary/10 px-4 py-1 rounded-full border border-brand-primary/20 text-white">Step {s.id}</span>
                  {s.subtitle}
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight leading-tight">{s.title}</h2>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">{s.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-4 text-gray-300 font-medium bg-white/5 px-6 py-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      <span className="text-lg">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-40 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready for the 5% that matters?</h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-primary text-black px-10 py-5 rounded-full text-xl font-black hover:bg-white transition-all shadow-[0_0_40px_rgba(0,255,255,0.3)]">
            Start Your Audit <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
