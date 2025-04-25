
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
      {/* Main background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/80 z-10"></div>
        <img 
          src="/lovable-uploads/a6e990aa-17ce-415a-962a-88adb94aa003.png" 
          alt="Elegant suit with gold frame"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Main content layout */}
      <div className="container mx-auto relative z-20 flex flex-col min-h-[calc(100vh-120px)] pt-10 md:pt-0">
        <div className="flex flex-col md:flex-row h-full items-center">
          {/* Left column with logo */}
          <div 
            ref={logoRef} 
            className="w-full md:w-1/2 flex justify-center md:justify-start items-center mb-12 md:mb-0 px-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="max-w-md">
              <Logo size="lg" className="mx-auto md:mx-0" />
              <div className="mt-6 border-2 border-gold/30 w-3/4 mx-auto md:mx-0"></div>
            </div>
          </div>
          
          {/* Right column with text content */}
          <div className="w-full md:w-1/2 px-6 md:px-10 flex flex-col justify-center">
            <div className="backdrop-blur-sm bg-richBlack-dark/30 rounded-xl p-8 border border-gold/10">
              <div className="mb-8 text-gold text-sm uppercase tracking-widest font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out"
                ref={subtitleRef}>
                Disrupt. Scale. Dominate.
              </div>
              
              <h1 
                ref={titleRef}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out leading-tight"
              >
                <span className="block">YOU DON'T NEED</span>
                <span className="block">ANOTHER AGENCY.</span>
                <span className="gold-text shimmer-effect text-5xl md:text-7xl lg:text-8xl">YOU NEED AN EMPIRE.</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-white/90 mb-10 max-w-xl opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
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
      
      {/* Decorative border */}
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
