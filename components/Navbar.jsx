import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../src/assets/logo.png';

// Improved hamburger button with better visibility
const AnimatedHamburgerButton = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-3 focus:outline-none md:hidden" // Increased padding for better touch target
      aria-label="Toggle menu"
      style={{ zIndex: 1000 }} // Ensure it's above other elements
    >
      <motion.svg
        width="28" // Slightly larger
        height="28"
        viewBox="0 0 24 24"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        className="text-text-light" // Explicit color
      >
        <motion.path
          fill="transparent"
          strokeWidth="2.5" // Slightly thicker
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 5 L 22 5" },
            open: { d: "M 4 19 L 20 5" }
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 12 L 22 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 19 L 22 19" },
            open: { d: "M 4 5 L 20 19" }
          }}
        />
      </motion.svg>
    </button>
  );
};

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

  // Variants for the mobile menu container and list items
  const mobileMenuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const mobileLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  // Desktop navigation links (without motion wrappers)
  const desktopNavLinks = (
    <>
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
    </>
  );
  
  // Mobile navigation links (with motion wrappers for animation)
  const mobileNavLinks = (
    <>
      <motion.div variants={mobileLinkVariants}>
        <NavLink 
          to="/" 
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} 
          onClick={() => setIsMenuOpen(false)} 
          className="text-text-light hover:text-primary transition-colors text-glow block py-3 text-lg" // Increased padding and text size
        >
          Home
        </NavLink>
      </motion.div>
      <motion.div variants={mobileLinkVariants}>
        <NavLink 
          to="/services" 
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} 
          onClick={() => setIsMenuOpen(false)} 
          className="text-text-light hover:text-primary transition-colors text-glow block py-3 text-lg"
        >
          Pratyangira Homa
        </NavLink>
      </motion.div>
      <motion.div variants={mobileLinkVariants}>
        <NavLink 
          to="/about" 
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} 
          onClick={() => setIsMenuOpen(false)} 
          className="text-text-light hover:text-primary transition-colors text-glow block py-3 text-lg"
        >
          About Us
        </NavLink>
      </motion.div>
      <motion.div variants={mobileLinkVariants}>
        <NavLink 
          to="/contact" 
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} 
          onClick={() => setIsMenuOpen(false)} 
          className="text-text-light hover:text-primary transition-colors text-glow block py-3 text-lg"
        >
          Contact
        </NavLink>
      </motion.div>
    </>
  );

  return (
    <motion.nav
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-surface/95 backdrop-blur-md shadow-lg border-b border-primary/20' : 'bg-transparent border-b border-transparent'}`}
      style={{ zIndex: 999 }} // Ensure navbar stays on top
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 z-10">
          <img src={logo} alt="Siddha Parampara Logo" className="w-14 h-14" />
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-8">
          {desktopNavLinks}
        </div>
        
        <Link 
          to="/service-detail" 
          className="hidden md:block bg-primary text-background font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105"
        >
          Book Homa
        </Link>

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden text-text-light flex items-center">
          <AnimatedHamburgerButton isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={{
                open: { 
                  opacity: 1, 
                  height: 'auto', 
                  transition: { duration: 0.3 } 
                },
                closed: { 
                  opacity: 0, 
                  height: 0, 
                  transition: { duration: 0.3 } 
                }
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-xl" // Full width and better background
            style={{ zIndex: 998 }}
          >
            <motion.div
              variants={mobileMenuVariants}
              className="flex flex-col items-start space-y-2 px-8 pb-8 pt-4 border-t border-primary/20" // Increased padding
            >
              {mobileNavLinks}
              <motion.div variants={mobileLinkVariants} className="w-full mt-4">
                <Link 
                  to="/service-detail" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block w-full text-center bg-primary text-background font-bold py-3 px-6 rounded-full text-lg" // Increased padding and text size
                >
                  Book Homa
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;