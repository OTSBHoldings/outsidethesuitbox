
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const serviceItems = [
    { title: "Brand Strategy", href: "/services#brand-strategy", description: "Strategic positioning and market analysis" },
    { title: "Visual Identity", href: "/services#visual-identity", description: "Memorable design systems that stand out" },
    { title: "SEO & Digital Marketing", href: "/services#seo", description: "Data-driven visibility and traffic growth" },
    { title: "Content Strategy", href: "/services#content", description: "Compelling narratives that convert" },
    { title: "Film & Photography", href: "/services#media", description: "Premium visual storytelling" },
  ];

  const resourceItems = [
    { title: "Case Studies", href: "/portfolio", description: "Examples of our successful transformations" },
    { title: "Marketing Guides", href: "/resources", description: "Best practices and industry insights" },
    { title: "SEO Research", href: "/resources#seo", description: "Latest data and performance studies" },
    { title: "Brand Framework", href: "/resources#framework", description: "Our methodology for brand growth" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-richBlack/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 z-50" aria-label="Outside the Suitbox home">
          <Logo size="sm" />
          <span className="text-white text-xs uppercase tracking-widest hidden md:block">Outside the Suitbox</span>
        </Link>

        {/* Desktop Menu with Dropdowns */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-richBlack-light text-xs uppercase tracking-widest">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {serviceItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-white/70">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="text-xs uppercase tracking-widest text-white hover:text-gold px-4 py-2 inline-block">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/team" className="text-xs uppercase tracking-widest text-white hover:text-gold px-4 py-2 inline-block">
                    Team
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-richBlack-light text-xs uppercase tracking-widest">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resourceItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-white/70">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/contact" 
                  className="bg-gold hover:bg-gold/90 text-richBlack font-bold px-6 py-2 rounded-sm uppercase text-xs tracking-widest transition-all duration-300 nav-contact-shimmer"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-x-0 top-[60px] bg-richBlack/95 backdrop-blur-md transform transition-all duration-300 ease-in-out shadow-lg md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1 border-t border-white/10">
          {/* Mobile Services Dropdown */}
          <div className="border-b border-white/10 pb-2">
            <MobileMenuDropdown title="Services" items={serviceItems} />
          </div>
          
          <Link 
            to="/about" 
            className="nav-link text-base uppercase tracking-widest block py-3 text-left pl-4" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          
          <Link 
            to="/team" 
            className="nav-link text-base uppercase tracking-widest block py-3 text-left pl-4" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          
          {/* Mobile Resources Dropdown */}
          <div className="border-t border-white/10 pt-2">
            <MobileMenuDropdown title="Resources" items={resourceItems} />
          </div>
          
          <Link 
            to="/contact" 
            className="bg-gold hover:bg-gold/90 text-richBlack font-bold px-6 py-2 rounded-sm text-sm uppercase tracking-widest block w-full text-center mt-4 nav-contact-shimmer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const MobileMenuDropdown = ({ title, items }: { title: string, items: { title: string, href: string, description: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 text-left pl-4"
      >
        <span className="nav-link text-base uppercase tracking-widest">{title}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-6 py-2 space-y-3 bg-richBlack-dark/50 rounded-md my-2">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="block py-2 hover:text-gold text-sm"
            >
              <div className="font-medium">{item.title}</div>
              <span className="text-xs text-white/50">{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
