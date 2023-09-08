"use client"
import React, {useEffect, useState} from 'react';
import {AiOutlineLoading} from "react-icons/ai";

async function generateRecipes(ingredients: string[]) {
    "use server"
    // Call the chatgpt api to generate recipes based on ingredients
    const apiKey = process.env.OPENAI_API_KEY; // Make sure to store your API key in a .env.local file
    const prompt = `Generate a recipe using the following ingredients: ${ingredients.join(', ')}`;

    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt,
            max_tokens: 500, // Limit to 500 tokens, adjust as needed
        }),
    });

    const data = await response.json();
    return data.choices?.[0]?.text?.trim();
}

const ImageUpload = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState<string[]>([]);

    useEffect(() => {
        if (imagePreview) {
            setProcessing(true);
        }
        setTimeout(() => {
            setImage("https://i.imgur.com/2lZ4G6J.jpg");
            setProcessing(false)
        }, 5000);
    }, [imagePreview]);

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as any);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    async function handleGenerate() {
        setProcessing(true);
        generateRecipes(ingredients);
    }

    return <div className="bg-gray-900 p-8 rounded-lg w-full">
        <div className="flex flex-col items-center">
            {
                !imagePreview && <label
                    htmlFor="fileInput"
                    className="cursor-pointer bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                    Take a photo
                </label>
            }
            <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={onFileChange}
                accept="image/*"
            />
            {imagePreview && (
                <div className="mt-4">
                    <img
                        src={image || imagePreview}
                        alt="Preview"
                        className="max-w-md border rounded-lg shadow-lg"
                    />
                </div>
            )}
            {
                processing && <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                    <AiOutlineLoading className="animate-spin" size={64} />
                    <p className="text-white font-bold text-2xl">Processing...</p>
                </div>
            }

            {ingredients.length > 0 && <IngredientEditor value={ingredients} onChange={setIngredients} /> }

            {ingredients.length > 0 &&
                <button
                    onClick={handleGenerate}
                    className="cursor-pointer bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                    Generate recipes
                </button>
            }
        </div>
    </div>
};

export default ImageUpload;
