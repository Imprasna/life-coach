
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
          <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="material-symbols-outlined text-black text-4xl">check</span>
          </div>
          <h1 className="text-4xl font-display font-black mb-4 italic">Submission Received.</h1>
          <p className="text-white/50 leading-relaxed mb-10">
            A mentor will review your application within 24 hours. We only select participants who demonstrate the requisite cognitive readiness for this transition.
          </p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="group flex items-center gap-3 mx-auto text-accent-green font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all"
          >
            <span className="material-symbols-outlined">west</span> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-32 pb-40 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="booking-anim">
            <p className="text-accent-green text-[12px] uppercase tracking-[0.5em] font-black mb-6">Discovery Session</p>
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none uppercase mb-12">
              Apply for <br />
              <span className="italic text-outline">Expansion.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-md">
              A 30-minute diagnostic session to determine if your architecture is ready for the 12-week shift.
            </p>
            
            <div className="mt-16 md:mt-20 space-y-8 md:space-y-10">
               <div className="flex gap-6 items-start">
                  <span className="w-10 h-10 glass rounded-full flex items-center justify-center shrink-0 font-bold text-accent-green">1</span>
                  <p className="text-sm text-white/60 leading-relaxed">Submit the diagnostic form on the right. Be as honest as possible.</p>
               </div>
               <div className="flex gap-6 items-start">
                  <span className="w-10 h-10 glass rounded-full flex items-center justify-center shrink-0 font-bold text-accent-green">2</span>
                  <p className="text-sm text-white/60 leading-relaxed">Our team reviews your current cognitive load and professional standing.</p>
               </div>
               <div className="flex gap-6 items-start">
                  <span className="w-10 h-10 glass rounded-full flex items-center justify-center shrink-0 font-bold text-accent-green">3</span>
                  <p className="text-sm text-white/60 leading-relaxed">If approved, we schedule your one-on-one session with a mentor.</p>
               </div>
            </div>
          </div>

          <div className="booking-anim bg-card-zinc p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Full Name</label>
                  <input required type="text" className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 focus:border-accent-green focus:outline-none transition-all placeholder:text-white/10" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Email Address</label>
                  <input required type="email" className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 focus:border-accent-green focus:outline-none transition-all placeholder:text-white/10" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Current Focus / Challenge</label>
                <select className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 focus:border-accent-green focus:outline-none transition-all appearance-none cursor-pointer">
                  <option>Executive Performance</option>
                  <option>Emotional Resilience</option>
                  <option>Mindset Re-patterning</option>
                  <option>Purpose Discovery</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-white/30 mb-3">Briefly describe your current reality</label>
                <textarea required rows={4} className="w-full bg-black border border-white/10 rounded-xl py-4 px-6 focus:border-accent-green focus:outline-none transition-all placeholder:text-white/10" placeholder="What is the one thing holding you back?"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-accent-green transition-all transform hover:-translate-y-1 shadow-2xl">
                  Submit Application
                </button>
                <p className="text-center text-[10px] text-white/20 mt-6 uppercase tracking-widest font-bold">
                  Confidentiality guaranteed. We value your intellectual privacy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
