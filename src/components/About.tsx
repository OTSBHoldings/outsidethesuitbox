
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    "Strategically engineered brand narratives",
    "Aesthetically advanced creative expressions",
    "Data-informed decision architecture",
    "Elite team of industry innovators"
  ];

  return (
    <section id="about" className="section-padding bg-richBlack-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h5 className="uppercase tracking-wider text-gold mb-4">Our Approach</h5>
            <h2 className="heading-lg mb-6">THE PHILOSOPHY</h2>
            <p className="text-white/70 mb-8">
              Established in 2018 to redefine the boundaries of what marketing can achieve.
            </p>
            <p className="text-white/70 mb-8">
              The truth most agencies won't tell you: exceptional marketing isn't about following trends—it's about setting them. 
              <span className="text-gold font-semibold"> Outside the Suitbox</span> was founded on the principle that true 
              brand elevation requires both artistic vision and analytical precision.
            </p>
            <p className="text-white/70 mb-8">
              Our methodology combines sophisticated strategy with flawless execution to create brand experiences that 
              transcend conventional marketing and deliver measurable, sustainable growth.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-gold mr-3 h-6 w-6 flex-shrink-0" />
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-gold">INITIATE THE PROCESS</a>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-richBlack-dark/80 mix-blend-overlay"></div>
              <img 
                src="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png"
                alt="Think outside the suitbox" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-card gold-border p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm uppercase">Client Retention</h4>
                  <span className="text-gold text-xl font-bold">97%</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm uppercase">Average ROI</h4>
                  <span className="text-gold text-xl font-bold">4.2X</span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm uppercase">Industries Transformed</h4>
                  <span className="text-gold text-xl font-bold">35+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
