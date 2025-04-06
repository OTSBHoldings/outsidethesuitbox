
import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const infoItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    if (formSectionRef.current) observer.observe(formSectionRef.current);
    infoItemsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (formSectionRef.current) observer.unobserve(formSectionRef.current);
      infoItemsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-richBlack-light pt-28 pb-28" aria-label="Contact section">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
            Begin The Conversation
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-white/70">
            We selectively partner with brands positioned for extraordinary growth and committed to uncompromising excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 md:px-0">
          <div className="lg:col-span-1 space-y-8">
            {[
              {
                icon: <MapPin className="text-gold h-5 w-5" />,
                title: "Headquarters",
                details: ["123 Innovation Way", "San Francisco, CA 94105"]
              },
              {
                icon: <Phone className="text-gold h-5 w-5" />,
                title: "Direct Inquiry",
                details: ["+1 (555) 123-4567", "Hours: Mon-Fri, 9AM - 6PM PST"]
              },
              {
                icon: <Mail className="text-gold h-5 w-5" />,
                title: "Electronic Correspondence",
                details: ["inquiries@outsidethesuitbox.com", "support@outsidethesuitbox.com"]
              }
            ].map((item, index) => (
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
          
          <div 
            ref={formSectionRef}
            className="lg:col-span-2 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card gold-border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-xs uppercase tracking-wide">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 rounded-sm focus:border-gold focus:ring-gold/50 focus:ring-1 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-xs uppercase tracking-wide">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 rounded-sm focus:border-gold focus:ring-gold/50 focus:ring-1 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block mb-2 text-xs uppercase tracking-wide">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-white/20 rounded-sm focus:border-gold focus:ring-gold/50 focus:ring-1 focus:outline-none transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-xs uppercase tracking-wide">Your Objective *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-white/20 rounded-sm focus:border-gold focus:ring-gold/50 focus:ring-1 focus:outline-none transition-colors"
                  required
                >
                  <option value="" className="bg-richBlack-dark">Select your objective</option>
                  <option value="Brand Development" className="bg-richBlack-dark">Brand Development</option>
                  <option value="Digital Marketing" className="bg-richBlack-dark">Digital Marketing</option>
                  <option value="Creative Design" className="bg-richBlack-dark">Creative Design</option>
                  <option value="Market Expansion" className="bg-richBlack-dark">Market Expansion</option>
                  <option value="Performance Analysis" className="bg-richBlack-dark">Performance Analysis</option>
                  <option value="Other" className="bg-richBlack-dark">Other</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block mb-2 text-xs uppercase tracking-wide">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-transparent border border-white/20 rounded-sm focus:border-gold focus:ring-gold/50 focus:ring-1 focus:outline-none transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold flex items-center justify-center text-xs tracking-widest"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-richBlack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING...
                  </span>
                ) : (
                  <span className="flex items-center">
                    SUBMIT
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
