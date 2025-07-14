import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Define link items with their paths for navigation
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
        padding: '3rem 2rem 1rem',
        fontFamily: 'Segoe UI, sans-serif',
        color: 'white',
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
        {/* Left: Logo + Info + Socials */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <img
              src="/images/Logo-01.png"
              alt="Logo"
              style={{ width: '160px', height: 'auto', marginBottom: '0rem' }}
            />
          </div>
          <p style={{ fontSize: '0.95rem', marginBottom: '1rem', marginTop: '0rem' }}>
            Schedule your consultation today and take the first step towards your perfect smile.
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.4rem' }}>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="Telegram"
            >
              <i className="ri-telegram-line"></i>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="Facebook"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="Instagram"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="Twitter X"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
            {/* New TikTok and YouTube icons */}
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="TikTok"
            >
              <i className="ri-tiktok-line"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              style={iconLink}
              aria-label="YouTube"
            >
              <i className="ri-youtube-line"></i>
            </a>
          </div>
        </div>

        {/* Middle: Quick Links in two columns */}
        <div style={{ flex: 1, minWidth: '220px', alignItems: 'center', marginLeft: '60px' }}>
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
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') navigate(item.path);
                  }}
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
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') navigate(item.path);
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Appointment Button */}
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
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Bottom copyright */}
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

const iconLink = {
  color: 'white',
  textDecoration: 'none',
};

export default Footer;
