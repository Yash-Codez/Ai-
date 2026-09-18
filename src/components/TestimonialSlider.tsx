import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    text: "AI Innovator7 transformed our customer service. Their AI chatbots handle 80% of our queries automatically, saving us thousands weekly.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Director of Operations, RealEstatePro",
    text: "The lead qualification automation they built is incredible. We close deals 3x faster now that our agents only talk to warm leads.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Emma Davis",
    role: "Founder, ScaleUp E-com",
    text: "Within 30 days, their AI workflow automations completely removed our manual data entry processes. True game changers.",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-20">
      <div className="absolute top-10 left-10 opacity-20">
        <Quote className="w-24 h-24 text-brand-primary" />
      </div>
      
      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-center"
          >
            <div className="bg-bg-card border border-white/5 p-8 md:p-12 rounded-2xl shadow-2xl">
              <p className="text-xl md:text-2xl font-medium text-gray-200 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full border-2 border-brand-primary"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                    {testimonials[currentIndex].name}
                    <ShieldCheck className="w-5 h-5 text-brand-primary" />
                  </h4>
                  <span className="text-gray-400 text-sm">{testimonials[currentIndex].role}</span>
                  <div className="text-xs text-brand-primary mt-1 font-bold tracking-wider uppercase">Verified Enterprise Client</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={prev}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-all text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-all text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
