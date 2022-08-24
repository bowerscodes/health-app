import '../styles/scss/app.scss';
import React from 'react';
import { Link, Route, Switch } from "react-router-dom"
import Recipes from './Recipes';

function App() {
  return (
    <div className="App">

      <h1>Health App</h1>
      <Link className="home-nav-button" to="/recipeS">Recipes</Link>
      <Link className="home-nav-button" to="/add-recipe">Add Recipe</Link>
      <Link className="home-nav-button" to="/exercise">Exercise</Link>
      <Switch>
        <Route 
          path="/recipes"
          component={Recipes}
        />
        {/* <Route 
          path="/add-recipe"
          component={AddRecipe}
        /> */}
        <Route
          path="/recipes"
          component={Recipes}
        />
      </Switch>
    </div>
  );
}

export default App;
