import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./TestimonialsSection.css";

const fallbackReviews = [
  {
    id: 1,
    name: "Deepankar",
    message: "Best Taste, Best Quality, totally trustable company!! The caramel aroma in morning tea is unbeatable.",
    rating: 5,
    location: "Verified Kitchen"
  },
  {
    id: 2,
    name: "Savnoor Singh",
    message: "A great idea! It was the need of hour. One step forward to healthy life without giving up natural sweetness.",
    rating: 5,
    location: "Home Cook"
  },
  {
    id: 3,
    name: "Priya Sharma",
    message: "I've been using ELVRE jaggery for months. It dissolves so smoothly in chai without milk separating. Truly authentic.",
    rating: 5,
    location: "Tea Enthusiast"
  },
  {
    id: 4,
    name: "Rahul Kumar",
    message: "Clean, fine texture with no grit at the bottom of the cup. You can feel the farmer craft in every spoonful.",
    rating: 5,
    location: "Daily Customer"
  }
];

const TestimonialsSection = () => {
  const [feedbacks, setFeedbacks] = useState(fallbackReviews);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadFeedback = async () => {
      try {
        const { data, error } = await supabase
          .from("Feedbacks")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(10);

        if (!error && data && data.length > 0) {
          const combined = [
            ...data.map((d, i) => ({
              id: d.id || `sup-${i}`,
              name: d.name || "Customer",
              message: d.message || "Wonderful product and authentic taste!",
              rating: d.rating || 5,
              location: "Verified Feedback"
            })),
            ...fallbackReviews
          ];
          setFeedbacks(combined.slice(0, 8));
        }
      } catch (err) {
        console.error("Error loading feedbacks:", err);
      }
    };

    loadFeedback();
  }, []);

  const total = feedbacks.length;
  const current = feedbacks[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="elvre-testimonials-section" id="testimonial">
      <div className="elvre-container">
        {/* HEADER */}
        <div className="testimonials-header" data-aos="fade-up">
          <div className="eyebrow-tag">Community &amp; Trust</div>
          <h2 className="section-heading-editorial">
            Loved in <span>Everyday Kitchens</span>
          </h2>
          <p className="section-subtext">
            Genuine experiences from homes, home chefs, and tea lovers who made the mindful
            shift to unrefined sugarcane jaggery.
          </p>
        </div>

        {/* FEATURED TESTIMONIAL CARD */}
        <div className="testimonial-stage" data-aos="fade-up">
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <FaQuoteLeft />
            </div>

            {/* STAR RATING */}
            <div className="testimonial-stars-row">
              {[...Array(current.rating || 5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>

            <p className="testimonial-text font-serif">
              “{current.message}”
            </p>

            <div className="testimonial-author-row">
              <div className="author-avatar">
                {current.name.charAt(0).toUpperCase()}
              </div>
              <div className="author-info">
                <span className="author-name">{current.name}</span>
                <span className="author-tag">{current.location}</span>
              </div>
            </div>

            {/* NAVIGATION CONTROLS */}
            <div className="testimonial-controls">
              <button
                type="button"
                className="testimonial-nav-btn"
                onClick={goPrev}
                aria-label="Previous review"
              >
                <FaChevronLeft />
              </button>

              <div className="testimonial-dots">
                {feedbacks.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`dot-pill ${currentIndex === idx ? "active" : ""}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="testimonial-nav-btn"
                onClick={goNext}
                aria-label="Next review"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
