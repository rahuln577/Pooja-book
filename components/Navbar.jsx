import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../src/assets/logo.png';

// Improved hamburger button with better visibility
const AnimatedHamburgerButton = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-3 focus:outline-none lg:hidden" // Changed from md:hidden to lg:hidden for consistent breakpoint
      aria-label="Toggle menu"
      style={{ zIndex: 1000 }}
    >
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        className="text-text-light"
      >
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when resizing to desktop size
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && windowWidth < 1024) {
        const nav = document.querySelector('nav');
        if (nav && !nav.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, windowWidth]);

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

  // Desktop navigation links
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
  
  // Mobile navigation links
  const mobileNavLinks = (
    <>
      <motion.div variants={mobileLinkVariants}>
        <NavLink 
          to="/" 
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} 
          onClick={() => setIsMenuOpen(false)} 
          className="text-text-light hover:text-primary transition-colors text-glow block py-3 text-lg"
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
      style={{ zIndex: 999 }}
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 z-10">
          <img src={logo} alt="Siddha Parampara Logo" className="w-14 h-14" />
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden lg:flex items-center space-x-8">
          {desktopNavLinks}
        </div>
        
        <Link 
          to="/service-detail" 
          className="hidden lg:block bg-primary text-background font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105"
        >
          Book Homa
        </Link>

        {/* --- Mobile Menu Button --- */}
        <div className="lg:hidden text-text-light flex items-center">
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
            className="lg:hidden overflow-hidden bg-surface/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-xl"
            style={{ zIndex: 998 }}
          >
            <motion.div
              variants={mobileMenuVariants}
              className="flex flex-col items-start space-y-2 px-8 pb-8 pt-4 border-t border-primary/20"
            >
              {mobileNavLinks}
              <motion.div variants={mobileLinkVariants} className="w-full mt-4">
                <Link 
                  to="/service-detail" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block w-full text-center bg-primary text-background font-bold py-3 px-6 rounded-full text-lg"
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