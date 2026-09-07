import React, { useEffect } from "react";
import { FaTimes, FaClock, FaFireAlt, FaUtensils } from "react-icons/fa";
import "./RecipeModal.css";

const RecipeModal = ({ recipe, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !recipe) return null;

  return (
    <div className="recipe-modal-overlay" onClick={onClose}>
      <div
        className="recipe-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-title"
      >
        <button
          className="recipe-modal-close"
          onClick={onClose}
          aria-label="Close recipe details"
        >
          <FaTimes />
        </button>

        <div className="recipe-modal-header">
          <div className="recipe-tag-row">
            <span className="recipe-cuisine-pill">Authentic Kitchen</span>
            <span className="recipe-diff-badge">{recipe.difficulty}</span>
          </div>

          <h2 id="recipe-title" className="recipe-modal-title font-serif">
            {recipe.title}
          </h2>

          <p className="recipe-modal-desc">{recipe.description}</p>

          <div className="recipe-meta-row">
            <div className="meta-item">
              <FaClock />
              <span>Prep: {recipe.prepTime}</span>
            </div>
            <div className="meta-item">
              <FaFireAlt />
              <span>Cook: {recipe.cookTime}</span>
            </div>
            <div className="meta-item">
              <FaUtensils />
              <span>Servings: {recipe.servings}</span>
            </div>
          </div>
        </div>

        <div className="recipe-modal-body">
          {/* INGREDIENTS */}
          <div className="recipe-column">
            <h3 className="column-title font-serif">Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>
                  <span className="bullet-leaf">✦</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* METHOD */}
          <div className="recipe-column">
            <h3 className="column-title font-serif">Preparation Method</h3>
            <ol className="method-steps-list">
              {recipe.steps.map((st, i) => (
                <li key={i}>
                  <span className="step-num">{i + 1}</span>
                  <p>{st}</p>
                </li>
              ))}
            </ol>

            {recipe.proTip && (
              <div className="recipe-protip-card">
                <strong>✦ The ELVRE Pro Tip:</strong>
                <p>{recipe.proTip}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
