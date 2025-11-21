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
      {/* INTERNAL CSS: mobile-only adjustments. Desktop remains unchanged. */}
      <style>{`
        /* default visibility helpers */
        .desktop-only { display: block; }
        .mobile-only { display: none; }
.mobile-logo {
  display: none;
}
        @media (max-width: 768px) {
        
    .mobile-logo {
    display: block;
    width: 200px;
    height: auto;
            margin-bottom: 1rem !important;
  }
          /* Make the main container stack vertically on mobile (only) */
          .footer-container {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 1.25rem !important;
            max-width: 100% !important;
            padding: 0 !important;
                text-align: center !important;
                flex-wrap: nowrap !important; /* allows better fit if very narrow */

          }

          /* Reorder: quick links first, logo/text second */
          .col-links { order: 1 !important; width: 50% !important; }
          .col-logo  { order: 2  !important; width: 50% !important; }

          /* Quick links area: two small columns centered */
          .links-inner {
            display: flex !important;
            gap: 0rem !important;
            justify-content: left !important;
            align-items: flex-start !important;
            flex-wrap: nowrap !important;
            width: 50% !important;
            padding: 0 12px !important;
            text-align : left;
           margin-top: 0rem !important;

          }
          .links-inner > div {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.1rem !important;
            min-width: 120px !important;
            text-align: left !important;
            margin-top: 0rem !important;

          }
.col-links h4{
            display:none !important;

}
          /* Logo / title / text block centered on mobile */
          .col-logo {
            flex-direction: column !important;
            align-items: left !important;
            padding: 0 12px !important;
          }
          .col-logo img {
    display: none !important;
  }
          .col-logo h1 {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
           margin-top: 0rem !important;

          }
          .col-logo p {
            font-size: 0.95rem !important;
            line-height: 1.4 !important;
            margin: 0.7rem 0 !important;
            text-align: left !important;

          }

          /* Make the Book Appointment button show in the logo block on mobile,
             and hide the desktop button there (so desktop is unchanged). */
          .desktop-only { display: none !important; }
          .mobile-only  { display: inline-block !important; }

          .appointment-mobile {
            background-color: white !important;
            color: #00a79d !important;
            border: none !important;
            border-radius: 999px !important;
            padding: 0.8rem 1.5rem !important;
            font-weight: bold !important;
            font-size: 1rem !important;
            width: 90% !important;
            max-width: 260px !important;
            cursor: pointer !important;
            margin-top: 0.6rem !important;
          }

          /* Social icons centered at the bottom on mobile */
          .footer-social {
            display: flex !important;
            justify-content: center !important;
            gap: 1.2rem !important;
            font-size: 1.4rem !important;
            margin-top: 1.5rem !important;
            width: 100% !important;
          }
          .footer-social a {
            color: white !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /* Copyright spacing */
          .footer-bottom {
            margin-top: 1.5rem !important;
            padding-top: 1rem !important;
          }
        }
          @media (max-width: 500px) {
        
    .mobile-logo {
    display: block;
    margin-left:1.7rem;
    width: 150px;
    height: auto;
            margin-bottom: 0.5rem !important;
  }
          /* Make the main container stack vertically on mobile (only) */
          .footer-container {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0rem !important;
            max-width: 100% !important;
            padding: 0 !important;
                text-align: center !important;
                flex-wrap: nowrap !important; /* allows better fit if very narrow */

          }

          /* Reorder: quick links first, logo/text second */
          .col-links { order: 1 !important; width: 50% !important; }
          .col-logo  { order: 2  !important; width: 50% !important; }

          /* Quick links area: two small columns centered */
          .links-inner {
            display: flex !important;
            gap: 0rem !important;
            justify-content: left !important;
            align-items: flex-start !important;
            flex-wrap: nowrap !important;
            width: 50% !important;
            padding: 0 15px 0 4px !important;
            text-align : left;
           margin-top: 0rem !important;


          }
          .links-inner-left{
            padding: 0 1px 0 35px !important;
                       margin-left:0.6rem;

          }
          .links-inner > div {
            display: flex !important;
            flex-direction: column !important;
            gap: 0rem !important;
            min-width: 120px !important;
            text-align: left !important;
            margin-top: 0rem !important;
                       margin-left:0.5rem;

          }
.col-links h4{
            display:none !important;

}
          /* Logo / title / text block centered on mobile */
          .col-logo {
            flex-direction: column !important;
            align-items: left !important;
            padding: 0 12px !important;
          }
          .col-logo img {
    display: none !important;
  }
          .col-logo h1 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
           margin-top: 0rem !important;
                      margin-left:0rem;
            padding: 0 20px 0 0px !important;

          }
          .col-logo p {
            font-size: 0.8rem !important;
            line-height: 1.2 !important;
            margin: 0.7rem 0 !important;
            text-align: left !important;
                      margin-left:0rem;
            padding: 0 28px 0 4px !important;
line-spacing: 1rem;
          }

          /* Make the Book Appointment button show in the logo block on mobile,
             and hide the desktop button there (so desktop is unchanged). */
          .desktop-only { display: none !important; }
          .mobile-only  { display: inline-block !important; }

          .appointment-mobile {
            background-color: white !important;
            color: #00a79d !important;
            border: none !important;
            border-radius: 999px !important;
            padding: 0.8rem 1.5rem !important;
            font-weight: bold !important;
            font-size: 1rem !important;
            width: 70% !important;
            max-width: 260px !important;
            cursor: pointer !important;
            margin-top: 0.6rem !important;
          }

          /* Social icons centered at the bottom on mobile */
          .footer-social {
            display: flex !important;
            justify-content: center !important;
            gap: 1.2rem !important;
            font-size: 1.4rem !important;
            margin-top: 1.5rem !important;
            width: 100% !important;
          }
          .footer-social a {
            color: white !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /* Copyright spacing */
          .footer-bottom {
            margin-top: 1.5rem !important;
            padding-top: 1rem !important;
          }
        }
          @media (max-width: 400px) {
        
    .mobile-logo {
    display: block;
    margin-left:3.2rem;
    width: 150px;
    height: auto;
            margin-bottom: 0.5rem !important;
  }
          /* Make the main container stack vertically on mobile (only) */
          .footer-container {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0rem !important;
            max-width: 100% !important;
            padding: 0 !important;
                text-align: center !important;
                flex-wrap: nowrap !important; /* allows better fit if very narrow */

          }

          /* Reorder: quick links first, logo/text second */
          .col-links { order: 1 !important; width: 50% !important; }
          .col-logo  { order: 2  !important; width: 50% !important; }

          /* Quick links area: two small columns centered */
          .links-inner {
            display: flex !important;
            gap: 0rem !important;
            justify-content: left !important;
            align-items: flex-start !important;
            flex-wrap: nowrap !important;
            width: 50% !important;
            padding: 0 15px 0 4px !important;
            text-align : left;
           margin-top: 0rem !important;


          }
          .links-inner-left{
            padding: 0 1px 0 50px !important;
                       margin-left:0.6rem;

          }
                       .links-inner-right{
                                   padding: 0 1px 0 15px !important;

                       }
          .links-inner > div {
            display: flex !important;
            flex-direction: column !important;
            gap: 0rem !important;
            min-width: 120px !important;
            text-align: left !important;
            margin-top: 0rem !important;
                       margin-left:0.5rem;

          }
.col-links h4{
            display:none !important;

}
          /* Logo / title / text block centered on mobile */
          .col-logo {
            flex-direction: column !important;
            align-items: left !important;
            padding: 0 12px !important;
          }
          .col-logo img {
    display: none !important;
  }
          .col-logo h1 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
           margin-top: 0rem !important;
                      margin-left:0rem;
            padding: 0 58px 0 0px !important;

          }
          .col-logo p {
            font-size: 0.8rem !important;
            line-height: 1.2 !important;
            margin: 0.7rem 0 !important;
            text-align: left !important;
                      margin-left:0rem;
            padding: 0 40px 0 0px !important;
line-spacing: 1rem;
          }

          /* Make the Book Appointment button show in the logo block on mobile,
             and hide the desktop button there (so desktop is unchanged). */
          .desktop-only { display: none !important; }
          .mobile-only  { display: inline-block !important; }

          .appointment-mobile {
            background-color: white !important;
            color: #00a79d !important;
            border: none !important;
            border-radius: 999px !important;
            padding: 0.8rem 1.5rem !important;
            font-weight: bold !important;
            font-size: 1rem !important;
            width: 70% !important;
            max-width: 260px !important;
            cursor: pointer !important;
            margin-top: 0.6rem !important;
          }

          /* Social icons centered at the bottom on mobile */
          .footer-social {
            display: flex !important;
            justify-content: center !important;
            gap: 1.2rem !important;
            font-size: 1.4rem !important;
            margin-top: 1.5rem !important;
            width: 100% !important;
          }
          .footer-social a {
            color: white !important;
            text-decoration: none !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          /* Copyright spacing */
          .footer-bottom {
            margin-top: 1.5rem !important;
            padding-top: 1rem !important;
          }
        }
      `}</style>

      {/* CONTENT: keep desktop structure and inline styles exactly as you had them */}
      <div
        className="footer-container"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '0rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Column 1: Logo + Description (kept as original; will be centered on mobile) */}
        <div className="col-logo" style={{ flex: 1, minWidth: '250px' }}>
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
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
            Your journey to confident, healthy smiles starts here.
          </p>

          {/* Mobile-only duplicate button (hidden on desktop). This ensures button appears under logo on mobile. */}
          <button
            className="mobile-only appointment-mobile"
            onClick={() => navigate('/appointment')}
            aria-label="Book Appointment (mobile)"
          >
            Book Appointment
          </button>
        </div>

        {/* Column 2: Nav Links + Appointment Button (kept as original; will move above on mobile) */}
        <div className="col-links" style={{ flex: 1, minWidth: '250px' }}>
          {/* Mobile-only logo */}
<img
    className="mobile-logo"
    src="/images/Logo-01.png"
    alt="Logo"
  />

          <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', marginTop: '1rem' }}>Quick Link</h4>

          <div className="links-inner" style={{ display: 'flex', gap: '0rem' }}>
            <div className="links-inner-left">
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

            <div className="links-inner-right">
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

          {/* Book Appointment Button (original) — visible on desktop, hidden on mobile by CSS above */}
          <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
            <button
              className="desktop-only"
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

      {/* Social Icons (original position; centered on mobile via CSS) */}
      <div
        className="footer-social"
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
        className="footer-bottom"
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
