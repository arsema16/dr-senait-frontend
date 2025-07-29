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
  const [imageClass, setImageClass] = useState('image-enter');

  useEffect(() => {
    setImageClass('image-exit');
    const timeout = setTimeout(() => {
      setImageClass('image-enter');
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev < 2 ? prev + 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      bg: '/images/slide1-bg.jpg',
      titleLines: ['YOUR JOURNEY TO', 'A PERFECT SMILE', 'STARTS HERE.'],
      description:
        'Experience world-class dental care with our team of expert professionals. Your comfort and smile are our top priorities.',
      image: womanSmiling,
    },
    {
      bg: '/images/slide2-bg.jpg',
      titleLines: ['International Expertise', 'Led by Dr. Senait Habte.'],
      description:
        'A USA.-trained dentist with a Doctor of Dental Medicine from Tufts University and a Bachelor of Science from PURDUE University.',
      image: '/images/dr-senait.png',
    },
    {
      bg: '/images/slide1-bg.jpg',
      titleLines: ['PAIN & DISCOMFORT?', 'SAME-DAY EMERGENCY', 'APPOINTMENTS AVAILABLE!'],
      description: '',
      image: '/images/Question mark.png',
    },
  ];

  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        {/* Left Text Section */}
        <div
          style={{
            flexBasis: '60%',
            padding: '60px 80px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            userSelect: 'none',
            textTransform: 'uppercase',
          }}
        >
          {slides[currentSlide].titleLines.map((line, i) => (
            <h1
              key={i}
              style={{
                margin: 0,
                fontSize: i === 0 ? '2.4rem' : '3.5rem',
                fontWeight: 900,
                color: i === 0 ? '#fff' : '#00c8c0',
                lineHeight: 1.1,
                filter: 'drop-shadow(0 0 5px rgba(0, 200, 192, 0.8))',
                letterSpacing: '2px',
                userSelect: 'none',
              }}
            >
              {line}
            </h1>
          ))}
          {slides[currentSlide].description && (
            <p
              style={{
                marginTop: '1rem',
                fontSize: '1.1rem',
                fontWeight: 300,
                maxWidth: '90%',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.85)',
                fontStyle: 'italic',
              }}
            >
              {slides[currentSlide].description}
            </p>
          )}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
            <button
              style={{
                backgroundColor: '#00c8c0',
                border: 'none',
                color: '#fff',
                padding: '0.8rem 1.6rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '30px',
                boxShadow: '0 4px 12px rgba(0, 200, 192, 0.6)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00a89e')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00c8c0')}
            >
              call
            </button>

            <button
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid #00c8c0',
                color: '#00c8c0',
                padding: '0.8rem 1.6rem',
                fontSize: '1rem',
                borderRadius: '30px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                fontWeight: 600,
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            >
              open hour
            </button>
          </div>
        </div>

        {/* Right Image Section — no container, just image and glow */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            paddingRight: '4rem',
            pointerEvents: 'none', // so glow doesn't block clicks
          }}
        >
          {/* Glow/pulse behind image */}
          <div
            style={{
              position: 'absolute',
              width: 420,
              height: 420,
              borderRadius: '50%',
              background:
                'conic-gradient(from 0deg, #00ffd5, #00aaff, #ff00c3, #00ffd5)',
              animation: 'rotateAura 12s linear infinite, pulseGlow 5s ease-in-out infinite',
              filter: 'blur(70px)',
              zIndex: 0,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />

          {/* Floating image with no wrapper */}
          <img
            src={slides[currentSlide].image}
            alt="Slide visual"
            className={imageClass}
            style={{
              maxWidth: 480,
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '32px',
              boxShadow:
                '0 10px 30px rgba(0,0,0,0.3), 0 0 90px rgba(0,200,192,0.5)',
              filter: 'brightness(1.05) saturate(1.15)',
              transition: 'transform 0.8s ease, opacity 0.8s ease',
              transform:
                imageClass === 'image-enter'
                  ? 'translateX(0) scale(1)'
                  : 'translateX(80px) scale(0.95)',
              opacity: imageClass === 'image-enter' ? 1 : 0,
              position: 'relative',
              zIndex: 1,
            }}
          />
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

      {/* Animations keyframes */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.65;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        @keyframes rotateAura {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
