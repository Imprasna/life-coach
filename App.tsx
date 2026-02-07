
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import About from './pages/About';
import Journey from './pages/Journey';
import Programs from './pages/Programs';
import Booking from './pages/Booking';
import gsap from 'gsap';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Global page fade in on route change
    gsap.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-accent-green selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/book" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
