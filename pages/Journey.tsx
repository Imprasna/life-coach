
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".journey-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { 
      week: "01-02", 
      title: "Deconstruction", 
      desc: "Identifying the cognitive debt and limiting architecture that dictates your current reality." 
    },
    { 
      week: "03-05", 
      title: "Neurological Re-patterning", 
      desc: "Implementing daily somatic and mental practices to rewire stress responses and decision-making." 
    },
    { 
      week: "06-08", 
      title: "The Flow State Integration", 
      desc: "Accessing peak performance states on demand without the burnout associated with traditional high-output." 
    },
    { 
      week: "09-12", 
      title: "Conscious Leadership", 
      desc: "Deploying your new evolution into your professional and personal ecosystems for maximum impact." 
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-40 px-6">
      <div className="max-w-[1600px] mx-auto">
        <header className="max-w-4xl mb-24 md:mb-32 journey-anim">
          <p className="text-accent-green text-[12px] uppercase tracking-[0.5em] font-black mb-6">The Process</p>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none uppercase mb-12">
            12 Weeks to <br />
            <span className="italic text-outline">Ascension.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            This is not a casual coaching program. It is a structured intensive designed to break you down and build you back up into a more conscious version of yourself.
          </p>
        </header>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
          
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <div key={i} className={`journey-anim flex flex-col md:flex-row items-center gap-10 md:gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 text-center ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-accent-green font-display font-black text-5xl md:text-6xl opacity-20">{step.week}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mt-4 italic">{step.title}</h3>
                  <p className={`text-white/40 mt-6 max-w-sm mx-auto leading-relaxed ${i % 2 !== 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>{step.desc}</p>
                </div>
                
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0 z-10 hidden md:flex">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                </div>

                <div className="flex-1 w-full">
                  <div className="overflow-hidden rounded-2xl group">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + (i * 1000000)}?auto=format&fit=crop&q=80&w=800&h=500`} 
                      alt={step.title} 
                      className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="journey-anim mt-40 md:mt-48 bg-accent-green text-black p-10 md:p-24 rounded-[2rem] md:rounded-[3rem] text-center shadow-2xl">
           <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase italic">Ready for the shift?</h2>
           <p className="text-base md:text-xl font-bold mb-12 max-w-2xl mx-auto opacity-70 italic">
             "The hardest thing about the journey is taking the first step into the unknown. We've mapped the path. You just have to walk it."
           </p>
           <button className="bg-black text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
             Begin My Journey
           </button>
        </section>
      </div>
    </div>
  );
};

export default Journey;
