import React, { useEffect, useState } from 'react';
import AppointmentBanner from './AppointmentBanner';

const BlogArticles = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  fetch('http://localhost:5000/api/blogs')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched blogs:', data); // <-- add this
      setBlogs(data);
    })
    .catch(err => {
      console.error('Fetch error:', err); // <-- catch errors too
    });
}, []);


  return (
    <section style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f8f9fc', paddingBottom: '4rem' }}>
      {/* Header Image */}
      <div style={{ width: '100%' }}>
        <img
          src="/images/slide1-bg.jpg"
          alt="Blog Section Header"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>

      {/* Appointment Banner */}
      <AppointmentBanner />

      {/* Section Title */}
      <div style={{ textAlign: 'center', padding: '3rem 1rem 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#333' }}>
          Blog <span style={{ color: '#00a79d' }}>& Article</span>
        </h2>
      </div>

      {/* Blog Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          padding: '0 1rem',
        }}
      >
        {blogs.map((post, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              background: '#fff',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            />

            <div style={{ padding: '1rem', flex: '1' }}>
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.4rem' }}>{post.date}</p>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>{post.title}</h3>
              <p style={{ fontSize: '0.92rem', color: '#555', marginBottom: '1rem', minHeight: '60px' }}>
                {post.content.length > 100
                  ? `${post.content.slice(0, 100)}...`
                  : post.content}
              </p>
              <a
                href={`/blog/${post._id}`} // Or use <Link> if using react-router
                style={{
                  color: '#00a79d',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogArticles;
