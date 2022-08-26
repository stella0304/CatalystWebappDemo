import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";

function App() {

  const [showAdd, setShowAdd] = useState(false);
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Fried Chicken',
      ingredients: 'leftover kfc',
      method: 'Chuck leftover kfc in the microwave for 2 minutes, or for a fancier twist, airfrier for 5 minutes.',
    },
    {
      id: 2,
      name: 'Noodles',
      ingredients: 'instant noodles',
      method: 'Cook noodles in pan, add packet flavouring to taste.',
    },
    {
      id: 3,
      name: 'Sandwich',
      ingredients: 'bread',
      method: 'Just eat the bread and pretend like there is ham and cheese.',
    },
    {
      id: 4,
      name: 'Fried rice',
      ingredients: 'rice, soysauce',
      method: 'Add soysauce to rice to taste.',
    },
  ]);

  /*
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/recipes").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, []);
  */

  return (
    <div style={{backgroundColor: 'skyblue', height: '1000px'}}>
      <div className='container'>
        <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
        {showAdd && <AddRecipe />}
        <div>
          {(recipes.length <= 0) ? (
            <p>Loading...</p>
          ) : ( <RecipeList recipes={recipes}/> )}
        </div>
      </div>
    </div>);
}

export default App;
