
import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-richBlack-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h5 className="uppercase tracking-wider text-gold mb-4">Get In Touch</h5>
          <h2 className="heading-lg mb-6">Ready to Transform Your Brand?</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Let's start a conversation about how Outside the Suitbox can help elevate your marketing strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6 flex items-start">
              <div className="bg-gold/10 p-3 rounded-full mr-4">
                <MapPin className="text-gold h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-2">Our Location</h4>
                <p className="text-white/70">123 Innovation Way, San Francisco, CA 94105</p>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start">
              <div className="bg-gold/10 p-3 rounded-full mr-4">
                <Phone className="text-gold h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-2">Phone Contact</h4>
                <p className="text-white/70">+1 (555) 123-4567</p>
                <p className="text-white/70">Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start">
              <div className="bg-gold/10 p-3 rounded-full mr-4">
                <Mail className="text-gold h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-2">Email Us</h4>
                <p className="text-white/70">info@outsidethesuitbox.com</p>
                <p className="text-white/70">support@outsidethesuitbox.com</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card gold-border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 rounded-md focus:border-gold focus:ring-gold/50 focus:ring-2 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-transparent border border-white/20 rounded-md focus:border-gold focus:ring-gold/50 focus:ring-2 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-white/20 rounded-md focus:border-gold focus:ring-gold/50 focus:ring-2 focus:outline-none transition-colors"
                  required
                >
                  <option value="" className="bg-richBlack-dark">Select a subject</option>
                  <option value="Brand Development" className="bg-richBlack-dark">Brand Development</option>
                  <option value="Digital Marketing" className="bg-richBlack-dark">Digital Marketing</option>
                  <option value="Creative Design" className="bg-richBlack-dark">Creative Design</option>
                  <option value="Other" className="bg-richBlack-dark">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-3 bg-transparent border border-white/20 rounded-md focus:border-gold focus:ring-gold/50 focus:ring-2 focus:outline-none transition-colors"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold flex items-center justify-center w-full md:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-richBlack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
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
