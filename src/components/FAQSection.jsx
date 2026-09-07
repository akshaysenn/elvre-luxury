import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQSection.css";

const faqsData = [
  {
    q: "What makes ELVRE Cane Jaggery Powder different from crystal white sugar?",
    a: "Refined white sugar is chemically bleached and stripped of all nutrients, resulting in 99.8% isolated sucrose. ELVRE Jaggery Powder is 100% unrefined, slow boiled in traditional open iron pans from fresh sugarcane juice, naturally retaining plant minerals including iron, potassium, and magnesium."
  },
  {
    q: "Does ELVRE jaggery powder contain any added colours or preservatives?",
    a: "No. Our jaggery powder contains absolutely no added colours, artificial preservatives, or chemical bleaches. The golden hue and caramel sweetness are completely natural from the sugarcane juice and authentic iron pan boiling."
  },
  {
    q: "How should I store ELVRE jaggery powder to prevent clumping?",
    a: "Because ELVRE is completely natural without artificial anti-caking agents, store it in an airtight container in a cool, dry place away from direct moisture and steam. Always use a clean, dry spoon when scooping."
  },
  {
    q: "Will ELVRE jaggery powder curdle milk when making hot tea or coffee?",
    a: "No, provided it is used correctly! A simple culinary best practice is to turn off the flame or remove the vessel from the burner before stirring in ELVRE jaggery powder. This melts the jaggery smoothly while preventing milk protein curdling."
  },
  {
    q: "What is the shelf life of ELVRE jaggery powder?",
    a: "Our jaggery powder has a natural shelf life of 12 months from the date of packing when stored sealed in a moisture-proof container."
  },
  {
    q: "What are the shipping charges and delivery timelines across India?",
    a: "We provide Free Shipping across India on all orders of ₹499 and above. For orders below ₹499, a standard shipping fee of ₹40 applies. Deliveries typically arrive within 3 to 7 business days depending on your delivery pincode."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="elvre-faq-section" id="faq">
      <div className="elvre-container">
        {/* HEADER */}
        <div className="faq-header" data-aos="fade-up">
          <div className="eyebrow-tag">Clear Answers</div>
          <h2 className="section-heading-editorial">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtext">
            Everything you need to know about our sourcing, traditional boiling methods,
            storage advice, and shipping.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="faq-accordion-container" data-aos="fade-up">
          {faqsData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text font-serif">{item.q}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div className={`faq-answer-collapse ${isOpen ? "expanded" : ""}`}>
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
