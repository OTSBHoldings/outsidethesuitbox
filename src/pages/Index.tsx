
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
import SEOSection from '../components/SEOSection';
import AIMonitoring from '../components/AIMonitoring';
import CrawlerInsights from '../components/CrawlerInsights';
import DataVisualizations from '../components/DataVisualizations';
import CompetitorAnalysis from '../components/CompetitorAnalysis';
import ScalabilityFramework from '../components/ScalabilityFramework';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>OutsideSEO | Enterprise AI-Powered SEO & Brand Visibility Platform</title>
        <meta name="description" content="Transform your brand's digital presence with our comprehensive SEO platform. Track AI visibility, analyze crawler data, and outperform competitors with data-driven insights and scalable strategies." />
        <meta name="keywords" content="AI SEO platform, brand visibility, crawler insights, data-driven SEO, competitor analysis, SEO optimization, visibility tracking, enterprise SEO, scalable SEO framework, search engine optimization" />
        <meta property="og:title" content="OutsideSEO | Enterprise AI-Powered SEO & Brand Visibility Platform" />
        <meta property="og:description" content="Track your brand's visibility in AI Overviews, compare against competitors, and find key topics driving AI search traffic with our comprehensive SEO platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://outsidethesuitbox.com" />
        <meta property="og:image" content="/lovable-uploads/d60a241c-168b-45ea-a47e-2cfe6820cb82.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OutsideSEO | Enterprise AI-Powered SEO & Brand Visibility Platform" />
        <meta name="twitter:description" content="Track your brand's visibility in AI Overviews, compare against competitors, and find key topics driving AI search traffic." />
        <meta name="twitter:image" content="/lovable-uploads/d60a241c-168b-45ea-a47e-2cfe6820cb82.png" />
        <link rel="canonical" href="https://outsidethesuitbox.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Enhanced Schema markup for better search visibility */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "OutsideSEO",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1246"
              },
              "description": "Enterprise AI-Powered SEO & Brand Visibility Platform for tracking and optimizing your brand's digital presence.",
              "creator": {
                "@type": "Organization",
                "name": "Outside the Suitbox",
                "url": "https://outsidethesuitbox.com",
                "logo": "/lovable-uploads/b20c775d-6744-493e-81b3-bfa2f554d8ed.png",
                "sameAs": [
                  "https://www.linkedin.com/company/outsidethesuitbox",
                  "https://www.instagram.com/outsidethesuitbox",
                  "https://www.facebook.com/outsidethesuitbox"
                ]
              },
              "featureList": "AI visibility tracking, Competitor analysis, Crawler insights, Technical SEO audit, Content optimization, SERP monitoring"
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        <Hero />
        <AIMonitoring />
        <CrawlerInsights />
        <DataVisualizations />
        <SEOSection />
        <CompetitorAnalysis />
        <ScalabilityFramework />
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
