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
const [imageFile, setImageFile] = useState(null);
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
  console.log('Submitting blog:', newBlog); // ✅ Add this line

  if (!newBlog.image) {
    alert('Please upload an image before submitting.');
    return;
  }

  const url = editBlogId
    ? `https://dr-senait-backend.onrender.com/api/blogs/${editBlogId}`
    : 'https://dr-senait-backend.onrender.com/api/blogs';

  const method = editBlogId ? 'PUT' : 'POST';

  try {
  console.log('📡 Sending request to:', url);
  console.log('➡️ Method:', method);
  console.log('📦 Payload:', newBlog);

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBlog),
  });

  console.log('📥 Response status:', res.status);

  const data = await res.json();
  console.log('📥 Response body:', data);

  if (!res.ok) {
    alert('❌ Server error: ' + (data.message || 'Unknown error'));
    return;
  }

  if (data.blog || data._id) {
    setNewBlog({ title: '', date: '', image: '', content: '' });
    setEditBlogId(null);
    const refreshed = await fetch('https://dr-senait-backend.onrender.com/api/blogs').then(res => res.json());
    setBlogs(refreshed);
  } else {
    alert('❌ Blog not created. Server responded with:', JSON.stringify(data));
  }
} catch (err) {
  console.error('❌ Network error:', err);
  alert('❌ Network error. Check console for details.');
}

};
const handleImageUpload = async (e) => {
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
    console.log('Upload response:', data); // ✅ Add this line

    if (data.url) {
      setNewBlog(prev => ({ ...prev, image: data.url }));
    } else {
      alert('Image upload failed');
    }
  } catch (err) {
    console.error('Image upload failed:', err);
    alert('❌ Failed to upload image');
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
    
<div style={containerStyle}>
      <style>{`/* Mobile adjustments */
@media (max-width: 768px) {
  /* Stack filters and buttons */
  .appointments-controls {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .appointments-controls input,
  .appointments-controls select,
  .appointments-controls button {
    width: 100% !important;
    max-width: 100% !important;
  }

  /* Table scroll area */
  .appointments-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* Make table text smaller for mobile */
  .appointments-table-wrapper table {
    font-size: 0.9rem;
  }
}
`}</style>
  <div
          style={{
            backgroundImage: 'url("/images/slide1-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '100px 20px 60px',
            textAlign: 'center',
            display: 'flex', justifyContent: 'space-between'
          }}
        >
        <h1>Admin Panel</h1>
        <button onClick={handleLogout} style={logoutStyle}>Logout</button>
          </div>
      

      <div style={{ margin: '1rem 0',   padding: '1rem', }}>
        {['appointments', 'messages', 'blogs','openHours'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={tabButtonStyle}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Appointments Tab */}
      {activeTab === 'appointments' && (
  <>
    <div className="appointments-controls">
  <input
    type="text"
    placeholder="Search name, phone, or service"
    value={searchAppointments}
    onChange={e => setSearchAppointments(e.target.value)}
    style={inputStyle}
  />
  <select
    value={filterService}
    onChange={e => setFilterService(e.target.value)}
    style={inputStyle}
  >
    <option value="">Filter by service</option>
    {[...new Set(appointments.map(a => a.service))].map((s, i) => (
      <option key={i} value={s}>{s}</option>
    ))}
  </select>
  <button onClick={() => exportExcel('appointments')} style={exportBtn}>
    Export to Excel
  </button>
</div>

    <form onSubmit={handleApptSubmit} style={{ margin: '1rem 0',   padding: '1rem', }}>
      <h3>{editingAppt ? 'Edit Appointment' : 'New Appointment'}</h3>
      <input style={inputStyle} placeholder="Name" value={newAppt.name} onChange={e => setNewAppt({ ...newAppt, name: e.target.value })} required />
      <input style={inputStyle} placeholder="Phone" value={newAppt.phone} onChange={e => setNewAppt({ ...newAppt, phone: e.target.value })} required />
      <input style={inputStyle} placeholder="Date" value={newAppt.date} onChange={e => setNewAppt({ ...newAppt, date: e.target.value })} required />
      <input style={inputStyle} placeholder="Service" value={newAppt.service} onChange={e => setNewAppt({ ...newAppt, service: e.target.value })} required />
      <button type="submit" style={buttonStyle}>{editingAppt ? 'Update' : 'Create'}</button>
    </form>
<div style={{tableWrapperStyle}}>

    <div className="appointments-table-wrapper">
  <table style={tableStyle}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Date</th>
        <th>Service</th>
        <th>Created</th>
        <th>Actions</th>
      </tr>
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
            }}>✏️</button>
            <button onClick={() => handleApptDelete(appt._id)}>🗑</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  </>
)}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <>
          <button onClick={() => exportExcel('messages')} style={exportBtn}>Export to Excel</button>
          <div style={tableWrapperStyle}>
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
          </div>
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

  <input
    style={inputStyle}
    placeholder="Title"
    value={newBlog.title}
    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
    required
  />

  <input
    style={inputStyle}
    placeholder="Date"
    value={newBlog.date}
    onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
    required
  />

  <input
    type="file"
    accept="image/*"
    style={inputStyle}
    onChange={(e) => {
      if (e.target.files.length > 0) {
        handleImageUpload(e); // ✅ Upload immediately
      }
    }}
  />

  {/* Preview uploaded image */}
  {newBlog.image && (
    <img
      src={newBlog.image}
      alt="Uploaded Preview"
      style={{ width: '100px', marginBottom: '1rem', borderRadius: '6px' }}
    />
  )}

  <textarea
    style={inputStyle}
    rows="4"
    placeholder="Content"
    value={newBlog.content}
    onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
    required
  ></textarea>

  <button
    type="submit"
    style={buttonStyle}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#007e77')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#00a79d')}
  >
    {editBlogId ? 'Update' : 'Create'}
  </button>
