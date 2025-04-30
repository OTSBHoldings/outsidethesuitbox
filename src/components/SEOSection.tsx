
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { Link } from 'react-router-dom';
import { FileSearch, ChartBar, ChartPie, Database, ArrowRight, Search, LineChart, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ChartContainer } from './ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trafficData = [
  { month: 'Jan', standard: 54, enhanced: 127 },
  { month: 'Feb', standard: 62, enhanced: 146 },
  { month: 'Mar', standard: 71, enhanced: 165 },
  { month: 'Apr', standard: 65, enhanced: 153 },
  { month: 'May', standard: 83, enhanced: 194 },
  { month: 'Jun', standard: 95, enhanced: 221 }
];

const SEOSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, statsRef, chartRef],
  });

  return (
    <section id="data-driven-seo" className="py-24 bg-richBlack-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] rounded-full z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full z-0"></div>
      
        <div 
          ref={titleRef}
          className="text-center max-w-4xl mx-auto mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out relative z-10"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Data-Driven Insights</p>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold mb-6 uppercase">
            SEO That <span className="gold-text shimmer-effect">Delivers Results</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto"></div>
          <p className="text-xl text-white/70">
            We leverage advanced analytics and proven methodologies to drive meaningful organic traffic that converts. Our approach uncovers the hidden data most platforms miss.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 relative z-10">
          <div
            ref={contentRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
          >
            <h3 className="text-3xl font-bold mb-8">Beyond Vanity Metrics</h3>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              While most SEO agencies focus on rankings alone, we measure success by the metrics that matter to your bottom line: qualified traffic, conversions, and revenue growth.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-md mt-1">
                  <Search className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Hidden Query Discovery</h4>
                  <p className="text-white/70">
                    Our proprietary algorithm reveals the 46% of valuable search queries that standard analytics miss, giving you access to opportunities your competitors can't see.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-md mt-1">
                  <LineChart className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">AI-Enhanced Optimization</h4>
                  <p className="text-white/70">
                    Our machine learning models analyze billions of data points to identify patterns and opportunities that drive exponential traffic growth across all search platforms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-md mt-1">
                  <TrendingUp className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Conversion-Focused Approach</h4>
                  <p className="text-white/70">
                    We optimize not just for traffic, but for quality visitors who convert, with an average 89% improvement in conversion rates for our clients.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/services#seo" className="btn-gold inline-block text-xs tracking-widest px-8 py-3 flex items-center mt-4">
              EXPLORE OUR SEO APPROACH
              <ArrowRight className="ml-3 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div 
            ref={chartRef}
            className="glass-card gold-border p-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
          >
            <h4 className="text-xl font-bold mb-6">SEO Performance Comparison</h4>
            <p className="text-white/70 mb-8">
              Average traffic growth comparing standard SEO practices vs. our enhanced data-driven approach over 6 months
            </p>
            
            <div className="h-[300px] mb-6">
              <ChartContainer className="h-full w-full" config={{ 
                standard: { label: 'Standard SEO', theme: { light: '#555', dark: '#555' } },
                enhanced: { label: 'Our Enhanced Approach', theme: { light: '#D4AF37', dark: '#D4AF37' } }
              }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={trafficData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="month" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip 
                      content={({active, payload, label}) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-richBlack p-3 border border-gold/20 rounded-md">
                              <p className="text-sm font-medium mb-2">{label}</p>
                              {payload.map((entry, index) => (
                                <div key={index} className="flex items-center gap-2 mb-1">
                                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                                  <p className="text-xs">{`${entry.name}: ${entry.value}% growth`}</p>
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Bar dataKey="enhanced" name="Our Enhanced Approach" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="standard" name="Standard SEO" fill="#555" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gold"></div>
                <span className="text-sm">127% avg. growth with our approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#555]"></div>
                <span className="text-sm">54% avg. with standard SEO</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300 relative z-10"
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
        
        <div className="max-w-2xl mx-auto text-center mt-16 relative z-10">
          <h4 className="text-xl font-bold mb-4">Ready to unlock your hidden SEO potential?</h4>
          <p className="text-white/70 mb-8">
            Schedule a complimentary analysis to discover how much invisible data your current analytics are missing.
          </p>
          <Link to="/contact" className="btn-gold group text-xs tracking-widest flex items-center justify-center px-8 py-3 mx-auto w-fit">
            GET YOUR FREE ANALYSIS
            <ArrowRight className="ml-3 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOSection;
