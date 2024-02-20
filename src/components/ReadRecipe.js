import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ReadRecipe.css";

function ReadRecipe() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch(`https://jikoni-vercel.vercel.app/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    if (!recipe) return <h2>Loading...</h2>;

    const handleBack = () => {
        navigate(-1);
    };
    return (
        <>
            <div className="view-recipe-container">
                <h2>{recipe.name}</h2>
                <img src={recipe.image} alt="food"/>
                <div class="recipe-container">
                    <div class="recipe-feature">
                        <p>Cuisine: {recipe.cuisine}</p>
                    </div>
                    <div class="recipe-feature">
                        <p>Difficulty: {recipe.difficulty}</p>
                    </div>
                    <div class="recipe-feature">
                        <p>Prep time: {recipe['prep-time']}</p>
                    </div>
                    <div class="recipe-feature">
                        <p>Cooking time: {recipe['cook-time']}</p>
                    </div>
                    <div class="recipe-feature">
                        <p>Total: {recipe['total-time']}</p>
                    </div>
                    <div class="recipe-feature">
                        <p>Serving: {recipe.serving}</p>
                    </div>
                </div>
                <p>{recipe.description}</p>
                <ul><h4>Ingredients</h4>
                {recipe.ingredients.map((ingredient, index)=>(
                    <li key={index}>
                        {ingredient}
                    </li>
                ))}
                </ul>
                <ol> <h4>Instructions</h4>
                    {recipe.instructions.map((intstruction, index)=>(
                        <li key={index}>
                            {intstruction}
                        </li>
                    ))}
                </ol>
                <button onClick={handleBack}>Back to Food Page</button>
            </div>
        </>
    )
}

export default ReadRecipe;