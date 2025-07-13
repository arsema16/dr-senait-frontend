import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('adminAuth') === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
const [searchAppointments, setSearchAppointments] = useState('');
const [filterService, setFilterService] = useState('');
const [editingAppt, setEditingAppt] = useState(null);
const [newAppt, setNewAppt] = useState({ name: '', phone: '', date: '', service: '' });

  const [newBlog, setNewBlog] = useState({ title: '', date: '', image: '', content: '' });
  const [editBlogId, setEditBlogId] = useState(null);
const [openHours, setOpenHours] = useState([]);
const [editingHour, setEditingHour] = useState({ day: '', open: '', close: '' });

  useEffect(() => {
    if (!authenticated) return;

    const fetchData = async () => {
      try {
        if (activeTab === 'appointments') {
          const res = await fetch('https://dr-senait-backend.onrender.com/api/appointments');
          const data = await res.json();
          setAppointments(data);
        } else if (activeTab === 'messages') {
          const res = await fetch('https://dr-senait-backend.onrender.com/api/messages');
          const data = await res.json();
          setMessages(data);
        } else if (activeTab === 'blogs') {
          const res = await fetch('https://dr-senait-backend.onrender.com/api/open-hours/blogs');
          const data = await res.json();
          setBlogs(data);
        }
        else if (activeTab === 'openHours') {
  const res = await fetch('https://dr-senait-backend.onrender.com/api/open-hours');
  const data = await res.json();
  setOpenHours(data);
}

      } catch (err) {
        console.error('❌ Fetch error:', err);
      }
    };

    fetchData();
  }, [authenticated, activeTab]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('adminAuth', 'true');
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const exportExcel = (type) => {
    window.open(`https://dr-senait-backend.onrender.com/api/export/${type}`, '_blank');
  };
const handleApptSubmit = async (e) => {
  e.preventDefault();
  const url = editingAppt
    ? `https://dr-senait-backend.onrender.com/api/appointments/${editingAppt._id}`
    : 'https://dr-senait-backend.onrender.com/api/appointments';
  const method = editingAppt ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAppt),
  });

  const data = await res.json();
  if (data.appointment || data._id) {
    setNewAppt({ name: '', phone: '', date: '', service: '' });
    setEditingAppt(null);
    const refreshed = await fetch('https://dr-senait-backend.onrender.com/api/appointments').then(res => res.json());
    setAppointments(refreshed);
  }
};

const handleApptDelete = async (id) => {
  if (!window.confirm('Delete this appointment?')) return;
  await fetch(`https://dr-senait-backend.onrender.com/api/appointments/${id}`, { method: 'DELETE' });
  setAppointments(appointments.filter(a => a._id !== id));
};

