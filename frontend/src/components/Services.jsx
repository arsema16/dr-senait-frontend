import React, { useState } from 'react';
import '../styles/components/Services.css';

const serviceData = [
  {
    name: "Preventative",
    image: "https://www.bostondental.com/wp-content/uploads/2022/11/pic-self-1.jpg",
    description: "What you most readily think of: routine cleanings, x-rays, fluoride treatments and night guard fittings.",
  },
  {
    name: "Orthodontics",
    image: "https://www.bostondental.com/wp-content/uploads/2022/11/pic-self-2.jpg",
    description: "Specialized treatments focused on correcting dental irregularities, including braces and Invisalign.",
  },
  {
    name: "Aesthetics",
    image: "https://www.bostondental.com/wp-content/uploads/2022/11/pic-self-3.jpg",
    description: "Cosmetic services to boost your confidence: whitening, veneers, Invisalign, and more.",
  },
  {
    name: "Oral Surgery",
    image: "https://www.bostondental.com/wp-content/uploads/2022/12/Ally-Boston-Dental.gif",
    description: "Beyond wisdom teeth—bone grafting, implants, 3D imaging, and more.",
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
