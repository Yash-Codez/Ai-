import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

const InteractiveAvatar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    
    // Calculate angle and distance
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(rect.width / 4, Math.hypot(deltaX, deltaY) / 10);

    setEyePosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
  }, [mousePosition]);

  return (
    <div className="relative w-full flex items-center justify-center py-10">
      {/* Robot Head */}
      <div 
        ref={containerRef}
        className="relative w-32 h-32 md:w-48 md:h-48 bg-bg-card border-4 border-brand-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden"
      >
        {/* Visor */}
        <div className="absolute w-[60%] h-[25%] bg-black rounded-full flex items-center justify-center px-2 overflow-hidden border border-white/10 shadow-inner">
          {/* Glowing Eyes that move */}
          <motion.div 
            className="flex gap-4"
            animate={{ x: eyePosition.x, y: eyePosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-4 h-8 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
            <div className="w-4 h-8 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Speech Bubble / Tooltip */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-0 right-10 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm px-3 py-2 rounded-2xl rounded-bl-none shadow-xl hidden md:block"
      >
        I'm watching!
      </motion.div>
    </div>
  );
};

export default InteractiveAvatar;
