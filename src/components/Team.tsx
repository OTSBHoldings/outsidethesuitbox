
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
      name: "Mark Eric Christiansen",
      role: "Founder & CEO",
      description: "A maverick entrepreneur who turned conventional branding on its head. Mark doesn't just build brands—he creates cultural phenomena. Known for wearing T-shirts in boardrooms and turning wild ideas into million-dollar realities.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Nicolai Edgar Andersen",
      role: "Head of SEO & Search Marketing",
      description: "The Norwegian SEO wizard who's forgotten more about digital marketing than most will ever know. With a track record of launching brands to #1 on Google, Nicolai turns data into gold. Multiple award winner who makes algorithms dance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "John Shepherd IV",
      role: "Marketing & Digital Integration Lead",
      description: "The architect behind campaigns that don't just perform—they transform. John bridges the gap between crazy creative ideas and hardcore technical execution. Known for turning marketing funnels into profit machines.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Stefano Lisci",
      role: "Visual Storytelling Director",
      description: "Award-winning Italian filmmaker turned brand visionary. Stefano doesn't take photos—he crafts visual stories that sell. His work has dominated film festivals and transformed how brands connect with audiences.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Patrick Lowe",
      role: "Head of AI Solutions",
      description: "The tech genius splitting time between LA and Amsterdam. Dual master's degree holder who makes AI feel human. Patrick doesn't follow tech trends—he creates them, turning complex AI into simple solutions that actually work.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Catherine Alvarez Frias",
      role: "Head of Regulatory Affairs",
      description: "The compliance mastermind who turns red tape into green lights. Catherine navigates the regulatory maze so you don't have to. She doesn't just solve compliance problems—she prevents them before they exist.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="team" className="section-padding bg-richBlack-light pt-20 pb-20" aria-label="Team section">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Meet The Team</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            The <span className="gold-text">Game Changers</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-xl text-white/70">
            A collective of industry disruptors who turn conventional thinking into extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
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
