
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

const ContactHeader = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef],
  });

  return (
    <div 
      ref={titleRef}
      className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Get In Touch</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
        Let's Make Your Brand Lovable
      </h2>
      <div className="w-16 h-1 bg-gold mb-8"></div>
      <p className="text-white/70">
        Ready to leave the suit behind and create something extraordinary? We selectively partner with brands positioned for bold growth and committed to brave thinking.
      </p>
    </div>
  );
};

export default ContactHeader;
