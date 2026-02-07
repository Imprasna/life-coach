import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(mobileMenuRef.current, {
        clipPath: 'circle(150% at 100% 0%)',
        opacity: 1,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power4.inOut"
      });
      if (menuLinksRef.current) {
        gsap.fromTo(menuLinksRef.current.children, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.3 }
        );
      }
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(mobileMenuRef.current, {
        clipPath: 'circle(0% at 100% 0%)',
        opacity: 0,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power4.inOut"
      });
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Vision', path: '/vision' },
    { name: 'About', path: '/about' },
    { name: 'The Journey', path: '/journey' },
    { name: 'Programs', path: '/programs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 p-4 md:p-6 ${scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'}`}>
        <nav className="max-w-[1600px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 bg-white/5 backdrop-blur-xl p-2 pr-6 rounded-full border border-white/10 hover:border-white/20 transition-all">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-lg md:text-xl font-bold">psychology</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xs md:text-sm tracking-tighter text-white leading-none">ELEVATE</span>
              <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-accent-green font-bold">Life Studio</span>
            </div>
          </Link>

          {/* Center Links - Pill Design */}
          <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-md p-1.5 rounded-full px-2 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-black transition-all rounded-full ${
                  isActive(link.path) 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section - Shiny Button */}
          <div className="flex items-center gap-4">
            <Link 
              to="/book" 
              className="hidden md:block"
            >
              <button className="shine-btn px-8 py-3.5 bg-black text-white border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:border-accent-green transition-all shadow-xl">
                Book a Discovery Session
              </button>
            </Link>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 glass rounded-full flex flex-col items-center justify-center gap-1.5 z-[60] lg:hidden"
            >
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></span>
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-dark-bg z-40 flex flex-col items-center justify-center mobile-menu-overlay pointer-events-none invisible opacity-0"
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div ref={menuLinksRef} className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-4xl md:text-6xl font-display font-black tracking-tighter uppercase transition-colors ${
                isActive(link.path) ? 'text-accent-green' : 'text-white hover:text-accent-green'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="mt-12 px-12 py-5 bg-white text-black rounded-full text-sm uppercase tracking-widest font-black"
          >
            Book Discovery Session
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;