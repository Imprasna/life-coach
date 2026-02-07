
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Programs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".program-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const programs = [
    {
      type: "1-on-1",
      title: "Visionary Evolution",
      price: "$15k / 12 weeks",
      features: ["Custom neuro-protocol", "24/7 priority access", "Monthly biometric audit", "Strategic board alignment"],
      highlight: true
    },
    {
      type: "Group",
      title: "The Collective",
      price: "$4k / 8 weeks",
      features: ["Bi-weekly cohort calls", "Somatic framework", "Peer accountability", "Resource laboratory access"],
      highlight: false
    },
    {
      type: "Event",
      title: "The Horizon Retreat",
      price: "$8k / 4 days",
      features: ["Immersive environment", "Deep work protocols", "Physical detoxification", "Legacy mapping"],
      highlight: false
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-40 px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto">
        <header className="max-w-4xl mb-16 md:mb-24 program-anim">
          <p className="text-accent-green text-[11px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-6">Our Programs</p>
          <h1 className="text-4xl md:text-8xl font-display font-black tracking-tighter leading-none uppercase mb-8 md:mb-12">
            Tailored <br />
            <span className="italic text-outline">Ascensions.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className={`program-anim relative flex flex-col p-8 md:p-12 rounded-3xl border transition-all duration-500 ${p.highlight ? 'bg-white text-black border-white shadow-2xl lg:scale-105 z-10' : 'bg-card-zinc text-white border-white/5 hover:border-white/10'}`}>
              {p.highlight && (
                <div className="absolute top-0 right-8 md:right-12 transform -translate-y-1/2 bg-accent-green text-black text-[9px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg">
                  Most Intensive
                </div>
              )}
              <span className={`text-[9px] md:text-[10px] uppercase tracking-widest font-black mb-3 md:mb-4 ${p.highlight ? 'text-black/50' : 'text-white/30'}`}>{p.type}</span>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold italic mb-2 tracking-tight">{p.title}</h3>
              <p className={`text-lg md:text-xl font-bold mb-8 md:mb-10 ${p.highlight ? 'text-black/60' : 'text-accent-green'}`}>{p.price}</p>
              
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-xs md:text-sm font-medium">
                    <span className="material-symbols-outlined text-sm shrink-0">check_circle</span>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest transition-all ${p.highlight ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-accent-green'}`}>
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <section className="mt-24 md:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center program-anim">
          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5">
             <h4 className="text-xl md:text-2xl font-display font-bold italic mb-6">The Lab: Corporate Integration</h4>
             <p className="text-white/40 leading-relaxed mb-8 text-sm md:text-base">
               Looking to evolve an entire executive team? We offer bespoke corporate programs focused on cultural resonance, collective flow, and conscious leadership development.
             </p>
             <button className="flex items-center gap-3 text-accent-green font-bold text-[10px] md:text-xs uppercase tracking-widest hover:gap-5 transition-all">
                Download Corporate Brochure <span className="material-symbols-outlined">download</span>
             </button>
          </div>
          <div className="relative group overflow-hidden rounded-2xl hidden md:block">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Laboratory" className="rounded-2xl opacity-60 grayscale transition-all duration-700 w-full h-auto" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
