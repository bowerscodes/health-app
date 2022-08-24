import React from 'react';
import '../styles/scss/recipe-card.scss';

function RecipeCard(props) {
  const { recipeId, imgUrl, title, ingredients, method, nurtition } = props;
  
  function handleExpand(event) {
    event.preventDefault();
    console.log(recipeId);
  }
  function handleHeaderClick(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="recipe-card">
      <button className="recipe-card-expander-button" onClick={handleExpand}>
        <img src={imgUrl} alt="recipe-card-img" className="recipe-card-img" />
        <h3 className="recipe-card-title">{title}</h3>
      </button>
        <button className="recipe-card-section-button" onClick={handleHeaderClick}><h4>Ingredients</h4></button>
        <button className="recipe-card-section-button" onClick={handleHeaderClick}><h4>Method</h4></button>
        <button className="recipe-card-section-button" onClick={handleHeaderClick}><h4>Nutrition</h4></button>
    </div>
  )

}

export default RecipeCard;