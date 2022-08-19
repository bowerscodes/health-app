// import Alert from '../components/Alert';
import React, { useState } from 'react';
import '../styles/scss/add-recipe.scss';


function AddRecipe () {
  const initialState = {
    fields: {
      title: "",
      ingredients: [{
        ingredient: "",
        qty: 0,
        units: "",
      },],
      method: [""],
      nutrition: {
        carbs: 0,
        fat: 0,
        fibre: 0,
        protein: 0,
        sugar: 0,
      },
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const handleAddRecipe = (event) => {
    event.preventDefault();
    setAlert({message: "", isSuccess: false});
    console.log(fields);
  }

  const [fields, setFields] = useState(initialState.fields);
  const [ingredient, setIngredient] = useState(initialState.fields.ingredients);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({...fields, [name]: value});
  }

  const handleAddToList = (event) => {
    const { name, value } = event.target;
    setIngredient
  }

  return(
    <div className="add-recipe">
      <h2 className="h2">New Recipe</h2>
      <form onSubmit={handleAddRecipe}>
        {/* <Alert message={alert.message} success={alert.isSuccess} /> */}
        <label className="label" htmlFor={fields.title}>
          Title:
          <input 
            className="text-input"
            type="text"
            name="title"
            id="title"
            value={fields.title}
            onChange={handleFieldChange}
            data-testid="add-recipe-title-input"
          />
        </label>
        <label className="label" htmlFor={fields.ingredients}>
          Ingredients:
          <p/>
          <input 
            className="ingredient-ingredient"
            type="text"
            name="ingredient"
            id="ingredient-ingredient" 
            placeholder="Ingredient"
            value={fields.ingredients.ingredient}
            onChange={handleFieldChange}
            data-testid="add-recipe-ingredient-input"
          />
          <input 
            className="ingredient-qty"
            type="number"
            name="qty"
            id="ingredient-qty" 
            placeholder="qty"
            value={fields.ingredients.qty}
            onChange={handleFieldChange}
            data-testid="add-recipe-ingredient-input"
          />
          <select 
            className="ingredient-unit"
            type="selection"
            name="unit"
            id="ingredient-unit" 
            placeholder="unit"
            value={fields.ingredients.unit}
            onChange={handleFieldChange}
            data-testid="add-recipe-ingredient-input"
          >
            <option value="item">item</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
          </select>
          <button className="add-button" type="">+</button>
        </label>
      </form>
    </div>
  )
}

export default AddRecipe;