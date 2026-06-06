import React from 'react';
import './SubNavbar.css';

const links = [
  'All', 'Today\'s Deals', 'Customer Service', 'Registry', 'Gift Cards',
  'Sell', 'Electronics', 'Fashion', 'Books', 'Home & Garden', 'Toys', 'Sports'
];

const SubNavbar = () => {
  return (
    <div className="sub-navbar">
      <div className="sub-nav-hamburger">
        <span></span><span></span><span></span>
        <strong>All</strong>
      </div>
      <div className="sub-nav-links">
        {links.map((link) => (
          <a key={link} className="sub-nav-link" href="#">{link}</a>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;