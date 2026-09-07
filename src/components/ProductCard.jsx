import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaEye, FaCheck } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );
  const [isAdded, setIsAdded] = useState(false);

  const displayPrice = selectedVariant ? selectedVariant.price : product.price;
  const displayPriceValue = selectedVariant
    ? parseInt(String(selectedVariant.price).replace(/[^0-9]/g, ""), 10) || product.priceValue
    : product.priceValue;

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    addToCart({
      ...product,
      price: displayPrice,
      priceValue: displayPriceValue,
      variant: selectedVariant ? selectedVariant.label : "Standard"
    }, 1);

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="elvre-product-card" data-cursor="VIEW">
      {/* BADGE */}
      {product.badge && (
        <span className={`product-badge-pill badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}`}>
          {product.badge}
        </span>
      )}

      {/* QUICK VIEW TRIGGER */}
      <button
        type="button"
        className="card-quickview-btn"
        onClick={(e) => {
          e.stopPropagation();
          onQuickView(product);
        }}
        aria-label={`Quick view ${product.name}`}
        title="Quick View"
      >
        <FaEye />
      </button>

      {/* IMAGE WRAPPER */}
      <Link to={`/product/${product.id}`} className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
      </Link>

      {/* CARD CONTENT */}
      <div className="product-card-body">
        <div className="product-category-tag">
          {product.category || "Cane Jaggery"}
        </div>

        <h3 className="product-card-title">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        <p className="product-card-desc">
          {product.description}
        </p>

        {/* VARIANT SELECTOR */}
        {product.variants && product.variants.length > 0 && (
          <div className="product-variant-pills">
            {product.variants.map((variant, idx) => (
              <button
                key={idx}
                type="button"
                className={`variant-pill ${selectedVariant?.label === variant.label ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVariant(variant);
                }}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}

        {/* PRICE & ACTION ROW */}
        <div className="product-card-footer">
          <div className="product-price-block">
            <span className="current-price">{displayPrice}</span>
            <span className="price-tax-label">incl. taxes</span>
          </div>

          <button
            type="button"
            className={`card-add-cart-btn ${isAdded ? "added" : ""}`}
            onClick={handleAddToCartClick}
            disabled={product.stock === 0}
            data-cursor="ADD"
          >
            {isAdded ? (
              <>
                <FaCheck /> Added
              </>
            ) : (
              <>
                <FaShoppingCart /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
