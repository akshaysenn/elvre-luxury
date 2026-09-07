import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import ProductCard from "./ProductCard";
import ProductQuickView from "./ProductQuickView";
import "./ProductSection.css";

const fallbackProducts = [
  {
    id: 1,
    name: "ELVRE Cane Jaggery Powder",
    description: "Pure, unrefined jaggery powder made from fresh sugarcane juice. No added chemicals, preservatives, or artificial colours.",
    price: "₹149",
    priceValue: 149,
    image: `${process.env.PUBLIC_URL}/assets/newproduct.png`,
    badge: "Bestseller",
    category: "Cane Jaggery",
    stock: 65,
    variants: [
      { label: "500g", price: "₹149" },
      { label: "1kg", price: "₹279" }
    ]
  },
  {
    id: 2,
    name: "ELVRE Traditional Jaggery Bowl",
    description: "Handcrafted golden jaggery powder and crystals, slow boiled in iron pans to preserve natural iron and mineral content.",
    price: "₹169",
    priceValue: 169,
    image: `${process.env.PUBLIC_URL}/assets/bowl.png`,
    badge: "Traditional",
    category: "Cane Jaggery",
    stock: 40,
    variants: [
      { label: "500g", price: "₹169" },
      { label: "1kg", price: "₹319" }
    ]
  },
  {
    id: 3,
    name: "ELVRE Botanical Heritage Pack",
    description: "Signature airtight heritage carton crafted for modern kitchens, keeping jaggery moisture-free and fresh everyday.",
    price: "₹299",
    priceValue: 299,
    image: `${process.env.PUBLIC_URL}/assets/productpacking.png`,
    badge: "Special Edition",
    category: "Gift & Heritage",
    stock: 25,
    variants: [
      { label: "500g x 2", price: "₹299" },
      { label: "1kg x 2", price: "₹549" }
    ]
  }
];

const ProductSection = () => {
  const [products, setProducts] = useState(fallbackProducts);
  const [activeFilter, setActiveFilter] = useState("all");
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("id", { ascending: true });

        if (!error && data && data.length > 0) {
          const formatted = data.map((p) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            price: `₹${p.price}`,
            priceValue: p.price,
            image: p.image || `${process.env.PUBLIC_URL}/assets/newproduct.png`,
            stock: p.stock ?? 50,
            category: p.category || "Cane Jaggery",
            badge: p.badge || "Pure Cane",
            variants: p.variants && p.variants.length > 0 ? p.variants : [
              { label: "500g", price: `₹${p.price}` },
              { label: "1kg", price: `₹${Math.round(p.price * 1.85)}` }
            ]
          }));
          setProducts(formatted);
          localStorage.setItem("elvreProducts", JSON.stringify(formatted));
        } else {
          localStorage.setItem("elvreProducts", JSON.stringify(fallbackProducts));
        }
      } catch (err) {
        console.error("Error loading products:", err);
        localStorage.setItem("elvreProducts", JSON.stringify(fallbackProducts));
      }
    };

    fetchProducts();
  }, []);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const filteredProducts = activeFilter === "all"
    ? products
    : products.filter(p => p.category.toLowerCase().includes(activeFilter));

  return (
    <section className="elvre-product-section" id="shop">
      <div className="elvre-container">
        {/* SECTION HEADER */}
        <div className="product-section-header" data-aos="fade-up">
          <div className="eyebrow-tag">Pure • Earthy • Crafted</div>
          <h2 className="section-heading-editorial">
            Meet Your <span>Everyday Jaggery</span>
          </h2>
          <p className="section-subtext">
            Simple ingredients. Thoughtful processing. Rich natural flavour.
            Traditionally crafted to bring authentic sweetness to your home.
          </p>

          {/* FILTER TABS */}
          <div className="product-filter-tabs">
            <button
              className={`filter-tab-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Jaggery
            </button>
            <button
              className={`filter-tab-btn ${activeFilter === "cane" ? "active" : ""}`}
              onClick={() => setActiveFilter("cane")}
            >
              Cane Powder
            </button>
            <button
              className={`filter-tab-btn ${activeFilter === "gift" ? "active" : ""}`}
              onClick={() => setActiveFilter("gift")}
            >
              Heritage Packs
            </button>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="product-cards-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={handleOpenQuickView}
            />
          ))}
        </div>

        {/* BOTTOM PROMISE BANNER */}
        <div className="product-section-bottom-note" data-aos="fade-up">
          <div className="bottom-note-content">
            <span className="sparkle-icon">✦</span>
            <span>Free shipping on all pan-India orders above ₹499. Freshly packed directly from harvest batches.</span>
            <Link to="/products" className="view-all-link">
              Explore Full Pantry →
            </Link>
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </section>
  );
};

export default ProductSection;
