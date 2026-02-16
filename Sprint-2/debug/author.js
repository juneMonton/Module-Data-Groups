// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem


/*

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}

Prediction & Explanation:
This code will throw an error: TypeError: author is not iterable.
The problem is that for...of loops are designed to iterate over iterable objects like arrays, strings, maps, and sets. Plain JavaScript objects are not iterable by default.
To loop through object values, you have three options:

Object.values(author) - gets an array of values
Object.keys(author) - gets an array of keys
Object.entries(author) - gets an array of [key, value] pairs


*/

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}