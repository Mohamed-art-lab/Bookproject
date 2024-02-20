import { useState } from "react";
import "./Search.css"

function Search({ recipes }){

    const[food,setFood] = useState("")
    const[searchResult, setSearchResult] = useState(null)
    const[error, setError] = useState("")

    function handleSearch(event){
        setFood(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        const result = recipes.find(recipe => recipe.name.toLowerCase() === food.toLowerCase())
            if(result){
                setSearchResult(result);
                setError("")
            }else{
                setSearchResult(null)
                console.log('Food Not Found')    
                setError("Oops! The Food you are looking for is not found. Please try agin later.")  
            }            
    }
    
    return (  
        <div className="searchbar-btn">
            <form className="searchbar" onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearch} placeholder="Food..."/>
                <button type="submit" >Search</button>
            </form>

            {error && <p>{error}</p>}

            {searchResult && (
                <div className="results-container">
                    <h2>{searchResult.name}</h2>
                    <p>Cuisine: {searchResult.cuisine}</p>
                    <p>Difficulty: {searchResult.difficulty}</p>
                    <p>It takes {searchResult['prep-time']} to prepare</p>
                    <p>It takes {searchResult['cook-time']} to cook</p>
                    <p>It takes {searchResult['total-time']} to cook and prepare</p>
                    <p>The meal serves {searchResult.serving} people</p>
                    <img src={searchResult.image} alt="food"/>
                    <p>Description: {searchResult.description}</p>
                    <ul>Ingredients:
                    {searchResult.ingredients.map((ingredient, index)=>(
                        <li key={index}>
                            {ingredient}
                        </li>
                    ))}

                    </ul>
                    <ol> Instructions:
                    {searchResult.instructions.map((intstruction, index)=>(
                        <li key={index}>
                            {intstruction}
                        </li>
                    ))}
                    </ol>
                </div>
            )}

        </div>
    );
}
 
export default Search;