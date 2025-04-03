
import React from 'react';
import { Target, Share2, PenTool, BarChart4, Globe, Zap } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass-card p-8 flex flex-col items-start text-left transform transition-all duration-700 ease-out hover:translate-y-[-10px]">
      <div className="bg-gold/10 p-4 rounded-full mb-6">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4 uppercase">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Target size={32} />,
      title: "Strategic Brand Elevation",
      description: "We don't just build brands—we architect legacies that command attention and demand respect in every market they enter."
    },
    {
      icon: <Share2 size={32} />,
      title: "Precision Digital Campaigns",
      description: "Data-driven marketing deployed with surgical precision to capture high-value customers who convert and remain loyal."
    },
    {
      icon: <PenTool size={32} />,
      title: "Distinguished Visual Identity",
      description: "Visual frameworks that instantly communicate premium positioning through sophisticated, memorable design elements."
    },
    {
      icon: <BarChart4 size={32} />,
      title: "Performance Optimization",
      description: "Rigorous analysis that transforms metrics into actionable intelligence for continuous brand evolution and market dominance."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Brand Extension",
      description: "Strategic expansion into international markets with culturally nuanced approaches that maintain brand integrity."
    },
    {
      icon: <Zap size={32} />,
      title: "Elite Content Development",
      description: "Content that positions your brand as the definitive authority in your space—compelling, distinctive, and unmatched."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h5 className="uppercase tracking-wider text-gold mb-4">What We Offer</h5>
          <h2 className="heading-lg mb-6">PREMIUM SOLUTIONS</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Meticulously crafted strategies that deliver uncompromising results in an increasingly saturated marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
