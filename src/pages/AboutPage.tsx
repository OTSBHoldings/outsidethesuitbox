
import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const principles = [
    "Change is more than skin deep",
    "Being brave doesn't mean taking risks",
    "Global doesn't mean all over the place",
    "Prima donnas aren't allowed",
    "Quality comes before quantity"
  ];

  const stats = [
    { value: "$87M+", label: "Assets under management" },
    { value: "28", label: "Portfolio brands" },
    { value: "157%", label: "Average YoY growth" },
    { value: "9", label: "Successful exits" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Outside the Suitbox</title>
        <meta name="description" content="We're not just another marketing agency or investment firm. Outside the Suitbox is a strategic holding company that builds, transforms, and scales brands with ruthless focus on ROI." />
        <meta name="keywords" content="brand holding company, strategic growth, brand portfolio, marketing ROI, brand transformation, brand acquisition" />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Who We Are</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 uppercase">
                IDEAS, NOT <span className="gold-text">EGOS</span>
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-white/80 text-lg mb-6">
                Outside the Suitbox was founded on a simple premise: the marketing world is broken. Too much fluff, too many buzzwords, and not enough focus on what actually drives business growth.
              </p>
              <p className="text-white/80 text-lg">
                We're a strategic holding company that acquires, transforms, and scales brands with a ruthless focus on ROI. No vanity metrics. No industry awards. Just results.
              </p>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-20 bg-richBlack relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative">
                <div className="aspect-square rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-richBlack-dark/80 mix-blend-overlay z-10"></div>
                  <img 
                    src="/lovable-uploads/f5ca3131-d4aa-44a2-ad54-0a719adc4f0c.png"
                    alt="Ideas not egos - Outside the Suitbox philosophy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -left-8 glass-card gold-border p-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs uppercase tracking-wider">Quality First</h4>
                        <span className="text-gold text-xl font-bold">100%</span>
                      </div>
                      <div className="w-full bg-white/10 h-1">
                        <div className="bg-gold h-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs uppercase tracking-wider">Bold Ideas</h4>
                        <span className="text-gold text-xl font-bold">∞</span>
                      </div>
                      <div className="w-full bg-white/10 h-1">
                        <div className="bg-gold h-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs uppercase tracking-wider">Egos</h4>
                        <span className="text-gold text-xl font-bold">0</span>
                      </div>
                      <div className="w-full bg-white/10 h-1">
                        <div className="bg-gold h-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                  Our Philosophy
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-white/80 mb-8">
                  Outside the Suitbox was founded on the belief that branding should be brave, bold, and transformative. We've built a company that champions ideas over egos, a process that rewards brave clients, and a culture that celebrates unconventional thinking.
                </p>
                <p className="text-white/80 mb-8">
                  We will challenge you, we will change you, and you just might change the world. We're not here to win awards or create pretty designs that don't drive results. We're here to build valuable brands that dominate their markets.
                </p>
                <p className="text-gold font-semibold mb-8 text-lg">
                  "The difference between good and great isn't talent. It's having the courage to bet on your own ideas." 
                </p>
                
                <div className="space-y-4 mb-12">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-gold mr-3 h-5 w-5 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80 text-sm leading-relaxed">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-richBlack-light relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</p>
                  <p className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20 bg-richBlack relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                  Our Mission
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-white/80 mb-8 text-lg">
                  To transform undervalued brands into market-dominating forces through strategic investment, bold positioning, and relentless execution.
                </p>
                <p className="text-white/80 mb-8">
                  Most businesses play it safe. They follow the crowd, copy their competitors, and wonder why they struggle to stand out. We're here to break that cycle.
                </p>
                <p className="text-white/80 mb-8">
                  Whether we're acquiring brands outright or partnering with ambitious founders, our mission remains the same: maximize value through strategic differentiation and operational excellence.
                </p>
              </div>
              
              <div className="relative order-first md:order-last">
                <div className="aspect-[4/3] rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/dbe0b70c-6cc1-45b0-9842-57e83052e510.png" 
                    alt="Outside the Suitbox mission" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section with component*/}
        <Team />
        
        {/* CTA Section */}
        <section className="py-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                JOIN THE <span className="gold-text">MOVEMENT</span>
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Whether you're looking to sell your brand, seeking strategic investment, or want to transform your existing business, we're ready to talk.
              </p>
              <Link to="/contact" className="btn-gold inline-block text-xs tracking-widest">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
