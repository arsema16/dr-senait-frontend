import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Consultation.css';

const checklistItems = [
  "You're constantly worried about tooth pain, sensitivity, or discomfort.",
  "You're tired of putting off dental visits, knowing the problem is only getting worse.",
  "If this doesn't get fixed soon, you're afraid it could lead to bigger (and more expensive) issues.",
  "You feel anxious about visiting the dentist, worried about pain or bad past experiences.",
  "You're frustrated, avoiding smiling in photos, social events, or even conversations.",
  "Your dental issues are starting to affect your confidence, eating habits, and overall health."
];

const Consultation = () => {
  const navigate = useNavigate();

  return (
    <section id="consultation" className="consultation-section" style={{        backgroundImage: 'url("/images/background.jpg")',
}}>
      {/* Heading Section (Left Aligned) */}
      <div style={{ marginBottom: '2rem', padding: '0 1rem' }}>
        <h2
          style={{
            textAlign: 'left',
            fontWeight: '500',
            fontSize: '2.8rem',
            lineHeight: '1.2',
            maxWidth: '700px',
                                fontFamily: '"Federo", sans-serif',

          }}
        >
          Is dental pain or anxiety <br />
          <span style={{ color: '#00a79d' }}>holding you back?</span>
        </h2>
      </div>

      {/* Checklist Section */}
      <div className="consultation-content"style={{                    fontFamily: '"Federo", sans-serif',
}}>
        <div className="checklist-grid">
          {checklistItems.map((item, index) => (
            <div key={index} className="checklist-item">
              <img
                src="/images/icon.png"
                alt="Checked"
                className="check-icon"
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;
