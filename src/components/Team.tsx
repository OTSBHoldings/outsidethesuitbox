
import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  index: number;
};

const TeamMember = ({ name, role, description, image, index }: TeamMemberProps) => {
  const memberRef = useRef<HTMLDivElement>(null);

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

    if (memberRef.current) observer.observe(memberRef.current);

    return () => {
      if (memberRef.current) observer.unobserve(memberRef.current);
    };
  }, []);

  return (
    <div 
      ref={memberRef}
      className="group relative overflow-hidden rounded-md opacity-0 translate-y-10 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-richBlack-dark via-richBlack-dark/70 to-transparent opacity-90"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
        <h3 className="text-lg font-bold uppercase tracking-wide">{name}</h3>
        <p className="text-gold mb-2 uppercase text-xs tracking-wider">{role}</p>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="text-white hover:text-gold transition-colors duration-300" aria-label={`${name}'s LinkedIn profile`}>
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-white hover:text-gold transition-colors duration-300" aria-label={`${name}'s Twitter profile`}>
            <Twitter size={18} />
          </a>
          <a href="#" className="text-white hover:text-gold transition-colors duration-300" aria-label={`Email ${name}`}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const team = [
    {
      name: "Victoria Reynolds",
      role: "Founder & Strategic Director",
      description: "Former global brand strategist who left the corporate world to build a new paradigm in marketing excellence.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Alexander Morgan",
      role: "Chief Strategic Architect",
      description: "Previously directed strategy for multinational corporations. Now applies that expertise to transform ambitious brands.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Olivia Bennett",
      role: "Performance Analytics Director",
      description: "Digital strategist with unparalleled expertise in transforming complex data into powerful marketing advantages.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Ethan Richardson",
      role: "Creative Excellence Director",
      description: "Award-winning designer whose work consistently shatters industry conventions and establishes new standards.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="team" className="section-padding pt-28 pb-20" aria-label="Team section">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Meet Our Experts</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
            The Architects
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-white/70">
            A collective of strategic and creative minds who reject mediocrity in all its forms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
