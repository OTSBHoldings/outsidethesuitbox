
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-richBlack-dark pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-10">
          <button
            onClick={scrollToTop}
            className="bg-gold/10 hover:bg-gold/20 text-gold p-4 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold gold-text mb-6">Outside the Suitbox</h3>
            <p className="text-white/70 mb-6">
              Redefining marketing with innovative strategies that elevate brands and drive exceptional results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-gold transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-gold transition-colors duration-300">Testimonials</a></li>
              <li><a href="#team" className="text-white/70 hover:text-gold transition-colors duration-300">Our Team</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">Brand Development</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">Creative Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">Analytics & Performance</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors duration-300">Global Market Expansion</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-white/70">
              <li>123 Innovation Way, San Francisco, CA 94105</li>
              <li>+1 (555) 123-4567</li>
              <li>info@outsidethesuitbox.com</li>
              <li>Mon-Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Outside the Suitbox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
