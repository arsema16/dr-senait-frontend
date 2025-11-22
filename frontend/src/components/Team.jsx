import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/Team.css';

const Team = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section
      className="doctors-section"
      style={{
        backgroundImage: "url('/images/tooth-pattern-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '120px 20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="doctors-container">
        <div className="doctors-text-wrapper">
          <div className="doctors-left-text">
            <h5 className="doctors-subheading">BETTER TOGETHER</h5>
            <h2 className="doctors-title">OUR Team</h2>
            <p className="doctors-description">
              Our team includes oral and maxillofacial surgeons, implantologists, orthodontists, periodontists, cosmetic dentists, and general dentists—a diverse group of specialists working in perfect synergy.
            </p>
            <p className="doctors-description">
              Each doctor is defined by strong credentials, extensive experience, and a deeply patient-centric philosophy. Together, they bring exceptional mastery in their respective fields, united by one mission: to reimagine dental care as an elevated form of self-care.
            </p>
          </div>

          {/* Only show this if we're on the Home page */}
          {location.pathname === '/' && (
            <div className="doctors-link-wrapper">
              <p
                className="doctors-link"
                onClick={() => navigate('/team')}
                style={{ cursor: 'pointer' }}
              >
                MEET OUR TEAM →
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
