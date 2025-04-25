
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
        <title>Outside the Suitbox | Strategic Brand Investment</title>
        <meta name="description" content="Outside the Suitbox acquires, builds, and transforms brands that challenge conventions. A strategic holding company with a relentless focus on ROI-driven growth." />
        <meta name="keywords" content="brand holding company, marketing investments, strategic growth, disruptive branding, brand acquisition, ROI-driven marketing" />
        <meta property="og:title" content="Outside the Suitbox | Strategic Brand Investment" />
        <meta property="og:description" content="We don't just build brands. We build empires. Strategic brand holdings with relentless focus on ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outsidethesuitbox.com" />
        <meta property="og:image" content="/lovable-uploads/d60a241c-168b-45ea-a47e-2cfe6820cb82.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outside the Suitbox | Strategic Brand Investment" />
        <meta name="twitter:description" content="We don't just build brands. We build empires. Strategic brand holdings with relentless focus on ROI." />
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
