import { motion } from "motion/react";
import VideoShowcase from "../components/VideoShowcase";

const portfolioItems = [
  {
    title: "WhatsApp AI Appointment Bot",
    description: "Fully automated booking system directly within WhatsApp.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    roi: "+200% Booking Rate",
  },
  {
    title: "AI Chatbot for E-commerce",
    description: "Automated customer support saving 40 hours a week.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    roi: "-40 Hrs/Wk Support",
  },
  {
    title: "n8n Lead Generator Workflow",
    description: "Automated lead scraping, qualification, and CRM entry using n8n.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    roi: "+35% Lead Conversion",
  },
  {
    title: "AI Product Video Generator",
    description: "Automatically pulls products from your e-commerce site and generates high-converting AI videos.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    roi: "-90% Content Cost",
  }
];

const Portfolio = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore our latest AI automation projects. Watch our 30-second showcases to see the impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <VideoShowcase key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
