import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    gradient: 'linear-gradient(135deg, #131921 0%, #232f3e 50%, #37475a 100%)',
    headline: '🛍️ Great Indian Sale',
    sub: 'Up to 70% off on Electronics, Fashion & More',
    cta: 'Shop Now',
    accent: '#febd69',
  },
  {
    id: 2,
    gradient: 'linear-gradient(135deg, #0a3d62 0%, #1a5276 50%, #2471a3 100%)',
    headline: '📱 New Arrivals',
    sub: 'Latest Smartphones & Gadgets — Just Launched',
    cta: 'Explore',
    accent: '#00d4ff',
  },
  {
    id: 3,
    gradient: 'linear-gradient(135deg, #4a0e0e 0%, #922b21 50%, #c0392b 100%)',
    headline: '⚡ Lightning Deals',
    sub: 'Hurry! Limited-time offers end in hours',
    cta: 'View Deals',
    accent: '#f0c14b',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className="hero" style={{ background: slide.gradient }}>
      <div className="hero-content">
        <h1 className="hero-headline" style={{ color: slide.accent }}>{slide.headline}</h1>
        <p className="hero-sub">{slide.sub}</p>
        <button className="hero-cta" style={{ background: slide.accent }}>
          {slide.cta} →
        </button>
      </div>

      <button className="hero-btn hero-btn-left" onClick={prev}>&#8249;</button>
      <button className="hero-btn hero-btn-right" onClick={next}>&#8250;</button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <div className="hero-fade" />
    </div>
  );
};

export default Hero;