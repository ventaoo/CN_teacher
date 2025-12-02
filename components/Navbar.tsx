
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track active section for sidebar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = content.navigation.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-72 flex-col justify-between border-r border-stone/10 bg-canvas/50 backdrop-blur-sm z-40 p-10">
        
        {/* Header */}
        <div className="mt-4">
          <button onClick={scrollToTop} className="block font-hand text-5xl text-charcoal hover:text-ochre transition-colors duration-500 -rotate-2 text-left">
            {content.profile.name}.
          </button>
          <span className="block mt-4 text-xs font-sans tracking-[0.2em] text-stone/60 uppercase">
            {content.profile.title}<br/>{content.profile.subtitle}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {content.navigation.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-serif text-lg tracking-wide transition-all duration-300 group flex items-center gap-3 text-left ${
                  isActive ? 'text-ochre italic translate-x-2' : 'text-stone hover:text-charcoal'
                }`}
              >
                <span className={`h-[1px] bg-ochre transition-all duration-300 ${isActive ? 'w-4' : 'w-0 group-hover:w-2'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className="mb-4">
          <p className="text-[10px] text-stone/40 font-sans tracking-widest uppercase leading-relaxed">
            {content.profile.location}<br/>
            &copy; {content.profile.copyrightYear}
          </p>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-canvas/90 backdrop-blur-md flex justify-between items-center border-b border-stone/5">
        <button onClick={scrollToTop} className="font-hand text-3xl text-charcoal">{content.profile.name}.</button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-charcoal p-1">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="md:hidden fixed inset-0 z-40 bg-canvas flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {content.navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="font-serif text-3xl text-charcoal hover:text-ochre italic transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => scrollToSection('#contact')} className="mt-8 px-8 py-3 border border-stone/20 rounded-full text-sm font-sans tracking-widest uppercase text-charcoal">
                Записаться
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};