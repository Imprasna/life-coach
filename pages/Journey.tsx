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
      img: "https://images.unsplash.com/photo-1518005020480-10992897c1e0?auto=format&fit=crop&q=80&w=1200",
      desc: "Identifying the cognitive debt and limiting architecture that dictates your current reality." 
    },
    { 
      week: "03-05", 
      title: "Neurological Re-patterning", 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
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
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-none uppercase mb-8 md:mb-12">
            12 Weeks to <br />
            <span className="italic text-outline">Ascension.</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
            This is not a casual coaching program. It is a structured intensive designed to break you down and build you back up into a more conscious version of yourself.
          </p>
        </header>

        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-white/10"></div>
          
          <div className="space-y-24 md:space-y-48">
            {steps.map((step, i) => (
              <div key={i} className={`journey-anim relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`flex-1 pl-12 lg:pl-0 w-full ${i % 2 !== 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <span className="text-accent-green font-display font-black text-4xl md:text-7xl opacity-40">{step.week}</span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold mt-2 md:mt-4 italic text-white tracking-tight uppercase leading-tight">{step.title}</h3>
                  <p className={`text-white/60 mt-4 md:mt-6 text-sm md:text-lg leading-relaxed font-medium ${i % 2 !== 0 ? 'lg:mr-auto' : 'lg:ml-auto'} max-w-md`}>
                    {step.desc}
                  </p>
                </div>
                
                {/* Timeline center dot */}
                <div className="absolute left-[13px] lg:left-1/2 w-2.5 h-2.5 lg:w-5 lg:h-5 bg-accent-green rounded-full z-10 shrink-0 shadow-[0_0_20px_rgba(212,233,215,0.8)] -translate-x-1/2 mt-8 lg:mt-0"></div>

                {/* Image Side */}
                <div className="flex-1 w-full pl-12 lg:pl-0">
                  <div className="overflow-hidden rounded-[2rem] group border border-white/10 shadow-2xl aspect-[16/10] lg:aspect-[4/3] relative bg-card-zinc">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="journey-anim mt-32 md:mt-56 bg-accent-green text-black p-10 md:p-32 rounded-[3rem] md:rounded-[5rem] text-center shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <h2 className="text-4xl md:text-8xl font-display font-black mb-8 uppercase italic tracking-tighter leading-[0.85] relative z-10">Ready for the shift?</h2>
           <p className="text-base md:text-3xl font-bold mb-12 max-w-3xl mx-auto text-black/70 italic leading-relaxed relative z-10">
             "The hardest thing about the journey is taking the first step into the unknown. We've mapped the path. You just have to walk it."
           </p>
           <Link to="/book" className="relative z-10 inline-block bg-black text-white px-10 md:px-16 py-5 md:py-8 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all text-xs md:text-sm shadow-2xl active:scale-95 hover:bg-zinc-900">
             Begin My Journey
           </Link>
        </section>
      </div>
    </div>
  );
};

export default Journey;