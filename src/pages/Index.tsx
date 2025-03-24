
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
      <HeroFeature />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      <Team />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
