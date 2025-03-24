
import React from 'react';
import Navbar from '../components/Navbar';
import HeroFeature from '../components/HeroFeature';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-richBlack overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <HeroFeature />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Process Section */}
      <section id="process">
        <Process />
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      {/* Team Section */}
      <section id="team">
        <Team />
      </section>
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
