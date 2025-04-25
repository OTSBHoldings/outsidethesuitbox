
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import ContactHeader from './contact/ContactHeader';

const Contact = () => {
  const formSectionRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [formSectionRef],
  });

  return (
    <section id="contact" className="section-padding bg-richBlack pt-28 pb-28" aria-label="Contact section">
      <div className="container mx-auto">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 md:px-0">
          <ContactInfo />
          <div ref={formSectionRef} className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
      
      {/* Full-width gold accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gold opacity-50"></div>
    </section>
  );
};

export default Contact;
