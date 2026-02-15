// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

// testing multiple values with = signs
test("handles multiple params where values contain =", () => {
  expect(parseQueryString("equation=x=y+1&formula=a=b+c")).toEqual({
    "equation": "x=y+1",
    "formula": "a=b+c"
  });
});

// testing when theres no value after =
test("handles empty values", () => {
  expect(parseQueryString("name=&age=25")).toEqual({
    "name": "",
    "age": "25"
  });
});

// testing when theres no = at all
test("handles keys without values", () => {
  expect(parseQueryString("flag&debug")).toEqual({
    "flag": "",
    "debug": ""
  });
});

// testing normal case
test("parses normal query strings", () => {
  expect(parseQueryString("name=john&age=30&city=london")).toEqual({
    "name": "john",
    "age": "30",
    "city": "london"
  });
});

// testing single param
test("handles single parameter", () => {
  expect(parseQueryString("search=test")).toEqual({
    "search": "test"
  });
});