
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-richBlack/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4" aria-label="Outside the Suitbox home">
          <Logo size="sm" />
          <span className="text-white text-xs uppercase tracking-widest hidden md:block">Outside the Suitbox</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="nav-link text-xs uppercase tracking-widest">Services</Link>
          <Link to="/about" className="nav-link text-xs uppercase tracking-widest">About</Link>
          <Link to="/team" className="nav-link text-xs uppercase tracking-widest">Team</Link>
          <Link to="/portfolio" className="nav-link text-xs uppercase tracking-widest">Portfolio</Link>
          <Link to="/investments" className="nav-link text-xs uppercase tracking-widest">Investments</Link>
          <Link 
            to="/contact" 
            className="bg-gold hover:bg-gold/90 text-richBlack font-bold px-6 py-2 rounded-sm uppercase text-xs tracking-widest transition-all duration-300 nav-contact-shimmer"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-richBlack/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
          <Link to="/services" className="nav-link text-xs uppercase tracking-widest w-fit" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/about" className="nav-link text-xs uppercase tracking-widest w-fit" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/team" className="nav-link text-xs uppercase tracking-widest w-fit" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
          <Link to="/portfolio" className="nav-link text-xs uppercase tracking-widest w-fit" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/investments" className="nav-link text-xs uppercase tracking-widest w-fit" onClick={() => setIsMobileMenuOpen(false)}>Investments</Link>
          <Link to="/contact" className="bg-gold text-richBlack font-bold px-6 py-2 rounded-sm uppercase text-xs tracking-widest w-fit nav-contact-shimmer" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
