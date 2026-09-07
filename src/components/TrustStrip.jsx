import React from "react";
import "./TrustStrip.css";

const trustItems = [
  {
    icon: "👨‍🌾",
    label: "Farmer Sourced",
    detail: "Directly from trusted sugarcane growers"
  },
  {
    icon: "🎨",
    label: "No Added Colours",
    detail: "100% natural, deep golden shade"
  },
  {
    icon: "🌿",
    label: "No Preservatives",
    detail: "Pure single-ingredient pantry staple"
  },
  {
    icon: "🔥",
    label: "Traditionally Processed",
    detail: "Slow boiled in authentic iron pans"
  },
  {
    icon: "✨",
    label: "Chemical-Free",
    detail: "Unbleached and unrefined sweetness"
  }
];

const TrustStrip = () => {
  return (
    <section className="elvre-trust-strip" id="trust-strip">
      <div className="trust-strip-container">
        <div className="trust-strip-grid">
          {trustItems.map((item, idx) => (
            <div key={idx} className="trust-strip-item" data-aos="fade-up" data-aos-delay={idx * 80}>
              <div className="trust-icon-box">{item.icon}</div>
              <div className="trust-text-box">
                <span className="trust-item-label">{item.label}</span>
                <span className="trust-item-detail">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
