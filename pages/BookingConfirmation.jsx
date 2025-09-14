import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const BookingConfirmation = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh] bg-transparent p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="bg-surface backdrop-blur-xl p-6 sm:p-10 rounded-lg shadow-2xl text-center max-w-lg border border-primary/20"
            >
                <FaCheckCircle className="text-5xl sm:text-6xl text-secondary mx-auto mb-6" />
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">Booking Request Sent!</h1>
                <p className="text-text-dark mb-8 text-sm sm:text-base">
                    Thank you for your booking. You will receive a confirmation and payment details via email shortly to confirm your pooma.
                </p>
                <Link to="/">
                    <button className="bg-primary text-background font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 text-sm sm:text-base">
                        Back to Home
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};
export default BookingConfirmation;