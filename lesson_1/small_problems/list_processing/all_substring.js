function substrings(str) {
    let resultArray = [];
    
    for (let letter = 0; letter < str.length; letter++) {
      resultArray.push(str.substring(0, letter + 1));
    }
    return resultArray;
  }

function allSubstrings(str) {
  let result = [];
  for (let index = 0; index < str.length; index++) {
    let strArray = substrings(str.substring(index, str.length + 1));    
    strArray.forEach((string) => result.push(string));    
  }
  return result;
} 
  
console.log(allSubstrings('abcde'));
  