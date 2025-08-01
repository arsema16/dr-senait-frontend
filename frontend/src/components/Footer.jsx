import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const mobileStyles = `
  @media (max-width: 768px) {
    .footer-logo-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
    }

    .footer-logo-container p {
      max-width: 100%;
      margin-top: 0.5rem;
    }

    .footer-bottom-image {
      position: static !important;
      margin-top: 2rem;
      align-self: flex-start;
    }

    footer {
      text-align: left !important;
    }

    footer > div {
      align-items: flex-start !important;
    }

    .quick-links-container {
      flex-direction: column !important;
      gap: 1rem !important;
      align-items: flex-start !important;
    }

    .quick-links-column {
      width: 100%;
    }
  }
`;


  const quickLinksLeft = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Team', path: '/team' },
    { label: 'Services', path: '/services' },
  ];

  const quickLinksRight = [
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog/News', path: '/blog' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <style>{mobileStyles}</style>

      <footer
        style={{
          backgroundImage: 'url("/images/footer-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '3rem 2rem 1rem',
          fontFamily: 'Segoe UI, sans-serif',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            margin: '0 auto',
            gap: '2rem',
          }}
        >
          {/* Left: Logo + Info */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <div className="footer-logo-container">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                }}
              >
                <h1
                  style={{
                    marginBottom: '0.5rem',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    fontFamily: '"Federo", sans-serif',
                  }}
                >
                  SMILE FOR ALL
                </h1>
                <img
                  src="/images/Logo-01.png"
                  alt="Logo"
                  style={{ width: '160px', height: 'auto' }}
                />
              </div>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem', marginTop: '0rem' }}>
                Schedule your consultation today and take the first step towards your perfect smile.
              </p>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                Your journey to confident, healthy smiles starts here.
              </p>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div style={{ flex: 1, minWidth: '220px', alignItems: 'flex-start', marginLeft: '6px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Link</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                {quickLinksLeft.map((item, i) => (
                  <div
                    key={i}
                    style={{ marginBottom: '0.5rem', cursor: 'pointer' }}
                    onClick={() => navigate(item.path)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && navigate(item.path)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
              <div>
                {quickLinksRight.map((item, i) => (
                  <div
                    key={i}
                    style={{ marginBottom: '0.5rem', cursor: 'pointer' }}
                    onClick={() => navigate(item.path)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && navigate(item.path)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Book Appointment Button */}
          <div style={{ flex: 1, minWidth: '240px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Book Appointment</h4>
            <button
              onClick={() => navigate('/appointment')}
              style={{
                backgroundColor: 'white',
                color: '#00a79d',
                padding: '0.7rem 1rem',
                borderRadius: '999px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                width: '100%',
                cursor: 'pointer',
                marginBottom: '1.5rem',
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.4rem' }}>
          {[
            ['https://t.me/', 'ri-telegram-line'],
            ['https://facebook.com/', 'ri-facebook-fill'],
            ['https://instagram.com/', 'ri-instagram-line'],
            ['https://x.com/', 'ri-twitter-x-line'],
            ['https://www.tiktok.com/', 'ri-tiktok-line'],
            ['https://www.youtube.com/', 'ri-youtube-line'],
          ].map(([link, icon], i) => (
            <a key={i} href={link} target="_blank" rel="noreferrer" style={iconLink}>
              <i className={icon}></i>
            </a>
          ))}
        </div>

        {/* Book Appointment Image at Bottom Right Inside Footer */}
        <div
          className="footer-bottom-image"
          onClick={() => navigate('/appointment')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate('/appointment')}
          aria-label="Book Appointment"
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '150px',
            cursor: 'pointer',
            zIndex: 5,
            boxShadow: '0 8px 20px rgba(0, 167, 157, 0.25)',
            borderRadius: '12px',
          }}
        >
          
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.3)',
            marginTop: '2rem',
            paddingTop: '1rem',
            textAlign: 'center',
            fontSize: '0.9rem',
          }}
        >
          © 2025 Dr Senait • All Rights Reserved
        </div>
      </footer>
    </>
  );
};

const iconLink = {
  color: 'white',
  textDecoration: 'none',
};

export default Footer;
