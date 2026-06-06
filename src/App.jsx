import React, { useState } from 'react';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import './App.css';

const makeImg = (label, color = 'e8f4f8', text = '333') =>
  `https://placehold.co/300x300/${color}/${text}?text=${encodeURIComponent(label)}`;

const dealsProducts = [
  { id: 1,  title: 'Samsung 65" 4K QLED Smart TV with Alexa Built-in', image: makeImg('Samsung TV','131921','febd69'), price: 54999, originalPrice: 89999, rating: 4.3, reviews: 2847, badge: 'Deal' },
  { id: 2,  title: 'boAt Rockerz 450 Bluetooth On-Ear Headphones with Mic', image: makeImg('boAt Headphones','1a1a2e','00d4ff'), price: 1299, originalPrice: 2990, rating: 4.1, reviews: 52310, badge: 'Deal' },
  { id: 3,  title: 'Apple AirPods Pro (2nd Generation) with MagSafe Case', image: makeImg('AirPods Pro','f5f5f5','333'), price: 19900, originalPrice: 26900, rating: 4.7, reviews: 14322, badge: 'Deal' },
  { id: 4,  title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Quart', image: makeImg('Instant Pot','c0392b','fff'), price: 6499, originalPrice: 9999, rating: 4.5, reviews: 9843, badge: null },
  { id: 5,  title: 'Nike Air Zoom Pegasus 40 Running Shoes for Men', image: makeImg('Nike Shoes','f39c12','fff'), price: 8995, originalPrice: 12995, rating: 4.4, reviews: 3120, badge: 'Deal' },
  { id: 6,  title: 'Kindle Paperwhite (16 GB) – 6.8" display and adjustable warm light', image: makeImg('Kindle','232f3e','febd69'), price: 13999, originalPrice: 17999, rating: 4.6, reviews: 7652, badge: null },
];

const electronicsProducts = [
  { id: 11, title: 'Apple iPhone 15 (128 GB) - Blue', image: makeImg('iPhone 15','1a1a2e','fff'), price: 69900, originalPrice: 79900, rating: 4.6, reviews: 18230, badge: null },
  { id: 12, title: 'OnePlus 12R 5G (Cool Blue, 8GB RAM, 128GB Storage)', image: makeImg('OnePlus 12R','0a3d62','00d4ff'), price: 39999, originalPrice: 42999, rating: 4.3, reviews: 6540, badge: null },
  { id: 13, title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones', image: makeImg('Sony WH-1000XM5','1c1c1c','fff'), price: 24990, originalPrice: 34990, rating: 4.5, reviews: 11200, badge: 'Deal' },
  { id: 14, title: 'Logitech MX Master 3S Wireless Performance Mouse', image: makeImg('MX Master 3S','2c3e50','fff'), price: 7995, originalPrice: 10995, rating: 4.7, reviews: 4230, badge: null },
  { id: 15, title: 'LG 24" Full HD IPS Monitor with AMD FreeSync', image: makeImg('LG Monitor','0d1117','00b4d8'), price: 9499, originalPrice: 14999, rating: 4.3, reviews: 3210, badge: 'Deal' },
  { id: 16, title: 'Anker 735 Charger (Nano II 65W) USB-C Fast Charger', image: makeImg('Anker Charger','2d3436','74b9ff'), price: 2999, originalPrice: 4999, rating: 4.6, reviews: 8740, badge: null },
];

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="app">
        <Navbar onCartClick={() => setCartOpen(true)} />
        <SubNavbar />
        <main className="main-content">
          <Hero />
          <div className="content-wrapper">
            <CategoryGrid />
            <ProductSection title="Today's Deals" products={dealsProducts} />
            <ProductSection title="Top Electronics" products={electronicsProducts} />
          </div>
        </main>
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default App;