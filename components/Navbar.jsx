import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Use NavLink for active styles
import logo from '../src/assets/logo.png';

const Navbar = () => {
  // State to track whether the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to update the state based on scroll position
    const handleScroll = () => {
      // Set state to true if scrollY is more than 10, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Define the style for an active NavLink
  const activeLinkStyle = {
    color: '#FBBF24', // Uses your primary color
    textShadow: '0 0 10px rgba(251, 191, 36, 0.5)', // A stronger glow for active link
  };

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-surface/80 backdrop-blur-md shadow-lg border-b border-primary/20'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Siddha Parampara Logo" className="w-14 h-14" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-text-light hover:text-primary transition-colors text-glow"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-text-light hover:text-primary transition-colors text-glow"
          >
            Pratyangira Homa
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-text-light hover:text-primary transition-colors text-glow"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="text-text-light hover:text-primary transition-colors text-glow"
          >
            Contact
          </NavLink>
        </div>
        <Link to="/service-detail" className="hidden md:block bg-primary text-background font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
          Book Homa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;