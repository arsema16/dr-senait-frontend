import React, { useState, useEffect } from 'react';
import AppointmentBanner from './AppointmentBanner';

const FAQ = ({ showBanner = true }) => {
  const faqs = [
    {
      question: 'How often should I visit the dentist?',
      answer:
        'We recommend scheduling regular check-ups and cleanings every six months. However, some patients may need more frequent visits based on their oral health needs.',
    },
    {
      question: 'Do you offer emergency dental services?',
      answer:
        "Yes, we provide emergency dental care. Contact us immediately if you're experiencing pain, swelling, or trauma to your teeth or gums.",
    },
    {
      question: 'What cosmetic dental procedures do you offer?',
      answer:
        'Our cosmetic services include teeth whitening, veneers, bonding, and smile makeovers to enhance your appearance and confidence.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer:
        'Yes, professional teeth whitening is safe and effective when performed under the supervision of a qualified dental provider.',
    },
    {
      question: 'What payment options do you offer?',
      answer:
        'We accept major credit cards, insurance plans, and offer flexible payment plans to make dental care affordable for everyone.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#e1f5fe',
        paddingBottom: '4rem',
        paddingTop: '2rem',
        marginTop: '0rem',
        textAlign: 'center',
        opacity: animateIn ? 1 : 0,
        transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Only show banner and appointment info if showBanner is true */}
      {showBanner && (
        <>
          <div style={{ width: '100%', height: '60vh', overflow: 'hidden' }}>
            <img
              src="/images/slide1-bg.jpg"
              alt="FAQ Banner"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                display: 'block',
              }}
            />
          </div>

          <AppointmentBanner />
        </>
      )}

      {/* FAQ Heading */}
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '3rem 0 2rem',      fontFamily: '"Federo", sans-serif',
 }}>
        Frequently Asked <span style={{ color: '#00a79d' }}>Questions</span>
      </h2>

      {/* FAQ List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            style={{
              backgroundColor: '#f4f5f7',
              padding: '1.25rem 2rem',
              borderRadius: '12px',
              cursor: 'pointer',
              textAlign: 'center',
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div style={{ fontWeight: '600', fontSize: '1.05rem', color: '#333' }}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.95rem',
                  color: '#555',
                  lineHeight: '1.6',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
