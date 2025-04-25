import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, subtitleRef, buttonRef],
  });

  return (
    <section 
      className="relative min-h-[120vh] overflow-hidden pt-32 md:pt-40" 
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
      <div className="container mx-auto relative z-20 flex flex-col min-h-[calc(120vh-120px)] pt-20 md:pt-10">
        <div className="flex flex-col items-start justify-center h-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="w-full max-w-4xl mt-20">
            <div 
              className="mb-6 text-gold text-sm uppercase tracking-widest font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out"
              ref={subtitleRef}
            >
              Disrupt. Scale. Dominate.
            </div>
            
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out leading-[1.1]"
            >
              <span className="block mb-3">YOU DON'T NEED</span>
              <span className="block mb-3">ANOTHER AGENCY.</span>
              <span className="gold-text shimmer-effect text-6xl md:text-8xl lg:text-9xl">YOU NEED AN EMPIRE.</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl opacity-0 translate-y-10 transition-all duration-1000 ease-out leading-relaxed"
            >
              We're not here to play small. We acquire and transform brands into market leaders through ruthless execution and strategic positioning. No fluff. No BS. Just results that speak for themselves.
            </p>
            
            <div 
              ref={buttonRef}
              className="flex flex-col sm:flex-row gap-6 mt-20 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500"
            >
              <Link to="/portfolio" className="btn-gold group text-sm tracking-widest flex items-center justify-center px-10 py-3">
                SEE THE PROOF
                <ArrowRight className="ml-3 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/investments" className="btn-outline text-sm tracking-widest px-10 py-3">HOW WE INVEST</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative border */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[12px] border-gold/10 m-8 sm:m-12 md:m-16 lg:m-20"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-white text-xs tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-12 bg-white/60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
