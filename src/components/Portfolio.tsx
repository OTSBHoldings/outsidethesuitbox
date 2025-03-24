
import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

type ProjectProps = {
  title: string;
  category: string;
  image: string;
  description: string;
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'digital', label: 'Digital Marketing' },
    { id: 'creative', label: 'Creative Design' }
  ];
  
  const projects: ProjectProps[] = [
    {
      title: "Nexus Rebrand",
      category: "branding",
      image: "/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png",
      description: "Complete identity redesign for a leading tech company."
    },
    {
      title: "Global Campaign",
      category: "digital",
      image: "/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png",
      description: "Multi-channel digital marketing campaign across 12 countries."
    },
    {
      title: "Luxury Experience",
      category: "creative",
      image: "/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png",
      description: "Immersive brand experience for high-end clientele."
    },
    {
      title: "Market Launch",
      category: "branding",
      image: "/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png",
      description: "Strategy and execution for new product market entry."
    },
    {
      title: "Social Media Growth",
      category: "digital",
      image: "/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png",
      description: "Audience growth and engagement strategy for B2C brand."
    },
    {
      title: "Event Design",
      category: "creative",
      image: "/lovable-uploads/848a80ab-bae9-4698-87e1-9669b519f75e.png",
      description: "Award-winning design for annual industry conference."
    }
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('after:w-24');
            entry.target.classList.remove('after:w-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-richBlack-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Logo size="sm" className="mx-auto mb-6" />
          <h5 className="uppercase tracking-wider text-gold mb-4">Our Work</h5>
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:bg-gold after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:transition-all after:duration-1000"
          >
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 mb-8">
            Explore our portfolio of successful campaigns and projects that have helped our clients achieve extraordinary results.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-gold text-richBlack font-semibold' 
                    : 'bg-richBlack-dark text-white/70 hover:bg-gold/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card gold-border overflow-hidden transform transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-richBlack to-transparent opacity-80"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-gold text-sm uppercase tracking-wider">{
                    categories.find(cat => cat.id === project.category)?.label
                  }</span>
                  <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-white/70">{project.description}</p>
                <a href="#" className="inline-block mt-4 text-gold font-semibold hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
