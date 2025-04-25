
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

const Investment = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, imageRef, statRef],
  });

  return (
    <section className="py-20 bg-richBlack-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase opacity-0 translate-y-10 transition-all duration-700 ease-out">
              STOP FOLLOWING.<br /><span className="gold-text">START LEADING.</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <div ref={contentRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
              <p className="text-white/80 mb-8 text-lg">
                Your competitors are playing it safe - tweaking logos, updating websites, and wondering why they're still stuck in the same spot. Meanwhile, market leaders are making bold moves and capturing massive market share.
              </p>
              <p className="text-white/80 mb-8 text-lg">
                Our portfolio companies don't just participate in their markets - they define them. Through strategic positioning and relentless execution, we turn good brands into category kings.
              </p>
              <Link to="/investments" className="btn-gold inline-block text-xs tracking-widest">
                INVESTMENT STRATEGY
              </Link>
            </div>
          </div>
          <div className="relative">
            <div ref={imageRef} className="aspect-square rounded-md overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <img 
                src="/lovable-uploads/dbe0b70c-6cc1-45b0-9842-57e83052e510.png" 
                alt="Strategic brand ownership concept" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div ref={statRef} className="absolute -bottom-8 -right-8 glass-card gold-border p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
              <p className="text-2xl font-bold text-gold">7-9x</p>
              <p className="text-sm text-white/70">Average exit multiple<br />for portfolio companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
