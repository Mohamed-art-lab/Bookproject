// Fetch for displaying only the name and image
fetch('https://jikoni-vercel.vercel.app/recipes')
  .then(response => response.json())
  .then(data => {
    // Access the recipes array in the JSON data
    const recipes = data.recipes;

    // Display only the name and image
    recipes.forEach(recipe => {
      console.log('Name:', recipe.name);
      console.log('Image:', recipe.image);
      console.log('\n');
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Fetch for displaying all information
fetch('https://jikoni-vercel.vercel.app/recipes') 
  .then(response => response.json())
  .then(data => {
    // Access the recipes array in the JSON data
    const recipes = data.recipes;

    // Display all information
    recipes.forEach(recipe => {
      console.log('Recipe ID:', recipe.id);
      console.log('Name:', recipe.name);
      console.log('Cuisine:', recipe.cuisine);
      console.log('Difficulty:', recipe.difficulty);
      console.log('Prep Time:', recipe['prep-time']);
      console.log('Cook Time:', recipe['cook-time']);
      console.log('Total Time:', recipe['total-time']);
      console.log('Serving:', recipe.serving);
      console.log('Image:', recipe.image);

      // Display ingredients
      console.log('Ingredients:');
      recipe.ingredients.forEach(ingredient => {
        console.log('-', ingredient);
      });

      // Display instructions
      console.log('Instructions:');
      recipe.instructions.forEach((instruction, index) => {
        console.log(`${index + 1}. ${instruction}`);
      });

      console.log('\n');
    });
  })
  .catch(error => console.error('Error fetching data:', error));
