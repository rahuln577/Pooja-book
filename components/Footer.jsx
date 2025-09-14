import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../src/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/70 backdrop-blur-lg border-t border-primary/20 text-text-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Siddha Parampara Logo" className="w-14 h-14" />
              <span className="text-2xl font-serif font-bold text-white">Siddha Parampara</span>
            </div>
            <p className="text-text-dark max-w-md">
              A bridge to the divine energy, for your harmony and highest good.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-text-dark hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-text-dark hover:text-primary transition-colors">Pratyangira Homa</Link></li>
              <li><Link to="/contact" className="text-text-dark hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-2xl text-text-dark hover:text-primary transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl text-text-dark hover:text-primary transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl text-text-dark hover:text-primary transition-colors"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-surface mt-8 pt-6 text-center text-text-dark">
          <p>&copy; {currentYear} Siddha Parampara. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;