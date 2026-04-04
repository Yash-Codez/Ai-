import { motion } from "motion/react";
import { 
  Bot, 
  Zap, 
  BarChart3, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Database, 
  MessageSquare, 
  Search, 
  Cpu, 
  TrendingUp,
  Linkedin,
  Twitter,
  Github,
  Mail,
  ChevronRight
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
          <Cpu className="w-5 h-5 text-white" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-white">AI Innovator7</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {["Services", "Process", "Case Studies", "Testimonials"].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
        Book a Call
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-24 px-6 overflow-hidden glow-mesh">
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
          The Future of Business Efficiency
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] gradient-text">
          We Don’t Sell AI. <br />
          <span className="brand-gradient-text">We Build Systems That Replace Work.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          AI Innovator7 helps businesses automate operations, deploy AI agents, and scale faster with intelligent systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-primary/20">
            Book a Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
            See How It Works
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {[
          { icon: <Zap className="w-5 h-5 text-red-400" />, text: "AI tools not being used" },
          { icon: <TrendingUp className="w-5 h-5 text-orange-400" />, text: "No ROI from automation" },
          { icon: <Users className="w-5 h-5 text-blue-400" />, text: "Teams wasting time on repetitive work" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl flex items-center gap-4 text-left border-white/10">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <p className="text-sm font-medium text-gray-300">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Trust = () => (
  <section className="py-20 border-y border-white/5 bg-bg-dark/50">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-12">
        Trusted by Industry Leaders
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {["TECHCORP", "QUANTUM", "NEXUS", "APEX", "VELOCITY"].map((logo) => (
          <span key={logo} className="text-2xl font-display font-black tracking-tighter text-white">{logo}</span>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-center">
        {[
          { label: "AI Systems Built", value: "50+" },
          { label: "Clients Served", value: "100+" },
          { label: "Automation Tasks Completed", value: "1M+" }
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-5xl font-display font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl mb-6">How We Turn AI Into Results</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Our structured framework ensures your AI implementation is strategic, scalable, and delivers measurable ROI.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />
        {[
          { 
            step: "01", 
            title: "Identify", 
            desc: "We analyze your business workflows and find high-impact AI opportunities.",
            icon: <Search className="w-6 h-6 text-brand-primary" />
          },
          { 
            step: "02", 
            title: "Build", 
            desc: "We develop custom AI agents, automation systems, and workflows tailored to your business.",
            icon: <Cpu className="w-6 h-6 text-brand-secondary" />
          },
          { 
            step: "03", 
            title: "Scale", 
            desc: "We deploy, optimize, and train your team so AI becomes part of daily operations.",
            icon: <TrendingUp className="w-6 h-6 text-emerald-400" />
          }
        ].map((item, i) => (
          <div key={i} className="glass-card p-10 rounded-3xl relative z-10 hover:border-white/20 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-xs font-bold text-brand-primary mb-4 block tracking-widest uppercase">Step {item.step}</span>
            <h3 className="text-2xl mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-32 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-6">Our Expertise</h2>
          <p className="text-gray-400">Comprehensive AI solutions designed to transform every aspect of your business operations.</p>
        </div>
        <button className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Services <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "AI Agents Development",
            icon: <Bot className="w-6 h-6" />,
            features: ["Custom GPT agents", "Workflow automation agents", "Lead generation bots"]
          },
          {
            title: "AI Automation Systems",
            icon: <Zap className="w-6 h-6" />,
            features: ["CRM automation", "WhatsApp / chatbot automation", "Business process automation"]
          },
          {
            title: "AI Consulting",
            icon: <BarChart3 className="w-6 h-6" />,
            features: ["AI strategy", "Use case identification", "ROI planning"]
          },
          {
            title: "AI Content Creation",
            icon: <Video className="w-6 h-6" />,
            features: ["AI video generation", "Social media automation", "Content pipelines"]
          }
        ].map((service, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary">
              {service.icon}
            </div>
            <h3 className="text-xl mb-6">{service.title}</h3>
            <ul className="space-y-4">
              {service.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="case-studies" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl mb-6">Real Impact, Real Results</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">See how we've helped businesses across industries unlock new levels of efficiency with custom AI systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Customer Support Revolution",
            result: "Automated 80% of customer support using AI chatbot",
            tag: "Customer Service",
            image: "https://picsum.photos/seed/support/800/600"
          },
          {
            title: "Operational Excellence",
            result: "Saved 40+ hours/week using workflow automation",
            tag: "Operations",
            image: "https://picsum.photos/seed/ops/800/600"
          },
          {
            title: "Sales Growth Engine",
            result: "Increased lead conversion by 3x with AI agents",
            tag: "Sales & Marketing",
            image: "https://picsum.photos/seed/sales/800/600"
          }
        ].map((study, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                {study.tag}
              </span>
            </div>
            <h3 className="text-2xl mb-3 group-hover:text-brand-primary transition-colors">{study.title}</h3>
            <p className="text-gray-400 font-medium">{study.result}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-32 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl mb-6">What Our Clients Say</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here's how AI Innovator7 is changing the game for business leaders.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Jenkins",
            role: "COO at TechFlow",
            text: "AI Innovator7 didn't just give us tools; they gave us a new way of working. Our team is now focused on strategy while AI handles the rest.",
            image: "https://i.pravatar.cc/150?u=sarah"
          },
          {
            name: "Marcus Chen",
            role: "Founder of ScaleUp",
            text: "The ROI was evident within the first month. We've reduced our operational costs by 30% and improved our response times significantly.",
            image: "https://i.pravatar.cc/150?u=marcus"
          },
          {
            name: "Elena Rodriguez",
            role: "Marketing Director",
            text: "The AI content pipeline they built for us is incredible. We're producing 5x more content with the same team size. Highly recommended!",
            image: "https://i.pravatar.cc/150?u=elena"
          }
        ].map((t, i) => (
          <div key={i} className="glass-card p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Zap key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-6 relative overflow-hidden">
    <div className="absolute inset-0 glow-mesh opacity-50" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl mb-8">Stop Experimenting With AI. <br /><span className="brand-gradient-text">Start Getting Results.</span></h2>
      <p className="text-xl text-gray-400 mb-12">Join 100+ forward-thinking companies that have already automated their future.</p>
      <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-200 transition-all shadow-2xl shadow-white/10">
        Book Your Free AI Consultation
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-bg-dark">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">AI Innovator7</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Building the intelligent systems of tomorrow, today. We help businesses scale through strategic AI automation.
        </p>
        <div className="flex gap-4">
          {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Services</h4>
        <ul className="space-y-4 text-sm text-gray-500">
          {["AI Agents", "Automation Systems", "AI Consulting", "Content Pipelines"].map((item) => (
            <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm text-gray-500">
          {["About Us", "Process", "Case Studies", "Testimonials", "Contact"].map((item) => (
            <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Newsletter</h4>
        <p className="text-sm text-gray-500 mb-4">Get the latest AI automation insights delivered to your inbox.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-primary transition-colors" />
          <button className="bg-brand-primary p-2 rounded-lg hover:bg-brand-primary/80 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
      <p>© 2026 AI Innovator7. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Process />
        <Services />
        <CaseStudies />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
