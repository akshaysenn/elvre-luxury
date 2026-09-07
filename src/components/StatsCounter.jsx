import React from "react";
import CountUp from "react-countup";
import "./StatsCounter.css";

const statsData = [
  {
    icon: "🌱",
    value: 100,
    suffix: "%",
    label: "Natural & Chemical Free",
    subtext: "Unbleached and unrefined sweetness"
  },
  {
    icon: "🏡",
    value: 5000,
    suffix: "+",
    label: "Happy Kitchens",
    subtext: "Delivered across India"
  },
  {
    icon: "👨‍🌾",
    value: 100,
    suffix: "%",
    label: "Farmer Handcrafted",
    subtext: "Directly supporting regional growers"
  },
  {
    icon: "📦",
    value: 24,
    suffix: "/7",
    label: "Care & Support",
    subtext: "Dedicated customer service"
  }
];

const StatsCounter = () => {
  return (
    <section className="elvre-stats-section">
      <div className="elvre-container">
        <div className="stats-cards-grid">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="stat-metric-card"
              data-aos="fade-up"
              data-aos-delay={idx * 70}
            >
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-number-wrap font-serif">
                <CountUp end={stat.value} duration={2.4} enableScrollSpy scrollSpyOnce />
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <h4 className="stat-metric-label">{stat.label}</h4>
              <p className="stat-metric-sub">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;