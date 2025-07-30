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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: false,
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
            flexDirection: 'row',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Left: Testimonials */}
          <div
            style={{
              flex: '1 1 300px',
              background: '#ffffff',
              borderRadius: '1.5rem',
              padding: '2rem 1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              minWidth: '300px',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#333',
                marginBottom: '2rem',
              }}
            >
              What{' '}
              <span style={{ color: '#00a79d' }}>Our Clients Say</span>
            </h2>
            <Slider {...settings}>
              {testimonials.map((t, i) => {
                const filledStars = Array(t.stars).fill('★');
                const emptyStars = Array(5 - t.stars).fill('☆');

                return (
                  <div key={i}>
                    <div
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        margin: '0 auto',
                        paddingBottom: '1rem',
                        maxWidth: '300px',
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
                            marginBottom: '0.8rem',
                            letterSpacing: '2px',
                          }}
                        >
                          {filledStars.map((star, idx) => (
                            <span key={'filled-' + idx}>{star}</span>
                          ))}
                          {emptyStars.map((star, idx) => (
                            <span
                              key={'empty-' + idx}
                              style={{ color: '#ddd' }}
                            >
                              {star}
                            </span>
                          ))}
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
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* Right: Book Now */}
          <div
  onClick={() => navigate('/appointment')}
  style={{
    flex: '1 1 300px',
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    cursor: 'pointer',
    minWidth: '300px',
    height: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'transform 0.4s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.querySelector('img').style.transform = 'scale(1.05) translateY(-5px)';
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
      fontSize: '2rem',
      fontWeight: 'bold',
      transition: 'transform 0.4s ease',
      textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
    }}
  >
    Book Now →
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;
