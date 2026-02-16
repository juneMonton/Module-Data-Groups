// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  // using for...of loop instead of regular for loop
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
