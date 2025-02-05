/*
  Problem:
    + input is non empty string
    + output array with string an interger
    + string is substring of the string
    + interger is the amount the substring occurs in the string 
    + amoutn should be the highest
    
  Examples: enough examples

  Data types: strings and integer

  Alogrithm:
    + xyzxyzxyz => add x to x 8 times (length of the array)
    + compare substring to fullstring 
    + xy + xy ...
    + compare again
    + if comparison is true: return not multi substring and the times it was multiplied

*/

function repeatedSubstring(fullString) {
  let maxIndex = Math.ceil(fullString.length / 2);
  
  for(let index = 0; index < maxIndex; index++) {
    let counter = 1;
    let subString = fullString.slice(0, index + 1);
    let fullSubString = subString;
    while(fullSubString.length < fullString.length) {
      counter += 1;
      fullSubString += subString;
    }
    
    if (fullString === fullSubString) {
      return [subString, counter]
    }
    
  
  }
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));



