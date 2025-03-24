
import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  delay: string;
};

const TeamMember = ({ name, role, image, delay }: TeamMemberProps) => {
  const memberRef = useRef<HTMLDivElement>(null);

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

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={memberRef}
      className="group relative transform transition-all duration-700 ease-out opacity-0 translate-y-10 overflow-hidden rounded-xl"
      style={{ transitionDelay: delay }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gold mb-4">{role}</p>
        
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <a href="#" className="text-white hover:text-gold transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-white hover:text-gold transition-colors duration-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-gold transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
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

  const team = [
    {
      name: "Victoria Reynolds",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Alexander Morgan",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Olivia Bennett",
      role: "Digital Marketing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Ethan Richardson",
      role: "UX/UI Design Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h5 className="uppercase tracking-wider text-gold mb-4">Meet Our Experts</h5>
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:bg-gold after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:transition-all after:duration-1000"
          >
            The Creative Minds
          </h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Our team of industry veterans brings decades of combined experience and a passion for innovative marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
