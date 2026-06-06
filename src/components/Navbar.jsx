import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Navbar.css';

const Navbar = ({ onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="logo-img"
        />
      </div>

      {/* Deliver to */}
      <div className="nav-deliver">
        <span className="deliver-label">Deliver to</span>
        <div className="deliver-location">🇮🇳 India</div>
      </div>

      {/* Search Bar */}
      <div className="nav-search">
        <select className="search-category">
          <option>All</option>
          <option>Electronics</option>
          <option>Books</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search Amazon.in"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && alert(`Searching for: "${searchQuery}"`)}
        />
        <button className="search-btn" onClick={() => searchQuery && alert(`Searching for: "${searchQuery}"`)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>

      {/* Language */}
      <div className="nav-flag">
        <img src="https://flagcdn.com/w20/in.png" alt="IN" />
        <span>EN</span>
        <span className="caret">▾</span>
      </div>

      {/* Account */}
      <div className="nav-item" onClick={() => alert('Sign in feature coming soon!')}>
        <span className="nav-line1">Hello, sign in</span>
        <span className="nav-line2">Account &amp; Lists ▾</span>
      </div>

      {/* Returns */}
      <div className="nav-item" onClick={() => alert('No orders yet!')}>
        <span className="nav-line1">Returns</span>
        <span className="nav-line2">&amp; Orders</span>
      </div>

      {/* Cart */}
      <div className="nav-cart" onClick={onCartClick}>
        <div className="cart-icon-wrap">
          <span className="cart-count">{totalItems}</span>
          <svg viewBox="0 0 576 512" fill="currentColor" width="34" height="34">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
          </svg>
        </div>
        <span className="nav-line2">Cart</span>
      </div>
    </nav>
  );
};

export default Navbar;