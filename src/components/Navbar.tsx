
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        <a href="#" className="flex items-center">
          <Logo size={isScrolled ? "sm" : "md"} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#process" className="nav-link">Our Process</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-richBlack/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          <a href="#services" className="nav-link w-fit" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="nav-link w-fit" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#testimonials" className="nav-link w-fit" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
          <a href="#team" className="nav-link w-fit" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
          <a href="#process" className="nav-link w-fit" onClick={() => setIsMobileMenuOpen(false)}>Our Process</a>
          <a href="#portfolio" className="nav-link w-fit" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
          <a href="#contact" className="btn-outline w-fit" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
