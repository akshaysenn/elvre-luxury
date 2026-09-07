import React, { useState } from "react";
import "./ProcessTimeline.css";

const stepsData = [
  {
    step: "01",
    tag: "The Farm",
    title: "The Cane",
    subtitle: "Fresh Sugarcane Sourced from Farmers",
    description:
      "Grown in mineral-dense soil across Indian farms, sugarcane is harvested at peak sweetness and brought directly to pressing units within hours of cutting to preserve enzymes.",
    icon: "🌱",
    image: "/assets/grass1.png",
    stat: "100% Direct Sourced"
  },
  {
    step: "02",
    tag: "Cold Extraction",
    title: "The Juice",
    subtitle: "Crushed & Cold-Filtered Immediately",
    description:
      "Freshly harvested stalks are cold-crushed to extract pure, nutrient-rich sugarcane juice. It is filtered using traditional multi-layer muslin sieves without synthetic clarifying agents.",
    icon: "💧",
    image: "/assets/grassman.jpg",
    stat: "Zero Chemical Bleaches"
  },
  {
    step: "03",
    tag: "Slow Heat",
    title: "The Craft",
    subtitle: "Slow Boiled in Authentic Iron Pans",
    description:
      "Skilled generational artisans slowly simmer the juice in large, shallow iron pans. Natural evaporation concentrates the sugars while allowing natural iron and minerals to enrich the golden syrup.",
    icon: "🔥",
    image: "/assets/imageeee3.png",
    stat: "Generational Wisdom"
  },
  {
    step: "04",
    tag: "Pure Texture",
    title: "The Powder",
    subtitle: "Naturally Cooled & Finely Ground",
    description:
      "The thickened jaggery is gently cooled on clean timber tables and worked with wooden mallets into soft, aromatic golden powder that dissolves effortlessly in warm drinks.",
    icon: "✨",
    image: "/assets/jaggery.png",
    stat: "Fine Tea-Ready Texture"
  },
  {
    step: "05",
    tag: "Everyday Table",
    title: "Your Kitchen",
    subtitle: "Packed Airtight for Modern Homes",
    description:
      "Sealed in moisture-resistant, hygienic food-grade packaging. Ready to elevate your morning chai, artisanal filter coffee, warm baking, and festive Indian sweets.",
    icon: "🏡",
    image: "/assets/newproduct.png",
    stat: "12-Month Freshness"
  }
];

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = stepsData[activeStep];

  return (
    <section className="elvre-process-section" id="how-it-is-made">
      <div className="elvre-container">
        {/* HEADER */}
        <div className="process-header" data-aos="fade-up">
          <div className="eyebrow-tag">Traditional Craft • Modern Standards</div>
          <h2 className="section-heading-editorial">
            From Cane <span>to Powder</span>
          </h2>
          <p className="section-subtext">
            Follow the transparent journey of pure sweetness. An ancient Indian food ritual
            honoured through careful craft, hygienic handling, and zero shortcuts.
          </p>
        </div>

        {/* FARM TO KITCHEN FLOW STRIP */}
        <div className="farm-to-kitchen-pills" data-aos="fade-up">
          {["Farm", "Sugarcane", "Fresh Juice", "Slow Boiling", "Fine Powder", "ELVRE Pack", "Your Kitchen"].map(
            (node, i, arr) => (
              <React.Fragment key={i}>
                <span className="flow-node">{node}</span>
                {i < arr.length - 1 && <span className="flow-arrow">→</span>}
              </React.Fragment>
            )
          )}
        </div>

        {/* INTERACTIVE TIMELINE SELECTOR */}
        <div className="timeline-stepper-wrap" data-aos="fade-up">
          <div className="timeline-progress-track">
            <div
              className="timeline-progress-bar"
              style={{ width: `${(activeStep / (stepsData.length - 1)) * 100}%` }}
            />
          </div>

          <div className="timeline-steps-nav">
            {stepsData.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`timeline-step-btn ${activeStep === idx ? "active" : ""} ${
                  idx <= activeStep ? "visited" : ""
                }`}
                onClick={() => setActiveStep(idx)}
                data-cursor="STEP"
              >
                <span className="step-btn-num">{item.step}</span>
                <span className="step-btn-title">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* STEP SHOWCASE STAGE */}
        <div className="process-showcase-stage" data-aos="fade-up">
          <div className="showcase-content-col">
            <div className="showcase-step-tag">
              <span className="icon-wrap">{current.icon}</span>
              <span>Step {current.step} — {current.tag}</span>
            </div>

            <h3 className="showcase-title font-serif">{current.subtitle}</h3>

            <p className="showcase-desc">{current.description}</p>

            <div className="showcase-stat-badge">
              <span className="stat-dot">✦</span>
              <span>{current.stat}</span>
            </div>

            {/* STEP CONTROLS */}
            <div className="showcase-controls">
              <button
                type="button"
                className="step-nav-arrow"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                aria-label="Previous step"
              >
                ← Previous
              </button>
              <span className="step-counter-text">
                {activeStep + 1} of {stepsData.length}
              </span>
              <button
                type="button"
                className="step-nav-arrow"
                disabled={activeStep === stepsData.length - 1}
                onClick={() => setActiveStep((s) => Math.min(stepsData.length - 1, s + 1))}
                aria-label="Next step"
              >
                Next Step →
              </button>
            </div>
          </div>

          <div className="showcase-media-col">
            <div className="showcase-image-frame">
              <img
                src={process.env.PUBLIC_URL + current.image}
                alt={current.title}
                className="showcase-main-img"
              />
              <div className="frame-overlay-halo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
