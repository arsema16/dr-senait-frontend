import React from 'react';
import '../styles/components/Team.css';

const Team = ({ onLearnMore }) => {
  const teamMembers = [
    { name: "Kebede Molla", position: "Dental Specialist", image: "/images/kebede.jpg" },
    { name: "Aster Molla", position: "Dental Specialist", image: "/images/aster.jpg" },
    { name: "Kebede Molla", position: "Dental Specialist", image: "/images/kebede.jpg" },
    { name: "Aster Molla", position: "Dental Specialist", image: "/images/aster.jpg" }
  ];

  return (
    <section
      id="team"
      className="team-section"
      style={{
        backgroundImage: "url('/images/tooth-pattern-bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat"
      }}
    >
      <h1 className="team-title">Our Team</h1>
      <p className="team-subtitle">Experienced Dentists</p>
      <div className="team-divider"></div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
            <h2 className="team-name">{member.name}</h2>
            <p className="team-position">{member.position}</p>
            <button className="learn-more" onClick={onLearnMore}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
