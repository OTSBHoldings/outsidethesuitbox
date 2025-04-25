
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

const Technology = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, imageRef, statRef],
  });

  return (
    <section className="py-20 bg-richBlack relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div ref={imageRef} className="aspect-[4/3] rounded-md overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <img 
                src="/lovable-uploads/12059f12-6504-45bd-8015-b304aef5ff43.png" 
                alt="Strategic technology integration" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div ref={statRef} className="absolute -top-8 -right-8 glass-card gold-border p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
              <p className="text-2xl font-bold text-gold">24M+</p>
              <p className="text-sm text-white/70">Monthly impressions<br />across our platforms</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase opacity-0 translate-y-10 transition-all duration-700 ease-out">
              WHERE <span className="gold-text">STRATEGY</span><br />MEETS EXECUTION
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <div ref={contentRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
              <p className="text-white/80 mb-8 text-lg">
                We're not interested in vanity metrics or industry awards. We measure success in revenue, growth, and market dominance.
              </p>
              <p className="text-white/80 mb-8 text-lg">
                Our holding structure allows us to deploy capital, expertise, and resources across our brand portfolio with maximum efficiency.
              </p>
              <Link to="/services" className="btn-gold inline-block text-xs tracking-widest">
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
