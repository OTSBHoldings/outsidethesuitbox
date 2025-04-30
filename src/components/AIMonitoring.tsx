
import React, { useRef, useState } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { ArrowRight, AlertCircle, Search, Zap, TrendingUp, LineChart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Google', value: 89, fill: '#D4AF37' },
  { name: 'ChatGPT', value: 74, fill: '#D4AF37' },
  { name: 'Perplexity', value: 68, fill: '#D4AF37' },
  { name: 'Bing', value: 52, fill: '#D4AF37' },
  { name: 'Claude', value: 47, fill: '#D4AF37' },
];

const competitorData = [
  { name: 'Your Brand', 'Visibility Score': 76, 'Citations': 183, fill: '#D4AF37' },
  { name: 'Competitor A', 'Visibility Score': 62, 'Citations': 134, fill: '#555' },
  { name: 'Competitor B', 'Visibility Score': 48, 'Citations': 87, fill: '#555' },
  { name: 'Competitor C', 'Visibility Score': 32, 'Citations': 56, fill: '#555' },
];

const AIMonitoring = () => {
  const [activeTab, setActiveTab] = useState('visibility');
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, statsRef, chartRef],
  });

  return (
    <section id="ai-monitoring" className="py-24 bg-gradient-to-b from-richBlack to-richBlack-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] rounded-full z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full z-0"></div>
      
        <div 
          ref={titleRef}
          className="text-center max-w-4xl mx-auto mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out relative z-10"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">AI Visibility Tracking</p>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold mb-6 uppercase">
            Track Your Brand's <span className="gold-text">AI Presence</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Monitor how your brand appears across AI search engines, track citations, and analyze content that drives AI visibility.
          </p>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200 relative z-10"
        >
          <div className="glass-card gold-border p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Brand Visibility Score</h3>
                <p className="text-white/70">Across major AI platforms</p>
              </div>
              <div className="bg-gold/10 p-3 rounded-full">
                <Search className="text-gold" size={26} />
              </div>
            </div>
            
            <div ref={chartRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <ChartContainer className="h-[250px] w-full" config={{ visibility: { label: 'Visibility', color: '#D4AF37' } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip 
                      content={({active, payload}) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-richBlack-dark p-3 border border-gold/20 rounded-md">
                              <p className="text-sm font-medium">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="value" barSize={24} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-white/60">Based on analysis of 3,000+ brand mentions across major AI platforms</p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold">
                  +12% from last month
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70">
                  Updated daily
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Key Findings</h4>
                <AlertCircle size={18} className="text-gold" />
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 bg-gold/10 rounded-full mr-3 mt-1">
                    <TrendingUp size={14} className="text-gold" />
                  </div>
                  <p className="text-white/80 text-sm">
                    <span className="text-gold font-medium">46% of queries</span> that drive traffic to your site remain anonymous in standard analytics tools
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 bg-gold/10 rounded-full mr-3 mt-1">
                    <LineChart size={14} className="text-gold" />
                  </div>
                  <p className="text-white/80 text-sm">
                    AI search engines cite your brand <span className="text-gold font-medium">2.3x more often</span> for long-tail keywords than traditional search
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 bg-gold/10 rounded-full mr-3 mt-1">
                    <Zap size={14} className="text-gold" />
                  </div>
                  <p className="text-white/80 text-sm">
                    Your content appears in <span className="text-gold font-medium">72% more AI responses</span> when optimized for EAT principles
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Top AI Citation Sources</h4>
                <div className="text-3xl font-bold text-gold">183</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Research Papers</span>
                  <div className="w-32 bg-richBlack-dark/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold h-full rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Authoritative Sites</span>
                  <div className="w-32 bg-richBlack-dark/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold h-full rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Industry Reports</span>
                  <div className="w-32 bg-richBlack-dark/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold h-full rounded-full" style={{width: '51%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">News Sources</span>
                  <div className="w-32 bg-richBlack-dark/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold h-full rounded-full" style={{width: '37%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={statsRef}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
        >
          {[
            {
              title: "Hidden Queries",
              value: "46%",
              desc: "Of valuable search terms hidden in standard analytics"
            },
            {
              title: "Visibility Growth",
              value: "+127%",
              desc: "Average AI visibility increase with our platform"
            },
            {
              title: "Data Points",
              value: "3.2M+",
              desc: "AI mentions analyzed across platforms"
            },
            {
              title: "Brand Authority",
              value: "72%",
              desc: "Higher citation rate for optimized content"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-richBlack border-gold/20 overflow-hidden">
              <CardContent className="p-6">
                <h5 className="text-sm text-white/60 mb-2">{item.title}</h5>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{item.value}</div>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#crawler-insights" className="btn-gold group text-sm tracking-widest flex items-center justify-center px-8 py-3">
            EXPLORE CRAWLER INSIGHTS
            <ArrowRight className="ml-3 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIMonitoring;
