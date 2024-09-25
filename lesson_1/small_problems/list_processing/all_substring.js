function substrings(str) {
  let resultString = [];
  for (let index = 0; index < str.length; index++) {
    for (let letter = 0; letter < str.length; letter++) {
      resultString.push(str.substring(0, letter + 1));
    };
    let arr = str.split('').shift()
    console.log(arr);
    
  }
  
  return resultString;
}

console.log(substrings("abcde"));
