
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-fade-in-left');
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-fade-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const features = [
    "Results-driven strategies tailored to your objectives",
    "Creative solutions that break industry norms",
    "Data-backed decision making for maximum ROI",
    "Award-winning team of industry experts"
  ];

  return (
    <section id="about" className="section-padding bg-richBlack-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="opacity-0">
            <h5 className="uppercase tracking-wider text-gold mb-4">About Us</h5>
            <h2 className="heading-lg mb-6">Revolutionizing Brand Experiences</h2>
            <p className="text-white/70 mb-8">
              Founded in 2018, <span className="text-gold font-semibold">Outside the Suitbox</span> was born from a vision to challenge conventional marketing approaches. We believe that extraordinary results come from daring to think differently and pushing creative boundaries.
            </p>
            <p className="text-white/70 mb-8">
              Our team combines strategic insight with creative excellence to deliver marketing solutions that not only meet business objectives but create meaningful connections with audiences.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-gold mr-3 h-6 w-6 flex-shrink-0" />
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-gold">Get in Touch</a>
          </div>
          
          <div ref={imageRef} className="opacity-0">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-richBlack-dark/80 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 glass-card gold-border p-6 w-64">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold">Client Success</h4>
                  <span className="text-gold text-2xl font-bold">97%</span>
                </div>
                <p className="text-sm text-white/70">Client satisfaction rate across our services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
