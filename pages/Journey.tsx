import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=1200",
      desc: "Identifying the cognitive debt and limiting architecture that dictates your current reality." 
    },
    { 
      week: "03-05", 
      title: "Neurological Re-patterning", 
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
      desc: "Implementing daily somatic and mental practices to rewire stress responses and decision-making." 
    },
    { 
      week: "06-08", 
      title: "The Flow State Integration", 
      img: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=1200",
      desc: "Accessing peak performance states on demand without the burnout associated with traditional high-output." 
    },
    { 
      week: "09-12", 
      title: "Conscious Leadership", 
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
      desc: "Deploying your new evolution into your professional and personal ecosystems for maximum impact." 
    }
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-48 pb-24 md:pb-40 px-4 md:px-6 bg-dark-bg min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        <header className="max-w-4xl mb-16 md:mb-32 journey-anim">
          <p className="text-accent-green text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-4 md:mb-6">The Process</p>
          <h1 className="text-4xl md:text-8xl font-display font-black tracking-tighter leading-none uppercase mb-8 md:mb-12">
            12 Weeks to <br />
            <span className="italic text-outline">Ascension.</span>
          </h1>
          <p className="text-base md:text-xl text-white/70 leading-relaxed max-w-2xl font-medium">
            This is not a casual coaching program. It is a structured intensive designed to break you down and build you back up into a more conscious version of yourself.
          </p>
        </header>

        <div className="relative">
          {/* Timeline center line - hidden on small mobile, visible on tablet+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          {/* Timeline side line for mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-white/10"></div>
          
          <div className="space-y-16 md:space-y-40">
            {steps.map((step, i) => (
              <div key={i} className={`journey-anim flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 pl-12 md:pl-0 w-full ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-accent-green font-display font-black text-4xl md:text-6xl opacity-30">{step.week}</span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold mt-2 md:mt-4 italic text-white tracking-tight">{step.title}</h3>
                  <p className={`text-white/60 mt-4 md:mt-6 text-sm md:text-lg leading-relaxed font-medium ${i % 2 !== 0 ? 'md:mr-auto' : 'md:ml-auto'} max-w-md`}>
                    {step.desc}
                  </p>
                </div>
                
                {/* Fixed center dot for timeline */}
                <div className="absolute left-[13px] md:left-1/2 w-2 h-2 md:w-5 md:h-5 bg-accent-green rounded-full z-10 shrink-0 shadow-[0_0_20px_rgba(212,233,215,0.8)] -translate-x-1/2 mt-8 md:mt-0"></div>

                <div className="flex-1 w-full pl-12 md:pl-0">
                  <div className="overflow-hidden rounded-2xl group border border-white/10 shadow-2xl aspect-[16/10] md:aspect-video relative bg-card-zinc">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="journey-anim mt-24 md:mt-48 bg-[#D4E9D7] text-black p-10 md:p-32 rounded-[2.5rem] text-center shadow-2xl">
           <h2 className="text-4xl md:text-7xl font-display font-black mb-8 uppercase italic tracking-tighter leading-none">Ready for the shift?</h2>
           <p className="text-base md:text-2xl font-bold mb-12 max-w-3xl mx-auto text-black/70 italic leading-relaxed">
             "The hardest thing about the journey is taking the first step into the unknown. We've mapped the path. You just have to walk it."
           </p>
           <Link to="/book" className="inline-block bg-black text-white px-10 md:px-16 py-5 md:py-7 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform text-xs md:text-sm shadow-xl active:scale-95">
             Begin My Journey
           </Link>
        </section>
      </div>
    </div>
  );
};

export default Journey;