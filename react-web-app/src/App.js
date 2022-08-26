import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";

function App() {

  const [showAdd, setShowAdd] = useState(false);
  const [recipes, setRecipes] = useState([]);

  // runs upon rendering page
  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromApi = await fetchRecipes();
      setRecipes(recipesFromApi);
    }

    getRecipes();
  }, []);

  // fetch recipes from backend
  const fetchRecipes = async () => {
    const res = await fetch("/getAll");
    const data = await res.json();

    return data;
  }

  // adds recipe to server
  const addRecipe = async (recipe) => {
    await fetch("/addOne", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(recipe),
    });

    const recipesFromApi = await fetchRecipes();
    setRecipes(recipesFromApi);
  }
  
  // delete recipe from server
  const deleteRecipe = async (id) => {
    const toDelete = {_id: id};

    console.log(JSON.stringify(toDelete));

    await fetch('/removeOne', { 
      method: 'DELETE', 
      body: JSON.stringify(toDelete),
    });

    const recipesFromApi = await fetchRecipes();
    setRecipes(recipesFromApi);
  }

  return (
    <div style={{backgroundColor: '#c5cae9', minHeight: '1000px', paddingTop: '20px',}}>
      <div className='container'>
        <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
        {showAdd && <AddRecipe onAdd={addRecipe}/>}
        <div>
          {(recipes.length <= 0) ? (
            <p>Loading...</p>
          ) : ( <RecipeList recipes={recipes} onDelete={deleteRecipe} /> )}
        </div>
      </div>
    </div>);
}

export default App;
