import React, { useState } from 'react';
import '../styles/components/Services.css';

const serviceData = [
  {
    name: "Preventive & Pediatric Care",
    image: "/images/pic-self-1.jpg",
    description: "Protect your smile with routine cleanings, dental exams, x-rays, gum care, and personalized treatments for children. Prevention is the foundation of lifelong oral health.",
  },
  {
    name: "Orthodontics",
    image: "/images/pic-self-2.jpg",
    description: "We offer customized orthodontic solutions such as braces and aligners to correct alignment issues and improve long-term oral function and aesthetics.",
  },
  {
    name: "Aesthetics",
    image: "/images/pic-self-3.jpg",
    description: "From classic to modern cosmetic treatments, we help you achieve a confident smile with teeth whitening, veneers, bonding, and restorative options like crowns and bridges.",
  },
  {
    name: "Oral Surgery & Implants",
    image: "/images/Ally-Boston-Dental.jpg",
    description: "Our advanced surgical care includes tooth extractions, root canal therapy, dental implants, bone grafting, and more — all supported by modern imaging and expert technique.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="realistic-services-section">
      <div className="services-two-column">
        {/* Left column */}
        <div className="left-column">
          <div className="text-block">
            <p className="section-label">OUR SERVICES</p>
            <h2 className="main-title">DENTAL CARE IS<br />SELF-CARE</h2>
          </div>
          <div className="service-block" onClick={() => setSelectedService(serviceData[0])}>
            <img src={serviceData[0].image} alt={serviceData[0].name} />
            <h3>{serviceData[0].name}</h3>
            <p>{serviceData[0].description}</p>
          </div>
          <div className="service-block" onClick={() => setSelectedService(serviceData[2])}>
            <img src={serviceData[2].image} alt={serviceData[2].name} />
            <h3>{serviceData[2].name}</h3>
            <p>{serviceData[2].description}</p>
          </div>
        </div>

        {/* Right column */}
        <div className="right-column">
          <div className="service-block" onClick={() => setSelectedService(serviceData[1])}>
            <img src={serviceData[1].image} alt={serviceData[1].name} />
            <h3>{serviceData[1].name}</h3>
            <p>{serviceData[1].description}</p>
          </div>
          <div className="service-block" onClick={() => setSelectedService(serviceData[3])}>
            <img src={serviceData[3].image} alt={serviceData[3].name} />
            <h3>{serviceData[3].name}</h3>
            <p>{serviceData[3].description}</p>
          </div>
        </div>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedService(null)}>×</button>
            <img src={selectedService.image} alt={selectedService.name} className="modal-icon" />
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
