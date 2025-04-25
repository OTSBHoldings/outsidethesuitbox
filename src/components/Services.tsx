
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
      title: "Brand Strategy",
      description: "Defining your purpose, vision, and values to create a foundation for all your brand expressions and marketing activities."
    },
    {
      icon: <Palette size={24} />,
      title: "Visual & Verbal Identity",
      description: "Crafting a unique and memorable brand identity that communicates your values and resonates with your audience."
    },
    {
      icon: <Compass size={24} />,
      title: "UX and UI Design",
      description: "Creating user-centered digital experiences that are intuitive, engaging, and effectively represent your brand."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Messaging",
      description: "Developing a compelling brand voice and narrative that cuts through the noise and connects with your audience."
    },
    {
      icon: <Zap size={24} />,
      title: "Campaigns",
      description: "Launching impactful marketing campaigns that drive engagement, build awareness, and deliver measurable results."
    },
    {
      icon: <Award size={24} />,
      title: "Film & Photography",
      description: "Producing high-quality visual content that tells your brand story and captures the imagination of your audience."
    },
    {
      icon: <Globe size={24} />,
      title: "Environment Branding",
      description: "Designing branded spaces that create immersive experiences and bring your brand to life in the physical world."
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Brand Guardianship",
      description: "Ensuring brand consistency across all touchpoints to build recognition and trust with your audience."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Employer Branding",
      description: "Attracting and retaining top talent by creating a compelling employer brand that reflects your company culture."
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
            Our Arsenal of Lovable Branding Services
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300" ref={subtitleRef}></div>
          <p className="text-white/70 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-450" ref={subtitleRef}>
            We offer a comprehensive suite of branding services designed to help you stand out in a crowded marketplace. Whether you're looking to define your brand strategy, create a visual identity, or launch a marketing campaign, we have the expertise to help you succeed.
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
