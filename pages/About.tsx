
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
    <div ref={containerRef} className="pt-32 pb-40 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40">
          <div className="about-anim">
            <p className="text-accent-green text-[12px] uppercase tracking-[0.5em] font-black mb-6">Our Legacy</p>
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none uppercase mb-12">
              Since <span className="italic text-outline">2012.</span>
            </h1>
            <div className="space-y-8 text-lg md:text-xl text-white/60 font-light leading-relaxed">
              <p>
                Founded by a collective of neuroscientists, performance coaches, and executive leaders, Elevate was born from a single question: Why do high achievers still feel unfulfilled?
              </p>
              <p>
                Over the last decade, we've refined a methodology that bridges the gap between massive external success and profound internal clarity.
              </p>
            </div>
          </div>
          <div className="relative about-anim">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-green/10 rounded-full blur-3xl"></div>
             <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" alt="About" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl w-full" />
             <div className="absolute -bottom-8 -right-4 md:-right-8 glass p-6 md:p-8 rounded-2xl max-w-[280px] md:max-w-xs shadow-2xl">
                <p className="text-[10px] text-white/50 mb-2 uppercase font-bold tracking-widest">Global Impact</p>
                <p className="text-base md:text-lg font-display font-bold italic">"Elevate didn't change how I work. It changed who I am."</p>
                <p className="mt-4 text-[10px] uppercase font-black text-accent-green">CEO, Fortune 500 Tech</p>
             </div>
          </div>
        </div>

        <section className="border-t border-white/5 pt-32 md:pt-40">
          <h2 className="text-3xl md:text-4xl font-display font-bold italic mb-16 md:mb-20 about-anim">The Pillars of our Ethos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Transparency", desc: "No fluff. No spiritual bypassing. Just direct truth." },
              { title: "Neuro-Centric", desc: "Every practice is backed by human biology and data." },
              { title: "Exclusivity", desc: "We only work with individuals ready for radical change." },
              { title: "Sustainability", desc: "We build systems that thrive long after we finish." }
            ].map(pillar => (
              <div key={pillar.title} className="about-anim p-8 border-l border-white/10 hover:border-accent-green transition-all hover:bg-white/5 rounded-r-xl">
                <h4 className="text-xl font-display font-bold mb-4 uppercase text-accent-green">{pillar.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
