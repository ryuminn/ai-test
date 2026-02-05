import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 flex justify-between items-center ${
        scrolled ? 'bg-[#F9F8F3]/90 backdrop-blur-sm border-b border-stone-200' : 'bg-transparent text-white'
      }`}
    >
      <div className={`font-serif text-lg tracking-wider font-semibold ${scrolled ? 'text-stone-800' : 'text-white'}`}>
        PIE'S LIBRARY
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans">
        {['Profile', 'Galleries', 'Shorts', 'Message'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`hover:opacity-70 transition-opacity ${scrolled ? 'text-stone-800' : 'text-white'}`}
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-colors ${
          scrolled
            ? 'bg-stone-800 text-white hover:bg-stone-600'
            : 'bg-white text-stone-900 hover:bg-stone-100'
        }`}
      >
        Follow
      </a>
    </nav>
  );
};

export default Navbar;
