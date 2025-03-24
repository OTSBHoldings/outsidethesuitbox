
import React from 'react';
import Logo from './Logo';
import { ChevronDown } from 'lucide-react';

const HeroFeature = () => {
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/60 z-10"></div>
        <img 
          src="/lovable-uploads/6e0b9d96-dc3c-4361-8cc8-63bf3b3dc8ed.png" 
          alt="Elegant suit with gold branding"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in">
            <Logo size="lg" className="mx-auto" />
          </div>
          
          <h1 className="heading-xl mb-6 text-white opacity-0 animate-fade-in-delay-1">
            Think <span className="gold-text shimmer-effect">Beyond</span> Conventional Marketing
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            We help ambitious brands break free from ordinary marketing approaches to achieve extraordinary results through strategic vision and creative excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-delay-3">
            <a href="#services" className="btn-gold">Explore Services</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>
      
      {/* Stats overlay */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "150+", label: "Satisfied Clients" },
              { number: "94%", label: "Client Retention" },
              { number: "25+", label: "Industry Awards" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-4 opacity-0 animate-fade-in-delay-3">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gold frame overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[20px] border-gold/20 m-8 sm:m-12 md:m-16 lg:m-20"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-30" onClick={scrollToNextSection}>
        <ChevronDown className="text-gold h-10 w-10" />
      </div>
    </section>
  );
};

export default HeroFeature;
