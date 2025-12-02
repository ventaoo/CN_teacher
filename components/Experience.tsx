
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-16 bg-stone/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Header */}
        <div className="md:col-span-4">
             <h2 className="font-serif text-4xl text-charcoal mb-4">{content.experience.sectionTitle}</h2>
             <p className="font-serif text-stone italic text-lg leading-relaxed">
               {content.experience.sectionDescription}
             </p>
        </div>

        {/* Right Column: List */}
        <div className="md:col-span-8 space-y-8">
          {content.experience.items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row md:items-baseline justify-between border-b border-stone/20 pb-6 hover:border-ochre/50 transition-colors"
            >
              <div className="md:w-1/4">
                 <span className="font-sans text-xs tracking-widest text-ochre/80">{item.year}</span>
              </div>
              
              <div className="md:w-2/4">
                 <h3 className="text-xl md:text-2xl text-charcoal font-serif italic group-hover:text-sienna transition-colors duration-300">
                    {item.title}
                 </h3>
              </div>
              
              <div className="md:w-1/4 md:text-right mt-2 md:mt-0">
                <span className="block font-serif text-stone text-base">{item.role}</span>
                <span className="block text-stone/40 text-[10px] tracking-widest uppercase mt-1">{item.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
