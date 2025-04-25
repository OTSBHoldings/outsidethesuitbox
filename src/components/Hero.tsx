
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
      className="relative min-h-[120vh] overflow-hidden pt-20 md:pt-32" 
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
      <div className="container mx-auto relative z-20 flex flex-col min-h-[calc(120vh-80px)] px-4 md:px-6">
        <div className="flex flex-col items-center justify-center h-full max-w-[1400px] mx-auto text-center">
          <div className="w-full max-w-4xl mt-16 md:mt-20">
            <div 
              className="mb-4 md:mb-6 text-gold text-xs uppercase tracking-widest font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out"
              ref={subtitleRef}
            >
              Disrupt. Scale. Dominate.
            </div>
            
            <h1 
              ref={titleRef}
              className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out leading-[1.2] md:leading-[1.1]"
            >
              <span className="block mb-2 md:mb-3">YOU DON'T NEED</span>
              <span className="block mb-2 md:mb-3">ANOTHER AGENCY.</span>
              <span className="gold-text shimmer-effect text-4xl md:text-7xl lg:text-8xl">YOU NEED AN EMPIRE.</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-base md:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out leading-relaxed px-4 md:px-0"
            >
              We're not here to play small. We acquire and transform brands into market leaders through ruthless execution and strategic positioning. No fluff. No BS. Just results that speak for themselves.
            </p>
            
            <div 
              ref={buttonRef}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-8 md:mt-20 mb-40 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500"
            >
              <Link 
                to="/portfolio" 
                className="btn-gold group text-sm tracking-widest flex items-center justify-center px-6 md:px-10 py-3 w-full sm:w-auto"
              >
                SEE THE PROOF
                <ArrowRight className="ml-3 h-4 md:h-5 w-4 md:w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/investments" 
                className="btn-outline text-sm tracking-widest px-6 md:px-10 py-3 w-full sm:w-auto"
              >
                HOW WE INVEST
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative border - adjusted for mobile */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[8px] md:border-[12px] border-gold/10 m-4 sm:m-8 md:m-16 lg:m-20"></div>
      
      {/* Gold line positioned below buttons with more space on mobile */}
      <div className="absolute bottom-20 md:bottom-24 left-0 right-0 h-px bg-gold/30 z-20"></div>
      
      {/* Scroll indicator with improved mobile spacing */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-white text-[10px] md:text-xs tracking-widest mb-2">SCROLL</span>
        <div className="w-[1px] h-8 md:h-12 bg-white/60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