// Filtered list
const filteredAppointments = appointments.filter(a =>
  (a.name + a.phone + a.service).toLowerCase().includes(searchAppointments.toLowerCase()) &&
  (!filterService || a.service === filterService)
);
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    const url = editBlogId
      ? `https://dr-senait-backend.onrender.com/api/blogs/${editBlogId}`
      : 'https://dr-senait-backend.onrender.com/api/blogs';

    const method = editBlogId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    });

    const data = await res.json();
    if (data.blog || data._id) {
      setNewBlog({ title: '', date: '', image: '', content: '' });
      setEditBlogId(null);
      const refreshed = await fetch('https://dr-senait-backend.onrender.com/api/blogs').then(res => res.json());
      setBlogs(refreshed);
    }
  };

  const handleBlogDelete = async (id) => {
    if (!window.confirm('Delete this blog post?')) return;
    await fetch(`https://dr-senait-backend.onrender.com/api/blogs/${id}`, { method: 'DELETE' });
    setBlogs(blogs.filter(b => b._id !== id));
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!authenticated) {
    return (
      <form onSubmit={handleLogin} style={loginFormStyle}>
        <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
        <input style={inputStyle} placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    );
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Admin Panel</h1>
        <button onClick={handleLogout} style={logoutStyle}>Logout</button>
      </div>

      <div style={{ margin: '1rem 0' }}>
        {['appointments', 'messages', 'blogs','openHours'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={tabButtonStyle}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Appointments Tab */}
      {activeTab === 'appointments' && (
  <>
    <input
      type="text"
      placeholder="Search name, phone, or service"
      value={searchAppointments}
      onChange={e => setSearchAppointments(e.target.value)}
      style={inputStyle}
    />
    <select value={filterService} onChange={e => setFilterService(e.target.value)} style={inputStyle}>
      <option value="">Filter by service</option>
      {[...new Set(appointments.map(a => a.service))].map((s, i) => (
        <option key={i} value={s}>{s}</option>
      ))}
    </select>
    <button onClick={() => exportExcel('appointments')} style={exportBtn}>Export to Excel</button>

    <form onSubmit={handleApptSubmit} style={{ margin: '1rem 0' }}>
      <h3>{editingAppt ? 'Edit Appointment' : 'New Appointment'}</h3>
      <input style={inputStyle} placeholder="Name" value={newAppt.name} onChange={e => setNewAppt({ ...newAppt, name: e.target.value })} required />
      <input style={inputStyle} placeholder="Phone" value={newAppt.phone} onChange={e => setNewAppt({ ...newAppt, phone: e.target.value })} required />
      <input style={inputStyle} placeholder="Date" value={newAppt.date} onChange={e => setNewAppt({ ...newAppt, date: e.target.value })} required />
      <input style={inputStyle} placeholder="Service" value={newAppt.service} onChange={e => setNewAppt({ ...newAppt, service: e.target.value })} required />
      <button type="submit" style={buttonStyle}>{editingAppt ? 'Update' : 'Create'}</button>
    </form>

    <table style={tableStyle}>
      <thead>
        <tr><th>Name</th><th>Phone</th><th>Date</th><th>Service</th><th>Created</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {filteredAppointments.map(appt => (
          <tr key={appt._id}>
            <td>{appt.name}</td>
            <td>{appt.phone}</td>
            <td>{appt.date}</td>
            <td>{appt.service}</td>
            <td>{new Date(appt.createdAt).toLocaleString()}</td>
            <td>
              <button onClick={() => {
                setNewAppt(appt);
                setEditingAppt(appt);
              }} style={{ marginRight: '8px' }}>✏️</button>
              <button onClick={() => handleApptDelete(appt._id)}>🗑</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <>
          <button onClick={() => exportExcel('messages')} style={exportBtn}>Export to Excel</button>
          <table style={tableStyle}>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Submitted</th></tr>
            </thead>
            <tbody>
              {messages.map(msg => (
                <tr key={msg._id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.message}</td>
                  <td>{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Blogs Tab */}
      {activeTab === 'blogs' && (
        <>
          <input
            type="text"
            placeholder="Search blog title..."
            style={inputStyle}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={() => exportExcel('blogs')} style={exportBtn}>Export to Excel</button>

          <form onSubmit={handleBlogSubmit} style={{ margin: '2rem 0' }}>
            <h3>{editBlogId ? 'Edit Blog' : 'New Blog Post'}</h3>
            <input style={inputStyle} placeholder="Title" value={newBlog.title} onChange={e => setNewBlog({ ...newBlog, title: e.target.value })} />
            <input style={inputStyle} placeholder="Date" value={newBlog.date} onChange={e => setNewBlog({ ...newBlog, date: e.target.value })} />
<input
  type="file"
  accept="image/*"
  style={inputStyle}
  onChange={async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('https://dr-senait-backend.onrender.com/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.url) {
        setNewBlog({ ...newBlog, image: data.url });
      } else {
        alert('Image upload failed');
      }
    } catch (err) {
      console.error('Image upload error:', err);
      alert('❌ Failed to upload image');
    }
  }}
/>
            <textarea style={inputStyle} rows="4" placeholder="Content" value={newBlog.content} onChange={e => setNewBlog({ ...newBlog, content: e.target.value })}></textarea>
            <button type="submit" style={buttonStyle}>{editBlogId ? 'Update' : 'Create'}</button>
          </form>

          <table style={tableStyle}>
            <thead>
              <tr><th>Title</th><th>Date</th><th>Image</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filteredBlogs.map(blog => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.date}</td>
                  <td><img src={blog.image} alt="" style={{ width: '80px' }} /></td>
                  <td>
                    <button onClick={() => {
                      setNewBlog(blog);
                      setEditBlogId(blog._id);
                    }} style={{ marginRight: '8px' }}>✏️</button>
                    <button onClick={() => handleBlogDelete(blog._id)}>🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {activeTab === 'openHours' && (
  <>
    <form
  onSubmit={async (e) => {
    e.preventDefault();
    const method = editingHour._id ? 'PUT' : 'POST';
    const url = editingHour._id
      ? `https://dr-senait-backend.onrender.com/api/open-hours/${editingHour._id}`
      : `https://dr-senait-backend.onrender.com/api/open-hours`;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingHour),
      });

      if (!res.ok) {
        throw new Error('Failed to save');
      }

      const refreshed = await fetch('https://dr-senait-backend.onrender.com/api/open-hours').then(res => res.json());
      setOpenHours(refreshed);
      setEditingHour({ day: '', open: '', close: '' });
    } catch (err) {
      console.error('Save failed:', err);
      alert('❌ Failed to save. Please try again.');
    }
  }}

      style={{ margin: '1rem 0' }}
    >
      <h3>{editingHour.day ? 'Edit' : 'Add'} Open Hour</h3>
      <input
        placeholder="Day (e.g., Monday)"
        value={editingHour.day}
        onChange={(e) => setEditingHour({ ...editingHour, day: e.target.value })}
        style={inputStyle}
        required
      />
      <input
        placeholder="Open Time (e.g., 09:00)"
        value={editingHour.open}
        onChange={(e) => setEditingHour({ ...editingHour, open: e.target.value })}
        style={inputStyle}
        required
      />
      <input
        placeholder="Close Time (e.g., 17:00)"
        value={editingHour.close}
        onChange={(e) => setEditingHour({ ...editingHour, close: e.target.value })}
        style={inputStyle}
        required
      />
      <button type="submit" style={buttonStyle}>
        {editingHour.day ? 'Save Changes' : 'Add Hour'}
      </button>
    </form>

    <table style={tableStyle}>
      <thead>
        <tr><th>Day</th><th>Open</th><th>Close</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {openHours.map(hour => (
          <tr key={hour._id}>
            <td>{hour.day}</td>
            <td>{hour.open}</td>
            <td>{hour.close}</td>
            <td>
              <button onClick={() => setEditingHour(hour)} style={{ marginRight: '8px' }}>✏️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)}

    </div>
  );
};

// Styles
const inputStyle = { display: 'block', width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '6px' };
const buttonStyle = { padding: '0.5rem 1rem', backgroundColor: '#00a79d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' };
const logoutStyle = { ...buttonStyle, backgroundColor: 'tomato' };
const tabButtonStyle = { ...buttonStyle, backgroundColor: '#f1f1f1', color: '#000', marginRight: '1rem' };
const loginFormStyle = { maxWidth: '400px', margin: '4rem auto', background: '#f9f9f9', padding: '2rem', borderRadius: '8px' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '1rem', backgroundColor: '#fff' };
const exportBtn = { ...buttonStyle, margin: '1rem 0' };

export default AdminPanel;
