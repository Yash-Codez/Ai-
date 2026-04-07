import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import KDPAgents from "./pages/KDPAgents";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Scene3D from "./components/Scene3D";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-primary/30 overflow-x-hidden">
        <Scene3D />
        <Navbar />
        <main className="relative z-10">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/kdp-agents" element={<KDPAgents />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
