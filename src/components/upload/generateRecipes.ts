"use server"

export async function generateRecipes(ingredients: string[]) {
    // Call the chatgpt api to generate recipes based on ingredients
    const apiKey = process.env.OPENAI_API_KEY; // Make sure to store your API key in a .env.local file
    const prompt = `Generate a recipe using the following ingredients: ${ingredients.join(', ')}. Reply with HTML only. No other text.`;

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt,
            model: "text-davinci-003",
            max_tokens: 500, // Limit to 500 tokens, adjust as needed
        }),
    });

    const data = await response.json();
    return data.choices?.[0]?.text?.trim();
}