</form>

<div style={tableWrapperStyle}>

          <table style={tableStyle}>
            <thead>
              <tr><th>Title</th><th>Date</th><th>Image</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filteredBlogs.map(blog => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.date}</td>
                  <td><td>
  {blog.image && (
    <img
      src={blog.image}
      alt="Blog"
      style={{ width: '100px', borderRadius: '6px' }}
    />
  )}
</td>

</td>
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
          </div>
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
<div style={tableWrapperStyle}>
</div>
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
const containerStyle = {
  fontFamily: 'Segoe UI',
  maxWidth: '100%',
  boxSizing: 'border-box'
};

const inputStyle = {
  display: 'block',
  width: '100%',
  maxWidth: '600px',
  padding: '0.5rem',
  marginBottom: '0.75rem',
  borderRadius: '6px',
  boxSizing: 'border-box',
    padding: ' 1rem',

};

const buttonStyle = {
  padding: '1rem 1rem',
  backgroundColor: '#00a79d',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  margin: '0.25rem 0',
    padding: '1rem',

};

const logoutStyle = {
  ...buttonStyle,
  backgroundColor: 'tomato'
};

const tabButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#f1f1f1',
  color: '#000',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  flexGrow: 1,
  textAlign: 'center',
    padding: '1rem',

};

const loginFormStyle = {
  maxWidth: '400px',
  margin: '4rem auto',
  background: '#f9f9f9',
  padding: '2rem',
  borderRadius: '8px',
  boxSizing: 'border-box',
    padding: '1rem',

  
};

const tableWrapperStyle = {
  overflowX: 'auto',
  marginTop: '1rem',
    padding: '1rem',

};

const tableStyle = {
  width: '100%',
  minWidth: '600px',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
    padding: '1rem',

};

const exportBtn = {
  ...buttonStyle,
  margin: '1rem 0',
    padding: '1rem',
};

export default AdminPanel;
