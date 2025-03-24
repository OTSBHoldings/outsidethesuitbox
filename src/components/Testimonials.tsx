
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
    quote: "Outside the Suitbox transformed our brand identity and doubled our market presence in just six months. Their innovative approach and dedication to results is unmatched in the industry.",
    author: "Alexandra Chen",
    position: "Chief Marketing Officer",
    company: "Nexus Technologies"
  },
  {
    quote: "Working with this team has been game-changing for our startup. They understand our vision and have helped us communicate it effectively to our target audience with stunning creative work.",
    author: "Marcus Johnson",
    position: "Founder & CEO",
    company: "Elevate Solutions"
  },
  {
    quote: "The strategic insights and creative campaigns delivered by Outside the Suitbox helped us successfully enter three new markets. Their data-driven approach ensured optimal resource allocation.",
    author: "Sarah Williams",
    position: "VP of Brand Strategy",
    company: "Global Ventures Inc."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
            if (entry.target === titleRef.current) {
              entry.target.classList.add('after:w-24');
              entry.target.classList.remove('after:w-0');
            }
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
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-richBlack to-richBlack-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h5 className="uppercase tracking-wider text-gold mb-4">Success Stories</h5>
          <h2 
            ref={titleRef}
            className="heading-lg mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:bg-gold after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:transition-all after:duration-1000"
          >
            Client Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Hear from our partners about their experience working with Outside the Suitbox.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={testimonialRef} className="glass-card gold-border p-10 mb-8 relative opacity-0">
            <Quote className="absolute top-6 left-6 text-gold/20 h-16 w-16" />
            <div className="relative z-10">
              <p className="text-xl mb-8 leading-relaxed">{testimonials[currentIndex].quote}</p>
              <div>
                <h4 className="text-lg font-bold">{testimonials[currentIndex].author}</h4>
                <p className="text-gold">{testimonials[currentIndex].position}</p>
                <p className="text-white/60">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
