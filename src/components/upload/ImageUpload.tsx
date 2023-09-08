"use client"
import React, {useEffect, useState} from 'react';
import {AiOutlineLoading} from "react-icons/ai";
import {generateRecipes} from "@/api/generateRecipes";
import IngredientEditor from "@/components/IngredientEditor";
import {useTypewriter} from "@/components/upload/useTypewriter";

const ImageUpload = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipe, setRecipe] = useState("")
    const [animatedRecipe] = useTypewriter(recipe);

    useEffect(() => {
        if (!imagePreview) {
            return
        }
        setProcessing(true);
        setTimeout(() => {
            setImage("/looking-1.png");
            setTimeout(() => {
                setImage("/looking-2.png");
                setTimeout(() => {
                    setImage("/looking-3.png");
                    setTimeout(() => {
                        setImage("/recognized.png");
                        setTimeout(() => {
                            setImage("/recognized-with-text.png");
                            setProcessing(false);
                            setIngredients(['butter', 'red pepper', 'yellow pepper']);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
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
        const result = await generateRecipes(ingredients);
        setRecipe(result)
        setProcessing(false);
    }

    if (recipe) {
        return <div className="flex flex-col">
            <p className="text-white text-lg" dangerouslySetInnerHTML={{__html: animatedRecipe}}>
            </p>
        </div>
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
                        className="max-w-md border rounded-lg shadow-lg h-[300px]"
                    />
                </div>
            )}
            {
                processing && <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                    <AiOutlineLoading className="animate-spin" size={64}/>
                    <p className="text-white font-bold text-2xl">Processing...</p>
                </div>
            }

            {ingredients.length > 0 && <IngredientEditor value={ingredients} onChange={setIngredients}/>}

            {ingredients.length > 0 &&
                <button
                    onClick={handleGenerate}
                    className="cursor-pointer mt-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                    Generate recipes
                </button>
            }
        </div>
    </div>
};

export default ImageUpload;
