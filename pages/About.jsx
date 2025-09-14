import { motion } from 'framer-motion';
import { FaUserShield, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import logo from '../src/assets/logo.png';
import SiddhaImage from '../src/assets/siddha-thirumular.jpg';
import EnergyImage from '../src/assets/divine-energy.jpg';

const About = () => {
  const challenges = [
    { icon: <FaUserShield />, text: "Navagraha & Vastu Dosha" },
    { icon: <FaSeedling />, text: "Indisciplined Lifestyle" },
    { icon: <FaShieldAlt />, text: "Psychic & Pitru Dosha" }
  ];

  return (
    <div className="bg-transparent text-text-light py-20 overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
        >
            <img src={logo} alt="Siddha Parampara Logo" className="w-24 h-24 mx-auto mb-6"/>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">A Bridge to the Divine</h1>
            <p className="text-lg text-text-dark max-w-3xl mx-auto leading-relaxed">
                Namaste, welcome to the grace of Divine blessings. This site is a bridge between you and the divine energy, until you realize you are one with the divine.
            </p>
        </motion.section>

        <section className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <img src={SiddhaImage} alt="Grace of Siddha Thirumular" className="rounded-2xl shadow-2xl w-full h-full object-cover"/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
            >
                <h2 className="text-3xl font-serif font-bold text-white">The Path to Harmony</h2>
                <p>We constantly strive for our goals, yet often find a lack of harmony between our efforts and achievements. This can be due to factors such as:</p>
                <div className="space-y-3 pt-2">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="flex items-center text-secondary">
                            <span className="text-2xl mr-3">{challenge.icon}</span>
                            <span>{challenge.text}</span>
                        </div>
                    ))}
                </div>
                 <p className="pt-4">With the grace of Siddha Thirumular, we follow sacred rituals as guided by the siddha parampara to help bring the blessings of the divine into your life, restoring harmony for your highest good.</p>
            </motion.div>
        </section>

         <section className="relative py-20 bg-surface/80 backdrop-blur-xl rounded-2xl border border-primary/20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-serif font-bold text-white">A Lifelong Journey</h2>
                    <p>Let’s realize, connecting with the divine is not a one-time activity. It requires constant effort, devotion, and practice to reach a state of higher consciousness and inner peace. Our rituals are a powerful step on that sacred path.</p>
                </motion.div>
                 <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={EnergyImage} alt="Constant spiritual effort" className="rounded-2xl shadow-2xl w-full h-full object-cover"/>
                </motion.div>
            </div>
        </section>

      </div>
    </div>
  );
};
export default About;