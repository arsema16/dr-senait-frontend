import React from 'react';
import '../styles/components/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Aster Molla",
      image: "https://www.bostondental.com/wp-content/uploads/2023/04/Boston-Dental-Aesthetics-Seaport-Downtown-Crossing-Government-Center-Home-Doctor-Kelly-Koch-2-1.jpg",
    },
    {
      name: "Dr. Kebede Molla",
      image: "https://www.bostondental.com/wp-content/uploads/2023/04/Boston-Dental-Aesthetics-Seaport-Downtown-Crossing-Government-Center-Home-Doctor-Maged-el-Malecki.jpg",
    },
    {
      name: "Dr. Saba Alemu",
      image: "https://www.bostondental.com/wp-content/uploads/2024/08/Boston-Dental-Aesthetics-Seaport-Downtown-Crossing-Government-Center-Home-Doctors-Home.jpg",
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
            <h2 className="doctors-title">OUR DOCTORS</h2>
            <p className="doctors-description">
              Our doctors are defined by their strong credentials, extensive experience, and patient-centric approach.
              Each individual brings a level of mastery in his or her respective area, united by our mission of
              reimagining dental care as self-care.
            </p>
          </div>
          <div className="doctors-link-wrapper">
            <p className="doctors-link">MEET OUR DOCTORS →</p>
          </div>
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
