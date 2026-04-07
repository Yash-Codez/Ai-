import { Link } from "react-router-dom";
import { Cpu, Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-bg-dark/80 backdrop-blur-md relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            <Cpu className="w-5 h-5 text-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">AI Innovator7</span>
        </div>
        <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
          Replacing manual work with intelligent AI agents. The future of business automation.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm font-bold uppercase tracking-widest">
        <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
        <Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link>
        <Link to="/kdp-agents" className="hover:text-brand-primary transition-colors">KDP Agents</Link>
        <Link to="/about" className="hover:text-brand-primary transition-colors">About</Link>
        <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
      </div>

      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex gap-4">
          {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 AI Innovator7</p>
      </div>
    </div>
  </footer>
);

export default Footer;
