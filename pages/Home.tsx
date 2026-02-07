
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.3
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.0
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
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center px-4 md:px-24 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Mountain Landscape" 
            className="hero-img w-full h-full object-cover brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl w-full">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-accent-green"></div>
            <span className="text-accent-green text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold">Unleash Your Potential</span>
          </div>
          
          <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-display font-extrabold text-white leading-[0.9] tracking-tighter mb-10 md:mb-12">
            MASTER THE<br />
            <span className="text-outline">ART OF LIVING</span><br />
            CONSCIOUSLY.
          </h1>

          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
            <Link to="/book" className="hero-cta group bg-white text-black px-6 md:px-10 py-4 md:py-5 rounded-full font-black text-[9px] md:text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-accent-green transition-all transform hover:-translate-y-1">
              Start Your Growth 
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
          <div className="flex flex-col items-end gap-2 text-white/40 font-display italic text-sm">
            <span>Current Cohort: 94% Full</span>
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[94%] h-full bg-accent-green"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 -mt-12 md:-mt-32 relative z-20 pb-24 md:pb-40">
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* Specializations */}
          <div className="lg:col-span-3 bg-card-zinc rounded-2xl p-6 md:p-10 flex flex-col justify-between border border-white/5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-green mb-8">Specializations</p>
              <ul className="space-y-4 md:space-y-6 font-display text-lg md:text-xl font-bold">
                <li className="flex items-center gap-4 text-white">
                  <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                  <span>Mindset Mastery</span>
                </li>
                {['Emotional IQ', 'High Performance', 'Purpose Discovery'].map(item => (
                  <li key={item} className="flex items-center gap-4 text-white/30 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-transparent border border-white/20 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-20">
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-2">Since 2012</p>
              <p className="text-xs text-white/50 leading-relaxed italic">"Transforming 500+ leaders through somatic and cognitive alignment."</p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="lg:col-span-5 bg-zinc-950 rounded-2xl p-8 md:p-16 flex flex-col justify-center border border-white/5">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-6">The Philosophy</p>
            <h2 className="text-3xl md:text-6xl font-display font-extrabold mb-6 tracking-tighter leading-tight italic">
              Holistic Peak <span className="text-accent-green not-italic">State.</span>
            </h2>
            <p className="text-white/50 text-sm md:text-lg leading-relaxed mb-8 max-w-md">
              We don't just solve problems; we rewire the cognitive architecture that holds you back. Experience a transformation that is felt in the gut and understood in the mind.
            </p>
            <Link to="/about" className="group relative overflow-hidden bg-white text-black w-fit px-6 py-3 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Methodology</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-4 relative group rounded-2xl overflow-hidden min-h-[350px] md:min-h-[400px]">
            <img 
              alt="Coaching session" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110" 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="relative h-full p-6 md:p-12 flex flex-col justify-end">
              <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-none tracking-tighter uppercase">
                Let's build<br />your future
              </h3>
              <p className="text-white/60 text-xs md:text-sm mb-6 max-w-xs leading-relaxed">
                Our exclusive 12-week transformation intensive for high-impact leaders. Limited slots available.
              </p>
              <Link to="/book" className="bg-accent-green text-black px-6 py-3 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors w-fit">
                Apply for Session
              </Link>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <section className="mt-20 md:mt-48">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 md:mb-20">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-accent-green mb-4">The Mentors</p>
              <h2 className="text-4xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] uppercase">
                Cultivate Your <br />
                <span className="text-white/20">New Reality.</span>
              </h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-green hover:text-black transition-all group">
                <span className="material-symbols-outlined transition-transform group-active:-translate-x-2">west</span>
              </button>
              <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-green hover:text-black transition-all group">
                <span className="material-symbols-outlined transition-transform group-active:translate-x-2">east</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, i) => (
              <div key={mentor.name} className={`group relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-4 ${i % 2 !== 0 ? 'lg:translate-y-12' : ''}`}>
                <img 
                  alt={mentor.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  src={mentor.img} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-[10px] uppercase tracking-widest text-accent-green font-black mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{mentor.role}</p>
                  <h4 className="text-2xl font-display font-bold text-white mb-2">{mentor.name}</h4>
                  <div className="h-1 w-0 bg-accent-green group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
