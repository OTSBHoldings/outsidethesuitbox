
import React, { useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  index: number;
};

const TeamMember = ({ name, role, description, image, index }: TeamMemberProps) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [memberRef],
  });

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

export default TeamMember;
