import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/Team.css';

const Team = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Dr. Aster Molla",
      image: "/images/logo.png",
    },
    {
      name: "Dr. Kebede Molla",
      image: "/images/logo.png",
    },
    {
      name: "Dr. Saba Alemu",
      image: "/images/logo.png",
    },
  ];

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
              Our doctors are defined by their strong credentials, extensive experience, and patient-centric approach.
              Each individual brings a level of mastery in his or her respective area, united by our mission of
              reimagining dental care as self-care.
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

        <div className="doctors-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="doctor-card">
              <img src={member.image} alt={member.name} className="doctor-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
