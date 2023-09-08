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
        <div className="ingredient-editor p-4 bg-gray-100 rounded-lg">
            <div className="mb-4 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter ingredient..."
                    className="flex-grow p-2 border rounded-lg mr-2"
                />
                <button onClick={addIngredient} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Add
                </button>
            </div>

            <ul>
                {value.map((ingredient, index) => (
                    <li key={index} className="flex justify-between items-center bg-white p-2 mb-2 rounded-lg shadow-md">
                        {ingredient}
                        <button
                            onClick={() => removeIngredient(index)}
                            className="text-red-500 hover:text-red-600"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientEditor;

