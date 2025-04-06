
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Lazy load images that are not in the viewport
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || img.src;
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Ragged Edge | Strategic Brand Elevation</title>
        <meta name="description" content="Ragged Edge helps ambitious brands break free from ordinary marketing approaches to achieve extraordinary results through strategic brand elevation and creative excellence." />
        <meta name="keywords" content="brand strategy, creative marketing, brand elevation, luxury branding, strategic marketing, digital campaigns" />
        <meta property="og:title" content="Ragged Edge | Strategic Brand Elevation" />
        <meta property="og:description" content="We engineer sophisticated brand experiences that outperform, outclass, and outlast the competition." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raggededge.com" />
        <meta property="og:image" content="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ragged Edge | Strategic Brand Elevation" />
        <meta name="twitter:description" content="We engineer sophisticated brand experiences that outperform, outclass, and outlast the competition." />
        <meta name="twitter:image" content="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" />
        <link rel="canonical" href="https://raggededge.com" />
      </Helmet>
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
