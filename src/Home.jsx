import React, { Suspense, lazy } from "react";
import HeroSection from "./components/HeroSection";
import TrustStrip from "./components/TrustStrip";
import ProductSection from "./components/ProductSection";

// Lazy-loaded narrative components for optimal first-load performance
const ProcessTimeline = lazy(() => import("./components/ProcessTimeline"));
const StorySection = lazy(() => import("./components/StorySection"));
const TechCraftSection = lazy(() => import("./components/TechCraftSection"));
const WhyJaggerySection = lazy(() => import("./components/WhyJaggerySection"));
const UseCasesSection = lazy(() => import("./components/UseCasesSection"));
const RecipesSection = lazy(() => import("./components/RecipesSection"));
const TalesSection = lazy(() => import("./components/TalesSection"));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection"));
const StatsCounter = lazy(() => import("./components/StatsCounter"));
const JaggeryWorld = lazy(() => import("./components/JaggeryWorld"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));

const SectionLoadingFallback = () => (
  <div
    style={{
      textAlign: "center",
      padding: "80px 20px",
      color: "#6F4224",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: "1.4rem",
      fontStyle: "italic",
      letterSpacing: "0.04em",
    }}
  >
    ✦ Unfolding pure craft...
  </div>
);

const Home = () => {
  return (
    <main className="elvre-home-main">
      {/* 1. CINEMATIC HERO */}
      <HeroSection />

      {/* 2. FACTUAL TRUST STRIP */}
      <TrustStrip />

      {/* 3. MEET YOUR EVERYDAY JAGGERY PRODUCT SHOWCASE */}
      <ProductSection />

      <Suspense fallback={<SectionLoadingFallback />}>
        {/* 4. FROM CANE TO POWDER SIGNATURE EXPERIENCE */}
        <ProcessTimeline />

        {/* 5. BRAND STORY: TRADITION, REIMAGINED */}
        <StorySection />

        {/* 6. WHERE TRADITION MEETS TECHNOLOGY */}
        <TechCraftSection />

        {/* 7. WHY JAGGERY & SUGAR COMPARISON */}
        <WhyJaggerySection />

        {/* 8. EVERYDAY USE CASES */}
        <UseCasesSection />

        {/* 9. RECIPE DISCOVERY */}
        <RecipesSection />

        {/* 10. REAL CUSTOMER VIDEO TALES */}
        <TalesSection />

        {/* 11. SOCIAL PROOF & TESTIMONIALS */}
        <TestimonialsSection />

        {/* 12. FACTUAL CUSTOMER & CRAFT STATS */}
        <StatsCounter />

        {/* 13. 2.5D INTERACTIVE JAGGERY WORLD */}
        <JaggeryWorld />

        {/* 14. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />

        {/* 15. HIGH-IMPACT FINAL CALL TO ACTION */}
        <FinalCTA />
      </Suspense>
    </main>
  );
};

export default Home;