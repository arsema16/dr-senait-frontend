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
        const res = await fetch('http://localhost:5000/api/open-hours');
        const data = await res.json();
        setOpenHours(data);
      } catch (err) {
        console.error('Failed to fetch open hours:', err);
      }
    };
    fetchOpenHours();
  }, []);

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
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {/* Slide 1 */}
          <div className="slide hero-section" style={{
            backgroundImage: "url('/images/slide1-bg.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            padding: '60px 80px',
            height: '100vh',
            boxSizing: 'border-box',
          }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '300px' }}>
              <h1
  style={{
    fontSize: '3rem',
    lineHeight: 1.1,
    fontFamily: '"Anton", sans-serif',
    fontWeight: 400,
    letterSpacing: '1px',
  }}
>
  <span className="hero-line-black">YOUR JOURNEY TO</span><br />
  <span className="hero-line-green">A PERFECT SMILE</span><br />
  <span className="hero-line-green">STARTS HERE.</span>
</h1>

              <p style={{ fontSize: '1.1rem', margin: '1rem 0', fontFamily: '"Anton", sans-serif',
  fontWeight: '400', }}>
                Experience world-class dental care with our team of expert professionals. Your comfort and smile are our top priorities.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'nowrap' }}>
                {/* Phone */}
                <div style={infoCardStyle}>
                  <i className="ri-phone-line" style={iconStyle}></i>
                  <div>
                    <p style={cardTitle}>+251 941 83 83 83</p>
                    <p style={cardDesc}>For Appointment</p>
                  </div>
                </div>
                {/* Hours */}
                <div style={infoCardStyle}>
                  <i className="ri-time-line" style={iconStyle}></i>
                  <div>
                    <p style={cardTitle}>OPEN HOURS</p>
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
            }}>
              <img src="/images/women-smiling.png" alt="Smiling woman" style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }} />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide hero-section align-top" style={{
            backgroundImage: "url('/images/slide2-bg.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            <div className="hero-left">
              <h1>
                <span className="hero-line-black">INTERNATIONAL EXPERTISE</span><br />
                <span className="hero-line-green">LED BY DR. SENAIT HABTE</span>
              </h1>
              <p className="hero-subtext">
•	Experience world-class dental care with our team of expert professionals. Your comfort and smile are our top priorities.              </p>
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
            <div className="hero-right small-image">
              <img src="/images/dr-senait.png" alt="Dr. Senait Habte" />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide hero-section" style={{
            backgroundImage: "url('/images/slide3-bg.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            padding: '60px 80px',
            height: '100vh',
            boxSizing: 'border-box',
            gap: '40px',
          }}>
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: '300px',
            }}>
              <h1
  style={{
    fontSize: '3rem',
    fontWeight: '700',
    fontFamily: "'Oswald', sans-serif",
    color: '#002f36',
    marginBottom: '10px',
  }}
>
  PAIN & DISCOMFORT?
</h1>

<h2
  style={{
    fontSize: '3rem',
    fontWeight: '700',
    fontFamily: "'Oswald', sans-serif",
    color: '#00a9a4',
  }}
>
  SAME-DAY EMERGENCY<br />APPOINTMENTS AVAILABLE!
</h2>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <div style={infoCardStyle}>
                  <i className="ri-phone-line" style={iconStyle}></i>
                  <div>
                    <p style={cardTitle}>+251 941 83 83 83 </p>
                    <p style={cardDesc}>For Appointment</p>
                  </div>
                </div>
                <div style={infoCardStyle}>
                  <i className="ri-time-line" style={iconStyle}></i>
                  <div>
                    <p style={cardTitle}>OPEN HOURS</p>
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
            }}>
              <img src="/images/Question mark.png" alt="Patient in pain" style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
              }} />
            </div>
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
