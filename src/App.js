import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeCreate from "./RecipeCreate";
import recipeData from "./data";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main className="container">
      <header className="bg-primary bg-gradient text-white rounded-bottom">
        <h1 className="text-center py-5 display-5">Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </main>
  );
}

export default App;
