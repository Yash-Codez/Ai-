import { motion } from "motion/react";
import { 
  Bot, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  MessageSquare, 
  Search, 
  Cpu, 
  TrendingUp,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Scene3D from "./Scene3D";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
          <Cpu className="w-5 h-5 text-white" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-white">AI Innovator7</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</Link>
        <Link to="/services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</Link>
        <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</Link>
        <Link to="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</Link>
      </div>
      <Link to="/contact" className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-colors">
        Book Free Consultation
      </Link>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-10 leading-[1.05] gradient-text tracking-tighter">
          We Build AI Agents That <br />
          <span className="brand-gradient-text">Replace 70% of Your Work</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
          AI Innovator7 helps businesses automate operations and scale faster using intelligent systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/contact" className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-brand-primary/30 hover:scale-105 active:scale-95">
            Book Free Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://wa.me/918957821289" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
            <MessageCircle className="w-6 h-6 text-green-400" /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {[
          { icon: <Zap className="w-6 h-6 text-red-400" />, text: "Wasting time on repetitive work" },
          { icon: <TrendingUp className="w-6 h-6 text-orange-400" />, text: "No ROI from AI tools" },
          { icon: <Users className="w-6 h-6 text-blue-400" />, text: "Manual operations slowing growth" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl flex flex-col items-center gap-6 text-center border-white/10 hover:border-white/20 transition-all hover:translate-y-[-8px] group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
              {item.icon}
            </div>
            <p className="text-lg font-semibold text-gray-300">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Trust = () => (
  <section id="about" className="py-24 border-y border-white/5 bg-bg-dark/30 backdrop-blur-sm">
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
);

const Services = () => (
  <section id="services" className="py-40 px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl mb-8 font-display font-bold tracking-tight">Our Services</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">Specialized AI solutions to help your business scale faster and smarter.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "AI Agents Development",
            icon: <Bot className="w-8 h-8" />,
            description: "Custom AI agents to automate repetitive business tasks and reduce manual work"
          },
          {
            title: "AI Automation Systems",
            icon: <Zap className="w-8 h-8" />,
            description: "Automate workflows, CRM, and operations to save time and increase efficiency"
          },
          {
            title: "AI Chatbots",
            icon: <MessageSquare className="w-8 h-8" />,
            description: "24/7 customer support bots to handle queries and increase conversions"
          },
          {
            title: "AI Consulting",
            icon: <BarChart3 className="w-8 h-8" />,
            description: "Strategy and implementation to identify high-impact AI opportunities"
          }
        ].map((service, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-10 rounded-[2.5rem] border-white/10 hover:border-brand-primary/30 transition-all shadow-2xl hover:shadow-brand-primary/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 text-brand-primary shadow-inner">
              {service.icon}
            </div>
            <h3 className="text-2xl mb-6 font-display font-bold tracking-tight">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-40 px-6 bg-white/[0.01]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl mb-8 font-display font-bold tracking-tight">How We Deliver Results</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">Our structured approach ensures seamless AI integration and maximum ROI.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent -translate-y-1/2 z-0" />
        {[
          { 
            step: "01", 
            title: "Identify Opportunities", 
            desc: "We analyze your business to find the best automation use cases.",
            icon: <Search className="w-8 h-8 text-brand-primary" />
          },
          { 
            step: "02", 
            title: "Build AI Systems", 
            desc: "We develop and test custom AI solutions tailored to your needs.",
            icon: <Cpu className="w-8 h-8 text-brand-secondary" />
          },
          { 
            step: "03", 
            title: "Deploy & Scale", 
            desc: "We launch the systems and optimize them for continuous growth.",
            icon: <TrendingUp className="w-8 h-8 text-emerald-400" />
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[3rem] relative z-10 hover:border-white/20 transition-all group text-center shadow-2xl"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 mx-auto group-hover:scale-110 transition-transform shadow-xl">
              {item.icon}
            </div>
            <span className="text-sm font-black text-brand-primary mb-6 block tracking-[0.2em] uppercase">Step {item.step}</span>
            <h3 className="text-3xl mb-6 font-display font-bold tracking-tight">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="case-studies" className="py-40 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl mb-8 font-display font-bold tracking-tight">Case Studies</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">Proven results from our AI automation implementations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Customer Support",
            result: "Automated 80% of customer support using AI chatbot",
            icon: <MessageSquare className="w-10 h-10 text-brand-primary" />
          },
          {
            title: "Operations",
            result: "Saved 40+ hours per week through workflow automation",
            icon: <Zap className="w-10 h-10 text-brand-secondary" />
          },
          {
            title: "Lead Generation",
            result: "Increased lead conversion by 3x using AI agents",
            icon: <TrendingUp className="w-10 h-10 text-emerald-400" />
          }
        ].map((study, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="glass-card p-12 rounded-[3rem] text-center hover:bg-white/[0.04] transition-all shadow-2xl border-white/10"
          >
            <div className="flex justify-center mb-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">{study.icon}</div>
            <h3 className="text-2xl mb-6 font-display font-bold tracking-tight">{study.title}</h3>
            <p className="text-3xl font-black text-white tracking-tight leading-tight">{study.result}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-40 px-6 bg-white/[0.01]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl mb-8 font-display font-bold tracking-tight">Testimonials</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">What our clients say about AI Innovator7.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            name: "Ecoshack",
            role: "E-commerce Brand",
            text: "AI Innovator7 automated our customer support and saved us hours every day.",
            image: "https://i.pravatar.cc/150?u=ecoshack"
          },
          {
            name: "Neha Verma",
            role: "Marketing Agency",
            text: "The AI automation system improved our workflow and increased productivity.",
            image: "https://i.pravatar.cc/150?u=neha"
          },
          {
            name: "Amit Patel",
            role: "Startup Founder",
            text: "The AI agent helped us generate and convert more leads efficiently.",
            image: "https://i.pravatar.cc/150?u=amit"
          }
        ].map((t, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[3rem] flex flex-col justify-between shadow-2xl border-white/10"
          >
            <div>
              <p className="text-xl text-gray-300 italic mb-12 leading-relaxed font-medium">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-6">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-brand-primary/30 p-1" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-display font-bold text-xl text-white tracking-tight">{t.name}</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-48 px-6 relative overflow-hidden">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-6xl md:text-8xl mb-12 font-display font-bold tracking-tighter leading-[1.1]"
      >
        Stop Doing Manual Work. <br /><span className="brand-gradient-text">Let AI Handle It.</span>
      </motion.h2>
      <Link to="/contact" className="inline-block bg-brand-primary text-white px-14 py-6 rounded-full text-2xl font-black hover:bg-brand-primary/90 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95">
        Book Free Consultation
      </Link>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-6xl mb-10 font-display font-bold tracking-tight">Contact Us</h2>
            <p className="text-xl text-gray-400 mb-16 font-medium leading-relaxed">Ready to automate your business? Fill out the form or reach out directly.</p>
            
            <div className="space-y-10">
              <a href="https://wa.me/918957821289" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-gray-300 hover:text-green-400 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-green-400/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-2xl font-display font-bold text-white tracking-tight">+91 8957821289</p>
                </div>
              </a>

              <div className="flex items-center gap-6 text-gray-300 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-2xl font-display font-bold text-white tracking-tight">+91 8957821289</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-gray-300 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-2xl font-display font-bold text-white tracking-tight">theluckynsahu@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 rounded-[3rem] shadow-2xl border-white/10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all font-medium"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all font-medium"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Message</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all h-40 font-medium"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-6 rounded-2xl text-xl font-black hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-24 px-6 border-t border-white/5 bg-bg-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white">AI Innovator7</span>
        </div>
        <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
          AI Automation Agency helping businesses save time and scale faster using intelligent systems.
        </p>
        <div className="flex gap-5">
          {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary/20 hover:text-brand-primary transition-all shadow-md">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-display font-bold text-xl mb-8 tracking-tight">Links</h4>
        <ul className="space-y-5 text-lg text-gray-500 font-medium">
          <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-display font-bold text-xl mb-8 tracking-tight">Services</h4>
        <ul className="space-y-5 text-lg text-gray-500 font-medium">
          {["AI Agents", "Automation Systems", "AI Chatbots", "AI Consulting"].map((item) => (
            <li key={item}><a href="/services" className="hover:text-white transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-display font-bold text-xl mb-8 tracking-tight">Contact</h4>
        <ul className="space-y-5 text-lg text-gray-500 font-medium">
          <li>theluckynsahu@gmail.com</li>
          <li>+91 8957821289</li>
          <li>India</li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600 font-bold uppercase tracking-widest">
      <p>© 2026 AI Innovator7. All rights reserved.</p>
      <div className="flex gap-10">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const elementId = pathname.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-primary/30">
      <Scene3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Trust />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
