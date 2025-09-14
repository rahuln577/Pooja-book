import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchServices } from '../api';
import ServiceCard from '../components/ServiceCard';
import PratyangiraDeviImage from '../src/assets/pratyangira-devi.jpg';

const Home = () => {
    const [homaService, setHomaService] = useState(null);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const res = await fetchServices();
                if (res.data && res.data.length > 0) {
                    setHomaService(res.data[0]);
                }
            } catch (error) {
                console.error("Failed to fetch services:", error);
            }
        };
        loadServices();
    }, []);

    return (
        <div className="text-text-light">
            <section className="relative h-[80vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-background bg-opacity-60"></div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    className="relative z-10 text-center p-4 sm:p-6"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold drop-shadow-lg">Siddha Parampara</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">A bridge to the divine energy, for your harmony and highest good.</p>
                    <Link to="/service-detail">
                        <motion.button
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="mt-8 bg-primary text-background font-bold py-3 px-8 rounded-full text-base sm:text-lg shadow-xl hover:bg-opacity-90 transition"
                        >
                            Book Pratyangira Homa
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            {homaService && (
                <section className="py-12 sm:py-16 md:py-24 bg-transparent">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
                            className="text-3xl sm:text-4xl font-serif font-bold text-center text-white mb-12"
                        >
                            Our Sacred Offering
                        </motion.h2>
                        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
                            <ServiceCard service={homaService} />
                        </div>
                    </div>
                </section>
            )}

             {homaService && (
                <section className="py-12 sm:py-16 md:py-24 bg-surface/70 backdrop-blur-xl">
                    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                         <motion.div
                            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}
                        >
                           <img src={PratyangiraDeviImage} alt="Pratyangira Devi" className="rounded-lg shadow-2xl w-full" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">Significance of Pratyangira Devi</h2>
                            <p className="text-text-dark leading-relaxed text-sm sm:text-base">{homaService.significance}</p>
                        </motion.div>
                    </div>
                </section>
             )}
        </div>
    );
};
export default Home;