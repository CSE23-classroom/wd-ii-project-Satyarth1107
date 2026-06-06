import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    rowRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' });
  };

  return (
    <section className="product-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <a href="#" className="see-all">See all deals »</a>
      </div>
      <div className="section-scroll-wrap">
        <button className="scroll-btn scroll-left" onClick={() => scroll(-1)}>&#8249;</button>
        <div className="product-row" ref={rowRef}>
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
        <button className="scroll-btn scroll-right" onClick={() => scroll(1)}>&#8250;</button>
      </div>
    </section>
  );
};

export default ProductSection;