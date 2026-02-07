import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Vision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Direct opacity set for immediate visibility followed by a subtle slide up
      gsap.fromTo(".vision-item", 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          clearProps: "all" 
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    { 
      title: "Cognitive Rewiring", 
      icon: "psychology", 
      desc: "We utilize advanced neuroplasticity principles to dismantle limiting architectural patterns in the mind and rebuild them for peak focus." 
    },
    { 
      title: "Somatic Intelligence", 
      icon: "accessibility_new", 
      desc: "True transformation isn't just thought; it's felt. We integrate the body's nervous system into the coaching process for permanent change." 
    },
    { 
      title: "Stoic Resilience", 
      icon: "shield", 
      desc: "Ancient wisdom for modern chaos. We build an internal fortitude that remains unshakeable even in high-stakes environments." 
    },
    { 
      title: "Flow Optimization", 
      icon: "bolt", 
      desc: "Systematically identifying and removing friction points to achieve sustained states of high-level output without the toll of burnout." 
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-48 pb-24 md:pb-40 px-4 md:px-8 overflow-hidden bg-dark-bg">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <header className="max-w-5xl mb-16 md:mb-32 vision-item">
          <p className="text-accent-green text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-4 md:mb-6">Our Philosophy</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.9] uppercase mb-8 md:mb-12">
            The Science of <br />
            <span className="text-white/40">Human Evolution.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium leading-relaxed max-w-3xl">
            Elevate wasn't built for the average. We created this space for those who demand more from their cognitive, emotional, and physical existence.
          </p>
        </header>

        {/* All cards now share the same solid background and opacity for perfect visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-40">
          {cards.map((item, i) => (
            <div key={i} className="vision-item bg-[#121212] p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-accent-green transition-all duration-500 group relative overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent-green transition-colors duration-500 border border-white/5">
                  <span className="material-symbols-outlined text-accent-green text-3xl group-hover:text-black transition-colors duration-500">{item.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 italic tracking-tight text-white group-hover:text-accent-green transition-colors">{item.title}</h3>
                <p className="text-white/70 leading-relaxed font-medium transition-colors text-sm md:text-base group-hover:text-white/90">{item.desc}</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:bg-accent-green/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Beyond Performance Section with updated high-impact image and layout */}
        <section className="vision-item rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative min-h-[500px] md:min-h-[750px] flex items-center p-8 md:p-24 shadow-2xl border border-white/10 group">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
              alt="Global Network of Intelligence" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[5s] ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-[1.5px] w-8 md:w-12 bg-accent-green"></div>
              <span className="text-white text-[10px] md:text-[11px] uppercase font-black tracking-[0.4em]">Our Mission</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black mb-6 md:mb-10 uppercase italic tracking-tighter leading-[0.8] text-white">
              Beyond <br/>
              Performance.
            </h2>
            
            <p className="text-base md:text-xl text-white/80 leading-relaxed mb-10 md:mb-16 font-medium max-w-lg">
              Evolution is not a destination. It is the continuous process of shedding the old and integrating the new. At Elevate, we facilitate the shift from doing to being.
            </p>
            
            <div className="flex flex-wrap gap-12 md:gap-24">
              <div>
                <p className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter">98%</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mt-2 md:mt-4">Retention Rate</p>
              </div>
              <div>
                <p className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter">10x</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mt-2 md:mt-4">ROI Reported</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;