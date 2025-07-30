import React from 'react';
import Slider from 'react-slick';
import { useNavigate, useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const testimonials = [
    {
      name: 'Samuel T.',
      review:
        'Top-quality care in Ethiopia! Clean clinic, advanced tools, and a caring team. Highly recommended!',
      stars: 4,
      image: '/assets/samuel.jpg',
    },
    {
      name: 'Hanna G.',
      review:
        'Dr. Senait and her team are amazing! I was terrified of going to the dentist, but they made me feel completely at ease. Now I love my smile!',
      stars: 5,
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {location.pathname === '/testimonials' && (
        <div
          style={{
            backgroundImage: 'url("/images/slide1-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '100px 20px 60px',
            textAlign: 'center',
            fontFamily: '"Federo", sans-serif',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '500',
              color: '#004c4c',
            }}
          >
            Testimonials
          </h2>
        </div>
      )}

      <section
        style={{
          backgroundColor: '#f4f9fc',
          padding: '3rem 1rem',
          fontFamily: '"Federo", sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
              border: '2px solid #ccc',
              flexWrap: 'wrap',
            }}
          >
            {/* Testimonials Section */}
            <div
              style={{
                flex: '1 1 50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '300px',
              }}
            >
              {/* Green Banner Header */}
              <div
                style={{
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#000',
                    margin: 0,
                  }}
                >
                  What Our Clients Say
                </h2>
              </div>

              {/* Testimonial Cards */}
              <div style={{ padding: '2rem 1.5rem', flex: '1' }}>
              <Slider {...settings}>
  {testimonials.map((t, i) => {
    const filledStars = Array(t.stars).fill('★');
    const emptyStars = Array(5 - t.stars).fill('☆');
    return (
      <div key={i}>
        <div
          style={{
                  backgroundColor: '#08d1c3ff',
            borderRadius: '1rem',
            margin: '0 auto',
            padding: '1.5rem',
            maxWidth: '300px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Removed image */}
          <p
            style={{
              fontStyle: 'italic',
              marginBottom: '0.5rem',
            }}
          >
            "{t.review}"
          </p>
          <div style={{ fontSize: '1.2rem', color: '#ffc107' }}>
            {filledStars.concat(emptyStars).join('')}
          </div>
          <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
            {t.name}
          </p>
        </div>
      </div>
    );
  })}
</Slider>
              </div>
            </div>

            {/* Book Now Side */}
            <div
              onClick={() => navigate('/appointment')}
              style={{
                flex: '1 1 50%',
                position: 'relative',
                minWidth: '300px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                e.currentTarget.querySelector('.book-text').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                e.currentTarget.querySelector('.book-text').style.transform = 'scale(1)';
              }}
            >
              <img
                src="/images/book now.jpg"
                alt="Book Now"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div
                className="book-text"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 167, 157, 0.6)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  transition: 'transform 0.4s ease',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.4)',
                }}
              >
                Book Now →
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
