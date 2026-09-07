import React, { useState } from "react";
import "./TechCraftSection.css";

const TechCraftSection = () => {
  const [activeTab, setActiveTab] = useState("balance");

  return (
    <section className="elvre-tech-craft-section">
      <div className="elvre-container">
        {/* HEADER */}
        <div className="tech-craft-header" data-aos="fade-up">
          <div className="eyebrow-tag">Thoughtful Modernization</div>
          <h2 className="section-heading-editorial">
            Where Tradition Meets <span>Technology</span>
          </h2>
          <p className="section-subtext">
            Preserving what matters. Improving what can be improved.
            We honour ancient Indian boiling craft while introducing precision grading,
            food-safe stainless handling, and hermetic packaging.
          </p>

          <div className="tech-craft-toggle-pills">
            <button
              className={`toggle-pill ${activeTab === "tradition" ? "active" : ""}`}
              onClick={() => setActiveTab("tradition")}
            >
              The Ancient Wisdom
            </button>
            <button
              className={`toggle-pill ${activeTab === "balance" ? "active" : ""}`}
              onClick={() => setActiveTab("balance")}
            >
              The ELVRE Balance
            </button>
            <button
              className={`toggle-pill ${activeTab === "technology" ? "active" : ""}`}
              onClick={() => setActiveTab("technology")}
            >
              The Modern Standards
            </button>
          </div>
        </div>

        {/* INTERACTIVE COMPARISON STAGE */}
        <div className="tech-craft-dual-stage" data-aos="fade-up">
          {/* TRADITION PILLAR */}
          <div className={`pillar-card pillar-tradition ${activeTab === "technology" ? "dimmed" : ""}`}>
            <div className="pillar-header">
              <span className="pillar-tag">Traditional Roots</span>
              <h3 className="pillar-title font-serif">Time-Tested Craft</h3>
            </div>
            <ul className="pillar-features-list">
              <li>
                <span className="bullet-glow">🔥</span>
                <div>
                  <strong>Open Iron Pan Boiling</strong>
                  <p>Concentrates sweetness slowly while infusing natural dietary iron.</p>
                </div>
              </li>
              <li>
                <span className="bullet-glow">🌱</span>
                <div>
                  <strong>Direct Farm Crushing</strong>
                  <p>Sugarcane pressed directly at harvest to preserve plant richness.</p>
                </div>
              </li>
              <li>
                <span className="bullet-glow">🪵</span>
                <div>
                  <strong>Natural Wooden Rubbing</strong>
                  <p>Creates delicate, easy-dissolving natural granules without synthetic additives.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CENTER EMBLEM CONNECTOR */}
          <div className="pillar-connector-center">
            <div className="connector-circle">
              <span className="connector-spark">✦</span>
              <span className="connector-label">Harmonized</span>
            </div>
          </div>

          {/* TECHNOLOGY PILLAR */}
          <div className={`pillar-card pillar-tech ${activeTab === "tradition" ? "dimmed" : ""}`}>
            <div className="pillar-header">
              <span className="pillar-tag">Modern Engineering</span>
              <h3 className="pillar-title font-serif">Engineered Precision</h3>
            </div>
            <ul className="pillar-features-list">
              <li>
                <span className="bullet-glow">🔬</span>
                <div>
                  <strong>Clean Food-Grade Environments</strong>
                  <p>Hygienic processing eliminating open-air grit and airborne contaminants.</p>
                </div>
              </li>
              <li>
                <span className="bullet-glow">⚖️</span>
                <div>
                  <strong>Calibrated Moisture Control</strong>
                  <p>Prevents microbial spoilage and eliminates rock-hard clumping.</p>
                </div>
              </li>
              <li>
                <span className="bullet-glow">📦</span>
                <div>
                  <strong>Multi-Layer Hermetic Barrier</strong>
                  <p>Protects aromatic esters from humidity across Indian seasons.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM PHILOSOPHY CALLOUT */}
        <div className="tech-craft-quote-banner" data-aos="fade-up">
          <p className="quote-statement font-serif">
            “Technology shouldn't replace food. It should safeguard its purity.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechCraftSection;
