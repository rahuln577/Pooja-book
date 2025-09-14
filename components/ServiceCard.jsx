import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PratyangiraDeviImage from '../src/assets/homa-fire.jpg';

const ServiceCard = ({ service }) => {
  const { name, description, price } = service;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-surface backdrop-blur-xl rounded-lg shadow-2xl shadow-primary/10 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group border border-primary/20"
    >
      <Link to={`/service-detail`}>
        <div className="relative h-56 sm:h-64">
          <img src={PratyangiraDeviImage} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-2">{name}</h3>
          <p className="text-text-dark text-sm sm:text-base mb-4 line-clamp-3">{description}</p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-base sm:text-lg md:text-xl font-bold text-primary">₹{price.toLocaleString('en-IN')}</span>
            <span className="font-semibold text-primary group-hover:underline text-sm sm:text-base">
              View Details &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
export default ServiceCard;