import React from 'react';
import Accordion from './Accordion';
import '../styles/scss/recipe-card.scss';

function RecipeCard(recipe) {
  const { imgUrl, title, ingredients, method, nutrition } = recipe;

  // Format the json data for the Accordion components
  const formatIngredients = (ingredients) => {
    return ingredients.map((ingredient, index) => (
      <div key={index} className="accordion-content-row">{ingredient.qty + ' ' + ingredient.unit + ' ' + ingredient.ingredient}</div>
    ))
  };
  const formattedIngredients = formatIngredients(ingredients);

  const formatMethod = (method) => {
    return method.map((step, index) => (
      <div key={index} className="accordion-content-row">{step.instruction}</div>
    ))
  };
  const formattedMethod = formatMethod(method);
  
  const formatNutrition = (nutrition) => {
    return (
      <div className="accordion-content-row">
        <div>Calories: {nutrition.calories}kcal</div>
        <div>Carbs: {nutrition.carbs}g</div>
        <div>Fat: {nutrition.fat}g</div>
        <div>Fibre: {nutrition.fibre}g</div>
        <div>Protein: {nutrition.protein}g</div>
        <div>Sugar: {nutrition.sugar}g</div>
      </div>
    )
  };
  const formattedNutrition = formatNutrition(nutrition);

  // const accordionContent = [formattedIngredients, formattedMethod, formattedNutrition];

  
  return (
    <div className="recipe-card">
      <button className="recipe-card-expander-button">
        <img src={imgUrl} alt="recipe-card-img" className="recipe-card-img" />
        <h3 className="recipe-card-title">{title}</h3>
      </button>

      <Accordion 
        title="Ingredients"
        content={formattedIngredients}
      />
      <Accordion 
        title="Method"
        content={formattedMethod}
      />
      <Accordion 
        title="Nutrition"
        content={formattedNutrition}
      />
      
      {/* {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={{ content }} 
        {...console.log('title: '+{ ...title })}
        {...console.log({ ...content })}
        />
      ))} */}
    </div>
  )

}

export default RecipeCard;