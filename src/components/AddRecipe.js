import React, { useState } from 'react';
import "./AddRecipe.css"
import { useNavigate } from 'react-router-dom'

function AddRecipe() {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    id: 0, 
    name: '',
    cuisine: '',
    difficulty: '',
    'prep-time': '',
    'cook-time': '',
    'total-time': '',
    serving: '',
    image: '',
    ingredients: [],
    instructions: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientsChange = (e, index) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = e.target.value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleInstructionsChange = (e, index) => {
    const newInstructions = [...recipe.instructions];
    newInstructions[index] = e.target.value;
    setRecipe({...recipe, instructions: newInstructions})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jikoni-vercel.vercel.app/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipe posted successfully:', data);
      })
      .catch((error) => {
        console.error('Error posting recipe:', error);
      })
      navigate('/food')
  };

  return (
    <div>
      <h2 className='recipe-heading'>Add Recipe</h2>
      <form className='recipe-form' onSubmit={handleSubmit}>
        <label className='form-label'>
          Recipe Name:
          <input className='form-input' type="text" name="name" value={recipe.name} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Cuisine:
          <input className='form-input' type="text" name="cuisine" value={recipe.cuisine} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Difficulty:
          <input className='form-input' type="text" name="difficulty" value={recipe.difficulty} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Prep Time:
          <input className='form-input' type="text" name="prep-time" value={recipe['prep-time']} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Cook Time:
          <input className='form-input' type="text" name="cook-time" value={recipe['cook-time']} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Total Time:
          <input className='form-input' type="text" name="total-time" value={recipe['total-time']} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Serving:
          <input className='form-input' type="text" name="serving" value={recipe.serving} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Image URL:
          <input className='form-input' type="text" name="image" value={recipe.image} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Ingredients:
          {recipe.ingredients.map((ingredient, index) => (
            <input
              className='form-input'
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientsChange(e, index)}
              required
            />
          ))}
          <button type="button" onClick={() => setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] })}>
            Add Ingredient
          </button>
        </label><br/>
        <label className='form-label'>
          Instructions:
          {recipe.instructions.map((instruction, index) => (
            <input
              className='form-input'
              key={index}
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionsChange(e, index)}
              required
            />
          ))}
          <button type="button" onClick={() => setRecipe({ ...recipe, instructions: [...recipe.instructions, ''] })}>
            Add Instruction
          </button>
        </label><br/>    
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;