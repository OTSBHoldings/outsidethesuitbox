
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const TeamMember = ({ name, role, description, image }: TeamMemberProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-richBlack-dark to-transparent opacity-80"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
        <h3 className="text-xl font-bold uppercase">{name}</h3>
        <p className="text-gold mb-2 uppercase text-sm">{role}</p>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        
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
    <section id="team" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h5 className="uppercase tracking-wider text-gold mb-4">Meet Our Experts</h5>
          <h2 className="heading-lg mb-6 uppercase">
            The Architects
          </h2>
          <p className="max-w-2xl mx-auto text-white/70">
            A collective of strategic and creative minds who reject mediocrity in all its forms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
