// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

*/

// a) What is the current return value when invert is called with { a : 1 }
//{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
/*
Object.entries() returns an array of [key, value] pairs from the object.
Example: Object.entries({a: 1, b: 2}) returns [["a", 1], ["b", 2]]
*/

// d) Explain why the current return value is different from the target output
/*
The problem is invertedObj.key = value - this uses the literal string "key" instead of the variable key. It should be invertedObj[key] = value with square brackets to use the variable's value as the property name.
Also, we need to swap - the value should become the key and the key should become the value!
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// swap the keys and values in an object
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // use square brackets so value becomes the key
    // and key becomes the value
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;