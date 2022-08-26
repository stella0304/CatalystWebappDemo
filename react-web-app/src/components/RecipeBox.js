import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const RecipeBox = ({ recipe, onDelete }) => {
    const [hover, setHover] = useState(false);


    return (
        <div className='recipe' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <h3>
              {recipe.name}
              {hover && <FaTimes
                style={{ cursor: 'pointer' }}
                //onClick={logId}
                onClick={() => onDelete(recipe._id)}
              />}
            </h3>
            <p><b>Ingredients:</b> {recipe.ingredients}</p>
            <p><b>Method:</b> {recipe.method}</p>
        </div>
    )
}

export default RecipeBox;