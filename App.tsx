import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-canvas text-charcoal min-h-screen selection:bg-ochre selection:text-white">
      {/* Layout Container */}
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* Navigation Sidebar */}
        <Navbar />
        
        {/* Main Scrolling Content */}
        <main className="flex-1 w-full md:ml-72 transition-all duration-300">
          <Hero />
          <Philosophy />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;