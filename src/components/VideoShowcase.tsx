import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

interface VideoShowcaseProps {
  item: {
    title: string;
    description: string;
    videoUrl: string;
    roi?: string;
  };
  index: number;
}

const VideoShowcase = ({ item, index }: VideoShowcaseProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,255,255,0.2)]"
    >
      <div className="relative aspect-video bg-black/50 overflow-hidden cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={item.videoUrl}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-card">
            <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {item.roi && (
          <div className="absolute top-4 right-4 bg-brand-primary/20 border border-brand-primary text-brand-primary px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md">
            {item.roi}
          </div>
        )}
        {!isPlaying && isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
            <div className="w-16 h-16 rounded-full bg-brand-primary/20 backdrop-blur-sm flex items-center justify-center border border-brand-primary/50 text-brand-primary group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6 bg-bg-card border-t border-white/5">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default VideoShowcase;
