
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import Logo from './Logo';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, subtitleRef, buttonRef, logoRef],
  });

  return (
    <section 
      className="relative min-h-screen overflow-hidden pt-24 md:pt-32" 
      aria-label="Hero section"
    >
      {/* Background image grid */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 gap-4 p-4">
        <div className="relative h-full">
          <div className="absolute inset-0 bg-richBlack-dark/80 z-10"></div>
          <img 
            src="/lovable-uploads/e5d7b0cc-6cad-468f-845b-2c561f3c8a7b.png" 
            alt="Professional suit display"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-rows-2 gap-4 h-full">
          <div className="relative">
            <div className="absolute inset-0 bg-richBlack-dark/80 z-10"></div>
            <img 
              src="/lovable-uploads/2f2abc40-e2f2-45a2-ae52-594ad6a66d35.png" 
              alt="Laptop with brand logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-richBlack-dark/80 z-10"></div>
            <img 
              src="/lovable-uploads/aaf800ad-715f-45e4-a70c-104a38a8420a.png" 
              alt="Elegant suit with gold frame"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Main content layout with two columns */}
      <div className="container mx-auto relative z-20 flex flex-col min-h-[calc(100vh-120px)] pt-10 md:pt-0">
        <div className="flex flex-col md:flex-row h-full items-center">
          {/* Left column with logo */}
          <div 
            ref={logoRef} 
            className="w-full md:w-1/2 flex justify-center md:justify-end items-center mb-12 md:mb-0 px-6 opacity-0 translate-y-10 transition-all duration-700 ease-out backdrop-blur-sm bg-richBlack-dark/50 rounded-xl p-8"
          >
            <div className="max-w-md">
              <Logo size="lg" className="mx-auto md:mx-0" />
              <div className="mt-6 border-2 border-gold/30 w-3/4 mx-auto md:mx-0"></div>
            </div>
          </div>
          
          {/* Right column with text content */}
          <div className="w-full md:w-1/2 px-6 md:px-10 flex flex-col justify-center">
            <div className="backdrop-blur-sm bg-richBlack-dark/50 rounded-xl p-8">
              <div className="mb-8 text-gold text-sm uppercase tracking-widest font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out"
                ref={subtitleRef}>
                Disrupt. Scale. Dominate.
              </div>
              
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <span className="block">YOU DON'T NEED</span>
                <span className="block">ANOTHER AGENCY.</span>
                <span className="gold-text shimmer-effect">YOU NEED AN EMPIRE.</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-white/80 mb-10 max-w-xl opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
              >
                We're not here to play small. We acquire and transform brands into market leaders through ruthless execution and strategic positioning. No fluff. No BS. Just results that speak for themselves.
              </p>
              
              <div 
                ref={buttonRef}
                className="flex flex-col sm:flex-row gap-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500"
              >
                <Link to="/portfolio" className="btn-gold group text-xs tracking-widest flex items-center justify-center">
                  SEE THE PROOF
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/investments" className="btn-outline text-xs tracking-widest">HOW WE INVEST</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[12px] border-gold/10 m-8 sm:m-12 md:m-16 lg:m-20"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-white text-xs tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-12 bg-white/60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
