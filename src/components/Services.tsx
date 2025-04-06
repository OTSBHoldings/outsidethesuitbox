
import React, { useEffect, useRef } from 'react';
import { Target, Share2, PenTool, BarChart4, Globe, Zap } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`glass-card p-8 flex flex-col items-start text-left transition-all duration-700 ease-out opacity-0 translate-y-10`}
      style={{ transitionDelay: `${150 * index}ms` }}
    >
      <div className="bg-gold/10 p-4 rounded-md mb-6">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  const services = [
    {
      icon: <Target size={24} />,
      title: "Strategic Brand Elevation",
      description: "We don't just build brands—we architect legacies that command attention and demand respect in every market they enter."
    },
    {
      icon: <Share2 size={24} />,
      title: "Precision Digital Campaigns",
      description: "Data-driven marketing deployed with surgical precision to capture high-value customers who convert and remain loyal."
    },
    {
      icon: <PenTool size={24} />,
      title: "Distinguished Visual Identity",
      description: "Visual frameworks that instantly communicate premium positioning through sophisticated, memorable design elements."
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Performance Optimization",
      description: "Rigorous analysis that transforms metrics into actionable intelligence for continuous brand evolution and market dominance."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Brand Extension",
      description: "Strategic expansion into international markets with culturally nuanced approaches that maintain brand integrity."
    },
    {
      icon: <Zap size={24} />,
      title: "Elite Content Development",
      description: "Content that positions your brand as the definitive authority in your space—compelling, distinctive, and unmatched."
    }
  ];

  return (
    <section id="services" className="section-padding pt-28 pb-20" aria-label="Services section">
      <div className="container mx-auto">
        <div className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0">
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out" ref={subtitleRef}>What We Offer</p>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase opacity-0 translate-y-10 transition-all duration-700 ease-out delay-150"
          >
            Premium Solutions
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300" ref={subtitleRef}></div>
          <p className="text-white/70 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-450" ref={subtitleRef}>
            Meticulously crafted strategies that deliver uncompromising results in an increasingly saturated marketplace. We don't conform to convention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
