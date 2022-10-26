import '../styles/scss/app.scss';
import React from 'react';
import { Link, Route, Switch } from "react-router-dom"
import Recipes from './Recipes';

function App() {
  return (
    <div className="app">

      <h1>FüD</h1>
      <Link className="home-nav-button" to="/recipes">Recipes</Link>
      {/* <Link className="home-nav-button" to="/add-recipe">Add Recipe</Link> */}
      {/* <Link className="home-nav-button" to="/exercise">Exercise</Link> */}
      <Switch>
        <Route 
          path="/recipes"
          component={Recipes}
        />
        {/* <Route 
          path="/add-recipe"
          component={AddRecipe}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
