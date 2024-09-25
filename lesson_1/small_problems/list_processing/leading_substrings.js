function leadingSubstrings(str) {
  let resultString = [];
  for (let letter = 0; letter < str.length; letter++) {
    resultString.push(str.substring(0, letter + 1));
  }
  return resultString;
}

console.log(leadingSubstrings("xyzzy"));
