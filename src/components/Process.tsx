
import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

const Process = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('after:w-24');
            entry.target.classList.remove('after:w-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Strategic Discovery",
      description: "We begin with a deep dive into your business, market position, and objectives to develop a tailored strategy."
    },
    {
      number: "02",
      title: "Creative Concept Development",
      description: "Our team crafts innovative concepts that align with your brand values and resonate with your target audience."
    },
    {
      number: "03",
      title: "Execution & Implementation",
      description: "We bring your campaign to life with meticulous attention to detail and cross-platform integration."
    },
    {
      number: "04",
      title: "Analysis & Optimization",
      description: "Continuous monitoring and data-driven refinement ensure maximum performance and ROI."
    }
  ];

  return (
    <section id="process" className="section-padding bg-richBlack">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Logo size="sm" className="mx-auto mb-6" />
          <h5 className="uppercase tracking-wider text-gold mb-4">How We Work</h5>
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:bg-gold after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:transition-all after:duration-1000"
          >
            Our Proven Process
          </h2>
          <p className="max-w-2xl mx-auto text-white/70">
            A methodical approach that consistently delivers exceptional results for our clients, balancing strategic thinking with creative execution.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gold/30 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Process steps */}
          <div className="space-y-24 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-6 h-6 rounded-full bg-gold"></div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="glass-card p-8 transform transition-all duration-700 hover:scale-105">
                    <div className="text-3xl font-bold text-gold mb-3">{step.number}</div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
                
                {/* Spacing for alternate layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
