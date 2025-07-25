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
        const res = await fetch('https://dr-senait-backend.onrender.com/api/open-hours');
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
            <div style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '300px',
    paddingTop: '0',     // ensure no extra top padding
    marginTop: '3rem',      // ensure no extra top margin
  }}>
              <h1
  style={{
    fontSize: '3.6rem',
    lineHeight: 1.1,
    fontFamily: '"Anton", sans-serif',
    fontWeight: 600,
    letterSpacing: '1px',
    marginTop: '0',           // ✅ Remove space above
    marginBottom: '0.5rem', // ↓ Reduced space here
  }}
>
  <span className="hero-line-black" >YOUR JOURNEY TO</span><br />
  <span className="hero-line-green">A PERFECT SMILE</span><br />
  <span className="hero-line-green">STARTS HERE.</span>
</h1>

<p
  style={{
    fontSize: '1.1rem',
    margin: '0.5rem 0 1.2rem', // ↑ Less space at the top
    fontFamily: '"Oswald", sans-serif',
    fontWeight: 400,
  }}
>
  Experience world-class dental care with our team of <br/>expert professionals. Your comfort and smile are our top priorities.
</p>

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
            }}>
              <img src="/images/women-smiling.png" alt="Smiling woman" style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }} />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide hero-section" style={{
            backgroundImage: "url('/images/slide2-bg.jpg')",
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
            <div style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '300px',
    paddingTop: '0',     
    marginTop: '3rem',      
  }}>
              <h1
  style={{
    fontSize: '3rem',
    lineHeight: 1.1,
    fontFamily: '"Anton", sans-serif',
    fontWeight: 400,
    letterSpacing: '1px',
    marginTop: '0',           
    marginBottom: '0.5rem', 
  }}
>
  <span className="hero-line-black" >International Expertise </span><br />
  <span className="hero-line-green small">Led by Dr. Senait Habte.</span><br />
</h1>

<p
  style={{
    fontSize: '1.1rem',
    margin: '0.5rem 0 1.2rem',
    fontFamily: '"Oswald", sans-serif',
    fontWeight: 400,
  }}
>
  A USA.-trained dentist with a Doctor of Dental Medicine from<br />
  Tufts University and a Bachelor of Science from PURDUE University.
</p>


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
            }}>
              <img src="/images/dr-senait.png" alt="dr senait" style={{
                height: '100%',
                width: '70%',
                objectFit: 'cover',
                objectPosition:'top',
              }} />
            </div>
          </div>

          {/* Slide 3 */}
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
            <div style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '300px',
    paddingTop: '0',     
    marginTop: '0',     
  }}>
              <h1
  style={{
    fontSize: '3rem',
    lineHeight: 1.1,
    fontFamily: '"Anton", sans-serif',
    fontWeight: 400,
    letterSpacing: '1px',
    marginTop: '0',          
    marginBottom: '0.5rem', 
  }}
>
  <span className="hero-line-black" >PAIN & DISCOMFORT?</span><br />
  <span className="hero-line-green small">SAME-DAY EMERGENCY</span><br />
  <span className="hero-line-green small">APPOINTMENTS AVAILABLE!</span>
</h1>

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
            }}>
              <img src="/images/Question mark.png" alt="Smiling woman" style={{
                height: '100%',
                width: '90%',
                objectFit: 'cover',
                objectPosition:'top'
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
