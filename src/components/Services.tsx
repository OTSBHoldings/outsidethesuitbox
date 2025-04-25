
import React, { useEffect, useRef } from 'react';
import { Target, Palette, Globe, MessageSquare, Zap, Award, Compass, BadgeCheck, Briefcase } from 'lucide-react';

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
      title: "Strategic Brand Positioning",
      description: "We precisely position your brand in the market to capture attention, establish authority, and create a distinct competitive advantage that drives growth."
    },
    {
      icon: <Palette size={24} />,
      title: "Visual & Verbal Identity",
      description: "Beyond logos and colors, we craft comprehensive brand systems that communicate your values and resonate deeply with your target audience across all touchpoints."
    },
    {
      icon: <Compass size={24} />,
      title: "UX and UI Design Excellence",
      description: "Creating intuitive digital experiences that blend cutting-edge functionality with visually stunning interfaces that convert visitors into loyal customers."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Compelling Brand Storytelling",
      description: "We develop authentic narratives that connect emotionally with your audience, transforming your core values into messages that inspire action and loyalty."
    },
    {
      icon: <Zap size={24} />,
      title: "High-Impact Campaign Strategy",
      description: "Data-driven marketing campaigns that break through the noise, capture attention, and deliver measurable ROI through strategic execution and innovation."
    },
    {
      icon: <Award size={24} />,
      title: "Premium Film & Photography",
      description: "Cinematic visual content that elevates your brand story with production values that match the quality of your products and services."
    },
    {
      icon: <Globe size={24} />,
      title: "Immersive Environment Branding",
      description: "Transform physical spaces into powerful brand experiences that engage all senses and create memorable impressions that reinforce your brand identity."
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Strategic Brand Guardianship",
      description: "Protecting and evolving your brand with systems that ensure consistency while allowing controlled flexibility to adapt to market changes."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Transformative Employer Branding",
      description: "Attract and retain top industry talent by showcasing your company culture and values through authentic employer branding strategies."
    }
  ];

  return (
    <section id="services" className="section-padding pt-28 pb-20" aria-label="Services section">
      <div className="container mx-auto">
        <div className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0">
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out" ref={subtitleRef}>Our Services</p>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase opacity-0 translate-y-10 transition-all duration-700 ease-out delay-150"
          >
            Our Arsenal of Brand Transformation Services
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300" ref={subtitleRef}></div>
          <p className="text-white/70 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-450" ref={subtitleRef}>
            We deliver industry-leading branding services designed for organizations ready to dominate their markets. Our strategic approach focuses on creating lasting value through distinctive positioning, compelling storytelling, and unforgettable brand experiences that drive measurable business growth.
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
