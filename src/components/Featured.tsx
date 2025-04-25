
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

const Featured = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, statRef],
  });

  return (
    <section className="py-20 bg-richBlack-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase opacity-0 translate-y-10 transition-all duration-700 ease-out">
              BREAK THE <span className="gold-text">CONVENTIONAL</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <div ref={contentRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
              <p className="text-white/80 mb-8 text-lg">
                Most marketing is a waste of money. Most agencies sell you what's easy, not what works. Most brands fade into mediocrity because they're too afraid to stand out.
              </p>
              <p className="text-white/80 mb-8 text-lg">
                We're not most companies. We acquire, transform, and scale brands with a ruthless focus on measurable results.
              </p>
              <Link to="/about" className="btn-gold inline-block text-xs tracking-widest">
                OUR APPROACH
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-md overflow-hidden">
              <img 
                src="/lovable-uploads/f5ca3131-d4aa-44a2-ad54-0a719adc4f0c.png" 
                alt="Breaking conventional business norms" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div ref={statRef} className="absolute -bottom-8 -left-8 bg-richBlack p-6 border border-gold/20 opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <p className="text-2xl font-bold text-gold">89%</p>
              <p className="text-sm text-white/70">Average ROI increase<br />for our portfolio brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
