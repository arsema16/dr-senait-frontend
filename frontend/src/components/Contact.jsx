import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openHours, setOpenHours] = useState([]);

  useEffect(() => {
    const fetchOpenHours = async () => {
      try {
        const res = await fetch('https://dr-senait-backend.onrender.com/api/open-hours');
        const data = await res.json();
        setOpenHours(data);
      } catch (err) {
        console.error('Failed to fetch open hours', err);
      }
    };
    fetchOpenHours();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('❌ Message not sent. Please try again.');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      alert('❌ Something went wrong.');
    }
  };

  return (
    <div style={{                     fontFamily: '"Federo", sans-serif',
 }}>
      {/* Hero Section with Background Image */}
      <div style={{
        backgroundImage: 'url("/images/slide1-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px 60px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#004c4c'
        }}>Contact Us</h2>
      </div>

      {/* Contact Form Section */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '25px',
        padding: '2.5rem',
        marginTop: '-60px',
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
        zIndex: 1,
        position: 'relative',
      }}>
        {submitted ? (
          <p style={{ fontSize: '1.2rem', color: '#00a79d', textAlign: 'center' }}>
            Thank you for reaching out! We will get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Row: Email & Phone */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                name="email"
                placeholder="Email:"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone:"
                value={formData.phone}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name:"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                borderRadius: '20px',
                resize: 'none',
              }}
            ></textarea>

            {/* Send Button */}
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#007e77'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#00a79d'}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Contact Info + Map */}
      <div style={{
        maxWidth: '1200px',
        margin: '4rem auto',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        padding: '0 20px',
        flexWrap: 'wrap',
      }}>

        {/* LEFT SIDE: Info blocks */}
        <div style={{ flex: '1 1 50%' }}>
          {/* Heading and Subtext */}
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
            Get In <span style={{ color: '#00a79d' }}>Touch</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '2rem' }}>
            Have a question or ready to book your appointment?
            We’re here to help you smile with confidence.
          </p>

          {/* TOP INFO ROW (Phone & Email) */}
          <div style={{
            display: 'flex',
            gap: '5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Phone */}
            <div style={iconRowStyle}>
              <img src="/images/a.png" alt="Phone" style={iconStyle} />
              <div>
                <p style={infoLine}>
                  <a href="tel:+251941838383" style={{ color: '#333', textDecoration: 'none' }}>
                    +251 941 838383
                  </a>
                </p>
                <p style={infoLine}>
                  <a href="tel:+251947838383" style={{ color: '#333', textDecoration: 'none' }}>
                    +251 947 838383
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={iconRowStyle}>
              <img src="/images/email.png" alt="Email" style={iconStyle} />
              <div>
                <p style={infoLine}>
                  <a href="mailto:todrsenait@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>
                    todrsenait@gmail.com
                  </a>
                </p>
                <p style={infoLine}>
                  <a href="mailto:info@drsenait.com" style={{ color: '#333', textDecoration: 'none' }}>
                    info@drsenait.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM INFO ROW (Location only) */}
          <div style={iconRowStyle}>
            <img src="/images/C.png" alt="Location" style={iconStyle} />
            <p style={infoLine}>
              The Clinic is located off Bole Road,<br />
              Wello Sefer, Fete Building, 2nd Floor<br />
              <span style={{ color: '#888' }}>(next to Medco Bio-Medical College)</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Google Map */}
        <div style={{ flex: '1 1 45%' }}>
          <iframe
            title="Dr. Senait Dental Clinic Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.847098255538!2d38.7678886!3d8.986214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84452baac31f%3A0xb63c19bc89ae954!2sDr.%20Senait%20Dental%20Clinic!5e0!3m2!1sen!2set!4v1752062481369!5m2!1sen!2set"
            width="100%"
            height="320"
            style={{
              border: '0',
              borderRadius: '12px',
              boxShadow: '0 0 10px rgba(0,0,0,0.08)'
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

// Input field shared style
const inputStyle = {
  flex: 1,
  minWidth: '250px',
  padding: '1rem 1.2rem',
  border: '2px solid #00a79d',
  borderRadius: '25px',
  fontSize: '1rem',
  outline: 'none',
};
const iconRowStyle = {
  flexDirection: 'column', // changed from 'row'
  display: 'flex',
  alignItems: 'flex-start',
  gap: '15px',
  marginBottom: '1.5rem',
};

const iconStyle = {
  width: '50px',
  height: '50px',
  marginTop: '5px',
};

const infoLine = {
  fontSize: '0.95rem',
  color: '#333',
  margin: 0,
  lineHeight: '1.5',
};

// Button style
const buttonStyle = {
  backgroundColor: '#00a79d',
  color: '#fff',
  padding: '1rem 2.5rem',
  border: 'none',
  borderRadius: '25px',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  alignSelf: 'center',
  transition: 'background 0.3s ease',
};

export default Contact;
