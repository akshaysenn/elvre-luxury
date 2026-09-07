import React, { useState, useRef } from "react";
import "./SugarComparison.css";

const SugarComparison = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleSliderMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(90, Math.max(10, pos)));
  };

  const handleTouchMove = (e) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  return (
    <div className="sugar-comparison-block" data-aos="fade-up">
      <div className="comparison-header">
        <span className="comparison-tag">Side by Side</span>
        <h3 className="comparison-title font-serif">Refined Sugar vs. ELVRE Jaggery</h3>
        <p className="comparison-sub">
          Drag the slider to compare processing, nutrient retention, and flavour characteristics.
        </p>
      </div>

      {/* INTERACTIVE SPLIT SLIDER CONTAINER */}
      <div
        className="split-slider-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* LEFT PANE: REFINED SUGAR */}
        <div className="slider-pane pane-sugar" style={{ width: `${sliderPos}%` }}>
          <div className="pane-content-inner">
            <span className="pane-category">Ultra-Processed</span>
            <h4 className="pane-heading font-serif">Refined White Sugar</h4>
            <ul className="pane-attributes-list">
              <li>
                <span className="attr-cross">✕</span>
                <div>
                  <strong>Highly Refined & Bleached</strong>
                  <span>Treated with clarifying chemicals to strip molasses color.</span>
                </div>
              </li>
              <li>
                <span className="attr-cross">✕</span>
                <div>
                  <strong>Isolated Sucrose (99.8%)</strong>
                  <span>All micro-minerals, plant molasses, and nutrients removed.</span>
                </div>
              </li>
              <li>
                <span className="attr-cross">✕</span>
                <div>
                  <strong>Flat Sweetness</strong>
                  <span>One-dimensional sharp sweet taste with zero aromatic depth.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANE: ELVRE JAGGERY */}
        <div className="slider-pane pane-jaggery" style={{ width: `${100 - sliderPos}%` }}>
          <div className="pane-content-inner">
            <span className="pane-category">100% Unrefined</span>
            <h4 className="pane-heading font-serif">ELVRE Cane Jaggery</h4>
            <ul className="pane-attributes-list">
              <li>
                <span className="attr-check">✓</span>
                <div>
                  <strong>Slow-Boiled & Unbleached</strong>
                  <span>Traditionally simmered in open iron pans without synthetic agents.</span>
                </div>
              </li>
              <li>
                <span className="attr-check">✓</span>
                <div>
                  <strong>Naturally Occurring Minerals</strong>
                  <span>Naturally retains plant-based iron, potassium, and magnesium.</span>
                </div>
              </li>
              <li>
                <span className="attr-check">✓</span>
                <div>
                  <strong>Complex Caramel Profile</strong>
                  <span>Warm, earthy, molasses-rich sweetness that elevates hot beverages.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* DRAG HANDLE */}
        <div
          className="slider-divider-line"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="slider-handle-thumb">
            <span className="handle-arrows">⇄</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SugarComparison;
