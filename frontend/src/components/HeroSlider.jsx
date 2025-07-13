import React from 'react';

const HeroSlider = ({ currentSlide, setCurrentSlide }) => {
  const slides = [
    {
      title: "YOUR JOURNEY TO A PERFECT SMILE STARTS HERE",
      description: "Experience world-class dental care with our team of expert professionals. Your comfort and smile are our top priorities.",
      cta: "BOOK YOUR APPOINTMENT"
    },
    {
      title: "ADVANCED DENTAL TECHNOLOGIES",
      description: "We use the latest technologies to ensure painless and effective treatments.",
      cta: "OUR SERVICES"
    },
    {
      title: "EMERGENCY DENTAL CARE",
      description: "Immediate attention for dental emergencies. Available 24/7.",
      cta: "CALL NOW"
    }
  ];

  return (
    <section className="hero-slider">
      <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button className="cta-button">{slide.cta}</button>
          </div>
        ))}
      </div>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;