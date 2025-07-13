import React from 'react';
import AboutDoctor from './AboutDoctor';
import OurTeam from './Team';
import Testimonials from './Testimonials';
import AppointmentBanner from './AppointmentBanner';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
      const navigate = useNavigate(); // ✅ Initialize the navigate function

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Banner Image */}
      <div style={{ width: '100%', position: 'relative', textAlign: 'center' }}>
        <img
          src="/images/slide1-bg.jpg"
          alt="About Us Banner"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '3rem',
            color: '#00a79d',
            fontWeight: 'bold',
            backgroundColor: 'rgba(255,255,255,0.8)',
            padding: '0.5rem 1.5rem',
            borderRadius: '1rem',
          }}
        >
          About <span style={{ color: '#003e3d' }}>Us</span>
        </h1>
      </div>

      {/* Appointment Section */}
      <AppointmentBanner />

      {/* About Doctor Section */}
      <AboutDoctor />

      {/* Stats Section */}
      <div
  style={{
    backgroundColor: '#f8f9fc', // page background
    padding: '4rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    textcolor:'black',
  }}
>
  <div
    style={{
      backgroundColor: '#00a79d',
      borderRadius: '5rem',
      padding: '3rem 2rem',
      width: '100%',
      maxWidth: '1000px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '2rem',
      textAlign: 'center',
      color: '#000',
    }}
  >
    {[
      { text: '20k+ Happy Clients', icon: '/images/Happy Client.png' },
      { text: '10+ Years Experience', icon: '/images/10+ Years.png' },
      { text: '20+ Staffs', icon: '/images/Staffs.png' },
      { text: '50+ Weekly Appointments', icon: '/images/appointment.png' },
    ].map((item, i) => (
      <div key={i}>
        <img
          src={item.icon}
          alt="stat icon"
          style={{
            width: '60px',
            height: '60px',
            marginBottom: '1rem',
            objectFit: 'contain',
          }}
        />
        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.text}</h4>
      </div>
    ))}
  </div>
</div>

      {/* Our Team Section */}
      <OurTeam />

      {/* Consultation Banner */}
      <div
        style={{
  backgroundImage: 'url(/images/bg.png)',
  backgroundSize: '60%', // show smaller, full image
  backgroundPosition: ' center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  height: '250px',
  marginBottom: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
}}

      >
        <div
          style={{
            padding: '2rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            height: '100%',
          }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            NEED A CONSULTATION
          </h1>
          <button
            style={{
              backgroundColor: '#023d3a',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '999px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              maxWidth: '200px',
              margin: '0 auto',
            }}
          onClick={() => {
    console.log('Button clicked');
    navigate('/Appointment');
  }}>

            Make Appointment
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default AboutUs;
