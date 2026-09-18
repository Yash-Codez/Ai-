import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-[110]">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            <Cpu className="w-5 h-5 text-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">AI Innovator7</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors">Services</Link>
          <Link to="/portfolio" className="text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors">Portfolio</Link>
          <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors">Contact</Link>
          <Link to="/contact" className="bg-brand-primary text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-[110] p-2 text-white min-h-[48px] min-w-[48px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-bg-dark/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold hover:text-brand-primary transition-colors">Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold hover:text-brand-primary transition-colors">Services</Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold hover:text-brand-primary transition-colors">Portfolio</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold hover:text-brand-primary transition-colors">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold hover:text-brand-primary transition-colors">Contact</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 bg-brand-primary text-black px-10 py-5 rounded-full text-xl font-black shadow-[0_0_30px_rgba(0,255,255,0.4)]">
                Book a Call
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
