
import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const InvestmentsPage = () => {
  const investmentCriteria = [
    { label: "Established Brand", meet: true },
    { label: "Minimum $500K Annual Revenue", meet: true },
    { label: "Proven Product-Market Fit", meet: true },
    { label: "Scalable Business Model", meet: true },
    { label: "Digital Presence", meet: true },
    { label: "Market Growth Potential", meet: true }
  ];
  
  const whatWeLookFor = [
    { criteria: "Established brands with 2+ years of operation and proven revenue", ideal: true },
    { criteria: "Businesses with strong fundamentals but untapped brand potential", ideal: true },
    { criteria: "Scalable models with clear path to growth through brand optimization", ideal: true },
    { criteria: "Strong digital presence or clear opportunity to build one", ideal: true },
    { criteria: "Target industries: SaaS, D2C, Financial Services, Health & Wellness, Professional Services", ideal: true },
    { criteria: "Geographic preference: North America and Western Europe", ideal: true },
    { criteria: "Pre-revenue startups", ideal: false },
    { criteria: "Commodity businesses without differentiation potential", ideal: false },
    { criteria: "Heavily regulated industries with limited marketing flexibility", ideal: false },
    { criteria: "Business models reliant on constant fundraising", ideal: false }
  ];

  return (
    <>
      <Helmet>
        <title>Investment Strategy | Outside the Suitbox</title>
        <meta name="description" content="Our investment approach focuses on acquiring and transforming brands with untapped potential. Learn about our investment criteria and portfolio strategy." />
        <meta name="keywords" content="brand investment, strategic acquisition, brand portfolio, marketing ROI, growth investment, brand transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Investment Strategy</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 uppercase">
                WE <span className="gold-text">INVEST</span> IN POTENTIAL
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-white/80 text-lg mb-6">
                We're not traditional investors. We're strategic brand acquirers looking for businesses with solid foundations but untapped brand potential.
              </p>
            </div>
          </div>
        </section>
        
        {/* Criteria Section */}
        <section className="py-20 bg-richBlack relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                  OUR INVESTMENT <span className="gold-text">CRITERIA</span>
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-white/80 mb-8">
                  We invest in brands we believe in – ones that have solid foundations but haven't yet reached their full market potential. Our core criteria reflect our belief that the right strategic positioning can transform good businesses into great ones.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {investmentCriteria.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-md">
                      <CheckCircle className="text-gold h-5 w-5 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-white/80 mb-8">
                  While we primarily focus on full acquisitions, we also consider strategic partnerships and growth investments in select cases where there's clear alignment with our portfolio strategy.
                </p>
                
                <Link to="/contact" className="btn-gold inline-block text-xs tracking-widest">
                  DISCUSS YOUR BRAND
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/dbe0b70c-6cc1-45b0-9842-57e83052e510.png" 
                    alt="Outside the Suitbox investment criteria" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -top-8 -right-8 glass-card gold-border p-6">
                  <p className="text-2xl font-bold text-gold">3-5 Year</p>
                  <p className="text-sm text-white/70">Typical investment horizon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What We Look For */}
        <section className="py-20 bg-richBlack-light relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase text-center">
                WHAT WE <span className="gold-text">LOOK FOR</span>
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mb-12"></div>
              
              <div className="space-y-4 mb-16">
                <h3 className="text-xl font-bold mb-4">Ideal Investment Targets</h3>
                {whatWeLookFor.slice(0, 6).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-md">
                    <CheckCircle className="text-gold h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item.criteria}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 mb-16">
                <h3 className="text-xl font-bold mb-4">Not a Good Fit</h3>
                {whatWeLookFor.slice(6).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-md">
                    <XCircle className="text-red-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item.criteria}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Investment Process */}
        <section className="py-20 bg-richBlack relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase text-center">
                OUR INVESTMENT <span className="gold-text">PROCESS</span>
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mb-12"></div>
              
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 transform md:translate-x-0"></div>
                
                <div className="space-y-16">
                  {/* Step 1 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right md:pr-16">
                      <div className="absolute right-0 md:right-auto md:left-1/2 w-12 h-12 bg-richBlack border-4 border-gold rounded-full transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
                        <span className="text-gold font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">Initial Screening</h3>
                      <p className="text-white/70">
                        We review your business fundamentals, brand position, and growth potential to determine alignment with our investment criteria.
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:col-start-2 md:pl-16">
                      <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-richBlack border-4 border-gold rounded-full transform -translate-x-1/2 flex items-center justify-center">
                        <span className="text-gold font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">Strategic Assessment</h3>
                      <p className="text-white/70">
                        We conduct a deep dive analysis of your brand, market position, competitors, and growth opportunities to identify untapped potential.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right md:pr-16">
                      <div className="absolute right-0 md:right-auto md:left-1/2 w-12 h-12 bg-richBlack border-4 border-gold rounded-full transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
                        <span className="text-gold font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">Offer & Structuring</h3>
                      <p className="text-white/70">
                        We present a detailed offer outlining investment terms, valuation, and the strategic vision for your brand's growth under our portfolio.
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:col-start-2 md:pl-16">
                      <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-richBlack border-4 border-gold rounded-full transform -translate-x-1/2 flex items-center justify-center">
                        <span className="text-gold font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">Due Diligence</h3>
                      <p className="text-white/70">
                        We conduct thorough financial, legal, and operational due diligence to validate our investment thesis and identify optimization opportunities.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right md:pr-16">
                      <div className="absolute right-0 md:right-auto md:left-1/2 w-12 h-12 bg-richBlack border-4 border-gold rounded-full transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
                        <span className="text-gold font-bold">5</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">Closing & Integration</h3>
                      <p className="text-white/70">
                        Upon successful closing, we implement our strategic transformation plan, leveraging our expertise and resources to unlock your brand's full potential.
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                READY TO <span className="gold-text">EXPLORE OPPORTUNITIES</span>?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Whether you're looking to sell your brand, seeking strategic investment, or exploring partnership opportunities, we're ready to start the conversation.
              </p>
              <Link to="/contact" className="btn-gold inline-block text-xs tracking-widest">
                SUBMIT YOUR BRAND
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default InvestmentsPage;
