import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeUpRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeUpReveal = ({ children, className = "", delay = 0 }: FadeUpRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpReveal;
