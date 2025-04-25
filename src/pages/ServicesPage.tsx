
import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, ArrowDown, Target, Palette, Globe, MessageSquare, Zap, Award, Compass, BadgeCheck, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
  return (
    <div className="glass-card p-8 flex flex-col items-start text-left transition-all duration-700 ease-out hover:border-gold/40 border border-white/10">
      <div className="bg-gold/10 p-4 rounded-md mb-6">
        <div className="text-gold">{icon}</div>
      </div>
      <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed mb-6">{description}</p>
      <Link to="/contact" className="text-gold text-xs uppercase tracking-wider flex items-center group">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Target size={24} />,
      title: "Brand Acquisition",
      description: "We identify, analyze, and acquire undervalued brands with high growth potential across various sectors."
    },
    {
      icon: <Palette size={24} />,
      title: "Brand Transformation",
      description: "Complete strategic overhaul of brand identity, positioning, and market approach to unlock hidden value."
    },
    {
      icon: <Compass size={24} />,
      title: "Strategic Growth Acceleration",
      description: "Data-driven growth strategies that scale customer acquisition and revenue through tested frameworks."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Performance Marketing",
      description: "Ruthlessly efficient marketing campaigns focused on measurable ROI across digital and traditional channels."
    },
    {
      icon: <Zap size={24} />,
      title: "Digital Product Development",
      description: "Building high-margin digital products and services to expand revenue streams for portfolio brands."
    },
    {
      icon: <Award size={24} />,
      title: "Operational Optimization",
      description: "Streamlining business operations to maximize profitability and prepare brands for eventual exit."
    },
    {
      icon: <Globe size={24} />,
      title: "Market Expansion",
      description: "Strategic entry into new markets and demographics through data-backed audience analysis."
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Strategic Partnership Network",
      description: "Leveraging our extensive network to create high-value partnerships across portfolio companies."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Exit Strategy Planning",
      description: "Developing and executing strategic exits at maximum valuation through our industry connections."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Outside the Suitbox</title>
        <meta name="description" content="From brand acquisition to strategic exit planning, Outside the Suitbox delivers ROI-focused services that transform businesses into market leaders." />
        <meta name="keywords" content="brand acquisition, performance marketing, strategic growth, market expansion, exit planning, brand transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">What We Do</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 uppercase">
                SERVICES THAT <span className="gold-text">DELIVER</span>
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                We don't deal in vanity metrics. Every service we offer is designed with one goal: generating measurable returns for our portfolio companies.
              </p>
              <div className="flex justify-center">
                <a href="#services-list" className="bg-gold/10 hover:bg-gold/20 text-gold p-3 rounded-full transition-colors duration-300">
                  <ArrowDown size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services List */}
        <section id="services-list" className="py-20 bg-richBlack">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-richBlack-light relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                Our Process
              </h2>
              <div className="w-16 h-1 bg-gold mb-12"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-gold/10 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-2xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 uppercase">ANALYSIS</h3>
                    <p className="text-white/80 mb-4">
                      We begin by conducting a comprehensive analysis of your current market position, competitive landscape, and untapped opportunities. This isn't guesswork – we use data to identify exactly where value can be unlocked.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-gold/10 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-2xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 uppercase">STRATEGY</h3>
                    <p className="text-white/80 mb-4">
                      Based on our analysis, we develop a comprehensive strategy that encompasses brand positioning, marketing channels, operational improvements, and growth initiatives. Every strategic element is tied to measurable outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-gold/10 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-2xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 uppercase">EXECUTION</h3>
                    <p className="text-white/80 mb-4">
                      We execute with precision and speed. Our team deploys the necessary resources across brand development, marketing, operations, and technology to implement the strategy with ruthless efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-gold/10 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-2xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 uppercase">OPTIMIZATION</h3>
                    <p className="text-white/80 mb-4">
                      We continuously measure and optimize. Through rigorous testing and data analysis, we refine our approach to maximize ROI and accelerate growth. No assumptions – only what the data proves works.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-gold/10 p-4 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-2xl font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 uppercase">SCALING</h3>
                    <p className="text-white/80 mb-4">
                      Once we've validated the approach, we scale aggressively. We deploy additional capital and resources to maximize market share and revenue growth while maintaining operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-richBlack relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                READY TO <span className="gold-text">DOMINATE</span> YOUR MARKET?
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

export default ServicesPage;
