
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-richBlack">
      <Navbar />
      <div className="flex items-center justify-center flex-grow p-6">
        <div className="text-center max-w-lg">
          <h1 className="text-6xl font-display font-bold mb-4 text-white">404</h1>
          <h2 className="text-2xl font-bold mb-6 text-gold shimmer-effect">Page Not Found</h2>
          <p className="text-lg text-white/70 mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/" className="btn-gold inline-block px-12 py-4">
            Return to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
