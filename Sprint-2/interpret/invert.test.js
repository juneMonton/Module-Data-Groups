const invert = require('./invert.js');

// testing basic inversion
test('inverts keys and values', () => {
  expect(invert({a: 1})).toEqual({"1": "a"});
});

// testing with multiple properties
test('inverts object with multiple properties', () => {
  expect(invert({a: 1, b: 2})).toEqual({"1": "a", "2": "b"});
});

// testing the example from the comments
test('inverts x and y coordinates', () => {
  expect(invert({x: 10, y: 20})).toEqual({"10": "x", "20": "y"});
});

// testing with empty object
test('returns empty object when given empty object', () => {
  expect(invert({})).toEqual({});
});

// testing with string values
test('works with string values', () => {
  expect(invert({name: 'john', city: 'london'})).toEqual({'john': 'name', 'london': 'city'});
});