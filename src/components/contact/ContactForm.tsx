
import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from "sonner";
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useIntersectionAnimation({
    refs: [formRef],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Message sent! We'll be in touch to make your brand lovable.");
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
    <form ref={formRef} onSubmit={handleSubmit} className="glass-card gold-border p-8 opacity-0 translate-y-10 transition-all duration-700 ease-out">
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
        <label htmlFor="subject" className="block mb-2 text-xs uppercase tracking-wide">What Are You Looking For? *</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 bg-transparent border border-white/20 rounded-sm focus:border-gold focus:ring-gold/50 focus:ring-1 focus:outline-none transition-colors"
          required
        >
          <option value="" className="bg-richBlack-dark">Select an option</option>
          <option value="Brand Strategy" className="bg-richBlack-dark">Brand Strategy</option>
          <option value="Visual Identity" className="bg-richBlack-dark">Visual Identity</option>
          <option value="UX/UI Design" className="bg-richBlack-dark">UX/UI Design</option>
          <option value="Marketing Campaign" className="bg-richBlack-dark">Marketing Campaign</option>
          <option value="Full Rebrand" className="bg-richBlack-dark">Full Rebrand</option>
          <option value="Other" className="bg-richBlack-dark">Other</option>
        </select>
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block mb-2 text-xs uppercase tracking-wide">Tell Us About Your Project</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 bg-transparent border border-white/20 rounded-sm focus:border-gold focus:ring-gold/50 focus:ring-1 focus:outline-none transition-colors"
          placeholder="The more we know, the better we can help..."
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
            READY TO BE LOVABLE
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
