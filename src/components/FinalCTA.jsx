import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="elvre-final-cta-section">
      <div className="elvre-container">
        <div className="final-cta-card" data-aos="fade-up">
          <div className="final-cta-glow" />

          <div className="final-cta-content">
            <div className="eyebrow-tag cta-tag">Mindful Sweetness</div>
            <h2 className="final-cta-headline font-serif">
              Bring Something<br />
              <span>Better to the Table.</span>
            </h2>
            <p className="final-cta-subtext">
              Discover the honest richness of traditionally crafted, unrefined cane jaggery.
              Direct from Indian sugarcane growers to your daily cup of chai.
            </p>

            <div className="final-cta-btn-wrap">
              <Link
                to="/products"
                className="btn-luxury-gold final-cta-btn"
                data-cursor="SHOP"
              >
                <span>Shop ELVRE Collection</span>
                <FaArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>

          <div className="final-cta-media">
            <img
              src={`${process.env.PUBLIC_URL}/assets/newproduct.png`}
              alt="ELVRE Cane Jaggery Box"
              className="final-cta-product-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
