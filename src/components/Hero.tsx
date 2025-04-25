
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
      {/* Background with darkened overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/80 z-10"></div>
        <img 
          src="/lovable-uploads/d60a241c-168b-45ea-a47e-2cfe6820cb82.png" 
          alt="Bold branding concept visualization"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      {/* Main content layout with two columns */}
      <div className="container mx-auto relative z-20 flex flex-col min-h-[calc(100vh-120px)] pt-10 md:pt-0">
        <div className="flex flex-col md:flex-row h-full items-center">
          {/* Left column with logo */}
          <div 
            ref={logoRef} 
            className="w-full md:w-1/2 flex justify-center md:justify-end items-center mb-12 md:mb-0 px-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="max-w-md">
              <Logo size="lg" className="mx-auto md:mx-0" />
              <div className="mt-6 border-2 border-gold/30 w-3/4 mx-auto md:mx-0"></div>
            </div>
          </div>
          
          {/* Right column with text content */}
          <div className="w-full md:w-1/2 px-6 md:px-10 flex flex-col justify-center">
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
