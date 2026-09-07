import React from "react";
import { Link } from "react-router-dom";
import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="elvre-story-section" id="our-story">
      <div className="elvre-container">
        <div className="story-grid-layout">
          {/* LEFT COLUMN: EDITORIAL NARRATIVE */}
          <div className="story-editorial-col" data-aos="fade-up">
            <div className="eyebrow-tag">Rooted in Authenticity</div>
            <h2 className="section-heading-editorial">
              Tradition, <span>Reimagined.</span>
            </h2>

            <div className="story-lead-quote">
              <span className="quote-mark">“</span>
              <p>The best engineering protects people first.</p>
            </div>

            <div className="story-body-paragraphs">
              <p>
                Traditional jaggery has been the cornerstone of Indian culinary and food culture for generations.
                Yet for years, it remained relegated to unhygienic blocks, inconsistent textures, and exposure to humidity.
              </p>
              <p>
                ELVRE was founded by <strong>Sanyam Singh</strong>, a Chemical Process Engineer (Thapar Institute of Engineering &amp; Technology; Executive Management, IIM Kashipur). While working in industrial processing plants where workers were given jaggery to safeguard wellness, the lesson was clear:
                ancient culinary wisdom understood pure sustenance long before modern nutrition labels existed.
              </p>
              <p>
                Our ambition is to preserve that honest, unrefined nourishment and present it through thoughtful processing, hygienic food-grade packaging, and a reliable modern pantry experience.
              </p>
            </div>

            {/* FOUNDER CREDENTIALS ROW */}
            <div className="founder-credentials-strip">
              <div className="credential-badge">
                <span className="cred-icon">🎓</span>
                <span className="cred-text">Chemical Process Engineering</span>
              </div>
              <div className="credential-badge">
                <span className="cred-icon">📈</span>
                <span className="cred-text">IIM Kashipur Alumnus</span>
              </div>
              <div className="credential-badge">
                <span className="cred-icon">🌱</span>
                <span className="cred-text">Clean Pantry Advocate</span>
              </div>
            </div>

            <div className="story-cta-wrap">
              <Link to="/our-story" className="btn-luxury-secondary">
                Read the Full Journey →
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: CINEMATIC VISUAL COMPOSITION */}
          <div className="story-visual-col" data-aos="fade-up" data-aos-delay="150">
            <div className="story-image-composition">
              <div className="main-image-card">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/imageeee3.png`}
                  alt="Traditional Indian farmers handcrafting jaggery around an iron boiling pan"
                  className="story-main-img"
                />
                <div className="image-caption-pill">
                  <span>Traditional Boiling in Iron Pans • Haridwar, Uttarakhand</span>
                </div>
              </div>

              {/* OVERLAPPING ACCENT CARD */}
              <div className="accent-quote-card">
                <span className="accent-quote-icon">✦</span>
                <h4 className="accent-quote-heading font-serif">Preserving What Matters</h4>
                <p className="accent-quote-text">
                  Improving what can be improved. Zero chemical bleaching, zero artificial additives, pure unrefined jaggery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
