"use client"
import React, { useState } from 'react';

const IngredientEditor = ({ value, onChange }) => {
    const [input, setInput] = useState('');

    const addIngredient = () => {
        if (input.trim()) {
            onChange([...value, input.trim()]);
            setInput('');
        }
    };

    const removeIngredient = (index) => {
        const newIngredients = [...value];
        newIngredients.splice(index, 1);
        onChange(newIngredients);
    };

    return (
        <div className="ingredient-editor">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter ingredient..."
            />
            <button onClick={addIngredient}>Add</button>

            <ul>
                {value.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => removeIngredient(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientEditor;
