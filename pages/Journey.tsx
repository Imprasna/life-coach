
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
      img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800",
      desc: "Identifying the cognitive debt and limiting architecture that dictates your current reality." 
    },
    { 
      week: "03-05", 
      title: "Neurological Re-patterning", 
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
      desc: "Implementing daily somatic and mental practices to rewire stress responses and decision-making." 
    },
    { 
      week: "06-08", 
      title: "The Flow State Integration", 
      img: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=800",
      desc: "Accessing peak performance states on demand without the burnout associated with traditional high-output." 
    },
    { 
      week: "09-12", 
      title: "Conscious Leadership", 
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      desc: "Deploying your new evolution into your professional and personal ecosystems for maximum impact." 
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-40 px-6">
      <div className="max-w-[1600px] mx-auto">
        <header className="max-w-4xl mb-20 md:mb-32 journey-anim">
          <p className="text-accent-green text-[12px] uppercase tracking-[0.5em] font-black mb-6">The Process</p>
          <h1 className="text-4xl md:text-8xl font-display font-black tracking-tighter leading-none uppercase mb-12">
            12 Weeks to <br />
            <span className="italic text-outline">Ascension.</span>
          </h1>
          <p className="text-base md:text-xl text-white/50 leading-relaxed max-w-2xl">
            This is not a casual coaching program. It is a structured intensive designed to break you down and build you back up into a more conscious version of yourself.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10"></div>
          
          <div className="space-y-20 md:space-y-32">
            {steps.map((step, i) => (
              <div key={i} className={`journey-anim flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 pl-12 md:pl-0 text-left ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-accent-green font-display font-black text-4xl md:text-6xl opacity-20">{step.week}</span>
                  <h3 className="text-xl md:text-3xl font-display font-bold mt-2 italic">{step.title}</h3>
                  <p className={`text-white/40 mt-4 max-w-sm leading-relaxed ${i % 2 !== 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>{step.desc}</p>
                </div>
                
                <div className="absolute left-[11px] md:relative md:left-0 w-2 h-2 md:w-4 md:h-4 bg-accent-green rounded-full z-10 shrink-0 shadow-[0_0_15px_rgba(212,233,215,0.5)]"></div>

                <div className="flex-1 w-full pl-12 md:pl-0">
                  <div className="overflow-hidden rounded-2xl group border border-white/5">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 w-full aspect-[4/3] md:aspect-[16/9] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="journey-anim mt-32 md:mt-48 bg-accent-green text-black p-8 md:p-24 rounded-[2rem] text-center">
           <h2 className="text-3xl md:text-6xl font-display font-black mb-6 uppercase italic tracking-tighter">Ready for the shift?</h2>
           <p className="text-sm md:text-xl font-bold mb-10 max-w-2xl mx-auto opacity-70 italic leading-relaxed">
             "The hardest thing about the journey is taking the first step into the unknown. We've mapped the path. You just have to walk it."
           </p>
           {/* Fix: Link component now correctly imported from react-router-dom */}
           <Link to="/book" className="inline-block bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform text-[10px] md:text-xs">
             Begin My Journey
           </Link>
        </section>
      </div>
    </div>
  );
};

export default Journey;
