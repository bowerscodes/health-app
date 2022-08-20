import React, { useState } from 'react';
import Alert from './Alert.jsx';
import '../styles/scss/add-ingredient.scss';

const AddIngredient = () => {

  const InitialState = {
    ingredients: [
      {
        ingredient: "",
        qty: 0,
        units: "",
      },
    ],
    alert: {
      message: "",
      isSuccess: false,
    }
  }

  const [ingredients, setIngredients] = useState(InitialState.ingredients);
  const [alert, setAlert] = useState(InitialState.alert);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setIngredients([{...ingredients[0], [name]: value}]);
    console.log(ingredients);
  }
  
  const handleAddIngredient = (event) => {
    event.preventDefault();
    setAlert({message: "", isSuccess: false});
    console.log(ingredients)
  };

  return (
   <div className="add-ingredient">
    <Alert
      message={alert.message}
      isSuccess={alert.isSuccess}
    />
    <label>
    <input 
      type="text"
      name="ingredient"
      value={ingredients.ingredient}
      className="add-ingredient-ingredient"
      onChange={handleFieldChange}>
    </input>
    <input 
      type="number"
      name="qty"
      value={ingredients.qty}
      className="add-ingredient-qty"
      onChange={handleFieldChange}>
    </input>
    <select
      type="select" 
      name="units"
      value={ingredients.units}
      className="add-ingredient-units"
      onChange={handleFieldChange}
      defaultValue={"item"}
    >  
        <option value="item">item</option>
        <option value="g">gram (g)</option>
        <option value="Kg">Kilogram (Kg)</option>
        <option value="ml">Millilitre (ml)</option>
        <option value="l">Litre (L)</option>
        <option value="tsp">Teaspoon (tsp)</option>
        <option value="tbsp">Tablespoon (tbsp)</option>
    </select>
    <button 
      className="add-ingredient-add-button"
      type="submit"
      onClick={handleAddIngredient}>+</button>
    </label>
   </div> 
  )
}

export default AddIngredient;