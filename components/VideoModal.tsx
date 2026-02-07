
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4" }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(modalRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.fromTo(contentRef.current, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(modalRef.current, { autoAlpha: 0, duration: 0.3 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md invisible"
      onClick={onClose}
    >
      <div 
        ref={contentRef}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          controls 
          src={videoUrl}
        />
      </div>
    </div>
  );
};

export default VideoModal;
