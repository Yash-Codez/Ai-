import { motion } from "motion/react";
import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi AI Innovator7! My name is ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918957821289?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Ready to automate your business? Let's talk about your next project.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="glass-card p-10 rounded-[3rem] border-white/10 flex flex-col gap-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-bold">aiinnovator7.in@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-bold">8957821289</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-xl font-bold">Bangalore, India</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[3rem] border-white/10 bg-brand-primary/5">
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-brand-primary" /> Instant Support
              </h3>
              <p className="text-gray-400 mb-6 font-medium">Need a quick answer? Chat with us directly on WhatsApp for instant support.</p>
              <a 
                href="https://wa.me/918957821289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-primary text-black px-8 py-4 rounded-full text-lg font-black hover:bg-white transition-all shadow-xl shadow-brand-primary/20"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 md:p-12 rounded-[3rem] border-white/10 flex flex-col gap-8">
              <div className="text-left">
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3 ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all min-h-[56px]"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="text-left">
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all min-h-[56px]"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="text-left">
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3 ml-2">Your Message</label>
                <textarea 
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-primary text-black py-6 rounded-2xl text-xl font-black hover:bg-white transition-all shadow-xl shadow-brand-primary/20 min-h-[64px] flex items-center justify-center gap-3"
              >
                Send Message <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
