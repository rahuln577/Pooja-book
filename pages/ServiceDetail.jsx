import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../api';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import HomaFireImage from '../src/assets/homa-fire.jpg';

const ServiceDetail = () => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadService = async () => {
            try {
                const res = await fetchServices();
                if (res.data && res.data.length > 0) {
                    setService(res.data[0]);
                }
            } catch (error) {
                console.error("Failed to fetch service details:", error);
            } finally {
                setLoading(false);
            }
        };
        loadService();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
             navigate('/booking-confirmation');
             setSubmitting(false);
        }, 1500);
    };

    if (loading) return <div className="text-center text-text-light py-40">Loading Divine Offering...</div>;
    if (!service) return <div className="text-center text-text-light py-40">Service not found.</div>;

    return (
        <div className="bg-transparent text-text-light py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
                    <div className="lg:col-span-3">
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} src={HomaFireImage} alt={service.name} className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-2xl mb-8" />
                        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">{service.name}</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-text-dark mb-8 leading-relaxed text-sm sm:text-base">{service.howItsPerformed}</motion.p>
                        
                        <div className="mt-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Benefits of this Pooja</h3>
                            <div className="space-y-6">
                                {service.benefits.map((item, i) => (
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} key={i} className="flex items-start">
                                        <FaCheckCircle className="text-secondary text-lg sm:text-xl mr-4 mt-1 flex-shrink-0" /> 
                                        <div>
                                            <h4 className="font-bold text-text-light text-base sm:text-lg">{item.title}</h4>
                                            <p className="text-text-dark text-sm sm:text-base">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="bg-surface backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-lg shadow-2xl lg:col-span-2 lg:sticky top-28 border border-primary/20">
                        {/* --- THIS IS THE FIXED SECTION --- */}
                        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center mb-4">
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 sm:mb-0">Book Homa</h2>
                            <span className="text-2xl sm:text-3xl font-bold text-primary">₹{service.price.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-secondary font-semibold mb-6 text-center text-sm sm:text-base">{service.schedule}</p>
                        <form onSubmit={handleSubmit}>
                             <div className="space-y-4">
                                <input type="text" placeholder="Your Name" required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark text-sm sm:text-base"/>
                                <input type="email" placeholder="Your Email" required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark text-sm sm:text-base"/>
                                <input type="tel" placeholder="Phone Number" required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark text-sm sm:text-base"/>
                                <textarea placeholder="Your Message" rows="5" required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark resize-none text-sm sm:text-base"></textarea>
                                <button type="submit" disabled={submitting} className="w-full bg-primary text-background font-bold py-3 px-6 mt-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 text-sm sm:text-base">
                                    {submitting ? 'Submitting...' : 'Proceed to Book'}
                                </button>
                            </div>
                        </form>
                        <p className="text-xs text-center text-text-dark mt-4">You will receive a confirmation and payment details via email.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default ServiceDetail;