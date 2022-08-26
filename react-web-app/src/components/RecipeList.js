import React from 'react';
import RecipeBox from './RecipeBox';

const RecipeList = ( {recipes, onDelete} ) => {
    return (
        <div className='recipe-list'>
            {recipes.map ((recipe) => (
                <RecipeBox key={recipe.id} recipe={recipe} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default RecipeList;