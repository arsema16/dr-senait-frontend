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
    <section id="consultation" className="consultation-section">
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url(/images/Bg.png)',
          backgroundSize: '65%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          height: '250px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '20%',
        }}
      >
        <div
          style={{
            color: 'white',
            textAlign: 'left',
          }}
        >
          <h1
  style={{
    fontSize: '2.6rem',
    fontWeight: '2000',
    marginBottom: '1rem',
    fontFamily: "'Oswald', sans-serif", 
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',

  }}
>
  NEED A CONSULTATION
</h1>

          <button
            style={{
              backgroundColor: '#023d3a',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '999px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/Appointment')}
          >
            Make Appointment
          </button>
        </div>
      </div>

      {/* Checklist Section */}
      <div className="consultation-content">
        <h2
  style={{
    fontFamily: "'Oswald', sans-serif",
    textAlign: 'left',
    fontWeight: '500',
    fontSize: '2.8rem',
    marginLeft: '13%', // ✅ Pushes it slightly from the left edge
  }}
>
  Is dental pain or anxiety <span style={{ color: '#00a79d' }}>holding you back?</span>
</h2>

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
