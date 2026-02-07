
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
    <div ref={containerRef} className="pt-32 pb-40 px-6">
      <div className="max-w-[1600px] mx-auto">
        <header className="max-w-4xl mb-24 vision-item">
          <p className="text-accent-green text-[12px] uppercase tracking-[0.5em] font-black mb-6">Our Philosophy</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-none uppercase mb-12">
            The Science of <br />
            <span className="text-white/20">Human Evolution.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
            Elevate wasn't built for the average. We created this space for those who demand more from their cognitive, emotional, and physical existence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            { 
              title: "Cognitive Rewiring", 
              icon: "psychology", 
              desc: "We utilize advanced neuroplasticity principles to dismantle limiting architectural patterns in the mind." 
            },
            { 
              title: "Somatic Intelligence", 
              icon: "accessibility_new", 
              desc: "True transformation isn't just thought; it's felt. We integrate the body's nervous system into the coaching process." 
            },
            { 
              title: "Stoic Resilience", 
              icon: "shield", 
              desc: "Ancient wisdom for modern chaos. We build an internal fortitude that remains unshakeable in high-stakes environments." 
            }
          ].map((item, i) => (
            <div key={i} className="vision-item bg-card-zinc p-10 md:p-12 rounded-3xl border border-white/5 hover:border-accent-green/20 transition-all group">
              <span className="material-symbols-outlined text-accent-green text-4xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-6 italic">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="vision-item mt-40 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative h-[500px] md:h-[600px] flex items-center p-8 md:p-24">
          <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=1600" alt="Vision" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 uppercase italic">Beyond Performance.</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
              Evolution is not a destination. It is the continuous process of shedding the old and integrating the new. At Elevate, we facilitate the death of the ego to make room for the leader.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-3xl md:text-4xl font-display font-black text-white">98%</p>
                <p className="text-[10px] text-accent-green uppercase tracking-widest font-bold">Retention Rate</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-black text-white">10x</p>
                <p className="text-[10px] text-accent-green uppercase tracking-widest font-bold">ROI reported</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;
