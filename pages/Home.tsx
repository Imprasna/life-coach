import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoModal from '../components/VideoModal';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-anim", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
      });

      // Grid Scroll Animations
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out"
        });
      }

      // Parallax effect for hero image
      gsap.to(".hero-img", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 150,
        ease: "none"
      });

      // Scroll Indicator Animation
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 15,
          opacity: 0.6,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const mentors = [
    { name: "Sarah Chen", role: "Executive Alignment", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
    { name: "Marcus Thorne", role: "Performance Flow", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
    { name: "Elena Vance", role: "Deep Resilience", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
    { name: "James Miller", role: "Purpose Discovery", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[110vh] overflow-hidden flex items-center px-4 md:px-24 pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Mountain Landscape" 
            className="hero-img w-full h-full object-cover brightness-[0.5]" 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
        </div>
        
        <div className="relative z-10 max-w-[1600px] w-full">
          <div className="hero-anim flex items-center gap-4 mb-8 md:mb-12">
            <div className="h-[1.5px] w-12 md:w-20 bg-accent-green/60"></div>
            <span className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black">Unleash Your Potential</span>
          </div>
          
          <h1 ref={titleRef} className="hero-anim text-5xl sm:text-7xl md:text-8xl lg:text-[10.5rem] font-display font-extrabold text-white leading-[0.85] tracking-tighter mb-12 md:mb-16 uppercase">
            <div className="opacity-100">MASTER THE</div>
            <div className="text-outline my-1 md:my-2">ART OF</div>
            <div className="text-outline mb-1 md:mb-2">LIVING</div>
            <div className="text-accent-green">CONSCIOUSLY.</div>
          </h1>

          <div className="hero-anim flex flex-wrap gap-4 md:gap-8 items-center">
            <Link to="/book" className="group bg-white text-black px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-4 hover:bg-accent-green transition-all transform hover:-translate-y-1 shadow-2xl">
              Start Your Growth 
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-2">arrow_right_alt</span>
            </Link>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="group glass px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-4 hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-xl fill-1">play_circle</span>
              Watch Trailer
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Moved higher and increased visibility */}
        <div ref={scrollIndicatorRef} className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <div className="w-[1px] h-12 md:h-20 bg-white/60"></div>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black text-white/80">Scroll to Explore</span>
        </div>
      </section>

      {/* Grid Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 -mt-24 md:-mt-40 relative z-20 pb-24 md:pb-40">
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* Specializations */}
          <div className="lg:col-span-3 bg-card-zinc rounded-[2rem] p-8 md:p-12 flex flex-col justify-between border border-white/5 shadow-2xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-green mb-10">Specializations</p>
              <ul className="space-y-6 font-display text-xl font-bold">
                <li className="flex items-center gap-4 text-white">
                  <span className="w-2.5 h-2.5 bg-accent-green rounded-full shadow-[0_0_10px_rgba(212,233,215,0.4)]"></span>
                  <span>Mindset Mastery</span>
                </li>
                {['Emotional IQ', 'High Performance', 'Purpose Discovery'].map(item => (
                  <li key={item} className="flex items-center gap-4 text-white/20 hover:text-white transition-colors cursor-default">
                    <span className="w-2.5 h-2.5 bg-transparent border border-white/10 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-20">
              <p className="text-[10px] text-white/20 uppercase tracking-widest font-black mb-3">Est. 2012</p>
              <p className="text-xs text-white/40 leading-relaxed italic font-medium">"Pioneering the synthesis of somatic depth and executive performance."</p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="lg:col-span-5 bg-zinc-950 rounded-[2rem] p-10 md:p-16 flex flex-col justify-center border border-white/5 shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mb-8">The Philosophy</p>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter leading-[1.05] italic">
              Holistic Peak <span className="text-accent-green not-italic">State.</span>
            </h2>
            <p className="text-white/40 text-base md:text-xl leading-relaxed mb-10 max-w-md font-medium">
              We decode the biological barriers to your potential, rewiring the architecture of your decision-making at a cellular level.
            </p>
            <Link to="/about" className="group relative overflow-hidden bg-white text-black w-fit px-8 py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Methodology</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Featured Image Section */}
          <div className="lg:col-span-4 relative group rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[500px] shadow-2xl border border-white/5">
            <img 
              alt="Coaching session" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2000ms] group-hover:scale-110" 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="relative h-full p-8 md:p-12 flex flex-col justify-end">
              <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-4 leading-[0.9] tracking-tighter uppercase">
                Let's build<br />your future
              </h3>
              <p className="text-white/50 text-xs md:text-sm mb-8 max-w-xs leading-relaxed font-medium">
                Applications for our Q4 cohort are now open. Only 4 slots remain for the 1-on-1 intensive.
              </p>
              <Link to="/book" className="bg-accent-green text-black px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all w-fit shadow-lg">
                Apply for Session
              </Link>
            </div>
          </div>
        </div>

        {/* Outcomes & Stats Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <div className="lg:col-span-8 bg-[#0D0D0D] rounded-[2.5rem] p-10 md:p-20 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="max-w-md">
              <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 italic tracking-tight leading-none">Unrivaled <br/>Outcomes.</h3>
              <p className="text-white/20 text-sm md:text-base leading-relaxed font-semibold">Our unique protocol merges advanced neuroscience with ancient stoic principles to deliver radical transformation.</p>
            </div>
            <div className="flex gap-16 md:gap-24 shrink-0">
              <div className="text-center">
                <p className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter">500+</p>
                <p className="text-[10px] text-accent-green uppercase font-black tracking-[0.3em] mt-4">Lives Tuned</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter">12</p>
                <p className="text-[10px] text-accent-green uppercase font-black tracking-[0.3em] mt-4">Week Intensive</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-accent-green text-black rounded-[2.5rem] p-12 md:p-20 flex flex-col justify-center shadow-2xl">
            <span className="material-symbols-outlined text-5xl mb-12 font-black fill-1">bolt</span>
            <p className="font-display font-black text-3xl md:text-4xl leading-[1] uppercase tracking-tighter">
              The speed of change is decided by the depth of truth.
            </p>
          </div>
        </div>

        {/* Mentors Section */}
        <section className="mt-32 md:mt-56">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16 md:mb-24">
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-accent-green mb-6">The Collective</p>
              <h2 className="text-5xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase">
                Cultivate Your <br />
                <span className="text-white/10">New Reality.</span>
              </h2>
            </div>
            <div className="hidden md:flex gap-6">
              <button className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center hover:bg-accent-green hover:text-black transition-all group glass">
                <span className="material-symbols-outlined text-2xl transition-transform group-active:-translate-x-3">west</span>
              </button>
              <button className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center hover:bg-accent-green hover:text-black transition-all group glass">
                <span className="material-symbols-outlined text-2xl transition-transform group-active:translate-x-3">east</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, i) => (
              <div key={mentor.name} className={`group relative h-[500px] md:h-[650px] rounded-[2.5rem] overflow-hidden cursor-pointer transition-transform duration-700 hover:-translate-y-6 ${i % 2 !== 0 ? 'lg:translate-y-16' : ''}`}>
                <img 
                  alt={mentor.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  src={mentor.img} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] uppercase tracking-widest text-accent-green font-black mb-3 opacity-0 group-hover:opacity-100 transition-all">{mentor.role}</p>
                  <h4 className="text-3xl font-display font-bold text-white mb-3">{mentor.name}</h4>
                  <div className="h-[2px] w-0 bg-accent-green group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
};

export default Home;