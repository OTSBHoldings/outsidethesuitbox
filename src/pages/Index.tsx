
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
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '200px 0px', // Start loading images when they're within 200px of the viewport
        threshold: 0.01
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach((img: HTMLImageElement) => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    }
    
    // Preconnect to important domains
    const preconnectLinks = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];
    
    preconnectLinks.forEach(link => {
      const linkEl = document.createElement('link');
      linkEl.rel = link.rel;
      linkEl.href = link.href;
      if (link.crossOrigin) linkEl.crossOrigin = link.crossOrigin;
      document.head.appendChild(linkEl);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Outside the Suitbox | Branding for the Bold</title>
        <meta name="description" content="Outside the Suitbox partners with brave brands to challenge conventions, champion ideas not egos, and create brands that resonate with audiences." />
        <meta name="keywords" content="branding agency, bold branding, disruptive branding, brand strategy, creative marketing, brand elevation, ideas not egos" />
        <meta property="og:title" content="Outside the Suitbox | Branding for the Bold" />
        <meta property="og:description" content="We champion ideas, not egos. Creating brave brands that challenge conventions and resonate with audiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outsidethesuitbox.com" />
        <meta property="og:image" content="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outside the Suitbox | Branding for the Bold" />
        <meta name="twitter:description" content="We champion ideas, not egos. Creating brave brands that challenge conventions and resonate with audiences." />
        <meta name="twitter:image" content="/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png" />
        <link rel="canonical" href="https://outsidethesuitbox.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
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
