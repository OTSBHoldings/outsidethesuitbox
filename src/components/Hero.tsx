
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/60 z-10"></div>
        <img 
          src="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" 
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          aria-hidden="true"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 py-20 md:py-0 md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0 md:ml-12 lg:ml-24">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            CHAMPIONS <br className="hidden md:block" />
            IDEAS <br className="hidden md:block" />
            <span className="gold-text shimmer-effect">NOT EGOS.</span>
          </h1>
          
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
          >
            We'll help you make strategic and creative leaps that will drive change inside and outside your business. We will challenge you, we will change you, and you just might change the world.
          </p>
          
          <div 
            ref={buttonRef}
            className="flex flex-col sm:flex-row gap-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500"
          >
            <a href="#services" className="btn-gold text-xs tracking-widest">ELEVATE YOUR BRAND</a>
            <a href="#contact" className="btn-outline text-xs tracking-widest">CONSULT WITH US</a>
          </div>
        </div>
      </div>
      
      {/* Frame aesthetic */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[12px] border-gold/10 m-8 sm:m-12 md:m-16 lg:m-20"></div>
    </section>
  );
};

export default Hero;
