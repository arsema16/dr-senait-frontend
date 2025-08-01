import React from 'react';

const SmileCanvas = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          padding: '0 1rem',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontFamily: 'Federo, sans-serif',
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            color: '#302f2fff',
            marginBottom: '1rem',
            marginLeft: '0',
            textAlign: 'left',
          }}
        >
          YOUR SMILE, OUR CANVAS
        </h1>

        {/* Line below title */}
        <div
          style={{
            height: '1px',
            backgroundColor: '#1a1919ff',
            width: '100%',
            maxWidth: '1000px',
            marginBottom: '2rem',
          }}
        ></div>

        {/* Tagline */}
        <p
          style={{
            color: '#3b3b3bff',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            marginBottom: '25px',
            textAlign: 'center',
            fontFamily: 'Goldman, sans-serif',
          }}
        >
          Dr. Senait Dental Clinic is redefining dentistry
        </p>

        {/* Paragraph */}
        <p
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            color: '#444',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          At Dr. Senait Dental Clinic, we see dentistry not just as a medical necessity,
          but as an experience rooted in care, precision, and purpose. Every detail of our clinic —
          from the calming atmosphere and thoughtfully designed spaces to the advanced technologies
          we invest in — is crafted to make each visit feel seamless and centered around you.
          Our dedicated team brings together skill, empathy, and a deep respect for every patient’s
          unique needs. This isn’t just dental care. It’s a commitment to helping you feel confident,
          cared for, and genuinely seen. Discover what it feels like when dentistry is done differently.
        </p>
      </div>
    </section>
  );
};

export default SmileCanvas;
