import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    // Slide 1
    {
      review:
        'Dr. Senait caught a tiny cavity two other clinics had missed. The attention to detail was next level, and the post-visit follow-up made me feel genuinely cared for.',
      bg: '#0b8284',
    },
    {
      review:
        'They explained everything as they went, which really put me at ease. You can tell they actually care about patient comfort.',
      bg: '#019ea0',
    },
    {
      review:
        'Came in for a whitening session before a wedding and left with a noticeably brighter smile. Quick, professional, and surprisingly relaxing.',
      bg: '#348296',
    },
    // Slide 2
    {
      review:
        'Incredible pediatric experience. My kids actually ask to go to the dentist now. Very welcoming staff.',
      bg: '#005f60',
    },
    {
      review:
        'I’ve had dental anxiety for years — but this team changed that. I now look forward to checkups.',
      bg: '#009999',
    },
    {
      review:
        'Fast, efficient, and pain-free. Honestly one of the best dental experiences I’ve had in Addis.',
      bg: '#008080',
    },
    // Slide 3
    {
      review:
        'Very clean clinic. Everything is modern and top-tier. Definitely recommend Dr. Senait’s clinic.',
      bg: '#005050',
    },
    {
      review: 'The smile makeover changed my confidence completely. Life changing!',
      bg: '#00b3b3',
    },
    {
      review: 'I brought my elderly father here. They were incredibly gentle and patient with him.',
      bg: '#004c4c',
    },
  ];

  // Group into chunks of 3 per slide
  const grouped = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    grouped.push(testimonials.slice(i, i + 3));
  }

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      style={{
        backgroundColor: '#fff',
        fontFamily: '"Federo", sans-serif',
        padding: '4rem 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Left-aligned Header */}
        <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <p
            style={{
              fontFamily: 'Goldman, sans-serif',
              color: '#007779',
              letterSpacing: '1px',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
            }}
          >
            OUR REVIEWS
          </p>
          <h2
            style={{
              fontFamily: 'Federo, sans-serif',
              fontSize: '2.7rem',
              fontWeight: '400',
              letterSpacing: '1px',
              color: '#2e2e2e',
              margin: 0,
            }}
          >
            WHAT OUR CLIENTS SAY
          </h2>
        </div>
      </div>

      {/* Full-Width Slider */}
      <Slider {...settings}>
        {grouped.map((group, idx) => (
          <div key={idx}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
              }}
            >
              {group.map((t, i) => (
                <div
                  key={i}
                  style={{
                    flex: '1 1 33.3333%',
                    backgroundColor: t.bg,
                    color: '#fff',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>❝</div>
                    <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{t.review}</p>
                  </div>
                  <div
                    style={{
                      fontSize: '1.5rem',
                      color: '#fff',
                      marginTop: '1rem',
                      letterSpacing: '0.2rem',
                    }}
                  >
                    ★★★★★
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
