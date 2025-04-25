import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import TeamMember from './team/TeamMember';

const Team = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef],
  });

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
    <section id="team" className="section-padding bg-richBlack-light pt-20 pb-20" aria-label="Team section">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Meet Our Experts</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            The <span className="gold-text">Architects</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-xl text-white/70">
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
