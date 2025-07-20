import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const imagePairs = [
  { before: '/images/gallery/1a.jpg', after: '/images/gallery/1b.jpg' },
  { before: '/images/gallery/2a.jpg', after: '/images/gallery/2b.jpg' },
  { before: '/images/gallery/3a.jpg', after: '/images/gallery/3b.jpg' },
  { before: '/images/gallery/4a.jpg', after: '/images/gallery/4b.jpg' },
  { before: '/images/gallery/5a.jpg', after: '/images/gallery/5b.jpg' },
  { before: '/images/gallery/6a.jpg', after: '/images/gallery/6b.jpg' },
  { before: '/images/gallery/7a.jpg', after: '/images/gallery/7b.jpg' },
  { before: '/images/gallery/8a.jpg', after: '/images/gallery/8b.jpg' },
  { before: '/images/gallery/9a.jpg', after: '/images/gallery/9b.jpg' },
  { before: '/images/gallery/10a.jpg', after: '/images/gallery/10b.jpg' },
];

const Gallery = () => {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((e.clientX || e.touches[0].clientX) - rect.left) / rect.width * 100;
    pos = Math.min(Math.max(pos, 0), 100);
    setSliderPos(pos);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + imagePairs.length) % imagePairs.length);
    setSliderPos(50);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imagePairs.length);
    setSliderPos(50);
  };

  return (
    <>
      {location.pathname === '/gallery' && (
        <div
          style={{
            backgroundImage: 'url("/images/slide1-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '100px 20px 60px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#004c4c',
            }}
          >
            Smile Transformations Gallery
          </h2>
        </div>
      )}

      <div style={styles.container}>
        <div
          style={styles.sliderContainer}
          ref={containerRef}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchMove={onDrag}
          onTouchEnd={stopDrag}
        >
          {/* Before Image */}
          <div
            style={{
              ...styles.imageClip,
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0% 100%)`,
              filter: 'grayscale(100%)',
              zIndex: 2,
            }}
          >
            <img
              src={imagePairs[index].before}
              alt="Before"
              style={styles.image}
              draggable={false}
            />
          </div>

          {/* After Image */}
          <div
            style={{
              ...styles.imageClip,
              clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
              zIndex: 1,
            }}
          >
            <img
              src={imagePairs[index].after}
              alt="After"
              style={styles.image}
              draggable={false}
            />
          </div>

          {/* Slider Handle */}
          <div
            style={{ ...styles.sliderHandle, left: `${sliderPos}%` }}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            <div style={styles.handleLine} />
            <div style={styles.handleCircle} />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={styles.controls}>
          <button onClick={handlePrev} style={styles.button}>
            ← Previous
          </button>
          <button onClick={handleNext} style={styles.buttonPrimary}>
            Next →
          </button>
        </div>

        {/* Dots */}
        <div style={styles.dots}>
          {imagePairs.map((_, i) => (
            <span
              key={i}
              style={{
                ...styles.dot,
                backgroundColor: i === index ? '#00a79d' : '#ccc',
              }}
              onClick={() => {
                setIndex(i);
                setSliderPos(50);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    maxWidth: '720px',
    margin: 'auto',
    userSelect: 'none',
  },
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '400px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
    cursor: 'ew-resize',
  },
  imageClip: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    userSelect: 'none',
  },
  sliderHandle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: 'transparent',
    cursor: 'ew-resize',
    zIndex: 3,
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleLine: {
    width: '2px',
    height: '100%',
    backgroundColor: '#00a79d',
    boxShadow: '0 0 6px #00a79d',
  },
  handleCircle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '24px',
    height: '24px',
    backgroundColor: '#00a79d',
    borderRadius: '50%',
    boxShadow: '0 0 10px #00a79d',
    transform: 'translate(-50%, -50%)',
  },
  controls: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.7rem 1.4rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#ddd',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  buttonPrimary: {
    padding: '0.7rem 1.4rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#00a79d',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  dots: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.6rem',
  },
  dot: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Gallery;
