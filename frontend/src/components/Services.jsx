import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../styles/components/Services.css';

import generalDentistry from '../assets/service-icons/General dentistry.png';
import oralSurgery from '../assets/service-icons/Oral surgery.png';
import dentalImplant from '../assets/service-icons/Dental Implant.png';
import orthodontics from '../assets/service-icons/Orthodontics.png';
import cosmeticDentistry from '../assets/service-icons/Cosmetic Restorative dentistry.png';
import teethwhitening from '../assets/service-icons/Teeth Whitening.png';
import pediatric from '../assets/service-icons/Pediatric dentistry.png';
import periodontal from '../assets/service-icons/Periodontal Treatment.png';
import endodontics from '../assets/service-icons/Endodontics.png';
import AppointmentBanner from './AppointmentBanner';

const serviceData = [
  { name: "General Dentistry", icon: generalDentistry, description: "Includes comprehensive general dentistry, family primary care, & emergency dental care. General practitioners provide comprehensive examination & treatment planning." },
  { name: "Oral Surgery", icon: oralSurgery, description: "Oral surgery goes beyond removal of teeth. Additional oral surgery procedures include: implant placement, bone grafting, and impacted wisdom teeth removal." },
  { name: "Prosthodontics/Prosthetic Dentistry", icon: dentalImplant, description: "Pertains to the diagnosis and treatment planning, of missing, broken or deficient teeth using biocompatible substitutes. Crowns, dentures and bridges are typically the restorations used to achieve these results." },
  { name: "Orthodontics", icon: orthodontics, description: "Brings teeth, lips, and jaws into proper alignment through dental braces and other orthodontic treatments." },
  { name: "Cosmetic Restorative Dentistry", icon: cosmeticDentistry, description: "Includes procedures such as composite resin bonding, teeth bleaching and whitening, porcelain veneers, natural tooth colored fillings, and dental implants." },
  { name: "Dental Hygiene", icon: teethwhitening, description: "Includes routine scale and polishing of teeth as well as periodontal root debridement procedures under local anesthesia, placing pit and fissure sealants, and performing teeth bleaching (whitening)." },
  { name: "Pediatric Dentistry", icon: pediatric, description: "Focuses on the oral health of young people. The Clinic has well trained dentists who are able meet the needs of infants, children and adolescents, including persons with special health care needs." },
  { name: "Periodontal Treatment", icon: periodontal, description: "The treatment required to control periodontal disease involves much more than just a teeth cleaning." },
  { name: "Endodontics", icon: endodontics, description: "The aim of the treatment is to remove all infection from the root canal. The root is then cleaned and filled to prevent any further infection." }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });

  const topIcons = serviceData.slice(0, 4);
  const bottomIcons = serviceData.slice(4);

  return (
    <>
      {location.pathname === '/services' && (
        <>
          <div
            style={{
              backgroundImage: 'url("/images/slide1-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              padding: '100px 20px 60px',
              textAlign: 'center',
            }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#004c4c'
            }}>
              Our Services
            </h2>
          </div>
          <AppointmentBanner />
        </>
      )}

      <section
        id="services"
        ref={sectionRef}
        className={`services-section ${inView ? 'fade-slide-in' : ''}`}
      >
        <div className="services-container">
          <div className="services-row">
            <div className="services-text">
              <h2 className="services-title">
                Our <span>Services</span>
              </h2>
              <p className="services-intro">
                We offer a full range of dental care solutions<br />
                to meet your needs:
              </p>
              {location.pathname !== '/services' && (
                <button
                  className="learn-more"
                  onClick={() => navigate('/services')}
                >
                  Learn More
                </button>
              )}
            </div>

            <div className="services-top-icons">
              {topIcons.map((service) => (
                <div
                  key={service.name}
                  className="icon-item clickable"
                  onClick={() => setSelectedService(service)}
                >
                  <img src={service.icon} alt={service.name} className="service-icon" />
                  <span className="icon-label">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="services-grid">
            {bottomIcons.map((service) => (
              <div
                key={service.name}
                className="icon-item clickable"
                onClick={() => setSelectedService(service)}
              >
                <img src={service.icon} alt={service.name} className="service-icon" />
                <span className="icon-label">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedService(null)}>×</button>
              <img src={selectedService.icon} alt={selectedService.name} className="modal-icon" />
              <h2>{selectedService.name}</h2>
              <p>{selectedService.description}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
