import React, { useRef } from 'react';
import { MapPin, Phone, Mail, Zap } from 'lucide-react';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

const ContactInfo = () => {
  // Create an array of refs using Array.from
  const infoItemsRef = useRef<Array<HTMLDivElement | null>>([]);
  
  const contactItems = [
    {
      icon: <MapPin className="text-gold h-5 w-5" />,
      title: "Our HQ",
      details: ["123 Bold Avenue", "London, UK EC1A 1BB"]
    },
    {
      icon: <Phone className="text-gold h-5 w-5" />,
      title: "Let's Talk",
      details: ["+44 (0) 20 1234 5678", "Direct line to decision makers"]
    },
    {
      icon: <Mail className="text-gold h-5 w-5" />,
      title: "Email Direct",
      details: ["deals@outsidethesuitbox.com", "partnerships@outsidethesuitbox.com"]
    },
    {
      icon: <Zap className="text-gold h-5 w-5" />,
      title: "Social Impact",
      details: ["@disruptthebox", "#BreakTheBox"]
    }
  ];

  useIntersectionAnimation({
    refs: infoItemsRef.current.filter((ref): ref is HTMLDivElement => ref !== null).map(ref => ({ current: ref })),
  });

  return (
    <div className="lg:col-span-1 space-y-8">
      {contactItems.map((item, index) => (
        <div 
          key={index}
          ref={el => infoItemsRef.current[index] = el}
          className="glass-card p-6 flex items-start opacity-0 translate-y-10 transition-all duration-700 ease-out"
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="bg-gold/10 p-3 rounded-full mr-4">
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold mb-2 uppercase text-sm tracking-wide">{item.title}</h4>
            {item.details.map((detail, i) => (
              <p key={i} className="text-white/70 text-sm">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
