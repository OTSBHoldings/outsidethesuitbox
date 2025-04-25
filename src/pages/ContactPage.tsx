
import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  const officeLocations = [
    {
      city: "New York",
      address: "123 Madison Avenue, Suite 500, New York, NY 10016",
      phone: "+1 (212) 555-8765",
      email: "nyc@outsidethesuitbox.com"
    },
    {
      city: "London",
      address: "45 King's Road, Chelsea, London SW3 4ND, UK",
      phone: "+44 20 7946 0382",
      email: "london@outsidethesuitbox.com"
    },
    {
      city: "Singapore",
      address: "71 Robinson Road, #14-01, Singapore 068895",
      phone: "+65 6704 8321",
      email: "asia@outsidethesuitbox.com"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Outside the Suitbox</title>
        <meta name="description" content="Get in touch with Outside the Suitbox to discuss brand investment opportunities, strategic partnerships, or how we can help transform your business." />
        <meta name="keywords" content="contact branding agency, brand investment, marketing consultation, strategic partnership" />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Get In Touch</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 uppercase">
                LET'S <span className="gold-text">TALK</span> BUSINESS
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-white/80 text-lg mb-6">
                Whether you're looking to sell your brand, seeking investment, or want to transform your existing business, we're ready to talk.
              </p>
            </div>
          </div>
        </section>
        
        {/* Offices Section */}
        <section className="py-20 bg-richBlack relative">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase text-center">
              GLOBAL <span className="gold-text">PRESENCE</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <div key={index} className="glass-card p-8 hover:border-gold/40 border border-white/10 transition-all">
                  <h3 className="text-xl font-bold mb-4 uppercase">{office.city}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-gold h-5 w-5 flex-shrink-0 mt-1" />
                      <p className="text-white/70 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-gold h-5 w-5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-gold h-5 w-5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">{office.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <Contact />
        
        {/* Social Media Section */}
        <section className="py-20 bg-richBlack-light relative">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase text-center">
              CONNECT <span className="gold-text">WITH US</span>
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-12"></div>
            
            <div className="flex flex-wrap justify-center gap-10 max-w-3xl mx-auto">
              <a href="#" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Instagram className="h-6 w-6 text-gold" />
                </div>
                <p className="text-white/70 text-sm group-hover:text-gold transition-colors">Instagram</p>
              </a>
              
              <a href="#" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Twitter className="h-6 w-6 text-gold" />
                </div>
                <p className="text-white/70 text-sm group-hover:text-gold transition-colors">Twitter</p>
              </a>
              
              <a href="#" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-gold" />
                </div>
                <p className="text-white/70 text-sm group-hover:text-gold transition-colors">LinkedIn</p>
              </a>
              
              <a href="#" className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Facebook className="h-6 w-6 text-gold" />
                </div>
                <p className="text-white/70 text-sm group-hover:text-gold transition-colors">Facebook</p>
              </a>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
