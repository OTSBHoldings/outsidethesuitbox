
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const statBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    textRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    if (imageRef.current) observer.observe(imageRef.current);
    if (statBoxRef.current) observer.observe(statBoxRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      textRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (statBoxRef.current) observer.unobserve(statBoxRef.current);
    };
  }, []);

  const features = [
    "Change is more than skin deep",
    "Being brave doesn't mean taking risks",
    "Global doesn't mean all over the place",
    "Prima donnas aren't allowed"
  ];

  return (
    <section id="about" className="section-padding bg-richBlack-light pt-28 pb-28" aria-label="About section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="px-6 md:px-0">
            <div 
              className="uppercase tracking-widest text-gold mb-3 text-xs font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out"
              ref={el => textRefs.current[0] = el}
            >
              Our Philosophy
            </div>
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase opacity-0 translate-y-10 transition-all duration-700 ease-out delay-150"
            >
              Ideas, Not Egos
            </h2>
            <div 
              className="w-16 h-1 bg-gold mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
              ref={el => textRefs.current[1] = el}
            ></div>
            <p 
              className="text-white/70 mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-450"
              ref={el => textRefs.current[2] = el}
            >
              Outside the Suitbox was founded on the belief that branding should be brave, bold, and transformative.
            </p>
            <p 
              className="text-white/70 mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-600"
              ref={el => textRefs.current[3] = el}
            >
              We've built an agency that champions ideas over egos, a process that rewards brave clients, and a culture that celebrates unconventional thinking. 
              <span className="text-gold font-semibold"> We will challenge you, we will change you, and you just might change the world.</span>
            </p>
            <p 
              className="text-white/70 mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-750"
              ref={el => textRefs.current[4] = el}
            >
              We're more than just designers and strategists; we're partners who are invested in your success. Our collaborative approach ensures that we're always aligned with your vision and goals.
            </p>
            
            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${900 + (index * 150)}ms` }}
                  ref={el => featureRefs.current[index] = el}
                >
                  <CheckCircle className="text-gold mr-3 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
            
            <div 
              className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
              style={{ transitionDelay: '1500ms' }}
              ref={el => textRefs.current[5] = el}
            >
              <a 
                href="#partnership" 
                className="btn-gold inline-block text-xs tracking-widest"
              >
                LEARN ABOUT OUR PARTNERSHIP APPROACH
              </a>
            </div>
          </div>
          
          <div 
            className="relative opacity-0 translate-y-10 transition-all duration-1000 ease-out px-6 md:px-0"
            ref={imageRef}
          >
            <div className="aspect-square rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-richBlack-dark/80 mix-blend-overlay z-10"></div>
              <img 
                src="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png"
                alt="Ideas not egos - Outside the Suitbox philosophy" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div 
              className="absolute -bottom-8 -left-8 glass-card gold-border p-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-700"
              ref={statBoxRef}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs uppercase tracking-wider">Quality First</h4>
                    <span className="text-gold text-xl font-bold">100%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1">
                    <div className="bg-gold h-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs uppercase tracking-wider">Bold Ideas</h4>
                    <span className="text-gold text-xl font-bold">∞</span>
                  </div>
                  <div className="w-full bg-white/10 h-1">
                    <div className="bg-gold h-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs uppercase tracking-wider">Egos</h4>
                    <span className="text-gold text-xl font-bold">0</span>
                  </div>
                  <div className="w-full bg-white/10 h-1">
                    <div className="bg-gold h-full" style={{ width: '0%' }}></div>
                  </div>
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
