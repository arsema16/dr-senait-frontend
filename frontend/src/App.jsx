import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import Consultation from './components/Consultation';
import AdvancedCare from './components/AdvancedCare';
import Team from './components/Team';
import TeamDetail from './components/TeamDetail';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import AppointmentBanner from './components/AppointmentBanner';
import Appointment from './components/Appointment';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/Aboutus';
import BlogArticles from './components/BlogArticles';
import Gallery from './components/Gallery';
import BlogDetail from './components/BlogDetail'; // ✅ import it
import YourSmile from './components/yoursmile'; // ✅ import it
import Intropage from './components/Intro'; // ✅ import it

const DentalClinic = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/intro" element={<Intropage />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/appointmentb" element={<AppointmentBanner />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-detail" element={<TeamDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-doctor" element={<AboutDoctor />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/advanced-care" element={<AdvancedCare />} />
  <Route path="/blog" element={<BlogArticles />} />
          <Route path="/Appointment" element={<Appointment />} />
<Route path="/admin" element={<AdminPanel />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/blog/:id" element={<BlogDetail />} />
  <Route path="/yoursmile" element={<YourSmile />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default DentalClinic;
