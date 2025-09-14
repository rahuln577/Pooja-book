import axios from 'axios';

// The path to our new local JSON file
const API_URL = '/services.json'; 

/**
 * Fetches the list of all services from the local JSON file.
 * In this case, it will be an array with one service object.
 */
export const fetchServices = async () => {
    try {
        const response = await axios.get(API_URL);
        return response; // Axios nests the data in a `data` property
    } catch (error) {
        console.error("Could not fetch local services.json:", error);
        // Return a compatible error structure
        return Promise.reject(error);
    }
};
export const fetchServiceById = (id) => axios.get(`${API_URL}/services/${id}`);
export const createBooking = (bookingData) => axios.post(`${API_URL}/bookings`, bookingData);

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-background font-sans text-text-dark">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
