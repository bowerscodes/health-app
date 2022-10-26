import React from 'react';
import Accordion from './Accordion';
import '../styles/scss/recipe-card.scss';

function RecipeCard(props) {
  const { recipeId, imgUrl, title, ingredients, method, nutrition } = props;
  
  // function handleExpand(event) {
  //   event.preventDefault();
  //   console.log(recipeId);
  // }
  // function handleHeaderClick(event) {
  //   event.preventDefault();
  //   console.log(event);
  // }
  const accordionData = [
    {
      title: 'Ingredients',
      content: ingredients[ingredients.ingredient]
      
    },
    // {
    //   title: 'Method',
    //   content: method.map(method.step),
    // },
    // {
    //   title: 'Nutrition',
    //   content: nurtition.map(nurtition),
    // }
  ];

  return (
    <div className="recipe-card">
      <button className="recipe-card-expander-button">
        <img src={imgUrl} alt="recipe-card-img" className="recipe-card-img" />
        <h3 className="recipe-card-title">{title}</h3>
      </button>
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}

        {/* <button className="recipe-card-section-button" onClick={handleHeaderClick}><h4>Ingredients</h4></button>
        <button className="recipe-card-section-button" onClick={handleHeaderClick}><h4>Method</h4></button>
        <button className="recipe-card-section-button" onClick={handleHeaderClick}><h4>Nutrition</h4></button> */}
    </div>
  )

}

export default RecipeCard;