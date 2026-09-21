import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

export interface TextBlockData {
  text: string;
  className?: string;
}

interface ScrollTextRevealProps {
  blocks: TextBlockData[];
}

const TextBlock = ({ block, index, blocksLength, scrollYProgress }: { block: TextBlockData, index: number, blocksLength: number, scrollYProgress: MotionValue<number> }) => {
  const totalSteps = blocksLength + 1; 

  // Create a continuous active index from 0 to totalSteps
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, totalSteps]);
  
  // Cap the index so the last block stays stuck during the padding step
  const effectiveIndex = useTransform(rawIndex, v => Math.min(v, blocksLength - 1));

  const distance = useTransform(effectiveIndex, v => v - index);

  const opacity = useTransform(
    distance,
    [-2, -1, 0, 0.8, 1],
    [0, 0, 1, 0, 0]
  );

  const scale = useTransform(
    distance,
    [-2, -1, 0, 1, 2],
    [0.8, 0.8, 1, 0.8, 0.6]
  );

  const y = useTransform(
    distance,
    [-2, -1, 0, 1, 2],
    [160, 80, 0, -80, -160]
  );

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center px-6"
    >
      <p className={`max-w-5xl mx-auto text-center font-display font-medium leading-tight py-4 ${block.className || "text-3xl md:text-5xl lg:text-6xl text-white"}`}>
        {block.text}
      </p>
    </motion.div>
  );
};

const ScrollTextReveal = ({ blocks }: ScrollTextRevealProps) => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={container} style={{ height: `${(blocks.length + 1) * 100}vh` }} className="relative bg-black w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black relative">
        {blocks.map((block, index) => (
          <TextBlock 
            key={index} 
            block={block} 
            index={index} 
            blocksLength={blocks.length} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollTextReveal;
