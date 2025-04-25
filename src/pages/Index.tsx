
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
    
    // Observer for animation elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

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
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
          {/* Background image with optimized loading */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-richBlack-dark/70 z-10"></div>
            <img 
              src="/lovable-uploads/d60a241c-168b-45ea-a47e-2cfe6820cb82.png" 
              alt="Strategic brand investment concept"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 relative z-20 pt-20 md:pt-0">
            <div className="max-w-3xl mx-auto md:mx-0 md:ml-12 lg:ml-24">
              <div className="mb-8 text-gold text-sm uppercase tracking-widest font-medium opacity-0 translate-y-10 transition-all duration-700 ease-out"
                ref={subtitleRef}>
                Strategic Brand Investment
              </div>
              
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <span className="block">WE DON'T BUILD</span>
                <span className="block">BRANDS.</span>
                <span className="gold-text shimmer-effect">WE BUILD EMPIRES.</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-white/80 mb-10 max-w-xl opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
              >
                Outside the Suitbox acquires, transforms, and scales brands with relentless focus on ROI. Because in a world of marketing fluff, we only care about what works.
              </p>
              
              <div 
                ref={buttonRef}
                className="flex flex-col sm:flex-row gap-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500"
              >
                <Link to="/portfolio" className="btn-gold group text-xs tracking-widest flex items-center justify-center">
                  VIEW OUR PORTFOLIO
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/investments" className="btn-outline text-xs tracking-widest">INVESTMENT STRATEGY</Link>
              </div>
            </div>
          </div>
          
          {/* Frame aesthetic */}
          <div className="absolute inset-0 pointer-events-none z-10 border-[12px] border-gold/10 m-8 sm:m-12 md:m-16 lg:m-20"></div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
            <span className="text-white text-xs tracking-widest mb-2">SCROLL</span>
            <div className="w-[1px] h-12 bg-white/60 animate-pulse"></div>
          </div>
        </section>
        
        {/* Featured Image Section */}
        <section className="py-20 bg-richBlack-light relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                  BREAK THE <span className="gold-text">CONVENTIONAL</span>
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-white/80 mb-8 text-lg">
                  Most marketing is a waste of money. Most agencies sell you what's easy, not what works. Most brands fade into mediocrity because they're too afraid to stand out.
                </p>
                <p className="text-white/80 mb-8 text-lg">
                  We're not most companies. We acquire, transform, and scale brands with a ruthless focus on measurable results.
                </p>
                <Link to="/about" className="btn-gold inline-block text-xs tracking-widest">
                  OUR APPROACH
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/f5ca3131-d4aa-44a2-ad54-0a719adc4f0c.png" 
                    alt="Breaking conventional business norms" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-richBlack p-6 border border-gold/20">
                  <p className="text-2xl font-bold text-gold">89%</p>
                  <p className="text-sm text-white/70">Average ROI increase<br />for our portfolio brands</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="py-20 bg-richBlack relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-[4/3] rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/12059f12-6504-45bd-8015-b304aef5ff43.png" 
                    alt="Strategic technology integration" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-8 -right-8 glass-card gold-border p-6">
                  <p className="text-2xl font-bold text-gold">24M+</p>
                  <p className="text-sm text-white/70">Monthly impressions<br />across our platforms</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                  WHERE <span className="gold-text">STRATEGY</span><br />MEETS EXECUTION
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-white/80 mb-8 text-lg">
                  We're not interested in vanity metrics or industry awards. We measure success in revenue, growth, and market dominance.
                </p>
                <p className="text-white/80 mb-8 text-lg">
                  Our holding structure allows us to deploy capital, expertise, and resources across our brand portfolio with maximum efficiency.
                </p>
                <Link to="/services" className="btn-gold inline-block text-xs tracking-widest">
                  OUR SERVICES
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Investment Section */}
        <section className="py-20 bg-richBlack-light relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                  BE THE BRAND THAT<br /><span className="gold-text">OWNS THE MARKET</span>
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-white/80 mb-8 text-lg">
                  Most businesses play at the edges. They tinker with logos and websites while their competitors take decisive action and capture market share.
                </p>
                <p className="text-white/80 mb-8 text-lg">
                  Our portfolio companies command attention, drive conversations, and dominate their industries through strategic brand positioning and ruthless execution.
                </p>
                <Link to="/investments" className="btn-gold inline-block text-xs tracking-widest">
                  INVESTMENT CRITERIA
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/dbe0b70c-6cc1-45b0-9842-57e83052e510.png" 
                    alt="Strategic brand ownership concept" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 glass-card gold-border p-6">
                  <p className="text-2xl font-bold text-gold">7-9x</p>
                  <p className="text-sm text-white/70">Average exit multiple<br />for portfolio companies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
