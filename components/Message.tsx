import React from 'react';
import { MESSAGE, CONTACT } from '../constants';
import { Mail, Instagram } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <section id="message" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-[#EAE8E2] overflow-hidden rounded-sm shadow-sm flex flex-col md:flex-row">
        
        {/* Left: Content */}
        <div className="flex-1 p-10 md:p-20 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-4">
            A Note
          </span>
          <h2 className="text-4xl font-serif text-stone-800 mb-8 leading-tight">
            {MESSAGE.title}
          </h2>
          <p className="font-serif italic text-xl text-stone-700 leading-relaxed mb-12">
            "{MESSAGE.body}"
          </p>

          <div className="border-t border-stone-300 pt-10 mt-auto">
             <h3 className="text-lg font-serif text-stone-800 mb-6">Contact & Follow</h3>
             <div className="flex flex-col gap-4">
                <a 
                  href={CONTACT.instagramUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer w-fit"
                >
                   <Instagram size={20} />
                   <span className="tracking-wide">{CONTACT.instagram}</span>
                </a>
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer w-fit"
                >
                   <Mail size={20} />
                   <span className="tracking-wide">{CONTACT.email}</span>
                </a>
             </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 min-h-[400px]">
          <img 
            src="https://picsum.photos/900/1200?random=8" 
            alt="Pie Looking Cute" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Message;
