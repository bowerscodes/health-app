import '../styles/scss/app.scss';
import { Link, Route, Switch } from "react-router-dom"
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

function App() {
  return (
    <div className="App">

      <h1>Health App</h1>
      {/* <AddRecipe /> */}
      <Link className="home-nav-button" to="/add-recipe">Food</Link>
      <Link className="home-nav-button" to="/exercise">Exercise</Link>
      <Switch>
        <Route 
          path="/recipes"
          component={Recipes}
        />
        <Route 
          path="/add-recipe"
          component={AddRecipe}
        />
      </Switch>
    </div>
  );
}

export default App;
