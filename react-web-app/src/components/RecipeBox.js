import React from 'react'

const RecipeBox = ({ recipe }) => {
    return (
        <div className='recipe'>
            <h3>{recipe.name}</h3>
            <p><b>Ingredients:</b> {recipe.ingredients}</p>
            <p><b>Method:</b> {recipe.method}</p>
        </div>
    )
}

export default RecipeBox;