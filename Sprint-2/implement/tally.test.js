const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("tally with one item returns count of 1", () => {
  expect(tally(['a'])).toEqual({ a: 1 });
});


// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally counts duplicate items correctly", () => {
  expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

// testing with mixed items
test("tally counts multiple different items", () => {
  expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
});

// testing with more complex array
test("tally works with longer arrays", () => {
  expect(tally(['dog', 'cat', 'dog', 'bird', 'cat', 'dog'])).toEqual({
    dog: 3,
    cat: 2,
    bird: 1
  });
});

// testing with numbers
test("tally works with numbers", () => {
  expect(tally([1, 2, 2, 3, 3, 3])).toEqual({ 1: 1, 2: 2, 3: 3 });
});

// testing error handling
test("tally throws error when passed a string", () => {
  expect(() => tally('not an array')).toThrow('Input must be an array');
});

test("tally throws error when passed null", () => {
  expect(() => tally(null)).toThrow('Input must be an array');
});