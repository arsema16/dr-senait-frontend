import React from 'react';
import '../styles/components/AdvancedCare.css';
import clinicImage from '../assets/dental.png';

const AdvancedCare = () => {
  const features = [
    {
      title: "State-of-the-Art Technology",
      description: "Digital imaging, laser treatment, and modern equipment"
    },
    {
      title: "Comfortable Environment",
      description: "A soothing, clean, and welcoming space"
    },
    {
      title: "Experienced Dental Team",
      description: "Skilled professionals trained locally and internationally"
    },
    {
      title: "Personalized Care Plans",
      description: "Every patient gets a tailored treatment plan"
    }
  ];

  return (
    <section className="advanced-care-section">
      <div className="advanced-care-container">
        <h1 className="top-title">
          Transforming Smiles <br />
          <span className="highlight">with Advanced Care</span>
        </h1>

        <div className="content-wrapper">
          <div className="image-container">
            <img
              src={clinicImage}
              alt="Dental Clinic"
            />
          </div>

          <div className="text-content">
            <p className="intro-text">
              With over decades of excellence in dentistry, our clinic is built on:
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <h3>
                    <span className="bullet">●</span>
                    <span className="feature-title">{feature.title}</span>
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedCare;
