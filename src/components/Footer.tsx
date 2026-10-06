import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-bg-dark relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="AI Innovator7 Logo" className="h-16 w-auto object-contain rounded-md" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Replacing manual work with intelligent AI agents. The future of business automation starts here. We build systems that never sleep so your team can focus on what matters.
          </p>
          <div className="flex gap-3 mt-2">
            {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Quick Links Column */}
        <div className="md:col-span-3 lg:col-span-4 lg:pl-12">
          <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link></li>
            <li><Link to="/ai-employees" className="hover:text-brand-primary transition-colors">AI Employees</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 lg:col-span-4">
          <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-primary shrink-0" />
              <a href="mailto:aiinnovator7.in@gmail.com" className="hover:text-brand-primary transition-colors">aiinnovator7.in@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-primary shrink-0" />
              <a href="tel:+918957821289" className="hover:text-brand-primary transition-colors">+91 8957821289</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
              <span>Bangalore, India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs font-medium">
          © {new Date().getFullYear()} AI Innovator7. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-500 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
