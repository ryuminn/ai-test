import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2C2C] text-[#F9F8F3] py-20 text-center px-4" id="contact">
      <h2 className="text-5xl font-serif mb-8">Pie's Photo Library</h2>
      <p className="text-stone-400 font-serif italic mb-12">
        See you again soon!
      </p>
      
      <div className="text-xs uppercase tracking-widest text-stone-500">
        © 2026 Pie's Photo Library. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
