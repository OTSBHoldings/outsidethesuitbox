
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, PieChart, Settings, Users, Globe, BarChart, Zap, Database } from 'lucide-react';

const ScalabilityFramework = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, stepsRef],
  });

  return (
    <section id="scalability-framework" className="py-24 bg-richBlack relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/5 blur-[100px] rounded-full"></div>
        
        <div 
          ref={titleRef}
          className="text-center max-w-4xl mx-auto mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Enterprise Scalability</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Built to <span className="gold-text">Scale With You</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8 mx-auto"></div>
          <p className="text-xl text-white/70">
            Our enterprise platform adapts to your growth, from startups to global operations, with a scalable infrastructure designed for performance at any level.
          </p>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
        >
          <div className="lg:col-span-1">
            <div className="glass-card gold-border p-8 h-full">
              <div className="flex items-center mb-8">
                <div className="bg-gold/10 p-3 rounded-md mr-4">
                  <BarChart className="text-gold" size={24} />
                </div>
                <h3 className="text-2xl font-bold">The Scalability Challenge</h3>
              </div>
              
              <p className="text-white/80 mb-6">
                As brands grow, their SEO needs expand exponentially in complexity and volume. Most platforms buckle under this pressure, creating data bottlenecks and reliability issues.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-richBlack-dark/50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Common Scaling Issues</h5>
                  <ul className="space-y-2 text-sm text-white/70 list-disc pl-4">
                    <li>Data processing delays as site volume increases</li>
                    <li>Inconsistent crawler performance across large sites</li>
                    <li>Limited API access and integration capabilities</li>
                    <li>Inability to handle multi-site or multi-market analytics</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <div className="flex-shrink-0 bg-richBlack/60 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-white/70" />
                </div>
                <div>
                  <p className="text-sm font-medium">Enterprise Ready</p>
                  <p className="text-xs text-white/60">Handles 100M+ URLs across unlimited domains</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">Our Scalability Framework</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Distributed Processing",
                    description: "Our platform distributes workloads across hundreds of servers, ensuring consistent performance regardless of data volume.",
                    icon: <Database size={20} className="text-gold" />
                  },
                  {
                    title: "Intelligent Crawling",
                    description: "Adaptive crawling algorithms that prioritize important content and adjust frequency based on change patterns.",
                    icon: <Globe size={20} className="text-gold" />
                  },
                  {
                    title: "Real-time Analytics",
                    description: "Process and visualize millions of data points in real-time without lag or performance degradation.",
                    icon: <PieChart size={20} className="text-gold" />
                  },
                  {
                    title: "Enterprise API",
                    description: "Robust API with 10x the standard rate limits and dedicated infrastructure for your integration needs.",
                    icon: <Settings size={20} className="text-gold" />
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-0 bg-richBlack-dark/50">
                    <CardContent className="p-6">
                      <div className="bg-gold/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gold/5 border border-gold/10 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-md">
                    <Zap className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Performance Guarantee</h4>
                    <p className="text-sm text-white/70">Our enterprise platform guarantees 99.99% uptime and sub-second query response times, even for the largest sites.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={stepsRef}
          className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">The Enterprise Implementation Process</h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-1 bg-gold/30 z-0"></div>
            
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Strategic Assessment",
                  description: "Our team analyzes your current infrastructure, identifies scaling requirements, and develops a custom implementation plan."
                },
                {
                  number: "02",
                  title: "Custom Configuration",
                  description: "We configure our platform to your specific needs, including custom crawler settings, API integrations, and user access controls."
                },
                {
                  number: "03",
                  title: "Data Migration",
                  description: "Seamless migration of existing data with zero downtime, preserving historical trends and insights."
                },
                {
                  number: "04",
                  title: "Ongoing Optimization",
                  description: "Continuous performance monitoring and regular optimization to ensure the platform scales with your growing needs."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start relative z-10">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold text-richBlack font-bold text-xl flex items-center justify-center rounded-full">
                    {item.number}
                  </div>
                  <div className="glass-card p-6 flex-grow">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Link to="/enterprise" className="btn-gold group text-xs tracking-widest flex items-center justify-center px-8 py-3">
                REQUEST ENTERPRISE DEMO
                <ArrowRight className="ml-3 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalabilityFramework;
