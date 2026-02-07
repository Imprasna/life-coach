import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!submitted) {
      const ctx = gsap.context(() => {
        gsap.from(".booking-anim", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-md">
          <div className="w-24 h-24 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(212,233,215,0.3)] animate-pulse">
            <span className="material-symbols-outlined text-black text-5xl">check</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black mb-6 italic tracking-tight uppercase">Submission Received.</h1>
          <p className="text-white/50 leading-relaxed mb-12 font-medium">
            A mentor will review your application within 24 hours. We only select participants who demonstrate the requisite cognitive readiness for this transition.
          </p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="group flex items-center gap-4 mx-auto text-accent-green font-black uppercase tracking-[0.2em] text-xs hover:gap-6 transition-all"
          >
            <span className="material-symbols-outlined">west</span> Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-32 md:pt-48 pb-40 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <div className="booking-anim">
            <p className="text-accent-green text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black mb-8">Discovery Session</p>
            <h1 className="text-5xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase mb-12">
              Apply for <br />
              <span className="italic text-outline">Expansion.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/40 leading-relaxed max-w-md font-medium mb-16 md:mb-24">
              A 30-minute diagnostic session to determine if your current architecture is ready for the 12-week radical shift.
            </p>
            
            <div className="space-y-12">
               {[
                 { num: "01", text: "Submit the diagnostic form with complete transparency. We value deep truth over polished profiles." },
                 { num: "02", text: "Our strategic team reviews your current cognitive load, stress resilience, and professional trajectory." },
                 { num: "03", text: "If selection criteria are met, we schedule your private session with a lead mentor to map your path." }
               ].map((step) => (
                 <div key={step.num} className="flex gap-8 items-start group">
                    <span className="text-2xl font-display font-black text-accent-green/20 group-hover:text-accent-green transition-colors">{step.num}</span>
                    <p className="text-base text-white/50 leading-relaxed font-semibold group-hover:text-white/80 transition-colors">{step.text}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="booking-anim relative">
            <div className="absolute inset-0 bg-accent-green/5 blur-[100px] rounded-full"></div>
            <div className="relative bg-[#0D0D0D] p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-white/30 mb-4 ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-black border border-white/10 rounded-2xl py-5 px-7 text-white font-medium focus:border-accent-green focus:ring-0 focus:outline-none transition-all placeholder:text-white/10 text-base" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-white/30 mb-4 ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-black border border-white/10 rounded-2xl py-5 px-7 text-white font-medium focus:border-accent-green focus:ring-0 focus:outline-none transition-all placeholder:text-white/10 text-base" placeholder="john@company.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-white/30 mb-4 ml-1">Primary Focus Area</label>
                  <div className="relative">
                    <select className="w-full bg-black border border-white/10 rounded-2xl py-5 px-7 text-white font-medium focus:border-accent-green focus:ring-0 focus:outline-none transition-all appearance-none cursor-pointer text-base">
                      <option>Executive Peak Performance</option>
                      <option>Radical Emotional Resilience</option>
                      <option>Cognitive Re-patterning</option>
                      <option>Legacy & Purpose Discovery</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">expand_more</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-white/30 mb-4 ml-1">Current Reality / Bottleneck</label>
                  <textarea required rows={5} className="w-full bg-black border border-white/10 rounded-2xl py-5 px-7 text-white font-medium focus:border-accent-green focus:ring-0 focus:outline-none transition-all placeholder:text-white/10 text-base resize-none" placeholder="What is the one thing currently preventing your next evolution?"></textarea>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full py-6 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-accent-green transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
                    Submit Application
                  </button>
                  <div className="flex items-center justify-center gap-3 mt-8 opacity-20">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <p className="text-[10px] uppercase tracking-widest font-black">
                      Encrypted Diagnostic Submission
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;