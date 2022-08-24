import React, {useState } from 'react';
import RecipeFilter from './RecipeFilter';
import RecipeCard from './RecipeCard';
import data from '../data/data.json';


function Recipes () {
  // const [recipes, setRecipes] = useState([]);
  const [recipes] = useState(data);
  
  return(
    <div className="recipes">
      <h2>Recipes</h2>
      <RecipeFilter />
      <div className="recipes-grid">
        {recipes && 
          recipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id}
              {...recipe}
              className="recipecard"
            />
          ))
        }
      </div>
    </div>
  )
};


export default Recipes;