import React from "react";
import "./UseCasesSection.css";

const useCases = [
  {
    title: "Chai & Morning Tea",
    tagline: "Earthy Warmth",
    description: "Dissolves smoothly in simmered spices. Add after brewing to experience comforting caramel warmth without curdling milk.",
    icon: "☕",
    bgClass: "bg-chai"
  },
  {
    title: "Filter Coffee & Brews",
    tagline: "Roasted Undertones",
    description: "Replaces bitter refined sweetness with delicate molasses that deepens the roasted aroma of South Indian filter kaapi.",
    icon: "🫖",
    bgClass: "bg-coffee"
  },
  {
    title: "Festive Ladoos & Halwa",
    tagline: "Authentic Golden Hue",
    description: "Imparts a rich golden hue and traditional festive aroma to besan, atta, or til ladoos without synthetic colouring.",
    icon: "🥮",
    bgClass: "bg-ladoo"
  },
  {
    title: "Wholesome Baking",
    tagline: "Moist & Flavourful",
    description: "A natural direct 1:1 substitute for brown or raw sugar in banana bread, sourdough bakes, muffins, and oat cookies.",
    icon: "🥐",
    bgClass: "bg-baking"
  },
  {
    title: "Daily Cooking & Dals",
    tagline: "Regional Balance",
    description: "The secret balancing touch in Gujarati dal, Maharashtrian amti, sambar, and tamarind chutneys for authentic regional depth.",
    icon: "🍲",
    bgClass: "bg-cooking"
  },
  {
    title: "Kheer & Warm Puddings",
    tagline: "Silky Caramel Finish",
    description: "Transforms plain rice kheer and payasam into a royal dessert with pure plant-based caramel nuance.",
    icon: "🥣",
    bgClass: "bg-dessert"
  }
];

const UseCasesSection = () => {
  return (
    <section className="elvre-use-cases-section">
      <div className="elvre-container">
        {/* HEADER */}
        <div className="use-cases-header" data-aos="fade-up">
          <div className="eyebrow-tag">Everyday Culinary Joy</div>
          <h2 className="section-heading-editorial">
            A Little Sweetness, <span>Many Ways.</span>
          </h2>
          <p className="section-subtext">
            From the dawn cuppa to slow-simmered family feasts, discover how ELVRE jaggery powder
            effortlessly replaces processed sugar across your daily cooking rituals.
          </p>
        </div>

        {/* USE CASES GRID */}
        <div className="use-cases-grid">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className={`use-case-card ${item.bgClass}`}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
              data-cursor="TASTE"
            >
              <div className="card-top-row">
                <span className="case-icon-badge">{item.icon}</span>
                <span className="case-tagline">{item.tagline}</span>
              </div>
              <h3 className="case-title font-serif">{item.title}</h3>
              <p className="case-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
