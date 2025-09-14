import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger menu icons
import logo from '../src/assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeLinkStyle = {
    color: '#FBBF24',
    textShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
  };

  const navLinks = (
    <>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-text-light hover:text-primary transition-colors text-glow block py-2">Home</NavLink>
      <NavLink to="/services" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-text-light hover:text-primary transition-colors text-glow block py-2">Pratyangira Homa</NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-text-light hover:text-primary transition-colors text-glow block py-2">About Us</NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-text-light hover:text-primary transition-colors text-glow block py-2">Contact</NavLink>
    </>
  );

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg border-b border-primary/20' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Siddha Parampara Logo" className="w-14 h-14" />
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-8">{navLinks}</div>

        <Link to="/service-detail" className="hidden md:block bg-primary text-background font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
          Book Homa
        </Link>
        
        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-light text-2xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface backdrop-blur-xl border-t border-primary/20 px-6 pb-6 pt-2"
        >
          <div className="flex flex-col items-start space-y-4">
            {navLinks}
            <Link to="/service-detail" className="w-full text-center mt-4 bg-primary text-background font-bold py-2 px-6 rounded-full">
              Book Homa
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;