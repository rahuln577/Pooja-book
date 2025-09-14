import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        e.target.reset();
    };

  return (
    <div className="bg-transparent text-text-light py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Get in Touch</h1>
            <p className="text-lg text-text-dark mt-2">We are here to help and answer any question you might have.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-surface backdrop-blur-xl p-8 rounded-lg shadow-2xl border border-primary/20"
            >
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="space-y-4">
                        <input type="text" placeholder="Your Name" required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark"/>
                        <input type="email" placeholder="Your Email" required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark"/>
                        <textarea placeholder="Your Message" rows="5" required className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark"></textarea>
                        <button type="submit" className="w-full bg-primary text-background font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
                            Submit
                        </button>
                    </div>
                </form>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
            >
                <div className="bg-surface backdrop-blur-xl p-6 rounded-lg shadow-lg flex items-center border border-primary/20">
                    <FaMapMarkerAlt className="text-3xl text-secondary mr-6"/>
                    <div>
                        <h3 className="text-xl font-bold text-white">Our Location</h3>
                        <p className="text-text-dark">Bengaluru, Karnataka, India</p>
                    </div>
                </div>
                <div className="bg-surface backdrop-blur-xl p-6 rounded-lg shadow-lg flex items-center border border-primary/20">
                    <FaEnvelope className="text-3xl text-secondary mr-6"/>
                    <div>
                        <h3 className="text-xl font-bold text-white">Email Us</h3>
                        <p className="text-text-dark">contact@siddhaparampara.com</p>
                    </div>
                </div>
                 <div className="bg-surface backdrop-blur-xl p-6 rounded-lg shadow-lg flex items-center border border-primary/20">
                    <FaPhone className="text-3xl text-secondary mr-6"/>
                    <div>
                        <h3 className="text-xl font-bold text-white">Call Us</h3>
                        <p className="text-text-dark">+91 98765 43210</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;