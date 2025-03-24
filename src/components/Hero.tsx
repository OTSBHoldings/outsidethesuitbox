
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-richBlack-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_rgba(10,10,10,0)_70%)]"></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/5 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gold/5 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-gold/5 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <h5 className="uppercase tracking-wider text-gold mb-6 opacity-0 animate-fade-in-delay-1">Branding & Marketing Agency</h5>
        <h1 ref={textRef} className="heading-xl mb-8 opacity-0 transition-all duration-700 ease-out">
          Think <span className="gold-text">Outside</span> <br className="md:hidden" />
          the <span className="gold-text">Suitbox</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/80 mb-12 text-lg opacity-0 animate-fade-in-delay-2">
          Elevating brands through innovative marketing strategies that break conventional boundaries and create memorable experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 animate-fade-in-delay-3">
          <a href="#contact" className="btn-gold">Get Started</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown className="text-gold h-10 w-10" />
      </div>
    </section>
  );
};

export default Hero;
