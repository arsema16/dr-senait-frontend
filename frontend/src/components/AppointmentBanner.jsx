import React, { useState } from 'react';

const AppointmentBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Appointment booked successfully!');
        setFormData({ name: '', phone: '', date: '', service: '' });
      } else {
        alert('❌ ' + data.message);
      }
    } catch (err) {
      console.error('❌ Error:', err);
      alert('❌ Server error');
    }
  };

  return (
    <section style={{ backgroundColor: '#00a79d', padding: '3rem 1rem', color: 'white', textAlign: 'center', position: 'relative', backgroundImage: 'url("/images/booking BG.png")', backgroundRepeat: 'repeat', backgroundSize: 'cover' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: 'white', letterSpacing: '1px' }}>
        BOOK YOUR APPOINTMENT
      </h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
        <input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} required style={inputStyle} />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required style={inputStyle} />
        <select name="service" value={formData.service} onChange={handleChange} required style={inputStyle}>
          <option value="">Select Service</option>
          <option value="cleaning">Teeth Cleaning</option>
          <option value="whitening">Whitening</option>
          <option value="checkup">Check-Up</option>
        </select>

        <button type="submit" style={{ backgroundColor: '#003e3d', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '999px', fontWeight: 'bold', cursor: 'pointer' }}>
          Make Appointment
        </button>
      </form>
    </section>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '999px',
  border: 'none',
  fontSize: '1rem',
  minWidth: '160px',
  flex: '1',
  maxWidth: '200px',
};

export default AppointmentBanner;
