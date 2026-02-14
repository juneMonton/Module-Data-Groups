function sum(elements) {
  // i need to start counting from 0
  let total = 0;
  
  // go through each item in the array
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    
    // only add it if it's a number
    if (typeof element === 'number') {
      // add this number to my total
      total = total + element;
    }
  }
  
  return total;
}

module.exports = sum;