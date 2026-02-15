function contains(obj, property) {
  // check if its actually an object first
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return false;
  }
  
  // see if the property is in the object
  return property in obj;
}


module.exports = contains;
