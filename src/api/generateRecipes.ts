export async function generateRecipes(ingredients: string[]) {
    "use client"
    if(Math.random() > 0.25) {
        return "<h1>Buttered Red and Yellow Pepper Saute</h1>\n" +
            "<h2>Ingredients:</h2>\n" +
            "<ul>\n" +
            "    <li>2 tablespoons of butter</li>\n" +
            "    <li>1 red pepper, thinly sliced</li>\n" +
            "    <li>1 yellow pepper, thinly sliced</li>\n" +
            "</ul>\n" +
            "\n" +
            "<h2>Instructions:</h2>\n" +
            "<ol>\n" +
            "    <li>In a large skillet, melt the butter over medium heat.</li>\n" +
            "    <li>Add the sliced red and yellow peppers to the skillet.</li>\n" +
            "    <li>Saute the peppers for 5-7 minutes or until they become tender and slightly caramelized.</li>\n" +
            "    <li>Remove from heat and serve hot as a delicious side dish.</li>\n" +
            "</ol>";
    }

    if(Math.random() > 0.5) {
        return "<h1>Buttered Red and Yellow Pepper Saute</h1>\n" +
            "<h2>Ingredients:</h2>\n" +
            "<ul>\n" +
            "    <li>2 tablespoons of butter</li>\n" +
            "    <li>1 red pepper, thinly sliced</li>\n" +
            "    <li>1 yellow pepper, thinly sliced</li>\n" +
            "</ul>\n" +
            "\n" +
            "<h2>Instructions:</h2>\n" +
            "<ol>\n" +
            "    <li>In a large skillet, melt the butter over medium heat.</li>\n" +
            "    <li>Add the sliced red and yellow peppers to the skillet.</li>\n" +
            "    <li>Saute the peppers for 5-7 minutes or until they become tender and slightly caramelized.</li>\n" +
            "    <li>Remove from heat and serve hot as a delicious side dish.</li>\n" +
            "</ol>"
    }


return "<h1 class='text-xl'>Delicious Pepper Butter Recipe</h1>\n" +
    "        <p>This mouthwatering pepper butter recipe combines the rich flavors of butter with the vibrant colors and flavors of red and yellow peppers.</p>\n" +
    "        \n" +
    "        <h2 class='text-lg my-2'>Ingredients:</h2>\n" +
    "        <ul>\n" +
    "            <li>2 tablespoons of butter</li>\n" +
    "            <li>1 red pepper, diced</li>\n" +
    "            <li>1 yellow pepper, diced</li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <h2 class='text-lg my-2'>Instructions:</h2>\n" +
    "        <ol>\n" +
    "            <li>In a medium-sized pan, melt the butter over medium heat.</li>\n" +
    "            <li>Add the diced red and yellow peppers to the melted butter.</li>\n" +
    "            <li>Sauté the peppers for about 5-7 minutes until they become tender and slightly caramelized.</li>\n" +
    "            <li>Remove from heat and let the pepper butter cool for a few minutes.</li>\n" +
    "            <li>Transfer the pepper butter to a small jar or container for serving.</li>\n" +
    "        </ol>\n" +
    "\n" +
    "        <p>Your delicious pepper butter is ready to serve! It's perfect as a spread for bread, a topping for grilled meats, or as a flavorful addition to your favorite dishes.</p>\n" +
    "    ";
}