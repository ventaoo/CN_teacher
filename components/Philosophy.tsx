
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { PhilosophyItem } from '../types';

const PhilosophyCard: React.FC<{ work: PhilosophyItem; index: number }> = ({ work, index }) => {
  const [imgSrc, setImgSrc] = useState(work.image.src);

  const handleImageError = () => {
    // If the configured local path fails, switch to the remote fallback
    if (imgSrc !== work.image.fallback) {
        setImgSrc(work.image.fallback);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`group flex flex-col ${index % 2 === 1 ? 'md:mt-32' : ''}`}
    >
      <div className="relative mb-6 cursor-pointer">
         {/* Image Frame */}
         <div className="overflow-hidden bg-stone/5 aspect-[4/5] relative">
            <div className="absolute inset-0 border-[12px] border-white z-10 shadow-inner opacity-80" />
            <img 
                src={imgSrc} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                onError={handleImageError}
            />
         </div>
      </div>
      
      <div className="flex justify-between items-baseline border-t border-stone/10 pt-4">
        <h3 className="text-2xl font-serif text-charcoal italic group-hover:text-ochre transition-colors">{work.title}</h3>
        <span className="text-stone font-sans text-[10px] tracking-widest uppercase">{work.description}</span>
      </div>
    </motion.div>
  );
};

export const Philosophy: React.FC = () => {
  return (
    <section id="methodology" className="py-32 px-6 md:px-16 bg-canvas">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-6 border-b border-charcoal/10">
            <div>
                <span className="font-sans text-xs tracking-[0.3em] text-ochre uppercase block mb-2">{content.methodology.sectionSubtitle}</span>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal italic">{content.methodology.sectionTitle}</h2>
            </div>
            <p className="font-hand text-xl text-stone mt-4 md:mt-0">{content.methodology.sectionQuote}</p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {content.methodology.items.map((work, index) => (
            <PhilosophyCard key={index} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
