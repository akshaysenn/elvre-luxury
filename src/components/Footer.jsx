import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaFacebookF, FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const Footer = () => {
  const formRef = useRef();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    emailjs
      .send(
        "service_suvhk3j",
        "template_2bpgw82",
        {
          email: newsletterEmail,
          message: "New Newsletter Subscriber: " + newsletterEmail
        },
        "zPChkrLTWlnnSFFtp"
      )
      .then(
        () => {
          setNewsletterStatus("✓ Welcome to the ELVRE family!");
          setNewsletterEmail("");
          setTimeout(() => setNewsletterStatus(""), 4000);
        },
        () => {
          setNewsletterStatus("✓ Thank you for subscribing!");
          setNewsletterEmail("");
          setTimeout(() => setNewsletterStatus(""), 4000);
        }
      );
  };

  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="elvre-luxury-footer">
      <div className="elvre-container">
        {/* TOP 4-COLUMN ROW */}
        <div className="footer-columns-grid">
          {/* COL 1: BRAND IDENTITY & PHILOSOPHY */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-brand-logo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Blackelvre.png`}
                alt="ELVRE - Nature's Sweet Flow"
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-brand-statement">
              Ancient ingredient. Modern experience. We partner with trusted Indian farmers to bring
              pure, chemical-free cane jaggery powder to modern dining tables.
            </p>
            <div className="footer-social-links">
              <a
                href="https://wa.me/917906396629"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/elvre.farmessence/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/elvre-enterprised-private-limited/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579641740801"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* COL 2: SHOP */}
          <div className="footer-col-nav">
            <h4 className="footer-col-heading">Shop</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/products">Cane Jaggery Powder</Link>
              </li>
              <li>
                <Link to="/products">Festive Heritage Packs</Link>
              </li>
              <li>
                <Link to="/cart">Cart &amp; Checkout</Link>
              </li>
              <li>
                <Link to="/wishlist">Your Wishlist</Link>
              </li>
            </ul>
          </div>

          {/* COL 3: DISCOVER */}
          <div className="footer-col-nav">
            <h4 className="footer-col-heading">Discover</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => scrollToAnchor("our-story")}>
                  Our Story
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToAnchor("how-it-is-made")}>
                  How It's Made
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToAnchor("why-jaggery")}>
                  Why Jaggery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToAnchor("recipes")}>
                  Kitchen Recipes
                </button>
              </li>
              <li>
                <Link to="/contact">Contact &amp; Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* COL 4: NEWSLETTER & DISPATCH */}
          <div className="footer-col-newsletter">
            <h4 className="footer-col-heading">The ELVRE Journal</h4>
            <p className="newsletter-copy">
              Stories, seasonal recipes, and mindful pantry inspiration delivered softly to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form-wrap" ref={formRef}>
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </form>
            {newsletterStatus && <p className="newsletter-alert">{newsletterStatus}</p>}

            <div className="footer-hq-note">
              <span>📍 Elvre Enterprises Pvt. Ltd.</span>
              <span>Haridwar, Uttarakhand, India 249407</span>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL ROW */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Elvre Enterprises Private Limited. All Rights Reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/terms">Terms &amp; Conditions</Link>
            <span className="legal-dot">•</span>
            <Link to="/privacy">Privacy Policy</Link>
            <span className="legal-dot">•</span>
            <Link to="/contact">Help &amp; Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;