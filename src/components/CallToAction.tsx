
import React from 'react';
import Logo from './Logo';

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/80 z-10"></div>
        <img 
          src="/lovable-uploads/6e0b9d96-dc3c-4361-8cc8-63bf3b3dc8ed.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <Logo size="sm" className="mx-auto mb-8" />
          
          <h2 className="heading-lg mb-8 text-white">
            Ready to <span className="gold-text shimmer-effect">Transform</span> Your Brand?
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's collaborate to create marketing strategies that break conventional boundaries and deliver exceptional results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#contact" className="btn-gold">Schedule a Consultation</a>
            <a href="#portfolio" className="btn-outline">View Our Work</a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
      
      {/* Gold frame overlay */}
      <div className="absolute inset-0 pointer-events-none z-5 border-[12px] border-gold/20 m-12 sm:m-16 md:m-20 lg:m-24"></div>
    </section>
  );
};

export default CallToAction;
