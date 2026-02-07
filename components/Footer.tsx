
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-10 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-black text-2xl">psychology</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter">ELEVATE.</span>
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm mb-12 font-light">
              The premier destination for high-performance evolution and conscious leadership.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <span className="material-symbols-outlined text-xl">language</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-green mb-10">Practice</h5>
            <ul className="space-y-6 text-sm font-bold text-gray-500">
              <li><Link to="/programs" className="hover:text-white transition-colors">Visionary Coaching</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Workshops</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Retreats</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-green mb-10">Company</h5>
            <ul className="space-y-6 text-sm font-bold text-gray-500">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
              <li><Link to="/journey" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">The Lab</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 bg-card-zinc p-10 rounded-2xl border border-white/5">
            <h5 className="text-xl font-display font-bold mb-6 italic">Stay Conscious.</h5>
            <p className="text-sm text-gray-400 mb-8">Join 5,000+ subscribers for weekly insights on mental performance.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="w-full bg-black border border-zinc-800 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-accent-green transition-all" 
                placeholder="Email Address" 
                type="email" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-full font-bold text-[10px] uppercase hover:bg-accent-green transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">© 2024 Elevate Coaching Global. All rights reserved.</p>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
