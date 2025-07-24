import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';  // Import useLocation
import '../styles/components/AboutDoctor.css';
import AppointmentBanner from './AppointmentBanner'; // Make sure this import is here

const AboutDoctor = () => {
  const location = useLocation();  // Get current route
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Show banner image and AppointmentBanner ONLY if on /about-doctor page */}
      {location.pathname === '/about-doctor' && (
        <>
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
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#004c4c'
            }}>
            About Dr. Senait
            </h2>
          </div>
          <AppointmentBanner />
        </>
      )}

      <section
        ref={sectionRef}
        id="about"
        className={`about-section ${sectionInView ? 'visible' : ''}`}
        style={{
          backgroundImage: "url('/images/tooth-pattern-bg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="about-container">
          {/* Left: Image */}
          <div ref={imgRef} className={`doctor-image ${imgInView ? 'fade-in-left' : ''}`}>
            <div className="image-wrapper">
<div style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
              <img src="/images/dr-senait.png" alt="dr senait" style={{
                height: '100%',
                width: '110%',
                objectFit: 'cover',
                objectPosition:'top',
              }} />
            </div>              <img src="/images/badge.png" alt="Badge" className="image-badge" />
            </div>
          </div>

          {/* Right: Text */}
          <div ref={textRef} className={`about-content ${textInView ? 'fade-in-right' : ''}`}>
            <h1>
              About <span className="highlight">Dr. Senait</span>
            </h1>
            <p className="established">
              <strong>Established in 2016,</strong> Dr. Senait Dental Clinic provides high-quality dental care in Addis Ababa. 
              Led by Dr. Senait Habte, a U.S.-trained dentist with a Doctor of Dental Medicine from Tufts University 
              and a Bachelor of Science from PURDUE University, the clinic combines international standards with local expertise.
            </p>

            <div className="icon-highlights">
              <div className="icon-highlight">
                <img src="/images/icon 2.png" alt="check" className="badge-icon" />
                <div>
                  <strong>Expert Team &</strong><br />
                  <span className="light-text">Advanced Equipment</span>
                </div>
              </div>

              <div className="icon-highlight">
                <img src="/images/icon 2.png" alt="check" className="badge-icon" />
                <div>
                  <strong>15+ Years</strong><br />
                  <span className="light-text">Experience</span>
                </div>
              </div>
            </div>

            <div className="vertical-line" />

            <p className="description">
              Our skilled team of dental professionals offers a full range of services from general and cosmetic dentistry 
              to orthodontics and oral surgery using the latest technology in a comfortable, modern setting.
            </p>
            <p className="mission">
              We're committed to helping you achieve a healthy, confident smile through expert care and a patient-first approach.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDoctor;
