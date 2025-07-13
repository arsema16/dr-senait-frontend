import React from 'react';

const TeamDetail = ({ onBack }) => {
  return (
    <section className="team-detail-section">
      <h2>Meet Our Dental Professionals</h2>
      <p>
        At Dr. Senait Dental Clinic, our team of specialists brings years of international and local experience
        to ensure you receive the highest quality of care.
      </p>
      <ul>
        <li>👩‍⚕️ Dr. Kebede Molla – Dental Specialist with 15+ years of experience.</li>
        <li>👨‍⚕️ Dr. Aster Molla – Cosmetic and Restorative Dentistry Expert.</li>
        {/* Add more as needed */}
      </ul>
      <button onClick={onBack} className="back-button">← Back to Home</button>
    </section>
  );
};

export default TeamDetail;
