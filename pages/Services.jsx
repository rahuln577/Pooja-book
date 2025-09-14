import { useEffect, useState } from 'react';
import { fetchServices } from '../api';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

const Services = () => {
    const [homaService, setHomaService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const res = await fetchServices();
                if (res.data && res.data.length > 0) {
                    setHomaService(res.data[0]);
                }
            } catch (error) {
                console.error("Failed to fetch services:", error);
            } finally {
                setLoading(false);
            }
        };
        loadServices();
    }, []);

    return (
        <div className="bg-transparent min-h-screen text-text-light">
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white text-center mb-12"
                >
                    Pratyangira Homa
                </motion.h1>
                
                {loading && <div className="text-center">Loading Divine Offering...</div>}

                {homaService && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl"
                    >
                        <ServiceCard service={homaService} />
                    </motion.div>
                )}
            </div>
        </div>
    );
};
export default Services;