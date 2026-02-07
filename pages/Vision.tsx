import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Vision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vision-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 md:pt-48 pb-40 px-6 overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <header className="max-w-5xl mb-24 md:mb-32 vision-item">
          <p className="text-accent-green text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-6">Our Philosophy</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.9] uppercase mb-12">
            The Science of <br />
            <span className="text-white/40">Human Evolution.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-medium leading-relaxed max-w-3xl">
            Elevate wasn't built for the average. We created this space for those who demand more from their cognitive, emotional, and physical existence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {[
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
            }
          ].map((item, i) => (
            <div key={i} className="vision-item bg-[#1C1C1C] p-10 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-accent-green/40 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10 group-hover:bg-accent-green transition-colors duration-500">
                  <span className="material-symbols-outlined text-accent-green text-3xl group-hover:text-black transition-colors duration-500">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 italic tracking-tight text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed font-medium group-hover:text-white transition-colors">{item.desc}</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/10 blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:bg-accent-green/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Beyond Performance Section with improved visibility */}
        <section className="vision-item mt-40 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative min-h-[500px] md:min-h-[700px] flex items-center p-8 md:p-24 shadow-2xl border border-white/10 group">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-[3s]"
          >
            <source src="https://player.vimeo.com/external/394334399.hd.mp4?s=1d5638c4b260538a7989938080351f7d5445f1b5&profile_id=175" type="video/mp4" />
          </video>
          
          {/* Lightened gradient for better visibility of the video background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1.5px] w-12 bg-white/50"></div>
              <span className="text-white/80 text-[10px] uppercase font-black tracking-[0.4em]">Our Mission</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-display font-black mb-10 uppercase italic tracking-tighter leading-[0.85] text-white">
              Beyond <br/>
              Performance.
            </h2>
            
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-16 font-medium max-w-lg">
              Evolution is not a destination. It is the continuous process of shedding the old and integrating the new. At Elevate, we facilitate the shift from doing to being.
            </p>
            
            <div className="flex flex-wrap gap-12 md:gap-24">
              <div>
                <p className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">98%</p>
                <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-black mt-4">Retention Rate</p>
              </div>
              <div>
                <p className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">10x</p>
                <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-black mt-4">ROI Reported</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;