import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    margin: '0.5rem 1rem',
    cursor: 'pointer',
    position: 'relative',
    color: '#333',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    textAlign: isMobile ? 'center' : 'left',
  };

  const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: 'white',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '0.5rem 0',
  zIndex: 1000,
  minWidth: '200px',
  animation: 'fadeIn 0.3s ease-in-out',
};


  return (
    <nav
      style={{
        width: '100%',
        padding: '1rem 2rem',
        backgroundColor: 'transparent',
        fontFamily: 'Segoe UI, sans-serif',
    position: 'fixed', // ✅ use fixed for true stickiness
        top: 0,
        zIndex: 9999,
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        transition: 'backdrop-filter 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div style={{ position: 'relative', height: '80px' }}>
        {/* Logo */}
        <div style={{ position: 'absolute', left: '0rem', top: '50%', transform: 'translateY(-50%)' }}>
          <img
  src="/images/Logo-02.png"
  alt="logo"
  style={{
    height: isMobile ? '80px' : '150px',
    width: '100%',
    maxWidth: isMobile ? '160px' : 'none',
    cursor: 'pointer',
  }}
  onClick={() => navigate('/')}
/>

        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', height: '80px',   marginLeft: '160px' // ✅ adjust based on your logo size (try 150–180px)
 }}>
            <div style={{navLinkStyle,}} onClick={() => navigate('/')}>Home</div>
            <div style={navLinkStyle} onClick={() => navigate('/services')}>Services</div>
            <div style={navLinkStyle} onClick={() => navigate('/contact')}>Contact Us</div>

            {/* About Us Dropdown */}
 {/* About Us Dropdown */}
<div
  style={{ position: 'relative' }}
  onMouseEnter={() => setHoveredMenu('about')}
  onMouseLeave={() => setHoveredMenu(null)}
>
  <div
    onClick={() => navigate('/about-us')}
    style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
  >
    About Us <span style={{ fontSize: '0.8rem' }}>▼</span>
  </div>

  {hoveredMenu === 'about' && (
    <div style={dropdownStyle}>
      {[
        { label: 'About Doctor Senait', path: '/about-doctor' },
        { label: 'Our Team', path: '/team' },
        { label: 'Testimonials', path: '/testimonials' },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            padding: '0.6rem 1.2rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            fontWeight: 500,
            color: '#333',
          }}
          onClick={() => navigate(item.path)}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0fdfa')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {item.label}
        </div>
      ))}
    </div>
  )}
</div>

{/* Pages Dropdown */}
<div
  style={{ position: 'relative' }}
  onMouseEnter={() => setHoveredMenu('pages')}
  onMouseLeave={() => setHoveredMenu(null)}
>
  <div
    style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
  >
    Pages <span style={{ fontSize: '0.8rem' }}>▼</span>
  </div>

  {hoveredMenu === 'pages' && (
    <div style={dropdownStyle}>
      {[
        { label: 'FAQs', path: '/faq' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Blog/News', path: '/blog' },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            padding: '0.6rem 1.2rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            fontWeight: 500,
            color: '#333',
          }}
          onClick={() => navigate(item.path)}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0fdfa')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {item.label}
        </div>
      ))}
    </div>
  )}
</div>


            <div
              onClick={() => navigate('/Appointment')}
              style={{
                backgroundColor: '#00a79d',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              Book Appointment
            </div>
          </div>
        )}

        {/* Hamburger Icon - Mobile */}
        {isMobile && (
          <div
            style={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div style={{ width: '25px', height: '3px', backgroundColor: '#333', marginBottom: '5px' }} />
            <div style={{ width: '25px', height: '3px', backgroundColor: '#333', marginBottom: '5px' }} />
            <div style={{ width: '25px', height: '3px', backgroundColor: '#333' }} />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
            zIndex: 1000,
          }}
        >
          <div style={navLinkStyle} onClick={() => navigate('/')}>Home</div>
          <div style={navLinkStyle} onClick={() => navigate('/services')}>Services</div>
          <div style={navLinkStyle} onClick={() => navigate('/contact')}>Contact Us</div>
                    <div style={navLinkStyle} onClick={() => navigate('/about-us')}>About Us</div>
          <div style={navLinkStyle} onClick={() => navigate('/Appointment')}>Book Appointment</div>
          <div style={navLinkStyle} onClick={() => navigate('/team')}>Our Team</div>
          <div style={navLinkStyle} onClick={() => navigate('/faq')}>FAQs</div>
          <div style={navLinkStyle} onClick={() => navigate('/blog')}>Blog/News</div>
              <div style={navLinkStyle} onClick={() => navigate('/gallery')}>Gallery</div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
