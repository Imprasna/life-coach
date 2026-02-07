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
      type: "1-on-1 Intensive",
      title: "Visionary Evolution",
      price: "$15k / 12 weeks",
      features: ["Custom neuro-biological protocol", "Daily direct access to mentor", "Monthly deep-dive biometric audit", "Executive architecture alignment", "Somatic nervous system tuning"],
      highlight: true
    },
    {
      type: "Group Dynamic",
      title: "The Collective",
      price: "$4k / 8 weeks",
      features: ["Bi-weekly cohort strategy calls", "Foundational somatic framework", "Direct peer accountability lab", "Core mental model laboratory", "Weekly integration workshops"],
      highlight: false
    },
    {
      type: "Immersive Event",
      title: "The Horizon Retreat",
      price: "$8k / 4 days",
      features: ["Off-grid immersive environment", "Deep work protocol integration", "Physical detoxification protocol", "Multi-year legacy mapping", "1-on-1 breakthrough sessions"],
      highlight: false
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 md:pt-48 pb-40 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <header className="max-w-5xl mb-20 md:mb-32 program-anim">
          <p className="text-accent-green text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-8">Our Programs</p>
          <h1 className="text-5xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase mb-12">
            Tailored <br />
            <span className="italic text-outline">Ascensions.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium max-w-2xl">
            Choose the depth of your transformation. From group dynamics to hyper-personalized mentorship, we have a path for every stage of leadership.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {programs.map((p, i) => (
            <div key={i} className={`program-anim relative flex flex-col p-10 md:p-14 rounded-[3rem] border transition-all duration-700 ${p.highlight ? 'bg-white text-black border-white shadow-[0_30px_100px_rgba(255,255,255,0.05)] lg:scale-105 z-10' : 'bg-[#0D0D0D] text-white border-white/5 hover:border-white/20 shadow-2xl'}`}>
              {p.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-green text-black text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-xl">
                  Most Requested
                </div>
              )}
              <span className={`text-[10px] uppercase tracking-[0.3em] font-black mb-6 ${p.highlight ? 'text-black/40' : 'text-accent-green/40'}`}>{p.type}</span>
              <h3 className="text-3xl md:text-4xl font-display font-black italic mb-3 tracking-tighter uppercase leading-none">{p.title}</h3>
              <p className={`text-xl md:text-2xl font-bold mb-12 tracking-tight ${p.highlight ? 'text-black/80' : 'text-accent-green'}`}>{p.price}</p>
              
              <div className={`w-full h-[1px] mb-12 ${p.highlight ? 'bg-black/10' : 'bg-white/10'}`}></div>

              <ul className="space-y-6 mb-16 flex-grow">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-4 text-sm md:text-base font-bold">
                    <span className={`material-symbols-outlined text-xl shrink-0 mt-0.5 ${p.highlight ? 'text-black' : 'text-accent-green'}`}>check_circle</span>
                    <span className="leading-tight opacity-80">{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl ${p.highlight ? 'bg-black text-white hover:bg-accent-green hover:text-black' : 'bg-white text-black hover:bg-accent-green'}`}>
                Apply for Session
              </button>
            </div>
          ))}
        </div>

        <section className="mt-32 md:mt-56 program-anim">
          <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-zinc-950 p-10 md:p-24 border border-white/5 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-green/5 blur-[120px] rounded-full"></div>
            <div className="relative z-10 flex-1 w-full">
              <span className="text-accent-green text-[10px] uppercase font-black tracking-[0.5em] mb-8 block">The Lab</span>
              <h4 className="text-4xl md:text-6xl font-display font-black italic mb-8 uppercase tracking-tighter leading-none text-white">Corporate <br/>Integration.</h4>
              <p className="text-white/40 leading-relaxed mb-12 text-lg md:text-xl font-medium max-w-xl">
                Looking to evolve an entire executive team? We offer bespoke corporate programs focused on cultural resonance, collective flow, and conscious high-performance development.
              </p>
              <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all border border-white/10">
                Download Corporate Brochure <span className="material-symbols-outlined text-lg">download</span>
              </button>
            </div>
            <div className="relative z-10 flex-1 w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Corporate Strategy" 
                  className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-[2s] scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;