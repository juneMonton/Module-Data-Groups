function findMax(elements) {
  // Start with -Infinity (smaller than any number)
  let max = -Infinity;
  
  // Look at each element in the array
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    
    // Check if it's actually a number
    if (typeof element === 'number') {
      // If this number is bigger than our current max, update max
      if (element > max) {
        max = element;
      }
    }
  }
  
  return max;
}

module.exports = findMax;