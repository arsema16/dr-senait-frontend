import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/components/Services.css';

import generalDentistry from '../assets/service-icons/General dentistry.png';
import oralSurgery from '../assets/service-icons/Oral surgery.png';
import dentalImplant from '../assets/service-icons/Dental Implant.png';
import orthodontics from '../assets/service-icons/Orthodontics.png';
import cosmeticDentistry from '../assets/service-icons/Cosmetic Restorative dentistry.png';
import teethWhitening from '../assets/service-icons/Teeth Whitening.png';
import pediatric from '../assets/service-icons/Pediatric dentistry.png';
import periodontal from '../assets/service-icons/Periodontal Treatment.png';
import endodontics from '../assets/service-icons/Endodontics.png';
import AppointmentBanner from './AppointmentBanner';

const serviceData = [
  { name: "General Dentistry", icon: generalDentistry, description: "Covers routine dental care and maintenance." },
  { name: "Oral Surgery", icon: oralSurgery, description: "Includes extractions and surgical treatments." },
  { name: "Dental Implant", icon: dentalImplant, description: "Permanent replacements for missing teeth." },
  { name: "Orthodontics", icon: orthodontics, description: "Braces and aligners for teeth straightening." },
  { name: "Cosmetic Restorative Dentistry", icon: cosmeticDentistry, description: "Restores smile with cosmetic focus." },
  { name: "Teeth Whitening", icon: teethWhitening, description: "Brighten and whiten your teeth safely." },
  { name: "Pediatric Dentistry", icon: pediatric, description: "Gentle care for children’s dental needs." },
  { name: "Periodontal Treatment", icon: periodontal, description: "Treats gum disease and gum health." },
  { name: "Endodontics", icon: endodontics, description: "Root canals and internal tooth care." }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  const topIcons = serviceData.slice(0, 4);
  const bottomIcons = serviceData.slice(4);

  return (
    <>
      {/* ✅ Show banner image AND AppointmentBanner only if on /services route */}
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

      {/* ✅ Main Services section */}
      <section id="services" className="services-section">
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
              <button
                className="learn-more"
                onClick={() => window.location.href = '#contact'}
              >
                Learn More
              </button>
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
