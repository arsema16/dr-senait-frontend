import React, { useState, useEffect } from 'react';
import AppointmentBanner from './AppointmentBanner';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

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
      question: 'How often should I get a dental cleaning?',
      answer:
        'Dental cleanings are typically recommended every six months to maintain optimal oral hygiene and prevent cavities or gum disease.',
    },
    {
      question: 'Do you treat children or offer family dentistry?',
      answer:
        'Absolutely! We provide dental care for patients of all ages, making us a perfect choice for families.',
    },
    {
      question: 'What payment options do you offer?',
      answer:
        'We accept major credit cards, insurance plans, and offer flexible payment plans to make dental care affordable for everyone.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      style={{
        fontFamily: '"Segoe UI", sans-serif',
        backgroundColor: '#ffffff',
        paddingBottom: '4rem',
        paddingTop: '2rem',
        textAlign: 'center',
        opacity: animateIn ? 1 : 0,
        transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
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

      <h2
        style={{
          fontSize: '3rem',
          fontFamily: '"Federo", sans-serif',
          margin: '3rem 0 2rem',
          fontWeight: '300',
          color:'#595858ff'
        }}
      >
        FAQ<span style={{ color: '#007e7e',fontWeight: '300',          fontSize: '2.8rem',

 }}>s</span>
      </h2>

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
            style={{
              backgroundColor: '#007e7e',
              color: '#ffffff',
              borderRadius: '6px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                padding: '1.2rem 2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              <span>{faq.question}</span>
              <span style={{ fontSize: '1.25rem' }}>
                {activeIndex === index ? <IoIosRemove /> : <IoIosAdd />}
              </span>
            </div>
            {activeIndex === index && (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  color: '#333',
                  padding: '1rem 2rem',
                  fontSize: '0.95rem',
                  textAlign: 'left',
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
