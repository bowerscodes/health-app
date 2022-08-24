import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/scss/recipe-filter.scss';

function RecipeFilter() {
  return(
    <div className="recipe-filter">
      <h3 className="recipe-filter-title">filter by:</h3>
      <Link to="/recipes" className="recipe-filter-link">All</Link>

    </div>
  )
}

export default RecipeFilter;