import React from 'react';
import { useCart } from './CartContext';
import './CartDrawer.css';

const CartDrawer = ({ open, onClose }) => {
  const { cartItems, removeFromCart, totalItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className={`cart-overlay ${open ? 'visible' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>Shopping Cart ({totalItems})</h2>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span>🛒</span>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">₹{item.price.toLocaleString()} × {item.qty}</p>
                  <p className="cart-item-subtotal">= ₹{(item.price * item.qty).toLocaleString()}</p>
                  <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <strong>₹{total.toLocaleString()}</strong>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;