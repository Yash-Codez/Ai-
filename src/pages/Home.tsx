import { motion } from "motion/react";
import { Zap, ArrowRight, Bot, Cpu, BarChart3, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import VideoShowcase from "../components/VideoShowcase";
import TestimonialSlider from "../components/TestimonialSlider";
import InteractiveAvatar from "../components/InteractiveAvatar";
import ScrollTextReveal from "../components/ScrollTextReveal";
import FadeUpReveal from "../components/FadeUpReveal";

const previewPortfolioItems = [
  {
    title: "WhatsApp AI Appointment Bot",
    description: "Fully automated booking system directly within WhatsApp.",
    videoUrl: "/appointment bot.mp4",
    roi: "+200% Booking Rate",
  },
  {
    title: "AI Chatbot for E-commerce",
    description: "Automated customer support saving 40 hours a week.",
    videoUrl: "/chatbot.mp4",
    roi: "-40 Hrs/Wk Support",
  },
  {
    title: "n8n Lead Generator Workflow",
    description: "Automated lead scraping, qualification, and CRM entry using n8n.",
    videoUrl: "/lead agent.mp4",
    roi: "+35% Lead Conversion",
  },
  {
    title: "AI Product Video Generator",
    description: "Automatically pulls products from your e-commerce site and generates high-converting AI videos.",
    videoUrl: "/ai video generator.mp4",
    roi: "-90% Content Cost",
  }
];



const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="relative pt-8 md:pt-16 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-4 h-4" /> Enterprise AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
              AI That Actually <br className="hidden md:block" />
              <span className="brand-gradient-text">Moves The Needle</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
              We define what's worth building, build it for you, then train your people to make it stick. Stop paying to experiment. Start paying for results.
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
            <InteractiveAvatar />
          </motion.div>
        </div>
      </section>

      {/* Scroll Reveal Text */}
      <ScrollTextReveal blocks={[
        {
          text: "You bought the AI tools. Read the case studies. Attended the webinars.",
          className: "text-3xl md:text-5xl lg:text-6xl text-white"
        },
        {
          text: "But months later, the tools sit unused. The pilots never scaled. And nobody can explain what ROI actually looks like.",
          className: "text-3xl md:text-5xl lg:text-6xl text-white"
        }
      ]} />

      {/* Why We Built It Section (Sticky) */}
      <section className="relative h-[200vh] w-full bg-black border-t border-white/5">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6">
          {/* Subtle green gradient and grid like the image */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

          <FadeUpReveal className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-gray-300 tracking-tight max-w-6xl">
            That's why we built <span className="text-emerald-400 font-medium">AI Innovator7.</span> <span className="text-white font-bold ml-2">AI that actually moves the needle.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed font-light">
            AI Innovator7 defines what's worth building, builds it for you, then trains your people to make it stick.
          </p>
            
            <p className="text-xl md:text-2xl text-gray-300 mt-4 font-light">
              Stop paying to experiment. <span className="text-white font-bold">Start paying for results.</span>
            </p>
            
            <Link to="/contact" className="mt-12 bg-white text-black font-bold uppercase tracking-[0.2em] text-sm md:text-base px-10 py-5 hover:bg-gray-200 transition-colors flex items-center gap-3 rounded shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:scale-105 duration-300">
              GET IN TOUCH <ChevronRight className="w-5 h-5" />
            </Link>
          </FadeUpReveal>
        </div>
      </section>

      {/* Trusted By Banner */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Trusted by Innovative Enterprises</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            <div className="flex items-center gap-2 text-xl font-bold font-display"><Bot className="w-8 h-8" /> TechFlow</div>
            <div className="flex items-center gap-2 text-xl font-bold font-display"><Cpu className="w-8 h-8" /> OmniSystems</div>
            <div className="flex items-center gap-2 text-xl font-bold font-display"><BarChart3 className="w-8 h-8" /> RealEstatePro</div>
            <div className="flex items-center gap-2 text-xl font-bold font-display"><Zap className="w-8 h-8" /> ScaleUp SaaS</div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { label: "Client Revenue Generated", value: "$10M+" },
              { label: "Hours Saved Weekly", value: "40,000+" },
              { label: "Enterprise Clients", value: "150+" }
            ].map((stat, i) => (
              <FadeUpReveal key={i} delay={i * 0.2}>
                <h3 className="text-6xl font-display font-bold text-white mb-3 tracking-tighter">{stat.value}</h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </FadeUpReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Transform</span> Your Business</h2>
          <p className="text-xl text-gray-400">A proven, linear process from audit to adoption.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Identify",
              desc: "We start by understanding how your team actually works - where time is lost, what slows things down, and finding the 5% of opportunities worth building."
            },
            {
              step: "02",
              title: "Develop",
              desc: "Once we know what matters, we move quickly. We develop solutions that fit seamlessly into your existing systems, working exactly as they should from day one."
            },
            {
              step: "03",
              title: "Adopt",
              desc: "Then we make it real. We work side by side with your teams - training and fine-tuning. By the time we step back, it's just how work gets done."
            }
          ].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 rounded-3xl border-white/10 relative overflow-hidden group hover:border-brand-primary/30 transition-all"
            >
              <div className="text-8xl font-bold font-display text-white/5 absolute -top-4 -right-4 group-hover:text-brand-primary/10 transition-colors">{s.step}</div>
              <h3 className="text-2xl font-display font-bold mb-4 tracking-tight text-white relative z-10">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Work</span></h2>
          <p className="text-xl text-gray-400">Watch our 30-second showcases to see AI in action.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewPortfolioItems.map((item, index) => (
            <VideoShowcase key={index} item={item} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/portfolio" className="inline-block border border-brand-primary text-brand-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-brand-primary hover:text-black transition-all">
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Success Stories</span></h2>
        </div>
        <TestimonialSlider />
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
