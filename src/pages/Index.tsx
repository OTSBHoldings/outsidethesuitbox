import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Technology from '../components/Technology';
import Investment from '../components/Investment';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Outside the Suitbox | Strategic Brand Acquisition & Transformation</title>
        <meta name="description" content="We acquire, transform, and scale brands through strategic positioning and ruthless execution. From startups to market leaders, we build valuable brands that dominate their markets." />
        <meta name="keywords" content="brand acquisition, strategic growth, brand transformation, marketing ROI, business scaling, market dominance" />
        <meta property="og:title" content="Outside the Suitbox | Strategic Brand Acquisition & Transformation" />
        <meta property="og:description" content="Stop playing small. We transform good brands into market leaders through strategic acquisition and ruthless execution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outsidethesuitbox.com" />
        <meta property="og:image" content="/lovable-uploads/d60a241c-168b-45ea-a47e-2cfe6820cb82.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outside the Suitbox | Strategic Brand Acquisition & Transformation" />
        <meta name="twitter:description" content="Stop playing small. We transform good brands into market leaders through strategic acquisition and ruthless execution." />
        <meta name="twitter:image" content="/lovable-uploads/d60a241c-168b-45ea-a47e-2cfe6820cb82.png" />
        <link rel="canonical" href="https://outsidethesuitbox.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        <Hero />
        <Featured />
        <Technology />
        <Investment />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
