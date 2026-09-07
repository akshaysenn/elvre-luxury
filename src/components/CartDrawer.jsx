import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaMinus, FaPlus, FaTrash, FaShoppingBag, FaLock } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import "./CartDrawer.css";

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    shipping,
    total
  } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleCheckout = () => {
    onClose();
    const user = localStorage.getItem("currentUser");
    if (!user) {
      localStorage.setItem("redirectAfterLogin", "/checkout");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  const freeShippingThreshold = 499;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`cart-drawer-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* DRAWER */}
      <aside
        className={`cart-drawer-sheet ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart Drawer"
      >
        {/* HEADER */}
        <div className="cart-drawer-header">
          <div className="header-title-block">
            <FaShoppingBag className="cart-header-icon" />
            <h3 className="font-serif">Your Cart</h3>
            <span className="cart-item-count">
              ({cartItems.reduce((acc, it) => acc + (it.quantity || 1), 0)} items)
            </span>
          </div>
          <button className="cart-drawer-close-btn" onClick={onClose} aria-label="Close cart">
            <FaTimes />
          </button>
        </div>

        {/* FREE SHIPPING PROGRESS BAR */}
        <div className="cart-free-shipping-bar">
          <div className="shipping-text-row">
            {amountToFreeShipping > 0 ? (
              <span>
                Add <strong>₹{amountToFreeShipping}</strong> more for <strong>FREE Pan-India Delivery</strong>
              </span>
            ) : (
              <span className="qualified-text">
                🎉 Congratulations! You have qualified for <strong>FREE Delivery</strong>
              </span>
            )}
          </div>
          <div className="shipping-track">
            <div
              className="shipping-progress"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* BODY */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <span className="empty-cart-emoji">🍯</span>
              <h4 className="font-serif">Your cart is currently empty</h4>
              <p>Discover the honest sweetness of unrefined cane jaggery.</p>
              <button
                type="button"
                className="btn-luxury-primary"
                onClick={() => {
                  onClose();
                  navigate("/products");
                }}
              >
                Shop Collection →
              </button>
            </div>
          ) : (
            <div className="cart-items-scroll-list">
              {cartItems.map((item) => {
                const price = item.priceValue || 0;
                const qty = item.quantity || 1;
                return (
                  <div key={item.id} className="cart-item-row">
                    <div className="cart-item-thumb">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="cart-item-info">
                      <div className="item-title-row">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <button
                          type="button"
                          className="cart-item-remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <FaTrash />
                        </button>
                      </div>

                      {item.variant && (
                        <span className="cart-item-variant">Size: {item.variant}</span>
                      )}

                      <div className="cart-item-bottom-row">
                        <div className="cart-qty-toggle">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, qty - 1)}
                            disabled={qty <= 1}
                            aria-label="Decrease quantity"
                          >
                            <FaMinus />
                          </button>
                          <span>{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, qty + 1)}
                            aria-label="Increase quantity"
                          >
                            <FaPlus />
                          </button>
                        </div>

                        <div className="cart-item-price-sum">
                          <span className="cart-item-unit">₹{price} ea.</span>
                          <span className="cart-item-subtotal">₹{price * qty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* FOOTER SUMMARY */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-line">
              <span>Subtotal</span>
              <span className="summary-val">₹{subtotal}</span>
            </div>
            <div className="cart-summary-line">
              <span>Estimated Shipping</span>
              <span className="summary-val">
                {shipping === 0 ? <strong className="free-tag">FREE</strong> : `₹${shipping}`}
              </span>
            </div>
            <div className="cart-summary-line cart-total-line">
              <span>Total</span>
              <span className="summary-val total-price">₹{total}</span>
            </div>

            <button
              type="button"
              className="cart-checkout-cta"
              onClick={handleCheckout}
            >
              <span>Proceed to Checkout</span>
              <FaLock className="lock-icon" />
            </button>

            <button
              type="button"
              className="cart-continue-btn"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;