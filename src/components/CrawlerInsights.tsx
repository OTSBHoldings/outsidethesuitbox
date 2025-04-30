
import React, { useRef } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';
import { Shield, Terminal, LineChart, Server, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CrawlerInsights = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const botInfoRef = useRef<HTMLDivElement>(null);
  const policyRef = useRef<HTMLDivElement>(null);

  useIntersectionAnimation({
    refs: [titleRef, contentRef, botInfoRef, policyRef],
  });

  return (
    <section id="crawler-insights" className="py-24 bg-richBlack relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-32 h-32 border border-gold/10 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 border border-gold/5 rounded-full"></div>
        <div className="absolute top-80 right-40 w-24 h-24 border-2 border-gold/10 rounded-full"></div>
        
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Crawler Technology</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase">
            Transparent <span className="gold-text">Crawling Practices</span>
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-xl text-white/70">
            Our advanced crawler technology powers comprehensive insights while respecting website owners' resources and privacy controls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
          >
            <Tabs defaultValue="crawlers" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="crawlers">Our Crawlers</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="control">Control Options</TabsTrigger>
              </TabsList>
              
              <TabsContent value="crawlers" className="space-y-6">
                <div className="glass-card p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-md">
                      <Terminal className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">OutsideSEO Crawler</h4>
                      <p className="text-white/70 mb-4">Powers our comprehensive SEO database and visibility monitoring</p>
                      <div className="bg-richBlack-dark/50 p-4 rounded-md font-mono text-xs text-white/80 mb-4 overflow-x-auto">
                        Mozilla/5.0 (compatible; OutsideSEOBot/1.0; +https://outsidethesuitbox.com/bot)
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-xs text-white/60">Respects robots.txt</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-xs text-white/60">Cloudflare verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-md">
                      <LineChart className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">OutsideSEO Audit Bot</h4>
                      <p className="text-white/70 mb-4">Dedicated crawling for technical site audits and detailed analysis</p>
                      <div className="bg-richBlack-dark/50 p-4 rounded-md font-mono text-xs text-white/80 mb-4 overflow-x-auto">
                        Mozilla/5.0 (compatible; OutsideSEOAudit/1.0; +https://outsidethesuitbox.com/bot/audit)
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-xs text-white/60">Configurable by site owners</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-xs text-white/60">Optimized load management</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Comprehensive Visibility",
                      description: "Get accurate insights into how search engines and AI platforms see your website, with data impossible to gather from standard analytics."
                    },
                    {
                      title: "Technical SEO Insights",
                      description: "Identify issues like broken links, slow pages, security issues, and SEO pitfalls before they impact your rankings."
                    },
                    {
                      title: "Backlink Analytics",
                      description: "Discover who's linking to your site and how those links influence your visibility in both traditional and AI search."
                    },
                    {
                      title: "Competitive Intelligence",
                      description: "See how your website compares to competitors across 200+ SEO metrics, revealing opportunities for growth."
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-5 rounded-lg bg-richBlack-light/50">
                      <div className="flex-shrink-0 bg-gold/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <Check className="text-gold" size={18} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="control" className="space-y-6">
                <div className="glass-card p-8">
                  <h4 className="text-xl font-bold mb-4">Controlling Crawler Behavior</h4>
                  <p className="text-white/70 mb-6">We respect your server resources and provide multiple ways to control our crawlers:</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-medium mb-2">Via Robots.txt</h5>
                      <div className="bg-richBlack-dark/50 p-4 rounded-md font-mono text-xs text-white/80 mb-2 overflow-x-auto">
                        User-agent: OutsideSEOBot<br />
                        Crawl-Delay: 5<br /><br />
                        
                        User-agent: OutsideSEOBot<br />
                        Disallow: /private/
                      </div>
                      <p className="text-sm text-white/60">Set crawl delays or disallow specific sections of your site.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-medium mb-2">Adjusting Crawl Speed</h5>
                      <p className="text-sm text-white/70 mb-3">Verified site owners can adjust crawl speeds in the dashboard:</p>
                      <div className="flex items-center gap-4">
                        <div className="w-full h-2 bg-richBlack-dark/60 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                        </div>
                        <span className="text-xs text-white/70">Gentle → Aggressive</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-sm text-white/80">Need help with crawler settings?</span>
                      <Link to="/contact" className="text-gold text-sm font-medium hover:underline flex items-center">
                        Contact Support <ArrowRight className="ml-1" size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div 
            ref={botInfoRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-richBlack border-gold/20 overflow-hidden">
                <CardContent className="p-6">
                  <div className="bg-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="text-gold" size={20} />
                  </div>
                  <h5 className="text-lg font-medium mb-2">Verified Crawlers</h5>
                  <p className="text-sm text-white/70">All our crawlers are recognized as legitimate by major security providers like Cloudflare.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-richBlack border-gold/20 overflow-hidden">
                <CardContent className="p-6">
                  <div className="bg-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Server className="text-gold" size={20} />
                  </div>
                  <h5 className="text-lg font-medium mb-2">Load Management</h5>
                  <p className="text-sm text-white/70">Automatically adjusts crawling speed when encountering server errors or high loads.</p>
                </CardContent>
              </Card>
            </div>
            
            <div 
              ref={policyRef}
              className="glass-card gold-border p-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
            >
              <h4 className="text-xl font-bold mb-6">Our Crawler Commitments</h4>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Respect for Site Controls",
                    description: "We strictly adhere to robots.txt directives and crawl-delay settings across all our bot operations."
                  },
                  {
                    title: "Resource Efficiency",
                    description: "Our crawlers employ intelligent caching of static resources to minimize bandwidth consumption and server impact."
                  },
                  {
                    title: "Transparent Identification",
                    description: "All our bots have clear user-agent strings and verifiable IP addresses with proper reverse DNS records."
                  },
                  {
                    title: "Customizable Approach",
                    description: "Site owners can fine-tune how our crawlers interact with their sites through our dashboard or direct communication."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="text-gold" size={16} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">{item.title}</h5>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gold/10 px-2 py-1 rounded">
                      <span className="text-xs text-gold font-medium">NEW</span>
                    </div>
                    <h5 className="font-medium">IndexNow Integration</h5>
                  </div>
                  <p className="text-sm text-white/70">
                    We've partnered with IndexNow to ensure your content updates are discovered and indexed faster, reducing crawl load while improving visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrawlerInsights;
