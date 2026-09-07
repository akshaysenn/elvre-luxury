import React, { useState, useEffect, useRef } from "react";
import "./JaggeryWorld.css";

const JaggeryWorld = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x, y });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="elvre-jaggery-world-section"
      ref={containerRef}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {/* ATMOSPHERIC WARM SUNLIGHT */}
      <div
        className="world-ambient-light"
        style={{
          transform: `translate3d(${offset.x * 30}px, ${offset.y * 30}px, 0)`
        }}
      />

      {/* FLOATING GOLDEN PARTICLES */}
      <div className="world-particles-layer">
        <span className="w-particle wp1" />
        <span className="w-particle wp2" />
        <span className="w-particle wp3" />
        <span className="w-particle wp4" />
        <span className="w-particle wp5" />
      </div>

      <div className="elvre-container world-content-wrap">
        <div className="world-header-center" data-aos="fade-up">
          <div className="eyebrow-tag">An Immersive Journey</div>
          <h2 className="section-heading-editorial">
            The Living <span>Purity</span>
          </h2>
          <p className="section-subtext">
            From lush Indian sugarcane fields to hand-tended boiling pans, every grain tells the story of earth, fire, and mindful patience.
          </p>
        </div>

        {/* 2.5D INTERACTIVE PARALLAX STAGE */}
        <div className="world-stage-box" data-aos="fade-up" data-aos-duration="1000">
          {/* LAYER 1: DEEP BACKGROUND CANE FOLIAGE */}
          <div
            className="world-layer layer-back-foliage"
            style={{
              transform: `translate3d(${offset.x * -18}px, ${offset.y * -14}px, 0)`
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/grass1.png`}
              alt="Sugarcane foliage"
              className="foliage-back-img"
            />
          </div>

          {/* LAYER 2: HERO PRODUCT IN FOREGROUND */}
          <div
            className="world-layer layer-product-hero"
            style={{
              transform: `perspective(1000px) rotateX(${offset.y * -10}deg) rotateY(${offset.x * 12}deg) translate3d(${offset.x * 20}px, ${offset.y * 15}px, 40px)`
            }}
            data-cursor="PURITY"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/productpacking.png`}
              alt="ELVRE Botanical Pack in Nature"
              className="world-hero-pack"
            />
            <div className="pack-pedestal-light" />
          </div>

          {/* LAYER 3: FLOATING GOLDEN POWDER BOWL */}
          <div
            className="world-layer layer-bowl-floating"
            style={{
              transform: `translate3d(${offset.x * -35}px, ${offset.y * -25}px, 80px)`
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/bowl.png`}
              alt="Golden jaggery powder in ceramic bowl"
              className="world-bowl-img"
            />
          </div>

          {/* GRAND EDITORIAL STATEMENT OVERLAY */}
          <div className="world-editorial-stamp">
            <span className="stamp-sub">From the Earth.</span>
            <span className="stamp-main font-serif">To Your Table.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JaggeryWorld;
