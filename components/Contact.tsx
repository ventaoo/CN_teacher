
import React, { useState } from 'react';
import { Send, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../content';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40 px-6 md:px-16 bg-canvas relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
        
        <div className="max-w-2xl relative z-10">
            <span className="font-hand text-3xl text-ochre mb-6 block">{content.contact.tagline}</span>
            
            <h2 
                className="font-serif text-6xl md:text-8xl text-charcoal block leading-[0.9] mb-12 whitespace-pre-line"
            >
                {content.contact.callToAction}
            </h2>

            <div className="flex gap-12 font-serif text-stone italic text-lg">
                <div>
                    <span className="block text-xs font-sans not-italic text-stone/40 uppercase tracking-widest mb-2">{content.contact.emailLabel}</span>
                    
                    <button 
                      onClick={handleCopyEmail}
                      className="group relative flex items-center gap-2 hover:text-ochre transition-colors duration-300 text-left"
                      title="Click to copy email"
                    >
                      {content.profile.email}
                      <Copy size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                      
                      {/* Copied Feedback Tooltip */}
                      <AnimatePresence>
                        {copied && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-8 left-0 bg-charcoal text-white text-[10px] px-3 py-1 rounded font-sans tracking-widest uppercase flex items-center gap-1"
                          >
                             Скопировано <Check size={10} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                </div>
                <div>
                    <span className="block text-xs font-sans not-italic text-stone/40 uppercase tracking-widest mb-2">{content.contact.platformsLabel}</span>
                    {content.contact.platforms}
                </div>
            </div>
        </div>

        {/* Big Arrow Decoration -> Telegram Link */}
        <div className="mt-12 md:mt-0">
            <a 
              href="https://t.me/zwtttttt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-24 rounded-full border border-charcoal/20 flex items-center justify-center group hover:bg-charcoal hover:border-charcoal transition-all duration-500 cursor-pointer block"
            >
                <Send size={32} className="text-charcoal group-hover:text-white transition-colors duration-500 pr-1 pt-1" />
            </a>
        </div>

      </div>
      
      {/* Background Text Decoration */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.03]">
          <span className="font-serif text-[20vw] leading-none text-charcoal">{content.contact.backgroundText}</span>
      </div>
    </section>
  );
};
