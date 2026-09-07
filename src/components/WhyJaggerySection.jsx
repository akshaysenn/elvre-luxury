import React from "react";
import SugarComparison from "./SugarComparison";
import "./WhyJaggerySection.css";

const WhyJaggerySection = () => {
  const educationalPoints = [
    {
      icon: "🌾",
      title: "What is Cane Jaggery?",
      description:
        "Jaggery (Gud) is a concentrated traditional sweetener produced by gently evaporating raw sugarcane juice without separating the molasses or subjecting it to chemical bleaching."
    },
    {
      icon: "⚡",
      title: "Natural Mineral Retention",
      description:
        "Unlike white crystal sugar that has been stripped of every nutrient, slow-boiled jaggery retains naturally occurring iron, potassium, and magnesium inherent to the sugarcane stalk."
    },
    {
      icon: "🍯",
      title: "Complex Flavour Profile",
      description:
        "Jaggery provides a warm, layered caramel note with subtle earthy undertones, bringing authentic depth to chai, filter coffee, artisanal desserts, and daily cooking."
    },
    {
      icon: "🌿",
      title: "Proper Storage Wisdom",
      description:
        "Because ELVRE jaggery powder is 100% natural with no anti-caking chemicals, simply keep it in an airtight container in a cool, dry pantry away from direct moisture."
    }
  ];

  return (
    <section className="elvre-why-jaggery-section" id="why-jaggery">
      <div className="elvre-container">
        {/* HEADER */}
        <div className="why-jaggery-header" data-aos="fade-up">
          <div className="eyebrow-tag">Pure Understanding</div>
          <h2 className="section-heading-editorial">
            Why <span>Jaggery?</span>
          </h2>
          <p className="section-subtext">
            Understanding the real difference between ultra-processed crystal sweetness and honest,
            unrefined sugarcane nutrition. Factual, transparent, and rooted in food tradition.
          </p>
        </div>

        {/* 4-GRID EDUCATIONAL PILLARS */}
        <div className="why-jaggery-grid">
          {educationalPoints.map((item, idx) => (
            <div
              key={idx}
              className="why-jaggery-card"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="why-icon-circle">{item.icon}</div>
              <h3 className="why-card-title font-serif">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* INTERACTIVE SUGAR VS JAGGERY SLIDER */}
        <SugarComparison />
      </div>
    </section>
  );
};

export default WhyJaggerySection;
