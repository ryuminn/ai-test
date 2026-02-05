import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1920/1080?random=99"
          alt="Pie the Cat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="text-white/90 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-sans">
          {HERO_SUBTITLE}
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6">
          {HERO_TITLE.split("'")[0]} <span className="italic font-light">&</span> {HERO_TITLE.split(" ")[1]}
        </h1>
        <div className="text-white/80 font-serif italic text-lg md:text-xl mt-4">
          — 202X.XX.XX —
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
