import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import AppointmentBanner from './AppointmentBanner';

const AboutDoctor = () => {
  const location = useLocation();
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
const isMobile = window.innerWidth <= 768;

  return (
    <>
      {location.pathname === '/about-doctor' && (
        <AppointmentBanner />
      )}

      <section
        ref={sectionRef}
        style={{
          backgroundImage: 'url("/images/tooth-pattern-bg.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          padding: '60px 20px ',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(50px)',
                      gap: '0rem',

        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
    gap: isMobile ? '0rem' : '0rem',
            paddingBottom:'3px'
          }}
        >
          {/* Left: Title + Doctor */}
          <div style={{ flex: '1 1 350px',  }}>
            <h3 style={{
              fontFamily: 'Goldman, sans-serif',
              fontSize: '1.2rem',
              color: '#01bebe',
              marginBottom: '10px',
              marginLeft: '2rem',
              paddingLeft: '0rem',
              textAlign:'left',

            }}>
                ABOUT DR. SENAIT
            </h3>

            <h1 style={{
              fontFamily: 'Federo, sans-serif',
              fontSize: '2.2rem',
              color: '#000',
              marginBottom: '30px',
              lineHeight: '1.3',
              textAlign:'left',
              marginLeft: '2rem',


            }}>
              DEDICATED TO CARE,<br />DEFINED BY EXCELLENCE
            </h1>

            <div style={{ position: 'relative', display: 'inline-block',  justifyContent:'center',     marginBottom: isMobile ? '0rem' : '0px',
                  gap:'0rem'


 }}>
              <img
                src="/images/dr senait.png"
                alt="Dr. Senait"
                style={{
                  width: '100%',
                  maxWidth: '330px',
                  borderRadius: '12px',
    marginBottom: isMobile ? '0rem' : '0px',
    justifyContent:'center',
    marginLeft:'50px'
                }}
              />
              <img
                src="/images/badge.png"
                alt="badge"
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '95%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  marginBottom:'5px',
                  paddingBottom:'3px',
                  
                }}
              />
            </div>
          </div>

          {/* Right: Text */}
          <div style={{ flex: '1 1 300px', fontFamily: 'sans-serif' , paddingTop: isMobile ? '1rem' : '170px',
marginTop: '0',

    marginBottom: isMobile ? '0rem' : '0px'}}>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '5px', color: '#333' ,
}}>
              Dr. Senait Habte is the founder and lead dentist at our clinic. A proud graduate of Tufts University School of Dental Medicine—one of the world’s leading dental schools—she brings global training and high standards to the heart of Addis Ababa.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px', color: '#333' }}>
              After practicing in the U.S., she returned home in 2016 with one goal: to raise the bar for dental care in Ethiopia. Today, her clinic blends advanced technology, international expertise, and a deep commitment to patient wellbeing.
            </p>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              fontStyle: 'italic',
              color: '#00a99d',
              borderLeft: '4px solid #00a99d',
              paddingLeft: '15px'
            }}>
              “We’re committed to helping you achieve a healthy, confident smile through expert care and a patient-first approach.”
              <br />
              <span style={{ display: 'block', fontStyle: 'normal', marginTop: '10px', color: '#222', fontWeight: 'bold' }}>
                Dr. Senait Habte Gebrewold
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDoctor;
