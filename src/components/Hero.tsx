
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/70 z-10"></div>
        <img 
          src="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" 
          alt="Elegant background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center py-20 md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="heading-xl mb-6 text-white font-display">
            BREAKING THE FRAME. <br />
            <span className="gold-text shimmer-effect">REDEFINING SUCCESS.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            Luxury meets disruption. We engineer sophisticated brand experiences 
            that outperform, outclass, and outlast the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <a href="#services" className="btn-gold">ELEVATE YOUR BRAND</a>
            <a href="#contact" className="btn-outline">CONSULT WITH US</a>
          </div>
        </div>
      </div>
      
      {/* Gold frame overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[20px] border-gold/20 m-8 sm:m-12 md:m-16 lg:m-20"></div>
    </section>
  );
};

export default Hero;
