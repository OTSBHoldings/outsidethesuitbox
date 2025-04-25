
import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  name: string;
  category: string;
  image: string;
  year: string;
  role: string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ name, category, image, year, role, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-md">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${category} brand`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-richBlack-dark via-richBlack-dark/70 to-transparent opacity-90"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gold text-xs uppercase tracking-wider">{category}</p>
          <p className="text-white/60 text-xs">{year}</p>
        </div>
        <h3 className="text-xl font-bold uppercase tracking-wide mb-2">{name}</h3>
        <p className="text-white/70 mb-4 text-sm">{role}</p>
        
        <Link to="/contact" className="inline-flex items-center text-gold text-xs uppercase tracking-wider group">
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const portfolio = [
    {
      name: "Apex Digital",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80",
      year: "2022",
      role: "Complete brand transformation & growth strategy"
    },
    {
      name: "Meridian Wellness",
      category: "Health & Fitness",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
      year: "2021",
      role: "Acquisition & operational optimization"
    },
    {
      name: "UrbanShift",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1000&q=80",
      year: "2023",
      role: "Market expansion & e-commerce strategy"
    },
    {
      name: "NexGen Finance",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=1000&q=80",
      year: "2022",
      role: "Brand positioning & customer acquisition"
    },
    {
      name: "PrecisionCraft",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1000&q=80",
      year: "2020",
      role: "Strategic rebrand & market repositioning"
    },
    {
      name: "Quantum Studios",
      category: "Media Production",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1000&q=80",
      year: "2023",
      role: "Growth acceleration & content strategy"
    }
  ];

  const categories = ["All", "SaaS", "Health & Fitness", "Fashion", "Fintech", "Manufacturing", "Media Production"];

  return (
    <>
      <Helmet>
        <title>Portfolio | Outside the Suitbox</title>
        <meta name="description" content="Explore our portfolio of transformed brands across SaaS, wellness, fashion, fintech and more. See how Outside the Suitbox drives measurable growth through strategic brand investment." />
        <meta name="keywords" content="brand portfolio, brand transformation, strategic growth, brand case studies, marketing ROI, brand acquisition" />
      </Helmet>
      
      <div className="min-h-screen bg-richBlack overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-richBlack-dark relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Our Portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 uppercase">
                BRANDS THAT <span className="gold-text">DOMINATE</span>
              </h1>
              <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-white/80 text-lg mb-6">
                Every brand in our portfolio has one thing in common: they've been strategically positioned to command attention, drive growth, and maximize value.
              </p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Filter */}
        <section className="py-8 bg-richBlack sticky top-0 z-10 backdrop-blur-md bg-richBlack/90 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button key={index} className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${index === 0 ? 'bg-gold text-richBlack' : 'bg-richBlack-light text-white/70 hover:bg-gold/20 hover:text-white'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-20 bg-richBlack">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((item, index) => (
                <PortfolioItem
                  key={index}
                  name={item.name}
                  category={item.category}
                  image={item.image}
                  year={item.year}
                  role={item.role}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-richBlack-light relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
                  MEASURABLE <span className="gold-text">RESULTS</span>
                </h2>
                <div className="w-16 h-1 bg-gold mb-8"></div>
                <p className="text-white/80 mb-8 text-lg">
                  We don't measure success by how many awards we've won or how unique our designs are. We measure it in cold, hard business metrics.
                </p>
                <p className="text-white/80 mb-8">
                  Across our portfolio, our brands have achieved:
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-white/90 font-medium">Revenue Growth</p>
                      <p className="text-gold font-bold">157% YoY</p>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full">
                      <div className="bg-gold h-full rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-white/90 font-medium">Customer Acquisition</p>
                      <p className="text-gold font-bold">43% ↓ CAC</p>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full">
                      <div className="bg-gold h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-white/90 font-medium">Market Share Gain</p>
                      <p className="text-gold font-bold">+18% Avg.</p>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full">
                      <div className="bg-gold h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-white/90 font-medium">Valuation Increase</p>
                      <p className="text-gold font-bold">7-9x Multiple</p>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full">
                      <div className="bg-gold h-full rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/12059f12-6504-45bd-8015-b304aef5ff43.png" 
                    alt="Measurable business results" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -right-8 glass-card gold-border p-6">
                  <p className="text-2xl font-bold text-gold">92%</p>
                  <p className="text-sm text-white/70">Client retention rate</p>
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
                READY TO <span className="gold-text">JOIN OUR PORTFOLIO</span>?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                If you have a brand with untapped potential or are looking for strategic investment to take your business to the next level, we want to hear from you.
              </p>
              <Link to="/contact" className="btn-gold inline-block text-xs tracking-widest">
                START THE CONVERSATION
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
