const createLookup = require("./lookup.js");

// testing with multiple country currency pairs
test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
  const result = createLookup(countryCurrencyPairs);
  
  expect(result).toEqual({
    'US': 'USD',
    'CA': 'CAD'
  });
});

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
test("works with different country codes", () => {
  const pairs = [['GB', 'GBP'], ['JP', 'JPY'], ['EU', 'EUR']];
  const result = createLookup(pairs);
  
  expect(result).toEqual({
    'GB': 'GBP',
    'JP': 'JPY',
    'EU': 'EUR'
  });
});


test("returns empty object when given empty array", () => {
  const result = createLookup([]);
  expect(result).toEqual({});
});