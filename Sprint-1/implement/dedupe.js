function dedupe(array) {
  const seen = [];
  
  for (let i = 0; i < array.length; i++) {
    if (!seen.includes(array[i])) {
      seen.push(array[i]);
    }
  }
  
  return seen;
}

module.exports = dedupe;
