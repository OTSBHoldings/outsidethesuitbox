
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

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
        <div className="flex justify-end mb-10">
          <button
            onClick={scrollToTop}
            className="bg-gold/10 hover:bg-gold/20 text-gold p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-xl font-display font-bold uppercase gold-text mb-6">Outside the Suitbox</h3>
            <p className="text-white/70 mb-6 text-sm">
              Strategic brand acquisition and transformation. Building valuable brands that dominate markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/60 hover:text-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Services</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-gold transition-colors duration-300">About</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-gold transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/investments" className="text-white/60 hover:text-gold transition-colors duration-300">Investments</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Brand Acquisition</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Brand Transformation</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Strategic Growth</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Performance Marketing</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors duration-300">Market Expansion</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Global Headquarters</li>
              <li>123 Madison Avenue, Suite 500</li>
              <li>New York, NY 10016</li>
              <li>+1 (212) 555-8765</li>
              <li>info@outsidethesuitbox.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/40">
          <p className="uppercase text-xs tracking-wider">© {new Date().getFullYear()} Outside the Suitbox. All rights reserved.</p>
          <p className="text-xs mt-2">
            <Link to="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link> | <Link to="#" className="hover:text-gold transition-colors duration-300">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
