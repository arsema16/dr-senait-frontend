import React, { useState } from 'react';

const AppointmentBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://dr-senait-backend.onrender.com/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert('✅ Appointment booked successfully!');
        setFormData({ name: '', phone: '', date: '', service: '', email: '', message: '' });
      } else {
        alert('❌ ' + data.message);
      }
    } catch (err) {
      alert('❌ Server error');
    }
  };

  return (
    <section
      style={{
        padding: '4rem 1rem',
        backgroundColor: '#f0efebfe',
        fontFamily: '"Federo", sans-serif',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Logo with lines */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <div style={{ flex: 1, height: '2px', backgroundColor: '#0b8284' ,         }} />
          <img src="/images/logo.png" alt="Logo" style={{ height: '50px', margin: '0 1.5rem' }} />
          <div style={{ flex: 1, height: '2px', backgroundColor: '#0b8284' ,         }} />
        </div>

        {/* Text + Form side by side */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* LEFT: TEXT */}
          <div style={{ flex: '1 1 45%' }}>
            <p style={{ fontSize: '1rem', fontWeight: '700',  marginBottom: '0.75rem',gap:'2rem',     color: '#179698ff',     fontFamily: 'goldman, sans-serif',

 }}>
              BOOK YOUR APPOINTMENT:
            </p>
            <h2 style={{ fontSize: '3rem', lineHeight: '1.3', marginBottom: '1rem', color: '#727272ff',  }}>
              WE CAN’T WAIT TO <br /> WELCOME YOU...
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#727272ff',  }}>
              ...and help you smile brighter. Ready to schedule your visit?
              <br />
              Just send us your booking request and a member of our team will
              reach out shortly to confirm the details.
            </p>
          </div>

          {/* RIGHT: FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              flex: '1 1 45%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              style={{ ...inputStyle, gridColumn: 'span 2' }}
            >
              <option value="">Select Service</option>
              <option value="cleaning">Teeth Cleaning</option>
              <option value="whitening">Whitening</option>
              <option value="checkup">Check-Up</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              style={{
                ...inputStyle,
                gridColumn: 'span 2',
                resize: 'none',
                fontFamily: 'inherit',
              }}
            />
            <div style={{ gridColumn: 'span 2', textAlign: 'left' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#0b8284',
                  color: '#fff',
                  border: 'none',
                  padding: '0.75rem 2.5rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: '30px',
                  cursor: 'pointer',
                }}
              >
                BOOK
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  border: '1.5px solid #0b8284',
  fontSize: '1rem',
  borderRadius: '1px',
  width: '100%',
  fontFamily: 'inherit',
};

export default AppointmentBanner;
