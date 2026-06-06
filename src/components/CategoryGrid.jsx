import React from 'react';
import './CategoryGrid.css';

const categories = [
  { id: 1, title: 'Electronics',      bg: '131921', fg: 'febd69', icon: '📱' },
  { id: 2, title: 'Fashion',          bg: '6c3483', fg: 'f9e4ff', icon: '👗' },
  { id: 3, title: 'Home & Kitchen',   bg: '1e8449', fg: 'abebc6', icon: '🏠' },
  { id: 4, title: 'Books',            bg: '784212', fg: 'fad7a0', icon: '📚' },
  { id: 5, title: 'Sports & Outdoors',bg: '1a5276', fg: '85c1e9', icon: '⚽' },
  { id: 6, title: 'Toys & Games',     bg: 'c0392b', fg: 'fadbd8', icon: '🎮' },
  { id: 7, title: 'Health & Beauty',  bg: '117a65', fg: 'a2d9ce', icon: '💊' },
  { id: 8, title: 'Automotive',       bg: '212f3d', fg: 'aab7b8', icon: '🚗' },
];

const CategoryGrid = () => {
  return (
    <div className="category-section">
      <h2 className="category-heading">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            style={{ background: `#${cat.bg}` }}
            onClick={() => alert(`Browsing ${cat.title}...`)}
          >
            <div className="category-icon">{cat.icon}</div>
            <div className="category-overlay">
              <span className="category-title" style={{ color: `#${cat.fg}` }}>{cat.title}</span>
              <a href="#" className="category-link" onClick={(e) => e.preventDefault()}>Shop now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;