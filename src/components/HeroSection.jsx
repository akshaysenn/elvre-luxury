import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => {
      if (heroEl) {
        heroEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Subtle 3D tilt values
  const tiltX = mousePos.y * -14;
  const tiltY = mousePos.x * 16;
  const foliageX = mousePos.x * -24;
  const foliageY = mousePos.y * -12;
  const glowX = 50 + mousePos.x * 20;
  const glowY = 40 + mousePos.y * 20;

  return (
    <section className="elvre-hero-viewport" ref={heroRef} id="hero">
      {/* ATMOSPHERIC BACKGROUND LAYERS */}
      <div
        className="hero-ambient-glow"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(229, 184, 118, 0.35) 0%, rgba(200, 157, 92, 0.12) 40%, rgba(250, 246, 240, 0) 70%)`
        }}
      />
      <div className="hero-pattern-texture" />

      {/* FLOATING SUBTLE PARTICLES */}
      <div className="hero-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
      </div>

      <div className="elvre-hero-container">
        {/* LEFT COLUMN: EDITORIAL MESSAGING */}
        <div className="hero-text-column" data-aos="fade-up" data-aos-duration="900">
          <div className="hero-badge-pill">
            <span className="badge-spark">✦</span>
            <span>Ancient Ingredient. Modern Experience.</span>
          </div>

          <h1 className="hero-headline font-serif">
            Real Sugarcane.<br />
            Real Jaggery.<br />
            <span>Nothing Extra.</span>
          </h1>

          <p className="hero-subheading">
            Traditionally crafted jaggery powder made from fresh sugarcane juice,
            retaining its raw earthy caramel depth and vital natural minerals.
            Brought to modern kitchens with complete transparency.
          </p>

          <div className="hero-cta-group">
            <Link
              to="/products"
              className="btn-luxury-primary hero-btn-primary"
              data-cursor="SHOP"
            >
              <span>Shop Jaggery</span>
              <FaArrowRight className="btn-arrow" />
            </Link>

            <button
              onClick={() => scrollToSection("our-story")}
              className="btn-luxury-secondary hero-btn-secondary"
              data-cursor="STORY"
            >
              Discover Our Story
            </button>
          </div>

          {/* INLINE TRUST PILL */}
          <div className="hero-inline-trust">
            <div className="trust-pill-item">
              <span className="trust-bullet">🌱</span>
              <span>100% Unrefined</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-pill-item">
              <span className="trust-bullet">☀️</span>
              <span>Direct Farmer Sourced</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-pill-item">
              <span className="trust-bullet">⚡</span>
              <span>Chemical-Free</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D PRODUCT SHOWCASE */}
        <div className="hero-visual-column">
          <div
            className="hero-3d-stage"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePos({ x: 0, y: 0 });
            }}
          >
            {/* BACKGROUND SUNBURST EMBLEM */}
            <div className="hero-emblem-halo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Whitesubmark1.png`}
                alt="ELVRE Emblem"
                className="halo-submark"
              />
            </div>

            {/* LAYER 1: BACK FOLIAGE / CANE LAYER */}
            <div
              className="hero-layer hero-cane-back"
              style={{
                transform: `translate3d(${foliageX * 0.4}px, ${foliageY * 0.4}px, -20px)`,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/grass1.png`}
                alt="Fresh sugarcane foliage"
                className="cane-foliage-img"
              />
            </div>

            {/* LAYER 2: MAIN PRODUCT 3D PACKAGE */}
            <div
              className="hero-layer hero-product-pack"
              style={{
                transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(30px)`,
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s var(--ease-editorial)",
              }}
              data-cursor="ELVRE"
            >
              <div className="product-pack-glow" />
              <img
                src={`${process.env.PUBLIC_URL}/assets/newproduct.png`}
                alt="ELVRE Cane Jaggery Powder Packaging"
                className="hero-product-img"
                loading="eager"
              />
              <div className="pack-pedestal-shadow" />
            </div>

            {/* LAYER 3: ACCENT BOWL OF GOLDEN JAGGERY POWDER */}
            <div
              className="hero-layer hero-bowl-accent"
              style={{
                transform: `translate3d(${foliageX * -0.7}px, ${foliageY * -0.7}px, 60px)`,
                transition: isHovered ? "transform 0.12s ease-out" : "transform 0.6s var(--ease-editorial)",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/bowl.png`}
                alt="Pure golden jaggery powder and cubes in ceramic bowl"
                className="hero-bowl-img"
              />
            </div>

            {/* FLOATING PRODUCT TAG */}
            <div className="hero-floating-card">
              <span className="floating-card-title">Cane Jaggery Powder</span>
              <span className="floating-card-sub">Handcrafted by Indian Farmers</span>
              <div className="floating-card-badge">
                <span>Natural Sweetener</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTLE BOTTOM SCROLL INDICATOR */}
      <div className="hero-scroll-prompt" onClick={() => scrollToSection("trust-strip")}>
        <span className="scroll-text">Explore Craft</span>
        <div className="scroll-line">
          <div className="scroll-line-fill" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;