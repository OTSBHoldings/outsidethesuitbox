
import React from 'react';

const HeroFeature = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/60 z-10"></div>
        <img 
          src="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" 
          alt="Elegant suit with gold frame"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in">
            <img 
              src="/lovable-uploads/b20c775d-6744-493e-81b3-bfa2f554d8ed.png" 
              alt="Outside the Suitbox Logo" 
              className="h-32 md:h-40 mx-auto"
            />
          </div>
          
          <h1 className="heading-xl mb-6 text-white opacity-0 animate-fade-in-delay-1">
            Think <span className="gold-text shimmer-effect">Beyond</span> Conventional Marketing
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            We help ambitious brands break free from ordinary marketing approaches to achieve extraordinary results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-delay-3">
            <a href="#services" className="btn-gold">Explore Services</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>
      
      {/* Gold frame overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[20px] border-gold/20 m-8 sm:m-12 md:m-16 lg:m-20"></div>
    </section>
  );
};

export default HeroFeature;
