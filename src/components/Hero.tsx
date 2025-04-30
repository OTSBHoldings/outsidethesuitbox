
import React, { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
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
      className="relative min-h-[100vh] overflow-hidden pt-16 md:pt-24" 
      aria-label="Hero section"
    >
      {/* Main background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-richBlack-dark/80 z-10"></div>
        <img 
          src="/lovable-uploads/a6e990aa-17ce-415a-962a-88adb94aa003.png" 
          alt="Elegant suit with gold frame"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      {/* Data visualization overlay */}
      <div className="absolute inset-0 z-5 opacity-20">
        <img 
          src="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" 
          alt="Data visualization"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Main content layout */}
      <div className="container mx-auto relative z-20 flex flex-col min-h-screen px-4 md:px-6">
        <div className="flex flex-col items-center justify-center flex-grow max-w-[1400px] mx-auto text-center">
          <div className="w-full max-w-4xl">
            <div 
              className="mb-4 md:mb-6 text-gold text-xs uppercase tracking-widest font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out"
              ref={subtitleRef}
            >
              Uncover Hidden Search Opportunities
            </div>
            
            <h1 
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 md:mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out leading-[1.2] md:leading-[1.1]"
            >
              <span className="block mb-2 md:mb-3">TRACK YOUR BRAND'S</span>
              <span className="block mb-2 md:mb-3">VISIBILITY ACROSS</span>
              <span className="gold-text shimmer-effect text-4xl md:text-6xl lg:text-7xl xl:text-8xl">AI & SEARCH ENGINES</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-base md:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out leading-relaxed px-4 md:px-0"
            >
              Our enterprise SEO platform reveals the <span className="text-gold font-medium">46% of valuable queries</span> hidden from standard analytics. Compare against competitors, discover key topics driving AI search traffic, and unlock unprecedented growth opportunities.
            </p>
            
            <div 
              ref={buttonRef}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-4 md:mt-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300 mb-16 md:mb-24"
            >
              <Link 
                to="/demo" 
                className="btn-gold group text-sm tracking-widest flex items-center justify-center px-6 md:px-10 py-3 w-full sm:w-auto"
              >
                SEE THE PLATFORM IN ACTION
                <ArrowRight className="ml-3 h-4 md:h-5 w-4 md:w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/free-analysis" 
                className="btn-outline text-sm tracking-widest px-6 md:px-10 py-3 w-full sm:w-auto"
              >
                GET A FREE ANALYSIS
              </Link>
            </div>
            
            {/* Statistical highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500" ref={buttonRef}>
              {[
                { stat: "46%", label: "Hidden queries revealed" },
                { stat: "127%", label: "Average traffic growth" },
                { stat: "72%", label: "Increased AI visibility" }
              ].map((item, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="text-2xl font-bold text-gold">{item.stat}</div>
                  <div className="text-xs text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative border */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[8px] md:border-[12px] border-gold/10 m-4 sm:m-8 md:m-16 lg:m-20"></div>
      
      {/* Gold line positioned below buttons */}
      <div className="absolute bottom-12 md:bottom-16 left-0 right-0 h-px bg-gold/30 z-20"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-white text-[10px] md:text-xs tracking-widest mb-2">SCROLL</span>
        <ChevronDown className="text-white animate-bounce h-5 w-5" />
      </div>
    </section>
  );
};

export default Hero;
