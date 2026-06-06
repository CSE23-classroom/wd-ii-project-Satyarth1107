import React, { useState } from 'react';
import { useCart } from './CartContext';
import './ProductCard.css';

const ProductCard = ({ id, title, image, price, originalPrice, rating, reviews, badge }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const stars = Math.round(rating);

  const handleAddToCart = () => {
    addToCart({ id, title, image, price, originalPrice, rating, reviews, badge });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      {badge && <span className="product-badge">{badge}</span>}
      <div className="product-img-wrap">
        <img
          src={image}
          alt={title}
          className="product-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/200x200/f0f0f0/999?text=${encodeURIComponent(title.split(' ').slice(0,2).join(' '))}`;
          }}
        />
      </div>
      <div className="product-info">
        <p className="product-title">{title}</p>
        <div className="product-rating">
          <span className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < stars ? 'star filled' : 'star'}>★</span>
            ))}
          </span>
          <span className="reviews">({reviews.toLocaleString()})</span>
        </div>
        <div className="product-price">
          <span className="price">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <>
              <span className="original-price">₹{originalPrice.toLocaleString()}</span>
              <span className="discount">{Math.round((1 - price / originalPrice) * 100)}% off</span>
            </>
          )}
        </div>
        <p className="free-delivery">FREE Delivery by <strong>Amazon</strong></p>
        <button
          className={`add-to-cart-btn ${added ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {added ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;