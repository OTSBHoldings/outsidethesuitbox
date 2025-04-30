
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { Link } from 'react-router-dom';
import { ChartContainer } from './ui/chart';
import { Card, CardContent } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { MoveUp, TrendingUp, LineChart, Search, ArrowRight } from 'lucide-react';

const competitorData = [
  { name: 'Your Brand', score: 76, fill: '#D4AF37' },
  { name: 'Competitor A', score: 62, fill: '#555' },
  { name: 'Competitor B', score: 48, fill: '#555' },
  { name: 'Competitor C', score: 32, fill: '#555' },
];

const radarData = [
  { subject: 'Content Quality', A: 85, B: 65, C: 70, fullMark: 100 },
  { subject: 'Backlinks', A: 80, B: 90, C: 50, fullMark: 100 },
  { subject: 'Technical SEO', A: 70, B: 55, C: 45, fullMark: 100 },
  { subject: 'Page Speed', A: 90, B: 60, C: 75, fullMark: 100 },
  { subject: 'AI Citations', A: 65, B: 40, C: 25, fullMark: 100 },
  { subject: 'User Engagement', A: 75, B: 70, C: 60, fullMark: 100 },
];

const CompetitorAnalysis = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, chartRef, statsRef],
  });

  return (
    <section id="competitor-analysis" className="py-24 bg-gradient-to-t from-richBlack to-richBlack-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-40 right-20 w-64 h-64 bg-gold/5 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-48 h-48 bg-gold/5 blur-[150px] rounded-full"></div>
        
        <div 
          ref={titleRef}
          className="text-center max-w-4xl mx-auto mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Competitive Edge</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Know Where You <span className="gold-text">Stand & Dominate</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto"></div>
          <p className="text-xl text-white/70">
            Compare your brand's performance against competitors across 200+ metrics, uncovering opportunities for strategic advantage.
          </p>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
        >
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Competitor Insights</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Brand Visibility Score</span>
                    <span className="text-gold font-bold">76/100</span>
                  </div>
                  <div className="w-full h-2 bg-richBlack-dark/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gold" style={{width: '76%'}}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-white/60">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {competitorData.map((item, index) => (
                    <div key={index} className="grid grid-cols-5 items-center">
                      <div className="col-span-2 font-medium text-sm">{item.name}</div>
                      <div className="col-span-2">
                        <div className="w-full h-2 bg-richBlack-dark/60 rounded-full overflow-hidden">
                          <div className="h-full" style={{width: `${item.score}%`, backgroundColor: item.fill}}></div>
                        </div>
                      </div>
                      <div className="text-right text-sm font-mono">{item.score}</div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">You're outperforming 3 of 3 competitors</span>
                    <div className="bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-1 rounded flex items-center">
                      <MoveUp size={12} className="mr-1" />
                      <span>Top 15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold">Growth Opportunities</h4>
                <div className="bg-gold/10 text-gold text-xs font-medium px-3 py-1.5 rounded">
                  12 Found
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Content Gap Analysis",
                    description: "23 high-value keywords your competitors rank for that you don't",
                    icon: <Search size={16} className="text-gold" />
                  },
                  {
                    title: "Technical SEO Issues",
                    description: "5 critical issues affecting your visibility compared to competitors",
                    icon: <LineChart size={16} className="text-gold" />
                  },
                  {
                    title: "AI Citation Opportunities",
                    description: "8 content topics with high potential for AI search visibility",
                    icon: <TrendingUp size={16} className="text-gold" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-richBlack-dark/50 transition-colors cursor-pointer">
                    <div className="flex-shrink-0 bg-gold/10 w-8 h-8 rounded flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">{item.title}</h5>
                      <p className="text-xs text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link to="/competitive-analysis" className="text-gold text-sm font-medium hover:underline flex items-center justify-center w-full">
                  View All Opportunities <ArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div 
            ref={chartRef}
            className="lg:col-span-3 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
          >
            <div className="glass-card gold-border p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Performance Comparison</h3>
              
              <div className="h-[400px] mb-6">
                <ChartContainer className="h-full w-full" config={{ 
                  A: { label: 'Your Brand', theme: { light: '#D4AF37', dark: '#D4AF37' } },
                  B: { label: 'Competitor A', theme: { light: '#888', dark: '#888' } },
                  C: { label: 'Competitor B', theme: { light: '#555', dark: '#555' } }
                }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#444" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#999', fontSize: 11 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#555" />
                      <Radar name="Your Brand" dataKey="A" stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.3} />
                      <Radar name="Competitor A" dataKey="B" stroke="#888" fill="#888" fillOpacity={0.2} />
                      <Radar name="Competitor B" dataKey="C" stroke="#555" fill="#555" fillOpacity={0.2} />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-white/60 mb-6">
                  Analysis based on 200+ metrics across 6 key performance categories
                </p>
                
                <Link to="/competitive-analysis" className="btn-gold group text-xs tracking-widest flex items-center justify-center px-6 py-3 mx-auto w-fit">
                  GET FULL COMPETITIVE ANALYSIS
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
        >
          {[
            {
              title: "Competitor Tracking",
              value: "24/7",
              desc: "Real-time monitoring of competitor activity"
            },
            {
              title: "Performance Metrics",
              value: "200+",
              desc: "Data points analyzed per competitor"
            },
            {
              title: "Growth Opportunities",
              value: "47",
              desc: "Average opportunities identified per month"
            },
            {
              title: "Market Position",
              value: "Top 15%",
              desc: "Your current standing in your industry"
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
      </div>
    </section>
  );
};

export default CompetitorAnalysis;
