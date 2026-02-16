function createLookup(pairs) {
  // make an empty object to store the lookup
  const lookup = {};
  
  // go through each pair in the array
  for (let i = 0; i < pairs.length; i++) {
    const countryCode = pairs[i][0];
    const currencyCode = pairs[i][1];
    
    // add the country code as key and currency code as value
    lookup[countryCode] = currencyCode;
  }
  
  return lookup;
}

module.exports = createLookup;