import React, { useEffect, useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import Testimonial from './Testimonials';

const Appointment = () => {
  const [openHours, setOpenHours] = useState([]);

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

  const imgIconStyle = {
    width: '28px',
    height: '28px',
    objectFit: 'contain',
    filter: 'invert(1)',
  };

  return (
    <div style={{fontFamily: '"Federo", sans-serif',
 }}>
  <div
          style={{
            backgroundImage: 'url("/images/slide1-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '100px 20px 60px',
            textAlign: 'center',
          }}
        >
          </div>

      {/* Banner */}
      <AppointmentBanner />

      {/* Info Cards Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '4rem 2rem',
        gap: '2rem',
        backgroundColor: '#f8f9fa'
      }}>
        {/* Card 1: Appointment */}
        <div style={cardStyle}>
          <div style={iconBoxStyle}>
            <img src="/images/phone icon.png" alt="Phone Icon" style={imgIconStyle} />
          </div>
          <h3 style={cardTitleStyle}>Appointment</h3>
          <p>+251 941 838383<br />+251 947 838383</p>
          <button style={cardButtonStyle}>Get Started</button>
        </div>

        {/* Card 2: Open Hours */}
        <div style={cardStyle}>
          <div style={iconBoxStyle}>
            <img src="/images/clock.png" alt="Clock Icon" style={imgIconStyle} />
          </div>
          <h3 style={cardTitleStyle}>Open Hours</h3>
          <div>
            {openHours.length === 0 ? (
              <p style={{ color: '#999' }}>Loading...</p>
            ) : (
              openHours.map(hour => (
                <p key={hour.day}>
                  {hour.day}:{' '}
                  {hour.open.toLowerCase() === 'closed' || hour.close.toLowerCase() === 'closed' ? (
                    <span style={{ color: 'red' }}>Closed</span>
                  ) : (
                    <span style={{ color: '#00a79d' }}>{hour.open} - {hour.close}</span>
                  )}
                </p>
              ))
            )}
          </div>
        </div>

        {/* Card 3: Location */}
        <div style={cardStyle}>
          <div style={iconBoxStyle}>
            <img src="/images/location-icon.png" alt="Location Icon" style={imgIconStyle} />
          </div>
          <h3 style={cardTitleStyle}>Location</h3>
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.847098255538!2d38.7678886!3d8.986214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84452baac31f%3A0xb63c19bc89ae954!2sDr.%20Senait%20Dental%20Clinic!5e0!3m2!1sen!2set!4v1752062481369!5m2!1sen!2set"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '12px', marginTop: '0.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Testimonials */}
      <Testimonial />
    </div>
  );
};

// Reusable styles
const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '2rem',
  width: '280px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  textAlign: 'center'
};

const iconBoxStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#004c4c',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 1rem'
};

const cardTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: '0.8rem'
};

const cardButtonStyle = {
  marginTop: '1rem',
  padding: '0.6rem 1.2rem',
  borderRadius: '999px',
  backgroundColor: '#00a79d',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer'
};

export default Appointment;
