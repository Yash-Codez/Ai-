import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Search, Palette, Layers, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

const KDPAgents = () => {
  const [formData, setFormData] = useState({ title: "", email: "", mobile: "" });
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    { label: "Strategist Agent finding keywords...", icon: <Search className="w-5 h-5" /> },
    { label: "Illustrator Agent drawing sketches...", icon: <Palette className="w-5 h-5" /> },
    { label: "Layout Agent formatting PDF...", icon: <Layers className="w-5 h-5" /> }
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.email || !formData.mobile) return;
    
    setIsGenerating(true);
    setStep(0);
    
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= 2) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
            setShowSuccess(true);
            // WhatsApp Redirect Logic
            const message = `Hi AI Innovator7! I just generated a KDP book titled "${formData.title}". My email is ${formData.email} and mobile is ${formData.mobile}. I'd like to discuss the next steps!`;
            const whatsappUrl = `https://wa.me/918957821289?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
          }, 2000);
          return 2;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const pricing = [
    { name: "Single", price: "$9", features: ["1 KDP Book Interior", "Basic Keyword Research", "PDF Format"] },
    { name: "7-Day Sprint", price: "$49", features: ["7 KDP Book Interiors", "Advanced Niche Analysis", "A+ Content Strategy", "Priority Support"], popular: true },
    { name: "Monthly Publisher Pro", price: "$199", features: ["30 KDP Book Interiors", "Full Store Management", "Ads Management", "Dedicated Account Manager"] }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">KDP Agent Playground</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Experience the power of multi-agent orchestration for your KDP business.</p>
        </div>

        {/* Playground Form */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            {!isGenerating && !showSuccess ? (
              <form onSubmit={handleGenerate} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3 ml-2">Book Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Space Adventures"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all min-h-[56px]"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3 ml-2">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all min-h-[56px]"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="text-left">
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-3 ml-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-brand-primary transition-all min-h-[56px]"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-primary text-black py-6 rounded-2xl text-xl font-black hover:bg-white transition-all shadow-xl shadow-brand-primary/20 min-h-[64px]"
                >
                  Generate Free Book
                </button>
              </form>
            ) : isGenerating ? (
              <div className="py-12">
                <div className="flex flex-col items-center gap-10">
                  <div className="w-24 h-24 rounded-full border-4 border-brand-primary/20 border-t-brand-primary animate-spin" />
                  <div className="space-y-8 w-full max-w-md">
                    {steps.map((s, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: step >= i ? 1 : 0.3,
                          x: step >= i ? 0 : -20,
                          color: step === i ? "#00FFFF" : "#9ca3af"
                        }}
                        className="flex items-center gap-6 text-xl font-bold"
                      >
                        <div className={`p-3 rounded-xl ${step === i ? "bg-brand-primary/20 text-brand-primary" : "bg-white/5"}`}>
                          {step > i ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : s.icon}
                        </div>
                        {s.label}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-4xl font-display font-bold mb-6">Success!</h3>
                <p className="text-xl text-gray-400 mb-10">Your KDP book interior has been generated. Redirecting you to WhatsApp to claim your free copy...</p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all"
                >
                  Generate Another
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Pricing Tiers</h2>
          <p className="text-xl text-gray-400">Choose the plan that fits your publishing scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 rounded-[2.5rem] flex flex-col border-white/10 relative ${plan.popular ? "border-brand-primary/50 shadow-[0_0_40px_rgba(0,255,255,0.1)]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-4">{plan.name}</h3>
              <div className="text-5xl font-black mb-8">{plan.price}</div>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl text-center font-black transition-all min-h-[56px] flex items-center justify-center ${plan.popular ? "bg-brand-primary text-black hover:bg-white" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default KDPAgents;
