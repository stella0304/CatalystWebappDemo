import React, { useState } from "react";

const AddRecipe = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [method, SetMethod] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name || !ingredients || !method) {
            alert('Cannot leave fields empty');
            return;
        }

        onAdd({name, ingredients, method});

        setName('');
        setIngredients('');
        SetMethod('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Ingredients</label>
                <input type='text' value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Method</label>
                <input type='text' value={method} onChange={(e) => SetMethod(e.target.value)}/>
            </div>

            <input type='submit' value='Add Recipe' className='btn btn-block'/>
        </form>
    )
}

export default AddRecipe;