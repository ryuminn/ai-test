import React, { useState } from 'react';
import { PROFILE_STATS, QUOTE } from '../constants';

const Profile: React.FC = () => {
  const [mainImage, setMainImage] = useState("https://picsum.photos/800/1000?random=4");
  const [smallImage, setSmallImage] = useState("https://picsum.photos/400/400?random=5");

  const swapImages = () => {
    setMainImage(smallImage);
    setSmallImage(mainImage);
  };

  return (
    <section id="profile" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <blockquote className="font-serif text-2xl md:text-4xl text-stone-800 leading-relaxed italic">
          "{QUOTE}"
        </blockquote>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Grid */}
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
            <img
              src={mainImage}
              alt="Pie Portrait"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div 
            onClick={swapImages}
            className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F9F8F3] p-4 hidden md:block cursor-pointer hover:rotate-2 transition-transform duration-300 shadow-lg"
          >
            <img 
               src={smallImage}
               alt="Pie Small"
               className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-8 lg:pl-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">The Star</span>
            <h2 className="text-5xl font-serif text-stone-800 mb-6">Who is Pie?</h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              A curious soul with a heart of gold (and a stomach for Churu). Pie brings warmth to every corner of the house, turning ordinary days into extraordinary memories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-stone-200 pt-8">
            {PROFILE_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2">
                <span className="font-bold text-stone-800 min-w-[120px] uppercase text-sm tracking-wide">
                  {stat.label}
                </span>
                <span className="text-stone-600 font-serif italic">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;