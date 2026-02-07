import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 md:pt-48 pb-40 px-6 overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-40 md:mb-56">
          <div className="about-anim order-2 lg:order-1">
            <p className="text-accent-green text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-8">Our Legacy</p>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase mb-12">
              Since <br/> <span className="italic text-outline">2012.</span>
            </h1>
            <div className="space-y-8 text-lg md:text-xl text-white/60 font-medium leading-relaxed">
              <p>
                Founded by a collective of neuroscientists, performance coaches, and executive leaders, Elevate was born from a single question: Why do high achievers still feel unfulfilled?
              </p>
              <p>
                Over the last decade, we've refined a methodology that bridges the gap between massive external success and profound internal clarity, tuned specifically for the modern leader.
              </p>
            </div>
          </div>
          <div className="relative about-anim order-1 lg:order-2">
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent-green/5 rounded-full blur-[100px]"></div>
             <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 aspect-[4/5] lg:aspect-auto relative z-0">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Leader" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-105" 
                />
             </div>
             <div className="absolute -bottom-8 -right-4 md:-right-12 glass p-8 md:p-10 rounded-[2rem] max-w-[300px] md:max-w-sm shadow-2xl border border-white/20 z-10">
                <p className="text-[10px] text-accent-green mb-4 uppercase font-black tracking-[0.3em]">Global Impact</p>
                <p className="text-lg md:text-xl font-display font-bold italic leading-tight text-white/90">"Elevate didn't change how I work. It fundamentally shifted who I am."</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-white/20"></div>
                  <p className="text-[10px] uppercase font-black text-white/40 tracking-widest">CEO, Tech Unicorn</p>
                </div>
             </div>
          </div>
        </div>

        <section className="border-t border-white/5 pt-32 md:pt-48">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 md:mb-32">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none about-anim">The Pillars <br/><span className="text-white/10">of our Ethos.</span></h2>
            </div>
            <div className="about-anim text-white/20 text-sm font-bold uppercase tracking-[0.4em] mb-4">Integrity in Practice</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { title: "Transparency", desc: "No fluff. No spiritual bypassing. Just direct radical truth based on objective feedback loops." },
              { title: "Neuro-Centric", desc: "Every practice is backed by human biology, biometric data, and peer-reviewed neuroscience." },
              { title: "Exclusivity", desc: "We only work with individuals ready for radical change. Selection is based on cognitive readiness." },
              { title: "Sustainability", desc: "We build internal systems that thrive long after we finish, ensuring evolution is permanent." }
            ].map((pillar, idx) => (
              <div key={pillar.title} className="about-anim group">
                <div className="p-10 h-full border-l-[3px] border-white/5 group-hover:border-accent-green transition-all duration-500 bg-white/0 hover:bg-white/[0.02] rounded-r-[2rem]">
                  <span className="text-accent-green/20 text-4xl font-display font-black block mb-8 group-hover:text-accent-green transition-colors">0{idx + 1}</span>
                  <h4 className="text-2xl font-display font-black mb-6 uppercase tracking-tight italic text-white group-hover:text-accent-green transition-colors">{pillar.title}</h4>
                  <p className="text-white/40 text-base leading-relaxed font-medium group-hover:text-white/70 transition-colors">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;