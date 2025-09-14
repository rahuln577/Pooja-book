import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        e.target.reset();
    };

  return (
    <div className="bg-transparent text-text-light py-12 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-dark max-w-2xl mx-auto leading-relaxed">
              We are here to help and answer any question you might have.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ duration: 0.8 }}
                className="w-full bg-surface backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-lg shadow-2xl border border-primary/20"
            >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleFormSubmit} className="w-full">
                    <div className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            required 
                            className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark text-sm sm:text-base"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            required 
                            className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark text-sm sm:text-base"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows="5" 
                            required 
                            className="w-full p-3 bg-background border border-primary/20 rounded-md focus:ring-2 focus:ring-primary text-text-light placeholder:text-text-dark resize-none text-sm sm:text-base"
                        ></textarea>
                        <button 
                            type="submit" 
                            className="w-full bg-primary text-background font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 text-sm sm:text-base"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full space-y-4 sm:space-y-6"
            >
                {/* Location */}
                <div className="bg-surface backdrop-blur-xl p-4 sm:p-6 rounded-lg shadow-lg border border-primary/20">
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-xl sm:text-2xl md:text-3xl text-secondary mr-3 sm:mr-4 lg:mr-6 flex-shrink-0"/>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                              Our Location
                            </h3>
                            <p className="text-text-dark text-sm sm:text-base">
                              Bengaluru, Karnataka, India
                            </p>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="bg-surface backdrop-blur-xl p-4 sm:p-6 rounded-lg shadow-lg border border-primary/20">
                    <div className="flex items-center">
                        <FaEnvelope className="text-xl sm:text-2xl md:text-3xl text-secondary mr-3 sm:mr-4 lg:mr-6 flex-shrink-0"/>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                              Email Us
                            </h3>
                            <p className="text-text-dark text-sm sm:text-base break-all">
                              contact@siddhaparampara.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Phone */}
                <div className="bg-surface backdrop-blur-xl p-4 sm:p-6 rounded-lg shadow-lg border border-primary/20">
                    <div className="flex items-center">
                        <FaPhone className="text-xl sm:text-2xl md:text-3xl text-secondary mr-3 sm:mr-4 lg:mr-6 flex-shrink-0"/>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                              Call Us
                            </h3>
                            <p className="text-text-dark text-sm sm:text-base">
                              +91 98765 43210
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;