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
        backgroundImage: 'url("/images/booking BG.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        padding: '4rem 1rem',
        fontFamily: '"Federo", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Left Side Text */}
        <div style={{ flex: '1 1 300px', color: 'white' }}>
          <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>BOOK NOW:</p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
            WE CAN’T WAIT TO <br /> WELCOME YOU...
          </h2>
          <p style={{ fontSize: '1rem', maxWidth: '400px' }}>
            ...and help you smile brighter. Ready to schedule your visit? Just send us your booking
            request and a member of our team will reach out shortly to confirm the details.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 500px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'flex-start',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Service</option>
            <option value="cleaning">Teeth Cleaning</option>
            <option value="whitening">Whitening</option>
            <option value="checkup">Check-Up</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{ ...inputStyle, width: '100%', borderRadius: '8px', resize: 'none' }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#003e3d',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '999px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
            }}
          >
            Make Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  border: '1px solid #ccc',
  fontSize: '1rem',
  flex: '1 1 calc(50% - 0.5rem)',
  borderRadius: '8px',
  minWidth: '150px',
};

export default AppointmentBanner;
