import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/components/AboutDoctor.css';

const AboutDoctor = () => {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
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
            <img src="/images/dr-senait.png" alt="Dr. Senait" />
            <img src="/images/badge.png" alt="Badge" className="image-badge" />
          </div>
        </div>

        {/* Right: Text */}
        <div ref={textRef} className={`about-content ${textInView ? 'fade-in-right' : ''}`}>
          <h1>
            About <span className="highlight">Dr Senait</span>
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
  );
};

export default AboutDoctor;
