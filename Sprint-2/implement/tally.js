function tally(items) {
  // check if its actually an array
  if (!Array.isArray(items)) {
    throw new Error('Input must be an array');
  }
  
  // make empty object to store counts
  const counts = {};
  
  // go through each item in the array
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    
    // if we've seen this item before, add 1 to its count
    if (counts[item]) {
      counts[item] = counts[item] + 1;
    } else {
      // first time seeing this item, set count to 1
      counts[item] = 1;
    }
  }
  
  return counts;
}

module.exports = tally;