function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // split only on the first = so values can contain =
    const equalIndex = pair.indexOf("=");
    
    if (equalIndex === -1) {
      // no = found, treat whole thing as key with empty value
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, equalIndex);
      const value = pair.slice(equalIndex + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;