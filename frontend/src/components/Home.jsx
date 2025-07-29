import React, { useState, useEffect } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AboutDoctor from './AboutDoctor';
import Services from './Services';
import Consultation from './Consultation';
import AdvancedCare from './AdvancedCare';
import Team from './Team';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import '../styles/components/App.css';
import womanSmiling from '../assets/images/women-smiling.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openHours, setOpenHours] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev < 2 ? prev + 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchOpenHours = async () => {
      try {
        const res = await fetch('https://dr-senait-backend.onrender.com/api/open-hours');
        const data = await res.json();
        setOpenHours(data);
      } catch (err) {
        console.error('Failed to fetch open hours:', err);
      }
    };
    fetchOpenHours();
  }, []);
const slides = [
  {
    bg: '/images/slide1-bg.jpg',
    titleLines: ['YOUR JOURNEY TO', 'A PERFECT SMILE', 'STARTS HERE.'],
    description: 'Experience world-class dental care with our team of expert professionals. Your comfort and smile are our top priorities.',
    image: womanSmiling,
    imageStyle: { objectFit: 'cover' }
  },
  {
    bg: '/images/slide2-bg.jpg',
    titleLines: ['International Expertise', 'Led by Dr. Senait Habte.'],
    description: 'A USA.-trained dentist with a Doctor of Dental Medicine from Tufts University and a Bachelor of Science from PURDUE University.',
    image: '/images/dr-senait.png',
    imageStyle: { objectFit: 'cover', objectPosition: 'top', width: '70%' }
  },
  {
    bg: '/images/slide1-bg.jpg',
    titleLines: ['PAIN & DISCOMFORT?', 'SAME-DAY EMERGENCY', 'APPOINTMENTS AVAILABLE!'],
    description: '',
    image: '/images/Question mark.png',
    imageStyle: { objectFit: 'cover', objectPosition: 'top', width: '90%' }
  },
];

  const formatOpenHours = () => {
  if (!openHours.length) return 'Loading...';

  return openHours.map(hour => {
    const { day, open, close } = hour;
    if (open.toLowerCase() === 'closed') {
      return `${day}: Closed`;
    }
    return `${day}: ${open} – ${close}`;
  }).join(' | ');
};


  const openHoursText = formatOpenHours();

  return (
    <div>
      {/* Hero/Slider */}
      <div className="slider-container">
    <div className="slider">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`slide hero-section ${index === currentSlide ? 'active' : ''}`}
      style={{
        backgroundImage: `url('${slide.bg}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: '60px 80px',
        height: '100vh',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '300px',
        marginTop: '3rem',
        zIndex: 2,
      }}>
        <h1 style={{
          fontSize: '3.2rem',
          lineHeight: 1.1,
          fontFamily: '"Anton", sans-serif',
          fontWeight: 600,
          letterSpacing: '1px',
          marginTop: 0,
          marginBottom: '0.5rem'
        }}>
          {slide.titleLines.map((line, i) => (
            <span key={i} className={i === 0 ? 'hero-line-black' : 'hero-line-green'}>
              {line}<br />
            </span>
          ))}
        </h1>

        {slide.description && (
          <p style={{
            fontSize: '1.1rem',
            margin: '0.5rem 0 1.2rem',
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 400
          }}>{slide.description}</p>
        )}

        <div className="hero-buttons">
          <div className="hero-button">
            <i className="ri-phone-line"></i>
            <div>
              <p className="button-title">+251 941 83 83 83 </p>
              <p className="button-desc">For Appointment</p>
            </div>
          </div>
          <div className="hero-button">
            <i className="ri-time-line"></i>
            <div>
              <p className="button-title">OPEN HOURS</p>
              <p style={cardDesc}>{formatOpenHours()}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: 2
      }}>
        <img src={slide.image} alt="slide visual" style={{
          height: '100%',
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          ...slide.imageStyle
        }} />
      </div>
    </div>
  ))}
</div>

        </div>

        {/* Dots */}
        <div className="slider-dots">
          {[0, 1, 2].map(index => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
            
          ))}
        </div>

      {/* Rest of the home page components */}
      <AppointmentBanner />
      <AboutDoctor />
      <Services />
      <Consultation />
      <AdvancedCare />
      <Team />
      <FAQ showBanner={false} />
      <Testimonials />
    </div>
    
  );
};

const infoCardStyle = {
  display: 'flex',
  alignItems: 'center',
  background: '#fff',
  padding: '6px 12px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  gap: '8px',
  width: '200px',
};

const iconStyle = {
  fontSize: '18px',
  color: '#00c8c0',
};

const cardTitle = {
  fontWeight: '600',
  fontSize: '0.9rem',
  margin: 0,
};

const cardDesc = {
  fontSize: '0.75rem',
  color: '#555',
  margin: 0,
};

export default Home;
