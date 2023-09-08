import React, { useState } from 'react';

const IngredientEditor = ({ value, onChange }: any) => {
    const [input, setInput] = useState('');

    const addIngredient = () => {
        if (input.trim()) {
            onChange([...value, input.trim()]);
            setInput('');
        }
    };

    const removeIngredient = (index: any) => {
        const newIngredients = [...value];
        newIngredients.splice(index, 1);
        onChange(newIngredients);
    };

    return (
        <div className="ingredient-editor p-4 bg-g bg-black text-white rounded-lg shadow-lg w-full mt-4">
            <div className="mb-4 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter ingredient..."
                    className="flex-grow p-2 border border-black rounded-lg mr-2 bg-gray-800 text-white"
                />
                <button onClick={addIngredient} className="bg-gradient-to-br from-blue-500 to-pink-500 p-2 rounded-lg font-blod">
                    Add
                </button>
            </div>

            <ul>
                {value.map((ingredient, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-800 p-2 mb-2 rounded-lg shadow-md">
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