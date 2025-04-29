
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { Link } from 'react-router-dom';
import { FileSearch, ChartBar, ChartPie, Database } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const SEOSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, statsRef],
  });

  return (
    <section id="data-driven-seo" className="py-20 bg-richBlack-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Data-Driven Insights</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            SEO That <span className="gold-text">Delivers Results</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-xl text-white/70">
            We leverage advanced analytics and proven methodologies to drive meaningful organic traffic that converts.
          </p>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Beyond Vanity Metrics</h3>
            <p className="text-white/80 mb-6">
              While most SEO agencies focus on rankings alone, we measure success by the metrics that matter to your bottom line: qualified traffic, conversions, and revenue growth.
            </p>
            <p className="text-white/80 mb-6">
              Our recent study of 146,000+ websites revealed that nearly half of valuable search queries remain hidden in typical analytics—we unlock this missing data to give you a competitive edge.
            </p>
            <Link to="/services" className="btn-gold inline-block text-xs tracking-widest">
              OUR APPROACH
            </Link>
          </div>

          <div className="glass-card gold-border p-8">
            <h4 className="text-xl font-bold mb-4">The Hidden SEO Opportunity</h4>
            <div className="flex items-center mb-4">
              <div className="bg-gold/10 p-3 rounded-md mr-4">
                <FileSearch className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-white font-medium">46% of valuable search queries</p>
                <p className="text-white/60 text-sm">Remain invisible in standard reports</p>
              </div>
            </div>
            
            <div className="relative h-12 bg-richBlack/50 rounded-md overflow-hidden mb-8">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/70 to-gold/30" style={{width: '46%'}}></div>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                Hidden Opportunity (46%)
              </div>
            </div>
            
            <p className="text-white/70 text-sm">
              Our advanced SEO strategy uncovers these hidden opportunities, delivering traffic and conversions your competitors miss entirely.
            </p>
          </div>
        </div>

        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
        >
          {[
            {
              icon: <ChartBar size={24} />,
              stat: '127%',
              label: 'Average traffic increase within 6 months'
            },
            {
              icon: <ChartPie size={24} />,
              stat: '89%',
              label: 'Clients reporting improved conversion rates'
            },
            {
              icon: <Database size={24} />,
              stat: '3.2M+',
              label: 'Keywords analyzed across industries'
            },
            {
              icon: <FileSearch size={24} />,
              stat: '72%',
              label: 'Performance lift from hidden query optimization'
            }
          ].map((item, index) => (
            <Card key={index} className="bg-richBlack border-gold/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-gold/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-gold">{item.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gold mb-2">{item.stat}</div>
                <p className="text-white/70 text-sm">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOSection;
