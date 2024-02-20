import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Food from './components/Food';
import ReadRecipe from './components/ReadRecipe';
import AddRecipe from './components/AddRecipe';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    fetch('https://jikoni-vercel.vercel.app/recipes')
    .then((res) => res.json())
    .then((data) => setRecipes(data))
    .catch(error => {
      console.error("Error fetching data:", error);
    })
  }, [recipes])

  const images = recipes.map((recipe) => recipe.image)  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home images={images}/>}/>
        <Route exact path='/food/:id' element={<ReadRecipe/>}/>
        <Route exact path='/food' element={<Food recipes={recipes}/>}/>
        <Route path = '/add'  element={<AddRecipe recipes={recipes} setRecipes={setRecipes}/>}  />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
