
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(content.hero.image.src);

  useEffect(() => {
    setImgSrc(content.hero.image.src);
  }, [content.hero.image.src]);

  const handleImageError = () => {
    // If the configured local path fails, switch to the remote fallback
    if (imgSrc !== content.hero.image.fallback) {
        console.log(`Failed to load local image ${imgSrc}. Switching to fallback.`);
        setImgSrc(content.hero.image.fallback);
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-6 md:px-16 pt-24 md:pt-0">
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left: Typography */}
        <div className="md:col-span-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-hand text-3xl text-ochre block mb-4">{content.hero.tagline}</span>
            
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.9] mb-8">
              {content.hero.titleLine1}<br/>
              <span className="italic text-stone">{content.hero.titleLine2}</span>
            </h1>

            <div className="h-[1px] w-24 bg-charcoal/20 mb-8" />

            <p className="font-serif text-lg text-stone leading-relaxed max-w-md italic">
              "{content.hero.quote}"
            </p>
            
            <p className="font-sans text-xs tracking-[0.2em] text-stone/60 mt-8 uppercase">
              {content.hero.tags}
            </p>
          </motion.div>
        </div>

        {/* Right: Featured Image / Canvas */}
        <div className="md:col-span-7 relative h-[60vh] md:h-[80vh] w-full">
           {/* Abstract Background Blotches */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ochre/5 rounded-full blur-[120px] mix-blend-multiply" />
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.3 }}
             className="relative w-full h-full"
           >
              {/* Main Image with "Frame" shadow */}
              <div className="absolute inset-0 bg-stone/5 transform rotate-2 rounded-sm" />
              {/* Placeholder bg color in case image takes time to load or fails */}
              <div className="w-full h-full bg-stone/20 animate-pulse absolute inset-0 -z-10"></div>
              
              <img 
                src={imgSrc} 
                alt="Teacher Portrait" 
                className="w-full h-full object-cover shadow-2xl shadow-stone/20 grayscale-[10%] hover:grayscale-0 transition-all duration-1000 ease-out bg-transparent"
                onError={handleImageError}
              />
           </motion.div>
        </div>

      </div>
    </section>
  );
};
