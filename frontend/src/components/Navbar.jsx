import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navLinkStyle = {
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: '#000',
    whiteSpace: 'nowrap',
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
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        style={{
          width: '100%',
          padding: '1rem 2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          position: 'fixed',
          top: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Segoe UI, sans-serif',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        {/* Left Nav Links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', }}>
            <div style={navLinkStyle} onClick={() => navigate('/')}>Home</div>
            <div style={navLinkStyle} onClick={() => navigate('/services')}>Dental</div>

            {/* About Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredMenu('about')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
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
          </div>
        )}

        {/* Centered Logo */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <img
            src="/images/text logo-02.png"
            alt="Boston Dental"
            style={{ height: isMobile ? '50px' : '60px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </div>

        {/* Right Links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            {/* Pages Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredMenu('pages')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
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

            <div style={navLinkStyle} onClick={() => navigate('/contact')}>Contact</div>

            <div
              onClick={() => navigate('/Appointment')}
              style={{
                backgroundColor: '#2f3c34',
                color: '#fff',
                fontSize: '0.65rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '999px',
                fontWeight: '700',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Book
            </div>

            <i className="ri-phone-line" style={{ fontSize: '1.6rem', color: '#00a79d', cursor: 'pointer' }} />
          </div>
        )}

        {/* Hamburger for mobile */}
        {isMobile && (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
    <IoMenu
      style={{ fontSize: '1.8rem', cursor: 'pointer', color: '#000' }}
      onClick={() => setMenuOpen(true)}
    />
    <i className="ri-phone-line" style={{ fontSize: '1.6rem', color: '#0adaccff', cursor: 'pointer' }} />
  </div>
)}

      </nav>
{/* MOBILE OVERLAY MENU */}
{isMobile && (menuOpen || isClosing) && (
  <div
    style={{
      ...overlayBaseStyle,
      opacity: menuOpen && !isClosing ? 1 : 0,
      transform: menuOpen && !isClosing ? 'translateY(0)' : 'translateY(-20px)',
      pointerEvents: menuOpen && !isClosing ? 'auto' : 'none',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
    }}
  >

    {/* Close + Logo + Phone */}
    <div
      style={{
        position: 'absolute',
        top: '1rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1.5rem',
      }}
    >
      <IoClose
  style={{ fontSize: '2rem', color: '#fff', cursor: 'pointer' }}
  onClick={() => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 400);
  }}
/>

      <img
        src="/images/text logo-01.png"
        alt="Logo"
        style={{ height: '50px', cursor: 'pointer' }}
        onClick={() => {
          navigate('/');
setIsClosing(true);
setTimeout(() => {
  setMenuOpen(false);
  setIsClosing(false);
}, 300); // match with transition duration
        }}
      />
      <i className="ri-phone-line" style={{ fontSize: '2rem', color: '#00a79d' }} />
    </div>

    {/* Navigation Links */}
    <div
      style={{
        marginTop: '5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.7rem',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        textTransform: 'uppercase',
      }}
    >
      {/* Standard Links */}
      {[
        { label: 'Home', path: '/' },
        { label: 'Dental', path: '/services' },
        { label: 'Contact', path: '/contact' },
      ].map((item, idx) => (
        <div
          key={idx}
          onClick={() => {
            navigate(item.path);
            setMenuOpen(false);
          }}
          style={{ cursor: 'pointer' }}
        >
          {item.label}
        </div>
      ))}

  <div
  style={{ position: 'relative' }}
  onMouseEnter={() => {
    if (!isMobile) setHoveredMenu('about');
  }}
  onMouseLeave={() => {
    if (!isMobile) setHoveredMenu(null);
  }}
>
  {/* Trigger */}
  <div
  style={{
    ...(isMobile
      ? {
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#fff',
          textTransform: 'uppercase',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }
      : navLinkStyle),
  }}
  onClick={() => {
    if (isMobile) {
  setAboutDropdownOpen((prev) => !prev);
  setPagesDropdownOpen(false); // Close other
}
 else {
      navigate('/about-us');
    }
  }}
>
  About Us <span style={{ fontSize: '0.8rem' }}>▼</span>
</div>


  {/* Dropdown */}
  {(hoveredMenu === 'about' || aboutDropdownOpen)
 && (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '0.5rem 0',
        marginTop: '0.3rem',
        zIndex: 1000,
        minWidth: '180px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      }}
    >
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
      fontWeight: 500,
      color: '#333',
    }}
    onClick={() => {
      navigate(item.path);             // Go to the selected page
setAboutDropdownOpen(false);
setPagesDropdownOpen(false);
      setHoveredMenu(null);   
      setMenuOpen(false)
        // Reset hover state
    }}
    onMouseEnter={(e) => {
      if (!isMobile) e.currentTarget.style.backgroundColor = '#f0fdfa';
    }}
    onMouseLeave={(e) => {
      if (!isMobile) e.currentTarget.style.backgroundColor = 'transparent';
    }}
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
  onMouseEnter={() => {
    if (!isMobile) setHoveredMenu('pages');
  }}
  onMouseLeave={() => {
    if (!isMobile) setHoveredMenu(null);
  }}
>
<div
  style={{
    ...(isMobile
      ? {
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#fff',
          textTransform: 'uppercase',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }
      : navLinkStyle),
  }}
  onClick={() => {
    if (isMobile) {
  setPagesDropdownOpen((prev) => !prev);
  setAboutDropdownOpen(false); // Close other
}
else {
      navigate('pages');
    }
  }}
>
  Pages <span style={{ fontSize: '0.8rem' }}>▼</span>
</div>
        {(hoveredMenu === 'pages' || pagesDropdownOpen)
 && (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '0.5rem 0',
        marginTop: '0.3rem',
        zIndex: 1000,
        minWidth: '180px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      }}
          >
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
                  fontWeight: 500,
                        color: '#333',

                }}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
setAboutDropdownOpen(false);
setPagesDropdownOpen(false);
      setHoveredMenu(null); 
                }}
                onMouseEnter={(e) => {
      if (!isMobile) e.currentTarget.style.backgroundColor = '#f0fdfa';
    }}
    onMouseLeave={(e) => {
      if (!isMobile) e.currentTarget.style.backgroundColor = 'transparent';
    }}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
  
      <div
        onClick={() => {
          navigate('/Appointment');
          setMenuOpen(false);
        }}
        style={{
          backgroundColor: '#c3dfff',
          color: '#000',
          borderRadius: '999px',
          padding: '0.5rem 1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Book
      </div>
      {/* Social Media Icons */}
<div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', padding: '1rem' }}>
  <i className="fab fa-facebook-f" style={{ fontSize: '1.4rem', color: '#fff', cursor: 'pointer' }} onClick={() => window.open('https://facebook.com', '_blank')}></i>
  <i className="fab fa-instagram" style={{ fontSize: '1.4rem', color: '#fff', cursor: 'pointer' }} onClick={() => window.open('https://instagram.com', '_blank')}></i>
  <i className="fab fa-twitter" style={{ fontSize: '1.4rem', color: '#fff', cursor: 'pointer' }} onClick={() => window.open('https://twitter.com', '_blank')}></i>
</div>

    </div>
  </div>
)}

    </>
  );
};
const overlayBaseStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  backgroundImage: "url('/images/phong.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: 10000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '2rem',
  gap: '1.5rem',
};

export default Navbar;
