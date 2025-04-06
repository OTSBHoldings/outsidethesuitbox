
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "Outside the Suitbox fundamentally transformed our market position. Their strategic approach elevated our brand from competitor to category leader in under a year.",
    author: "Alexandra Chen",
    position: "Chief Marketing Officer",
    company: "Nexus Technologies"
  },
  {
    quote: "After cycling through three 'top' agencies with minimal results, Outside the Suitbox delivered immediate impact. Their work directly contributed to our most profitable quarter in company history.",
    author: "James Wilson",
    position: "CEO",
    company: "Vertex Solutions"
  },
  {
    quote: "The strategic insights and creative campaigns delivered by Outside the Suitbox helped us successfully enter three new markets. Their data-driven approach ensured optimal resource allocation and maximum impact.",
    author: "Sarah Williams",
    position: "VP of Brand Strategy",
    company: "Global Ventures Inc."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
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

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove('animate-fade-in');
      // Trigger reflow
      void testimonialRef.current.offsetWidth;
      testimonialRef.current.classList.add('animate-fade-in');
    }

    // Auto-play functionality
    autoPlayRef.current = setTimeout(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-richBlack to-richBlack-dark pt-28 pb-20" aria-label="Testimonials section">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className="text-left max-w-2xl mx-auto lg:mx-0 mb-16 px-6 md:px-0 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="uppercase tracking-widest text-gold mb-3 text-xs font-medium">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase">
            Client Experiences
          </h2>
          <div className="w-16 h-1 bg-gold mb-8"></div>
          <p className="text-white/70">
            The results of our partnerships speak with more authority than we ever could.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-0">
          <div 
            ref={testimonialRef}
            className="glass-card gold-border p-10 lg:p-16 mb-12 relative opacity-0 animate-fade-in"
          >
            <Quote className="absolute top-8 left-8 text-gold/20 h-16 w-16" />
            <div className="relative z-10">
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed font-light">{testimonials[currentIndex].quote}</p>
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wide">{testimonials[currentIndex].author}</h4>
                <p className="text-gold text-sm uppercase tracking-wider">{testimonials[currentIndex].position}</p>
                <p className="text-white/60 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold w-12' : 'bg-white/30 w-4'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
