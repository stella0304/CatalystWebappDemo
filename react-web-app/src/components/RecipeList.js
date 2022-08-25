import React from 'react';
import RecipeBox from './RecipeBox';

const RecipeList = ( {recipes} ) => {
    return (
        <div className='recipe-list'>
            {recipes.map ((recipe) => (
                <RecipeBox key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeList