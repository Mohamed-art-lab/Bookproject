import React, { useState, useEffect } from 'react';
import "./Featured.css";
import { NavLink } from 'react-router-dom';

const FeaturedRecipe = () => {
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const apiURL = 'https://jikoni-vercel.vercel.app/recipes';

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomRecipe = data[randomIndex];
          setFeaturedRecipe(randomRecipe);
        } else {
          console.error('Invalid:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="featured-recipe-container">
      <h2 className="featured-recipe-title">Featured Recipe</h2>
      {featuredRecipe ? (
        <div className="featured-recipe">
          <div className="recipe-details">
            <h2>Our Featured Recipe of the Week</h2>
            <h3 className="recipe-title">{featuredRecipe.name}</h3>
            <p className="recipe-description">Cuisine: {featuredRecipe.cuisine}</p>
            <p className="recipe-description">Difficulty: {featuredRecipe.difficulty}</p>
            <p className='recipe-button'>
              <NavLink to={`/food/${featuredRecipe.id}`}>View Recipe</NavLink>
            </p>
          </div>
          <img
            src={featuredRecipe.image} 
            alt={featuredRecipe.name}
            className="recipe-image"
          />
        </div>
      ) : (
        <p>Loading featured recipe...</p>
      )}
    </div>
  );
};

export default FeaturedRecipe;
