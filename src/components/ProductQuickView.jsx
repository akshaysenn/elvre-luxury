import React, { useState, useEffect } from "react";
import { FaTimes, FaMinus, FaPlus, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./ProductQuickView.css";

const ProductQuickView = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      if (product.variants && product.variants.length > 0) {
        setSelectedVariant(product.variants[0]);
      } else {
        setSelectedVariant(null);
      }
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

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

  if (!isOpen || !product) return null;

  const displayPrice = selectedVariant ? selectedVariant.price : product.price;
  const displayPriceValue = selectedVariant
    ? parseInt(String(selectedVariant.price).replace(/[^0-9]/g, ""), 10) || product.priceValue
    : product.priceValue;

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        price: displayPrice,
        priceValue: displayPriceValue,
        variant: selectedVariant ? selectedVariant.label : "Standard"
      },
      quantity
    );
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div
        className="quickview-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quickview-title"
      >
        <button
          className="quickview-close-btn"
          onClick={onClose}
          aria-label="Close product quick view"
        >
          <FaTimes />
        </button>

        <div className="quickview-layout">
          {/* IMAGE SIDE */}
          <div className="quickview-image-pane">
            <div className="quickview-image-frame">
              <img
                src={product.image}
                alt={product.name}
                className="quickview-img"
              />
            </div>
            <div className="quickview-purity-note">
              <span>🌿 100% Cane Jaggery • Farmer Handcrafted</span>
            </div>
          </div>

          {/* DETAILS SIDE */}
          <div className="quickview-details-pane">
            <div className="quickview-badge-row">
              {product.badge && (
                <span className="quickview-badge">{product.badge}</span>
              )}
              <span className="quickview-stock-status in-stock">
                ✓ Available in Stock
              </span>
            </div>

            <h2 id="quickview-title" className="quickview-title font-serif">
              {product.name}
            </h2>

            <div className="quickview-price-tag">
              <span className="price-num">{displayPrice}</span>
              <span className="price-tax">inclusive of all taxes</span>
            </div>

            <p className="quickview-desc">
              {product.description ||
                "Authentic Indian jaggery powder traditionally boiled in open iron pans from fresh sugarcane juice. No preservatives, synthetic colorants, or chemical bleaches."}
            </p>

            {/* VARIANT SELECTOR */}
            {product.variants && product.variants.length > 0 && (
              <div className="quickview-options-block">
                <span className="options-label">Select Pack Size:</span>
                <div className="options-grid">
                  {product.variants.map((v, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`option-btn ${selectedVariant?.label === v.label ? "active" : ""}`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      <span className="v-label">{v.label}</span>
                      <span className="v-price">{v.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY & ADD TO CART */}
            <div className="quickview-action-row">
              <div className="quickview-qty-picker">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>
              </div>

              <button
                type="button"
                className={`quickview-add-btn ${isAdded ? "added" : ""}`}
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <>
                    <FaCheck /> Added to Cart
                  </>
                ) : (
                  <>
                    <FaShoppingCart /> Add to Cart — ₹
                    {(displayPriceValue || 149) * quantity}
                  </>
                )}
              </button>
            </div>

            {/* PRODUCT ATTRIBUTES */}
            <div className="quickview-specs-list">
              <div className="spec-row">
                <span className="spec-name">Single Ingredient</span>
                <span className="spec-value">Fresh Sugarcane Juice</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Processing</span>
                <span className="spec-value">Traditional Iron Vessel Boiling</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Shelf Life</span>
                <span className="spec-value">12 Months (Cool, dry place)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
