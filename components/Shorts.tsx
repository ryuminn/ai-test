import React, { useState } from 'react';
import { SHORTS } from '../constants';
import { Play, X } from 'lucide-react';
import { VideoItem } from '../types';

const Shorts: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="shorts" className="py-20 bg-[#F3F0EB]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Daily Shorts</h2>
             <p className="text-stone-600">
               Cat videos are the internet's greatest gift. Here are a few snippets of Pie's daily life, from purring sessions to biscuit-making duty.
             </p>
          </div>
          <div className="hidden md:block">
             <button className="text-sm font-bold uppercase tracking-widest border-b border-stone-800 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors">
               View All Videos
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHORTS.map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer"
              onClick={() => openVideo(video)}
            >
              <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden rounded-sm bg-stone-300 mb-6">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg">
                    <Play fill="currentColor" className="text-stone-900" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-2">{video.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{video.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={closeVideo}
        >
          {/* Close Button */}
          <button 
            onClick={closeVideo}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[70] p-2 bg-black/20 rounded-full"
          >
            <X size={32} />
          </button>

          {/* Modal Content */}
          <div 
            className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent close on content click
          >
            {/* Video Player Area */}
            <div className="flex-1 bg-black flex items-center justify-center">
              <video 
                src={selectedVideo.videoUrl} 
                controls 
                autoPlay 
                className="max-h-[80vh] w-full h-full object-contain"
                poster={selectedVideo.thumbnail}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Side Info Panel (Desktop) / Bottom Info (Mobile) */}
            <div className="bg-white p-6 md:p-8 md:w-80 flex flex-col justify-center border-l border-stone-100">
               <h3 className="text-2xl font-serif text-stone-800 mb-4">{selectedVideo.title}</h3>
               <p className="text-stone-600 leading-relaxed text-sm mb-6">
                 {selectedVideo.description}
               </p>
               <div className="mt-auto pt-6 border-t border-stone-200">
                 <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">
                   Now Playing
                 </div>
                 <div className="flex items-center gap-2 text-stone-800">
                    <Play size={14} fill="currentColor" />
                    <span className="text-sm font-semibold">Watch more</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shorts;
