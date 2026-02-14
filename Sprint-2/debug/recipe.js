// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?


/*
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);

This code will not work as intended. The issue is ${recipe} at the end - you're trying to interpolate the entire object, which will just print [object Object], not the ingredients array.
You need to access recipe.ingredients and either:

Loop through the array
Use .join('\n') to create newline-separated strings

*/



const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join('\n')}`);