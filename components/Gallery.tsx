import React from 'react';
import { GALLERIES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galleries" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-stone-500 text-sm uppercase tracking-widest">Collections</span>
        <h2 className="text-5xl font-serif text-stone-800 mt-3">Photo Galleries</h2>
      </div>

      <div className="relative">
        {/* Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300 -translate-x-1/2"></div>

        <div className="space-y-24 md:space-y-32">
          {GALLERIES.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Text Side */}
                <div className={`flex-1 text-center ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <span className="block text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-stone-800 mb-2">{item.title}</h3>
                  <h4 className="text-lg text-stone-500 font-serif italic mb-6">{item.subtitle}</h4>
                  <p className="text-stone-600 leading-relaxed mb-6 max-w-md mx-auto md:mx-0 inline-block">
                    {item.description}
                  </p>
                  <ul className="text-sm text-stone-500 space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Center Dot */}
                <div className="relative hidden md:flex items-center justify-center w-12 flex-shrink-0 z-10">
                  <div className="w-3 h-3 bg-stone-800 rounded-full border-4 border-[#F9F8F3]"></div>
                </div>

                {/* Image Side */}
                <div className={`flex-1 w-full ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="overflow-hidden rounded-sm shadow-xl">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
