import React from 'react';
// import data from '../data/data.json';
// import { useState } from 'react';

const Recipe = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe">
      <h2 className="h2">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.ingredient}</li>
        ))}
      </ul>
      <ul>
        {recipe.method.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <p>Calories: {recipe.nutrition.calories}</p>
      <p>Carbs: {recipe.nutrition.carbs}</p>
      <p>Fat: {recipe.nutrition.fat}</p>
      <p>Fibre: {recipe.nutrition.fibre}</p>
      <p>Protein: {recipe.nutrition.protein}</p>
      <p>Sugar: {recipe.nutrition.sugar}</p>
    </div>
  );
}

export default Recipe;