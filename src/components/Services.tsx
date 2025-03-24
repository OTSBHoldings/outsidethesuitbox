
import React, { useEffect, useRef } from 'react';
import { Target, Share2, PenTool, BarChart4, Globe, Zap } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
};

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`glass-card p-8 flex flex-col items-center text-center transform transition-all duration-700 ease-out opacity-0 translate-y-10`}
      style={{ transitionDelay: delay }}
    >
      <div className="bg-gold/10 p-4 rounded-full mb-6">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: <Target size={32} />,
      title: "Strategic Brand Development",
      description: "We craft distinctive brand identities that resonate with your target audience and stand out in competitive markets."
    },
    {
      icon: <Share2 size={32} />,
      title: "Digital Marketing Campaigns",
      description: "Data-driven campaigns across multiple platforms to maximize reach, engagement, and conversion rates."
    },
    {
      icon: <PenTool size={32} />,
      title: "Creative Design Solutions",
      description: "Visually stunning designs that capture your brand essence and create memorable impressions."
    },
    {
      icon: <BarChart4 size={32} />,
      title: "Analytics & Performance",
      description: "In-depth analysis and reporting to track campaign performance and optimize for better results."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Market Expansion",
      description: "Strategies to help your brand enter new markets and connect with international audiences."
    },
    {
      icon: <Zap size={32} />,
      title: "Innovative Content Creation",
      description: "Engaging, relevant content that builds brand authority and drives customer engagement."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h5 className="uppercase tracking-wider text-gold mb-4">What We Offer</h5>
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:bg-gold after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:transition-all after:duration-1000"
          >
            Our Premium Services
          </h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Comprehensive solutions designed to elevate your brand presence and drive exceptional results in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
