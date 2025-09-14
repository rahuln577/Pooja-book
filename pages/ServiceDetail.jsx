import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../api';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
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
        // In a real app, you would process the booking here
        // For now, we'll just navigate to the confirmation page
        setTimeout(() => {
             navigate('/booking-confirmation');
             setSubmitting(false);
        }, 1500);
    };

    if (loading) return <div className="text-center text-text-light py-40">Loading Divine Offering...</div>;
    if (!service) return <div className="text-center text-text-light py-40">Service not found.</div>;

    return (
        <div className="bg-transparent text-text-light pt-16 pb-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-16 items-start">
                    <div className="lg:col-span-3">
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} src={HomaFireImage} alt={service.name} className="w-full h-[500px] object-cover rounded-lg shadow-2xl mb-8" />
                        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-serif font-bold text-white mb-4">{service.name}</motion.h1>
                        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-text-dark mb-8 leading-relaxed">{service.howItsPerformed}</motion.p>
                        
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-white mb-6">Benefits of this Pooja</h3>
                            <div className="space-y-6">
                                {service.benefits.map((item, i) => (
                                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} key={i} className="flex items-start">
                                        <FaCheckCircle className="text-secondary text-xl mr-4 mt-1 flex-shrink-0" /> 
                                        <div>
                                            <h4 className="font-bold text-text-light">{item.title}</h4>
                                            <p className="text-text-dark">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="bg-surface backdrop-blur-xl p-8 rounded-lg shadow-2xl lg:col-span-2 sticky top-28 border border-primary/20">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-serif font-bold text-white">Book Homa</h2>
                            <span className="text-3xl font-bold text-primary">₹{service.price.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-secondary font-semibold mb-6 text-center">{service.schedule}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-4">
                                <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark"/>
                                <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark"/>
                                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleInputChange} required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark"/>
                                <textarea name="address" placeholder="Full Address" rows="3" onChange={handleInputChange} required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark"></textarea>
                            </div>
                            <button type="submit" disabled={submitting} className="w-full bg-primary text-background font-bold py-3 px-6 mt-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100">
                                {submitting ? 'Submitting...' : 'Proceed to Book'}
                            </button>
                            <p className="text-xs text-center text-text-dark mt-4">You will receive a confirmation and payment details via email.</p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default ServiceDetail;