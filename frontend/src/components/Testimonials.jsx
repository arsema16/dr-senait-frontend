import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Samuel T.',
      review:
        'Top-quality care in Ethiopia! Clean clinic, advanced tools, and a caring team. Highly recommended!',
      stars: 4,
      image: '/assets/samuel.jpg', // 🔁 Replace with actual path or use placeholder
    },
    {
      name: 'Hanna G.',
      review:
        'Dr. Senait and her team are amazing! I was terrified of going to the dentist, but they made me feel completely at ease. Now I love my smile!',
      stars: 4,
      image: '/assets/hanna.jpg',
    },
    {
      name: 'Rahel M.',
      review:
        'My daughter loves visiting the dentist now thanks to their gentle and fun pediatric team.',
      stars: 3,
      image: '/assets/rahel.jpg',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#f4f9fc',
        padding: '3rem 1rem',
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#333',
        }}
      >
        What <span style={{ color: '#00a79d' }}>Our Clients Say</span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        {testimonials.map((t, i) => {
          const filledStars = Array(t.stars).fill('★');
          const emptyStars = Array(5 - t.stars).fill('☆');

          return (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                maxWidth: '300px',
                width: '100%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#00a79d',
                  color: 'white',
                  padding: '1.5rem 1rem 3.5rem',
                  position: 'relative',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  borderTopLeftRadius: '1.5rem',
                  borderTopRightRadius: '1.5rem',
                }}
              >
                <span
                  style={{
                    fontSize: '2rem',
                    position: 'absolute',
                    top: '10px',
                    left: '15px',
                  }}
                >
                  &ldquo;
                </span>
                {t.review}
                <span
                  style={{
                    fontSize: '2rem',
                    position: 'absolute',
                    bottom: '10px',
                    right: '15px',
                  }}
                >
                  &rdquo;
                </span>
              </div>

              <div style={{ marginTop: '-35px' }}>
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '3px solid white',
                  }}
                />
              </div>

              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <div
                  style={{
                    color: '#ffb400',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {filledStars.concat(emptyStars).join(' ')}
                </div>
                <div
                  style={{
                    fontWeight: '600',
                    color: '#444',
                    fontSize: '1rem',
                  }}
                >
                  {t.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
