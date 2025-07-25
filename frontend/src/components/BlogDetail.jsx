import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dr-senait-backend.onrender.com/api/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Blog not found');
        return res.json();
      })
      .then(data => {
        setBlog(data);
        setError(null);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Sorry, the blog could not be loaded.');
      });
  }, [id]);

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: 'crimson' }}>
        {error}
        <br />
        <button onClick={() => navigate('/blog')} style={{ marginTop: '1rem', ...buttonStyle }}>
          ← Back to Blogs
        </button>
      </div>
    );
  }

  if (!blog) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading blog...</div>;
  }

  return (
    <>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url("/images/slide1-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 20px 60px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#004c4c' }}>
          Blog Details
        </h2>
      </div>

      {/* Blog Content */}
      <div
        style={{
          padding: '2rem',
          fontFamily: 'Segoe UI, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default-blog.jpg'; // fallback
          }}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            marginBottom: '1.5rem',
            boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
          }}
        />

        {/* Date */}
        <p style={{ color: '#888', fontSize: '0.9rem' }}>{blog.date}</p>

        {/* Title */}
        <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#06394d' }}>
          {blog.title}
        </h1>

        {/* Content */}
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
          {blog.content}
        </p>

        {/* Back Button */}
        <button onClick={() => navigate('/blog')} style={buttonStyle}>
          ← Back to Blogs
        </button>
      </div>
    </>
  );
};

const buttonStyle = {
  backgroundColor: '#00a79d',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '30px',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default BlogDetail;
