import React, { useState } from "react";
import { FaClock, FaArrowRight } from "react-icons/fa";
import RecipeModal from "./RecipeModal";
import "./RecipesSection.css";

const recipesData = [
  {
    id: "chai",
    title: "Classic Spiced Jaggery Chai",
    tagline: "Morning Ritual",
    description: "Authentic Indian masala chai simmered with fresh crushed ginger, green cardamom, and sweetened with ELVRE jaggery powder.",
    prepTime: "5 mins",
    cookTime: "8 mins",
    servings: "2 cups",
    difficulty: "Easy",
    image: "/assets/jaggery.png",
    ingredients: [
      "1.5 cups whole milk",
      "1 cup filtered water",
      "2 tsp Assam CTC or leaf tea",
      "1 inch fresh ginger, crushed",
      "2-3 green cardamom pods, bruised",
      "2-3 tsp ELVRE Cane Jaggery Powder"
    ],
    steps: [
      "In a small saucepan, bring water, crushed ginger, and crushed cardamom to a rolling boil for 2-3 minutes.",
      "Add black tea leaves and simmer on low for 1 minute until the liquor deepens in colour.",
      "Pour in fresh milk and bring to a gentle boil, letting the tea rise once or twice.",
      "Turn off the heat completely. Stir in 2-3 tsp of ELVRE Cane Jaggery Powder until completely dissolved.",
      "Strain through a fine sieve into warm clay kulhads or cups and serve hot."
    ],
    proTip: "Always turn off the flame before stirring in jaggery powder to prevent milk separation!"
  },
  {
    id: "ladoo",
    title: "Whole Wheat & Dry Fruit Ladoos",
    tagline: "Festive Nourishment",
    description: "Slow-roasted whole wheat flour and hand-chopped dry fruits bound with pure cow ghee and golden ELVRE jaggery powder.",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "10-12 ladoos",
    difficulty: "Medium",
    image: "/assets/bowl.png",
    ingredients: [
      "1.5 cups stone-ground whole wheat flour (atta)",
      "1/2 cup pure desi cow ghee",
      "3/4 cup ELVRE Cane Jaggery Powder",
      "1/4 cup chopped almonds and cashews",
      "1 tbsp melon seeds (magaz)",
      "1/2 tsp freshly ground cardamom powder"
    ],
    steps: [
      "Heat ghee in a heavy-bottomed kadai over low flame. Add whole wheat flour and roast steadily.",
      "Stir continuously for 12-15 minutes until the flour turns aromatic, nutty, and deep golden.",
      "Add chopped nuts and melon seeds in the last 2 minutes so they toast gently in the hot ghee.",
      "Remove kadai from heat and allow the mixture to cool until comfortably warm to touch.",
      "Add ELVRE Cane Jaggery Powder and cardamom powder. Mix thoroughly with fingers.",
      "Shape into round, compact ladoos while warm. Store in an airtight steel dabba."
    ],
    proTip: "Do not add jaggery while the flour is piping hot, or the sugar will melt into a sticky syrup."
  },
  {
    id: "kheer",
    title: "Cardamom & Saffron Jaggery Kheer",
    tagline: "Royal Dessert",
    description: "Slow-cooked basmati rice and full-cream milk dessert naturally sweetened with unrefined jaggery and infused with saffron.",
    prepTime: "10 mins",
    cookTime: "30 mins",
    servings: "4 servings",
    difficulty: "Medium",
    image: "/assets/productpacking.png",
    ingredients: [
      "1/4 cup fragrant Gobindobhog or Basmati rice (soaked for 20 mins)",
      "1 litre full cream milk",
      "1/2 cup ELVRE Cane Jaggery Powder",
      "6-8 strands Kashmiri saffron",
      "1/2 tsp freshly crushed green cardamom",
      "1 tbsp slivered pistachios & almonds"
    ],
    steps: [
      "Coarsely crush soaked rice between fingers. Bring milk to a simmer in a heavy pot.",
      "Add crushed rice and saffron strands. Cook on low heat, stirring frequently, until rice is tender and milk thickens to half volume (approx 25 mins).",
      "Add cardamom powder and nuts. Remove from heat and allow to cool for 5-7 minutes.",
      "Gently fold in ELVRE Cane Jaggery Powder until smooth and caramel-toned.",
      "Garnish with slivered pistachios and serve warm or chilled."
    ],
    proTip: "Allowing the kheer to cool slightly before folding in jaggery guarantees an ultra-silky consistency."
  }
];

const RecipesSection = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <section className="elvre-recipes-section" id="recipes">
      <div className="elvre-container">
        {/* HEADER */}
        <div className="recipes-header" data-aos="fade-up">
          <div className="eyebrow-tag">Pure Kitchen Inspiration</div>
          <h2 className="section-heading-editorial">
            Crafted for <span>Every Recipe</span>
          </h2>
          <p className="section-subtext">
            Simple, comforting, and nutrient-dense recipes to bring natural golden sweetness
            to your daily tea kettle and weekend family dining table.
          </p>
        </div>

        {/* RECIPES CARDS GRID */}
        <div className="recipes-cards-grid">
          {recipesData.map((recipe, idx) => (
            <div
              key={recipe.id}
              className="recipe-card"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              onClick={() => handleOpenRecipe(recipe)}
              data-cursor="COOK"
            >
              <div className="recipe-card-media">
                <img
                  src={process.env.PUBLIC_URL + recipe.image}
                  alt={recipe.title}
                  className="recipe-card-img"
                  loading="lazy"
                />
                <div className="recipe-time-pill">
                  <FaClock />
                  <span>{recipe.cookTime}</span>
                </div>
              </div>

              <div className="recipe-card-content">
                <div className="recipe-meta-top">
                  <span className="recipe-card-tag">{recipe.tagline}</span>
                  <span className="recipe-card-diff">{recipe.difficulty}</span>
                </div>

                <h3 className="recipe-card-title font-serif">{recipe.title}</h3>

                <p className="recipe-card-snippet">{recipe.description}</p>

                <div className="recipe-card-footer">
                  <span className="recipe-view-btn">
                    View Recipe <FaArrowRight className="recipe-arrow" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECIPE MODAL */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default RecipesSection;
