import Alert from '../components/Alert';
import AddIngredient from './AddIngredient';
import React, { useState } from 'react';
import '../styles/scss/add-recipe.scss';
// import PropTypes from 'prop-types';


const AddRecipe = () => {
 
  const initialState = {
    fields: {
      title: "",
      ingredients: [{
        ingredient: "",
        qty: 0,
        units: "",
      },],
      method: [
        "",
      ],
      nutrition: {
        calories: 0,
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
    setAlert({message: "", isSuccess: false});
    console.log(fields);
  }

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  // const [ingredients, setIngredients] = useState(initialState.fields.ingredients);
  // const [method, setMethod] = useState(initialState.fields.method);
  // const [nutrition, setNutrition] = useState(initialState.fields.nutrition);

  const handleFieldChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFields({...fields, [name]: value});
  }

  return(
    <div className="add-recipe">
      <Alert message={alert.message} isSuccess={alert.isSuccess} />
      <h2 className="h2">New Recipe</h2>
      <form onSubmit={handleAddRecipe}>
        <Alert message={alert.message} success={alert.isSuccess} />
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
          <AddIngredient />
        </label>

      </form>
    </div>
  )
}


export default AddRecipe;