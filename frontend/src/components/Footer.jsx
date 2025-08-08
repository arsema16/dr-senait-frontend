import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

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
    <footer
      style={{
        backgroundImage: 'url("/images/footer-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#00a79d',
        padding: '3rem 2rem 2rem',
        color: 'white',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '0rem',
          maxWidth: '1200px',
        }}
      >
        {/* Column 1: Logo + Description */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h1
            style={{
              fontFamily: '"Federo", sans-serif',
              fontWeight: 'bold',
              fontSize: '2rem',
              marginBottom: '0.5rem',
            }}
          >
            SMILE FOR ALL
          </h1>
          <img
            src="/images/Logo-01.png"
            alt="Logo"
            style={{ width: '150px', height: 'auto', marginBottom: '1rem' }}
          />
          <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
            Schedule your consultation today and take the first step <br /> towards your perfect smile.
          </p>
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
            Your journey to confident, healthy smiles starts here.
          </p>
        </div>

        {/* Column 2: Nav Links + Appointment Button */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '1rem',  marginTop:'1rem'}}>Quick Link</h4>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div>
              {quickLinksLeft.map((item, i) => (
                <div
                  key={i}
                  style={{ marginBottom: '0.5rem', cursor: 'pointer' }}
                  onClick={() => navigate(item.path)}
                  role="button"
                  tabIndex={0}
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
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Book Appointment Button */}
          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={() => navigate('/appointment')}
              style={{
                backgroundColor: 'white',
                color: '#00a79d',
                border: 'none',
                borderRadius: '999px',
                padding: '0.8rem 1.5rem',
                fontWeight: 'bold',
                fontSize: '1rem',
                width: '70%',
                cursor: 'pointer',
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          gap: '1.5rem',
          fontSize: '1.4rem',
          marginTop: '2rem',
        }}
      >
        {[
          ['https://t.me/', 'ri-telegram-line'],
          ['https://facebook.com/', 'ri-facebook-fill'],
          ['https://instagram.com/', 'ri-instagram-line'],
          ['https://x.com/', 'ri-twitter-x-line'],
          ['https://www.tiktok.com/', 'ri-tiktok-line'],
          ['https://www.youtube.com/', 'ri-youtube-line'],
        ].map(([link, icon], i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <i className={icon}></i>
          </a>
        ))}
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
  );
};

export default Footer;
