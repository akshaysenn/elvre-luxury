import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaShoppingCart, FaBars, FaTimes, FaUser,
  FaSignOutAlt, FaListAlt, FaHeart, FaSearch
} from "react-icons/fa";
import CartDrawer from "./CartDrawer";
import "./Navbar.css";

const Navbar = ({ onOpenHelp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    loadCartCount();
    checkLoginStatus();
    window.addEventListener("storage", loadCartCount);
    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", loadCartCount);
      window.removeEventListener("storage", checkLoginStatus);
      document.body.classList.remove("mobile-nav-lock");
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const loadCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    setCartCount(count);
  };

  const checkLoginStatus = () => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      try {
        const parsed = JSON.parse(user);
        setIsLoggedIn(true);
        setUserName(parsed.name || parsed.email || "Member");
      } catch {
        setIsLoggedIn(true);
        setUserName("Member");
      }
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));
    closeMenu();
    navigate("/");
  };

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      document.body.classList.add("mobile-nav-lock");
    } else {
      document.body.classList.remove("mobile-nav-lock");
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("mobile-nav-lock");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      closeMenu();
    }
  };

  const handleNavClick = (anchorId) => {
    closeMenu();
    if (location.pathname === "/") {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${anchorId}`);
    }
  };

  return (
    <>
      <header className={`elvre-navbar-wrap ${isScrolled ? "scrolled" : ""}`}>
        <div className="elvre-nav-inner">
          {/* LOGO */}
          <Link to="/" className="elvre-nav-logo" onClick={closeMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Blackelvre.png`}
              alt="ELVRE - Nature's Sweet Flow"
              className="logo-mark"
            />
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="elvre-desktop-nav" aria-label="Main Navigation">
            <Link to="/products" className="nav-item-link" data-cursor="SHOP">
              Shop
            </Link>
            <button
              onClick={() => handleNavClick("our-story")}
              className="nav-item-link"
              data-cursor="EXPLORE"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick("how-it-is-made")}
              className="nav-item-link"
              data-cursor="PROCESS"
            >
              How It's Made
            </button>
            <button
              onClick={() => handleNavClick("why-jaggery")}
              className="nav-item-link"
              data-cursor="READ"
            >
              Why Jaggery
            </button>
            <button
              onClick={() => handleNavClick("recipes")}
              className="nav-item-link"
              data-cursor="RECIPES"
            >
              Recipes
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="nav-item-link"
              data-cursor="TALK"
            >
              Contact
            </button>
          </nav>

          {/* DESKTOP UTILITIES */}
          <div className="elvre-nav-actions">
            {/* Search Trigger */}
            <button
              className="nav-action-btn search-trigger"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search products"
              title="Search"
            >
              <FaSearch />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="nav-action-btn wishlist-btn"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <FaHeart />
            </Link>

            {/* User Profile / Login */}
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="nav-action-btn user-btn logged-in"
                aria-label="Account"
                title={userName}
              >
                <FaUser />
              </Link>
            ) : (
              <Link
                to="/login"
                className="nav-login-link"
                title="Account Login"
              >
                Login
              </Link>
            )}

            {/* Cart Trigger */}
            <button
              className="nav-action-btn cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart with ${cartCount} items`}
              data-cursor="CART"
            >
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Primary CTA */}
            <Link
              to="/products"
              className="nav-cta-btn"
              data-cursor="BUY"
            >
              Shop Now
              <span className="arrow-glyph">→</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="mobile-toggle-btn"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="elvre-search-overlay" onClick={() => setIsSearchOpen(false)}>
          <div
            className="search-overlay-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="search-overlay-close"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <FaTimes />
            </button>
            <form onSubmit={handleSearchSubmit} className="search-overlay-form">
              <span className="search-eyebrow">Search ELVRE</span>
              <div className="search-input-wrap">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="e.g. Cane Jaggery, 500g, Organic, Tea..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-overlay-input"
                />
                <button type="submit" className="search-overlay-submit">
                  Search →
                </button>
              </div>
            </form>
            <div className="search-overlay-quicklinks">
              <span>Popular:</span>
              <button
                type="button"
                onClick={() => {
                  navigate("/products?search=cane");
                  setIsSearchOpen(false);
                }}
              >
                Cane Jaggery Powder
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/products?search=powder");
                  setIsSearchOpen(false);
                }}
              >
                100% Unrefined
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/products?search=gift");
                  setIsSearchOpen(false);
                }}
              >
                Gift Packs
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULL-SCREEN MOBILE NAVIGATION */}
      <div className={`elvre-mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Blackelvre.png`}
            alt="ELVRE"
            className="mobile-logo"
          />
          <button
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <Link to="/products" onClick={closeMenu} className="mobile-nav-link">
            <span>01</span> Shop Collection
          </Link>
          <button
            onClick={() => handleNavClick("our-story")}
            className="mobile-nav-link"
          >
            <span>02</span> Our Story
          </button>
          <button
            onClick={() => handleNavClick("how-it-is-made")}
            className="mobile-nav-link"
          >
            <span>03</span> How It's Made
          </button>
          <button
            onClick={() => handleNavClick("why-jaggery")}
            className="mobile-nav-link"
          >
            <span>04</span> Why Jaggery
          </button>
          <button
            onClick={() => handleNavClick("recipes")}
            className="mobile-nav-link"
          >
            <span>05</span> Kitchen Recipes
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="mobile-nav-link"
          >
            <span>06</span> Contact Us
          </button>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-user-row">
            {isLoggedIn ? (
              <div className="user-pill">
                <span>Hello, {userName}</span>
                <Link to="/my-orders" onClick={closeMenu} className="sub-link">
                  <FaListAlt /> Orders
                </Link>
                <button onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt /> Log out
                </button>
              </div>
            ) : (
              <div className="guest-row">
                <Link to="/login" onClick={closeMenu} className="mobile-login-btn">
                  Sign In / Register
                </Link>
              </div>
            )}
          </div>

          <div className="mobile-bottom-links">
            <Link to="/terms" onClick={closeMenu}>Terms</Link>
            <span>•</span>
            <Link to="/privacy" onClick={closeMenu}>Privacy</Link>
            <span>•</span>
            <a href="mailto:elvreofficals@gmail.com">elvreofficals@gmail.com</a>
          </div>
        </div>
      </div>

      {/* CART DRAWER */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;