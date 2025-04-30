
import React, { useRef, useState } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Info } from 'lucide-react';

const clickData = [
  { name: 'Jan', visible: 426, anonymous: 363 },
  { name: 'Feb', visible: 452, anonymous: 384 },
  { name: 'Mar', visible: 510, anonymous: 433 },
  { name: 'Apr', visible: 542, anonymous: 460 },
  { name: 'May', visible: 603, anonymous: 512 },
  { name: 'Jun', visible: 675, anonymous: 573 }
];

const pieData = [
  { name: 'Visible Queries', value: 54 },
  { name: 'Anonymous Queries', value: 46 },
];

const COLORS = ['#D4AF37', '#2C2C2C'];

const DataVisualizations = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('clicks');

  useIntersectionAnimation({
    refs: [titleRef, contentRef, chartRef],
  });

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-richBlack-dark p-4 border border-gold/20 rounded-md shadow-xl">
          <p className="text-sm font-medium mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
              <p className="text-xs">{`${entry.name}: ${entry.value} clicks`}</p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="data-visualizations" className="py-24 bg-richBlack-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-gold/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-gold/5 blur-[150px]"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div 
              ref={titleRef}
              className="text-left mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out"
            >
              <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Data Insights</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
                The <span className="gold-text">Hidden Data</span> Challenge
              </h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <p className="text-xl text-white/70">
                Our study of 146,741 websites revealed that nearly half of valuable search queries remain hidden in standard analytics tools.
              </p>
            </div>

            <div 
              ref={contentRef}
              className="space-y-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
            >
              <div className="glass-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold">Key Study Findings</h4>
                  <div className="bg-gold/10 text-gold text-xs font-medium px-3 py-1.5 rounded">
                    9B+ Clicks Analyzed
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Anonymous Query Rate</span>
                      <span className="text-gold font-bold">46.08%</span>
                    </div>
                    <div className="w-full h-2 bg-richBlack-dark/60 rounded-full overflow-hidden">
                      <div className="h-full bg-gold" style={{width: '46.08%'}}></div>
                    </div>
                    <p className="text-xs text-white/60 mt-1">Percentage of clicks with no associated search terms</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-white/60 mb-1">Study Scale</p>
                      <div className="font-mono text-2xl font-bold">146,741</div>
                      <p className="text-xs text-white/60">Websites analyzed</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Time Period</p>
                      <div className="font-mono text-2xl font-bold">30 Days</div>
                      <p className="text-xs text-white/60">Data collection window</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-white/80">Missing terms vary by site traffic volume</span>
                    <a href="#" className="text-gold text-xs font-medium hover:underline flex items-center">
                      Full Research Paper <ExternalLink className="ml-1" size={12} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 flex items-center gap-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Info className="text-gold" size={24} />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Why This Matters</h5>
                  <p className="text-sm text-white/70">
                    Standard SEO tools miss nearly half of the terms driving traffic to your site. Our platform reveals these hidden terms, giving you a competitive edge in both traditional and AI search.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={chartRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
          >
            <Tabs defaultValue="clicks" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="clicks">Traffic Data</TabsTrigger>
                <TabsTrigger value="distribution">Distribution</TabsTrigger>
                <TabsTrigger value="comparison">Site Comparison</TabsTrigger>
              </TabsList>
              
              <TabsContent value="clicks" className="h-[400px]">
                <ChartContainer className="h-full w-full" config={{ 
                  visible: { label: 'Visible Queries', theme: { light: '#D4AF37', dark: '#D4AF37' } },
                  anonymous: { label: 'Anonymous Queries', theme: { light: '#555', dark: '#777' } }
                }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={clickData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#999" />
                      <YAxis stroke="#999" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line type="monotone" dataKey="visible" stroke="#D4AF37" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      <Line type="monotone" dataKey="anonymous" stroke="#777" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>
              
              <TabsContent value="distribution" className="h-[400px]">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <ChartContainer className="h-full w-full" config={{ 
                    visible: { label: 'Visible Queries', theme: { light: '#D4AF37', dark: '#D4AF37' } },
                    anonymous: { label: 'Anonymous Queries', theme: { light: '#2C2C2C', dark: '#2C2C2C' } }
                  }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold mb-6">Query Distribution</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gold"></div>
                            <span className="text-sm">Visible Queries</span>
                          </div>
                          <span className="font-medium">54%</span>
                        </div>
                        <p className="text-xs text-white/60 pl-5">Accessible in standard analytics</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#2C2C2C]"></div>
                            <span className="text-sm">Anonymous Queries</span>
                          </div>
                          <span className="font-medium">46%</span>
                        </div>
                        <p className="text-xs text-white/60 pl-5">Hidden in standard analytics</p>
                      </div>
                      
                      <p className="text-sm text-white/70 pt-4 border-t border-white/10 mt-4">
                        Nearly half of all valuable search queries remain hidden, creating blind spots in your SEO strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="comparison" className="h-[400px]">
                <ChartContainer className="h-full w-full" config={{ 
                  site1: { label: 'High Traffic Site', theme: { light: '#D4AF37', dark: '#D4AF37' } },
                  site2: { label: 'Medium Traffic Site', theme: { light: '#888', dark: '#888' } },
                  site3: { label: 'Low Traffic Site', theme: { light: '#555', dark: '#555' } }
                }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'Site A', missing: 90.3, visible: 9.7 },
                        { name: 'Site B', missing: 46.1, visible: 53.9 },
                        { name: 'Site C', missing: 2.3, visible: 97.7 }
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#999" />
                      <YAxis stroke="#999" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="visible" name="Visible Queries %" stackId="a" fill="#D4AF37" />
                      <Bar dataKey="missing" name="Missing Queries %" stackId="a" fill="#555" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-white/60">
                Data sourced from our study of 146,741 websites with nearly 9 billion total clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualizations;
